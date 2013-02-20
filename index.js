module.exports = serial;

function serial(/* [from,] to, [fn], [onComplete] */){

  var args  = Array.prototype.slice.call(arguments),
      from  = args.length > 2 ? args[0] : 0,
      to    = args.length > 2 ? args[1] : args[0],
      fn    = args.length > 2 ? args[2] : args[1],
      chain = { run: setFn, fn: setFn, error: onErrorCb, complete: onCompleteCb, done: onCompleteCb },

      onComplete, onError;

  setTimeout(loop, 0, from, undefined);

  return chain;

  function loop(i){

    if( i >= to ){
      onComplete && onComplete();
      return;
    }

    fn(function(error){

      if(error){
        onError && onError(error);
        return;
      }

      loop(i+1);

    }, i);

  };

  function onErrorCb(cb){
    onError = cb;
    return chain;
  }

  function onCompleteCb(cb){
    onComplete = cb;
    return chain;
  }

  function setFn(newFn){
    fn = newFn;
    return chain;
  }

}
