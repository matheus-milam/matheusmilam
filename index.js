 const ANO_LANCAMENTO = 2026;
        let anoAtual = new Date().getFullYear();

        if (anoAtual == ANO_LANCAMENTO) {
            alert("📢 NOTÍCIA: Este jogo é um GRANDE LANÇAMENTO deste ano!");
        }

        
        let nomeVisitante = prompt("Bem-vindo ao site do Zombie Attack! Qual é o seu nome?");
        let idadeVisitante = prompt("Olá, " + nomeVisitante + "! Qual é a sua idade para acessar o conteúdo sensível?");

        if (idadeVisitante >= 18) {
          
            alert("Parabéns, " + nomeVisitante + "! O seu acesso foi liberado com sucesso.");
           
            document.getElementById("conteudo-sensivel").style.filter = "none";
        } 
        else {
           
            alert("Acesso negado, " + nomeVisitante + ". Por segurança, o site será bloqueado.");
            
            document.body.style.filter = "blur(40px)";
        }

        function mudarTema() {
            document.body.classList.toggle("claro");
        }
function refazerVerification() {
    location.reload();
}
        if (idadeVisitante < 18) {
            document.getElementById("refazer-v").style.display = "block";
        }