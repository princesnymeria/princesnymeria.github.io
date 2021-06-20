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
	const newSelectedGame = ev.target.getAttribute('game-id');
	modifyDOM2SelectedGame( newSelectedGame );
}

function modifyDOM2SelectedGame(ind) {
	setupSelectedGame(ind);
	modifyAppTitle();
	loadGameControls();
}

function focusSelectedmButton (desFosusedQuery, focusClass, newFosussedElements) {
	document.querySelectorAll(desFosusedQuery).forEach(el => {
		el.classList.remove(focusClass);
	});
	newFosussedElements.forEach(el => {
		el.classList.add(focusClass);
	});
}

function setupSelectedGame(gameIndex) {
	selectedGame = games[gameIndex];
	selectedGame.setup();
}

function modifyAppTitle() {
	const newTitle = selectedGame.info.title;
	document.getElementById('gameTitle').innerText = newTitle;
}

function loadGameControls() {
	const cont = document.getElementById('gameControllers');
	selectedGame.inputs.forEach(input => {
		const b = document.createElement('BUTTON');
		b.innerText = input.label;
		b.addEventListener('click', input.callback);
		cont.appendChild(b);
	});
	selectedGame.outputs.forEach(output => {
		const p = document.createElement('P');
		const l = document.createElement('SPAN');
		const t = document.createElement('SPAN');
		l.innerText = output.label + ': ';
		p.appendChild(l);
		p.appendChild(t);
		cont.appendChild(p);
	});
}

