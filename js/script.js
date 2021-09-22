const elMenu = document.querySelector('.films__card-menu');

films.forEach((film) =>{
    let newLi = document.createElement('li');
    let newImg = document.createElement('img');
    let newTitle = document.createElement('h2');
    let newGenreMenu = document.createElement('ul')
    let newTime = document.createElement('time');
    let date = new Date(film.release_date)
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let newDiv = document.createElement('div');
    let newHeadDiv = document.createElement('div');
    
    
    newLi.setAttribute('class', 'films__card');
    newTime.setAttribute('datetime', `${day}.${month}.${year}`);
    newTime.textContent = `${day}.${month}.${year}`;
    newImg.setAttribute('src', film.poster);
    newImg.setAttribute('class', 'films__card-img');
    newTitle.setAttribute('class', 'films__card-title');
    newTitle.textContent = film.title;
    newGenreMenu.setAttribute('class', 'genre__menu')
    newHeadDiv.setAttribute('class', 'head__div');
    newDiv.setAttribute('class', 'foot__div')
    

    
    film.genres.forEach((genre) => {
        let newGenreLi = document.createElement('li');
        newGenreLi.setAttribute('class', 'genre__item');
        newGenreLi.textContent = genre;
        newGenreMenu.appendChild(newGenreLi)
    })
    
    elMenu.appendChild(newLi);
    newLi.appendChild(newHeadDiv)
    newHeadDiv.appendChild(newImg);
    newHeadDiv.appendChild(newTitle);
    newLi.appendChild(newDiv);
    newDiv.appendChild(newGenreMenu);
    newDiv.appendChild(newTime)
})