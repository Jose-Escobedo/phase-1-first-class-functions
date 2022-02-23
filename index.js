function Spy() {
  return 0;
}

function receivesAFunction(Spy) {
  return Spy();
}

function returnsANamedFunction() {
  return Spy;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
