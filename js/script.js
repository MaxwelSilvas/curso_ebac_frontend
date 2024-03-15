document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    const winnerMessage = document.getElementById('winner-message');
    const restartBtn = document.getElementById('restart-btn');
    let currentPlayer = 'X';
    let gameActive = true;

    function checkWinner() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                return cells[a].textContent;
            }
        }

        return null;
    }

    function handleCellClick(cell) {
        if (!gameActive || cell.textContent) return;

        cell.textContent = currentPlayer;
        const winner = checkWinner();
        if (winner) {
            winnerMessage.textContent = `${winner} venceu!`;
            winnerMessage.style.display = 'block';
            gameActive = false;
        } else if ([...cells].every(cell => cell.textContent)) {
            winnerMessage.textContent = 'Empate!';
            winnerMessage.style.display = 'block';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function restartGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        winnerMessage.style.display = 'none';
        gameActive = true;
        currentPlayer = 'X';
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => handleCellClick(cell));
    });

    restartBtn.addEventListener('click', restartGame);
});
