
window.onload = function () {
	var hamburger = document.querySelector(".hamburger");
	
	hamburger.addEventListener("click", function() {
		hamburger.classList.toggle("is-active");

		var menu = document.querySelector(".menu");
		var conteudo = document.querySelector(".conteudo");
		var btnMenu = document.querySelector(".btn-menu");

		menu.classList.toggle("ativo");
		btnMenu.classList.toggle("ativo-btn");
	});
}
