function createGameSelectorButtons() {
	const cont = document.getElementById('gameSelector');
	var index = 0;
	games.forEach(game => {
		if (game.info.visible || MODE_DEBUG) {
			const btn = document.createElement('BUTTON');
			btn.innerText = game.info.shortName;
			btn.setAttribute('game-id', index);
			btn.addEventListener('click', changeselectedGame);
			cont.appendChild(btn);
			if (index == selectedGame) btn.classList.add('selected');
			index++
		}
	});
}

function changeselectedGame(ev) {
	focusSelectedmButton('#gameSelector>button.active', 'active', [ev.target]);
	document.getElementById('gameControllers').innerHTML = "";
	modifyDOM2SelectedGame( ev.target.getAttribute('game-id') );
	createStepInputs(0);
}

function modifyDOM2SelectedGame(ind) {
	setupselectedGame(ind);
	modifyAppTitle(ind);
}

function focusSelectedmButton (desFosusedQuery, focusClass, newFosussedElements) {
	document.querySelectorAll(desFosusedQuery).forEach(el => {
		el.classList.remove(focusClass);
	});
	newFosussedElements.forEach(el => {
		el.classList.add(focusClass);
	});
}

function setupselectedGame(gameIndex) {
	selectedGame = games[gameIndex];
	selectedGame.setup();
}

function modifyAppTitle() {
	const newTitle = selectedGame.info.title;
	document.getElementById('gameTitle').innerText = newTitle;
}

function createStepInputs(step) {
	const cont = document.getElementById('gameControllers');
	cont.innerHTML = '';
	selectedGame.inputs.forEach(inputInfo => {
		if (inputInfo.minStep <= step) {
			const input = document.createElement('INPUT');
			input.type = inputInfo.type;
			input.onchange = inputInfo.callback;
			cont.appendChild(input);
		}
	});
}
