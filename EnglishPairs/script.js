// 英语单词配对游戏

// 游戏配置
const GAME_CONFIG = {
    words: [
        // 动物类 (30个)
        { id: 1, word: 'cat', emoji: '🐱', audio: 'cat' },
        { id: 2, word: 'dog', emoji: '🐶', audio: 'dog' },
        { id: 3, word: 'bird', emoji: '🐦', audio: 'bird' },
        { id: 4, word: 'fish', emoji: '🐟', audio: 'fish' },
        { id: 5, word: 'bear', emoji: '🐻', audio: 'bear' },
        { id: 6, word: 'lion', emoji: '🦁', audio: 'lion' },
        { id: 7, word: 'tiger', emoji: '🐯', audio: 'tiger' },
        { id: 8, word: 'rabbit', emoji: '🐰', audio: 'rabbit' },
        { id: 9, word: 'elephant', emoji: '🐘', audio: 'elephant' },
        { id: 10, word: 'monkey', emoji: '🐒', audio: 'monkey' },
        { id: 11, word: 'panda', emoji: '🐼', audio: 'panda' },
        { id: 12, word: 'zebra', emoji: '🦓', audio: 'zebra' },
        { id: 13, word: 'giraffe', emoji: '🦒', audio: 'giraffe' },
        { id: 14, word: 'hippo', emoji: '🦛', audio: 'hippo' },
        { id: 15, word: 'penguin', emoji: '🐧', audio: 'penguin' },
        { id: 16, word: 'owl', emoji: '🦉', audio: 'owl' },
        { id: 17, word: 'fox', emoji: '🦊', audio: 'fox' },
        { id: 18, word: 'wolf', emoji: '🐺', audio: 'wolf' },
        { id: 19, word: 'duck', emoji: '🦆', audio: 'duck' },
        { id: 20, word: 'chicken', emoji: '🐔', audio: 'chicken' },
        { id: 21, word: 'pig', emoji: '🐷', audio: 'pig' },
        { id: 22, word: 'cow', emoji: '🐄', audio: 'cow' },
        { id: 23, word: 'sheep', emoji: '🐑', audio: 'sheep' },
        { id: 24, word: 'horse', emoji: '🐴', audio: 'horse' },
        { id: 25, word: 'frog', emoji: '🐸', audio: 'frog' },
        { id: 26, word: 'turtle', emoji: '🐢', audio: 'turtle' },
        { id: 27, word: 'snake', emoji: '🐍', audio: 'snake' },
        { id: 28, word: 'butterfly', emoji: '🦋', audio: 'butterfly' },
        { id: 29, word: 'bee', emoji: '🐝', audio: 'bee' },
        { id: 30, word: 'ant', emoji: '🐜', audio: 'ant' },
        
        // 水果类 (15个)
        { id: 31, word: 'apple', emoji: '🍎', audio: 'apple' },
        { id: 32, word: 'banana', emoji: '🍌', audio: 'banana' },
        { id: 33, word: 'orange', emoji: '🍊', audio: 'orange' },
        { id: 34, word: 'grape', emoji: '🍇', audio: 'grape' },
        { id: 35, word: 'strawberry', emoji: '🍓', audio: 'strawberry' },
        { id: 36, word: 'watermelon', emoji: '🍉', audio: 'watermelon' },
        { id: 37, word: 'pineapple', emoji: '🍍', audio: 'pineapple' },
        { id: 38, word: 'peach', emoji: '🍑', audio: 'peach' },
        { id: 39, word: 'pear', emoji: '🍐', audio: 'pear' },
        { id: 40, word: 'cherry', emoji: '🍒', audio: 'cherry' },
        { id: 41, word: 'lemon', emoji: '🍋', audio: 'lemon' },
        { id: 42, word: 'lime', emoji: '🍈', audio: 'lime' },
        { id: 43, word: 'mango', emoji: '🥭', audio: 'mango' },
        { id: 44, word: 'kiwi', emoji: '🥝', audio: 'kiwi' },
        { id: 45, word: 'coconut', emoji: '🥥', audio: 'coconut' },
        
        // 蔬菜类 (10个)
        { id: 46, word: 'carrot', emoji: '🥕', audio: 'carrot' },
        { id: 47, word: 'tomato', emoji: '🍅', audio: 'tomato' },
        { id: 48, word: 'potato', emoji: '🥔', audio: 'potato' },
        { id: 49, word: 'cucumber', emoji: '🥒', audio: 'cucumber' },
        { id: 50, word: 'corn', emoji: '🌽', audio: 'corn' },
        { id: 51, word: 'broccoli', emoji: '🥦', audio: 'broccoli' },
        { id: 52, word: 'cauliflower', emoji: '🥬', audio: 'cauliflower' },
        { id: 53, word: 'onion', emoji: '🧅', audio: 'onion' },
        { id: 54, word: 'garlic', emoji: '🧄', audio: 'garlic' },
        { id: 55, word: 'mushroom', emoji: '🍄', audio: 'mushroom' },
        
        // 日常物品类 (15个)
        { id: 56, word: 'book', emoji: '📚', audio: 'book' },
        { id: 57, word: 'pencil', emoji: '✏️', audio: 'pencil' },
        { id: 58, word: 'pen', emoji: '🖊️', audio: 'pen' },
        { id: 59, word: 'bag', emoji: '🎒', audio: 'bag' },
        { id: 60, word: 'cup', emoji: '☕', audio: 'cup' },
        { id: 61, word: 'plate', emoji: '🍽️', audio: 'plate' },
        { id: 62, word: 'spoon', emoji: '🥄', audio: 'spoon' },
        { id: 63, word: 'fork', emoji: '🍴', audio: 'fork' },
        { id: 64, word: 'knife', emoji: '🔪', audio: 'knife' },
        { id: 65, word: 'clock', emoji: '⏰', audio: 'clock' },
        { id: 66, word: 'phone', emoji: '📱', audio: 'phone' },
        { id: 67, word: 'computer', emoji: '💻', audio: 'computer' },
        { id: 68, word: 'lamp', emoji: '💡', audio: 'lamp' },
        { id: 69, word: 'chair', emoji: '🪑', audio: 'chair' },
        { id: 70, word: 'table', emoji: '🪵', audio: 'table' },
        
        // 交通工具类 (10个)
        { id: 71, word: 'car', emoji: '🚗', audio: 'car' },
        { id: 72, word: 'bus', emoji: '🚌', audio: 'bus' },
        { id: 73, word: 'train', emoji: '🚂', audio: 'train' },
        { id: 74, word: 'plane', emoji: '✈️', audio: 'plane' },
        { id: 75, word: 'boat', emoji: '🚢', audio: 'boat' },
        { id: 76, word: 'bicycle', emoji: '🚲', audio: 'bicycle' },
        { id: 77, word: 'motorcycle', emoji: '🏍️', audio: 'motorcycle' },
        { id: 78, word: 'truck', emoji: '🚚', audio: 'truck' },
        { id: 79, word: 'ambulance', emoji: '🚑', audio: 'ambulance' },
        { id: 80, word: 'fire truck', emoji: '🚒', audio: 'fire truck' },
        
        // 颜色类 (10个)
        { id: 81, word: 'red', emoji: '🔴', audio: 'red' },
        { id: 82, word: 'blue', emoji: '🔵', audio: 'blue' },
        { id: 83, word: 'yellow', emoji: '🟡', audio: 'yellow' },
        { id: 84, word: 'green', emoji: '🟢', audio: 'green' },
        { id: 85, word: 'orange', emoji: '🟠', audio: 'orange' },
        { id: 86, word: 'purple', emoji: '🟣', audio: 'purple' },
        { id: 87, word: 'pink', emoji: '💖', audio: 'pink' },
        { id: 88, word: 'brown', emoji: '🟤', audio: 'brown' },
        { id: 89, word: 'black', emoji: '⚫', audio: 'black' },
        { id: 90, word: 'white', emoji: '⚪', audio: 'white' },
        
        // 数字类 (10个)
        { id: 91, word: 'one', emoji: '1️⃣', audio: 'one' },
        { id: 92, word: 'two', emoji: '2️⃣', audio: 'two' },
        { id: 93, word: 'three', emoji: '3️⃣', audio: 'three' },
        { id: 94, word: 'four', emoji: '4️⃣', audio: 'four' },
        { id: 95, word: 'five', emoji: '5️⃣', audio: 'five' },
        { id: 96, word: 'six', emoji: '6️⃣', audio: 'six' },
        { id: 97, word: 'seven', emoji: '7️⃣', audio: 'seven' },
        { id: 98, word: 'eight', emoji: '8️⃣', audio: 'eight' },
        { id: 99, word: 'nine', emoji: '9️⃣', audio: 'nine' },
        { id: 100, word: 'ten', emoji: '🔟', audio: 'ten' }
    ],
    pairsPerGame: 8, // 每次游戏使用8对卡片（16张）
    initialScore: 0,
    initialMoves: 0
};

