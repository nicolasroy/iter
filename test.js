var iter = require("./");

it('iterates a fn between given range', function(done){

  var t = 2;

  iter(3, 9, function(next, i){
    t++;
    expect(i).to.be.equal(t);
    next();
  }).done(function(){
    expect(t).to.equal(8);
    done();
  });

});

it('stops when an error is passed', function(done){

  var t   = -1,
      err = new Error();

  iter(5)

    .run(function(next, i){
      t++;

      expect(t < 4).to.true;

      if(i == 3){
        next(err);
        return;
      }

      next();
    })

  .error(function(errRef){
    expect(t).to.equal(3);
    expect(errRef).to.equal(err);
    done();
  });

});
