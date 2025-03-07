setTimeout(() => {
    var hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true 
    }).replace(" ", " "); 
    $("#relogio").html(hora);
}, 100);

setInterval(() => {
    var hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }).replace(" ", " "); 
    $("#relogio").html(hora);
}, 1000);

$(".desktop-icon").click(function () {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
    } else {
        $(this).addClass("selected");
    }
});

$(".desktop-icon").draggable({
    containment: ".area-de-trabalho",
    stop: function () {
        $(this).removeClass("selected");
        $(this).addClass("selected");
    }
});

document.querySelectorAll('.window').forEach(windowElement => {
    const header = windowElement.querySelector('.window-header') || windowElement.querySelector('.title-bar');
    makeDraggable(windowElement, header);
    header.addEventListener('mousedown', () => {
        bringToFront(windowElement);
    });
});

function bringToFront(windowElement) {
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
    windowElement.classList.add('active');
    let highestZIndex = 0;
    document.querySelectorAll('.window').forEach(w => {
        const zIndex = parseInt(window.getComputedStyle(w).zIndex, 10) || 0;
        if (zIndex > highestZIndex) {
            highestZIndex = zIndex;
        }
    });
    windowElement.style.zIndex = highestZIndex + 1;
}

function makeDraggable(windowElement, header) {
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;
        bringToFront(windowElement);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const workspace = document.querySelector('.area-de-trabalho');
            const workspaceRect = workspace.getBoundingClientRect();
            const windowRect = windowElement.getBoundingClientRect();

            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;

            if (newLeft < workspaceRect.left) newLeft = workspaceRect.left;
            if (newTop < workspaceRect.top) newTop = workspaceRect.top;
            if (newLeft + windowRect.width > workspaceRect.right) newLeft = workspaceRect.right - windowRect.width;
            if (newTop + windowRect.height > workspaceRect.bottom) newTop = workspaceRect.bottom - windowRect.height;

            windowElement.style.left = `${newLeft}px`;
            windowElement.style.top = `${newTop}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    const sideBarLinks = document.querySelectorAll('.side-bar ul li a');

    sideBarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = this.getAttribute('data-content');
            updateContent(contentId);
        });
    });

    function updateContent(contentId) {
        let content = '';
        switch (contentId) {
            case 'content1':
                content = `
                    <p><strong>Meu Computador</strong></p>
                    <p>Conteúdo do Meu Computador...</p>
                `;
                break;
            case 'content2':
                content = `
                    <p><strong>Documentos</strong></p>
                    <p>Conteúdo dos Documentos...</p>
                `;
                break;
            case 'content3':
                content = `
                    <p><strong>Lixeira</strong></p>
                    <p>Conteúdo da Lixeira...</p>
                `;
                break;
            case 'content4':
                content = `
                    <p><strong>Rede</strong></p>
                    <p>Conteúdo da Rede...</p>
                `;
                break;
            default:
                content = `
                    <p><strong>Alícia Melliny Batista Lacerda Leão</strong></p>
                    <p>Telefone: <a href="https://wa.me/5598981554247" target="_blank"><strong>+55 (98) 98155-4247</strong></a></p>
                    <p>Email: <a href="mailto:aliciamellinyb@gmail.com"><strong>aliciamellinyb@gmail.com</strong></a></p>
                    <p>GitHub: <a href="https://github.com/aliciamelliny" target="_blank"><strong>github.com/aliciamelliny</strong></a></p>
                `;
        }
        contentArea.innerHTML = content;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    const sideBarLinks = document.querySelectorAll('.side-bar ul li a');
    const addressText = document.getElementById('address-text');
    const addressIcon = document.getElementById('address-icon'); 

    sideBarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = this.getAttribute('data-content');
            updateContent(contentId);
        });
    });

    function updateContent(contentId) {
        let content = '';
        let addressContent = '';
        let iconPath='';
        switch (contentId) {
            case 'perfil':
                content = `
                <div class= "perfil-content">
                   <img src="imgs/alicia.jpeg" alt="Foto de Perfil" class="profile-image">
                    <h4>Alícia Melliny Batista Lacerda Leão</h4>
                    <h5>Programadora | Designer | Desenvolvedora Web</h5>
                    <p>Desenvolvedora com foco em soluções web e uma base sólida em Ciência da Computação. Tenho experiência prática em Java, HTML,CSS, Tailwind, JavaScript, Node.js, React e C, além de conhecimentos em redes e segurança. Trabalho com atenção à qualidade do código, testes e documentação, sempre buscando eficiência e clareza. Estou em constante aprendizado, expandindo minhas habilidades e explorando novas tecnologias.</p> 
                    </div>
                `;
                addressContent = 'Perfil';
                iconPath = 'imgs/perfil_icon_file.png';
                break;
            case 'experiencia':
                content = `
                 <div class="experiencia-content">
                    <h3>Experiência Profissional</h3>
                    <ul>
                        <li><h5>2023 - Atualmente ⋆ Projetos Pessoais </h5> </li>
                        <p>Desenvolvimento de aplicações web utilizando HTML, CSS,Tailwind CSS, JavaScript e React, com foco em design responsivo e usabilidade. Criação de projetos em Java, com foco em algoritmos, estrutura de dados e fundamentos de programação orientada a objetos.</p>	
                        <li><h5>2022 - Atualmente ⋆ Design Gráfico </h5></li>
                        <p>Criei rótulos e embalagens personalizadas para produtos agrícolas, considerando identidade visual, público-alvo e requisitos regulamentares utilizando ferramentas como Adobe Illustrator e Photoshop para entregar designs profissionais.</p>
                        <li><h5>2022 - 2024 ⋆ Desenvolvimento Web - Freelancer </h5></li>
                        <p>Desenvolvi e implementei sites responsivos para clientes individuais, utilizando tecnologias como HTML, CSS, JavaScript e WordPress. Colaborei com clientes para entender suas necessidades e garantir que o produto final atendesse às expectativas.</p>
                        </ul>
                    </div>
                `;
                addressContent = 'Experiência';
                iconPath = 'imgs/experiencia.png';
                break;
            case 'formacao':
                content = `
                <div class="formacao-content">
                    <h4>Formação Acadêmica</h4>
                    <ul>
                        <li><strong>Graduação em Ciência da Computação</strong> - Faculdade Estácio de Sá (2023 - 2027)</li>
                        <li><strong>Curso de Desenvolvimento Web Completo</strong> - Udemy Academy (2024)</li>
                    </ul>
                    </div>
                `;
                addressContent = 'Formação';
                iconPath = 'imgs/formacao.png';
                break;
            case 'habilidades':
                content = `
                <div class="habilidades-content">
                    <h4>Habilidades</h4>
                    <ul>
                        <li>Gestão de projetos pessoais</li>
                        <li>Metodologias ágeis</li>
                        <li>Design gráfico para web</li>
                        <li>Aprendizado contínuo</li>
                        <li>Uso de frameworks</li>
                        <li>Habilidade autodidata</li>
                        <li>Segurança de redes</li>
                    </ul>
                    <h4>Linguagens</h4>
                    <ul>
                        <li>Javascript e React (básico)</li>
                        <li>MYSQL</li>
                        <li>HTML, CSS, Tailwind e Wordpress</li>
                        <li>Git e Github</li>
                        <li>Java</li>
                    </ul>
                    <h4>Idiomas</h4>
                    <ul>
                        <li>Inglês fluente(C1)</li>
                        <li>Espanhol básico(A2)</li>
                        <li>Chinês básico(A1)</li>
                    </ul>
                    </div>
                `;
                addressContent = 'Habilidades';
                iconPath = 'imgs/habilidades_icon.png';
                break;
            case 'contato':
                content = `
                <div class= "contato-content">
                    <h4>Contato</h4>
                    <p>Telefone: <a href="https://wa.me/5598981554247" target="_blank"><strong>+55 (98) 98155-4247</strong></a></p>
                    <p>Email: <a href="mailto:aliciamellinyb@gmail.com"><strong>aliciamellinyb@gmail.com</strong></a></p>
                    <p>GitHub: <a href="https://github.com/aliciamelliny" target="_blank"><strong>github.com/aliciamelliny</strong></a></p>
                    <p>Linkedin: <a href="https://www.linkedin.com/in/aliciamelliny/"target="_blank"><strong>https://www.linkedin.com/in/aliciamelliny/</strong></a></p>
                    </div>
                `;
                addressContent = 'Contato';
                iconPath = 'imgs/contato.png'; 
                break;
            default:
                content = `
                    <h3>Bem-vindo ao Meu Currículo!</h3>
                    <p>Clique em uma das opções ao lado para ver mais detalhes.</p>
                `;
                addressContent = '˚₊‧꒰ა ☆ ໒꒱ ‧₊˚';
                iconPath = 'imgs/folder.png';
        }
        contentArea.innerHTML = content;
        addressText.textContent = addressContent; 
        addressIcon.src = iconPath;
    }

    updateContent('perfil');
});

