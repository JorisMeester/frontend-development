// JavaScript Document

var videos = [
    { title: 'Street Fighter 3 Third Strike Complete Soundtrack OST', channel: 'Video Game Tracks', profilePicture: 'images/profile-picture.png', views: '319K', timeSinceUpload: '4 years ago', thumbnail: 'images/thumbnail1.webp', videoLength: '1:16:24', link: 'https://www.youtube.com/watch?v=EEDvf6VclD4' },
    { title: 'King of Fighters XIII OST Stormy Saxophone 5 (Theme of Yagami Team)', channel: 'ss4shenlong', profilePicture: 'images/profile-picture.png', views: '770K', timeSinceUpload: '10 years ago', thumbnail: 'images/thumbnail3.webp', videoLength: '5:44', link: 'https://www.youtube.com/watch?v=vwqpjLfmjeQ' },
    { title: 'When Everything Feels Pointless, Ask These Questions', channel: 'WheezyWaiter', profilePicture: 'images/profile-picture.png', views: '22K', timeSinceUpload: 'yesterday', thumbnail: 'images/thumbnail2.webp', videoLength: '8:10', link: 'https://www.youtube.com/watch?v=wn6rI_0QiKc' }
];
var comments = [
    { text: 'Nice song, really smooth!', channel: 'Carl Johnson', profilePicture: 'images/profile-picture.png', likes: '5', comments: '2', timeSincePost: '10 hours ago' },
    { text: 'Wow sounds cool!', channel: 'Dan da Man', profilePicture: 'images/profile-picture.png', likes: '8', comments: '1', timeSincePost: '14 hours ago' }
];


var recommendationsSection = document.querySelector('#recommendations');
var commentsSection = document.querySelector('#comments');

videos.forEach(video => {
    var recommendationSection = document.createElement('section');
    recommendationSection.classList = "recommendation";
    recommendationSection.innerHTML = `
    <div>
        <img src="${video.thumbnail}" alt="image representing the video">
        <div class="recommendation-length">${video.videoLength}</div>
    </div>
    <div>
        <h3>${video.title}</h3>
        <p>${video.channel}</p>
        <p>${video.views} • ${video.timeSinceUpload}</p>
    </div>
    `;
    recommendationsSection.appendChild(recommendationSection);
});

comments.forEach(comment => {
    var commentSection = document.createElement('section');
    commentSection.classList = "comment";
    commentSection.innerHTML = `
					<a href="">
						<img src="${comment.profilePicture}">
					</a>
					<div>
						<a href="">
							<h4>${comment.channel}</h4>
						</a>
						<p>${comment.text}</p>
						<div class="comment-details">
							<p>${comment.timeSincePost} • </p>
							<button>
								<i class="material-icons">thumb_up</i>
								${comment.likes}
							</button>
							<button>
								<i class="material-icons">thumb_down</i>
							</button>
							<button>
								<i class="material-icons">comment</i>
								${comment.comments}
							</button>
						</div>
						<button>show more replies</button>
					</div>
    `;
    commentsSection.appendChild(commentSection);
});