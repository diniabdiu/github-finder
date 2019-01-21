//init
const github = new Github;



const searchUser = document.getElementById('searchUser');


//search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {
        github.getUser(userText)
        .then(data => {
            console.log(data);
        })
    }
});