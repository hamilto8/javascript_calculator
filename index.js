/**
 * JavaScript Calculator - Core Logic & Mathematical Expression Parser
 * Author: Michael Hamilton
 */

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const display = document.querySelector("#display");
    const expressionDisplay = document.querySelector("#expression-display");
    const memoryIndicator = document.querySelector("#memory-indicator");
    const themeToggle = document.querySelector("#theme-toggle");
    const messageBoard = document.querySelector(".message");
    const buttonsGrid = document.querySelector(".buttons-grid");
    const specialBtn = document.querySelector(".btn-special");

    // Calculator State
    let currentInput = "0";
    let expressionTokens = [];
    let memoryValue = 0;
    let isEvaluated = false;
    let isVipMode = false;
    let messageTimeout = null;

    // Initialize UI
    updateUI();

    // Helper: Show status message with auto-fadeout
    function showMessage(text, duration = 4000) {
        if (messageTimeout) clearTimeout(messageTimeout);
        messageBoard.textContent = text;
        messageBoard.style.opacity = "1";
        
        if (duration > 0) {
            messageTimeout = setTimeout(() => {
                messageBoard.style.opacity = "0";
            }, duration);
        }
    }

    // Helper: Format number output to prevent floating point issues and display overflow
    function roundResult(num) {
        if (isNaN(num)) return "Error";
        if (!isFinite(num)) return "Error";
        
        // Precision format using 12 significant digits, then parse back to strip trailing zeros
        let str = num.toPrecision(12);
        let val = parseFloat(str);
        
        // Convert to scientific notation if number is extremely large or tiny (but non-zero)
        if (Math.abs(val) > 1e12 || (Math.abs(val) < 1e-6 && val !== 0)) {
            return val.toExponential(6);
        }
        return val.toString();
    }

    // Helper: Check if token is an operator
    function isOperator(token) {
        return ["+", "-", "*", "/"].includes(token);
    }

    // Update the layout and displays
    function updateUI() {
        // Format operators nicely for display
        let formattedTokens = expressionTokens.map(token => {
            if (token === '*') return ' × ';
            if (token === '/') return ' ÷ ';
            if (token === '+') return ' + ';
            if (token === '-') return ' - ';
            return token;
        });

        expressionDisplay.textContent = formattedTokens.join("");
        
        // Display current typed buffer or default to 0
        display.textContent = currentInput === "" ? "0" : currentInput;

        // Show memory indicator if memory has value
        memoryIndicator.style.visibility = memoryValue !== 0 ? "visible" : "hidden";
    }

    // ==========================================
    // MATHEMATICAL EXPRESSION PARSER (PEMDAS)
    // ==========================================
    function evaluateExpression(tokens) {
        if (tokens.length === 0) return "0";
        
        let cleanTokens = [...tokens];
        
        // If expression ends with an operator, pop it off (forgiving evaluation)
        if (isOperator(cleanTokens[cleanTokens.length - 1])) {
            cleanTokens.pop();
        }
        
        if (cleanTokens.length === 0) return "0";
        if (cleanTokens.length === 1) return cleanTokens[0];
        
        // Pass 1: Multiplication and Division (M/D)
        for (let i = 0; i < cleanTokens.length; i++) {
            const token = cleanTokens[i];
            if (token === "*" || token === "/") {
                if (i === 0 || i === cleanTokens.length - 1) {
                    return "SyntaxError";
                }
                const num1 = parseFloat(cleanTokens[i - 1]);
                const num2 = parseFloat(cleanTokens[i + 1]);
                
                if (isNaN(num1) || isNaN(num2)) {
                    return "SyntaxError";
                }
                
                if (token === "/") {
                    if (num2 === 0) {
                        return "DivisionByZero";
                    }
                }
                
                const result = token === "*" ? num1 * num2 : num1 / num2;
                cleanTokens.splice(i - 1, 3, result.toString());
                i--; // Step back to compensate for spliced array size change
            }
        }
        
        // Pass 2: Addition and Subtraction (A/S)
        let result = parseFloat(cleanTokens[0]);
        if (isNaN(result)) return "SyntaxError";
        
        for (let i = 1; i < cleanTokens.length; i += 2) {
            const op = cleanTokens[i];
            const nextValStr = cleanTokens[i + 1];
            if (!nextValStr) return "SyntaxError";
            
            const nextVal = parseFloat(nextValStr);
            if (isNaN(nextVal)) return "SyntaxError";
            
            if (op === "+") {
                result += nextVal;
            } else if (op === "-") {
                result -= nextVal;
            } else {
                return "SyntaxError";
            }
        }
        
        return roundResult(result);
    }

    // ==========================================
    // ACTION AND CALCULATION HANDLERS
    // ==========================================
    function handleDigitOrOperatorInput(val) {
        const isDigit = !isNaN(val) || val === '.';
        
        if (isDigit) {
            if (isEvaluated) {
                // Clicking a digit after evaluating starts a fresh calculation
                currentInput = "";
                expressionTokens = [];
                isEvaluated = false;
            }
            
            if (val === '.') {
                if (currentInput === "") {
                    currentInput = "0.";
                } else if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
            } else {
                // Digit 0-9
                if (currentInput === "0") {
                    currentInput = val; // replace starting zero
                } else {
                    // Prevent overflow of display screen
                    if (currentInput.replace('.', '').replace('-', '').length < 15) {
                        currentInput += val;
                    } else {
                        showMessage("Maximum digit limit reached.");
                    }
                }
            }
        } else {
            // Operator input (+, -, *, /)
            if (isEvaluated) {
                // Chain operator onto previous calculation result
                expressionTokens = [currentInput];
                isEvaluated = false;
            }
            
            // Push active input buffer to tokens
            if (currentInput !== "") {
                let numStr = currentInput;
                if (numStr.endsWith('.')) {
                    numStr = numStr.slice(0, -1);
                }
                expressionTokens.push(numStr);
                currentInput = "";
            }
            
            if (expressionTokens.length > 0) {
                const lastToken = expressionTokens[expressionTokens.length - 1];
                if (isOperator(lastToken)) {
                    // Overwrite consecutive operator entry
                    expressionTokens[expressionTokens.length - 1] = val;
                } else {
                    expressionTokens.push(val);
                }
            } else {
                // Handle starting operator (e.g. initial - or +)
                expressionTokens.push("0", val);
            }
        }
        updateUI();
    }

    function handleActionInput(action) {
        switch (action) {
            case 'clear':
                currentInput = "0";
                expressionTokens = [];
                isEvaluated = false;
                showMessage("Cleared.");
                updateUI();
                break;
                
            case 'backspace':
                if (isEvaluated) {
                    currentInput = "0";
                    expressionTokens = [];
                    isEvaluated = false;
                    updateUI();
                } else if (currentInput !== "" && currentInput !== "0") {
                    currentInput = currentInput.slice(0, -1);
                    if (currentInput === "" || currentInput === "-") {
                        currentInput = "0";
                    }
                    updateUI();
                } else if (currentInput === "0" && expressionTokens.length > 0) {
                    // Pop operator, and load previous operand back to buffer
                    expressionTokens.pop(); // remove operator
                    if (expressionTokens.length > 0) {
                        currentInput = expressionTokens.pop(); // pull number
                    } else {
                        currentInput = "0";
                    }
                    updateUI();
                }
                break;
                
            case 'equals':
                handleEquals();
                break;
                
            case 'sqrt':
                handleSqrt();
                break;
                
            case 'percent':
                handlePercent();
                break;
                
            case 'mc':
                memoryValue = 0;
                showMessage("Memory Cleared. 🧠");
                updateUI();
                break;
                
            case 'm+':
                handleMemoryAdd();
                break;
                
            case 'm-':
                handleMemoryRemove();
                break;
                
            case 'mr':
                handleMemoryRecall();
                break;
        }
    }

    function handleEquals() {
        if (isEvaluated) return;

        let numStr = currentInput;
        if (numStr !== "") {
            if (numStr.endsWith('.')) {
                numStr = numStr.slice(0, -1);
            }
            expressionTokens.push(numStr);
        }

        if (expressionTokens.length === 0) return;

        // Strip trailing operator for calculation
        let lastToken = expressionTokens[expressionTokens.length - 1];
        if (isOperator(lastToken)) {
            expressionTokens.pop();
        }

        if (expressionTokens.length === 0) {
            currentInput = "0";
            updateUI();
            return;
        }

        // Format and show expression history
        let formattedHistory = expressionTokens.map(token => {
            if (token === '*') return ' × ';
            if (token === '/') return ' ÷ ';
            if (token === '+') return ' + ';
            if (token === '-') return ' - ';
            return token;
        }).join("") + " =";

        const result = evaluateExpression(expressionTokens);

        if (result === "DivisionByZero") {
            showMessage("Sir! Division by zero is most impolite. 🧐");
            currentInput = "0";
            expressionTokens = [];
            expressionDisplay.textContent = "";
            display.textContent = "Error";
        } else if (result === "SyntaxError" || result === "Error") {
            showMessage("Incorrect Input. Reconsider Your Mathematical Manners, Sir.");
            currentInput = "0";
            expressionTokens = [];
            expressionDisplay.textContent = "";
            display.textContent = "Error";
        } else {
            currentInput = result;
            expressionDisplay.textContent = formattedHistory;
            display.textContent = result;
            isEvaluated = true;
            expressionTokens = []; // reset tokens array
        }
    }

    function handleSqrt() {
        let val = parseFloat(display.textContent);
        if (isNaN(val)) return;
        
        if (val < 0) {
            showMessage("Cannot calculate square root of a negative number. 🤨");
            return;
        }
        
        let result = Math.sqrt(val);
        currentInput = roundResult(result);
        isEvaluated = false;
        expressionTokens = [];
        expressionDisplay.textContent = `√(${roundResult(val)}) =`;
        updateUI();
    }

    function handlePercent() {
        let val = parseFloat(display.textContent);
        if (isNaN(val)) return;
        
        let result = val / 100;
        currentInput = roundResult(result);
        isEvaluated = false;
        expressionTokens = [];
        expressionDisplay.textContent = `${roundResult(val)}% =`;
        updateUI();
    }

    function handleMemoryAdd() {
        let val = parseFloat(display.textContent);
        if (!isNaN(val)) {
            memoryValue += val;
            showMessage(`Added to Memory: +${roundResult(val)} 🧠`);
            updateUI();
        }
    }

    function handleMemoryRemove() {
        let val = parseFloat(display.textContent);
        if (!isNaN(val)) {
            memoryValue -= val;
            showMessage(`Subtracted from Memory: -${roundResult(val)} 🧠`);
            updateUI();
        }
    }

    function handleMemoryRecall() {
        if (memoryValue === 0) {
            showMessage("Memory is empty. Double click this button to toggle VIP Mode. Dress Nicely. 👔");
        } else {
            showMessage(`Recalled Memory: ${roundResult(memoryValue)} 🧠`);
        }
        currentInput = roundResult(memoryValue);
        isEvaluated = false;
        updateUI();
    }

    // Toggle Light and Dark Themes
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("calculator-theme", newTheme);
        showMessage(`Theme: ${newTheme.toUpperCase()}`);
    }

    // Toggle VIP Easter Egg theme and animation
    function toggleVipMode() {
        isVipMode = !isVipMode;
        if (isVipMode) {
            document.documentElement.setAttribute("data-vip", "true");
            showMessage("VIP Mode Activated! Welcome, distinguished guest. Enjoy the Golden Glow. 🌟", 6000);
            
            // Neon Code Matrix matrix transition animation on display
            const originalVal = display.textContent;
            let ticks = 0;
            const matrixAnim = setInterval(() => {
                display.textContent = Math.random().toString().slice(2, 10);
                ticks++;
                if (ticks > 12) {
                    clearInterval(matrixAnim);
                    display.textContent = "V I P";
                    setTimeout(() => {
                        display.textContent = originalVal;
                    }, 800);
                }
            }, 50);
        } else {
            document.documentElement.removeAttribute("data-vip");
            showMessage("VIP Mode Deactivated. Standard manners restored, sir. 🎩");
            updateUI();
        }
    }

    // ==========================================
    // LISTENERS & EVENT DELEGATION
    // ==========================================
    
    // Grid interactions event delegation
    buttonsGrid.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn");
        if (!btn) return;

        const val = btn.dataset.val;
        const action = btn.dataset.action;

        if (val !== undefined) {
            handleDigitOrOperatorInput(val);
        } else if (action !== undefined) {
            handleActionInput(action);
        }
    });

    // Theme toggle click
    themeToggle.addEventListener("click", toggleTheme);

    // VIP Mode triggers on double click of special button
    specialBtn.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        toggleVipMode();
    });

    // Keyboard support: find mapped button for a key
    function getButtonForKey(key) {
        if (key >= '0' && key <= '9') {
            return document.querySelector(`button[data-val="${key}"]`);
        }
        if (key === '.') {
            return document.querySelector('button[data-val="."]');
        }
        if (key === '+' || key === '-' || key === '*' || key === '/') {
            return document.querySelector(`button[data-val="${key}"]`);
        }
        if (key === 'Enter' || key === '=') {
            return document.querySelector('button[data-action="equals"]');
        }
        if (key === 'Escape' || key === 'c' || key === 'C' || key === 'Delete') {
            return document.querySelector('button[data-action="clear"]');
        }
        if (key === 'Backspace') {
            return document.querySelector('button[data-action="backspace"]');
        }
        if (key === '%') {
            return document.querySelector('button[data-action="percent"]');
        }
        return null;
    }

    // Window keyboard keydown
    window.addEventListener("keydown", (e) => {
        const btn = getButtonForKey(e.key);
        if (btn) {
            e.preventDefault();
            btn.classList.add("keyboard-active");
            btn.click();
        }
    });

    // Window keyboard keyup
    window.addEventListener("keyup", (e) => {
        const btn = getButtonForKey(e.key);
        if (btn) {
            btn.classList.remove("keyboard-active");
        }
    });
});