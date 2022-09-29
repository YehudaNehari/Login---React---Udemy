export async function loginApi({ username, password }) {
  return new Promise((resolve, reject) => {
    console.log(username, password);
    setTimeout(() => {
      if (username === "yehuda" && password === "password") {
        resolve();
      } else {
        console.log("in");
        reject();
      }
    }, 1000);
  });
}
