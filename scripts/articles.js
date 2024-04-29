function articles() {
    fetch("https://backend-ddu1.onrender.com/articles")

        .then(res => res.json())
        .then(data => {
            document.getElementById('articles').innerHTML = "";
            for (let art of data) {
                let article = document.createElement("div");
                if (art.tags.includes("youtube")) {
                    article.setAttribute('onclick', `window.location.assign("${art.ytUrl}")`);
                }
                else {
                    article.setAttribute('onclick', `window.location.assign("../article?title=${art.title.split(' ').join('_')}")`);
                }
                article.id = "art";
                article.className = "art clickable";
                article.innerHTML = `
            <div class="artImage" id="artimg ${art.title.split(' ').join('_')}">
            </div>
            <p class="artTitle">${art.title}</p>
            `;
                document.getElementById("articles").appendChild(article);
                document.getElementById("artimg " + art.title.split(' ').join('_')).style.backgroundImage = `url("${art.imgUrl}")`;
            }
        })
}