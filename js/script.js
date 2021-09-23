const elMenu = document.querySelector('.films__card-menu');
const elForm = document.querySelector('#form');
const elSelect = document.querySelector('#select', elForm);
const elSearch = document.querySelector('#search');

function renderGenres(filmArr, element){
    let result = [];
    
    filmArr.forEach(film => {
        film.genres.forEach((genre) =>{
            if(!result.includes(genre)){
                result.push(genre)
            }
        })
    })
    result.forEach((genre) =>{
        let newOption = document.createElement('option');
        newOption.setAttribute('class', 'film__option')
        newOption.textContent = genre;
        newOption.value = genre;
        element.appendChild(newOption)
    })
} 
renderGenres(films, elSelect)

function renderFilms(filmArr, element){
    element.innerHTML = null;
    filmArr.forEach((film) =>{
        
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

        newLi.appendChild(newHeadDiv)
        newHeadDiv.appendChild(newImg);
        newHeadDiv.appendChild(newTitle);
        newLi.appendChild(newDiv);
        newDiv.appendChild(newGenreMenu);
        newDiv.appendChild(newTime)
        // elMenu.appendChild(newLi);
        element.appendChild(newLi)
    })   
}
renderFilms(films, elMenu);

elForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let searchValue = elSearch.value.trim();
    let selectValue = elSelect.value.trim();
    
    const regex = new RegExp(searchValue, 'gi')
    const selectex = new RegExp(selectValue, 'gi')
    
    let filteredArray = films.filter(film => film.title.match(regex))
    
    let genreArray = filteredArray.filter(film => {
        let result = null;
        for(i=0; i<film.genres.length; i++ ){
            result += film.genres[i].match(selectex)
        }
        return result 
    })

    genreArray.filter(event => {
        filteredArray.forEach(item => event == item && event)
    })

    if(selectValue == 'All'){
        renderFilms(filteredArray, elMenu)
    }else{
        renderFilms(genreArray, elMenu)
    }
    
})