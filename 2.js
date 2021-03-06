var users = [{
    name: 'John',
    info: 'likes bowling',
    second: 'Second',
    avatar: 'http://www.iconarchive.com/download/i51046/hopstarter/halloween-avatars/Jason.ico',
    newfield: 'asdasdasdasd',
    skills: ['EcmaScript', 'PHP', 'Java'],
    fullTime: true,
    phone: "617-123-4567",
    address: {
        city: "Boston",
        state: "MA",
        zip: "02106"
    }
}, {
    name: 'Pavel',
    info: 'plays footbal',
    second: 'Second',
    avatar: 'http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico',
    newfield: 'asdasdasdasd',
    skills: ['JavaScript', 'C#', 'Paskal'],
    fullTime: false,
    phone: "617-987-6543",
    address: {
        city: "London",
        state: "GH",
        zip: "45676"
    }
}, {
    name: 'Igor',
    info: 'drinks a lot',
    second: 'Second',
    avatar: 'http://files.softicons.com/download/internet-cons/halloween-avatars-icons-by-deleket/ico/Zombie%202.ico',
    newfield: 'asdasdasdasd',
    skills: ['C++', 'Ruby'],
    fullTime: true,
    phone: "617-111-2323",
    address: {
        city: "Amsterdam",
        state: "JJ",
        zip: "69696"
    }
}, ];

var usersList = document.getElementById('usersListNode');
var userInfoNode = document.getElementById('userInfoNode');

function drawUsers(usersList) {
    usersList.forEach(drawOneUser);
}

var selectedUser;

function drawOneUser(userObject, index) {

    var item = document.createElement('li');
    item.innerHTML = index + ':' + userObject.name;
    item.className = 'user';
    item.onclick = function() {
        //by className
        //if (selectedUser) {
        //     selectedUser.className = 'user';
        // }
        // setUserInfo(userObject);
        // this.className = 'userActive';
        // selectedUser = this;

        //by classList
        if (selectedUser) {
            selectedUser.classList.toggle('userActive', false);
        }
        setUserInfo(userObject);
        this.classList.toggle('userActive');
        selectedUser = this;

    }
    usersList.appendChild(item);
}

var template = userInfoNode.innerHTML.replace(/{{&gt;/g, "{{>");

setUserInfoNodeHTML('');

var partials = { address: "{{city}}, {{state}} {{zip}}" };

function setUserInfo(userObject) {
    var newContent = Mustache.to_html(template, userObject, partials);
    userInfoNode.innerHTML = newContent;
}

function setUserInfoNodeHTML(content) {
    userInfoNode.innerHTML = content;
}