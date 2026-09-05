import { novoJogador, processar, estado } from '../shared/logic.js';
const KEY = 'rpg_mock_v1';
export async function mockLocal(acao, dados = {}) { await new Promise(r => setTimeout(r, 60)); const agora = Date.now(); const atual = JSON.parse(localStorage.getItem(KEY) || 'null') || novoJogador(999, agora); const out = processar(atual, acao, dados, agora); if (out.erro) throw Error(out.erro); localStorage.setItem(KEY, JSON.stringify(out.j)); return estado(out.j, agora); }
