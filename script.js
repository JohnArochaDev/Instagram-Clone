let posts = document.querySelector('#posts');
let feedstuff = document.querySelector('#feedstuff');
let img1 = 'assets/readmeImages/dino.jpeg';
let img2 = 'assets/readmeImages/dino2.png';
let img3 = 'assets/readmeImages/dino3.png';
let mover = document.querySelector('#mover')

let images = [img1, img2, img3];

function fillPosts(numImages) {
    for (let i = 0; i < numImages; i++) {
        let imageElement = document.createElement('img');
        imageElement.src = i % 2 === 0 ? img1 : img2;
        imageElement.alt = `Dino Image ${i + 1}`;
        posts.appendChild(imageElement);
        console.log('test')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const feedstuff = document.getElementById('feedstuff');

    function fillFeedstuff(numImages) {
        for (let i = 0; i < numImages; i++) {
            let postElement = document.createElement('div');
            postElement.className = 'post';

            let imageElement = document.createElement('img');
            let randomIndex = Math.floor(Math.random() * images.length);
            imageElement.src = images[randomIndex];
            imageElement.alt = `Random Dino Image ${i + 1}`;

            let usernameElement = document.createElement('div');
            usernameElement.className = 'username';
            usernameElement.textContent = `Username ${i + 1}`; 

            let likeButton = document.createElement('button');
            likeButton.className = 'like-button';
            likeButton.textContent = '❤️ Like';

            let commentsElement = document.createElement('div');
            commentsElement.className = 'comments';
            commentsElement.textContent = 'Lots of comments';

            postElement.appendChild(imageElement);
            postElement.appendChild(usernameElement);
            postElement.appendChild(likeButton);
            postElement.appendChild(commentsElement);

            feedstuff.appendChild(postElement);
        }
    }

    fillFeedstuff(20);
});

fillPosts(18);

mover.addEventListener('click', () => {
    window.location.href = '/index.html';
});