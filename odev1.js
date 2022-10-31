import axios from "axios";

const getData = async (user_id) => {
  const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);

  const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?id=${user_id}`);

  // console.log("User: ", user);
  // console.log("Post: ", post);

  const combined = { user, post };

  console.log(combined);
};

export default getData;