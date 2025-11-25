type item = string[];

interface Tableprops {
  headers: string[];
  items: item[];
}
export default function Table(props: Tableprops) {
  const { headers, items } = props;

  const buildHeaders = () => (
    <tr>
      {headers.map((value) => (
        <th className="border border-gray-800 bg-blue-600 text-white">{value}</th>
      ))}
    </tr>
  );

  const buildBody = () =>
    items.map((items) => (
      <tr>
        {items.map((i) => (
          <td className="border border-gray-800 p-3">{i}</td>
        ))}
      </tr>
    ));
  return (
    <table className="border border-gray-800 m-5">
      <thead>{buildHeaders()}</thead>
      <tbody>{buildBody()}</tbody>
    </table>
  );
}