// 游戏状态
let gameState = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    score: GAME_CONFIG.initialScore,
    moves: GAME_CONFIG.initialMoves,
    isPlaying: false,
    soundEnabled: true
};

// DOM元素
const elements = {
    gameBoard: document.getElementById('gameBoard'),
    score: document.getElementById('score'),
    moves: document.getElementById('moves'),
    startBtn: document.getElementById('startBtn'),
    restartBtn: document.getElementById('restartBtn'),
    soundBtn: document.getElementById('soundBtn'),
    gameOver: document.getElementById('gameOver'),
    finalScore: document.getElementById('finalScore'),
    finalMoves: document.getElementById('finalMoves'),
    playAgainBtn: document.getElementById('playAgainBtn')
};

// 初始化游戏
function initGame() {
    // 绑定事件监听器
    elements.startBtn.addEventListener('click', startGame);
    elements.restartBtn.addEventListener('click', restartGame);
    elements.soundBtn.addEventListener('click', toggleSound);
    elements.playAgainBtn.addEventListener('click', playAgain);
    
    // 更新显示
    updateScore();
    updateMoves();
}

// 开始游戏
function startGame() {
    gameState = {
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        score: GAME_CONFIG.initialScore,
        moves: GAME_CONFIG.initialMoves,
        isPlaying: true,
        soundEnabled: gameState.soundEnabled
    };
    
    // 生成卡片
    generateCards();
    
    // 更新显示
    updateScore();
    updateMoves();
    elements.startBtn.disabled = true;
    elements.startBtn.style.opacity = '0.6';
}

