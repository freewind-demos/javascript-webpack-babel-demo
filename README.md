How to run
===========

Install babel globally for conveniency:

```
npm install -g babel-cli
```

Be careful, it's `babel-cli` not `babel` when installing, but the command it provides is `babel`.

Then check the version `babel version` and make sure it is `>= 6.x`.

In the **project root** (not `~`):

```
npm install babel-preset-es2015 --save-dev
echo '{ "presets": ["es2015"] }' > .babelrc
```

Then 

```
babel index.js | node
```

It will print:

```
Hello, Freewind
```

Reference
=========

1. try babel online: <https://babeljs.io/repl/>