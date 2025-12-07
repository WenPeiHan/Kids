// 游戏常量
const CANVAS_SIZE = 400;
const GRID_SIZE = 20;
const CELL_COUNT = CANVAS_SIZE / GRID_SIZE;
const INITIAL_SPEED = 150;

// 游戏状态
let canvas, ctx;
let snake = [];
let food = { x: 0, y: 0 };
let direction = { x: 1, y: 0 };
let nextDirection = { x: 1, y: 0 };
let score = 0;
let highScore = 0;
let gameLoop = null;
let gameSpeed = INITIAL_SPEED;
let isGameRunning = false;
let isPaused = false;

// 初始化游戏
function initGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    // 加载最高分
    highScore = parseInt(localStorage.getItem('highScore')) || 0;
    document.getElementById('high-score').textContent = highScore;
    
    // 初始化蛇
    resetSnake();
    // 生成食物
    spawnFood();
    // 绘制初始状态
    draw();
    // 添加事件监听器
    setupEventListeners();
}

// 重置蛇
function resetSnake() {
    snake = [
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 }
    ];
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0;
    gameSpeed = INITIAL_SPEED;
    isGameRunning = false;
    isPaused = false;
    document.getElementById('score').textContent = score;
    document.getElementById('gameOver').classList.add('hidden');
}

// 生成食物
function spawnFood() {
    food = {
        x: Math.floor(Math.random() * CELL_COUNT),
        y: Math.floor(Math.random() * CELL_COUNT)
    };
    
    // 确保食物不在蛇身上
    if (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
        spawnFood();
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 键盘控制
    document.addEventListener('keydown', handleKeyPress);
    
    // 按钮控制
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('pauseBtn').addEventListener('click', togglePause);
    document.getElementById('restartBtn').addEventListener('click', restartGame);
}

// 处理键盘事件
function handleKeyPress(e) {
    const key = e.key;
    
    // 防止反向移动
    if (key === 'ArrowUp' || key === 'w' || key === 'W') {
        if (direction.y === 0) {
            nextDirection = { x: 0, y: -1 };
        }
    } else if (key === 'ArrowDown' || key === 's' || key === 'S') {
        if (direction.y === 0) {
            nextDirection = { x: 0, y: 1 };
        }
    } else if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
        if (direction.x === 0) {
            nextDirection = { x: -1, y: 0 };
        }
    } else if (key === 'ArrowRight' || key === 'd' || key === 'D') {
        if (direction.x === 0) {
            nextDirection = { x: 1, y: 0 };
        }
    }
    
    // 空格暂停
    if (key === ' ' && isGameRunning) {
        e.preventDefault();
        togglePause();
    }
}

// 开始游戏
function startGame() {
    if (!isGameRunning) {
        isGameRunning = true;
        isPaused = false;
        gameLoop = setInterval(update, gameSpeed);
    }
}

// 暂停/继续游戏
function togglePause() {
    if (isGameRunning) {
        isPaused = !isPaused;
        if (isPaused) {
            clearInterval(gameLoop);
        } else {
            gameLoop = setInterval(update, gameSpeed);
        }
    }
}

// 重新开始游戏
function restartGame() {
    clearInterval(gameLoop);
    resetSnake();
    spawnFood();
    draw();
    startGame();
}

// 更新游戏状态
function update() {
    if (isPaused) return;
    
    // 更新方向
    direction = nextDirection;
    
    // 移动蛇头
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    
    // 检查碰撞
    if (checkCollision(head)) {
        gameOver();
        return;
    }
    
    // 将新头添加到蛇的前面
    snake.unshift(head);
    
    // 检查是否吃到食物
    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById('score').textContent = score;
        
        // 更新最高分
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            document.getElementById('high-score').textContent = highScore;
        }
        
        // 生成新食物
        spawnFood();
        
        // 提高游戏速度
        if (gameSpeed > 50) {
            gameSpeed -= 5;
            clearInterval(gameLoop);
            gameLoop = setInterval(update, gameSpeed);
        }
    } else {
        // 移除蛇尾
        snake.pop();
    }
    
    // 绘制游戏
    draw();
}

