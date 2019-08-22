import domReadyAsync from './domReadyAsync'

class V2d {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  add(v: V2d) {
    return new V2d(this.x + v.x, this.y + v.y)
  }
  sub(v: V2d) {
    return new V2d(this.x - v.x, this.y - v.y)
  }
  mul(v: V2d | number) {
    if (v instanceof V2d) {
      return new V2d(this.x * v.x, this.y * v.y)
    } else {
      return new V2d(this.x * v, this.y * v)
    }
  }
  div(v: V2d | number) {
    if (v instanceof V2d) {
      return new V2d(this.x / v.x, this.y / v.y)
    } else {
      return new V2d(this.x / v, this.y / v)
    }
  }
  dot(v: V2d | Matrix2d) {
    if (v instanceof V2d) {
      return this.x * v.x + this.y * v.y
    } else {
      return new V2d(
        this.x * v.m00 + this.y * v.m10,
        this.x * v.m01 + this.y * v.m11
      )
    }
  }
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
  clone() {
    return new V2d(this.x, this.y)
  }
}

class Matrix2d {
  m00: number
  m01: number
  m10: number
  m11: number

  constructor(m00: number, m01: number, m10: number, m11: number) {
    this.m00 = m00
    this.m01 = m01
    this.m10 = m10
    this.m11 = m11
  }

  add(m: Matrix2d) {
    return new Matrix2d(
      this.m00 + m.m00,
      this.m01 + m.m01,
      this.m10 + m.m10,
      this.m11 + m.m11
    )
  }

  div(a: number) {
    return new Matrix2d(this.m00 / a, this.m01 / a, this.m10 / a, this.m11 / a)
  }

  dot(v: V2d) {
    return new V2d(
      this.m00 * v.x + this.m01 * v.y,
      this.m10 * v.x + this.m11 * v.y
    )
  }

  inverse() {
    const det = this.m00 * this.m11 - this.m01 * this.m10
    return new Matrix2d(this.m11, -this.m10, -this.m01, this.m00).div(det)
  }
}

class Mesh {
  ctx: CanvasRenderingContext2D
  x: number
  y: number
  vertices: V2d[]

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.vertices = []
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        this.vertices[i * this.x + j] = new V2d(
          (this.ctx.canvas.width / (this.x - 1)) * i,
          (this.ctx.canvas.height / (this.y - 1)) * j
        )
      }
    }
  }

  draw() {
    this.ctx.fillStyle = 'rgb(255, 120, 120)'
    this.ctx.strokeStyle = 'rgb(255, 120, 120)'

    this.ctx.beginPath()
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        if (i < this.x - 1) {
          this.ctx.moveTo(
            this.vertices[i * this.x + j].x,
            this.vertices[i * this.x + j].y
          )
          this.ctx.lineTo(
            this.vertices[(i + 1) * this.x + j].x,
            this.vertices[(i + 1) * this.x + j].y
          )
        }
        if (j < this.y - 1) {
          this.ctx.moveTo(
            this.vertices[i * this.x + j].x,
            this.vertices[i * this.x + j].y
          )
          this.ctx.lineTo(
            this.vertices[i * this.x + (j + 1)].x,
            this.vertices[i * this.x + (j + 1)].y
          )
        }
      }
    }
    this.ctx.stroke()
  }

  AffineMLSA: number[][] = []

  precompAffineMLS(dots: Dot[]) {
    let pa = new V2d(0, 0)
    for (const d of dots) {
      pa = pa.add(d.initPos)
    }
    pa = pa.div(dots.length)

    const w: number[][] = []

    for (let i = 0; i < this.vertices.length; i++) {
      w[i] = []
      for (let j = 0; j < dots.length; j++) {
        w[i][j] =
          1 /
          (0.01 +
            Math.pow(dots[j].initPos.sub(this.vertices[i]).magnitude(), 2))
      }

      let m = new Matrix2d(0, 0, 0, 0)
      for (let j = 0; j < dots.length; j++) {
        const ph = dots[j].initPos.sub(pa)
        m.m00 += ph.x * w[i][j] * ph.x
        m.m01 += ph.x * w[i][j] * ph.y
        m.m10 += ph.y * w[i][j] * ph.x
        m.m11 += ph.y * w[i][j] * ph.y
      }
      m = m.inverse()

      const t = this.vertices[i].sub(pa)
      const d = t.dot(m) as V2d
      this.AffineMLSA[i] = []
      for (let j = 0; j < dots.length; j++) {
        this.AffineMLSA[i][j] =
          // (d.dot(dots[j].initPos) as number) * w[i][j]
          (d.dot(dots[j].initPos.sub(pa)) as number) * w[i][j]
      }
    }

    console.log('finish precompute')
  }

  AffineMLS(dots: Dot[]) {
    let qa = new V2d(0, 0)
    for (const d of dots) {
      qa = qa.add(d.pos)
    }
    qa = qa.div(dots.length)

    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i] = qa
      for (let j = 0; j < dots.length; j++) {
        this.vertices[i] = this.vertices[i].add(
          dots[j].pos.sub(qa).mul(this.AffineMLSA[i][j])
        )
      }
    }
  }
}

