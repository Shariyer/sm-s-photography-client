/** @format */

export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  // get jwt token from api
  fetch("https://b6a11-service-review-server-side-shariyer.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // storing token on local storage
      localStorage.setItem("smDB-token", data.token);
    });
};
