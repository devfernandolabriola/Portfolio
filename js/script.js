function GetNumber() {
    number = +5491122534148;
    return number;
}


function abrirWhatsapp() {
  const numeroLimpio = GetNumber();
  const mensaje = "¡Hola! Vi tu portfolio y estoy interesado en tus servicios.";
  const mensajeCodificado = encodeURIComponent(mensaje);
  const url = `https://wa.me/${numeroLimpio}?text=${mensajeCodificado}`;
  window.open(url,'_blank');
}

function GetEmail(){
  const email = "fernandolabrioladev@gmail.com";
  return email;
}

function enviarmail(){
    const email = GetEmail();
    window.location.href = `mailto:${email}`;
}

let currentLang = 'es';

function toggleLanguage() {
  const flagImg = document.getElementById("langFlag");

  if (currentLang === 'es') {
    // Cambiar a inglés
    currentLang = 'en';
    flagImg.src = "https://flagcdn.com/w40/es.png"; 

    // Navbar
    document.querySelector('a.nav-link[href="#"]').textContent = "About Me";
    document.getElementById("navExp").textContent = "Experience";
    document.getElementById("navPro").textContent = "Projects";
    document.getElementById("navTec").textContent = "Technologies";
    document.getElementById("navEst").textContent = "Education";

    // Intro
    document.querySelector("#Intro h1").textContent = "Fernando Labriola";
    document.querySelector("#Intro .lead").textContent = "Web Developer";
    document.querySelector("#bio").innerHTML = `I’m a freelance web developer with experience in e-commerce and custom B2B systems.
    I work with technologies like HTML, CSS, JavaScript, ASP.NET Core, and SQL Server.
    I combine effective client communication with best development practices to deliver functional and scalable solutions.
    English B2.`;
    document.querySelector("#Intro .btn-success").textContent = "Download CV";
    document.querySelector("#Intro .btn-success").href = "docs/(EN) Fernando Labriola CV.pdf";
    document.getElementById('gmail').title = 'Send email';

    // Sección Experiencia
    document.getElementById("TituloSectionExp").textContent = "Experience";
    document.getElementById("TituloExp").innerHTML = `Frontend Developer <small>| Jan 2024 - Apr 2024</small>`;
    document.querySelector("#BloqueExp p").textContent =
      `Redesigned and implemented a new interface using HTML, CSS, and JavaScript, improving user experience with a modern, responsive layout aligned with the brand identity.
      Updates were uploaded via FTP (FileZilla) and weekly deliveries managed through Jira.
      The redesign improved user perception, increased customer trust, and contributed to higher sales margins.`;

    // Sección Proyectos
    document.getElementById("TituloSectionProyectos").textContent = "Projects";
    document.querySelector("#BloqueProyecto h4").innerHTML = `<a href="https://github.com/devfernandolabriola/Financear-App" target="_blank" rel="noopener">Financear</a> <small>| Jan 2024 - Apr 2024</small>`;
    document.querySelector("#BloqueProyecto h6").textContent =
      `Technologies: ASP.NET Core · Entity Framework · SQL Server · HTML · CSS · JavaScript · jQuery · Bootstrap`;
    document.querySelector("#BloqueProyecto p").textContent =
      `Developed a full-stack application focused on personal finance tracking. Implemented authentication (login/register), and features to link bank and non-bank accounts, register income/expenses, and view transaction history.
      Used Entity Framework with a database-first approach, applying best practices like layered architecture, DAO/DTO, and SOLID/KISS principles for clean, scalable code.
      Version control was handled with Git and GitHub. The UI is responsive thanks to Bootstrap and custom CSS styling.`;

    // Sección Tecnologías
    document.getElementById("TituloSectionLeng").textContent = "Languages and Databases";
    document.getElementById("TituloSectionHer").textContent = "Tools";

    // Sección Estudios
    document.getElementById("TituloSectionEst").textContent = "Degrees and Certificates";
    const certTitles = document.querySelectorAll(".cert-title");
    certTitles[0].textContent = "Associate Degree in Systems Analysis";
    certTitles[1].textContent = "Docker for Beginners";
    certTitles[2].textContent = "CKAD With Tests";

    const certInstitutions = document.querySelectorAll(".institution-title");
    certInstitutions[0].textContent = "IFTS 4";
    certInstitutions[1].textContent = "KodeKloud";
    certInstitutions[2].textContent = "KodeKloud";

    const certYears = document.querySelectorAll(".cert-year");
    certYears[0].textContent = "2024 - 2026";
    certYears[1].textContent = "2025";
    certYears[2].textContent = "2025";

  } else {
    // Volver a español
    currentLang = 'es';
    flagImg.src = "https://flagcdn.com/w40/gb.png"; // Reino Unido

    // Navbar
    document.querySelector('a.nav-link[href="#"]').textContent = "Sobre mí";
    document.getElementById("navExp").textContent = "Experiencia";
    document.getElementById("navPro").textContent = "Proyectos";
    document.getElementById("navTec").textContent = "Tecnologías";
    document.getElementById("navEst").textContent = "Estudios";

    // Intro
    document.querySelector("#Intro h1").textContent = "Fernando Labriola";
    document.querySelector("#Intro .lead").textContent = "Desarrollador Web";
    document.querySelector("#bio").innerHTML = `Soy desarrollador web freelance con experiencia en e-commerce y sistemas B2B personalizados.
    Trabajo con tecnologías como HTML, CSS, JavaScript, ASP.NET Core y SQL Server.
    Combino una comunicación efectiva con clientes y buenas prácticas de desarrollo para entregar soluciones funcionales y escalables.
    Inglés B2.`;
    document.querySelector("#Intro .btn-success").textContent = "Descargar CV";
    document.querySelector("#Intro .btn-success").href = "docs/Fernando Labriola CV.pdf";
    document.getElementById('gmail').title = 'Enviar mail';

    // Sección Experiencia
    document.getElementById("TituloSectionExp").textContent = "Experiencia";
    document.getElementById("TituloExp").innerHTML = `Desarrollador Frontend <small>| Enero 2024 - Abril 2024</small>`;
    document.querySelector("#BloqueExp p").textContent =
      `Diseñé e implementé una nueva interfaz utilizando HTML, CSS y JavaScript, mejorando la experiencia del usuario con un diseño moderno, responsive y alineado a la identidad de marca.
      Subí los cambios vía FTP (FileZilla) y gestioné entregas semanales con Jira.
      El rediseño mejoró la percepción del sitio, aumentó la confianza del cliente y contribuyó a un incremento en el margen de ventas.`;

    // Sección Proyectos
    document.getElementById("TituloSectionProyectos").textContent = "Proyectos";
    document.querySelector("#BloqueProyecto h4").innerHTML = `<a href="https://github.com/devfernandolabriola/Financear-App" target="_blank" rel="noopener">Financear</a> <small>| Enero 2024 - Abril 2024</small>`;
    document.querySelector("#BloqueProyecto h6").textContent =
      `Tecnologías: ASP.NET Core · Entity Framework · SQL Server · HTML · CSS · JavaScript · jQuery · Bootstrap`;
    document.querySelector("#BloqueProyecto p").textContent =
      `Desarrollé una aplicación full stack orientada al registro y control de finanzas personales. Implementé autenticación con login y registro, y funcionalidades para vincular cuentas bancarias y no bancarias, registrar ingresos y egresos, y visualizar el historial de movimientos.
      Utilicé Entity Framework en enfoque database-first, aplicando buenas prácticas como separación en capas, uso de DAO y DTO, y principios SOLID y KISS para mantener el código limpio y escalable.
      El versionado fue gestionado con Git y GitHub. El diseño es responsive gracias a Bootstrap y estilos personalizados en CSS.`;

    // Sección Tecnologías
    document.getElementById("TituloSectionLeng").textContent = "Lenguajes y BD";
    document.getElementById("TituloSectionHer").textContent = "Herramientas";

    // Sección Estudios
    document.getElementById("TituloSectionEst").textContent = "Títulos y Certificados";
    const certTitles = document.querySelectorAll(".cert-title");
    certTitles[0].textContent = "Tecnicatura en Análisis de Sistemas";
    certTitles[1].textContent = "Docker for Begginers";
    certTitles[2].textContent = "CKAD With Tests";

    const certInstitutions = document.querySelectorAll(".institution-title");
    certInstitutions[0].textContent = "IFTS 4";
    certInstitutions[1].textContent = "KodeKloud";
    certInstitutions[2].textContent = "KodeKloud";

    const certYears = document.querySelectorAll(".cert-year");
    certYears[0].textContent = "2024 - 2026";
    certYears[1].textContent = "2025";
    certYears[2].textContent = "2025";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll('.fade-in-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElems.forEach(el => {
    observer.observe(el);
  });
});