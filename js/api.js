import { mockLocal } from './mock.js';
export const URL_API = 'https://SEU-WORKER.workers.dev';
export const MOCK = new URLSearchParams(location.search).has('mock') || !window.Telegram?.WebApp?.initData;
export async function api(acao, dados = {}, final = false) { if (MOCK) return mockLocal(acao, dados); const r = await fetch(URL_API, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ initData: Telegram.WebApp.initData, acao, dados }), keepalive: final }); const j = await r.json(); if (!r.ok) throw Error(j.erro || 'Erro na API'); return j; }
