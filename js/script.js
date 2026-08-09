/* ==========================
   ANIMAÇÕES AO ROLAR
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".chapter, .gallery, #moment, #letter, #ending"
).forEach(el => {
    observer.observe(el);
});

/* ==========================
   ARQUIVOS SECRETOS
========================== */

const files = document.querySelectorAll(".file");

files.forEach(file => {

    file.addEventListener("click", () => {

        const title = file.textContent;

       const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modal-title");

const modalText =
    document.getElementById("modal-text");

const closeModal =
    document.getElementById("close-modal");

const documents = {

    admiracao: {
        title: "O que admiro em você",

        text: `
        <p>
        Eu admiro a forma como você sonha.
        Não apenas sonha, mas corre atrás.
        Você quer construir uma vida boa,
        ter sua casa, viajar e conquistar
        suas próprias vitórias.
        </p>

        <p>
        Sua determinação é uma das coisas
        mais bonitas que existem em você.
        </p>
        `
    },

    ensinou: {
        title: "O que você me ensinou",

        text: `
        <p>
        Você me ensinou que algumas pessoas
        entram na nossa vida no momento certo.
        </p>

        <p>
        E que às vezes uma história não termina,
        apenas espera o momento certo para continuar.
        </p>
        `
    },

    naodisse: {
        title: "Coisas que nunca disse",

        text: `
        <p>
        Durante muito tempo eu achei que
        nossa história tinha ficado para trás.
        </p>

        <p>
        Hoje fico feliz por estar completamente
        enganado.
        </p>
        `
    },

    futuro: {
        title: "Meu futuro ideal",

        text: `
        <p>
        Não sonho com uma vida perfeita.
        </p>

        <p>
        Sonho apenas com uma vida cheia
        de memórias, conquistas e momentos
        compartilhados com você.
        </p>
        `
    }

};

files.forEach(file => {

    file.addEventListener("click", () => {

        const key =
            file.dataset.file;

        modalTitle.textContent =
            documents[key].title;

        modalText.innerHTML =
            documents[key].text;

        modal.classList.add("active");

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", e => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});

    });

});

/* ==========================
   EFEITO DE DIGITAÇÃO
========================== */

function typeWriter(element, speed = 60) {

    const text = element.dataset.text;

    if (!text) return;

    element.textContent = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            element.textContent += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

/* ==========================
   FRASE PRINCIPAL
========================== */

const momentTitle =
    document.querySelector("#moment h1");

if (momentTitle) {

    momentTitle.dataset.text =
        momentTitle.textContent;

    momentTitle.textContent = "";

    const momentObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    typeWriter(momentTitle, 100);

                    momentObserver.disconnect();

                }

            });

        });

    momentObserver.observe(momentTitle);

}

/* ==========================
   EFEITO PARALLAX SUAVE
========================== */

window.addEventListener("scroll", () => {

    const stars =
        document.getElementById("stars");

    const scrollY =
        window.scrollY;

    stars.style.transform =
        `translateY(${scrollY * 0.15}px)`;

});

/* ==========================
   BOTÃO INICIAL
========================== */

const startBtn =
    document.getElementById("start-btn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document
            .getElementById("hero")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}

/* ==========================
   GALERIA
========================== */

const photos = document.querySelectorAll(".photo");

const modal = document.getElementById("photo-modal");
const modalImg = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const closePhoto = document.getElementById("close-photo");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        // fade out antes de trocar
        modalImg.style.opacity = 0;
        modalCaption.style.opacity = 0;

        modal.classList.add("active");

        setTimeout(() => {

            modalImg.src = photo.src;
            modalCaption.textContent = photo.dataset.caption;

            modalImg.style.opacity = 1;
            modalCaption.style.opacity = 1;

        }, 200);

    });

});

closePhoto.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.remove("active");
    }
});

/* ==========================
   FASES DA LUA
========================== */

const moonShadow =
    document.getElementById("moon-shadow");

window.addEventListener("scroll", () => {

    const maxScroll =
        document.body.scrollHeight -
        window.innerHeight;

    const progress =
        window.scrollY / maxScroll;

    const translate =
        progress * 100;

    moonShadow.style.transform =
        `translateX(${-translate}%)`;

});

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const height =
        document.body.scrollHeight -
        window.innerHeight;

    const progress =
        scroll / height;

    let phase = 0;

    if(progress > 0.2) phase = 1;
    if(progress > 0.4) phase = 2;
    if(progress > 0.6) phase = 3;
    if(progress > 0.8) phase = 4;

    moon.textContent =
        moonPhases[phase];

});

