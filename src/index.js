import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import './componentes/layout/root';
import App from './app.jsx';


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)



function darkMode() {
    document.querySelector('.dark').onclick = () => {
        document.body.style.backgroundColor = 'white';
        document.querySelector('.btn').style.backgroundColor = 'white';
        document.querySelector('.btn').style.color = 'black';
        document.getElementById('check_x').style.background = 'white';
        document.getElementById('check_x').style.color = 'black';
        document.getElementById('check_x').style.border = '1px solid white';
        document.getElementById('check_circle').style.background = 'white';
        document.getElementById('check_circle').style.color = 'black';
        document.getElementById('check_circle').style.border = '1px solid white';
        document.body.style.color = 'black';
        document.querySelector('.dark').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
        </svg>`;
        if (darkMode) {
            document.querySelector('.dark').onclick = () => {
                document.body.style.backgroundColor = 'rgb(36, 36, 46)';
                document.querySelector('.btn').style.backgroundColor = 'rgb(36, 36, 46)';
                document.querySelector('.btn').style.color = 'white';
                document.getElementById('check_x').style.background = 'rgb(36, 36, 46)';
                document.getElementById('check_x').style.color = 'white';
                document.getElementById('check_x').style.border = '1px solid rgb(36, 36, 46)';
                document.getElementById('check_circle').style.background = 'rgb(36, 36, 46)';
                document.getElementById('check_circle').style.color = 'white';
                document.getElementById('check_circle').style.border = '1px solid rgb(36, 36, 46)';

                document.body.style.color = 'white';

                document.querySelector('.dark').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                </svg>`;
                darkMode();
            }

        }

    }




}

darkMode();

