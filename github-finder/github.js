class Github {
    constructor(userName) {
        this.client_id = '1f34a3bc6784f52359b5';
        this.client_secret = '64b5890cbf2bcc93bbc2dbcd77acfbcdf54713ac';
        this.userUrl = `https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        this.repos_count = 3;
        this.repost_sort = 'created asc';
        this.repoUrl = `https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        this.userName = userName;
    }

    async getUser() {
        const response = await fetch(this.userUrl);
        const responseObj = await response.json();
        return responseObj;
    }

    async getRepos() {
        const response = await fetch(this.repoUrl);
        const responseObj = await response.json();
        return responseObj;
    }
}