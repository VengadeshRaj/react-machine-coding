type LoaderProps = {
  isLoading: boolean;
  message: string;
};
const Loader = (props: LoaderProps) => {
  const { isLoading, message } = props;
  return (
    <div
      className={`${
        isLoading ? "visible" : "hidden"
      } font-bold text-center p-2`}
    >
      {message}...
    </div>
  );
};

export default Loader;
