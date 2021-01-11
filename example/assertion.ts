interface Hero {
  name: string;
  skill: string;
}

const capt: Hero = {
  name: 'capt',
  skill: 'shield',
};

// 안에 값이 없어도 에러가 나지 않음 : as를 쓸 때 주의할 점
const iron = {} as Hero;

console.log(capt, iron.name);

const a: string | null;
a!; // as같은 타입 단언 방식 : a는 null이 아니다. 쓸 때 주의해야 함

// ? optional chaining
if (recoveredList === null || recoveredList === undefined) {
  return;
} else {
  recoveredList.appendChild(li);
}
// 위와 같은 식
recoveredList?.appendChild(li);
