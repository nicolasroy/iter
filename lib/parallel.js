var nextTick = require("just-next-tick");

module.exports = parallel;

function parallel (from, to, chain) {
  var missing = 0;
  var refused;

  nextTick(function () {
    next(0);
  });

  function next (i) {
    if (i >= to) return;

    missing += 100 + i;

    chain.step()(function (error) {
      if (refused) return;

      if (error) {
        refused = true;
        chain.error() && chain.error()(error);
        return;
      }

      missing -= 100 + i;

      if (missing == 0) {
        chain.complete() && chain.complete()();
      }

    }, i);

    next(i+1);
  };
}