class Dot {
  ctx: CanvasRenderingContext2D
  initPos: V2d
  pos: V2d

  constructor(ctx: CanvasRenderingContext2D, pos: V2d) {
    this.ctx = ctx
    this.initPos = pos
    this.pos = pos.clone()
  }

  reset() {
    this.pos.x = this.initPos.x
    this.pos.y = this.initPos.y
  }

  draw() {
    this.ctx.fillStyle = 'rgb(120, 120, 255)'
    this.ctx.strokeStyle = 'rgb(120, 120, 255)'
    this.ctx.fillRect(this.pos.x - 5, this.pos.y - 5, 10, 10)
  }

  hit(x: number, y: number) {
    return (
      this.pos.x - 5 < x &&
      x < this.pos.x + 5 &&
      (this.pos.y - 5 < y && y < this.pos.y + 5)
    )
  }
}

function createDotsAsync() {
  return new Promise<Dot[]>(resolve => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const button = document.getElementById('confirm-dots') as HTMLButtonElement
    button.disabled = true

    const dots: Dot[] = []

    const clickEventListener = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement
      const rect = target.getBoundingClientRect()
      const point = new V2d(evt.clientX - rect.left, evt.clientY - rect.top)
      const dot = new Dot(ctx, point)
      dot.draw()
      dots.push(dot)
      button.disabled = false
    }
    canvas.addEventListener('click', clickEventListener)

    button.addEventListener('click', () => {
      canvas.removeEventListener('click', clickEventListener)
      button.disabled = true
      resolve(dots)
    })
  })
}

async function main() {
  await domReadyAsync()

  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const resetButton = document.getElementById('reset') as HTMLButtonElement

  const mesh = new Mesh(ctx, 20, 20)
  mesh.draw()

  const dots = await createDotsAsync()
  mesh.precompAffineMLS(dots)

  function draw() {
    mesh.AffineMLS(dots)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mesh.draw()
    for (const d of dots) {
      d.draw()
    }
  }

  let targetDot: Dot | null = null
  canvas.addEventListener('mousedown', (evt: MouseEvent) => {
    const target = evt.target as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = evt.clientX - rect.left
    const y = evt.clientY - rect.top
    for (const d of dots) {
      if (d.hit(x, y)) {
        targetDot = d
        break
      }
    }
  })
  document.addEventListener('mousemove', (evt: MouseEvent) => {
    if (targetDot === null) return
    const target = evt.target as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = evt.clientX - rect.left
    const y = evt.clientY - rect.top
    targetDot.pos.x = x
    targetDot.pos.y = y
    draw()
  })
  document.addEventListener('mouseup', () => {
    targetDot = null
  })
  resetButton.addEventListener('click', () => {
    for (const d of dots) {
      d.reset()
    }
    draw()
  })
}
main()
