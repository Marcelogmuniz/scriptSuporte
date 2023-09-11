function formatarDocumento() {
    const inputCpfCnpj = document.getElementById('cpf');
    let valor = inputCpfCnpj.value.replace(/\D/g, ''); // Remove tudo que não é dígito (números) do valor

    if (valor.length <= 11) {
        // Formata CPF (123.456.789-01)
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
        // Formata CNPJ (12.345.678/0001-90)
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    inputCpfCnpj.value = valor;
}

function formatarTelefone() {
    const inputTel = document.getElementById('tel');
    let telefone = inputTel.value.replace(/\D/g, ''); // Remove tudo que não é dígito (números) do telefone

    if (telefone.length === 11) {
        // Formata telefone celular (11 9 1234-5678)
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 $3');
    } else if (telefone.length === 10 || telefone.length === 9) {
        // Formata telefone fixo com DDD ou celular sem DDD (11 1234-5678)
        telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    inputTel.value = telefone;
}

function copiarScript() {
    const nomeCliente = document.getElementById('scriptCliente').value;
    const motivo = document.getElementById('scriptMotivo').value;
    const cpfCnpj = document.getElementById('cpf').value;
    const telefone = document.getElementById('tel').value;
    const operador = document.getElementById('operador').value;

    const scriptFormatado = `MOTIVO: ${motivo}

TEL.: ${telefone}

OP.: ${operador}`;

    // Copiar o texto para a área de transferência (clipboard)
    const tempElement = document.createElement('textarea');
    tempElement.value = scriptFormatado;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    alert('Script copiado para a área de transferência!');
}

function limparScript() {
    document.getElementById('scriptCliente').value = '';
    document.getElementById('scriptMotivo').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('tel').value = '';
}

function copiarOSMoto() {
    const dataAgendamento = document.getElementById('motoAgendamento').value;
    // Extrair o dia, mês e ano da data ISO
    const ano = dataAgendamento.substring(0, 4);
    const mes = dataAgendamento.substring(5, 7);
    const dia = dataAgendamento.substring(8, 10);
    // Formatar a data no padrão dd/mm/yyyy
    const dataFormatada = `${dia}/${mes}/${ano}`;
    // Exibir a data formatada ao usuário

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

    // Copiar o texto para a área de transferência (clipboard)
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
    let motoTelefone = inputTelMoto.value.replace(/\D/g, ''); // Remove tudo que não é dígito (números) do motoTelefone

    if (motoTelefone.length === 11) {
        // Formata motoTelefone celular (11 91234-5678)
        motoTelefone = motoTelefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (motoTelefone.length === 10 || motoTelefone.length === 9) {
        // Formata motoTelefone fixo com DDD ou celular sem DDD (11 1234-5678)
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
