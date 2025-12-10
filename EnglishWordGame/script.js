// 英语单词记忆游戏

// 游戏配置
const GAME_CONFIG = {
    totalQuestions: 10,
    initialScore: 0,
    correctScore: 10,
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
    ]
};

// 游戏状态
let gameState = {
    currentMode: 'word-to-image', // 'word-to-image' 或 'image-to-word'
    currentQuestion: 0,
    score: GAME_CONFIG.initialScore,
    correctAnswers: 0,
    isPlaying: false,
    soundEnabled: true,
    currentWord: null,
    usedWords: [],
    selectedOption: null
};

// DOM元素
const elements = {
    // 信息显示
    score: document.getElementById('score'),
    questionCount: document.getElementById('questionCount'),
    
    // Tab切换
    tabBtns: document.querySelectorAll('.tab-btn'),
    
    // 题目区域
    questionWord: document.getElementById('questionWord'),
    questionImage: document.getElementById('questionImage'),
    soundBtn: document.getElementById('soundBtn'),
    
    // 选项区域
    optionsGrid: document.getElementById('optionsGrid'),
    
    // 反馈区域
    feedback: document.getElementById('feedback'),
    feedbackContent: document.querySelector('.feedback-content'),
    
    // 控制按钮
    startBtn: document.getElementById('startBtn'),
    nextBtn: document.getElementById('nextBtn'),
    restartBtn: document.getElementById('restartBtn'),
    
    // 游戏结束
    gameOver: document.getElementById('gameOver'),
    finalScore: document.getElementById('finalScore'),
    accuracy: document.getElementById('accuracy'),
    totalQuestions: document.getElementById('totalQuestions'),
    playAgainBtn: document.getElementById('playAgainBtn')
};

// 初始化游戏
function initGame() {
    // 绑定事件监听器
    bindEventListeners();
    
    // 更新显示
    updateScore();
    updateQuestionCount();
}

// 绑定事件监听器
function bindEventListeners() {
    // Tab切换
    elements.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchMode(btn.dataset.mode);
        });
    });
    
    // 控制按钮
    elements.startBtn.addEventListener('click', startGame);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.restartBtn.addEventListener('click', restartGame);
    elements.playAgainBtn.addEventListener('click', playAgain);
    
    // 音效按钮
    elements.soundBtn.addEventListener('click', playCurrentSound);
}

// 切换游戏模式
function switchMode(mode) {
    // 更新Tab状态
    elements.tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    
    // 更新游戏模式
    gameState.currentMode = mode;
    
    // 更新题目显示
    if (mode === 'word-to-image') {
        elements.questionWord.classList.remove('hidden');
        elements.questionImage.classList.add('hidden');
    } else {
        elements.questionWord.classList.add('hidden');
        elements.questionImage.classList.remove('hidden');
    }
    
    // 如果游戏正在进行，重新生成题目
    if (gameState.isPlaying) {
        generateQuestion();
    }
}

// 开始游戏
function startGame() {
    // 重置游戏状态
    gameState = {
        currentMode: document.querySelector('.tab-btn.active').dataset.mode,
        currentQuestion: 0,
        score: GAME_CONFIG.initialScore,
        correctAnswers: 0,
        isPlaying: true,
        soundEnabled: true,
        currentWord: null,
        usedWords: [],
        selectedOption: null
    };
    
    // 更新界面
    elements.startBtn.classList.add('hidden');
    elements.nextBtn.classList.remove('hidden');
    
    // 生成第一题
    generateQuestion();
    
    // 更新显示
    updateScore();
    updateQuestionCount();
}

// 生成题目
function generateQuestion() {
    // 重置反馈和选项
    resetFeedback();
    resetOptions();
    
    // 如果已经完成所有题目，结束游戏
    if (gameState.currentQuestion >= GAME_CONFIG.totalQuestions) {
        endGame();
        return;
    }
    
    // 随机选择一个未使用过的单词
    let availableWords = GAME_CONFIG.words.filter(word => !gameState.usedWords.includes(word.id));
    
    // 如果所有单词都已使用，重置使用记录
    if (availableWords.length === 0) {
        gameState.usedWords = [];
        availableWords = GAME_CONFIG.words;
    }
    
    // 随机选择一个单词
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    gameState.currentWord = availableWords[randomIndex];
    gameState.usedWords.push(gameState.currentWord.id);
    
    // 更新题目显示
    updateQuestion();
    
    // 生成选项
    generateOptions();
}

// 更新题目显示
function updateQuestion() {
    if (gameState.currentMode === 'word-to-image') {
        // 单词选图片模式：显示单词
        elements.questionWord.textContent = gameState.currentWord.word;
        elements.questionWord.classList.remove('hidden');
        elements.questionImage.classList.add('hidden');
    } else {
        // 图片选单词模式：显示图片
        elements.questionImage.textContent = gameState.currentWord.emoji;
        elements.questionImage.classList.remove('hidden');
        elements.questionWord.classList.add('hidden');
    }
}