// 重新开始游戏
function restartGame() {
    startGame();
}

// 再玩一次
function playAgain() {
    elements.gameOver.classList.add('hidden');
    startGame();
}

// 生成卡片
function generateCards() {
    // 清空游戏板
    elements.gameBoard.innerHTML = '';
    
    // 随机选择8个单词
    const selectedWords = [...GAME_CONFIG.words]
        .sort(() => Math.random() - 0.5)
        .slice(0, GAME_CONFIG.pairsPerGame);
    
    // 创建卡片数据
    const cardData = [];
    
    // 为每个单词创建两张卡片：一张显示emoji，一张显示单词
    selectedWords.forEach(word => {
        // 图片卡片（emoji）
        cardData.push({
            id: `${word.id}-image`,
            type: 'image',
            content: word.emoji,
            word: word.word,
            audio: word.audio,
            matched: false
        });
        
        // 单词卡片
        cardData.push({
            id: `${word.id}-word`,
            type: 'word',
            content: word.word,
            word: word.word,
            audio: word.audio,
            matched: false
        });
    });
    
    // 打乱卡片顺序
    gameState.cards = cardData.sort(() => Math.random() - 0.5);
    
    // 创建卡片元素
    gameState.cards.forEach(card => {
        const cardElement = createCardElement(card);
        elements.gameBoard.appendChild(cardElement);
    });
}

// 创建卡片元素
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.cardId = card.id;
    
    // 卡片内部结构
    cardDiv.innerHTML = `
        <div class="card-inner">
            <div class="card-front">?️</div>
            <div class="card-back">
                ${card.type === 'image' 
                    ? `<div class="card-image">${card.content}</div>` 
                    : `<div class="card-word">${card.content}</div>`
                }
                <div class="sound-icon" onclick="playSound('${card.audio}')">🔊</div>
            </div>
        </div>
    `;
    
    // 添加点击事件
    cardDiv.addEventListener('click', () => flipCard(cardDiv, card));
    
    return cardDiv;
}

