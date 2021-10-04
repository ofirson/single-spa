export default function Root({list}) {
  return <ul>
    {
      list?.map(item =>
          <li key={item}>{item}</li>
    )}
  </ul>;
}
