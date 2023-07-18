var searchBtn = document.querySelector("#searchBtn");

let searchBtnHandler = (event) => {
    console.log('button click');
    event.preventDefault();
    let wordInputEl = document.querySelector("#wordName").value;
    console.log(wordInputEl);

    let wordUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + wordInputEl + '?key=4013f53d-9186-47c1-acb8-17287689092c';

    fetch(wordUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    let word = data[0].meta.id;
                    let definition = data[0].shortdef[0];
                    console.log('YOUR WORD IS', word, "WHICH MEANS", definition);
                });
            } else {
                // ADD alert modal
            }
        })

}

searchBtn.addEventListener('click', searchBtnHandler);