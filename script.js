document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-wrapper').style.transform = 'translateX(-100%)';
    document.getElementById('login-wrapper').style.clipPath = 'inset(0 50% 0 0)';
    document.getElementById('signup-wrapper').style.transform = 'translateX(0)';
    document.getElementById('signup-wrapper').style.clipPath = 'inset(0 0 0 0)';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('login-wrapper').style.transform = 'translateX(0)';
    document.getElementById('login-wrapper').style.clipPath = 'inset(0 0 0 0)';
    document.getElementById('signup-wrapper').style.transform = 'translateX(100%)';
    document.getElementById('signup-wrapper').style.clipPath = 'inset(0 0 0 50%)';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showVerification();
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showVerification();
});

function showVerification() {
    document.getElementById('login-wrapper').style.display = 'none';
    document.getElementById('signup-wrapper').style.display = 'none';
    document.getElementById('verification').style.display = 'flex';
}

document.querySelectorAll('.verification-inputs input').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        } else if (input.value.length === 1 && index === inputs.length - 1) {
            // Automatically submit the form if the last input is filled
            document.getElementById('verification-form').submit();
        }
    });
});
