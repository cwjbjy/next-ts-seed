// const obj: any = {
//   a: '2',
// };

export default function New() {
  return (
    <div>
      {/* 报错：因为取不到c属性 */}
      {/* {obj.b.c} */}
    </div>
  );
}
