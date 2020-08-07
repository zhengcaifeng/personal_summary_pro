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
  //调用.then()指定成功和失败的回调，返回一个新的promise
  //有可能是pending状态
  // 也有可能是resolved状态
  // 或者rejected
  Promise.prototype.then = function (onresolved, onrejected) {
    const self = this
    // if (self.state === 'pengding') {
    //   self.callbacks.push({ onresolved, onrejected })
    // } else if (self.state === 'resolved') {
    //   setTimeout(() => {
    //     onresolved(self.data)
    //   })
    // } else {
    //   //reject状态
    //   setTimeout(() => {
    //     onrejected(self.data)
    //   })
    // }

    return new Promise((resolve, rejecte) => {
      if (self.state === 'pengding') {
        self.callbacks.push({ onresolved, onrejected })
      } else if (self.state === 'resolved') {
        setTimeout(() => {
          onresolved(self.data)
          //如果抛出异常.就会失败 reason- err
          //如果结果不是promise类型 ，就是返回的值
          //返回的是promise ,根据这个promise 的结果 ，
        })
      } else {
        //reject状态
        setTimeout(() => {
          onrejected(self.data)
        })
      }
    })
  }
  Promise.race = function () {}
  Promise.all = function () {}
  window.Promise = Promise
})()
