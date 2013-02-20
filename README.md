Iterates a function asynchronously.

## Install

```
npm install iter
```

## Usage

```js
iter(20, function(next, i){ /* or: iter(0, 20, .. */
  console.log('i: %d', i);

  setTimeout(function(){
    next();
  }, 250);
});
```

Callbacks;

```js
iter(20)
  .error(function(error){ throw error; })
  .done(function(){ console.log('done'); })
  .run(function(next, i){
    console.log('i: %d', i);
  });
```
