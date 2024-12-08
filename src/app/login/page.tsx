import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src="public/assets/logo.png" alt="Logo" style={styles.logo} />
        </div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>Register</a>
        </nav>
      </header>
      <div style={styles.main}>
        <div style={styles.loginBox}>
          <h2 style={styles.title}>Log In</h2>
          <form>
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="password" placeholder="Password" style={styles.input} />
            <div style={styles.options}>
              <label style={styles.rememberMe}>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
            </div>
            <button type="submit" style={styles.button}>
              ➜
            </button>
          </form>
          <div style={styles.divider}>Or</div>
          <button style={styles.googleButton}>
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_48dp.png"
              alt="Google"
              style={styles.googleIcon}
            />
            Log In with Google
          </button>
          <p style={styles.accountText}>
            Don’t Have an Account?{" "}
            <a href="#" style={styles.registerLink}>Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#212832",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#75abad",
    padding: "10px 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    backgroundColor: "#d9d9d9",
    padding: "30px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#3d414a",
    textAlign: "left", 
    fontWeight: 700,
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #bcbdbf",
    backgroundColor: "#bcbdbf",
    fontSize: "16px",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    marginBottom: "20px",
  },
  rememberMe: {
    color: "#000", 
  },
  forgotPassword: {
    color: "#75abad", 
    textDecoration: "none",
  },
  button: {
    backgroundColor: "#75abad", 
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "5px",
    cursor: "pointer",
    width: "60px",
    height: "60px",
    margin: "0 auto",
    display: "block",
    fontSize: "16px",
    textAlign: "center",
  },
  divider: {
    margin: "20px 0",
    color: "#ccc",
  },
  googleButton: {
    backgroundColor: "#fff",
    color: "#555",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    height: "20px",
    marginRight: "10px",
  },
  accountText: {
    color: "#000",
    textAlign: "center",
    marginTop: "10px",
  },
  registerLink: {
    color: "#75abad", 
    textDecoration: "none",
  },
};

export default LoginPage;