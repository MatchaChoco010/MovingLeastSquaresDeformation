function domReadyAsync() {
  return new Promise<null>(resolve => {
    if (/^loaded|^i|^c/.test(document.readyState)) return resolve()
    document.addEventListener('DOMContentLoaded', () => resolve(), {
      once: true
    })
  })
}

export default domReadyAsync
