const form = document.querySelector('form')

// this usecase will give you empty value.
// const height = parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter a Valid Height Value ${height}`;
    } else if (height === '' || height < 0 || isNaN(height)){

        result.innerHTML = `Please Enter a Valid Weight Value ${weight}`;
    } else {
        const CalculateBmi = (weight / ((height * height) / 10000)).toFixed(2); 

        result.innerHTML = `<span> ${CalculateBmi} </span>`
    }

})