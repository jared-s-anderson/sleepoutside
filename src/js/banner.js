document.querySelector('.banner-dismiss').addEventListener('click', function() {
    this.closest('.banner').style.display = 'none';
});