export const emailValidation = (email) => {
    // const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    const emailRegex =
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailRegex)) {
       return true;
    } else {
       return false;
    }
 };
 
 export const numberValidation = (number) => {
    if (!isNaN(Number(number))) {
       return true;
    } else {
       return false;
    }
 };
 
 export const phoneValidation = (number) => {
    if (!isNaN(Number(number)) && number.length === 10) {
       return true;
    } else {
       return false;
    }
 };
 
 export const noSpaceValidation = (input) => {
    if (!input.includes(" ")) {
       return true;
    } else {
       return false;
    }
 };
 
 export const notEmptyValidation = (input) => {
    if (input.length > 0) {
       return true;
    } else {
       return false;
    }
 };
 
 export const urlValidation = (url) => {
    var urlRegex =
       // eslint-disable-next-line no-useless-escape
       /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
 
    if (url.match(urlRegex)) {
       return true;
    } else {
       return false;
    }
 };
 
 export const passwordValidation = (password) => {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
 
    if (
       password.match(lowerCaseLetters) &&
       password.match(upperCaseLetters) &&
       password.match(numbers) &&
       password.length >= 8
    ) {
       return true;
    } else {
       return false;
    }
 };
 
 export const websiteValidation = (website) => {
    if (!website || urlValidation(website)) {
       return true;
    } else {
       return false;
    }
 };
 
 export const maxLengthValidation = (text, max) => {
    if (text.length <= max) {
       return true;
    } else {
       return false;
    }
 };
 
 export const minLengthValidation = (text, max) => {
    if (text.length >= max) {
       return true;
    } else {
       return false;
    }
 };
 
 // Validation on input change
 
 export const phoneOnChange = (phone) => {
    if (
       numberValidation(phone) &&
       phone.length <= 10 &&
       noSpaceValidation(phone)
    ) {
       return true;
    } else {
       return false;
    }
 };
 
 export const noSpaceOnChange = (input) => {
    if (!input.includes(" ")) {
       return true;
    } else {
       return false;
    }
 };
 
 export const numberOnChange = (number) => {
    if (!isNaN(Number(number))) {
       return true;
    } else {
       return false;
    }
 };
 
 export const maxLengthOnChange = (text, max) => {
    if (text.length <= max) {
       return true;
    } else {
       return false;
    }
 };
 
 export const minLengthOnChange = (text, min) => {
    if (text.length >= min) {
       return true;
    } else {
       return false;
    }
 };
 
 