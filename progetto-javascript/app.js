export const film = async() => {
    const promise = fetch (
        'http://www.omdbapi.com/?s=%27blade%20runner%27&apikey=d99eb7c1'
    );
    promise
        .then ( res => {
            if(res) {
                const ris = res.json();
                return ris;
            };
        })
        .then (resjson => {
            console.log(resjson);
            resjson.Search.forEach(stampa);
        })
        .catch(err => {
            console.error(err);
        })
}

const stampa = (item, i) => {
    const capo = document.createElement('div');

//    console.log(item.titolo); 

    const div = document.createElement('div');
    const poster = document.createElement('img');
    const titolo = document.createElement('h4');
    const anno = document.createElement('h4');
    const genere = document.createElement('h4');
    const cont = document.getElementById('container');

    div.setAttribute("class", "col");
    capo.setAttribute("class", "w-100");
    poster.setAttribute("class", "poster");
    poster.setAttribute("src", item.Poster);
    titolo.setAttribute("class", "titolo");
    anno.setAttribute("class", "anno");
    genere.setAttribute("class", "genere");

    titolo.innerHTML = "Titolo: " + item.Title;
    anno.innerHTML = "Anno: " + item.Year;
    genere.innerHTML = "Genere: " + item.Type;

    if(i%3==0){
        cont.appendChild(capo);
    }

    if(item.Poster != "N/A") {
        div.appendChild(poster);
    }
    div.appendChild(titolo);
    div.appendChild(anno);
    div.appendChild(genere);
    cont.appendChild(div);
}