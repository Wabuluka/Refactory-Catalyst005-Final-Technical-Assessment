// display errors
function errorShow(location, msg){
    document.getElementById(location).innerHTML = msg;
}

const registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', (e)=>{
    const surname = document.getElementById('surname').value
    const givenname = document.getElementById('givenname').value
    const dob = document.getElementById('dob').value
    const residence = document.getElementById('residence').value
    const occupation = document.getElementById('occupation').value
    const nationality = document.getElementById('nationality').value
    const category = document.getElementById('category').value





    const surnameError = givennameError = dobError = residenceError = occupationError= nationalityError = categoryError = dobError= true

    let regex = /^[a-zA-Z\s]+$/;

    if(surname == ""){
        errorShow('surnameError', 'This field is required')
        document.getElementById('surname').style.border = 'red 1px solid';
    }else if(regex.test(surname) == false){
        errorShow('surnameError', 'The Surname provided must contain alphabets')
        document.getElementById('surname').style.border = 'red 1px solid';
    }else if(surname.length < 0){
        errorShow('surnameError', 'Surname should be between 1 to 16')
        document.getElementById('surname').style.border = 'red 1px solid';
    }
    else if(surname.length > 16){
        errorShow('surnameError', 'Surname should be between 1 to 16')
        document.getElementById('surname').style.border = 'red 1px solid';
    }
    else{
        errorShow('surnameError', '')
        document.getElementById('surname').style.border = 'gray 1px solid';
        surnameError = false
    }

    // given name validation
    if(givenname == ""){
        errorShow('givennameError', 'This field is required')
        document.getElementById('givenname').style.border = 'red 1px solid';
    }else if(regex.test(givenname) == false){
        errorShow('givennameError', 'The Given name provided must contain alphabets')
        document.getElementById('givenname').style.border = 'red 1px solid';
    }else if(givenname.length < 0){
        errorShow('givennameError', 'Given name should be between 1 to 16')
        document.getElementById('givenname').style.border = 'red 1px solid';
    }
    else if(givenname.length > 16){
        errorShow('givennameError', 'Given name should be between 1 to 16')
        document.getElementById('givenname').style.border = 'red 1px solid';
    }
    else{
        errorShow('givennameError', '')
        document.getElementById('givenname').style.border = 'gray 1px solid';
        givennameError = false
    }


    // validating residence
    if(residence == ""){
        errorShow('residenceError', 'This field is required')
        document.getElementById('residence').style.border = 'red 1px solid';

    }else if(regex.test(residence) == false){
        errorShow('residenceError', 'The Residence provided must contain alphabets')
        document.getElementById('residence').style.border = 'red 1px solid';

    }else if(residence.length < 0){
        errorShow('residenceError', 'Residence should be between 1 to 16')
        document.getElementById('residence').style.border = 'red 1px solid';

    }
    else if(residence.length > 16){
        errorShow('residenceError', 'Residence should be between 1 to 16')
        document.getElementById('residence').style.border = 'red 1px solid';

    }
    else{
        errorShow('residenceError', '')
        document.getElementById('residence').style.border = 'gray 1px solid';
        residenceError = false
    }
    
    //validating occupation
    if(occupation == ""){
        errorShow('occupationError', 'This field is required')
        document.getElementById('occupation').style.border = 'red 1px solid';

    }else if(regex.test(occupation) == false){
        errorShow('occupationError', 'The Occupation provided must contain alphabets')
        document.getElementById('occupation').style.border = 'red 1px solid';

    }else if(occupation.length < 5){
        errorShow('occupationError', 'Occupation should be between 1 to 16')
        document.getElementById('occupation').style.border = 'red 1px solid';

    }
    else if(occupation.length > 20){
        errorShow('occupationError', 'Occupation should be between 1 to 16')
        document.getElementById('occupation').style.border = 'red 1px solid';
    }
    else{
        errorShow('occupationError', '')
        document.getElementById('occupation').style.border = 'gray 1px solid';
        occupationError = false
    }


    // validating nationality
    if(nationality == ""){
        errorShow('nationalityError', 'This field is required')
        document.getElementById('nationality').style.border = 'red 1px solid';

    }else if(regex.test(occupation) == false){
        errorShow('nationalityError', 'The Nationality provided must contain alphabets')
        document.getElementById('nationality').style.border = 'red 1px solid';
    }else if(nationality.length < 5){
        errorShow('nationalityError', 'Nationality should be between 1 to 16')
        document.getElementById('nationality').style.border = 'red 1px solid';
    }
    else if(nationality.length > 20){
        errorShow('nationalityError', 'Nationality should be between 1 to 16')
        document.getElementById('nationality').style.border = 'red 1px solid';
    }
    else{
        errorShow('nationalityError', '')
        document.getElementById('nationality').style.border = 'gray 1px solid';
        nationalityError = false
    }

    // category validation
    if(category == 'zero'){
        errorShow('categoryError', 'Select Category is not a valid category')
        document.getElementById('category').style.border = 'red 1px solid';
    }else{
        errorShow('categoryError', '')
        document.getElementById('category').style.border = 'gray 1px solid';
        categoryError = false
    }

    // dob validation
    if(dob == ''){
        errorShow('dobError', 'This field is required')
        document.getElementById('dob').style.border = 'red 1px solid';
        
    }
    else{
        errorShow('dobError', '')
        document.getElementById('dob').style.border = 'gray 1px solid';
        dobError = false
    }

    
    // proceed command center
    if((surnameError || givennameError || dobError || residenceError || occupationError || nationalityError || categoryError || dobError) == true){
        e.preventDefault()
        return
    }else{
        e.currentTarget.submit();
    }
})
