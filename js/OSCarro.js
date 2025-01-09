function formatarTelefoneOSCarro() {
    const inputTel = document.getElementById('carroTel');
    let telCarro = inputTel.value.replace(/\D/g, ''); 

    if (telCarro.length === 11) {
     
        telCarro = telCarro.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 $3');
    } else if (telCarro.length === 10 || telCarro.length === 9) {
       
        telCarro = telCarro.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    carroTel.value = telCarro;
}

function copiarOSCarro() {
    const carroAgendamento = document.getElementById('carroAgendamento').value;

    const anoCarro = carroAgendamento.substring(0, 4);
    const mesCarro = carroAgendamento.substring(5, 7);
    const diaCarro = carroAgendamento.substring(8, 10);

    const dataCarroAgendamento = `${diaCarro}/${mesCarro}/${anoCarro}`;


    const carroCLiente = document.getElementById('carroCLiente').value;
    const carroSolicitacao = document.getElementById('carroSolicitacao').value;
    const carroTel = document.getElementById('carroTel').value;
    const carroOperador = document.getElementById('carroOperador').value;

    const scriptCarro = `O.S CARRO

CLIENTE: ${carroCLiente}
AGENDAMENTO: ${dataCarroAgendamento}
TEL.: ${carroTel}
SOLICITAÇÃO ${carroSolicitacao}

OP.: ${carroOperador}`;

    const tempElement = document.createElement('textarea');
    tempElement.value = scriptCarro;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    alert('Script copiado para a área de transferência!');
}

function limparOSCarro() {
    document.getElementById('carroCLiente').value = '';
    document.getElementById('carroSolicitacao').value = '';
    document.getElementById('carroAgendamento').value = '';
    document.getElementById('carroTel').value = '';
}
