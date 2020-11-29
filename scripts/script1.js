// JavaScript Document

var videos = [
    { title: 'Why do People Like Adult Coloring Books?', channel: 'WheezyWaiter', profilePicture: 'images/wheezywaiter-pfp.jpg', views: '95K', timeSinceUpload: '6 days ago', thumbnail: 'images/thumbnail2.webp', videoLength: '14:46', link: 'https://m.youtube.com/watch?v=txZQlqC6WZE' },
    { title: '10 small changes that will improve your life.', channel: 'Matt D\'Avella', profilePicture: 'images/matt-d-avella-pfp.jpg', views: '726K', timeSinceUpload: '6 days ago', thumbnail: 'images/thumbnail3.webp', videoLength: '11:44', link: 'https://m.youtube.com/watch?v=wIIGCTIpRMk' },
    { title: 'Why it\'s so hard to be happy', channel: 'Better Ideas', profilePicture: 'images/better-ideas-pfp.jpg', views: '252K', timeSinceUpload: '1 week ago', thumbnail: 'images/thumbnail1.webp', videoLength: '9:50', link: 'https://m.youtube.com/watch?v=rQoS_S9K464' }
];

var subscriptionsFeedSection = document.querySelector('#subscriptions-feed');

videos.forEach(video => {
    var subscriptionVideoSection = document.createElement('section');
    subscriptionVideoSection.classList = "subscription-video";
    subscriptionVideoSection.innerHTML = `
    
    <div>
    <a href="${video.link}">
        <img src="${video.thumbnail}" alt="image representing the video">
        <div class="recommendation-length">${video.videoLength}</div>
        </a>
	</div>
	<div>
        <img src="${video.profilePicture}">
        <div>
            <h3>${video.title}</h3>
            <p>${video.channel} • ${video.views} • ${video.timeSinceUpload}</p>
        </div>
        <button>
            <i class="material-icons">more_vertic</i>
        </button>
    </div>
    `;
    subscriptionsFeedSection.appendChild(subscriptionVideoSection);
});


var subscriptionsFeedSection = document.querySelector('#subscriptions>ul');

videos.forEach(video => {
    var subscriptionVideoSection = document.createElement('li');
    subscriptionVideoSection.classList = "subscription";
    subscriptionVideoSection.innerHTML = `
        <img src="${video.profilePicture}">
    `;
    subscriptionsFeedSection.appendChild(subscriptionVideoSection);
});