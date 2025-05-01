class LoginPage{
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
        
        // Login page elements
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');

    }
    // Navigation
    async navigate() {
        await this.page.goto('/');
    }

    // Authentication
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

  module.exports = { LoginPage };