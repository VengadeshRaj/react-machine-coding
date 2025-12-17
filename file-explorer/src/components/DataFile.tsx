type DataFileProps = {
  name: string;
};

const DataFile = (props: DataFileProps) => {
  const { name } = props;
  return <li>📄{name}</li>;
};

export default DataFile;
