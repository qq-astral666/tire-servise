document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Заявка отправлена! Мы скоро свяжемся с вами.');
    this.reset(); // Очистить форму
});