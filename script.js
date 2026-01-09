// ========================================
// CONFIGURAÇÕES GLOBAIS
// ========================================
const IMG_PATH = './imagens/';
// ========================================
// DADOS DOS ESTÁDIOS FENOLÓGICOS
// ========================================
const stages = {
    'VE': { 
        img: 've.png', 
        name: 'VE - Emergência', 
        description: 'Cotilédones rompem o solo', 
        dap: '0 DAP',
        attention: [
            'Absorção de água: mínimo 50% do peso da semente',
            'Temperatura ideal do solo: 20-30°C',
            'Início da colonização por Bradyrhizobium',
            'Embebição completa - eventos metabólicos preparando radícula'
        ] 
    },
    'VC': { 
        img: 'vc.png', 
        name: 'VC - Cotilédones', 
        description: 'Cotilédones totalmente abertos', 
        dap: '3 DAP',
        attention: [
            'Planta utiliza reservas dos cotilédones',
            'Perda de 2 cotilédones pode reduzir 9% do rendimento',
            'Controle de plantas daninhas crítico',
            'Desenvolvimento do sistema radicular'
        ] 
    },
    'V1': { 
        img: 'v1.png', 
        name: 'V1 - 1ª Trifoliolada', 
        description: 'Primeira folha trifoliolada desenvolvida', 
        dap: '8 DAP',
        attention: [
            'Fotossíntese sustenta o crescimento (independência dos cotilédones)',
            'Nova folha a cada 5 dias até V5',
            'Fixação biológica de N₂ em desenvolvimento',
            'Alta concentração de auxina - crescimento vegetativo'
        ] 
    },
    'V2': { 
        img: 'v2.png', 
        name: 'V2 - 2ª Trifoliolada', 
        description: 'Segunda folha trifoliolada', 
        dap: '16 DAP',
        attention: [
            'Crescimento vegetativo intenso',
            'Aumento da demanda nutricional',
            'Controle de plantas daninhas',
            'Interceptação de luz aumentando'
        ] 
    },
    'V3': { 
        img: 'v3.png', 
        name: 'V3 - 3ª Trifoliolada', 
        description: 'Terceira folha trifoliolada', 
        dap: '18 DAP',
        attention: [
            'Período crítico para competição com daninhas',
            'Crescimento radicular ativo',
            'Demanda hídrica aumentando',
            'Posicionamento de reguladores de crescimento'
        ] 
    },
    'V4': { 
        img: 'v4.png', 
        name: 'V4 - 4ª Trifoliolada', 
        description: 'Quarta folha trifoliolada', 
        dap: '20 DAP',
        attention: [
            'Máximo crescimento vegetativo',
            'Alta demanda de água e nutrientes',
            'Controle de pragas (lagartas, percevejos)',
            'Arquitetura de planta definindo potencial produtivo'
        ] 
    },
    'V5': { 
        img: 'v5.png', 
        name: 'V5 - 5ª Trifoliolada', 
        description: 'Quinta folha trifoliolada', 
        dap: '25 DAP',
        attention: [
            'A partir daqui: nova folha a cada 3 dias',
            'Preparação para fase reprodutiva',
            'Controle fitossanitário intensivo',
            'Auxinas em alta concentração'
        ] 
    },
    'R1': { 
        img: 'r1.png', 
        name: 'R1 - Florescimento', 
        description: 'Uma flor aberta em qualquer nó', 
        dap: '25 DAP',
        attention: [
            'Início da fase reprodutiva (fotoperíodo crítico)',
            'Déficit hídrico extremamente crítico',
            'Boro essencial para formação do tubo polínico',
            'Estresse térmico causa abortamento de flores',
            'Intensificar fotossíntese para reservas'
        ] 
    },
    'R2': { 
        img: 'r2.png', 
        name: 'R2 - Floração Plena', 
        description: 'Flor aberta no terço superior', 
        dap: '62 DAP',
        attention: [
            'Pleno florescimento da cultura',
            'Máxima demanda hídrica (5-7 mm/dia)',
            'Estresse térmico crítico para abortamento',
            'Etileno e ABA induzem queda de flores',
            'Controle de pragas desfolhadoras'
        ] 
    },
    'R3': { 
        img: 'r3.png', 
        name: 'R3 - Formação de Vagens', 
        description: 'Vagem com 1cm nos últimos 4 nós', 
        dap: '60-70 DAP',
        attention: [
            'Formação inicial das vagens',
            'Translocação de fotoassimilados para vagens',
            'Número potencial de vagens definindo',
            'Monitoramento de percevejos intensificado'
        ] 
    },
    'R4': { 
        img: 'r4.png', 
        name: 'R4 - Vagens Desenvolvidas', 
        description: 'Vagem com 5mm nos 4 primeiros nós', 
        dap: '72 DAP',
        attention: [
            'Vagens em pleno desenvolvimento',
            'Componente de produtividade: número de vagens',
            'Percevejos causam grande impacto',
            'Nutrição foliar para sustentação'
        ] 
    },
    'R5.1': { 
        img: 'r5-1.png', 
        name: 'R5.1 - Início Enchimento', 
        description: 'Grãos com 10% de granação', 
        dap: '95 DAP',
        attention: [
            'Máximo desenvolvimento de área foliar e raízes',
            'Fixação de N₂ no máximo',
            'Translocação via fluxo de seiva (5-7 mm/dia)',
            'Déficit hídrico reduz duração do período'
        ] 
    },
    'R5.3': { 
        img: 'r5-3.png', 
        name: 'R5.3 - Enchimento 50%', 
        description: 'Grãos com 50% de granação', 
        dap: '90-100 DAP',
        attention: [
            'Enchimento de grãos acelerado',
            'Período crítico para estresses',
            'Percevejos afetam qualidade dos grãos',
            'Lagartas reduzem área fotossintética'
        ] 
    },
    'R5.5': { 
        img: 'r5-5.png', 
        name: 'R5.5 - Enchimento Completo', 
        description: 'Grãos com 100% de granação', 
        dap: '100-110 DAP',
        attention: [
            'Grãos completamente cheios',
            'Máximo acúmulo de matéria seca nos grãos',
            'Controle de percevejos ainda necessário',
            'Preparação para maturação'
        ] 
    },
    'R6': { 
        img: 'r6.png', 
        name: 'R6 - Grãos Formados', 
        description: 'Grãos totalmente formados', 
        dap: '95 DAP',
        attention: [
            'Máxima matéria seca acumulada',
            'Plantas não absorvem mais água e nutrientes',
            'Percevejos afetam germinação e vigor',
            'Monitoramento para produção de sementes'
        ] 
    },
    'R7': { 
        img: 'r7.png', 
        name: 'R7 - Início Maturação', 
        description: 'Grãos totalmente formados', 
        dap: '95 DAP',
        attention: [
            'Início da senescência',
            'Degradação de clorofila e proteínas',
            'Etileno e ABA regulam senescência',
            'Mobilização de reservas para grãos',
            'Atenção ao momento de dessecação'
        ] 
    },
    'R8': { 
        img: 'r8.png', 
        name: 'R8 - Maturação Plena', 
        description: '95% das vagens maduras', 
        dap: '110 DAP',
        attention: [
            'Maturação completa (fim do ciclo biológico)',
            'Umidade ideal para colheita: 13-15%',
            'Evitar danos mecânicos na colheita',
            'Perda de folhas completa',
            'Sementes com todas as partes formadas'
        ] 
    }
};

