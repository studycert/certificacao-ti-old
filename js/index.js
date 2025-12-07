     // Navigation between sections
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link, .footer-links a[data-target], .btn[data-target]');
            const mainContents = document.querySelectorAll('.main-content');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('data-target');
                    
                    // Update active nav link
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show target section
                    mainContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === targetId) {
                            content.classList.add('active');
                        }
                    });
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
            
            // Simulate file upload for simulados
            const uploadBtn = document.querySelector('.upload-area .btn');
            if (uploadBtn) {
                uploadBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Funcionalidade de upload será implementada em breve!');
                });
            }
        });

        // Funções para abrir/fechar a modal de simulados
        function abrirModalSimulados() {
            const modal = document.getElementById('modalSimulados');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function fecharModalSimulados() {
            const modal = document.getElementById('modalSimulados');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Fechar modal ao clicar fora do container
        document.getElementById('modalSimulados').addEventListener('click', function(e) {
            if (e.target === this) {
                fecharModalSimulados();
            }
        });

        // Fechar modal com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                fecharModalSimulados();
            }
        });