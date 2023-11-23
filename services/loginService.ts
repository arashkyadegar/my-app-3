export class LoginService {
  baseUrl: string = `${process.env.NEXT_PUBLIC_BASEURL}/auth/login/`;

  async login(
    username: string,
    password: string,
    remember: string
  ): Promise<any> {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: username,
        password: password,
        remember: remember,
      }),
    };

    return await fetch(this.baseUrl, requestOptions);
  }
}