// ========================================
// DADOS DAS CATEGORIAS
// ========================================
const categories = {
    'doenca': { 
        img: 'doencas.png', 
        title: 'Doença', 
        color: '#34C759',
        type: 'multi',
        levels: [
            { id: 'incidencia', name: 'Incidência' },
            { id: 'severidade', name: 'Severidade' }
        ]
    },
    'insetos': { 
        img: 'insetos.png', 
        title: 'Insetos', 
        color: '#FF2D55',
        type: 'multi',
        levels: [
            { id: 'desfolha', name: 'Desfolha' },
            { id: 'infestacao', name: 'Taxa de Infestação' },
            { id: 'acamamento', name: 'Acamamento' }
        ]
    },
    'ervas': { 
        img: 'ervas.png', 
        title: 'Ervas Daninhas', 
        color: '#FF9500',
        type: 'standard' 
    },
    'nutrientes': { 
        img: 'nutricional.png', 
        title: 'Nutrientes', 
        color: '#8E8E93',
        type: 'nutrients',
        options: [
            { id: 'N', name: 'N', fullName: 'Nitrogênio' },
            { id: 'P', name: 'P', fullName: 'Fósforo' },
            { id: 'K', name: 'K', fullName: 'Potássio' },
            { id: 'Ca', name: 'Ca', fullName: 'Cálcio' },
            { id: 'Mg', name: 'Mg', fullName: 'Magnésio' },
            { id: 'S', name: 'S', fullName: 'Enxofre' },
            { id: 'B', name: 'B', fullName: 'Boro' },
            { id: 'Zn', name: 'Zn', fullName: 'Zinco' },
            { id: 'Fe', name: 'Fe', fullName: 'Ferro' },
            { id: 'Mn', name: 'Mn', fullName: 'Manganês' },
            { id: 'Cu', name: 'Cu', fullName: 'Cobre' },
            { id: 'Mo', name: 'Mo', fullName: 'Molibdênio' }
        ]
    },
    'agua': { 
        img: 'estresse.png', 
        title: 'Água', 
        color: '#30B0C7',
        type: 'water' 
    }
};

