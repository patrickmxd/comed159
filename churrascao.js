
const handleSubmit = (event) => {
    event.preventDefault();
const name = document.querySelector('input[name=nome]').value;
const email = document.querySelector('input[name=email]').value;
const matricula = document.querySelector('input[name=matricula]').value;
const modo = document.querySelector('input[name=modo]').value;

    fetch('https://api.sheetmonkey.io/form/vfykE7dUXWK527zM2iiEU5', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: name, email: email, matricula: matricula, modo: modo})
    });

}

document.querySelector('form') .addEventListener('submit', handleSubmit);
