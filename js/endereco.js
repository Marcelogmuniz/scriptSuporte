function formatarTelEndereco() {
    const enderecoContato = document.getElementById("enderecoContato");
    let telEndereco = enderecoContato.value.replace(/\D/g, ''); // Remove tudo que não é dígito (números) do telEndereco

    if (telEndereco.length === 11) {
        // Formata telEndereco celular (11 9 1234-5678)
        telEndereco = telEndereco.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 $3');
    } else if (telEndereco.length === 10 || telEndereco.length === 9) {
        // Formata telEndereco fixo com DDD ou celular sem DDD (11 1234-5678)
        telEndereco = telEndereco.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    enderecoContato.value = telEndereco;
}

function copiarMudancaEndereco() {
    const enderecoAgendamento = document.getElementById('enderecoAgendamento').value;
    const ano = enderecoAgendamento.substring(0, 4);
    const mes = enderecoAgendamento.substring(5, 7);
    const dia = enderecoAgendamento.substring(8, 10);
    const dataEnderecoFormatada = `${dia}/${mes}/${ano}`;

    const enderecoCliente = document.getElementById("enderecoCliente").value;
    const enderecoContato = document.getElementById("enderecoContato").value;
    const enderecoAtual = document.getElementById("enderecoAtual").value;
    const enderecoNovo = document.getElementById("enderecoNovo").value;
    const enderecoReferencia = document.getElementById("enderecoReferencia").value;
    const enderecoMaps = document.getElementById("enderecoMaps").value;
    const enderecoOperador = document.getElementById("enderecoOperador").value;

    const osEnderecoFormada = `MUDANÇA DE ENDEREÇO

CLIENTE: ${enderecoCliente}
AGENDAMENTO: ${dataEnderecoFormatada}
CONTATO: ${enderecoContato}

ENDEREÇO ATUAL: ${enderecoAtual}
NOVO ENDEREÇO: ${enderecoNovo}
REFERÊNCIA: ${enderecoReferencia}
LOCALIZAÇÃO MAPS: ${enderecoMaps}

OP: ${enderecoOperador}`;

    // Criar um elemento de texto oculto
    const tempElement = document.createElement('textarea');
    tempElement.value = osEnderecoFormada;
    document.body.appendChild(tempElement);

    // Selecionar e copiar o texto
    tempElement.select();
    document.execCommand('copy');

    // Alerta de sucesso
    alert('O.S Mudança de endereço copiada para a área de transferência!');
}
