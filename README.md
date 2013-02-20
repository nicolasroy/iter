Iterates a function asynchronously.

## Install

```
npm install iter
```

## Usage

```js
iter(20, /* or: iter(0, 20, .. */ function(next, i){
  console.log('i: %d', i);

  setTimeout(function(){
    next();
  }, 250);
});
```

Callbacks;

```
iter(20)
  .error(function(error){ throw error; })
  .done(function(){ console.log('done'); })
  .run(function(next, i){
    console.log('i: %d', i);
  });
```
