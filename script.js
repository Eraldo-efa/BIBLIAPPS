const fileSystem = [
    { name: "Documentos", type: "folder", icon: "fa-folder" },
    { name: "Imagens", type: "folder", icon: "fa-folder" },
    { name: "Renda_Extra.pdf", type: "file", icon: "fa-file-pdf" },
    { name: "Automacao.bat", type: "file", icon: "fa-file-code" },
    { name: "Design_Grafite.png", type: "file", icon: "fa-file-image" },
    { name: "Estudos_JS.docx", type: "file", icon: "fa-file-word" },
    { name: "Planilha_Financeira.xlsx", type: "file", icon: "fa-file-excel" }
];

function renderFiles(data) {
    const grid = document.getElementById('fileGrid');
    grid.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'file-card';
        
        const iconClass = item.type === 'folder' ? 'fa-solid fa-folder' : `fa-solid ${item.icon}`;
        
        card.innerHTML = `
            <i class="${iconClass}"></i>
            <span class="file-name">${item.name}</span>
        `;

        card.onclick = () => {
            if (item.type === 'folder') {
                alert(`Abrindo pasta: ${item.name}`);
            } else {
                alert(`Visualizando arquivo: ${item.name}`);
            }
        };

        grid.appendChild(card);
    });
}

// Lógica de Busca
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = fileSystem.filter(item => 
        item.name.toLowerCase().includes(term)
    );
    renderFiles(filtered);
});

// Inicialização
renderFiles(fileSystem);