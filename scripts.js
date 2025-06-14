document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const projectCards = document.querySelectorAll('.project-card');

    const openModal = (card) => {
        // Pega os dados básicos do cartão
        const image = card.dataset.image;
        const title = card.dataset.title;
        const description = card.dataset.description;
        
        // --- NOVO: Pega os dados adicionais ---
        const technologies = card.dataset.technologies;
        const link = card.dataset.link;

        // Pega os elementos do modal
        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');

        // --- NOVO: Pega os elementos de detalhes ---
        const modalTechsContainer = document.getElementById('modal-techs');
        const modalLink = document.getElementById('modal-link');

        // Preenche o modal com as informações básicas
        modalImg.src = image;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        
        // --- NOVO: Preenche as tecnologias ---
        // Limpa as tecnologias anteriores
        modalTechsContainer.innerHTML = ''; 
        if (technologies) {
            const techsArray = technologies.split(',');
            techsArray.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech.trim();
                modalTechsContainer.appendChild(techTag);
            });
        }

        // --- NOVO: Configura o link do projeto ---
        if (link) {
            modalLink.href = link;
            modalLink.style.display = 'inline-block'; // Mostra o botão
        } else {
            modalLink.style.display = 'none'; // Esconde o botão se não houver link
        }
        
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
        });
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });




       // --- NOVO: LÓGICA PARA O FILTRO DE PROJETOS ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards2 = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            const filter = button.dataset.filter;

            projectCards2.forEach(card => {
                const category = card.dataset.category;

                // Se o filtro for 'all' ou a categoria do cartão corresponder ao filtro
                if (filter === 'all' || filter === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});