import { useEffect, useState } from "react";
import Table from "./components/Table";
import { getCompanyRecords } from "./api/getCompanyRecords";
import Loader from "./components/Loader";

export default function InfiniteScroll() {
  const [tableValues, setTableValues] = useState({
    headers: ["Company", "Location", "Type"],
    body: [["Google", "Bangalore", "Full-Time"]],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCompanyRecords();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchCompanyRecords = async () => {
    setIsLoading(true);
    const result = await getCompanyRecords();
    setIsLoading(false);
    setTableValues((prev) => ({ ...prev, body: [...prev.body, ...result] }));
  };

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

    if (isBottom) {
      fetchCompanyRecords();
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-gray-100">
      <h1 className="font-bold text-center text-2xl mt-5">Company Details</h1>
      <Table headers={tableValues.headers} items={tableValues.body} />
      <Loader isLoading={isLoading} message="loading" />
    </div>
  );
}
