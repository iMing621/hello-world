function getURL() {
    var imgList = document.getElementById('img-list');
    if (imgList) {
        if (imgList.hasChildNodes()) {
            while (imgList.firstChild) {
                imgList.removeChild(imgList.firstChild);
            }
        }

        appendThumbnail(imgList);
    }
}

function appendThumbnail(imgList) {
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

    var imgAry = new Array(
        //"0",
        //"1",
        //"2",
        //"3",
        //"default",
        //"hqdefault",
        //"mqdefault",
        //"sddefault",
        "maxresdefault"
    );
    for (ix = 0; ix < imgAry.length; ix++) {
        //var li = document.createElement("li");
        //var br = document.createElement("br");
        //var txt = document.createTextNode(" " + imgAry[ix]);
        var img = document.createElement("img");
        var imgSrc = "http://img.youtube.com/vi/" + videoID + "/" + imgAry[ix] + ".jpg";
        img.id = "thumbnail-" + ix;
        img.src = imgSrc;
	    if (imgAry[ix] == "mqdefault" || imgAry[ix] == "maxresdefault"){
			img.className = "nocut";
	    }else{
			img.className = "cut";
	    }
		//li.appendChild(br);
        //li.appendChild(img);
        //li.appendChild(txt);
        //imgList.appendChild(li);
		imgList.append(img);
    }

    document.getElementById('yt_URL').value = "";
}
