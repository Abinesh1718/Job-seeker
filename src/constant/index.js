// const [emailError, setEmailError] = useState('');
// const [email, setEmail] = useState('');

import React, { useState } from 'react';
// import * as EmailValidator from 'email-validator';
export const ROLES = {
    ADMIN: 'admin',
    EMPLOYEE: 'employee',
    EMPLOYER: 'employer',
}

export const ENV_CONFIG = {
    CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET,
    API_URL: process.env.REACT_APP_API_URL,
    KEY: process.env.REACT_APP_RAZORPAY_KEY,
    SECRET: process.env.REACT_APP_RAZORPAY_SECRET,
    GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API,
    AUTH_TOKEN:process.env.REACT_APP_AUTH_TOKEN,
    STRIPE_KEY:process.env.REACT_APP_STRIPE_SECRET_KEY,
    PARTTIMER_PRODUCT_KEY:process.env.REACT_APP_STRIPE_PARTTIMER_PRODUCT_KEY,
    EMPLOYER_PRODUCT_KEY:process.env.REACT_APP_STRIPE_EMPLOYER_PRODUCT_KEY,

}

export const REGEX = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

export const VALIDATION_MSG = {
    emailRequired: 'Please enter a valid email address',
    passwordRequired: 'Password is required',
    invalidEmailAddress: 'Invalid email address',
    passwordLength: 'Password must be at least 8 haracters long',
    passwordMix: "Password must contain a mix of letters and numbers.",
    phoneLength: 'Please enter a valid 10-digit phone number',
    Required: 'Value is required',
    phoneRequired: "Please enter a valid mobile number",
    invalidPhone: 'Invalid phone Number',
    confirmPasswordRequired: 'Confirm password is required',
    passwordMatchError: 'Password does not match',
    firstnameRequired: 'First Name is required',
    lastnameRequired: 'Last Name is required',
    aadharRequired: 'Aadhar Number is required',
    panRequired: 'PAN Number is required',

    addresRequired: 'Address is required',
    titlerequired: 'Job Title is  required',
    descriptionrequired: 'Description is  required',
    education: 'Education should contain only Letter',
    instite:'Instutite name should contain only Letter.',
    university:'University should contain only Letter',
    educationfeild:'Education should contain only Letter.',
    yearpusing:'Year should contain only Number.'

}

