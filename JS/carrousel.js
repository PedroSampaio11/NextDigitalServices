// busca as informações no html
document.addEventListener("DOMContentLoaded", () => {
    const before = document.querySelector("#before-a");
    const after = document.querySelector("#after-a");
    const paragraph = document.querySelector(".comments-paragraph");
    const span = document.querySelector(".comments-span");

// array dos dados
    const texts = [
        {
            paragraph: "Estamos extremamente satisfeitos com os serviços da Next Digital Services. A equipe é altamente profissional e sempre pronta para resolver qualquer desafio que enfrentamos. O suporte técnico é ágil e eficiente, e as soluções propostas realmente fizeram a diferença para o nosso negócio. Recomendamos fortemente!",
            span: "Mariana Silva, Gerente de TI da TechInnovate"
        },
        {
            paragraph: "A Next Digital Services superou nossas expectativas com seu serviço excepcional. A equipe demonstra um compromisso inabalável com a excelência e uma abordagem proativa na resolução de problemas. O suporte técnico é exemplar e as soluções apresentadas foram fundamentais para otimizar nossas operações. Sem dúvida, recomendaremos a Next Digital Services a outras empresas.",
            span: "Roberto Costa, Diretor de Tecnologia da Innovatech Solutions"
        },
        {
            paragraph: "Trabalhar com a Next Digital Services tem sido uma experiência extremamente positiva. A equipe é altamente qualificada e sempre disponível para enfrentar qualquer desafio técnico. A eficácia das soluções fornecidas e a rapidez no atendimento foram cruciais para o sucesso de nossos projetos. Agradecemos e recomendamos seus serviços com confiança.",
            span: "Ana Pereira, Coordenadora de TI da FutureTech"
        },
        {
            paragraph: "Estamos muito satisfeitos com os serviços prestados pela Next Digital Services. A equipe é não apenas competente, mas também extremamente dedicada e acessível. O suporte técnico que recebemos foi rápido e eficiente, resultando em melhorias significativas para nossa empresa. Sem dúvida, recomendamos seus serviços para quem busca qualidade e profissionalismo.",
            span: "Felipe Andrade, Gerente de Infraestrutura da NexGen IT"
        },
        {
            paragraph: "A Next Digital Services tem sido um parceiro valioso para nossa empresa. O nível de profissionalismo e a capacidade de fornecer soluções eficazes em tempo hábil são impressionantes. A equipe de suporte técnico é excepcional, sempre pronta para resolver qualquer questão com eficiência. Estamos muito satisfeitos e recomendamos seus serviços a outras organizações.",
            span: "Juliana Santos, Líder de Projetos de TI da TechSolutions"
        }
    ];

    // declara a var que mantem o controle
    let i = 0;

    // função que atualiza os dados
    const updateText = () => {
        const { paragraph: newParagraphText, span: newSpanText } = texts[i];
        paragraph.textContent = newParagraphText;
        span.textContent = newSpanText;
    };

    // funçao para o proximo texto
    const nextText = () => {
        i++;
        if (i >= texts.length) {
            i = 0; // Volta ao início se ultrapassar o último texto
        }
        updateText();
    };
    
    // funçao texto anterior
    const previousText = () => {
        i--;
        if (i < 0) {
            i = texts.length - 1; // Vai para o final se ficar menor que 0
        }
        updateText();
    };
    

    after.addEventListener("click", (event) => {
        event.preventDefault();
        nextText();
    });

    before.addEventListener("click", (event) => {
        event.preventDefault();
        previousText();
    });

    updateText(); // Atualiza o texto inicial
});



//  btn click carrers 

const btn_carrers = document.querySelector("#carrers-btn")

btn_carrers.addEventListener("click", 
    () => {
        window.location.href = "carrers.html"
    }
)
