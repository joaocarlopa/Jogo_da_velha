let valor;
let um;
let dois;
let tres;
let quatro;
let cinco;
let seis;
let sete;
let oito;
let nove;
let confere = false;
let finaly;





document.onmouseout = () => {
    if (finaly) {
        alert('Jogo finalizado !')
        finaly = false;

        document.querySelectorAll("td").forEach(element => {
            element.classList.remove('x', 'circle', 'green');
            um = '';
            dois = '';
            tres = '';
            quatro = '';
            cinco = '';
            seis = '';
            sete = '';
            oito = '';
            nove = '';
        })



    }
}


document.onmousemove = () => {
    document.getElementById('check_x').onclick = () => {


        function chamaX() {
            document.onclick = () => {
                valor = 'x';

                if (chamaX) {

                    document.onclick = () => {
                        valor = 'circle';
                        chamaX();

                    }
                }

            }


        }
        chamaX();


    }

    document.getElementById('check_circle').onclick = () => {


        function chamaCircle() {
            document.onclick = () => {
                valor = 'circle';

                if (chamaCircle) {

                    document.onclick = () => {
                        valor = 'x';
                        chamaCircle();

                    }
                }

            }


        }
        chamaCircle();


    }

    if (document.getElementById('check_x').checked) {

        confere = true;




    } else if (document.getElementById('check_circle').checked) {
        confere = false
    }




    if (um === true && cinco === true && nove === true) {
        finaly = true;

        document.querySelector('.num1').classList.add('green');
        document.querySelector('.num5').classList.add('green');
        document.querySelector('.num9').classList.add('green');
    }

    if (um === false && cinco === false && nove === false) {
        finaly = true;
        document.querySelector('.num1').classList.add('green');
        document.querySelector('.num5').classList.add('green');
        document.querySelector('.num9').classList.add('green');

    }

    if (tres === true && cinco === true && sete === true) {
        finaly = true;
        document.querySelector('.num3').classList.add('green');
        document.querySelector('.num5').classList.add('green');
        document.querySelector('.num7').classList.add('green');

    }

    if (tres === false && cinco === false && sete === false) {
        finaly = true;
        document.querySelector('.num3').classList.add('green');
        document.querySelector('.num5').classList.add('green');
        document.querySelector('.num7').classList.add('green');

    }

    if (um === true && dois === true && tres === true) {
        finaly = true;
        document.querySelector('.num1').classList.add('green');
        document.querySelector('.num2').classList.add('green');
        document.querySelector('.num3').classList.add('green');

    }

    if (um === false && dois === false && tres === false) {
        finaly = true;
        document.querySelector('.num1').classList.add('green');
        document.querySelector('.num2').classList.add('green');
        document.querySelector('.num3').classList.add('green');

    }

    if (um === true && quatro === true && sete === true) {
        finaly = true;
        document.querySelector('.num1').classList.add('green');
        document.querySelector('.num4').classList.add('green');
        document.querySelector('.num7').classList.add('green');

    }

    if (um === false && quatro === false && sete === false) {
        finaly = true;
        document.querySelector('.num1').classList.add('green');
        document.querySelector('.num4').classList.add('green');
        document.querySelector('.num7').classList.add('green');

    }

    if (tres === true && seis === true && nove === true) {
        finaly = true;
        document.querySelector('.num3').classList.add('green');
        document.querySelector('.num6').classList.add('green');
        document.querySelector('.num9').classList.add('green');

    }

    if (tres === false && seis === false && nove === false) {
        finaly = true;
        document.querySelector('.num3').classList.add('green');
        document.querySelector('.num6').classList.add('green');
        document.querySelector('.num9').classList.add('green');

    }

    if (dois === true && cinco === true && oito === true) {
        finaly = true;
        document.querySelector('.num2').classList.add('green');
        document.querySelector('.num5').classList.add('green');
        document.querySelector('.num8').classList.add('green');

    }

    if (dois === false && cinco === false && oito === false) {
        finaly = true;
        document.querySelector('.num2').classList.add('green');
        document.querySelector('.num5').classList.add('green');
        document.querySelector('.num8').classList.add('green');

    }

    if (sete === true && oito === true && nove === true) {
        finaly = true;
        document.querySelector('.num7').classList.add('green');
        document.querySelector('.num8').classList.add('green');
        document.querySelector('.num9').classList.add('green');

    }

    if (sete === false && oito === false && nove === false) {
        finaly = true;
        document.querySelector('.num7').classList.add('green');
        document.querySelector('.num8').classList.add('green');
        document.querySelector('.num9').classList.add('green');

    }

    if (quatro === true && cinco === true && seis === true) {
        finaly = true;
        document.querySelector('.num4').classList.add('green');
        document.querySelector('.num5').classList.add('green');
        document.querySelector('.num6').classList.add('green');

    }

    if (quatro === false && cinco === false && seis === false) {
        finaly = true;
        document.querySelector('.num4').classList.add('green');
        document.querySelector('.num5').classList.add('green');
        document.querySelector('.num6').classList.add('green');

    }
}



