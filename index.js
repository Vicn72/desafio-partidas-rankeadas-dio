function determinarRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    switch (true) {
        case saldoVitorias <= 10:
            nivel = "Ferro";
            break;
        case saldoVitorias >= 11 && saldoVitorias <= 20:
            nivel = "Bronze";
            break;
        case saldoVitorias >= 21 && saldoVitorias <= 50:
            nivel = "Prata";
            break;
        case saldoVitorias >= 51 && saldoVitorias <= 80:
            nivel = "Ouro";
            break;
        case saldoVitorias >= 81 && saldoVitorias <= 90:
            nivel = "Diamante";
            break;
        case saldoVitorias >= 91 && saldoVitorias <= 100:
            nivel = "Lendário";
            break;
        case saldoVitorias >= 101:
            nivel = "Imortal";
            break;
        default:
            nivel = "Nível indefinido";
    }

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}


determinarNivel(30, 5);

