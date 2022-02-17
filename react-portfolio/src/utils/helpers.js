export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export function validateName(name) {
    if (name.length !== 0) {
        return true;
    }
    return false;
}

export function validateMessage(message) {
    if (message.length !== 0) {
        return true;
    }
    return false;
}



  