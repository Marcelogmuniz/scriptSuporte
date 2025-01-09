function copiarOSMoto() {
    const dataAgendamento = document.getElementById('motoAgendamento').value;

    const ano = dataAgendamento.substring(0, 4);
    const mes = dataAgendamento.substring(5, 7);
    const dia = dataAgendamento.substring(8, 10);

    const dataFormatada = `${dia}/${mes}/${ano}`;

    const horario = document.getElementById('motoHora').value;
    const plano = document.getElementById('motoPlano').value;
    const contatoMoto = document.getElementById('motoTel').value;
    const solicitacao = document.getElementById('motoSolicitacao').value;
    const procedimentos = document.getElementById('motoProcedimentos').value;
    const sinalStatus = document.getElementById('motoSinalStatus').value;
    const concentrador = document.getElementById('motoConcentrador').value;
    const nas = document.getElementById('motoNAS').value;
    const pontoReferencia = document.getElementById('motoEndReferencia').value;
    const historicoQuedas = document.getElementById('motoHistoricoQuedas').value;
    const ultimaOS = document.getElementById('motoUltimaOS').value;
    const selectElement = document.getElementById('osSuporte');
    const osSuporteSelecionada = selectElement.value;
    const osSuporteTexto = osSuporteSelecionada === 'sim' ? '[X]SIM [ ]NAO' : '[ ]SIM [X]NAO';
    const operadorMoto = document.getElementById('operadorOSMoto').value;

    const osFormatada = `O.S MOTO

DATA E HORÁRIO: ${dataFormatada} - ${horario}
PLANO: ${plano}
RELATO: ${solicitacao}
TRATATIVA: ${procedimentos}
O.S DE SUPORTE NOS ÚLTIMOS 3 MESES: ${osSuporteTexto}
SE SIM: ${ultimaOS}

HISTÓRICO DE QUEDAS: 
${historicoQuedas}

*INFORMAÇÕES TÉCNICAS*
SINAL/STATUS ONU: ${sinalStatus}
CONCENTRADOR: ${concentrador}
NAS: ${nas}
PONTO DE REFERÊNCIA: ${pontoReferencia}
TELEFONE: ${contatoMoto}
OP: ${operadorMoto}`;

    const tempElement = document.createElement('textarea');
    tempElement.value = osFormatada;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    alert('O.S copiada para a área de transferência!');
}

function limparOSMoto() {
    document.getElementById('motoAgendamento').value = '';
    document.getElementById('motoHora').value = '';
    document.getElementById('motoPlano').value = '';
    document.getElementById('motoTel').value = '';
    document.getElementById('motoSolicitacao').value = '';
    document.getElementById('motoProcedimentos').value = '';
    document.getElementById('motoSinalStatus').value = '';
    document.getElementById('motoConcentrador').value = '';
    document.getElementById('motoNAS').value = '';
    document.getElementById('motoEndReferencia').value = '';
    document.getElementById('motoHistoricoQuedas').value = '';
    document.getElementById('osSuporte').value = 'selecione';
    document.getElementById('opcaoSelecionada').style.display = 'none';
    document.getElementById('motoUltimaOS').value = '';
}

function formatarTelefoneOSMoto() {
    const inputTelMoto = document.getElementById('motoTel');
    let motoTelefone = inputTelMoto.value.replace(/\D/g, '');

    if (motoTelefone.length === 11) {

        motoTelefone = motoTelefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (motoTelefone.length === 10 || motoTelefone.length === 9) {

        motoTelefone = motoTelefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    inputTelMoto.value = motoTelefone;
}

function mostrarOpcaoSelecionada() {
    const selectElement = document.getElementById('osSuporte');
    const divOpcaoSelecionada = document.getElementById('opcaoSelecionada');

    if (selectElement.value === 'sim') {
        divOpcaoSelecionada.style.display = 'block';
    } else {
        divOpcaoSelecionada.style.display = 'none';
    }
}