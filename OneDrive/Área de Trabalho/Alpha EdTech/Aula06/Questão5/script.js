function addQuestion() {
    const questionInput = document.getElementById('question');
    const option1Input = document.getElementById('option1');
    const option2Input = document.getElementById('option2');
    const option3Input = document.getElementById('option3');
    const correct1Checkbox = document.getElementById('correct1');
    const correct2Checkbox = document.getElementById('correct2');
    const correct3Checkbox = document.getElementById('correct3');
    const errorMessage = document.getElementById('error-message');
    const quizDisplay = document.getElementById('quiz-display');

    if (!(correct1Checkbox.checked || correct2Checkbox.checked || correct3Checkbox.checked)) {
        errorMessage.textContent = 'Selecione uma opção correta!';
        return;
    }

    if ([correct1Checkbox, correct2Checkbox, correct3Checkbox].filter(checkbox => checkbox.checked).length !== 1) {
        errorMessage.textContent = 'Selecione apenas uma opção correta!';
        return;
    }

    errorMessage.textContent = '';

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question');

    const questionText = document.createElement('p');
    questionText.textContent = questionInput.value;
    questionContainer.appendChild(questionText);

    const selectElement = document.createElement('select');
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Escolha uma opção';
    selectElement.appendChild(defaultOption);

    const option1 = document.createElement('option');
    option1.textContent = option1Input.value;
    selectElement.appendChild(option1);

    const option2 = document.createElement('option');
    option2.textContent = option2Input.value;
    selectElement.appendChild(option2);

    const option3 = document.createElement('option');
    option3.textContent = option3Input.value;
    selectElement.appendChild(option3);

    questionContainer.appendChild(selectElement);

    if (correct1Checkbox.checked) {
        option1.value = 'correct';
    }
    if (correct2Checkbox.checked) {
        option2.value = 'correct';
    }
    if (correct3Checkbox.checked) {
        option3.value = 'correct';
    }

    selectElement.addEventListener('change', function () {
        questionContainer.classList.remove('correct', 'incorrect');

        if (selectElement.value === 'correct') {
            questionContainer.classList.add('correct');
        } else {
            questionContainer.classList.add('incorrect');
        }
    });

    quizDisplay.appendChild(questionContainer);

    questionInput.value = '';
    option1Input.value = '';
    option2Input.value = '';
    option3Input.value = '';
    correct1Checkbox.checked = false;
    correct2Checkbox.checked = false;
    correct3Checkbox.checked = false;
}
