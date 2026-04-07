//#region DADOS DOS PERSONAGENS

// Dados das raças com seus bônus de habilidade, deslocamento e características
const raceData = {
    'dwarf-hill': { 
        name: 'Anão da Colina', 
        abilityBonus: { con: 2, wis: 1 }, // Anões da Colina: +2 Constituição, +1 Sabedoria
        speed: 7.5, // Deslocamento base de 7.5 metros (diferente dos humanos)
        features: 'Visão no Escuro, Resiliência Anã, Treinamento Anão em Combate, Proficiência com Ferramentas, Especialização em Rochas, Tenacidade Anã' 
    },
    'dwarf-mountain': { 
        name: 'Anão da Montanha', 
        abilityBonus: { con: 2, str: 2 }, // Anões da Montanha: +2 Constituição, +2 Força
        speed: 7.5, 
        features: 'Visão no Escuro, Resiliência Anã, Treinamento Anão em Combate, Proficiência com Ferramentas, Especialização em Rochas, Proficiência com Armaduras Leves e Médias' 
    },
    'elf-high': { 
        name: 'Alto Elfo', 
        abilityBonus: { dex: 2, int: 1 }, // Altos Elfos: +2 Destreza, +1 Inteligência
        speed: 9, 
        features: 'Visão no Escuro, Sentidos Aguçados, Ancestral Feérico, Transe, Treinamento Élfico com Armas, Truque' 
    },
    'elf-wood': { 
        name: 'Elfo da Floresta', 
        abilityBonus: { dex: 2, wis: 1 }, // Elfos da Floresta: +2 Destreza, +1 Sabedoria
        speed: 10.5, // Deslocamento maior que outros elfos
        features: 'Visão no Escuro, Sentidos Aguçados, Ancestral Feérico, Transe, Treinamento Élfico com Armas, Pés Ligeiros, Máscara da Natureza' 
    },
    'elf-dark': { 
        name: 'Elfo Negro (Drow)', 
        abilityBonus: { dex: 2, cha: 1 }, // Drow: +2 Destreza, +1 Carisma
        speed: 9, 
        features: 'Visão no Escuro Superior, Sentidos Aguçados, Ancestral Feérico, Transe, Treinamento Drow com Armas, Magia Drow, Sensibilidade à Luz Solar' 
    },
    'halfling-lightfoot': { 
        name: 'Halfling Pés-Leves', 
        abilityBonus: { dex: 2, cha: 1 }, // Halflings Pés-Leves: +2 Destreza, +1 Carisma
        speed: 7.5, 
        features: 'Sortudo, Bravura, Agilidade Halfling, Furtividade Natural' 
    },
    'halfling-stout': { 
        name: 'Halfling Robusto', 
        abilityBonus: { dex: 2, con: 1 }, // Halflings Robustos: +2 Destreza, +1 Constituição
        speed: 7.5, 
        features: 'Sortudo, Bravura, Agilidade Halfling, Resiliência dos Robustos' 
    },
    'human': { 
        name: 'Humano', 
        abilityBonus: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }, // Humanos: +1 em todas as habilidades
        speed: 9, 
        features: 'Versatilidade' 
    },
    'dragonborn': { 
        name: 'Draconato', 
        abilityBonus: { str: 2, cha: 1 }, // Draconatos: +2 Força, +1 Carisma
        speed: 9, 
        features: 'Ancestral Dracônico, Arma de Sopro, Resistência a Dano' 
    },
    'gnome-forest': { 
        name: 'Gnomo da Floresta', 
        abilityBonus: { int: 2, dex: 1 }, // Gnomos da Floresta: +2 Inteligência, +1 Destreza
        speed: 7.5, 
        features: 'Visão no Escuro, Esperteza Gnômica, Ilusionista Nato, Falar com Bestas Pequenas' 
    },
    'gnome-rock': { 
        name: 'Gnomo das Rochas', 
        abilityBonus: { int: 2, con: 1 }, // Gnomos das Rochas: +2 Inteligência, +1 Constituição
        speed: 7.5, 
        features: 'Visão no Escuro, Esperteza Gnômica, Conhecimento de Artífice, Engenhoqueiro' 
    },
    'half-elf': { 
        name: 'Meio-Elfo', 
        abilityBonus: { cha: 2 }, // Meio-Elfos: +2 Carisma (mais dois +1 escolhidos pelo jogador)
        speed: 9, 
        features: 'Visão no Escuro, Ancestral Feérico, Versatilidade em Perícia' 
    },
    'half-orc': { 
        name: 'Meio-Orc', 
        abilityBonus: { str: 2, con: 1 }, // Meio-Orcs: +2 Força, +1 Constituição
        speed: 9, 
        features: 'Visão no Escuro, Ameaçador, Resistência Implacável, Ataques Selvagens' 
    },
    'tiefling': { 
        name: 'Tiefling', 
        abilityBonus: { int: 1, cha: 2 }, // Tieflings: +1 Inteligência, +2 Carisma
        speed: 9, 
        features: 'Visão no Escuro, Resistência Infernal, Legado Infernal' 
    }
};

