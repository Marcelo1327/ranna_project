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

};

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



const letterText = `
RELATÓRIO FINAL

Após meses de observação, análise de evidências, registros históricos e inúmeros momentos compartilhados, a investigação foi concluída.

Objeto analisado: RANNA

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

E o orgulho se transformou na certeza de que você é a pessoa mais especial que já passou pela minha vida.

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
const finalIntro = document.getElementById("final-intro");

let highlightInterval = null;
let highlightTimeout = null;

if (openFinal && finalScene && music) {

    openFinal.addEventListener("click", async () => {

        document.body.style.overflow = "hidden";

        // Abre o Arquivo Final
        finalScene.classList.add("active");

        // Faz a frase inicial sumir depois de 8 segundos
        setTimeout(() => {

            finalIntro.classList.add("hide");

        }, 8000);

        // Cria as fotos que passam ao fundo
        createFloatingGallery();

        // Inicia a música
        music.volume = 0;

        try {

            await music.play();

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

            console.error("Erro ao tocar música:", error);

        }

        // =====================================
        // FOTOS QUE GANHAM DESTAQUE
        // =====================================

        current = 0;

        // Espera 14 segundos depois de abrir o arquivo
        highlightTimeout = setTimeout(() => {

            showHighlight();

            highlightInterval = setInterval(() => {

                showHighlight();

            }, 6000);

        }, 14000);

    });

}

/* ==========================
   GALERIA FLUTUANTE
========================== */

const gallery =
document.getElementById("floating-gallery");

const totalPhotos = 31; // depois altere para a quantidade de fotos

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
    file:"35.jpg",
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
    text:"Sem fazer barulho, você entrou na minha vida e, aos poucos, transformou tudo ao seu redor. Hoje é impossível imaginar meus dias sem você."
},

{
    file:"4.jpg",
    title:"Ter você por perto",
    text:"Descobri que alguns momentos não precisam de nada extraordinário para serem especiais. Às vezes, ter você por perto já é o bastante para fazer um dia comum valer a pena."
},

{
    file:"36.jpg",
    title:"Seu olhar",
    text:"Há algo no seu olhar que sempre me faz acreditar que tudo vai dar certo, mesmo quando o mundo parece estar ao contrário."
},

{
    file:"3.jpg",
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
    file:"37.jpg",
    title:"Meu maior sonho",
    text:"Entre todos os sonhos que tenho, existe um que supera todos os outros: construir uma vida inteira ao seu lado."
},

{
    file:"28.jpg",
    title:"Obrigado",
    text:"Obrigado por acreditar em mim, por me ouvir, por cuidar de mim e por tornar meus dias muito mais felizes simplesmente sendo você."
},

{
    file:"31.jpg",
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
    title:"O que eu vejo em você",
    text:"Talvez você nem sempre consiga enxergar tudo o que existe de bonito em você. Mas eu vejo sua determinação, seus sonhos, seu coração e essa vontade de construir algo melhor. E espero que um dia você consiga se enxergar com um pouco dos olhos com que eu te enxergo."
},

{
    file:"32.jpg",
    title:"Você merece",
    text:"Espero que a vida retribua todo o carinho que você entrega a mim. E, se ela esquecer, eu faço questão de lembrar todos os dias o quanto você é especial."
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
    file:"34.jpg",
    title:"O amor mora nos detalhes",
    text:"Talvez você nunca perceba, mas são os pequenos detalhes que me fazem me apaixonar por você todos os dias de novo."
},

{
    file:"30.jpg",
    title:"Você mudou minha vida",
    text:"Sem perceber, você mudou a forma como eu vejo o mundo. Hoje ele parece mais bonito simplesmente porque você faz parte dele."
},

{
    file:"33.jpg",
    title:"A melhor coincidência",
    text:"Ainda me impressiona pensar que, entre bilhões de pessoas, a vida resolveu cruzar nossos caminhos outra vez. E foi a melhor coincidência que ela poderia ter criado."
},

{
    file:"22.jpg",
    title:"O começo do nosso para sempre",
    text:"Passei por tantas fotos suas tentando escolher as que poderiam mostrar o quanto você é especial para mim. Mas percebi que a minha favorita ainda nem existe. Ela é aquela em que estaremos, daqui a muitos anos, olhando para tudo o que vivemos e sorrindo por termos escolhido um ao outro todos os dias."
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

    const isLastPhoto = current === memories.length - 1;

    if (!isLastPhoto) {

        // Fotos normais desaparecem depois de 4 segundos
        setTimeout(() => {

            highlight.classList.remove("active");

        }, 4000);

    }

    current++;

    if (current === memories.length) {

        // Para a troca automática
        clearInterval(highlightInterval);

        // A última foto continua visível
        // e depois inicia o desfecho
        setTimeout(() => {

            finishExperience();

        }, 12000);

        return;
    }
}

const constellation =
    document.getElementById("constellation");

const constellationCanvas =
    document.getElementById("constellation-canvas");

const constellationMessage =
    document.getElementById("constellation-message");

const ctx =
    constellationCanvas.getContext("2d");

    function resizeConstellationCanvas(){

    constellationCanvas.width =
        window.innerWidth;

    constellationCanvas.height =
        window.innerHeight;

}

resizeConstellationCanvas();

window.addEventListener(
    "resize",
    resizeConstellationCanvas
);

const letterPatterns = {

    R:[
        [0,0],[0,1],[0,2],[0,3],[0,4],
        [1,0],[2,0],[2,1],[2,2],
        [1,2],
        [1,3],[2,4]
    ],

    A:[
        [1,0],
        [0,1],[2,1],
        [0,2],[1,2],[2,2],
        [0,3],[2,3],
        [0,4],[2,4]
    ],

  N:[
    [0,0],[0,1],[0,2],[0,3],[0,4],

    [0.75,1],
    [1.5,2],
    [2.25,3],

    [3,0],[3,1],[3,2],[3,3],[3,4]
],

    I:[
        [0,0],[1,0],[2,0],
        [1,1],[1,2],[1,3],
        [0,4],[1,4],[2,4]
    ],

    H:[
        [0,0],[0,1],[0,2],[0,3],[0,4],
        [2,0],[2,1],[2,2],[2,3],[2,4],
        [1,2]
    ]

};

function createNamePoints(){

    const word = "RANNINHA";

    const points = [];

    const spacing = 22;

    // Espaço REAL entre uma letra e outra
    const gap = 35;


    // Descobre automaticamente a largura
    // verdadeira de cada letra
    function getLetterWidth(letter){

        const pattern = letterPatterns[letter];

        const xs = pattern.map(point => point[0]);

        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);

        return (maxX - minX) * spacing;

    }


    // Calcula a largura total do nome
    let totalWidth = 0;

    word.split("").forEach((letter, index) => {

        totalWidth += getLetterWidth(letter);

        if(index < word.length - 1){
            totalWidth += gap;
        }

    });


    // Centraliza RANNINHA
    let currentX =
        (window.innerWidth - totalWidth) / 2;


    const startY =
        window.innerHeight * 0.28;


    word.split("").forEach((letter, index) => {

        const pattern =
            letterPatterns[letter];


        pattern.forEach(([x,y]) => {

            points.push({

                x:
                    currentX +
                    x * spacing,

                y:
                    startY +
                    y * spacing

            });

        });


        // Avança exatamente a largura
        // da letra atual
        currentX +=
            getLetterWidth(letter);


        // Adiciona apenas o espaço entre letras
        if(index < word.length - 1){

            currentX += gap;

        }

    });


    return points;

}

let constellationStars = [];

function prepareConstellation(){

    const targets = createNamePoints();

    constellationStars = targets.map((target, index) => {

        const side = Math.floor(Math.random() * 4);

        let startX;
        let startY;

        // 0 = esquerda
        if(side === 0){
            startX = -150 - Math.random() * 250;
            startY = Math.random() * window.innerHeight;
        }

        // 1 = direita
        if(side === 1){
            startX = window.innerWidth + 150 + Math.random() * 250;
            startY = Math.random() * window.innerHeight;
        }

        // 2 = topo
        if(side === 2){
            startX = Math.random() * window.innerWidth;
            startY = -150 - Math.random() * 250;
        }

        // 3 = baixo
        if(side === 3){
            startX = Math.random() * window.innerWidth;
            startY = window.innerHeight + 150 + Math.random() * 250;
        }

        return {

            x: startX,
            y: startY,

            targetX: target.x,
            targetY: target.y,

            letter: target.letter,
            letterIndex: target.letterIndex,
            pointIndex: target.pointIndex,

            radius: 1.5 + Math.random() * 1.4,

            opacity: 0,

            delay: index * 95,

            arrived: false,

            trail: []

        };

    });

}

function animateConstellation(){

    const startTime = performance.now();

    function frame(){

        ctx.clearRect(
            0,
            0,
            constellationCanvas.width,
            constellationCanvas.height
        );

        const now = performance.now();

        let allArrived = true;

        constellationStars.forEach(star => {

            const elapsed =
                now - startTime - star.delay;

            if(elapsed < 0){
                allArrived = false;
                return;
            }

            star.opacity += 0.05;

            if(star.opacity > 1){
                star.opacity = 1;
            }

            const dx =
                star.targetX - star.x;

            const dy =
                star.targetY - star.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            // Guarda posições anteriores
            star.trail.push({
                x: star.x,
                y: star.y
            });

            if(star.trail.length > 13){
                star.trail.shift();
            }


            // Movimento
            if(distance > 2){

                star.x += dx * 0.09;
                star.y += dy * 0.09;

                allArrived = false;

            }else{

                star.x = star.targetX;
                star.y = star.targetY;

                star.arrived = true;

            }


            // ==========================
            // RASTRO DA ESTRELA CADENTE
            // ==========================

            if(!star.arrived){

                for(
                    let i = 0;
                    i < star.trail.length - 1;
                    i++
                ){

                    const a = star.trail[i];
                    const b = star.trail[i + 1];

                    const progress =
                        i / star.trail.length;

                    ctx.beginPath();

                    ctx.moveTo(
                        a.x,
                        a.y
                    );

                    ctx.lineTo(
                        b.x,
                        b.y
                    );

                    ctx.strokeStyle =
                        `rgba(
                            210,
                            185,
                            255,
                            ${progress * .55}
                        )`;

                    ctx.lineWidth =
                        .4 + progress * 2;

                    ctx.stroke();

                }

            }


            // ==========================
            // ESTRELA
            // ==========================

            ctx.beginPath();

            ctx.arc(
                star.x,
                star.y,
                star.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(
                    225,
                    210,
                    255,
                    ${star.opacity}
                )`;

            ctx.shadowBlur =
                star.arrived
                    ? 12
                    : 25;

            ctx.shadowColor =
                `rgba(
                    160,
                    90,
                    255,
                    ${star.opacity}
                )`;

            ctx.fill();

        });


        if(!allArrived){

            requestAnimationFrame(frame);

        }else{

            drawConstellationLines();

            setTimeout(() => {

                constellationMessage
                    .classList
                    .add("show");

            },1000);

        }

    }

    frame();

}

