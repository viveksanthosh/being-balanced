interface LoginDetails {
  email: string;
  password: string;
}
export async function performLogin(loginDetails: LoginDetails) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });
}
