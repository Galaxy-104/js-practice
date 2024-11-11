// 1. 기본값 매개변수 default function parameter
function foo1(arg = 1) {
  console.log(arg);
}

foo1();

// 2. 나머지 매개변수 rest parameter
function foo2(arg, ...rest) {
  console.log(rest);
}

foo2(1, 2, 3);

// 3. argument 객체
function foo3() {
  console.log(arguments);
}

foo3(1, 2, 3, 4);