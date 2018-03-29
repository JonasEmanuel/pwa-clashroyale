var arenas = [];

function getArenas(){
    fetch("http://www.clashapi.xyz/api/arenas").then(response => {
        response.json().then(arenas => {
            let element = document.querySelector(".cards.arenas");
            arenas.forEach(item => {
                element.innerHTML += `
                    <div class="card">
                        <div class="heading">
                            ${item.name}
                        </div>
                        <div class="body">
                            <img class="img-responsive" src="http://www.clashapi.xyz/images/arenas/${item.idName}.png">
                        </div>
                    </div>
                `;
            });
        })
    });
}