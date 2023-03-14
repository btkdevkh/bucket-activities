import "../../assets/css/admin/Login.css"

export function Login() {
  return `
    <form class="login" data-form>
      <div class="container">
        <h2>Login</h2>
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value="Submit" />
      </div>
      <a href="/" data-back>Back</a>
    </form>
  `
}
