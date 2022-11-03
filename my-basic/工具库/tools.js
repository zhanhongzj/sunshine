// (function () {
  function debounce(fn, delay) {
    let timer = null;
    function _debounce(...arg) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, arg);
        timer = null;
      }, delay);
    }
    _debounce.onCancel = () => {
      if (timer) clearTimeout(timer);
    };
    return _debounce;
  }
// })();