// ========================================
// ESTADO DA APLICAÇÃO
// ========================================
let selectedCategories = new Set();
let activePhotoCategory = null;
let severityData = {};
let categoryNotes = {};
let photos = [];
let selectedNutrients = new Set();
let pdfPhotoQuality = 'media';
let pdfPhotosPerPage = 1;

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    if (!document.getElementById('data').value) {
        document.getElementById('data').valueAsDate = new Date();
    }
    
    // Auto-save listeners
    document.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('change', saveToLocalStorage);
        if (input.type === 'text' || input.tagName === 'TEXTAREA') {
            input.addEventListener('input', debounce(saveToLocalStorage, 1000));
        }
    });
});

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// ========================================
// FUNÇÕES DE CATEGORIA
// ========================================
function toggleCategory(id) {
    const item = document.querySelector(`[data-category="${id}"]`);
    
    if (selectedCategories.has(id)) {
        selectedCategories.delete(id);
        item.classList.remove('selected');
        if (activePhotoCategory === id) {
            activePhotoCategory = selectedCategories.size > 0 ? 
                Array.from(selectedCategories)[selectedCategories.size - 1] : null;
        }
    } else {
        selectedCategories.add(id);
        item.classList.add('selected');
        activePhotoCategory = id;
    }
    
    renderProblems();
    updateFloatingButton();
    saveToLocalStorage();
}

function updateFloatingButton() {
    const btn = document.getElementById('floatingPhotoBtn');
    
    if (selectedCategories.size > 0 && activePhotoCategory) {
        const cat = categories[activePhotoCategory];
        btn.classList.add('active');
        document.getElementById('floatingCategoryIcon').src = IMG_PATH + cat.img;
        document.getElementById('floatingCategoryText').textContent = cat.title;
    } else {
        btn.classList.remove('active');
    }
}

// ========================================
// FUNÇÕES DE FOTO
// ========================================
function takePhotoForActiveCategory() {
    if (activePhotoCategory) {
        document.getElementById('photoInput').click();
    }
}

function handlePhoto() {
    const input = document.getElementById('photoInput');
    if (input.files && input.files[0] && activePhotoCategory) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const cat = categories[activePhotoCategory];
            photos.push({
                id: Date.now(),
                category: activePhotoCategory,
                categoryImg: cat.img,
                categoryName: cat.title,
                data: e.target.result,
                size: 100
            });
            renderProblems();
            renderFullPhotos();
            saveToLocalStorage();
        };
        reader.readAsDataURL(input.files[0]);
    }
    input.value = '';
}

function addPhotoForCategory(categoryId) {
    activePhotoCategory = categoryId;
    updateFloatingButton();
    document.getElementById('photoInput').click();
}

function removePhoto(id) {
    photos = photos.filter(p => p.id !== id);
    renderProblems();
    renderFullPhotos();
    saveToLocalStorage();
}

function viewPhoto(id) {
    const photo = photos.find(p => p.id === id);
    if (photo) {
        window.open(photo.data, '_blank');
    }
}

function updatePhotoSize(photoId, size) {
    const photo = photos.find(p => p.id === photoId);
    if (photo) {
        photo.size = parseInt(size);
        renderFullPhotos();
    }
}

// Continua no próximo bloco...

