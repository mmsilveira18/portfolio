import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

document.addEventListener('DOMContentLoaded', () => {
  menu();
  initScrollReveal();
  typeWrite(document.querySelector(".typewriter"));

  hoverChangeExperience(
    ".daer",
    `Suporte técnico aos usuários, responsável pelos chamados de
    manutenção de impressora, manutenção de hardware, baixa de
    imagem, movimentação de equipamentos, instalação e atualização
    de softwares, além de realizar atendimento remoto via VNC e
    Terminal Service.`,
    "Suporte Técnico",
    "DAER/RS | Departamento Autônomo de Estradas de Rodagem",
    "Mai 2022 - Nov 2022 (7 meses)"
  );

  // Atualiza os detalhes para Tribunal de Justiça Militar RS
  hoverChangeExperience(
    ".tjm",
    `Gerenciamento do site e sistemas internos do Tribunal de Justiça Militar do Rio Grande do Sul. Manutenção e desenvolvimento de novas funcionalidades.`,
    "Desenvolvedor Web",
    "Tribunal de Justiça Militar RS",
    "Mai 2023 - Presente"
  );

  // Atualiza os detalhes para Procempa
  hoverChangeExperience(
    ".procempa",
    `Atuei como suporte técnico realizando instalações de sistemas operacionais, manutenção de computadores e redes, além de auxiliar no desenvolvimento de sistemas e melhorias.`,
    "Suporte Técnico",
    "Procempa",
    "Nov 2022 - Presente"
  );

  hoverChangeExperience(
     ".am",
    `Atuei como suporte técnico realizando instalações de sistemas operacionais, manutenção de computadores e redes, além de auxiliar no desenvolvimento de sistemas e melhorias.`,
    "Suporte Técnico",
    "Andrade Maia Advogados",
    "Mai 2025 - Atualmente"
  )

  // Descrições para as tecnologias do seu projeto
/*   hoverChangeDescription(
    ".html",
    "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
  );

  hoverChangeDescription(
    ".css",
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
  );

  hoverChangeDescription(
    ".js",
    "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
  );

  hoverChangeDescription(
    ".php",
    "PHP é uma linguagem de script usada para desenvolvimento de sites dinâmicos e interativos."
  );

  hoverChangeDescription(
    ".python",
    "Python é uma linguagem de programação versátil, usada em ciência de dados, automação, web e mais."
  );

  hoverChangeDescription(
    ".figma",
    "Figma é uma ferramenta de design para criação de interfaces e protótipos colaborativos."
  );

  hoverChangeDescription(
    ".tailwind",
    "Tailwind CSS é um framework que fornece classes utilitárias para estilizar rapidamente páginas web."
  );

  hoverChangeDescription(
    ".mysql",
    "MySQL é um sistema de gerenciamento de banco de dados relacional muito utilizado em aplicações web."
  ); */
});