function drawConstellationLines(){

    ctx.shadowBlur = 0;

    ctx.strokeStyle =
        "rgba(170,120,255,.22)";

    ctx.lineWidth = 0.7;

    for(
        let i = 0;
        i < constellationStars.length;
        i++
    ){

        for(
            let j = i + 1;
            j < constellationStars.length;
            j++
        ){

            const a =
                constellationStars[i];

            const b =
                constellationStars[j];

            const dx = a.x - b.x;
            const dy = a.y - b.y;

            const distance =
                Math.sqrt(
                    dx*dx + dy*dy
                );

            if(distance < 34){

                ctx.beginPath();

                ctx.moveTo(a.x,a.y);

                ctx.lineTo(b.x,b.y);

                ctx.stroke();

            }

        }

    }
}

function finishExperience(){

    // Fotos do fundo desaparecem
    const floatingPhotos =
        document.querySelectorAll(
            ".floating-photo"
        );

    floatingPhotos.forEach(
        (photo,index) => {

            setTimeout(() => {

                photo.style.opacity = "0";

            }, index * 70);

        }
    );

    // Última foto permanece um pouco
    setTimeout(() => {

        highlight.classList.remove(
            "active"
        );

    },2500);

    // Constelação entra
    setTimeout(() => {

        constellation.classList.add(
            "active"
        );

        prepareConstellation();

        animateConstellation();

    },4000);

}

