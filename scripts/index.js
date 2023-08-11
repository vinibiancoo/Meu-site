const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');

  
});


//pt-br
$(document).ready(function() {
  $(".br").click(function() {
    $("#nav-item-1").text("Início");
    $("#nav-item-2").text("Sobre");
    $("#nav-item-3").text("Habilidades");
    $("#nav-item-4").text("Projetos");
    $("#nav-item-5").text("Contato");
    $(".select__language").text("pt-BR");
    $(".select__language").addClass("change-br");
    
    //header
    $("#header-h1").text("Olá, Sou Vinicius Bianco Quality Engineer");
    $("#header-p").html("Trabalho como QA automation engineer para aplicativos web e mobile, sendo eles da área de banco e saúde, buscando sempre me aprimorar para alcançar a excelência. Minhas especialidades incluem <b>SQL, Robot Framework, Selenium, Postman, Appium e Jmeter.</b>");
    $(".btn.btn-primary").text("Saiba Mais!");
    
    //about
    $("#header-h2").text("Além do código: quem sou eu?");
    $(".header-p").text("Que tal se conectar comigo nas redes sociais abaixo e saber mais sobre meu trabalho?");
    $(".tertiary-title.mb-m").text("Quality Engineer especialista em tecnologia e soluções criativas");
    $("#about-right-p-1").text("Quality engineer apaixonado por tecnologia e soluções criativas. Com mais de 3 anos de experiência em testes web e mobile, venho trabalhando com diversas tecnologias e plataformas para criar soluções robustas e escaláveis que atendam às necessidades dos clientes.");
    $("#about-right-p-2").text("Meu objetivo é encontrar e reportar os mais diversos erros  dentro de um projeto a fim de assegurar a qualidade do mesmo,  buscando sempre aprender e evoluir.");
    
    //skills
    $("#my-tools").text("Minhas ferramentas");
    $("#skills-description").text("Descubra as habilidades e ferramentas que domino e que me permitem testar e validar todas as etapas dos projeto.");
    $("#web").text("Automação Web");
    $("#mobile").text("Automação Mobile");
    $("#api").text("Testes em APIs");
    $("#bank").text("Banco de dados");

    //projects
    $("#project-destaque").text("Projetos em Destaque");
    $(".project-p").text("Aqui estão os projetos que fazem parte da minha história como QA");
    $("#fhm-h3").text("Full health medical website");
    $("#fhm-p").text("O projeto baseou-se na criação e automação de todos os testes dos processos da empresa, em conjunto com testes exploratórios e manuais sempre que possível. Tecnologias: Selenium, SQL, Robot Framework, Postman, Jmeter, Ruby on rails ");
    $("#itau-h3").text("Banco Itaú");
    $("#itau-p").text("O projeto baseou-se na automação e criação de testes web e mobile para o aplicativo do banco do itaú, no qual foi realizado testes de tela, UX, Performance e automação de tarefas. Tecnologias: Selenium, Appium, SQL, Postman, Jmeter");

    //footer
    $("#lets-talk").text("Vamos conversar?");
    $("#footer-p").text("Ficarei feliz em saber mais sobre seus projetos e como podemos trabalhar juntos para torná-los realidade");
    $(".footer__copyright").text("© 2023 Vinicius Bianco. Todos os direitos reservados.");
  });
});


//en-USA
$(document).ready(function() {
  $(".en").click(function() {
    $("#nav-item-1").text("Home");
    $("#nav-item-2").text("About");
    $("#nav-item-3").text("Skills");
    $("#nav-item-4").text("Projects");
    $("#nav-item-5").text("Contact");
    $(".select__language").text("en-USA");
    $(".select__language").addClass("change-en");
    
    //header
    $("#header-h1").text("Hello, I'm Vinicius Bianco, Quality Engineer.");
    $("#header-p").html("I work as a QA Automation Engineer for web and mobile applications in the banking and healthcare sectors, always striving to improve myself and achieve excellence. My specialties include: SQL, Robot Framework, Selenium, Postman, Appium, and Jmeter.");
    $(".btn.btn-primary").text("Learn More!");
    
    //about
    $("#header-h2").text("Besides the code: who am I?");
    $(".header-p").text("How about connecting with me on the social media platforms below to learn more about my work?");
    $(".tertiary-title.mb-m").text("Quality Engineer specializing in technology and creative solutions.");
    $("#about-right-p-1").text("Passionate quality engineer driven by technology and creative solutions. With over 3 years of experience in web and mobile testing, I have been working with a variety of technologies and platforms to build robust and scalable solutions that cater to client needs.");
    $("#about-right-p-2").text("My goal is to identify and report a wide range of errors within a project to ensure its quality, always aiming to learn and evolve.");
    
    //skills
    $("#my-tools").text("My tools");
    $("#skills-description").text("Discover the skills and tools I master, which enable me to test and validate all stages of a project.");
    $("#web").text("Web Automation");
    $("#mobile").text("Mobile Automation");
    $("#api").text("APIs Tests");
    $("#bank").text("Database Management");

    //projects
    $("#project-destaque").text("Featured Projects");
    $(".project-p").text("Here are the projects that are part of my QA journey.");
    $("#fhm-h3").text("Full health medical website");
    $("#fhm-p").text("The project involved creating and automating tests for all company processes, along with exploratory and manual testing whenever necessary. Technologies used: Selenium, SQL, Robot Framework, Postman, Jmeter, Ruby on Rails.");
    $("#itau-h3").text("Itau Bank");
    $("#itau-p").text("The project focused on automating and creating web and mobile tests for the Itaú bank's application, encompassing screen testing, UX evaluation, performance analysis, and task automation. Technologies used: Selenium, Appium, SQL, Postman, Jmeter.");

    //footer
    $("#lets-talk").text("Let's talk");
    $("#footer-p").text("I'll be glad to learn more about your projects and how we can work together to bring them to life.");
    $(".footer__copyright").text("© 2023 Vinicius Bianco. All rights reserved.");
  });
});