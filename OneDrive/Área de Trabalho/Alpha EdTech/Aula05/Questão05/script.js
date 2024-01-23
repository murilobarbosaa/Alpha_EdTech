document.addEventListener('DOMContentLoaded', function () {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    function updateInputs(value) {
        input1.value = value;
        input2.value = value;
    }

    input1.addEventListener('input', function () {
        updateInputs(input1.value);
    });

    input1.addEventListener('focus', function () {
        input1.style.borderColor = '#004080';
        input2.style.borderColor = '#004080';
    });

    input1.addEventListener('blur', function () {
        input1.style.borderColor = '#ccc';
        input2.style.borderColor = '#ccc';
    });

    input1.addEventListener('mouseover', function () {
        input1.style.backgroundColor = '#e6f7ff';
        input2.style.backgroundColor = '#e6f7ff';
    });

    input1.addEventListener('mouseout', function () {
        input1.style.backgroundColor = '';
        input2.style.backgroundColor = '';
    });

    input2.addEventListener('input', function () {
        updateInputs(input2.value);
    });

    input2.addEventListener('focus', function () {
        input1.style.borderColor = '#004080';
        input2.style.borderColor = '#004080';
    });

    input2.addEventListener('blur', function () {
        input1.style.borderColor = '#ccc';
        input2.style.borderColor = '#ccc';
    });

    input2.addEventListener('mouseover', function () {
        input1.style.backgroundColor = '#e6f7ff';
        input2.style.backgroundColor = '#e6f7ff';
    });

    input2.addEventListener('mouseout', function () {
        input1.style.backgroundColor = '';
        input2.style.backgroundColor = '';
    });
});
