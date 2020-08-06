class Github {
    constructor(userName) {
        this.client_id = '1f34a3bc6784f52359b5';
        this.client_secret = '64b5890cbf2bcc93bbc2dbcd77acfbcdf54713ac';
        this.userUrl = `https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        this.repoUrl = `https://api.github.com/users/${userName}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
        this.userName = userName;
    }

    async getUser() {
        const response = await fetch(this.userUrl);
        const responseObj = await response.json();
        return responseObj;
    }
}