const accessScreen =
    document.getElementById("access-screen");

const accessPassword =
    document.getElementById("access-password");

const accessButton =
    document.getElementById("access-button");

const accessError =
    document.getElementById("access-error");


// TROQUE AQUI PELA SENHA QUE VOCÊ QUISER
const correctPasswords = [
    "538",
    "586",
    "262708"
];


function unlockSite(){

    const typedPassword =
        accessPassword.value.trim();

    if(correctPasswords.includes(typedPassword)){

        accessError.textContent = "";

        accessScreen.classList.add("unlocked");

        document.body.style.overflow = "";

    }else{

        accessError.textContent =
            "Chave de acesso incorreta.";

        accessPassword.value = "";

        accessPassword.focus();

    }

}


accessButton.addEventListener(
    "click",
    unlockSite
);


accessPassword.addEventListener(
    "keydown",
    event => {

        if(event.key === "Enter"){
            unlockSite();
        }

    }
);

const TEST_FINAL = false;

if (TEST_FINAL) {

    window.addEventListener("load", () => {

        document.body.style.overflow = "hidden";

        finalScene.classList.add("active");

        // Esconde introdução
        if (finalIntro) {
            finalIntro.classList.add("hide");
        }

        // Esconde foto em destaque
        highlight.classList.remove("active");

        // Mostra direto a constelação
        constellation.classList.add("active");

        prepareConstellation();

        animateConstellation();

    });

}

