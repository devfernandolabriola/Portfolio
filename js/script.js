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
  const parts = ["fernandolabrioladev", "gmail.com"];
  return parts.join("@");
}

function enviarmail(){
    const email = GetEmail();
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
}

let currentLang = 'es';

function toggleLanguage() {
  const flagImgs = document.querySelectorAll("#langFlag, #langFlagMobile");

  if (currentLang === 'es') {
    // Cambiar a inglés
    currentLang = 'en';
    flagImgs.forEach(img => img.src = "https://flagcdn.com/w40/es.png");

    // Navbar
    document.querySelector('a.nav-link[href="#"]').textContent = "About Me";
    document.getElementById("navExp").textContent = "Experience";
    document.getElementById("navPro").textContent = "Projects";
    document.getElementById("navTec").textContent = "Technologies";
    document.getElementById("navEst").textContent = "Education";
    document.getElementById("navCon").textContent = "Contact Me";

    // Intro
    document.querySelector("#Intro h1").textContent = "Fernando Labriola";
    document.querySelector("#Intro .lead").textContent = "QA Tester & Web Developer";
    document.querySelector("#bio").innerHTML = `QA Tester with experience in international companies such as a1qa, working entirely in English-speaking environments. Specialized in test automation using Selenium and Postman, as well as functional, regression, smoke, and acceptance testing. I also have experience as a freelance web developer using technologies like ASP.NET, C#, VB.NET, SQL Server, and JavaScript. I'm an advanced student of Systems Analysis, with a strong technical foundation and a focus on software quality.`;
    document.querySelector("#Intro .btn-success").textContent = "My Resume";
    document.querySelector("#Intro .btn-success").href = "https://drive.google.com/file/d/1B3Ft3xTzKt4W7YE9BKAKsIpRbq_SV9H-/view?usp=sharing";
    document.getElementById('gmail').title = 'Send email';

    // Sección Experiencia
    document.getElementById("TituloSectionExp").textContent = "Experience";
    document.getElementById("TituloExpBlankspace").innerHTML = `Web Developer`;
    document.querySelector("#pBlankspace").textContent =
      `Redesigned and implemented a new interface using HTML, CSS, and JavaScript, improving user experience with a modern, responsive layout aligned with the brand identity.
      Updates were uploaded via FTP (FileZilla) and weekly deliveries managed through Jira.
      The redesign improved user perception, increased customer trust, and contributed to higher sales margins.`;

    document.querySelector("#pa1qa").textContent = 'Participation in the QA Academy training program by a1qa, focused on functional/manual testing. Utilized tools such as Slack for internal communication, JIRA and TestRail for test management, and VPN for secure access to testing environments. Tasks included designing and executing test cases, reporting bugs, and collaborating with mentors and team members.'


    // Sección Proyectos
    document.getElementById("TituloSectionProyectos").textContent = "Projects";

       //financear
    document.querySelector("#TecnologiasFinancear").textContent =
      `Technologies: ASP.NET Core · Entity Framework · SQL Server · HTML · CSS · JavaScript · jQuery · Bootstrap`;
    document.querySelector("#pFinancear").textContent =
      `Developed a full-stack application focused on personal finance tracking. Implemented authentication (login/register), and features to link bank and non-bank accounts, register income/expenses, and view transaction history.
      Used Entity Framework with a database-first approach, applying best practices like layered architecture, DAO/DTO, and SOLID/KISS principles for clean, scalable code.
      Version control was handled with Git and GitHub. The UI is responsive thanks to Bootstrap and custom CSS styling.`;

        //Portfolio 

    document.querySelector("#TecnologiasPortfolio").textContent =
      `Technologies: HTML · CSS · JavaScript · Bootstrap`;
    document.querySelector("#pPortfolio").textContent =
      `I developed a responsive web portfolio using HTML, CSS, JavaScript, and Bootstrap, aimed at showcasing my projects, skills, and experience in a professional manner. The design was created to adapt to various devices, with a focus on usability and visual aesthetics.
I implemented frontend best practices by organizing the code in a clean and maintainable way. Additionally, I applied basic security measures to protect the public data on the site and make automated scraping more difficult.
The project was version-controlled with Git and hosted on GitHub, making it easy to maintain and update regularly.`;

        //app B2B VB

    document.querySelector("#TituloCrudVB").innerHTML = `<a href="https://github.com/devfernandolabriola/Financear-App" target="_blank" rel="noopener">B2B Management Application in VB.NET</a>`;
    document.querySelector("#TecnologiasCrudVB").textContent = `Technologies: VB.Net 4.7.2, Sqlserver, Winforms`;
    document.querySelector("#pCrudVB").textContent =
      `A management system developed in VB.NET featuring CRUD operations for sales, clients, and products. 
      It includes Excel report generation, date and client-based filters, and a user-friendly interface designed for small to medium-sized businesses.
       The app provides a simple and efficient solution for handling day-to-day operations.`;


    // Sección Tecnologías
    document.getElementById("TituloSectionTesting").textContent = "Testing Tools";
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

    // Footer
    document.getElementById("Footer").innerHTML = "&copy; 2025 Web made by Fernando Labriola"

  } else {
    // Volver a español
    currentLang = 'es';
    flagImgs.forEach(img => img.src = "https://flagcdn.com/w40/gb.png");

    // Navbar
    document.querySelector('a.nav-link[href="#"]').textContent = "Sobre mí";
    document.getElementById("navExp").textContent = "Experiencia";
    document.getElementById("navPro").textContent = "Proyectos";
    document.getElementById("navTec").textContent = "Tecnologías";
    document.getElementById("navEst").textContent = "Estudios";
    document.getElementById("navCon").textContent = "Contacto";

    // Intro
    document.querySelector("#Intro h1").textContent = "Fernando Labriola";
    document.querySelector("#Intro .lead").textContent = "Tester QA y Desarrollador Web";
    document.querySelector("#bio").innerHTML = `Cuento con experiencia en empresas internacionales como a1qa, trabajando como tester QA en entornos 100% en inglés.
                    Especializado en automatización con Selenium y Postman, y en pruebas funcionales, de regresión, smoke y aceptación. 
                    Además, cuento con experiencia como desarrollador web freelance utilizando tecnologías como ASP.NET, C#, VB.NET, SQL Server y JavaScript. 
                    Soy estudiante avanzado de Análisis de Sistemas, con una sólida base técnica y enfoque en la calidad del software.`;
    document.querySelector("#Intro .btn-success").textContent = "Ver currículum";
    document.querySelector("#Intro .btn-success").href = "https://drive.google.com/file/d/19rn4iJIRrIbl33kkIfo_T2q7kI7H79cU/view?usp=sharing";
    document.getElementById('gmail').title = 'Enviar mail';

    // Sección Experiencia
    document.getElementById("TituloSectionExp").textContent = "Experiencia";
    document.getElementById("TituloExpBlankspace").innerHTML = `Desarrollador Web`;
    document.querySelector("#pBlankspace").textContent =
      `Diseñé e implementé una nueva interfaz utilizando HTML, CSS y JavaScript, mejorando la experiencia del usuario con un diseño moderno, responsive y alineado a la identidad de marca.
      Subí los cambios vía FTP (FileZilla) y gestioné entregas semanales con Jira.
      El rediseño mejoró la percepción del sitio, aumentó la confianza del cliente y contribuyó a un incremento en el margen de ventas.`;

    document.querySelector("#pa1qa").textContent = 'Participación en el programa de formación QA Academy de a1qa, enfocado en testing funcional/manual. Uso de herramientas como Slack para comunicación interna, JIRA y TestRail para gestión de pruebas, y VPN para acceso seguro a entornos de testing. Tareas incluyen diseño y ejecución de casos de prueba, reporte de bugs y trabajo colaborativo con mentores y compañeros de equipo.'

    // Sección Proyectos
    document.getElementById("TituloSectionProyectos").textContent = "Proyectos";


      //financear
    document.querySelector("#TecnologiasFinancear").textContent =
      `Tecnologías: ASP.NET Core · Entity Framework · SQL Server · HTML · CSS · JavaScript · jQuery · Bootstrap`;
    document.querySelector("#pFinancear").textContent =
      `Desarrollé una aplicación full stack orientada al registro y control de finanzas personales. Implementé autenticación con login y registro, y funcionalidades para vincular cuentas bancarias y no bancarias, registrar ingresos y egresos, y visualizar el historial de movimientos.
Utilicé Entity Framework en enfoque database-first, aplicando buenas prácticas como separación en capas, uso de DAO y DTO, y principios SOLID y KISS para mantener el código limpio y escalable.
El versionado fue gestionado con Git y GitHub. El diseño es responsive gracias a Bootstrap y estilos personalizados en CSS.`;

        //Portfolio 

    document.querySelector("#TecnologiasPortfolio").textContent =
      `Tecnologías: HTML · CSS · JavaScript · Bootstrap`;
    document.querySelector("#pPortfolio").textContent =
      `Desarrollé un portfolio web responsive con HTML, CSS, JavaScript y Bootstrap, orientado a mostrar de forma profesional mis proyectos, habilidades y experiencia. El diseño fue pensado para adaptarse a distintos dispositivos, priorizando la usabilidad y estética visual.
          Implementé buenas prácticas de desarrollo frontend, organizando el código de forma clara y mantenible. Además, apliqué medidas de seguridad básicas para proteger los datos visibles en la web y dificultar su extracción por scrapers automatizados.
          El proyecto fue versionado con Git y alojado en GitHub, facilitando su mantenimiento y actualización constante.`;

        //app B2B VB

    document.querySelector("#TituloCrudVB").innerHTML = `<a href="https://github.com/devfernandolabriola/Financear-App" target="_blank" rel="noopener">Aplicación de gestión B2B en VB.NET</a>`;
    document.querySelector("#TecnologiasCrudVB").textContent = `Tecnologías: VB.Net 4.7.2, Sqlserver, Winforms`;
    document.querySelector("#pCrudVB").textContent =
      `Realicé un Sistema de gestión desarrollado en VB.NET con funcionalidades CRUD para ventas, clientes y productos.
          Incluye generación de reportes en Excel, filtros por fecha y por cliente, y una interfaz sencilla orientada a facilitar el uso en entornos comerciales.
          Pensado para pequeñas y medianas empresas que necesitan una solución ágil para el manejo básico de su operación diaria.`;


    // Sección Tecnologías
    document.getElementById("TituloSectionTesting").textContent = "Herramientas de Testing";
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

    // Footer
    document.getElementById("Footer").innerHTML = "&copy; 2025 Web creada por Fernando Labriola"
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