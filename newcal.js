let operators = 2;

function addOperator() {
    operators++;
    
    const calculation = document.getElementById('calculation-area');
    const newRow = document.createElement('div');
    newRow.className = 'input-row';
    newRow.innerHTML = `
        <div class="operator-group">
            <select class="operator-select">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>
        </div>

        <div class="input-group">
            <span class="input-group-text">${operators}${getNumberSuffix(operators)} Number</span>
            <input type="number" class="form-control num-input">
        </div>
        
        <button type="button" class="remove-btn" onclick="removeOperator(this)">×</button>
    `;
    calculation.appendChild(newRow);
}

function removeOperator(button) {
    if (document.querySelectorAll('.input-row').length <= 1) {
        alert("You need at least one operator!");
        return;
    }
    
    const row = button.closest('.input-row');
    row.remove();
    
    const inputs = document.querySelectorAll('.input-group-text');
    inputs.forEach((input, index) => {
        const num = index + 1;
        input.textContent = `${num}${getNumberSuffix(num)} Number`;
    });
    
    operators--;
}

function getNumberSuffix(num) {
    if (num === 1) return 'st';
    if (num === 2) return 'nd';
    if (num === 3) return 'rd';
    return 'th';
}

function calculate() {
    const calcContainer = document.querySelector('.display-5.text-primary');
        calcContainer.classList.add('highlight');
        setTimeout(() => {
            calcContainer.classList.remove('highlight');
        }, 1000);
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    

    const operators = document.querySelectorAll('.operator-select');
    const numbers = document.querySelectorAll('.num-input');
    
    let result = num1;
    

    
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i].value;
        const num = parseFloat(numbers[i].value) || 0;
        
        switch(operator) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                if (num === 0) {
                    alert("Cannot divide by zero!");
                    return;
                }
                result /= num;
                break;
            case '%':
                result %= num;
                break;
        }
    }
    



    document.getElementById('result').textContent = result;            
           
}