// Lista completa de perícias com suas habilidades associadas
const skills = [
    { name: 'Acrobacia', stat: 'dex' },
    { name: 'Arcanismo', stat: 'int' },
    { name: 'Atletismo', stat: 'str' },
    { name: 'Atuação', stat: 'cha' },
    { name: 'Blefar', stat: 'cha' },
    { name: 'Furtividade', stat: 'dex' },
    { name: 'História', stat: 'int' },
    { name: 'Intimidação', stat: 'cha' },
    { name: 'Intuição', stat: 'wis' },
    { name: 'Investigação', stat: 'int' },
    { name: 'Lidar com Animais', stat: 'wis' },
    { name: 'Medicina', stat: 'wis' },
    { name: 'Natureza', stat: 'int' },
    { name: 'Percepção', stat: 'wis' },
    { name: 'Persuasão', stat: 'cha' },
    { name: 'Prestidigitação', stat: 'dex' },
    { name: 'Religião', stat: 'int' },
    { name: 'Sobrevivência', stat: 'wis' }
];

// Dados das classes com seus dados de vida, bônus de resistência e perícias sugeridas
const classData = {
    'barbarian': { hitDice: 'd12', baseHP: 12, proficiencies: { str: true, con: true }, skills: ['Atletismo', 'Intimidação', 'Natureza', 'Percepção', 'Sobrevivência'] },
    'bard': { hitDice: 'd8', baseHP: 8, proficiencies: { dex: true, cha: true }, skills: ['Atuação', 'Blefar', 'Intimidação', 'Persuasão', 'Investigação'] },
    'cleric': { hitDice: 'd8', baseHP: 8, proficiencies: { wis: true, cha: true }, skills: ['Intuição', 'Medicina', 'Persuasão', 'Religião', 'História'] },
    'druid': { hitDice: 'd8', baseHP: 8, proficiencies: { int: true, wis: true }, skills: ['Arcanismo', 'Natureza', 'Percepção', 'Sobrevivência', 'Medicina'] },
    'fighter': { hitDice: 'd10', baseHP: 10, proficiencies: { str: true, con: true }, skills: ['Atletismo', 'Intimidação', 'Percepção', 'Sobrevivência', 'História'] },
    'monk': { hitDice: 'd8', baseHP: 8, proficiencies: { str: true, dex: true }, skills: ['Acrobacia', 'Atletismo', 'Furtividade', 'História', 'Religião'] },
    'paladin': { hitDice: 'd10', baseHP: 10, proficiencies: { wis: true, cha: true }, skills: ['Atletismo', 'Intuição', 'Intimidação', 'Medicina', 'Persuasão', 'Religião'] },
    'ranger': { hitDice: 'd10', baseHP: 10, proficiencies: { str: true, dex: true }, skills: ['Atletismo', 'Furtividade', 'Natureza', 'Percepção', 'Sobrevivência'] },
    'rogue': { hitDice: 'd8', baseHP: 8, proficiencies: { dex: true, int: true }, skills: ['Acrobacia', 'Atletismo', 'Blefar', 'Furtividade', 'Intimidação', 'Investigação', 'Percepção', 'Persuasão', 'Prestidigitação'] },
    'sorcerer': { hitDice: 'd6', baseHP: 6, proficiencies: { con: true, cha: true }, skills: ['Arcanismo', 'Blefar', 'Intimidação', 'Persuasão', 'Religião'] },
    'warlock': { hitDice: 'd8', baseHP: 8, proficiencies: { wis: true, cha: true }, skills: ['Arcanismo', 'Blefar', 'História', 'Intimidação', 'Investigação', 'Natureza', 'Religião'] },
    'wizard': { hitDice: 'd6', baseHP: 6, proficiencies: { int: true, wis: true }, skills: ['Arcanismo', 'História', 'Intuição', 'Investigação', 'Medicina', 'Religião'] }
};

