const form = document.querySelector("form")
//this usecase will give you empty
//const height = parseInt(document.querySelector("#height").value);


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results")
    const range = document.querySelector("#range")

    if(height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmiRes =  (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmiRes}</span>`;

        if ( bmiRes < 18.6 ){
            range.innerHTML = `You are Under Weight`
        } else if ( bmiRes > 24.9 ) {
            range.innerHTML = `You are Over Weight`
        } else {
            range.innerHTML = `You are Normal Weight`
        }
    }


    
})