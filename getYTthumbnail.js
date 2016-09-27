function getURL() {
    var content = document.getElementById('content');
    if (content) {
        if (content.hasChildNodes()) {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
        }

        appendThumbnail(content);
    }
}

function appendThumbnail(content) {
    var ytUrl = document.getElementById('yt_URL').value;
    var videoID = "";
    if (ytUrl.indexOf('watch?v=') > -1) {
        // https://www.youtube.com/watch?v=kleXl9jSQYc
        var ary = ytUrl.split('watch?v=');
        videoID = ary[1];
    } else if (ytUrl.indexOf('youtu.be') > -1) {
        // https://youtu.be/kleXl9jSQYc
        var ary = ytUrl.split('/');
        videoID = ary[ary.length - 1];
    } else {
        videoID = ytUrl;
    }

    var img = document.createElement("img");
    var imgSrc = "http://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg";
    img.src = imgSrc;
    content.appendChild(img);

    document.getElementById('yt_URL').value = "";
}
