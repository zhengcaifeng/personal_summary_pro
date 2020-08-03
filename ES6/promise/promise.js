;(function () {
  function Promise(excutor) {
    const self = this
    self.state = 'pending'
    self.data = null
    self.callbacks = []
    function resolve(val) {
      if (self.state !== 'pending') {
        return
      }
      self.state = 'resolved'
      self.data = val
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksobj) => {
            callbacksobj.onresolved(val)
          })
        }, 0)
      }
    }
    function reject(reason) {
      if (self.state !== 'pending') {
        return
      }
      self.state = 'rejected'
      self.data = reason
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksobj) => {
            callbacksobj.onresolved(reason)
          })
        }, 0)
      }
    }

    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  Promise.prototype.then = function (onresolved, onrejected) {
    const self = this
    self.callbacks.push({ onresolved, onrejected })
  }
  Promise.race = function () {}
  Promise.all = function () {}
  window.Promise = Promise
})()
