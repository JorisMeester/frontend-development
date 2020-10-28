// JavaScript Document

var videos = [
    { title: 'Street Fighter 3 Third Strike Complete Soundtrack OST', channel: 'Video Game Tracks', profilePicture: 'images/profile-picture.png', views: '319K', timeSinceUpload: '4 years ago', thumbnail: 'images/thumbnail1.webp', videoLength: '1:16:24', link: 'https://www.youtube.com/watch?v=EEDvf6VclD4' },
    { title: 'King of Fighters XIII OST Stormy Saxophone 5 (Theme of Yagami Team)', channel: 'ss4shenlong', profilePicture: 'images/profile-picture.png', views: '770K', timeSinceUpload: '10 years ago', thumbnail: 'images/thumbnail3.webp', videoLength: '5:44', link: 'https://www.youtube.com/watch?v=vwqpjLfmjeQ' },
    { title: 'When Everything Feels Pointless, Ask These Questions', channel: 'WheezyWaiter', profilePicture: 'images/profile-picture.png', views: '22K', timeSinceUpload: 'yesterday', thumbnail: 'images/thumbnail2.webp', videoLength: '8:10', link: 'https://www.youtube.com/watch?v=wn6rI_0QiKc' }
];

var subscriptionsFeedSection = document.querySelector('#subscriptions-feed');

videos.forEach(video => {
    var subscriptionVideoSection = document.createElement('section');
    subscriptionVideoSection.classList = "subscription-video";
    subscriptionVideoSection.innerHTML = `
    <div>
        <img src="${video.thumbnail}" alt="image representing the video">
        <div class="recommendation-length">${video.videoLength}</div>
	</div>
	<div>
        <i class="material-icons">account_circle</i>
        <div>
            <h3>This is such a long title I use it to test something out</h3>
            <p>${video.channel} • ${video.views} • ${video.timeSinceUpload}</p>
        </div>
        <i class="material-icons">more_vertic</i>
    </div>
    `;
    subscriptionsFeedSection.appendChild(subscriptionVideoSection);
});