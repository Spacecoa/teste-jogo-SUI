import { tg } from './tg.js';
import { Jogo } from './engine.js';
import { UI } from './ui.js';
import { MOCK } from './api.js';
try { const user = tg.init(); if (user?.first_name) document.querySelector('#jogador').textContent = user.first_name; await Jogo.iniciar(); UI.montar(); if (MOCK) UI.toast('Modo local: progresso salvo neste aparelho'); } catch (e) { document.querySelector('#tela').innerHTML = `<article class="card"><h2>Não foi possível iniciar</h2><p class="muted">${e.message}</p></article>`; }