function root() {

    return {


        inicia() {
            this.recebeClique();



        },

        recebeClique() {





            document.addEventListener('click', y => {
                const rx = y.target;

    



                document.getElementById('btn').onclick = () => {
                    document.querySelectorAll("td").forEach(element => {
                        element.classList.remove('x', 'circle', 'green');
                        um = '';
                        dois = '';
                        tres = '';
                        quatro = '';
                        cinco = '';
                        seis = '';
                        sete = '';
                        oito = '';
                        nove = '';
                    })
                }






                if (rx.classList.contains('num1')) {

                    if (valor === 'x') {
                        um = true;
                    }

                    if (valor === 'circle') {
                        um = false;
                    }

                    document.querySelector('.num1').classList.add(valor);



                }

                if (rx.classList.contains('num2')) {

                    if (valor === 'x') {
                        dois = true;
                    }

                    if (valor === 'circle') {
                        dois = false;
                    }

                    document.querySelector('.num2').classList.add(valor);


                }

                if (rx.classList.contains('num3')) {

                    if (valor === 'x') {
                        tres = true;
                    }

                    if (valor === 'circle') {
                        tres = false;
                    }

                    document.querySelector('.num3').classList.add(valor);


                }

                if (rx.classList.contains('num4')) {

                    if (valor === 'x') {
                        quatro = true;
                    }

                    if (valor === 'circle') {
                        quatro = false;
                    }

                    document.querySelector('.num4').classList.add(valor);


                }

                if (rx.classList.contains('num5')) {

                    if (valor === 'x') {
                        cinco = true;
                    }

                    if (valor === 'circle') {
                        cinco = false;
                    }

                    document.querySelector('.num5').classList.add(valor);


                }

                if (rx.classList.contains('num6')) {

                    if (valor === 'x') {
                        seis = true;
                    }

                    if (valor === 'circle') {
                        seis = false;
                    }

                    document.querySelector('.num6').classList.add(valor);


                }

                if (rx.classList.contains('num7')) {

                    if (valor === 'x') {
                        sete = true;
                    }

                    if (valor === 'circle') {
                        sete = false;
                    }

                    document.querySelector('.num7').classList.add(valor);


                }

                if (rx.classList.contains('num8')) {

                    if (valor === 'x') {
                        oito = true;
                    }

                    if (valor === 'circle') {
                        oito = false;
                    }

                    document.querySelector('.num8').classList.add(valor);


                }

                if (rx.classList.contains('num9')) {


                    if (valor === 'x') {
                        nove = true;
                    }

                    if (valor === 'circle') {
                        nove = false;
                    }



                    document.querySelector('.num9').classList.add(valor);


                }

            })

        }
    }
}

const Root = root();
Root.inicia();
