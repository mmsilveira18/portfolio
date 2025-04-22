export function hoverChangeExperience(
  nameCard,
  changeDescription,
  titleExperience,
  companyExperience,
  dateExperience
) {
  const varChangeDescription = document.querySelector(".changeExperience");
  const varTitleExperience = document.querySelector(".titleExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");

  document.querySelector(nameCard).addEventListener("click", () => {
    varChangeDescription.innerHTML = changeDescription;
    varCompanyExperience.innerHTML = companyExperience;
    varTitleExperience.innerHTML = titleExperience;
    varDateExperience.innerHTML = dateExperience;
  });
}

const header = document.getElementById("experience-company");
const btns = header.getElementsByClassName("company");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // Remove a classe "activeExperience" de todos os elementos
    const current = document.getElementsByClassName("activeExperience");
    if (current.length > 0) {
      current[0].classList.remove("activeExperience");
    }

    // Adiciona a classe "activeExperience" ao item clicado
    this.classList.add("activeExperience");

    // Esconde todas as descrições de experiência
    const experiences = document.querySelectorAll(".experience-content");
    experiences.forEach(experience => {
      experience.style.display = "none";
    });

    // Exibe a descrição associada ao item clicado
    const id = this.id + "-experience";  // Ex: 'daer-experience', 'tjm-experience', etc.
    const selectedExperience = document.getElementById(id);
    selectedExperience.style.display = "block";
  });
}