const evidenceData = {

    1: {
        title: "EVIDÊNCIA #001 — O Cubo Mágico",
        text: `
        O primeiro contato registrado ocorreu em um ambiente escolar.

        Um simples cubo mágico foi o elemento inicial de uma conexão
        que ainda não era compreendida pelos envolvidos.

        Naquele momento, parecia apenas curiosidade.
        Hoje, é classificado como o início de tudo.
        `
    },

    2: {
        title: "EVIDÊNCIA #002 — A Amizade",
        text: `
        Interações frequentes foram registradas após o primeiro contato.

        Conversas, jogos e presença constante indicam
        formação de vínculo emocional progressivo.

        O objeto analisado passou a ocupar espaço relevante na rotina.
        `
    },

    3: {
        title: "EVIDÊNCIA #003 — O Silêncio",
        text: `
        Após o encerramento do ensino médio,
        houve uma interrupção significativa nos registros.

        O caso foi temporariamente arquivado.

        Nenhum contato relevante foi identificado por um longo período.
        `
    },

    4: {
        title: "EVIDÊNCIA #004 — O Reencontro",
        text: `
        Em 2026, o caso foi reaberto.

        Uma nova conexão foi estabelecida através de redes sociais.

        O que parecia encerrado foi reativado instantaneamente.
        `
    },

    5: {
        title: "EVIDÊNCIA CRÍTICA — Era tu, besta",
        text: `
        Durante uma conversa informal,
        uma informação determinante foi revelada.

        A partir deste momento,
        toda a linha de investigação foi reavaliada.

        O caso deixou de ser apenas observacional.
        `
    }

};

const evidenceCards =
    document.querySelectorAll(".evidence");

const evidenceModal =
    document.getElementById("evidence-modal");

const evidenceTitle =
    document.getElementById("evidence-title");

const evidenceText =
    document.getElementById("evidence-text");

const closeEvidence =
    document.getElementById("close-evidence");

evidenceCards.forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.id;

        evidenceTitle.textContent =
            evidenceData[id].title;

        evidenceText.innerHTML =
            evidenceData[id].text;

        evidenceModal.classList.add("active");

    });

});

closeEvidence.addEventListener("click", () => {
    evidenceModal.classList.remove("active");
});

evidenceModal.addEventListener("click", (e) => {
    if(e.target === evidenceModal){
        evidenceModal.classList.remove("active");
    }
});

const letterText = `
RELATÓRIO FINAL

Após meses de observação, análise de evidências, registros históricos e inúmeros momentos compartilhados, a investigação foi concluída.

Objeto analisado: [Nome dela]

Resultado:

Ao longo da investigação foram identificadas características incomuns.

Foi constatada uma capacidade rara de iluminar dias difíceis com apenas algumas palavras.

Foi observada uma determinação acima da média, especialmente nos momentos em que seria mais fácil desistir.

Também foram encontrados indícios consistentes de carinho, inteligência, coragem e uma incrível habilidade de fazer as pessoas se sentirem importantes.

Durante a análise, surgiu um problema.

Quanto mais informações eram coletadas, mais difícil se tornava manter a imparcialidade do investigador.

Em determinado momento, os relatórios deixaram de ser apenas relatórios.

As observações se transformaram em admiração.

A admiração se transformou em orgulho.

E o orgulho se transformou na certeza de que você é uma das pessoas mais especiais que já passaram pela minha vida.

Esta investigação começou tentando descobrir quem você é.

Mas terminou mostrando o quanto você significa.

Por isso, neste aniversário, eu não quero apenas desejar felicidade.

Quero que você se lembre de algo:

Nos dias em que você duvidar de si mesma, lembre-se de que existe alguém que enxerga muito mais em você do que você consegue enxergar.

Alguém que acredita nos seus sonhos.

Que comemora suas conquistas.

Que torce por você mesmo quando ninguém está olhando.

E que tem a sorte de conhecer a pessoa incrível que você é.

Conclusão final:

Nenhuma evidência foi encontrada de que você seja uma pessoa comum.

Caso encerrado.

Feliz aniversário, meu amor.

— Marcelo

`;

function typeWriter(element, text, speed = 25) { //25

    let i = 0;

    function typing() {

        if (i < text.length){

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }else{

            // terminou a carta

            setTimeout(()=>{

                document
                    .querySelector(".secret-file")
                    .classList.add("show");

            },1000);

        }

    }

    typing();

}

const letterSection = document.getElementById("letter");
const typedText = document.getElementById("typed-text");

let letterStarted = false;

const letterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !letterStarted) {

            letterStarted = true;

            typedText.innerHTML = "";

            typeWriter(typedText, letterText, 18);

        }

    });

}, {
    threshold: 0.6
});

letterObserver.observe(letterSection);

const openFinal = document.getElementById("open-final");
const finalScene = document.getElementById("final-scene");
const music = document.getElementById("bg-music");

openFinal.addEventListener("click", async () => {

    document.body.style.overflow = "hidden";

    finalScene.classList.add("active");

    createFloatingGallery();

    // Música
    music.volume = 0;

    try {

        await music.play();

        console.log("Música iniciada com sucesso!");

        let volume = 0;

        const fade = setInterval(() => {

            volume += 0.02;

            if (volume >= 0.5) {

                volume = 0.5;
                music.volume = volume;

                clearInterval(fade);

                return;
            }

            music.volume = volume;

        }, 100);

    } catch (error) {

        console.error("ERRO AO TOCAR A MÚSICA:", error);

    }

});

/* ==========================
   GALERIA FLUTUANTE
========================== */

const gallery =
document.getElementById("floating-gallery");

const totalPhotos = 30; // depois altere para a quantidade de fotos

function createFloatingGallery(){

    for(let i = 1; i <= totalPhotos; i++){

        const img = document.createElement("img");

        img.src = `assets/fotos/${i}.jpg`;

        img.classList.add("floating-photo");

        img.style.left = Math.random()*100 + "vw";

        img.style.top = Math.random()*100 + "vh";

        img.style.width =
            (170 + Math.random()*110) + "px";

        img.style.animationDuration =
            (22 + Math.random()*18) + "s";

        img.style.animationDelay =
            (Math.random()*15) + "s";

        img.style.setProperty(
            "--rotate",
            (Math.random()*30 - 15) + "deg"
        );

        gallery.appendChild(img);

    }

}

