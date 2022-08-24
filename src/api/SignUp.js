export const signUpAuth = async ({
  email,
  account_type,
  fullname,
  blood_group,
  password1,
  password2,
  first_name,
  last_name,
}) => {
  const baseURL = process.env.REACT_APP_API_URL + "registration/";
  return await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account_type,
      email,
      first_name,
      last_name,
      fullname,
      blood_group,
      password1,
      password2,
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