// Opções de subclasses para cada classe principal
const subclassOptions = {
    'barbarian': ['Caminho do Furioso', 'Caminho do Guerreiro Totêmico'],
    'bard': ['Colégio do Conhecimento', 'Colégio da Bravura'],
    'cleric': ['Domínio da Vida', 'Domínio da Guerra', 'Domínio da Luz', 'Domínio da Natureza', 'Domínio da Tempestade', 'Domínio da Enganação', 'Domínio do Conhecimento'],
    'druid': ['Círculo da Terra', 'Círculo da Lua'],
    'fighter': ['Campeão', 'Mestre de Batalha', 'Cavaleiro Arcano'],
    'monk': ['Caminho da Mão Aberta', 'Caminho da Sombra', 'Caminho dos Quatro Elementos'],
    'paladin': ['Juramento de Devoção', 'Juramento dos Anciões', 'Juramento de Vingança'],
    'ranger': ['Conclave do Caçador', 'Conclave da Besta', 'Conclave do Rastreador Subterrâneo'],
    'rogue': ['Ladrão', 'Assassino', 'Trapaceiro Arcano'],
    'sorcerer': ['Linhagem Dracônica', 'Magia Selvagem'],
    'warlock': ['O Corruptor', 'A Arquifada', 'O Grande Antigo'],
    'wizard': ['Escola de Abjuração', 'Escola de Adivinhação', 'Escola de Conjuração', 'Escola de Encantamento', 'Escola de Evocação', 'Escola de Ilusão', 'Escola de Necromancia', 'Escola de Transmutação']
};
//#endregion

//#region SALVAR E CARREGAR
/**
 * Coleta todos od dados da ficha e salva em um arquivo JSON
 */
