//#region DADOS DOS PERSONAGENS

// Dados das raças com seus bônus de habilidade, deslocamento e características
const raceData = {
    'dawrf-hill' : {
        name: 'Anão da Colina',
        abilityBonus: {con: 2, wis: 1}, // Anões da Colina: +2 Constituição, +1 Sabedoria
        speed: 7.5,
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
    { name: 'Acrobacia', stat: 'dex'},
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

//#endregion

//#region FUNÇÕES DE INICIALIZAÇÃO
/*
 Função principal de inicialização - executada quando a página carrega
 Configura todos os listeners e renderiza os componente inicias
*/

function init(){
    renderSkills();
}
//#endregion

//#region FUNÇÕES DOS BOTÕES DE AJUSTE

//#endregion

//#region FUNÇÕES DE RENDERIZAÇÃO
/*
    Renderiza a lista de perícias no conteiner HTML
    Cria checkboxes e labels para cada perícia da lista
*/

function renderSkills(){
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
        container.appendChild(div)
    })
}
//#endregion

//#region FUNÇÕES DE CÁLCULO
 /**
 * Calcula o modificador de uma habilidade baseado no valor
 * Fórmula: (valor - 10)/2, arredondado para baixo
 * @param {string} stat - A habilidade para calcular o modificador
 * @returns {number} o modificador calculado
 */

function calculateModifier(stat){
    const score = parentInt(document.getElementById(`${stat}-score`).value) || 10;
    const mod = Math.floor((score -10) / 2);
    document.getElementById(`${stat}-mod`).textContent = (mod >= 0 ? '+' : '') + mod;

    // Atualiza tudo que depende do modificador
    //updateAllSkills();
    //updateSavingThrows();
    //updateInitiative();
    //updatePassivePerception();

    return mod;
}

// Calcula os modificares de todas as habilidades
function calculateAllModifiers(){
    ['str','dex','con','int','wis','cha'].forEach(stat => calculateModifier(stat))
}

//#endregion

//#region FUNÇÕES DE SELEÇÃO DE RAÇA E CLASSE

//#endregion

//#region FUNÇÕES DE UTILIZADE

//#endregion

// Executa a inicialização quando a página termina de cerregar
document.addEventListener('DOMContentLoaded', init);