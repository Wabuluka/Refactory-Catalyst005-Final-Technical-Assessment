// display errors
function errorShow(location, msg){
    document.getElementById(location).innerHTML = msg;
}

const registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', (e)=>{
    const surname = document.getElementById('surname').value
    const givenname = document.getElementById('givenname').value
    const residence = document.getElementById('residence').value
    const dob = document.getElementById('dob').value
    const occupation = document.getElementById('occupation').value
    const nationality = document.getElementById('nationality').value

    const surnameError = givennameError = residenceError = dobError = occupationError = nationalityError = true

    let regex = /^[a-zA-Z\s]+$/;

    if(surname == ""){
        errorShow('surnameError', 'This field is required')
    }else if(regex.test(surname) == false){
        errorShow('surnameError', 'The Surname provided must contain alphabets')
    }else if(surname.length < 0){
        errorShow('surnameError', 'Surname should be between 1 to 16')
    }
    else if(surname.length > 16){
        errorShow('surnameError', 'Surname should be between 1 to 16')
    }
    else{
        errorShow('surnameError', '')
        surnameError = false
    }

    // given name validation
    if(givenname == ""){
        errorShow('givennameError', 'This field is required')
    }else if(regex.test(givenname) == false){
        errorShow('givennameError', 'The Given name provided must contain alphabets')
    }else if(givenname.length < 0){
        errorShow('givennameError', 'Given name should be between 1 to 16')
    }
    else if(givenname.length > 16){
        errorShow('givennameError', 'Given name should be between 1 to 16')
    }
    else{
        errorShow('givennameError', '')
        givennameError = false
    }

    // validating residence
    if(residence == ""){
        errorShow('residenceError', 'This field is required')
    }else if(regex.test(residence) == false){
        errorShow('residenceError', 'The Residence provided must contain alphabets')
    }else if(residence.length < 0){
        errorShow('residenceError', 'Residence should be between 1 to 16')
    }
    else if(residence.length > 16){
        errorShow('residenceError', 'Residence should be between 1 to 16')
    }
    else{
        errorShow('residenceError', '')
        residenceError = false
    }

    // dob validation
    if(dob == ''){
        errorShow('dobError', 'This field is required')
    }else{
        errorShow('dobError', '')
        dobError = false
    } 

    //validating occupation
    if(occupation == ""){
        errorShow('occupationError', 'This field is required')
    }else if(regex.test(occupation) == false){
        errorShow('occupationError', 'The Occupation provided must contain alphabets')
    }else if(occupation.length < 5){
        errorShow('occupationError', 'Occupation should be between 1 to 16')
    }
    else if(occupation.length > 20){
        errorShow('occupationError', 'Occupation should be between 1 to 16')
    }
    else{
        errorShow('occupationError', '')
        occupationError = false
    }

    // validating nationality
    if(nationality == ""){
        errorShow('nationalityError', 'This field is required')
    }else if(regex.test(occupation) == false){
        errorShow('nationalityError', 'The Occupation provided must contain alphabets')
    }else if(nationality.length < 5){
        errorShow('nationalityError', 'Occupation should be between 1 to 16')
    }
    else if(nationality.length > 20){
        errorShow('nationalityError', 'Occupation should be between 1 to 16')
    }
    else{
        errorShow('nationalityError', '')
        nationalityError = false
    }
    

    // proceed command center
    if((surnameError || givennameError || residenceError || dobError || occupationError || nationalityError) == true){
        e.preventDefault()
        return
    }else{
        e.currentTarget.submit();
    }
})