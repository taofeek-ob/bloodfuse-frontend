export const loginAuth = async ({ email, password }) => {
  const baseURL = process.env.REACT_APP_API_URL + "auth/login/";
 
  return await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
