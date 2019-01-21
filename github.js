class Github {
    constructor() {
        this.client_id = 'acfe04bc1844e4679f2a';
        this.client_secret = '625087dd77afa80d7bee16fd8c3b994903cbfc0f';
    }
    async getUser(user) {
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return{
            profile
        }
    }
}