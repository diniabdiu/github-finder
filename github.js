class Github {
    constructor() {
        this.client_id = 'acfe04bc1844e4679f2a';
        this.client_secret = '625087dd77afa80d7bee16fd8c3b994903cbfc0f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`http://api.github.com/users/${user}/repos?per_pages=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}