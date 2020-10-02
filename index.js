let ul = document.querySelector('#menuList');
ul.style.maxHeight = '0px';

document.querySelector('#menu').addEventListener('click', (e) => {
	e.preventDefault();
	if (ul.style.maxHeight == '0px') {
		ul.style.maxHeight = '400px';
	} else {
		ul.style.maxHeight = '0px';
	}
});