document.body.style.overflow = "hidden"; 

const notificationTrigger =
    document.getElementById("notification-trigger");

const storyNotification =
    document.getElementById("story-notification");

const notificationText =
    document.getElementById("notification-text");

const receivedMessage =
    document.getElementById("received-message");

let notificationShown = false;


if (
    notificationTrigger &&
    storyNotification &&
    notificationText &&
    receivedMessage
) {

    const notificationObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        !notificationShown
                    ) {

                        notificationShown = true;


                        // 1 - primeira mensagem
                        setTimeout(() => {

                            storyNotification
                                .classList
                                .add("show");

                        }, 900);


                        // 2 - troca para "Era tu, besta."
                        setTimeout(() => {

                            notificationText
                                .classList
                                .add("change");

                            setTimeout(() => {

                                notificationText.textContent =
                                    "Era tu, besta.";

                                notificationText
                                    .classList
                                    .remove("change");

                            }, 450);

                        }, 3600);


                        // 3 - notificação some
                        setTimeout(() => {

                            storyNotification
                                .classList
                                .remove("show");

                        }, 7000);


                        // 4 - conteúdo aparece no corpo
                        setTimeout(() => {

                            receivedMessage
                                .classList
                                .add("show");

                        }, 7800);


                        notificationObserver.disconnect();

                    }

                });

            },
            {
                threshold:.8,
                rootMargin:"-25% 0px -25% 0px"
            }
        );

    notificationObserver.observe(
        notificationTrigger
    );

}