export const useValidation = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [aadharNum, setAadharNum] = useState('');
    const [panNum, setPanNum] = useState('');

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [aadharError, setAadharError] = useState('');
    const [panError, setPanError] = useState('');

    const [firstnameError, setfirstnameError] = useState('');
    const [lastnameError, setLastnameError] = useState('');
    const [address, setaddress] = useState('')
    const [addressError, setaddressError] = useState('')

    const validateEmail = () => {
        
        const emailRegex = REGEX.email
        const isValid = emailRegex.test(email);
        
        if (!email) {
            setEmailError(VALIDATION_MSG.emailRequired);
        } else if (!isValid) {
            setEmailError(VALIDATION_MSG.invalidEmailAddress);
        } else {
            const afterCom = email.split('.com')[1];
            const containsNumbersAfterCom = /\d/.test(afterCom);
            if (containsNumbersAfterCom) {
                setEmailError('The email after ".com" should not contain numbers.');
                return false;
            }
            setEmailError('');
        }
        return isValid;
    };

    const validateAddress = () => {
        if (!address) {
            setaddressError(VALIDATION_MSG.addresRequired);
        } else {
            setaddressError('');
        }
        return address;
    }


    const validateFirstname = () => {
        if (!firstname) {
            setfirstnameError('First name is required');
        } else if (/\d/.test(firstname)) {
            setfirstnameError('First name should contain only letters.');
        } else {
            setfirstnameError('');
        }
        return firstname;
    }

    const validateLastname = () => {
        if (!lastname) {
            setLastnameError(VALIDATION_MSG.lastnameRequired);
        } else if (/\d/.test(lastname)) {
            setLastnameError('Last name should contain only letters.');
        } else {
            setLastnameError('');
        }
        return lastname;
    }

    const validatePan = () => {
        if (!panNum) {
            setPanError(VALIDATION_MSG.panRequired);
            // if (panNumber.length <= 10) {
            //     const numericInput = panNumber.replace(/\s/g, '').toUpperCase();
            //     setPanNum(numericInput);

            // }
        } else {
            setPanError('');
        }
        return panNum;
    }

    const validateAadhar = () => {
        if (!aadharNum) {
            setAadharError(VALIDATION_MSG.aadharRequired);
        } else {
            setAadharError('');
        }
        return aadharNum;
    }


    const validatefield = () => {
        if (!email) {
            setEmailError(VALIDATION_MSG.emailRequired);
        } else {
            setEmailError('');
        }
        return email;
    };

    const validatePassword = () => {

        // if (!password) {
        //     setPasswordError(VALIDATION_MSG.passwordRequired);
        //   } else if (password.length < 6) {
        //     setPasswordError(VALIDATION_MSG.passwordLength);
        //   } else if (!/[A-Z]/.test(password)) {
        //     setPasswordError('Password must contain at least one uppercase letter');
        //   } else if (!/[a-z]/.test(password)) {
        //     setPasswordError('Password must contain at least one lowercase letter');
        //   } else if (!/\d/.test(password)) {
        //     setPasswordError('Password must contain at least one numeric digit');
        //   } else if (!/[!@#$%^&*]/.test(password)) {
        //     setPasswordError('Password must contain at least one special symbol (!@#$%^&*)');
        //   } else {
        //     setPasswordError('');
        //   }

        // if (!password) {
        //     setPasswordError(VALIDATION_MSG.passwordRequired)
        // } else if (password.length < 6) {
        //     setPasswordError(VALIDATION_MSG.passwordLength);
        // } else {
        //     setPasswordError('');
        // }
        // return password.length >= 6;
    };



    const handlePhoneBlur = () => {
        const phoneRegex = /^\d{10}$/;
        const isValid = phoneRegex.test(phone);

        if (!phone) {
            setPhoneError(VALIDATION_MSG.phoneRequired);
        } else if (!isValid) {
            setPhoneError(VALIDATION_MSG.phoneLength);
        } else {
            setPhoneError('');
        }

        return isValid;
    };

    const validateConfirmPassword = () => {
        if (!confirmPassword) {
            setConfirmPasswordError(VALIDATION_MSG.confirmPasswordRequired);
        } else if (confirmPassword !== password) {
            setConfirmPasswordError(VALIDATION_MSG.passwordMatchError);
        } else {
            setConfirmPasswordError('');
        }

        return confirmPassword === password;
    };
    const handleConfirmPasswordBlur = () => {
        validateConfirmPassword();
    };

    const handleEmailBlur = () => {
        validateEmail();
    };

    const handlePasswordBlur = () => {
        
        validatePassword();
    };
    const handlefirstnameBlur = () => {

        validateFirstname();
    };
    const handleLastnameBlur = () => {
        validateLastname();
    };
    const handleAdharBlur = () => {
        validateAadhar();
    };
    const handlePanBlur = () => {
        validatePan();
    };
    const handleaddressBlur = () => {
        validateAddress();
    };
    return {
        email,
        setEmail,
        phone,
        emailError,
        handleEmailBlur,
        setPhoneError,
        setEmailError,
        password,
        setPassword,
        passwordError,
        setPasswordError,
        phoneError,
        setPhone,
        handlePasswordBlur,
        handlePhoneBlur,
        validatefield,
        handleConfirmPasswordBlur,
        confirmPassword,
        setConfirmPassword,
        confirmPasswordError,
        handlefirstnameBlur,
        firstnameError,
        setfirstnameError,
        setFirstName,
        firstname,
        handleLastnameBlur,
        lastnameError,
        setLastnameError,
        setConfirmPasswordError,
        lastname,
        setLastName,
        handleAdharBlur,
        aadharError,
        setAadharError,
        aadharNum,
        setAadharNum,

        handlePanBlur,
        panError,
        setPanError,
        panNum,
        setPanNum,


        validateEmail,
        address,
        setaddress,
        addressError,
        setaddressError,
        handleaddressBlur
    };
};