// ========================================
// RENDERIZAÇÃO DE PROBLEMAS
// ========================================
function renderProblems() {
    const container = document.getElementById('problemsContainer');
    container.innerHTML = '';
    
    Array.from(selectedCategories).forEach(id => {
        const cat = categories[id];
        const categoryPhotos = photos.filter(p => p.category === id);
        
        const div = document.createElement('div');
        div.className = 'problem-section';
        
        let contentHTML = '';
        
        if (cat.type === 'multi') {
            contentHTML = cat.levels.map(level => {
                const currentValue = severityData[id]?.[level.id] || 'nenhum';
                const sliderValue = getSeveritySliderValue(currentValue);
                return `
                    <div class="severity-slider-container">
                        <div class="severity-slider-header">
                            <span class="severity-label">${level.name}</span>
                            <span class="severity-value ${currentValue}" id="severity-${id}-${level.id}-value">${capitalizeFirst(currentValue)}</span>
                        </div>
                        <input type="range" class="severity-slider" min="0" max="3" value="${sliderValue}"
                               oninput="updateSeveritySlider('${id}', '${level.id}', this.value)"
                               onchange="saveToLocalStorage()">
                    </div>
                `;
            }).join('');
        } else if (cat.type === 'nutrients') {
            contentHTML = `
                <div class="nutrient-grid">
                    ${cat.options.map(nut => `
                        <div class="nutrient-badge ${selectedNutrients.has(nut.id) ? 'selected' : ''}" 
                             onclick="toggleNutrient('${nut.id}', this)">
                            <div class="nutrient-badge-icon">${nut.name}</div>
                            <div class="nutrient-badge-name">${nut.fullName}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (cat.type === 'water') {
            const waterValues = ['adequado', 'seco', 'excesso'];
            const currentValue = severityData[id]?.main || 'adequado';
            const sliderValue = waterValues.indexOf(currentValue);
            contentHTML = `
                <div class="severity-slider-container">
                    <div class="severity-slider-header">
                        <span class="severity-label">Status</span>
                        <span class="severity-value ${currentValue === 'adequado' ? 'nenhum' : (currentValue === 'seco' ? 'media' : 'alta')}" 
                              id="severity-${id}-main-value">${capitalizeFirst(currentValue)}</span>
                    </div>
                    <input type="range" class="severity-slider" min="0" max="2" value="${sliderValue}"
                           oninput="updateWaterSlider('${id}', this.value)"
                           onchange="saveToLocalStorage()">
                </div>
            `;
        } else {
            const currentValue = severityData[id]?.main || 'nenhum';
            const sliderValue = getSeveritySliderValue(currentValue);
            contentHTML = `
                <div class="severity-slider-container">
                    <div class="severity-slider-header">
                        <span class="severity-label">Severidade</span>
                        <span class="severity-value ${currentValue}" id="severity-${id}-main-value">${capitalizeFirst(currentValue)}</span>
                    </div>
                    <input type="range" class="severity-slider" min="0" max="3" value="${sliderValue}"
                           oninput="updateSeveritySlider('${id}', 'main', this.value)"
                           onchange="saveToLocalStorage()">
                </div>
            `;
        }
        
        const categoryNote = categoryNotes[id] || '';
        const notesHTML = `
            <div class="problem-notes">
                <textarea class="problem-notes-input" 
                          id="note-${id}"
                          placeholder="Anotações sobre ${cat.title.toLowerCase()}..."
                          oninput="updateCategoryNote('${id}', this.value)">${categoryNote}</textarea>
            </div>
        `;

        const photosHTML = `
            <div class="problem-photos">
                <div class="problem-photos-header">
                    <span class="problem-photos-title">Fotos (${categoryPhotos.length})</span>
                    <button class="add-photo-icon" onclick="addPhotoForCategory('${id}')">📷</button>
                </div>
                ${categoryPhotos.length > 0 ? `
                    <div class="photo-thumb-grid">
                        ${categoryPhotos.map(p => `
                            <div class="photo-thumb-container">
                                <img src="${p.data}" class="photo-thumb" onclick="viewPhoto(${p.id})">
                                <button class="photo-thumb-remove" onclick="removePhoto(${p.id})">×</button>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
        
        div.innerHTML = `
            <div class="problem-header">
                <div class="problem-icon-large ${id}">
                    <img src="${IMG_PATH}${cat.img}" alt="${cat.title}">
                </div>
                <div class="problem-title">${cat.title}</div>
            </div>
            <div class="problem-content">
                ${contentHTML}
                ${notesHTML}
                ${photosHTML}
            </div>
        `;
        
        container.appendChild(div);
    });
}

function renderFullPhotos() {
    const section = document.getElementById('fullPhotosSection');
    const container = document.getElementById('photosListFull');
    const pdfSettings = document.getElementById('pdfSettings');
    
    if (photos.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    pdfSettings.style.display = 'block';
    
    container.innerHTML = photos.map(p => {
        const imageHeight = (p.size || 100) * 2;
        return `
            <div class="photo-item-full">
                <div class="photo-item-header">
                    <div class="photo-item-type">
                        <img src="${IMG_PATH}${p.categoryImg}" alt="${p.categoryName}">
                        <span>${p.categoryName}</span>
                    </div>
                    <button class="photo-item-remove" onclick="removePhoto(${p.id})">×</button>
                </div>
                <img src="${p.data}" class="photo-item-image" style="height: ${imageHeight}px">
                <div class="photo-size-slider-container">
                    <div class="photo-size-slider-label">
                        <span>Tamanho</span>
                        <span class="photo-size-value">${p.size || 100}%</span>
                    </div>
                    <input type="range" class="photo-size-slider" min="30" max="150" value="${p.size || 100}"
                           oninput="updatePhotoSize(${p.id}, this.value)"
                           onchange="saveToLocalStorage()">
                </div>
            </div>
        `;
    }).join('');
    
    updateEstimatedSize();
}

// ========================================
// FUNÇÕES DE SEVERIDADE
// ========================================
function getSeveritySliderValue(severity) {
    const map = { 'nenhum': 0, 'baixa': 1, 'média': 2, 'alta': 3 };
    return map[severity] || 0;
}

function getSeverityFromSlider(value) {
    const map = { 0: 'nenhum', 1: 'baixa', 2: 'média', 3: 'alta' };
    return map[value] || 'nenhum';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateSeveritySlider(cat, levelId, value) {
    const severity = getSeverityFromSlider(parseInt(value));
    if (!severityData[cat]) severityData[cat] = {};
    severityData[cat][levelId] = severity;
    
    const valueDisplay = document.getElementById(`severity-${cat}-${levelId}-value`);
    if (valueDisplay) {
        valueDisplay.textContent = capitalizeFirst(severity);
        valueDisplay.className = `severity-value ${severity}`;
    }
}

function updateWaterSlider(cat, value) {
    const waterValues = ['adequado', 'seco', 'excesso'];
    const status = waterValues[parseInt(value)];
    if (!severityData[cat]) severityData[cat] = {};
    severityData[cat].main = status;
    
    const valueDisplay = document.getElementById(`severity-${cat}-main-value`);
    if (valueDisplay) {
        valueDisplay.textContent = capitalizeFirst(status);
        const colorClass = status === 'adequado' ? 'nenhum' : (status === 'seco' ? 'media' : 'alta');
        valueDisplay.className = `severity-value ${colorClass}`;
    }
}

function toggleNutrient(nutrientId, el) {
    if (selectedNutrients.has(nutrientId)) {
        selectedNutrients.delete(nutrientId);
        el.classList.remove('selected');
    } else {
        selectedNutrients.add(nutrientId);
        el.classList.add('selected');
    }
    saveToLocalStorage();
}

function updateCategoryNote(categoryId, value) {
    categoryNotes[categoryId] = value;
    saveToLocalStorage();
}

// ========================================
// FUNÇÕES DE ESTÁDIO
// ========================================
function showStageInfo() {
    const code = document.getElementById('stageSelect').value;
    if (code && stages[code]) {
        const stage = stages[code];
        document.getElementById('stageDisplay').classList.add('active');
        document.getElementById('stageIcon').innerHTML = `<img src="${IMG_PATH}${stage.img}" alt="${stage.name}">`;
        document.getElementById('stageName').textContent = stage.name;
        document.getElementById('stageDescription').textContent = stage.description;
        document.getElementById('stageDap').textContent = stage.dap;
        
        document.getElementById('attentionPoints').style.display = 'block';
        document.getElementById('attentionList').innerHTML = stage.attention.map(a => `<li>${a}</li>`).join('');
    } else {
        document.getElementById('stageDisplay').classList.remove('active');
        document.getElementById('attentionPoints').style.display = 'none';
    }
    saveToLocalStorage();
}

function calculateDAP() {
    const plantio = document.getElementById('plantio').value;
    const visita = document.getElementById('data').value;
    if (plantio && visita) {
        const p = new Date(plantio);
        const v = new Date(visita);
        const dap = Math.floor((v - p) / (1000 * 60 * 60 * 24));
        document.getElementById('dapValue').textContent = dap;
        document.getElementById('dapInfo').style.display = 'block';
    }
    saveToLocalStorage();
}

// ========================================
// LOCALIZAÇÃO
// ========================================
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude.toFixed(6);
                const lng = position.coords.longitude.toFixed(6);
                document.getElementById('coordenadas').value = `${lat}, ${lng}`;
                saveToLocalStorage();
            },
            function(error) {
                alert('Erro ao obter localização: ' + error.message);
            }
        );
    }
}

// ========================================
// CONFIGURAÇÕES PDF
// ========================================
function setPhotoQuality(quality, btn) {
    pdfPhotoQuality = quality;
    btn.parentElement.querySelectorAll('.photo-size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateEstimatedSize();
    saveToLocalStorage();
}

function setPhotosPerPage(count, btn) {
    pdfPhotosPerPage = count;
    btn.parentElement.querySelectorAll('.photo-size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateEstimatedSize();
    saveToLocalStorage();
}

function updateEstimatedSize() {
    const qualityMultipliers = { 'baixa': 0.3, 'media': 0.7, 'alta': 1.0 };
    const baseSize = 0.5;
    const photoSize = photos.length * 0.8 * qualityMultipliers[pdfPhotoQuality];
    const totalSize = baseSize + photoSize;
    document.getElementById('estimatedSize').textContent = `~${totalSize.toFixed(1)} MB`;
}

// Continua...

// ========================================
// LOCAL STORAGE
// ========================================
function saveToLocalStorage() {
    const data = {
        produtor: document.getElementById('produtor').value,
        propriedade: document.getElementById('propriedade').value,
        data: document.getElementById('data').value,
        area: document.getElementById('area').value,
        cultivar: document.getElementById('cultivar').value,
        plantio: document.getElementById('plantio').value,
        stageSelect: document.getElementById('stageSelect').value,
        observacoes: document.getElementById('observacoes').value,
        recomendacoes: document.getElementById('recomendacoes').value,
        tecnico: document.getElementById('tecnico').value,
        coordenadas: document.getElementById('coordenadas').value,
        tipo: document.querySelector('input[name="tipo"]:checked')?.value,
        amostraSolo: document.getElementById('amostraSolo').checked,
        selectedCategories: Array.from(selectedCategories),
        activePhotoCategory,
        severityData,
        categoryNotes,
        selectedNutrients: Array.from(selectedNutrients),
        photos,
        pdfPhotoQuality,
        pdfPhotosPerPage
    };
    localStorage.setItem('relatorioVisitaV3', JSON.stringify(data));
    showSaveIndicator();
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('relatorioVisitaV3');
    if (!saved) return;

    try {
        const data = JSON.parse(saved);
        
        document.getElementById('produtor').value = data.produtor || '';
        document.getElementById('propriedade').value = data.propriedade || '';
        document.getElementById('data').value = data.data || '';
        document.getElementById('area').value = data.area || '';
        document.getElementById('cultivar').value = data.cultivar || '';
        document.getElementById('plantio').value = data.plantio || '';
        document.getElementById('stageSelect').value = data.stageSelect || '';
        document.getElementById('observacoes').value = data.observacoes || '';
        document.getElementById('recomendacoes').value = data.recomendacoes || '';
        document.getElementById('tecnico').value = data.tecnico || '';
        document.getElementById('coordenadas').value = data.coordenadas || '';
        
        if (data.tipo) {
            document.querySelector(`input[name="tipo"][value="${data.tipo}"]`).checked = true;
        }
        document.getElementById('amostraSolo').checked = data.amostraSolo || false;
        
        selectedCategories = new Set(data.selectedCategories || []);
        activePhotoCategory = data.activePhotoCategory || null;
        severityData = data.severityData || {};
        categoryNotes = data.categoryNotes || {};
        selectedNutrients = new Set(data.selectedNutrients || []);
        photos = data.photos || [];
        pdfPhotoQuality = data.pdfPhotoQuality || 'media';
        pdfPhotosPerPage = data.pdfPhotosPerPage || 1;
        
        calculateDAP();
        showStageInfo();
        
        selectedCategories.forEach(id => {
            const item = document.querySelector(`[data-category="${id}"]`);
            if (item) item.classList.add('selected');
        });
        
        renderProblems();
        renderFullPhotos();
        updateFloatingButton();
        
    } catch (err) {
        console.error('Error loading:', err);
    }
}

function clearLocalStorage() {
    if (confirm('Limpar todos os dados?')) {
        localStorage.removeItem('relatorioVisitaV3');
        location.reload();
    }
}

function showSaveIndicator() {
    const indicator = document.getElementById('saveIndicator');
    indicator.classList.add('show');
    setTimeout(() => indicator.classList.remove('show'), 1500);
}

// ========================================
// EXPORTAÇÃO PDF
// ========================================
async function exportToPDF() {
    try {
        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9); color: white; padding: 30px 50px;
            border-radius: 12px; z-index: 10000; font-size: 1.2em; text-align: center;
        `;
        loadingDiv.innerHTML = '📄 Gerando PDF...';
        document.body.appendChild(loadingDiv);

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 15;
        const contentWidth = pageWidth - (2 * margin);
        let yPosition = margin;

        function checkNewPage(requiredSpace) {
            if (yPosition + requiredSpace > pageHeight - margin) {
                pdf.addPage();
                yPosition = margin;
                return true;
            }
            return false;
        }

        // Header
        pdf.setFillColor(28, 28, 30);
        pdf.rect(0, 0, pageWidth, 25, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(18);
        pdf.setFont(undefined, 'bold');
        pdf.text('Relatório de Visita Agrícola', pageWidth / 2, 15, { align: 'center' });
        yPosition = 35;

        // Get data
        const produtor = document.getElementById('produtor').value || 'Não informado';
        const propriedade = document.getElementById('propriedade').value || 'Não informado';
        const data = document.getElementById('data').value || 'Não informado';
        const area = document.getElementById('area').value || 'Não informado';
        const cultivar = document.getElementById('cultivar').value || 'Não informado';
        const plantio = document.getElementById('plantio').value || 'Não informado';
        const dapValue = document.getElementById('dapValue').textContent || '0';
        const stageSelect = document.getElementById('stageSelect');
        const selectedStage = stageSelect.options[stageSelect.selectedIndex].text || 'Não informado';
        const observacoes = document.getElementById('observacoes').value || 'Nenhuma';
        const recomendacoes = document.getElementById('recomendacoes').value || 'Nenhuma';
        const tecnico = document.getElementById('tecnico').value || 'Não informado';
        const coordenadas = document.getElementById('coordenadas').value || 'Não informado';

        // Section: Informações
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('INFORMAÇÕES DA VISITA', margin, yPosition);
        yPosition += 8;

        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        [
            `Produtor: ${produtor}`,
            `Propriedade: ${propriedade}`,
            `Data: ${data}`,
            `Área: ${area} ha`,
            `Cultivar: ${cultivar}`,
            `Plantio: ${plantio}`,
            `DAP: ${dapValue} dias`,
            `Estádio: ${selectedStage}`
        ].forEach(line => {
            checkNewPage(7);
            pdf.text(line, margin, yPosition);
            yPosition += 6;
        });

        yPosition += 5;

        // Problems
        if (selectedCategories.size > 0) {
            checkNewPage(20);
            pdf.setFontSize(14);
            pdf.setFont(undefined, 'bold');
            pdf.text('PROBLEMAS IDENTIFICADOS', margin, yPosition);
            yPosition += 8;

            Array.from(selectedCategories).forEach(catId => {
                checkNewPage(15);
                const cat = categories[catId];
                pdf.setFontSize(11);
                pdf.setFont(undefined, 'bold');
                pdf.text(`${cat.title}`, margin, yPosition);
                yPosition += 6;

                pdf.setFontSize(10);
                pdf.setFont(undefined, 'normal');

                if (cat.type === 'multi' && severityData[catId]) {
                    cat.levels.forEach(level => {
                        if (severityData[catId][level.id]) {
                            checkNewPage(6);
                            pdf.text(`  ${level.name}: ${severityData[catId][level.id]}`, margin + 2, yPosition);
                            yPosition += 5;
                        }
                    });
                } else if (cat.type === 'nutrients' && selectedNutrients.size > 0) {
                    const nutrientsList = Array.from(selectedNutrients).join(', ');
                    checkNewPage(6);
                    pdf.text(`  Deficientes: ${nutrientsList}`, margin + 2, yPosition);
                    yPosition += 5;
                } else if (severityData[catId]?.main) {
                    checkNewPage(6);
                    pdf.text(`  Nível: ${severityData[catId].main}`, margin + 2, yPosition);
                    yPosition += 5;
                }

                const catPhotos = photos.filter(p => p.category === catId).length;
                if (catPhotos > 0) {
                    pdf.text(`  Fotos: ${catPhotos}`, margin + 2, yPosition);
                    yPosition += 5;
                }

                if (categoryNotes[catId]) {
                    yPosition += 2;
                    pdf.setFont(undefined, 'italic');
                    const noteLines = pdf.splitTextToSize(`  Obs: ${categoryNotes[catId]}`, contentWidth - 10);
                    noteLines.forEach(line => {
                        checkNewPage(5);
                        pdf.text(line, margin + 2, yPosition);
                        yPosition += 5;
                    });
                    pdf.setFont(undefined, 'normal');
                }

                yPosition += 3;
            });
        }

        // Photos
        if (photos.length > 0) {
            checkNewPage(20);
            pdf.setFontSize(14);
            pdf.setFont(undefined, 'bold');
            pdf.text('FOTOS', margin, yPosition);
            yPosition += 8;

            const qualitySettings = {
                'baixa': { compression: 0.4, baseHeight: 50 },
                'media': { compression: 0.7, baseHeight: 70 },
                'alta': { compression: 0.92, baseHeight: 90 }
            };
            const settings = qualitySettings[pdfPhotoQuality];

            for (let i = 0; i < photos.length; i++) {
                const photo = photos[i];
                const photoSizeMultiplier = (photo.size || 100) / 100;
                const imgHeight = settings.baseHeight * photoSizeMultiplier;
                
                checkNewPage(imgHeight + 15);

                pdf.setFontSize(10);
                pdf.setFont(undefined, 'bold');
                pdf.text(`${photo.categoryName}`, margin, yPosition);
                yPosition += 5;

                try {
                    pdf.addImage(photo.data, 'JPEG', margin, yPosition, contentWidth, imgHeight, undefined, 'FAST');
                    yPosition += imgHeight + 10;
                } catch (err) {
                    pdf.setFont(undefined, 'normal');
                    pdf.text('[Erro ao adicionar imagem]', margin, yPosition);
                    yPosition += 10;
                }
            }
        }

        // Observações
        checkNewPage(30);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('OBSERVAÇÕES', margin, yPosition);
        yPosition += 8;

        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        pdf.splitTextToSize(observacoes, contentWidth).forEach(line => {
            checkNewPage(6);
            pdf.text(line, margin, yPosition);
            yPosition += 5;
        });

        yPosition += 5;

        // Recomendações
        checkNewPage(30);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('RECOMENDAÇÕES', margin, yPosition);
        yPosition += 8;

        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        pdf.splitTextToSize(recomendacoes, contentWidth).forEach(line => {
            checkNewPage(6);
            pdf.text(line, margin, yPosition);
            yPosition += 5;
        });

        yPosition += 10;

        // Info adicional
        checkNewPage(30);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('INFORMAÇÕES ADICIONAIS', margin, yPosition);
        yPosition += 8;

        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        [`Técnico: ${tecnico}`, `Coordenadas: ${coordenadas}`].forEach(line => {
            checkNewPage(6);
            pdf.text(line, margin, yPosition);
            yPosition += 6;
        });

        // Footer
        pdf.setFontSize(8);
        pdf.setTextColor(128, 128, 128);
        pdf.text(`Gerado em: ${new Date().toLocaleString('pt-BR')}`, pageWidth / 2, pageHeight - 10, { align: 'center' });

        const fileName = `Relatorio_${propriedade.replace(/\s+/g, '_')}_${data}.pdf`;
        pdf.save(fileName);

        document.body.removeChild(loadingDiv);

        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: rgba(52, 199, 89, 0.95); color: white; padding: 20px 40px;
            border-radius: 12px; z-index: 10000;
        `;
        successDiv.textContent = '✓ PDF gerado!';
        document.body.appendChild(successDiv);
        setTimeout(() => document.body.removeChild(successDiv), 2000);

    } catch (error) {
        console.error('PDF Error:', error);
        alert('Erro ao gerar PDF: ' + error.message);
    }
}