function saveCharacter(){
    const characterData = {
        // Informações básicas
        race: document.getElementById('race').value,
        characterClass: document.getElementById('class').value,
        subclass: document.getElementById('subclass').value,
        level: document.getElementById('level').value,
        characterName: document.getElementById('character-name').value,
        playerName: document.getElementById('player-name').value,
        background: document.getElementById('background').value,
        alignment: document.getElementById('alignment').value,
        xp: document.getElementById('xp').value,

        //Habilidades
        str: document.getElementById('str-score').value,
        dex: document.getElementById('dex-score').value,
        con: document.getElementById('con-score').value,
        int: document.getElementById('int-score').value,
        wis: document.getElementById('wis-score').value,
        cha: document.getElementById('cha-score').value,

        // Proficiências em resistências
        profStr: document.getElementById('prof-str').checked,
        profDex: document.getElementById('prof-dex').checked,
        profCon: document.getElementById('prof-con').checked,
        profInt: document.getElementById('prof-int').checked,
        profWis: document.getElementById('prof-wis').checked,
        profCha: document.getElementById('prof-cha').checked,

        // Proficiências em perícias = coleta o estado de cada checkbox
        skillProfs: {},

        // Combate
        ac: document.getElementById('ac').value,
        speed: document.getElementById('speed').value,
        hpMax: document.getElementById('hp-max').value,
        hpCurrent: document.getElementById('hp-current').value,
        hpTemp: document.getElementById('hp-temp').value,

        // Death saves
        deathSuccess1: document.getElementById('death-success-1').checked,
        deathSuccess2: document.getElementById('death-success-2').checked,
        deathSuccess3: document.getElementById('death-success-3').checked,
        deathFail1: document.getElementById('death-fail-1').checked,
        deathFail2: document.getElementById('death-fail-2').checked,
        deathFail3: document.getElementById('death-fail-3').checked,

        // Ataques
        attack1Name: document.getElementById('attack1-name').value,
        attack1Bonus: document.getElementById('attack1-bonus').value,
        attack1Damage: document.getElementById('attack1-damage').value,
        attack1Range: document.getElementById('attack1-range').value,
        attack1Used: document.getElementById('attack1-used').checked,

        attack2Name: document.getElementById('attack2-name').value,
        attack2Bonus: document.getElementById('attack2-bonus').value,
        attack2Damage: document.getElementById('attack2-damage').value,
        attack2Range: document.getElementById('attack2-range').value,
        attack2Used: document.getElementById('attack2-used').checked,

        // Equipamento e dinheiro
        equipment: document.getElementById('equipment').value,
        cp: document.getElementById('cp').value,
        sp: document.getElementById('sp').value,
        ep: document.getElementById('ep').value,
        gp: document.getElementById('gp').value,
        pp: document.getElementById('pp').value,

        // Inspiração
        inspiration: document.getElementById('inspiration').checked,

        // Idiomas e características
        languages: document.getElementById('languages').value,
        features: document.getElementById('features').value,

        // Personalidade
        personalityTraits: document.getElementById('personality-traits').value,
        ideals: document.getElementById('ideals').value,
        bonds: document.getElementById('bonds').value,
        flaws: document.getElementById('flaws').value,

        // Image (se houver)
        portraitImage: document.getElementById('portrair-placeholder').querySelector('img')?.src || ''
    };

    // Coleta o estado de cada perícia
    skills.forEach(skill => {
        const checkbox = document.querySelector(`.skill-item input[data-skill="${skill.name}"]`);
        if(checkbox){
            characterData.skillProfs[skill.name] = checkbox.checked;
        }
    });

    // Converte para JSON e cria o arquivo para download
    const jsonData = JSON.stringify(characterData,null,2);
    const blob = new Blob([jsonData], {type: 'application/json'});
    const url = URL.createObjectURL(blob);

    // Cria um link para download e clina nele automaticamente
    const a = document.createElement('a');
    a.href = url;
    a.download = `${characterData.characterName || 'personagem'}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('Personagem salvo com sucesso!');
}

//#endregion

//#region FUNÇÕES DE INICIALIZAÇÃO
/*
 Função principal de inicialização - executada quando a página carrega
 Configura todos os listeners e renderiza os componente inicias
*/

function init(){
    renderSkills(); // Cria a lista de perícias no HTML
    calculateAllModifiers(); // Calcula todos os modificadores iniciais
    updateProficiencyBonus(); // Atualiza o bônus de proficiência baseado no nível
    //loadFromLocalStorage(); // Carrega dados salvos do localStorage

    // Adiciona listeners para cada habilidade detectar mudanças nos valores
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(stat => {
        document.getElementById(`${stat}-score`).addEventListener('input', () =>{
            calculateModifier(stat); // Recalcula o modificador da habilidade
            updateAllSkills(); // Atualiza todas as perícias que dependem desta habilidade
            updateSavingThrows(); // Atualiza os testes de resistência
            updatePassivePerception(); // Atualiza a percepção passiva
        });
    });

    // Adiciona listeners para os checkboxes de proficiência em perícias
    document.querySelectorAll('.skill-item input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            updateAllSkills();
            //autoSave();
        });
    });

    // Listener para o campo de nível
    document.getElementById('level').addEventListener('input', () => {
        updateProficiencyBonus(); // Atualizando bônus de proficiência quando o nível muda
    })
}
//#endregion

//#region FUNÇÕES DOS BOTÕES DE AJUSTE
/**
 * Ajusta o valor de uma habilidade usando os botões + e -
 * @param {string} stat - A habilidade a ser ajustada (str, dex, con, int, wis, cha)
 * @param {number} delta - O valor a ser adicionado (positivo ou negativo)
 */
function adjustAbility(stat, delta) {
    const input = document.getElementById(`${stat}-score`);
    let value = parseInt(input.value) || 10;
    value = Math.max(1 , Math.min(30, value + delta));// Limita entre 1 e 30
    input.value = value;
    calculateModifier(stat); // Recalcula o modificador
}

/**
 * Ajusta valores de combate (CA, Deslocamento e PV Máx) usando os botões + e -
 * @param {string} field - O campo a ser ajustado ('ac', 'speed' ou 'hp-max')
 * @param {number} delta - O valor a ser adicionado
 */

function adjustCombat(field, delta){
    const input = document.getElementById(field);
    let value;

    if (field === 'hp-max'){
        value = parseInt(input.value) || 0;
    }
    else{
        value = parseFloat(input.value) || 0;
    }

    value = Math.max(0, value + delta);

    if (field === 'speed'){
        // Arredonda para 1 casa decimal para deslocamento
        input.value = Math.round(value * 10) / 10;
    }
    else{
        input.value = value
    }
}

/**
 * Ajusta valores usando os botões empilhados (vertical)
 * Usando para PVs e dinheiro
 * @param {string} field - O campo a ser ajustado
 * @param {number} delta - O valor a ser adicionado
 */
function adjustStacked(field,delta){
    const input = document.getElementById(field);
    let value = parseInt(input.value) || 0;
    value = Math.max(0, value + delta);
    input.value = value;
}

//#endregion

//#region FUNÇÕES DE RENDERIZAÇÃO
/**
 * Renderiza a lista de perícias no container HTML
 * Cria checkboxes e labels para cada perícia da lista
 */
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-item';
        div.innerHTML = `
            <input type="checkbox" class="skill-prof" data-skill="${skill.name}" onchange="updateSkillBonus('${skill.name}'); autoSave()">
            <span class="skill-name">${skill.name} <span>(${skill.stat.toUpperCase()})</span></span>
            <span class="skill-bonus" id="skill-${skill.name.replace(/\s/g, '-')}">+0</span>
        `;
        container.appendChild(div);
    });
}
//#endregion

//#region FUNÇÕES DE CÁLCULO
/**
 * Calcula o modificador de uma habilidade baseado no valor
 * Fórmula: (valor - 10) / 2, arredondado para baixo
 * @param {string} stat - A habilidade para calcular o modificador
 * @returns {number} O modificador calculado
 */
function calculateModifier(stat) {
    const score = parseInt(document.getElementById(`${stat}-score`).value) || 10;
    const mod = Math.floor((score - 10) / 2);
    document.getElementById(`${stat}-mod`).textContent = (mod >= 0 ? '+' : '') + mod;
    
    // Atualiza tudo que depende do modificador
    updateAllSkills();
    updateSavingThrows();
    updateInitiative();
    updatePassivePerception();
    
    return mod;
}

/**
 * Calcula os modificadores de todas as habilidades
 */
function calculateAllModifiers() {
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(stat => calculateModifier(stat));
}

/**
 * Obtém o modificador atual de uma habilidade
 * @param {string} stat - A habilidade
 * @returns {number} O modificador como número inteiro
 */
function getModifier(stat) {
    const modText = document.getElementById(`${stat}-mod`).textContent;
    return parseInt(modText) || 0;
}

/**
 * Atualiza o bônus de uma perícia específica
 * Bônus = modificador da habilidade + bônus de proficiência (se proficiente)
 * @param {string} skillName - Nome da perícia a ser atualizada
 */
function updateSkillBonus(skillName) {
    const skill = skills.find(s => s.name === skillName);
    const mod = getModifier(skill.stat);
    const profBonus = parseInt(document.getElementById('prof-bonus').value) || 2;
    const isProficient = document.querySelector(`.skill-item input[data-skill="${skillName}"]`).checked;
    
    const total = mod + (isProficient ? profBonus : 0);
    document.getElementById(`skill-${skillName.replace(/\s/g, '-')}`).textContent = (total >= 0 ? '+' : '') + total;
    
    // Atualiza percepção passiva se for a perícia Percepção
    if (skillName === 'Percepção') {
        updatePassivePerception();
    }
}

/**
 * Atualiza todas as perícias
 */
function updateAllSkills() {
    skills.forEach(skill => updateSkillBonus(skill.name));
}

/**
 * Atualiza todos os testes de resistência
 * Cada resistência = modificador da habilidade + bônus de proficiência (se proficiente)
 */
function updateSavingThrows() {
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(stat => {
        const mod = getModifier(stat);
        const profBonus = parseInt(document.getElementById('prof-bonus').value) || 2;
        const isProficient = document.getElementById(`prof-${stat}`).checked;
        
        const total = mod + (isProficient ? profBonus : 0);
        document.getElementById(`save-${stat}`).textContent = (total >= 0 ? '+' : '') + total;
    });
}

/**
 * Atualiza a iniciativa baseada no modificador de Destreza
 */
function updateInitiative() {
    const dexMod = getModifier('dex');
    document.getElementById('initiative').value = dexMod;
}

/**
 * Atualiza a percepção passiva
 * Fórmula: 10 + modificador de Sabedoria + bônus de proficiência (se proficiente em Percepção)
 */
function updatePassivePerception() {
    const wisMod = getModifier('wis');
    const profBonus = parseInt(document.getElementById('prof-bonus').value) || 2;
    const isProficient = document.querySelector('.skill-item input[data-skill="Percepção"]')?.checked || false;
    
    const perceptionBonus = wisMod + (isProficient ? profBonus : 0);
    const passive = 10 + perceptionBonus;
    document.getElementById('passive-perception').textContent = passive;
}

/**
 * Atualiza o bônus de proficiência baseado no nível do personagem
 * Nível 1-4: +2, 5-8: +3, 9-12: +4, 13-16: +5, 17-20: +6
 */
function updateProficiencyBonus() {
    const level = parseInt(document.getElementById('level').value) || 1;
    // Garante que o nível está entre 1 e 20
    const validLevel = Math.max(1, Math.min(20, level));
    if (validLevel !== level) {
        document.getElementById('level').value = validLevel;
    }
    
    let profBonus = 2;
    if (validLevel >= 17) profBonus = 6;
    else if (validLevel >= 13) profBonus = 5;
    else if (validLevel >= 9) profBonus = 4;
    else if (validLevel >= 5) profBonus = 3;
    
    document.getElementById('prof-bonus').value = profBonus;
}
//#endregion

//#region FUNÇÕES DE SELEÇÃO DE RAÇA E CLASSE
/**
 * Atualiza os bônus raciais quando uma raça é selecionada
 * Aplica os bônus de habilidade, ajusta deslocamento e adiciona características
 */
function updateRaceBonuses() {
    const race = document.getElementById('race').value;
    if (!race) return;

    const data = raceData[race];
    
    // Reset para valor base 10 em todas as habilidades
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(stat => {
        document.getElementById(`${stat}-score`).value = 10;
    });

    // Aplica os bônus raciais
    if (data.abilityBonus) {
        Object.entries(data.abilityBonus).forEach(([stat, bonus]) => {
            const current = parseInt(document.getElementById(`${stat}-score`).value) || 10;
            document.getElementById(`${stat}-score`).value = current + bonus;
        });
    }

    // Atualiza o deslocamento
    if (data.speed) {
        document.getElementById('speed').value = data.speed;
    }

    // Adiciona as características raciais ao campo de texto
    const featuresArea = document.getElementById('features');
    const currentFeatures = featuresArea.value;
    featuresArea.value = data.features + (currentFeatures ? '\n' + currentFeatures : '');

    // Recalcula tudo que foi afetado
    calculateAllModifiers();
}

/**
 * Atualiza as características da classe quando uma classe é selecionada
 * Ajusta dados de vida, resistências e opções de subclasse
 */
function updateClassFeatures() {
    const className = document.getElementById('class').value;
    if (!className) return;

    const data = classData[className];
    
    // Marca as resistências em que a classe é proficiente
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(stat => {
        document.getElementById(`prof-${stat}`).checked = data.proficiencies[stat] || false;
    });

    // Atualiza as opções de subclasse no select
    const subclassSelect = document.getElementById('subclass');
    subclassSelect.innerHTML = '<option value="">Selecione</option>';
    if (subclassOptions[className]) {
        subclassOptions[className].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub.toLowerCase().replace(/\s/g, '-');
            option.textContent = sub;
            subclassSelect.appendChild(option);
        });
    }

    // Recalcula resistências
    updateSavingThrows();
}

/**
 * Atualiza as características da classe quando é selecionada
 * Ajusta dados de vida, resistências e opções de subclasse
 */

function updateClassFeatures(){
    const className = document.getElementById('class').value;
    if (!className) return;

    const data = classData[className];

    // Marca as resistências em que a classe é proeficiente
    ['str','dex','con','int','wis','cha'].forEach(stat => {
        document.getElementById(`prof-${stat}`).checked = data.proficiencies[stat] || false;
    });

    // Atualiza as opções de subclasse no select
    const subclassSelect = document.getElementById('subclass');
    subclassSelect.innerHTML = '<option value="">Selecione</option>';
    if (subclassOptions[className]){
        subclassOptions[className].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub.toLowerCase().replace(/\s/g, '-');
            option.textContent = sub;
            subclassSelect.appendChild(option);
        });
    }

    // Recalcula resistências
    updateSavingThrows();
}
//#endregion

//#region FUNÇÕES DE UTILIZADE
/**
 * Carrega e exibe uma imagem de retrato do personagem
 * @param {Event} event - O evento de upload de arquivo
 */
function loadPortrait(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const portraitDiv = document.getElementById('portrait-placeholder');
            
            // Remove imagem existente se houver
            const existingImg = portraitDiv.querySelector('img');
            if (existingImg) {
                existingImg.remove();
            }
            
            // Cria novo elemento de imagem
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'portrait-image';
            img.alt = 'Character Portrait';
            
            // Adiciona imagem ao placeholder
            portraitDiv.appendChild(img);
            portraitDiv.classList.add('has-image');
            
            // Esconde o texto do placeholder
            const span = portraitDiv.querySelector('span');
            if (span) {
                span.style.display = 'none';
            }
            
            // Remove o background SVG
            portraitDiv.style.backgroundImage = 'none';
        }
        reader.readAsDataURL(file);
    }
}
//#endregion

// Executa a inicialização quando a página termina de cerregar
document.addEventListener('DOMContentLoaded', init);