class Veiculo {
            constructor(marca, modelo, cor) {
                this.marca = marca;
                this.modelo = modelo;
                this.cor = cor;
                this.velocidade = 0;
            }

            acelerar(incremento) {
                this.velocidade += incremento;
            }

            frear(decremento) {
                if (this.velocidade >= decremento) {
                    this.velocidade -= decremento;
                } else {
                    this.velocidade = 0;
                }
            }
        }

        function simularVeiculo() {
            const marca = document.getElementById("marca").value;
            const modelo = document.getElementById("modelo").value;
            const cor = document.getElementById("cor").value;
            const acelerarValue = parseInt(document.getElementById("acelerar").value);
            const frearValue = parseInt(document.getElementById("frear").value);

            let meuCarro = new Veiculo(marca, modelo, cor);
            alert(`Meu carro é um ${meuCarro.marca} ${meuCarro.modelo} de cor ${meuCarro.cor}.`);
            alert(`A velocidade atual do veículo é ${meuCarro.velocidade} km/h.`);

            meuCarro.acelerar(acelerarValue);
            alert(`Acelerando, a velocidade agora é ${meuCarro.velocidade} km/h.`);

            meuCarro.frear(frearValue);
            alert(`Reduzindo a velocidade, agora é ${meuCarro.velocidade} km/h.`);
        }
