
// 1. IIFE (즉시 실행 함수)
(function foo1() {
  console.log('foo1');
})()

// 2. 재귀함수
function foo2(arg) {
  if(arg === 5) return;
  
  console.log(arg);
  foo2(arg + 1);
}

foo2(1);

// 3. 중첩함수(내부함수)
function foo3(arg) {
  function bar3() {
    console.log(arg);
  }
  bar3();
}

foo3(1);

// 4. 콜백함수
function foo4(arg) {
  arg();
}

foo4(() => {
  console.log(1);
});