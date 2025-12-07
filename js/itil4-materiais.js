        // Filtro por categoria
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                const materials = document.querySelectorAll('.material-card');
                
                materials.forEach(material => {
                    if (category === 'all' || material.getAttribute('data-type') === category) {
                        material.style.display = 'block';
                    } else {
                        material.style.display = 'none';
                    }
                });
            });
        });

        // Simular download de arquivos
        document.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const fileName = this.getAttribute('data-file');
                const fileType = fileName.split('.').pop().toUpperCase();
                
                alert(`Iniciando download do arquivo: ${fileName}\n\nEm um sistema real, este arquivo ${fileType} seria baixado.\n\nPara implementação completa:\n1. Configure um servidor com arquivos reais\n2. Use PHP/Node.js para gerenciar downloads\n3. Implemente sistema de upload para usuários`);
                
                // Em um sistema real, você redirecionaria para o arquivo:
                // window.location.href = 'uploads/' + fileName;
            });
        });

        // Upload de arquivos
        const fileInput = document.getElementById('fileInput');
        const uploadArea = document.getElementById('uploadArea');
        const progressContainer = document.getElementById('progressContainer');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const uploadList = document.getElementById('uploadList');

        // Drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.background = '#e8f4fc';
            uploadArea.style.borderColor = '#2980b9';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.background = '#f8fafc';
            uploadArea.style.borderColor = '#3498db';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.background = '#f8fafc';
            uploadArea.style.borderColor = '#3498db';
            
            const files = e.dataTransfer.files;
            handleFiles(files);
        });

        fileInput.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });

        function handleFiles(files) {
            uploadList.innerHTML = '';
            
            Array.from(files).forEach((file, index) => {
                // Validar tamanho (max 100MB)
                if (file.size > 100 * 1024 * 1024) {
                    alert(`Arquivo muito grande: ${file.name} (${(file.size / (1024*1024)).toFixed(2)}MB)\nTamanho máximo: 100MB`);
                    return;
                }
                
                // Validar tipo
                const validTypes = ['pdf', 'ppt', 'pptx', 'doc', 'docx', 'zip', 'mp4'];
                const fileExt = file.name.split('.').pop().toLowerCase();
                
                if (!validTypes.includes(fileExt)) {
                    alert(`Tipo de arquivo não suportado: ${file.name}\nFormatos aceitos: PDF, PPT, DOC, ZIP, MP4`);
                    return;
                }
                
                // Adicionar à lista de upload
                const fileItem = document.createElement('div');
                fileItem.style.cssText = `
                    background: #f8f9fa;
                    padding: 10px;
                    margin: 5px 0;
                    border-radius: 4px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                `;
                
                fileItem.innerHTML = `
                    <div>
                        <strong>${file.name}</strong>
                        <div style="font-size: 0.8rem; color: #666;">
                            ${(file.size / (1024*1024)).toFixed(2)} MB • ${fileExt.toUpperCase()}
                        </div>
                    </div>
                    <div style="color: #27ae60;">
                        <i class="fas fa-check-circle"></i> Pronto para upload
                    </div>
                `;
                
                uploadList.appendChild(fileItem);
            });
            
            if (files.length > 0) {
                // Simular upload
                simulateUpload();
            }
        }

        function simulateUpload() {
            progressContainer.style.display = 'block';
            progressFill.style.width = '0%';
            progressText.textContent = 'Enviando: 0%';
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                progressFill.style.width = progress + '%';
                progressText.textContent = `Enviando: ${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(interval);
                    progressText.innerHTML = '<span style="color: #27ae60;"><i class="fas fa-check"></i> Upload concluído com sucesso!</span>';
                    
                    // Adicionar novo material à lista após 2 segundos
                    setTimeout(() => {
                        const materialsGrid = document.getElementById('materialsContainer');
                        const newMaterial = document.createElement('div');
                        newMaterial.className = 'material-card';
                        newMaterial.setAttribute('data-type', 'pdf');
                        newMaterial.innerHTML = `
                            <div class="card-header">
                                <i class="fas fa-file-pdf pdf file-icon"></i>
                                <div>
                                    <h3>Novo Material Enviado</h3>
                                    <small>PDF • 2.1 MB</small>
                                </div>
                            </div>
                            <div class="card-body">
                                <p>Material enviado por você. Aguardando aprovação da administração.</p>
                                <div class="file-info">
                                    <span><i class="far fa-clock"></i> Enviado agora</span>
                                    <span style="color: #f39c12;"><i class="fas fa-hourglass-half"></i> Em análise</span>
                                </div>
                                <button class="btn btn-primary" style="background: #95a5a6;" disabled>
                                    <i class="fas fa-clock"></i> Aguardando aprovação
                                </button>
                            </div>
                        `;
                        
                        materialsGrid.prepend(newMaterial);
                        progressContainer.style.display = 'none';
                        uploadList.innerHTML = '<div style="color: #27ae60; text-align: center; padding: 10px;"><i class="fas fa-check-circle"></i> Arquivos enviados com sucesso! Aguarde aprovação.</div>';
                        fileInput.value = '';
                        
                        // Resetar área de upload
                        uploadArea.innerHTML = `
                            <i class="fas fa-cloud-upload-alt"></i>
                            <h3>Arraste e solte arquivos aqui</h3>
                            <p>ou clique para selecionar</p>
                            <p style="font-size: 0.9rem; color: #95a5a6;">Formatos suportados: PDF, PPT, DOC, ZIP, MP4 (máx. 100MB)</p>
                            <div class="upload-btn" onclick="document.getElementById('fileInput').click()">
                                <i class="fas fa-upload"></i> Selecionar Mais Arquivos
                            </div>
                        `;
                        
                        // Reconfigurar eventos
                        setupUploadEvents();
                        
                    }, 2000);
                }
            }, 100);
        }

        function setupUploadEvents() {
            const newUploadArea = document.getElementById('uploadArea');
            const newFileInput = document.getElementById('fileInput');
            
            newUploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                newUploadArea.style.background = '#e8f4fc';
                newUploadArea.style.borderColor = '#2980b9';
            });

            newUploadArea.addEventListener('dragleave', () => {
                newUploadArea.style.background = '#f8fafc';
                newUploadArea.style.borderColor = '#3498db';
            });

            newUploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                newUploadArea.style.background = '#f8fafc';
                newUploadArea.style.borderColor = '#3498db';
                
                const files = e.dataTransfer.files;
                handleFiles(files);
            });

            newFileInput.addEventListener('change', (e) => {
                handleFiles(e.target.files);
            });
        }

        // Link para voltar à página principal
        document.querySelector('[data-target="materiais"]')?.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecionando para a seção de Material de Estudo na página principal...');
            // Em um sistema real: window.location.href = 'index.html#materiais';
        });