// 生成选项
function generateOptions() {
    // 创建选项数组：1个正确选项，3个错误选项
    const options = [gameState.currentWord];
    
    // 随机选择3个错误选项
    const availableWrongWords = GAME_CONFIG.words.filter(
        word => word.id !== gameState.currentWord.id
    );
    
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * availableWrongWords.length);
        const wrongWord = availableWrongWords[randomIndex];
        
        // 检查是否已存在该选项
        if (!options.includes(wrongWord)) {
            options.push(wrongWord);
        }
    }
    
    // 打乱选项顺序
    options.sort(() => Math.random() - 0.5);
    
    // 创建选项元素
    elements.optionsGrid.innerHTML = '';
    options.forEach((option, index) => {
        const optionElement = createOptionElement(option, index);
        elements.optionsGrid.appendChild(optionElement);
    });
}

// 创建选项元素
function createOptionElement(option, index) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.dataset.optionId = index;
    optionDiv.dataset.wordId = option.id;
    
    if (gameState.currentMode === 'word-to-image') {
        // 单词选图片模式：选项显示图片
        optionDiv.innerHTML = `<div class="option-image">${option.emoji}</div>`;
    } else {
        // 图片选单词模式：选项显示单词
        optionDiv.innerHTML = `<div class="option-word">${option.word}</div>`;
    }
    
    // 添加点击事件
    optionDiv.addEventListener('click', () => {
        selectOption(optionDiv, option);
    });
    
    return optionDiv;
}

// 选择选项
function selectOption(optionElement, option) {
    // 如果已经选择了选项，不允许再次选择
    if (gameState.selectedOption) return;
    
    // 标记选择的选项
    gameState.selectedOption = { element: optionElement, word: option };
    
    // 检查是否正确
    const isCorrect = option.id === gameState.currentWord.id;
    
    // 更新游戏状态
    if (isCorrect) {
        gameState.score += GAME_CONFIG.correctScore;
        gameState.correctAnswers++;
        showFeedback(true, `🎉 正确！${gameState.currentWord.word} = ${gameState.currentWord.emoji}`);
        optionElement.classList.add('correct');
    } else {
        showFeedback(false, `❌ 错误！正确答案是：${gameState.currentWord.word} = ${gameState.currentWord.emoji}`);
        optionElement.classList.add('wrong');
        
        // 标记正确选项
        const correctOption = document.querySelector(`[data-word-id="${gameState.currentWord.id}"]`);
        correctOption.classList.add('correct');
    }
    
    // 禁用所有选项
    disableAllOptions();
    
    // 更新得分
    updateScore();
}

// 显示反馈
function showFeedback(isCorrect, message) {
    elements.feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
    elements.feedbackContent.textContent = message;
    elements.feedback.classList.remove('hidden');
}

// 重置反馈
function resetFeedback() {
    elements.feedback.classList.add('hidden');
    elements.feedback.className = 'feedback hidden';
}

// 禁用所有选项
function disableAllOptions() {
    document.querySelectorAll('.option').forEach(option => {
        option.classList.add('disabled');
    });
}

// 重置选项
function resetOptions() {
    elements.optionsGrid.innerHTML = '';
    gameState.selectedOption = null;
}

// 下一题
function nextQuestion() {
    // 增加题目计数
    gameState.currentQuestion++;
    
    // 更新题目计数显示
    updateQuestionCount();
    
    // 生成新题目
    generateQuestion();
}

// 更新得分
function updateScore() {
    elements.score.textContent = gameState.score;
}

// 更新题目计数
function updateQuestionCount() {
    elements.questionCount.textContent = `${gameState.currentQuestion}/${GAME_CONFIG.totalQuestions}`;
}

// 播放当前单词发音
function playCurrentSound() {
    if (!gameState.currentWord) return;
    playSound(gameState.currentWord.audio);
}

// 播放音效
function playSound(text) {
    if (!gameState.soundEnabled) return;
    
    try {
        // 使用Web Speech API
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8; // 慢速发音，适合孩子
        utterance.pitch = 1.2; // 较高音调，更友好
        speechSynthesis.speak(utterance);
    } catch (error) {
        console.log('无法播放语音:', error);
    }
}

// 结束游戏
function endGame() {
    gameState.isPlaying = false;
    
    // 计算正确率
    const accuracy = Math.round((gameState.correctAnswers / GAME_CONFIG.totalQuestions) * 100);
    
    // 显示游戏结束界面
    elements.finalScore.textContent = gameState.score;
    elements.accuracy.textContent = `${accuracy}%`;
    elements.totalQuestions.textContent = GAME_CONFIG.totalQuestions;
    elements.gameOver.classList.remove('hidden');
    
    // 更新控制按钮
    elements.startBtn.classList.remove('hidden');
    elements.nextBtn.classList.add('hidden');
}

// 重新开始游戏
function restartGame() {
    elements.gameOver.classList.add('hidden');
    startGame();
}

// 再玩一次
function playAgain() {
    elements.gameOver.classList.add('hidden');
    startGame();
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', initGame);

// 添加触摸支持（防止手机上的300ms延迟）
if ('touchAction' in document.documentElement.style) {
    document.documentElement.style.touchAction = 'manipulation';
}