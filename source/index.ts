// Import stylesheets
import React from 'react';
import "./index.html"
import './style.css';

const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
    const formData = new FormData(form);

    console.log(formData);
    const text = formData.get('defineword') as string;
    console.log(text);
    return false; // prevent reload

};


