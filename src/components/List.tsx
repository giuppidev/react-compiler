export default function List({
  getNumberList,
}: {
  getNumberList: () => number[];
}) {
  const numbers = getNumberList();
  return (
    <ul>
      {numbers.map((num) => (
        <div key={num}>{num}</div>
      ))}
    </ul>
  );
}