// 检查碰撞
function checkCollision(head) {
    // 检查墙壁碰撞
    if (head.x < 0 || head.x >= CELL_COUNT || head.y < 0 || head.y >= CELL_COUNT) {
        return true;
    }
    
    // 检查自身碰撞
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    
    return false;
}

// 游戏结束
function gameOver() {
    isGameRunning = false;
    clearInterval(gameLoop);
    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOver').classList.remove('hidden');
}

// 绘制游戏
function draw() {
    // 清空画布
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制网格线（可选）
    drawGrid();
    
    // 绘制食物
    drawFood();
    
    // 绘制蛇
    drawSnake();
    
    // 如果暂停，显示暂停信息
    if (isPaused) {
        drawPauseMessage();
    }
}

// 绘制网格线
function drawGrid() {
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i <= CELL_COUNT; i++) {
        // 垂直线
        ctx.beginPath();
        ctx.moveTo(i * GRID_SIZE, 0);
        ctx.lineTo(i * GRID_SIZE, CANVAS_SIZE);
        ctx.stroke();
        
        // 水平线
        ctx.beginPath();
        ctx.moveTo(0, i * GRID_SIZE);
        ctx.lineTo(CANVAS_SIZE, i * GRID_SIZE);
        ctx.stroke();
    }
}

// 绘制食物
function drawFood() {
    ctx.fillStyle = '#f44336';
    ctx.beginPath();
    ctx.arc(
        food.x * GRID_SIZE + GRID_SIZE / 2,
        food.y * GRID_SIZE + GRID_SIZE / 2,
        GRID_SIZE / 2 - 2,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

// 绘制蛇
function drawSnake() {
    // 绘制蛇身
    for (let i = 0; i < snake.length; i++) {
        const segment = snake[i];
        
        if (i === 0) {
            // 蛇头
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            
            // 绘制蛇眼
            ctx.fillStyle = 'white';
            const eyeSize = 3;
            if (direction.x === 1) {
                // 向右
                ctx.fillRect(segment.x * GRID_SIZE + 12, segment.y * GRID_SIZE + 5, eyeSize, eyeSize);
                ctx.fillRect(segment.x * GRID_SIZE + 12, segment.y * GRID_SIZE + 12, eyeSize, eyeSize);
            } else if (direction.x === -1) {
                // 向左
                ctx.fillRect(segment.x * GRID_SIZE + 5, segment.y * GRID_SIZE + 5, eyeSize, eyeSize);
                ctx.fillRect(segment.x * GRID_SIZE + 5, segment.y * GRID_SIZE + 12, eyeSize, eyeSize);
            } else if (direction.y === 1) {
                // 向下
                ctx.fillRect(segment.x * GRID_SIZE + 5, segment.y * GRID_SIZE + 12, eyeSize, eyeSize);
                ctx.fillRect(segment.x * GRID_SIZE + 12, segment.y * GRID_SIZE + 12, eyeSize, eyeSize);
            } else if (direction.y === -1) {
                // 向上
                ctx.fillRect(segment.x * GRID_SIZE + 5, segment.y * GRID_SIZE + 5, eyeSize, eyeSize);
                ctx.fillRect(segment.x * GRID_SIZE + 12, segment.y * GRID_SIZE + 5, eyeSize, eyeSize);
            }
        } else {
            // 蛇身
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            
            // 添加渐变效果
            ctx.fillStyle = '#388E3C';
            ctx.fillRect(segment.x * GRID_SIZE + 2, segment.y * GRID_SIZE + 2, GRID_SIZE - 4, GRID_SIZE - 4);
        }
    }
}

// 绘制暂停信息
function drawPauseMessage() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('游戏暂停', canvas.width / 2, canvas.height / 2);
    
    ctx.font = '16px Arial';
    ctx.fillText('按空格键或点击继续按钮', canvas.width / 2, canvas.height / 2 + 30);
}

// 页面加载完成后初始化游戏
window.addEventListener('DOMContentLoaded', initGame);