const useOn = (typeevent, el, callback) => {
  el.addEventListener(typeevent, (e) => callback(e))
}
export { useOn }
