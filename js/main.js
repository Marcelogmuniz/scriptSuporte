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
    const motivo = document.getElementById('scriptMotivo').value;
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