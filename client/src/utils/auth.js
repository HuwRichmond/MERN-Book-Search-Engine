// this gets user data from a token
import decode from 'jwt-decode';

// instantiate for a user by creating new class
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  // this checks to see if there is a user logged in
  loggedIn() {
    // there is then a check for tokens correlating to that user
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // this checks to see if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // this get function retrieves the token from local Storage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // this saves the user token to their localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // this clears user data and token from localStorage
    localStorage.removeItem('id_token');
    // this reloads the page and resets the state
    window.location.assign('/');
  }
}

export default new AuthService();
