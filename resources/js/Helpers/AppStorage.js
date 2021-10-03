class AppStorage{
    storeToken(token) {
        localStorage.setItem('token', token);
    }
    storeToken(user) {
        localStorage.setItem('user', user);
    }
}

export default AppStorage = new AppStorage();