const memories = [

{
    file:"3.jpg",
    title:"O seu sorriso",
    text:"Existem milhares de sorrisos no mundo, mas foi o seu que escolheu morar no meu coração."
},

{
    file:"17.jpg",
    title:"Meu lugar favorito",
    text:"Descobri que meu lugar favorito nunca foi uma cidade ou uma paisagem. Sempre foi qualquer lugar onde você estivesse."
},

{
    file:"1.jpg",
    title:"Você chegou",
    text:"Sem fazer barulho, você entrou na minha vida e, aos poucos, transformou tudo ao seu redor. Hoje é impossível imaginar meus dias sem a sua presença."
},

{
    file:"4.jpg",
    title:"Seu abraço",
    text:"Existem lugares que transmitem paz. Para mim, um deles sempre será o espaço entre os seus braços."
},

{
    file:"7.jpg",
    title:"Seu olhar",
    text:"Há algo no seu olhar que sempre me faz acreditar que tudo vai dar certo, mesmo quando o mundo parece estar ao contrário."
},

{
    file:"10.jpg",
    title:"Nossa história",
    text:"Às vezes penso em quantas pequenas coincidências precisaram acontecer para que nossos caminhos se encontrassem outra vez. Sou grato por cada uma delas."
},

{
    file:"12.jpg",
    title:"Você me inspira",
    text:"Você me faz querer ser uma pessoa melhor, não por obrigação, mas porque acredito que alguém tão incrível merece receber o melhor de mim."
},

{
    file:"13.jpg",
    title:"Cada detalhe",
    text:"O jeito que você sorri, que fala, que sonha e até as pequenas coisas que talvez você nem perceba... tudo isso faz você ser única."
},

{
    file:"15.jpg",
    title:"Meu presente",
    text:"Se alguém me perguntasse qual foi o maior presente que recebi nos últimos anos, eu responderia sem pensar duas vezes: conhecer você."
},

{
    file:"16.jpg",
    title:"Meu orgulho",
    text:"Tenho orgulho da mulher que você é hoje e ainda mais orgulho da mulher incrível que sei que você vai se tornar."
},

{
    file:"18.jpg",
    title:"Um desejo",
    text:"Espero que todos os seus sonhos encontrem um caminho até você. E, se me permitir, quero caminhar ao seu lado enquanto eles se realizam."
},

{
    file:"19.jpg",
    title:"Seu coração",
    text:"O mundo seria um lugar muito melhor se existissem mais pessoas com um coração tão bonito quanto o seu."
},

{
    file:"21.jpg",
    title:"Para sempre",
    text:"Não sei exatamente o que o futuro reserva para nós. Mas, se ele tiver você ao meu lado, já sei que valerá a pena."
},

{
    file:"23.jpg",
    title:"Meu refúgio",
    text:"Nos dias bons eu quero dividir minha felicidade com você. Nos dias difíceis, é em você que encontro força para continuar."
},

{
    file:"24.jpg",
    title:"Mais uma lembrança",
    text:"Cada foto guarda um instante. Mas nenhuma delas consegue mostrar o quanto cada momento ao seu lado significou para mim."
},

{
    file:"26.jpg",
    title:"Meu maior sonho",
    text:"Entre todos os sonhos que tenho, existe um que supera todos os outros: construir uma vida inteira ao seu lado."
},

{
    file:"28.jpg",
    title:"Obrigado",
    text:"Obrigado por acreditar em mim, por me ouvir, por cuidar de mim e por tornar meus dias muito mais felizes simplesmente sendo você."
},

{
    file:"8.jpg",
    title:"A paz que encontrei",
    text:"Você chegou sem prometer nada, mas acabou me dando exatamente aquilo que eu mais precisava: paz."
},

{
    file:"25.jpg",
    title:"O tempo",
    text:"Se eu pudesse escolher um superpoder, não seria voltar no tempo... seria fazer cada instante ao seu lado durar um pouquinho mais."
},

{
    file:"11.jpg",
    title:"Minha pessoa",
    text:"Entre tantas pessoas que passaram pela minha vida, você foi a que transformou dias comuns em lembranças inesquecíveis."
},

{
    file:"29.jpg",
    title:"Seu jeito",
    text:"Eu me apaixonei pelo seu jeito de enxergar o mundo, pela sua força, pela sua doçura e até pelas pequenas manias que fazem você ser exatamente quem é."
},

{
    file:"6.jpg",
    title:"Você merece",
    text:"Espero que a vida retribua todo o carinho que você entrega ao mundo. E, se ela esquecer, eu faço questão de lembrar todos os dias o quanto você é especial."
},

{
    file:"20.jpg",
    title:"Os nossos sonhos",
    text:"Ainda temos muitos lugares para conhecer, muitas risadas para compartilhar e muitos sonhos para realizar. E eu quero viver cada um deles ao seu lado."
},

{
    file:"14.jpg",
    title:"Minha lua",
    text:"Você é como a lua: mesmo quando acha que não está brilhando, continua iluminando a vida de quem tem a sorte de olhar para você."
},

{
    file:"2.jpg",
    title:"Gratidão",
    text:"Obrigado por existir. Parece uma frase simples, mas ela carrega tudo aquilo que às vezes nem as palavras conseguem explicar."
},

{
    file:"27.jpg",
    title:"O futuro",
    text:"Quando penso no futuro, não imagino uma casa perfeita ou uma vida perfeita. Imagino você sorrindo, e isso já faz qualquer futuro parecer perfeito."
},

{
    file:"9.jpg",
    title:"O amor mora nos detalhes",
    text:"Talvez você nunca perceba, mas são os pequenos detalhes que me fazem me apaixonar por você todos os dias de novo."
},

{
    file:"30.jpg",
    title:"Você mudou minha vida",
    text:"Sem perceber, você mudou a forma como eu vejo o mundo. Hoje ele parece mais bonito simplesmente porque você faz parte dele."
},

{
    file:"5.jpg",
    title:"A melhor coincidência",
    text:"Ainda me impressiona pensar que, entre bilhões de pessoas, a vida resolveu cruzar nossos caminhos outra vez. E foi a melhor coincidência que ela poderia ter criado."
},

{

    file:"22.jpg",
    title:"O começo do nosso para sempre",
    text:"Todas essas fotos contam um pouco da nossa história. Mas a minha favorita ainda não foi tirada. Ela é aquela em que estaremos, daqui a muitos anos, olhando para tudo isso e sorrindo por termos escolhido um ao outro todos os dias."

}

];

const highlight =
document.getElementById("photo-highlight");

const img =
document.getElementById("highlight-image");

const title =
document.getElementById("highlight-title");

const text =
document.getElementById("highlight-text");




let current = 0;

function showHighlight(){

    const photo = memories[current];

    img.src = "assets/fotos/" + photo.file;

    title.textContent = photo.title;

    text.textContent = photo.text;



    highlight.classList.add("active");

    setTimeout(()=>{

        highlight.classList.remove("active");

    },4000);

    current++;

if(current === memories.length){

    // Para na última foto
    clearInterval(highlightInterval);

    // Espera a pessoa apreciar a última lembrança
    setTimeout(() => {

        finishExperience();

    }, 12000);

    return;

}

}



