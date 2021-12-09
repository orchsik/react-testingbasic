import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = ({ id }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUser = async (id) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }, 1000 * 3);
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  if (loading) return <div>로딩중...</div>;
  if (!userData) return <div>로딩중...</div>;

  const { username, email } = userData;
  return (
    <div>
      <p>
        <b>Username: </b>
        {username}
      </p>
      <p>
        <b>Email: </b>
        {email}
      </p>
    </div>
  );
};

export default UserProfile;
