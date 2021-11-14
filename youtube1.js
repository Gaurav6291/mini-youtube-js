var videos_div = document.getElementById('videos')

async function searchVideos(){
    try{
        let query = document.getElementById('query').value
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyDTVHh6WbRTY4Hbi5OC4tTKCNGp51uuWsA&maxResults=20`)
        let { items } = await response.json()
        console.log(items);
        items = items.filter(({id:{ videoId }})=> {return videoId!=undefined})
        appendVideos(items)
    }
    catch(e){
        console.log("e:",e);
    }
}

function appendVideos(videos){
    videos_div.innerHTML = null;
videos.forEach(({id:{videoId}}) => {
    let div = document.createElement('div')
    div.setAttribute('class','main_div')
    div.innerHTML = `<iframe  src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  //  videos_div.append(div);
    
    videos_div.append(div);
});
}