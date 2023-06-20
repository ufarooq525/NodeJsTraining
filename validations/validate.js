function validateUsername(username){
    const minLength = 5;

    if(!username || username.trim().length < minLength){
        return `Username must be at least ${minLength} characters`
    }

    return null;
}

function validatePassword(password){
    const minLength = 8;

    if(!password || password.trim().length < minLength){
        return `Pasword must be at least ${minLength} characters`
    }

    return null;
}

module.exports = {
    validateUsername,
    validatePassword
};