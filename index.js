import { posts } from './data.js';

const postsContainer = document.getElementById('posts');
let htmlPost = '';

const createPostHTML = () => {
  for (const post of posts) {
    htmlPost += `
        <section class="post">
            <div class="post-header">
                <img src=${post.avatar} />
                <div class="artist-info">
                    <h3 class="artist-name">${post.name}</h3>
                    <p class="location">${post.location}</p>
                </div>
            </div>
            <div class="post-body">
                <img src=${post.post} alt=''>
            </div>
            <div class="post-footer">
                <div class="post-icons">
                    <img src='./images/icon-heart.png'>
                    <img src='./images/icon-comment.png'>
                    <img src='./images/icon-dm.png'>
                </div>
                <p class="post-likes">${post.likes} likes<p>
                <p><span>${post.username}</span> ${post.comment}</p>
            </div>
        </section>
    `;
  }
  postsContainer.innerHTML = htmlPost;
};

createPostHTML();
