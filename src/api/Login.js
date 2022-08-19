export const loginAuth = async ({ email, password }) => {
  const baseURL = process.env.REACT_APP_API_URL + "auth/login/";
  await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
