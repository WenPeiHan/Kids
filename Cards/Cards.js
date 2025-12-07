// 游戏配置
const ANIMAL_EMOJIS = [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊',
    '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'
];

// 游戏状态
let cards = [];
let flippedCards = [];
let matchedCards = [];
let score = 0;
let moves = 0;
let time = 0;
let timer = null;
let isGameStarted = false;

// DOM元素
let gameBoard;
let scoreElement;
let movesElement;
let timeElement;
let gameOverElement;

// 初始化游戏
function initGame() {
    // 获取DOM元素
    gameBoard = document.getElementById('gameBoard');
    scoreElement = document.getElementById('score');
    movesElement = document.getElementById('moves');
    timeElement = document.getElementById('time');
    gameOverElement = document.getElementById('gameOver');
    
    // 添加事件监听器
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('restartBtn').addEventListener('click', restartGame);
    document.getElementById('playAgainBtn').addEventListener('click', playAgain);
    
    // 初始化游戏板
    createCards();
    renderCards();
}

// 创建卡片
function createCards() {
    // 选择8个不同的动物表情符号
    const selectedEmojis = ANIMAL_EMOJIS.slice(0, 6);
    // 创建配对卡片
    const pairedEmojis = [...selectedEmojis, ...selectedEmojis];
    
    // 打乱卡片顺序
    cards = shuffleArray(pairedEmojis).map((emoji, index) => ({
        id: index,
        emoji: emoji,
        isFlipped: false,
        isMatched: false
    }));
}

// 渲染卡片到游戏板
function renderCards() {
    gameBoard.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.id = card.id;
        
        cardElement.innerHTML = `
            <div class="card-face card-back">?</div>
            <div class="card-face card-front">${card.emoji}</div>
        `;
        
        cardElement.addEventListener('click', () => flipCard(card.id));
        gameBoard.appendChild(cardElement);
    });
}

// 翻转卡片
function flipCard(cardId) {
    if (!isGameStarted) return;
    
    const card = cards[cardId];
    const cardElement = document.querySelector(`[data-id="${cardId}"]`);
    
    // 检查卡片是否可以翻转
    if (card.isFlipped || card.isMatched || flippedCards.length >= 2) {
        return;
    }
    
    // 翻转卡片
    card.isFlipped = true;
    cardElement.classList.add('flipped');
    flippedCards.push(card);
    
    // 检查是否翻转了两张卡片
    if (flippedCards.length === 2) {
        moves++;
        movesElement.textContent = moves;
        setTimeout(checkMatch, 1000);
    }
}

// 检查配对
function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.emoji === card2.emoji) {
        // 配对成功
        card1.isMatched = true;
        card2.isMatched = true;
        matchedCards.push(card1, card2);
        
        // 更新样式
        document.querySelector(`[data-id="${card1.id}"]`).classList.add('matched');
        document.querySelector(`[data-id="${card2.id}"]`).classList.add('matched');
        
        // 增加分数
        score += 10;
        scoreElement.textContent = score;
        
        // 检查游戏是否完成
        if (matchedCards.length === cards.length) {
            gameComplete();
        }
    } else {
        // 配对失败，翻回卡片
        card1.isFlipped = false;
        card2.isFlipped = false;
        document.querySelector(`[data-id="${card1.id}"]`).classList.remove('flipped');
        document.querySelector(`[data-id="${card2.id}"]`).classList.remove('flipped');
    }
    
    // 清空翻转的卡片
    flippedCards = [];
}

// 开始游戏
function startGame() {
    if (isGameStarted) return;
    
    isGameStarted = true;
    startTimer();
    document.getElementById('startBtn').disabled = true;
}

// 重新开始游戏
function restartGame() {
    resetGame();
    createCards();
    renderCards();
}

// 再玩一次
function playAgain() {
    gameOverElement.classList.add('hidden');
    restartGame();
}

// 游戏完成
function gameComplete() {
    stopTimer();
    isGameStarted = false;
    
    // 显示游戏结束界面
    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalMoves').textContent = moves;
    document.getElementById('finalTime').textContent = formatTime(time);
    gameOverElement.classList.remove('hidden');
    
    // 重置开始按钮状态
    document.getElementById('startBtn').disabled = false;
}

// 开始计时
function startTimer() {
    timer = setInterval(() => {
        time++;
        timeElement.textContent = formatTime(time);
    }, 1000);
}

// 停止计时
function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// 格式化时间
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// 重置游戏
function resetGame() {
    stopTimer();
    score = 0;
    moves = 0;
    time = 0;
    flippedCards = [];
    matchedCards = [];
    isGameStarted = false;
    
    // 更新UI
    scoreElement.textContent = score;
    movesElement.textContent = moves;
    timeElement.textContent = '00:00';
    document.getElementById('startBtn').disabled = false;
}

// 打乱数组顺序（Fisher-Yates算法）
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 页面加载完成后初始化游戏
window.addEventListener('DOMContentLoaded', initGame);