// 翻转卡片
function flipCard(cardElement, cardData) {
    // 检查是否可以翻转
    if (!gameState.isPlaying || 
        cardElement.classList.contains('flipped') || 
        cardElement.classList.contains('matched') ||
        gameState.flippedCards.length >= 2) {
        return;
    }
    
    // 翻转卡片
    cardElement.classList.add('flipped');
    gameState.flippedCards.push({ element: cardElement, data: cardData });
    
    // 如果已经翻转了两张卡片，检查是否配对
    if (gameState.flippedCards.length === 2) {
        gameState.moves++;
        updateMoves();
        
        setTimeout(() => {
            checkMatch();
        }, 1000);
    }
}

// 检查配对
function checkMatch() {
    const [card1, card2] = gameState.flippedCards;
    
    // 检查是否配对（相同的word属性）
    if (card1.data.word === card2.data.word && card1.data.type !== card2.data.type) {
        // 配对成功
        handleMatch(card1, card2);
    } else {
        // 配对失败
        handleMismatch(card1, card2);
    }
    
    // 清空翻转卡片数组
    gameState.flippedCards = [];
}

// 处理配对成功
function handleMatch(card1, card2) {
    // 标记为已匹配
    card1.element.classList.add('matched');
    card2.element.classList.add('matched');
    
    // 添加弹跳动画
    card1.element.classList.add('bounce');
    card2.element.classList.add('bounce');
    
    // 更新游戏状态
    gameState.matchedPairs++;
    gameState.score += 10;
    
    // 播放成功音效
    if (gameState.soundEnabled) {
        playSuccessSound();
    }
    
    // 更新显示
    updateScore();
    
    // 检查游戏是否结束
    if (gameState.matchedPairs === GAME_CONFIG.pairsPerGame) {
        endGame();
    }
}

// 处理配对失败
function handleMismatch(card1, card2) {
    // 翻回卡片
    card1.element.classList.remove('flipped');
    card2.element.classList.remove('flipped');
    
    // 播放失败音效
    if (gameState.soundEnabled) {
        playFailSound();
    }
}

// 更新得分
function updateScore() {
    elements.score.textContent = gameState.score;
}

// 更新步数
function updateMoves() {
    elements.moves.textContent = gameState.moves;
}

// 切换音效
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    elements.soundBtn.textContent = gameState.soundEnabled ? '🔊 音效: 开' : '🔇 音效: 关';
}

// 播放单词发音
function playSound(word) {
    if (!gameState.soundEnabled) return;
    
    try {
        // 使用Web Speech API
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8; // 慢速发音，适合孩子
        speechSynthesis.speak(utterance);
    } catch (error) {
        console.log('无法播放语音:', error);
    }
}

// 播放成功音效
function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
        console.log('无法播放音效:', error);
    }
}

// 播放失败音效
function playFailSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
        console.log('无法播放音效:', error);
    }
}

// 游戏结束
function endGame() {
    gameState.isPlaying = false;
    
    // 显示游戏结束界面
    elements.finalScore.textContent = gameState.score;
    elements.finalMoves.textContent = gameState.moves;
    elements.gameOver.classList.remove('hidden');
    
    // 恢复开始按钮状态
    elements.startBtn.disabled = false;
    elements.startBtn.style.opacity = '1';
    
    // 播放胜利音效
    if (gameState.soundEnabled) {
        playVictorySound();
    }
}

// 播放胜利音效
function playVictorySound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [600, 700, 800, 1000];
        
        notes.forEach((frequency, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + index * 0.2);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime + index * 0.2);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.2 + 0.15);
            
            oscillator.start(audioContext.currentTime + index * 0.2);
            oscillator.stop(audioContext.currentTime + index * 0.2 + 0.15);
        });
    } catch (error) {
        console.log('无法播放胜利音效:', error);
    }
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', initGame);

// 添加触摸支持（防止手机上的300ms延迟）
if ('touchAction' in document.documentElement.style) {
    document.documentElement.style.touchAction = 'manipulation';
}