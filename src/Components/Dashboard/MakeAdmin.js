import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import Users from "./Users";

const MakeAdmin = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch(`https://best-tools-server-production-28d9.up.railway.app/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <Users></Users>
    </div>
  );
};

export default MakeAdmin;
