var GO={"heroes4": "/go/heroes4-uk/"};
;
window.DW_THEME={logoFont:"Metal Mania",logoSize:150,blood:"#c1121f",bone:"#f4f1e8",logoFill:"#f4f1e8",rope:"#9b7a4a",pig:"#d9b8bb",signBg:"#b8f53d",signFont:"Yeseva One"};
;
// Deadware design prototypes (batch 4) — shared content and components. Local only, not published.
const IMG = '/img/';
const T = window.DW_THEME || {};

function logoSVG() {
  const fill = T.logoFill || '#ece6d6', blood = T.blood || '#b0001a', bone = T.bone || '#ece6d6';
  const drips = [[150, 46, 6], [205, 22, 4], [262, 70, 7], [330, 34, 5], [402, 58, 6], [470, 26, 4], [540, 80, 7], [610, 40, 5], [668, 64, 6], [718, 28, 4]];
  const dripPaths = drips.map(([x, len, w], i) =>
    `<path class="dw-drip" style="animation-delay:${(i * 0.7) % 5}s" d="M${x - w} 132 L${x + w} 132 L${x + w} ${132 + len - w} Q${x + w} ${132 + len} ${x} ${132 + len} Q${x - w} ${132 + len} ${x - w} ${132 + len - w} Z" fill="${blood}"/>` +
    (i % 3 === 0 ? `<circle class="dw-drop" style="animation-delay:${i * 0.9}s" cx="${x}" cy="${132 + len + 8}" r="${w * 0.7}" fill="${blood}"/>` : '')
  ).join('');
  return `<svg class="dw-logo" viewBox="0 0 760 370" role="img" aria-label="Deadware">
  <defs><linearGradient id="dwfill" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${fill}"/><stop offset=".62" stop-color="${fill}"/><stop offset=".8" stop-color="${blood}"/></linearGradient></defs>
  <g class="dw-swing">
    <path d="M70 128 C71 160 76 190 82 226" stroke="${T.rope || '#8a6b45'}" stroke-width="3" fill="none"/>
    <ellipse cx="72" cy="236" rx="11" ry="5" stroke="${T.rope || '#8a6b45'}" stroke-width="3" fill="none"/>
    <g stroke="${bone}" stroke-width="3.4" stroke-linecap="round" fill="none">
      <g transform="rotate(14 70 218)">
        <circle cx="70" cy="216" r="13" fill="${bone}" stroke="none"/>
        <rect x="63" y="225" width="14" height="7" rx="2" fill="${bone}" stroke="none"/>
        <circle cx="65" cy="215" r="3.4" fill="#000" stroke="none"/><circle cx="75" cy="215" r="3.4" fill="#000" stroke="none"/>
      </g>
      <path d="M70 240 L70 290"/>
      <path d="M60 248 Q70 244 80 248 M59 256 Q70 252 81 256 M61 264 Q70 260 79 264"/>
      <path d="M58 242 L52 270 L50 296 M82 242 L88 270 L90 296"/>
      <path d="M60 290 Q70 284 80 290 L76 298 Q70 294 64 298 Z" fill="${bone}"/>
      <path d="M65 298 L63 330 L60 360 M75 298 L77 330 L80 360"/>
    </g>
  </g>
  <text x="30" y="150" textLength="700" lengthAdjust="spacingAndGlyphs" font-family="${T.logoFont || 'serif'}" font-size="${T.logoSize || 150}" font-weight="${T.logoWeight || 400}" fill="url(#dwfill)">DEADWARE</text>
  ${dripPaths}
</svg>`;
}

function pigSVG(sign) {
  const pink = T.pig || '#b98a92', rope = T.rope || '#8a6b45';
  return `<svg class="dw-pig" viewBox="0 0 240 330" role="img" aria-label="${sign}">
  <g class="dw-swing-pig">
    <path d="M130 0 L130 104" stroke="${rope}" stroke-width="3"/>
    <rect x="122" y="100" width="16" height="9" rx="3" fill="${rope}"/>
    <g transform="rotate(180 110 170)">
      <rect x="66" y="205" width="16" height="30" rx="6" fill="${pink}"/><rect x="88" y="208" width="16" height="27" rx="6" fill="${pink}"/>
      <rect x="120" y="208" width="16" height="27" rx="6" fill="${pink}"/><rect x="142" y="205" width="16" height="30" rx="6" fill="${pink}"/>
      <ellipse cx="110" cy="168" rx="74" ry="52" fill="${pink}"/>
      <path d="M150 128 L168 100 L174 134 Z" fill="${pink}"/>
      <ellipse cx="186" cy="170" rx="15" ry="13" fill="${pink}" stroke="#00000033" stroke-width="2"/>
      <circle cx="182" cy="170" r="2.5" fill="#00000066"/><circle cx="190" cy="170" r="2.5" fill="#00000066"/>
      <path d="M152 146 l10 10 m0 -10 l-10 10" stroke="#000" stroke-width="3" stroke-linecap="round"/>
      <rect x="92" y="117" width="34" height="6" rx="3" fill="#00000088"/>
      <path d="M36 160 q-14 -4 -8 -14 q8 -6 10 6" stroke="${pink}" stroke-width="4" fill="none"/>
    </g>
    <path d="M30 172 L30 236" stroke="${rope}" stroke-width="2"/>
    <g transform="rotate(-4 30 236)">
      <rect x="-55" y="236" width="200" height="54" rx="6" fill="${T.signBg || '#d8cdb4'}"/>
      <text x="45" y="270" text-anchor="middle" font-family="${T.signFont || 'serif'}" font-size="21" font-weight="700" fill="#1a1a1a">${sign}</text>
    </g>
  </g>
</svg>`;
}

const ANSWERS = [
  ['hp2-level1.jpg', 'Ні, на Intel-маку не піде. Купи собі нормальний Мак.'],
  ['hp2-street.jpg', 'Так, безкоштовно. Ні, донатити не треба.'],
  ['heroes4-map.jpg', 'Англійська версія Героїв буде. Коли — спитай агентів, вони не сплять.'],
  ['rotk-gandalf-breach-uk.jpg', 'Емулятор? Ми не прикидаємося Xboxом, ми переписуємо гру під Мак.'],
  ['hp2-inventory-uk.jpg', 'Скільки йде без світла? Довше, ніж твій павербанк витримає твоє скиглення.'],
];

function ball() {
  return `<div class="ball-wrap">
    <div class="ball"><img class="ball-media" alt="" src="${IMG + ANSWERS[0][0]}"><div class="ball-fog"></div><div class="ball-shine"></div></div>
    <div class="ball-base"></div>
    <p class="ball-cap" aria-live="polite">${ANSWERS[0][1]}</p>
    <button class="btn btn-ghost ball-ask" type="button">Спитати кулю</button>
    <p class="proto-note">Прототип: тут крутитимуться випадкові відеовідповіді власника; зараз — кадри з ігор.</p>
  </div>`;
}

function slider(img, before, after) {
  return `<figure class="cmp" data-img="${IMG + img}">
    <img class="cmp-after" src="${IMG + img}" alt="${after}">
    <canvas class="cmp-before" aria-label="${before}"></canvas>
    <div class="cmp-line"></div>
    <span class="cmp-tag cmp-tag-l">${before}</span><span class="cmp-tag cmp-tag-r">${after}</span>
    <input class="cmp-range" type="range" min="0" max="100" value="50" aria-label="Порівняння до і після">
  </figure>
  <p class="proto-note">Прототип: «до» змодельоване (4:3, низька роздільність); на сайті будуть справжні кадри оригіналу.</p>`;
}

const GAMES = [
  { id: 'hp2', title: 'Гаррі Поттер і Таємна кімната', img: 'hp2-level1.jpg', badge: 'Грається', sub: 'Xbox 2002 → Мак. 60 fps, широкий екран, HD.', note: 'Код ще не відкритий' },
  { id: 'heroes4', title: 'Герої Меча і Магії IV', img: 'heroes4-map.jpg', badge: 'Грається', sub: 'Обидва доповнення. Українська — вже, англійська — скоро.', note: 'UA ✓ · EN скоро' },
  { id: 'rotk', title: 'Володар перснів: Повернення короля', img: null, badge: 'Воскрешаємо', sub: 'Рівні вже граються в тестах. Текстури поки веселкові.', note: 'В розробці', dev: true },
];
const QUEUE = ['NFS Underground 2', 'BFME', 'Matrix: Path of Neo', 'Prisoner of Azkaban', '007 Nightfire', 'The Warriors', 'Constantine', 'KOTOR', 'Manhunt', 'Max Payne 2'];

const FAQ_HOME = [
  ['Це взагалі законно?', 'Ми не роздаємо ігри. Ти береш свою копію, порт збирає з неї рідну програму для Мака. Якщо юристи Warner Bros усе ж прийдуть у плащах і темних окулярах — знімемо за добу, а свиня повисить ще трохи.'],
  ['Чому не просто емулятор?', 'Емулятор прикидається Xboxом і жере батарею. Ми переписуємо код гри під Apple Silicon: 60 кадрів, широкий екран, і макбук не здихає за годину без світла.'],
  ['Піде на Intel-маку?', 'Ні. Тільки M1 і новіші. Так, це боляче. Ні, ми не передумаємо.'],
  ['Можна задонатити?', 'Ні. Хочеш допомогти — розкажи другу або постав зірочку на GitHub. Нам приємно, тобі безкоштовно.'],
  ['Чому українською?', 'Бо ми свою мову не на смітнику знайшли. Англійська версія кожної гри теж буде.'],
  ['Коли наступна гра?', 'Коли агенти перестануть сратися з текстурами. Черга нижче, порядок — на совісті власника.'],
];
const FAQ_GAME = [
  ['Треба купувати гру?', 'Так, Complete Edition на GOG. Порт не містить файлів гри — він будує її з твого інсталятора.'],
  ['Скільки встановлюється?', 'Хвилин сорок, із них твоєї роботи — десять. Решту часу можна дивитися на свиню.'],
  ['А була ж версія для Мака в 2002-му?', 'Була, для PowerPC. На сучасних Маках вона мертва остаточно. Ця — живе.'],
];

function faq(items) {
  return items.map(([q, a]) => `<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join('');
}

function header(active) {
  return `<header class="top"><div class="wrap top-in">
    <a class="mini-logo" href="#home">dead<span>ware</span></a>
    <nav><a href="#home"${active === 'home' ? ' aria-current="page"' : ''}>Ігри</a><a href="#game"${active === 'game' ? ' aria-current="page"' : ''}>Герої IV</a><a href="#home">FAQ</a></nav>
    <span class="lang"><b>UK</b> / EN</span></div></header>`;
}

function footer() {
  return `<footer class="foot"><div class="wrap">
    <p>Логотипи й обкладинки належать їхнім власникам. Ми нічого не заробляємо й на права не претендуємо. Файлів ігор тут нема: кожен порт збирається з твоєї копії.</p>
    <p>Deadware — фанатський проєкт одного шкіряного мішка й зграї AI-агентів. © 2026</p></div></footer>`;
}

function homePage() {
  const cards = GAMES.map(g => `<a class="card${g.dev ? ' card-dev' : ''}" href="${g.id === 'heroes4' ? '#game' : '#home'}">
      ${g.img ? `<img src="${IMG + g.img}" alt="${g.title} на Маку">` : '<div class="card-ph">☠ ще в могилі</div>'}
      <div class="card-b"><span class="badge${g.dev ? ' badge-dev' : ''}">${g.badge}</span><h3>${g.title}</h3><p>${g.sub}</p><small>${g.note}</small></div></a>`).join('');
  return `${header('home')}
  <section class="hero"><div class="wrap">
    <div class="hero-logo">${logoSVG()}</div>
    <h1>Старі ігри повстають з мертвих. На твоєму Маку.</h1>
    <p class="lead">Порти з оригінального Xbox і старого ПК — рідні програми для Apple Silicon. Не емулятор. Безкоштовно. Твоя копія гри — наша чорна магія.</p>
    <div class="btns"><a class="btn" href="#games">Обрати жертву</a><a class="btn btn-ghost" href="#about">Що це за цвинтар</a></div>
  </div></section>
  <section id="about" class="sec manifesto"><div class="wrap">
    <h2>Котікі, цей проєкт для вас</h2>
    <p>У когось у дитинстві був Xbox. У нас — диск із «Героями» в перекладі, який краще не згадувати. Тепер у нас є MacBook, що тримає кілька годин без світла, поки росія воює з нашими підстанціями. Тож один шкіряний мішок і зграя неоплачуваних AI-агентів переносять старі ігри на Мак — українською.</p>
  </div></section>
  <section id="games" class="sec"><div class="wrap">
    <h2>Воскреслі</h2>
    <div class="cards">${cards}</div>
    <p class="queue"><span>Черга на ексгумацію:</span> ${QUEUE.map(q => `<i>${q}</i>`).join(' ')}</p>
  </div></section>
  <section class="sec split"><div class="wrap split-in">
    <div><h2>Спитай кулю</h2><p class="muted">Відповідь на твоє тупе питання. Без реєстрації та смс.</p>${ball()}</div>
    <div class="pig-col"><h2>Скільки це коштує?</h2><p class="muted">Тобі — нуль. Нам — ось стільки, і трохи нервів.</p>${pigSVG('$398 витрачено')}</div>
  </div></section>
  <section class="sec"><div class="wrap narrow"><h2>Питання, які ви все одно поставите</h2>${faq(FAQ_HOME)}</div></section>
  ${footer()}`;
}

function gamePage() {
  return `${header('game')}
  <section class="hero hero-game"><div class="wrap">
    <p class="kicker">Windows → Мак · Грається</p>
    <h1>Герої Меча і Магії IV на Маку</h1>
    <p class="lead">«Четвірка» з обома доповненнями — рідна програма для M1–M4. Без Wine, без емулятора, без віртуалки. З твоєї копії з GOG.</p>
    <div class="btns"><a class="btn" href="#game">Українська версія</a><a class="btn btn-ghost btn-soon" href="#game">English version · скоро</a></div>
  </div></section>
  <section class="sec"><div class="wrap">
    <h2>Було → стало</h2>
    ${slider('heroes4-map.jpg', '2002 · 800×600', 'Мак · широкий екран, Retina')}
  </div></section>
  <section class="sec"><div class="wrap two">
    <div><h2>Що всередині</h2><ul class="facts">
      <li>Рідна програма для Apple Silicon, не емулятор</li>
      <li>Базова гра + The Gathering Storm + Winds of War</li>
      <li>Українська версія — зараз, англійська — скоро</li>
      <li>Широкий екран, Retina, згладжування на F10</li>
      <li>Встановлення однією командою з інсталятора GOG, ~40 хв</li></ul></div>
    <div><h2>Історія</h2><p>2002 рік, студія 3DO доживає останні місяці. «Четверті Герої» виходять сирими, сварять за все підряд — і саме в них ціле покоління в Україні просиділо зиму на піратських дисках. Двадцять з гаком років потому гра нарешті говорить українською і працює на Маку, який не боїться блекаутів.</p></div>
  </div></section>
  <section class="sec"><div class="wrap narrow"><h2>Питання</h2>${faq(FAQ_GAME)}</div></section>
  ${footer()}`;
}

function drawBefore(fig) {
  const img = fig.querySelector('.cmp-after'), c = fig.querySelector('.cmp-before');
  const W = fig.clientWidth, H = fig.clientHeight; if (!W || !img.naturalWidth) return;
  c.width = W; c.height = H;
  const x = c.getContext('2d'); x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
  const sh = img.naturalHeight, sw = sh * 4 / 3, sx = (img.naturalWidth - sw) / 2;
  const tmp = document.createElement('canvas'); tmp.width = 200; tmp.height = 150;
  const t = tmp.getContext('2d'); t.filter = 'saturate(.7) contrast(.9)'; t.drawImage(img, sx, 0, sw, sh, 0, 0, 200, 150);
  const dh = H, dw = dh * 4 / 3; x.imageSmoothingEnabled = false; x.drawImage(tmp, (W - dw) / 2, 0, dw, dh);
}

function initSliders() {
  document.querySelectorAll('.cmp').forEach(fig => {
    const img = fig.querySelector('.cmp-after'), r = fig.querySelector('.cmp-range');
    const set = () => { fig.style.setProperty('--pos', r.value + '%'); };
    r.addEventListener('input', set); set();
    const go = () => drawBefore(fig);
    img.complete ? go() : img.addEventListener('load', go);
    addEventListener('resize', go);
  });
}

function initBall() {
  document.querySelectorAll('.ball-wrap').forEach(w => {
    let i = 0; const media = w.querySelector('.ball-media'), cap = w.querySelector('.ball-cap');
    const next = () => {
      w.classList.add('fogging');
      setTimeout(() => { i = (i + 1 + Math.floor(Math.random() * (ANSWERS.length - 1))) % ANSWERS.length;
        media.src = IMG + ANSWERS[i][0]; cap.textContent = ANSWERS[i][1]; w.classList.remove('fogging'); }, 700);
    };
    w.querySelector('.ball-ask').addEventListener('click', next);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) setInterval(next, 9000);
  });
}

let current = null;
function render() {
  const page = location.hash === '#game' ? 'game' : 'home';
  if (page !== current) {
    current = page;
    document.getElementById('app').innerHTML = page === 'game' ? gamePage() : homePage();
    initSliders(); initBall();
  }
  const el = location.hash.length > 1 && document.getElementById(location.hash.slice(1));
  el ? el.scrollIntoView() : scrollTo(0, 0);
}


;

(function(){
var T=window.DW_THEME||{};
logoSVG=function(){
  var fill=T.logoFill,blood=T.blood,bone=T.bone,rope=T.rope;
  var drips=[[120,40,6],[196,22,4],[262,62,7],[338,30,5],[410,54,6],[480,24,4],[548,70,7],[618,36,5]];
  var d=drips.map(function(a,i){var x=a[0],len=a[1],w=a[2];return '<path class="dw-drip" style="animation-delay:'+((i*0.7)%5)+'s" d="M'+(x-w)+' 146 L'+(x+w)+' 146 L'+(x+w)+' '+(146+len-w)+' Q'+(x+w)+' '+(146+len)+' '+x+' '+(146+len)+' Q'+(x-w)+' '+(146+len)+' '+(x-w)+' '+(146+len-w)+' Z" fill="'+blood+'"/>'+(i%3===0?'<circle class="dw-drop" style="animation-delay:'+(i*0.9)+'s" cx="'+x+'" cy="'+(146+len+8)+'" r="'+(w*0.7)+'" fill="'+blood+'"/>':'');}).join('');
  var cx=706,cy=92,R=44,pts=[];for(var k=0;k<5;k++){var t=Math.PI/2+k*2*Math.PI/5;pts.push((cx+R*Math.cos(t)).toFixed(1)+' '+(cy+R*Math.sin(t)).toFixed(1));}
  var star='M'+[0,2,4,1,3].map(function(i){return pts[i];}).join(' L')+' Z';
  return '<svg class="dw-logo" viewBox="0 20 760 350" role="img" aria-label="Deadware">'+
  '<defs><linearGradient id="dwfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+fill+'"/><stop offset=".7" stop-color="'+fill+'"/><stop offset=".95" stop-color="'+blood+'"/></linearGradient>'+
  '<filter id="dwglow" x="-10%" y="-30%" width="120%" height="160%"><feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="'+blood+'" flood-opacity=".75"/></filter></defs>'+
  '<g class="dw-swing">'+
    '<path d="M70 140 C71 168 76 196 82 226" stroke="'+rope+'" stroke-width="3" fill="none"/>'+
    '<ellipse cx="72" cy="236" rx="11" ry="5" stroke="'+rope+'" stroke-width="3" fill="none"/>'+
    '<g stroke="'+bone+'" stroke-width="3.4" stroke-linecap="round" fill="none">'+
      '<g transform="rotate(14 70 218)"><circle cx="70" cy="216" r="13" fill="'+bone+'" stroke="none"/><rect x="63" y="225" width="14" height="7" rx="2" fill="'+bone+'" stroke="none"/><circle cx="65" cy="215" r="3.4" fill="#000" stroke="none"/><circle cx="75" cy="215" r="3.4" fill="#000" stroke="none"/></g>'+
      '<path d="M70 240 L70 290"/><path d="M60 248 Q70 244 80 248 M59 256 Q70 252 81 256 M61 264 Q70 260 79 264"/>'+
      '<path d="M58 242 L52 270 L50 296 M82 242 L88 270 L90 296"/><path d="M60 290 Q70 284 80 290 L76 298 Q70 294 64 298 Z" fill="'+bone+'"/>'+
      '<path d="M65 298 L63 330 L60 360 M75 298 L77 330 L80 360"/></g></g>'+
  (function(m){var g=function(w,o){return '<g stroke="'+blood+'" stroke-width="'+w+'" stroke-linejoin="round" opacity="'+o+'">'+m.replace(/ stroke-width="5"/g,'')+'</g>';};return g(11,.08)+g(7,.14)+g(3,.24)+m;})(''+
  '<circle cx="'+cx+'" cy="'+cy+'" r="'+(R+6)+'" fill="none" stroke="'+blood+'" stroke-width="5"/><path d="'+star+'" fill="none" stroke="'+blood+'" stroke-width="5" stroke-linejoin="miter"/>')+
  d+'</svg>';
};
var _header=header;
var NAV='<nav><a href="#games">Ігри</a><a href="#games">Як це працює</a><a href="#about">Про Deadware</a><a href="#stories">Потішні історії</a><a href="#faq">Відповіді на тупі питання</a><a href="#enthusiasts">Для ентузіастів</a></nav>';
/* v117: UA/EN switch keeps the current route */document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a.lang-sw');if(a&&location.hash)a.href=a.getAttribute('href').split('#')[0]+location.hash;},true);
header=function(a){return _header(a).replace('<div class="wrap top-in">','<div class="wrap top-in"><a class="brand" href="#home">'+logoSVG()+'<span class="dw-glow" aria-hidden="true">DEADWARE</span><span class="dw-word" aria-hidden="true">DEADWARE</span></a>').replace(/<nav>[\s\S]*?<\/nav>/,NAV).replace(/<span class="lang">[\s\S]*?<\/span>/,'<span class="lang"><b>UA</b> / <a class="lang-sw" href="en.html" lang="en" hreflang="en">EN</a></span>');};
var HOW='<section id="how" class="sec"><div class="wrap"><h2>Як це працює</h2><ol class="how">'+
 '<li><b>Твоя копія гри.</b> Диск або образ, який у тебе вже є. Файлів ігор ми не роздаємо.</li>'+
 '<li><b>Порт з GitHub.</b> Качаєш реліз: він збирає гру з твоєї копії в рідний застосунок для Мака на Apple Silicon.</li>'+
 '<li><b>Іконка на робочому столі.</b> Запускаєш і граєш: 60 fps, широкий екран, навіть без світла.</li></ol></div></section>';
var SLIDES=[
 {mark:'Гаррі Поттер',tag:'і Таємна кімната',img:'hp2-level1.jpg',h:'Таємна кімната відчинилась на Маку',sub:'Xbox 2002 → Apple Silicon',body:'Той самий Гоґвортс, тільки тепер він живе на макбуці довше, ніж Локонс тримає пам’ять.',b:[['Сторінка гри','#game']],
  done:[['Рідна програма для Мака','Гру один раз переписали під Мак, тож вона відкривається з іконки, як будь-яка програма.'],['60 кадрів, широкий екран','Картинка 16:10, рендер до ×4 (близько 3072×1920) на Retina.'],['Будь-який геймпад','Xbox, PlayStation чи Switch Pro. Гру робили під стіки, тож під клавіатуру ми її не перекроюємо.'],['Сучасна камера','Вільна камера на правому стіку, пропуск відео й кат-сцен.']]},
 {mark:'Герої Меча і Магії IV',tag:'обидва доповнення',img:'heroes4-map.jpg',h:'Герої встали з могили',sub:'PC 2002 → Apple Silicon',body:'Ходи хоч до ранку: карта тепер оновлюється 60 разів на секунду, а не 20.',b:[['Сторінка гри','#game']],
  done:[['Обидва доповнення','Complete Edition: основна гра, The Gathering Storm і Winds of War.'],['Українська версія','Інтерфейс, кампанії й озвучка кампаній.'],['Широкий екран і Retina','Чітка картинка, фільтр згладжування на F10.'],['Плавна анімація','Плавний рух на карті пригод і в бою.'],['Встановлення одним кроком','Одна команда ставить усе з інсталятора GOG, приблизно за 40 хвилин.']]}];
function showcase(){
 var bg='',sl='',th='',dn='';
 SLIDES.slice(0,1).forEach(function(g,i){var on=i===0?' on':''; /* v64: only the latest game */
  bg+='<div class="gc-bg'+(g.img?'':' ph')+on+'">'+(g.img?'<img src="'+IMG+g.img+'" alt="">':'')+'</div>';
  sl+='<div class="gc-slide'+on+'"><div class="gc-mark">'+g.mark+'<small>'+g.tag+'</small></div><h3>'+g.h+'</h3><p class="gc-body">'+g.body+'</p><div class="btns">'+
   g.b.map(function(x){return '<a class="gc-btn'+(x[2]?' ghost':'')+'" href="'+x[1]+'">'+x[0]+'</a>';}).join('')+'</div></div>';
  th+='<button class="gc-th'+on+'" type="button" aria-label="'+g.mark+'">'+(g.img?'<img src="'+IMG+g.img+'" alt="">':'<span>'+g.mark+'</span>')+'</button>';
  dn+='<ul class="gc-list'+(g.wait?' wait':'')+on+'">'+g.done.map(function(d){return '<li><b>'+d[0]+'</b>'+d[1]+'</li>';}).join('')+'</ul>';});
 return '<section id="showcase" class="sec gcs"><div class="wrap gcs-in"><p class="kicker gcs-k">Свіжовикопане з цифрової могили</p><div class="gc" aria-roledescription="carousel">'+bg+'<div class="gc-shade"></div><div class="gc-in">'+sl+'</div></div>'+
  '<aside class="gc-done"><h4>Що ми з нею зробили</h4>'+dn+'</aside></div></section>';
}
var gcI=0,gcT=null;
function gcGo(n){var r=document.querySelector('.gcs');if(!r)return;var N=SLIDES.length;gcI=(n+N)%N;
 ['.gc-bg','.gc-slide','.gc-th','.gc-list'].forEach(function(q){r.querySelectorAll(q).forEach(function(e,i){e.classList.toggle('on',i===gcI);});});gcArm();}
function gcArm(){clearTimeout(gcT);if(document.querySelectorAll('.gcs .gc-slide').length<2)return;var r=document.querySelector('.gcs');if(r&&!r.classList.contains('paused'))gcT=setTimeout(function(){gcGo(gcI+1);},7000);}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.gc-th');if(!b)return;gcGo([].indexOf.call(b.parentNode.children,b));});
document.addEventListener('mouseover',function(e){var r=e.target.closest&&e.target.closest('.gcs');if(r&&!r.classList.contains('paused')){r.classList.add('paused');clearTimeout(gcT);}});
document.addEventListener('mouseout',function(e){var r=document.querySelector('.gcs.paused');if(r&&!(e.relatedTarget&&r.contains(e.relatedTarget))){r.classList.remove('paused');var a=r.querySelector('.gc-th.on');if(a){a.classList.remove('on');void a.offsetWidth;a.classList.add('on');}gcArm();}});
function card(g){return '<a class="card'+(g.dev?' card-dev':'')+'" href="'+(g.id==='heroes4'?'#game':'#games')+'">'+(g.img?'<img src="'+IMG+g.img+'" alt="'+g.title+' на Маку">':'<div class="card-ph">☠ ще в могилі</div>')+
 '<div class="card-b"><span class="badge'+(g.dev?' badge-dev':'')+'">'+g.badge+'</span><h3>'+g.title+'</h3><p>'+g.sub+'</p><small>'+g.note+'</small></div></a>';}
/* v89: no «скоро»/process notes on cards */var CARD_TXT={hp2:'Версія з Xbox. 60 кадрів, широкий екран, HD.',heroes4:'Обидва доповнення, українською.',rotk:'Версія з Xbox. 60 кадрів, рідна роздільність Мака.'};
/* v119: ROTK is playable (Head, 2026-11-06): a regular card, like HP2 */GAMES.forEach(function(g){if(g.id==='rotk'){g.img='rotk-helms-deep-uk.jpg';g.badge='Грається';g.dev=false;}});
function cards6(){var all=GAMES.filter(function(g){return !g.dev;}).map(function(g){return Object.assign({},g,{sub:CARD_TXT[g.id]||g.sub,note:''});});return '<div class="cards cards2">'+all.map(card).join('')+'</div><div class="fk-slot"></div>';}
var VP=['Рідна програма для Мака','Безкоштовно, з твоєї копії гри','60 fps, широкий екран, Retina','Українською й англійською'];
var HERO2='<section class="hero h2c"><div class="wrap"><div><h1>Старі ігри повстають з мертвих. На твоєму Маку.</h1>'+
 '<p class="lead">Порти старих ігор у рідні програми для Маків на Apple Silicon.</p>'+
 '<ul class="vp">'+VP.map(function(v){return '<li>'+v+'</li>';}).join('')+'</ul></div></div></section>';
var HERO3='<section class="hero h2c"><div class="wrap"><div><h1 data-g="Старі ігри повстають з мертвих.">Старі ігри повстають з мертвих.</h1><p class="h2c-sub">Нативні порти улюблених ігор на макбуки — безкоштовно, просте встановлення, покращена графіка.</p><a class="gc-btn m-only" href="#games">Обрати гру</a></div></div></section>';
var WHOIC={
 shoe:'<path d="M2 15.5V11l4-3 2.5 2L11 8l5 5h3.5a2.5 2.5 0 0 1 2.5 2.5V18H2z"/><path d="M2 15.5h20"/><circle cx="16" cy="16.8" r=".6"/>',
 disc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.4"/><path d="M12 6.5a5.5 5.5 0 0 1 5.5 5.5"/>',
 mac:'<rect x="4" y="5" width="16" height="11" rx="1.2"/><path d="M2 19h20"/>',
 bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/><path d="M3 3l18 18"/>'};
var ABOUT='<section id="about" class="sec manifesto"><div class="wrap"><h2>Воскрешаємо для своїх — тих, хто</h2><ul class="vp who">'+
 [['shoe','Виріс настільки бідним, що замість консолі мріяв про кросівки без дірок.'],
  ['disc','Малим облизувався на піратські диски з іграми, але вони були дорогі й російською.'],
  ['mac','Виріс і став охуєвшим стилягою з красівим макбуком і всякими приставками.'],
  ['bulb','Але русня почала хуярить по енергетиці, і тепер в кайф помитися в гарячій воді. А світло… а шо світло? Я його не бачив, поки не став дорослим.']].map(function(t){return '<li><span class="who-ic"><svg viewBox="0 0 24 24" aria-hidden="true">'+WHOIC[t[0]]+'</svg></span>'+t[1]+'</li>';}).join('')+
 '</ul><p class="who-out">Коротше, цей проєкт для вас, мої молоді дєди і бабулі.</p><div class="who-cta"><p>Беріть свій охуєнно енергоефективний макбук і грайте собі без світла в поліпшені версії ігор, на які не було бабла, коли ви були малі.</p></div></div></section>';
var RIGHTS=['Файлів ігор тут нема: кожен порт збирається з копії, яку гравець купив сам.',
 'Ми нічого не заробляємо: ні реклами, ні донатів, ні платних версій.',
 'Логотипи й обкладинки належать вам. На права не претендуємо.',
 'Щось не так? Спершу напишіть нам, і ми знімемо матеріал за 24 години.'];
var VIDEOS=[]; // owner's video answers go here, e.g. 'video/answer-1.mp4'; until then the ball shows game frames
var DIE='<svg viewBox="0 0 100 100" aria-hidden="true"><g stroke="#09090a" stroke-width="2" stroke-linejoin="round"><path d="M50 8L90 30L50 52L10 30Z" fill="#f4f1e8"/><path d="M10 30L50 52L50 95L10 72Z" fill="#d6cdb8"/><path d="M50 52L90 30L90 72L50 95Z" fill="#b3a88f"/></g><polygon points="67.2,39.5 62.2,41.6 56.3,42.9 50.0,43.4 43.7,42.9 37.8,41.6 32.8,39.5 28.9,36.7 26.5,33.5 25.7,30.0 26.5,26.5 28.9,23.3 32.8,20.5 37.8,18.4 43.7,17.1 50.0,16.6 56.3,17.1 62.2,18.4 67.2,20.5 71.1,23.3 73.5,26.5 74.3,30.0 73.5,33.5 71.1,36.7" fill="none" stroke="#c1121f" stroke-width="2.4"/><path d="M50.0 41.2 L38.0 20.9 L69.4 33.5 L30.6 33.5 L62.0 20.9 Z" fill="none" stroke="#c1121f" stroke-width="2.4" stroke-linejoin="miter"/><ellipse cx="21.2" cy="45.4" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="61.2" cy="55.3" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="21.2" cy="57.2" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="61.2" cy="67.3" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="21.2" cy="68.9" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="61.2" cy="79.4" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="38.8" cy="55.1" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="78.8" cy="45.6" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="38.8" cy="66.8" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="78.8" cy="57.7" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="38.8" cy="78.6" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="78.8" cy="69.7" rx="3.6" ry="4.2" fill="#c1121f"/></svg>';
function orb(){return '<div class="orb-wrap"><div class="ball orb"><img class="ball-media orb-img" alt="" hidden><video class="orb-vid" playsinline hidden></video><div class="ball-fog"></div><p class="orb-q" aria-live="polite"></p><div class="ball-shine"></div>'+
 '<button class="orb-die" type="button" aria-label="Кинути кістку: куля відповість">'+DIE+'</button></div><div class="ball-base"></div><p class="ball-cap orb-cap" aria-live="polite"></p></div>';}
/* v63: the die pulls a random FAQ question; the ball answers in its own words (never the FAQ text) and keeps the answer until the next throw */
var ORB_QA=[['Це взагалі законно?','Гру купуєш ти, від нас — лише рецепт. Юристам тут нудно, і нас це влаштовує.'],
 ['Скільки це коштує?','Нуль. Гру ти купуєш сам, а наша робота — хобі, брати за неї гроші нема за що.'],
 ['Мій Мак підійде?','Якщо в «Про цей Mac» у рядку «Чип» написано Apple — так. Це майже всі Маки після 2020-го. Старшим куля співчуває.'],
 ['Це вірус?','Ні. Мак насторожується, бо ми не платимо Apple за підпис. Вірусу потрібні твої паролі, нам — щоб ти нарешті пройшов цю гру.'],
 ['Чим це краще за оригінал?','Оригінал ти вже бачив. Тут 60 кадрів замість 30, широкий екран і українська — те саме дитинство, тільки в окулярах.'],
 ['Можна задонатити?','Ні: гроші — це обов’язки, а ми тут заради задоволення. Купи краще гру на GOG — це донат тим, хто її створив.'],
 ['Скільки чекати встановлення?','«Герої» — хвилин сорок. Якраз вистачить, щоб перечитати листування з колишньою і пошкодувати.'],
 ['Скільки протримається без світла?','Секундоміром не міряли — брехати не будемо. Твій ранковий оптимізм вона переживе точно.'],
 ['Старі збереження підійдуть?','Ні: це нова версія гри, і старих файлів вона не читає. Минуле треба відпускати. Навіть у «Героях».'],
 ['Можна грати з геймпадом?','У приставкових іграх — так, з Xbox, PlayStation чи Switch. У «Героях» — лише мишка. З пультом від телевізора — ні, ми перевіряли.'],
 ['Знайшов баг. І що?','Вітаю, тепер ти тестувальник. Зарплати нема, слава вічна. Пиши на GitHub.'],
 ['Можна замовити гру?','Ні. Беремо тільки ті, які любимо самі: з нелюбові виходить халтура.'],
 ['Можна грати з клавіатури?','Ні. Гру робили під стіки, а приставкова гра на клавішах — як гітара в рукавицях. Геймпад дешевший за психотерапевта.'],
 ['А на Маку з Intel?','Ні. Наші версії знають лише процесори Apple. Твій Intel заслужив на почесну пенсію, а не на «Героїв».'],
 ['Де взяти «Героїв IV»?','На GOG, Complete Edition. Легально, недорого, і гроші нарешті йдуть тим, хто гру зробив, а не дядьку з ринку.'],
 ['Де взяти «Таємну кімнату»?','Лише з власного диска для Xbox, американське видання. Ми не роздаємо ігри — навіть дуже хороші.'],
 ['Гаррі говорить українською?','Пише. Тексти й субтитри українською, голоси — оригінальні. Британську інтонацію Локонса ми не чіпали: таке не перекладається.'],
 ['А «Герої» говорять українською?','Так: інтерфейс, кампанії, довідка й озвучка кампаній. Некромант нарешті погрожує тобі рідною мовою.'],
 ['Можна грати по мережі?','У «Героях» — ні: сервери давно в могилі, а ми воскрешаємо ігри, не сервери.'],
 ['Навіщо мені 60 кадрів?','Щоб армія не повзла картою, як маршрутка в годину пік. Око звикає до плавності за п’ять хвилин, а назад — ніколи.'],
 ['Скільки місця треба?','Для «Героїв» — близько 5 ГБ. Приблизно стільки займають фото твого кота, які ти ніколи не переглядаєш.'],
 ['Потрібен інтернет?','Тільки на час встановлення. Далі грай хоч в укритті — гра додому не дзвонить.'],
 ['Що за інструменти розробника просить Мак?','Будівельні риштування від Apple: на них гра збирається в тебе вдома. Безкоштовно, одна кнопка, без паніки.'],
 ['Чому все українською?','Бо двадцять років нам пропонували чужу. Тепер наша черга, і поступатися ми не збираємося.'],
 ['А англійська є?','У «Гаррі Поттері» — так, обидві мови в одному інсталяторі. «Герої» поки говорять лише українською — нехай світ хоч раз почекає.'],
 ['Чим це відрізняється від ПК-шного «Гаррі Поттера»?','Усім. Xbox-версія — окрема гра з власними рівнями, боями й камерою. ПК-шну ти бачив у комп’ютерному клубі, цю — тільки в журналі.'],
 ['Можна пропустити ролики?','Так: ролик — один тиск, кат-сцена — чотири секунди утримання. Це щоб ти не проскочив сюжет, коли тягнешся по чай.'],
 ['Що робить F2 у «Таємній кімнаті»?','Повертає 2002-й: картинку як на старому кінескопі. Подивишся хвилину — і зрозумієш, навіщо ми все це робили.'],
 ['А F10 у «Героях»?','Фільтри картинки, від різкої до гладкої. Як підбирати окуляри в оптиці, тільки безкоштовно й без черги.'],
 ['Хто це все робить?','Один шкіряний мішок і команда AI-агентів. Мішок ставить задачі, агенти працюють. Профспілки в них поки нема.'],
 ['Ви не боїтеся правовласників?','Поважаємо. Ігор не роздаємо, грошей не беремо, листи читаємо. Напишуть — відповімо швидше, ніж на баги.'],
 ['Чому гра так довго збирається?','Бо твій Мак переписує всю гру під себе, від першого рядка до останнього. Пів години за двадцять років очікування — чесний обмін.'],
 ['Чому саме ігри з Xbox?','Бо частина ігор вийшла там у своїй, кращій версії. І бо колись ми дивилися на цю чорну коробку, як на вітрину ювелірки.'],
 ['А якщо мені не сподобається?','Видали — і все. Грошей ти нам не платив, тож навіть повертати нема чого.'],
 ['Це надовго?','Поки нам цікаво. Тобто, судячи з усього, довше, ніж твій останній роман.']];
var orbT=null,orbLast=-1;
function orbPick(n){if(n<2)return 0;var i;do{i=Math.floor(Math.random()*n);}while(i===orbLast);orbLast=i;return i;}
function orbReset(w){clearTimeout(orbT);w.classList.remove('playing');var v=w.querySelector('.orb-vid');v.onended=v.onerror=null;v.pause();v.removeAttribute('src');v.hidden=true;w.querySelector('.orb-img').hidden=true;w.querySelector('.orb-cap').textContent='';}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.orb-die');if(!b)return;var w=b.closest('.orb-wrap');if(w.classList.contains('rolling'))return;
 w.classList.add('rolling');setTimeout(function(){w.classList.remove('rolling');w.classList.add('playing');
  if(VIDEOS.length){var v=w.querySelector('.orb-vid');v.src=VIDEOS[orbPick(VIDEOS.length)];v.hidden=false;v.onended=v.onerror=function(){orbReset(w);};var p=v.play();if(p&&p.catch)p.catch(function(){orbReset(w);});}
  else{var a=ORB_QA[orbPick(ORB_QA.length)];w.querySelector('.orb-q').innerHTML='<b>'+a[0]+'</b><span>'+a[1]+'</span>';}
 },600);});
function split2(){return '<section id="ask" class="sec split two-halves"><div class="wrap split-in">'+
 '<div class="half-ask"><h2>Отримай відповідь на своє тупе питання</h2>'+orb()+'</div>'+
 '<div class="half-rights"><div class="rights-txt"><h2>Для правовласників</h2><p class="muted">Ми фанати, не пірати.</p><ul class="rights">'+
 RIGHTS.map(function(t){return '<li>'+t+'</li>';}).join('')+'</ul><a class="gc-btn ghost" href="mailto:deadwareproject@gmail.com">Написати нам</a><p class="rights-mail">deadwareproject@gmail.com</p></div>'+'<figure class="rights-pig">'+pigSVG('$398 витрачено')+'<figcaption>Я витратив на це вже $398 і не прошу взамін навіть чупа-чупс. Любий правовласник, якщо ти це читаєш, не будь козлом і не закривай мій проєкт.</figcaption></figure></div>'+
 '</div></section>';}
var _home=homePage;
homePage=function(){setTimeout(function(){gcI=0;gcArm();},0);return _home().replace(/<section class="hero">[\s\S]*?<\/section>/,HERO3).replace(/<div class="cards">[\s\S]*?<\/a><\/div>/,cards6).replace(/<p class="queue">[\s\S]*?<\/p>/,'<p class="all-games"><a class="gc-btn" href="#games">Всі ігри</a></p>').replace(/(<section id="about" class="sec manifesto">[\s\S]*?<\/section>)/,function(){return showcase()+ABOUT;}).replace(/<section class=\"sec split\">[\s\S]*?<\/section>/,split2).replace('<section class="sec"><div class="wrap narrow"><h2>Питання, які ви все одно поставите','<section id="faq" class="sec"><div class="wrap narrow"><h2>FAQ для душніл');};

})();

;
/* v62: inner pages. Hash routes stand in for real URLs: #games → /uk/games/, #game/heroes4 → /uk/heroes4/, #stories/<slug> → /uk/stories/<slug>/ */
(function(){
const SITE='https://deadware.games';
const GH_H4='https://github.com/LeoDeadware/HoMM4Deadware',GH_HP2='https://github.com/LeoDeadware/HP2-Deadware';
const MAIL='deadwareproject@gmail.com';
/* only games that play; a new release is one more record */
const DB=[
 {id:'heroes4',title:'Герої Меча і Магії IV',orig:'Heroes of Might and Magic IV',alt:'Heroes 4, HoMM4, Герої 4',year:2002,
  img:'heroes4-map.jpg',shots:['heroes4-map.jpg'],
  sub:'З обома доповненнями й українською, якої в неї ніколи не було.',
  h1:'Герої Меча і Магії IV на Маку',
  lead:'Та сама «четвірка», через яку ціле покоління прогулювало пари. Тепер вона живе на твоєму макбуці як звичайна програма — й нарешті говорить українською.',
  answer:'<b>Так, у Героїв IV можна грати на Маку.</b> Купуєш гру на GOG, качаєш наш інсталятор — і хвилин за сорок у тебе на робочому столі іконка «Героїв». Безкоштовно, українською, з обома доповненнями.',
  vers:[['Українська',true],['English',false]],gh:GH_H4,
  need:['Мак з процесором Apple','Гра з GOG: <i>Heroes IV Complete Edition</i>','5 ГБ місця й інтернет'],
  steps:[['Купи гру на GOG.','Скачай звідти інсталятор для Windows, але не відкривай.'],['Скачай порт з GitHub.','Кнопка вгорі сторінки: код порту й архів heroes4-mac-assets.zip з релізу.'],['Постав Homebrew.','Відкрий Термінал і встав команду з інструкції на GitHub. Мак попросить пароль.'],['Запусти встановлення.','Ще одна команда з інструкції — і 15–30 хвилин чекання. Термінал не закривай.'],['Відкрий «Героїв» з робочого столу.','Іконка з’явиться сама. Разом виходить хвилин сорок.']],
  feats:[['Карта на весь екран','Бій теж на весь екран: з намальованими краями замість чорних смуг.'],['Утричі плавніше','60 кадрів на секунду замість 20.'],['Українською','Кампанії, довідка, біографії героїв і озвучка кампаній.'],['Обидва доповнення','The Gathering Storm і Winds of War уже в комплекті.']],
  story:['2002 рік. Видавець 3DO помирає, і «Четверті Герої» виходять у світ недопеченими — як роман, який автор здав, бо прийшли колектори. Критики плювались. Гравці мовчки просиділи в них десять років.','В Україні їх знали з піратських дисків, перекладених людьми, яким явно платили за кількість слів, а не за сенс. Тепер у гри вперше є українська, зроблена з повагою, — і вона живе на Маку, якого у 2002-му ніхто з нас не міг собі навіть уявити.','Гра та сама, з тими самими картами й кампаніями. Просто тепер їй не потрібен комп’ютер з дві тисячі другого.'],
  faq:[['Можна грати в Героїв 4 на Маку?','Так. Порт запускає гру як звичайну програму на будь-якому Маку з процесором Apple.'],['Треба купувати гру?','Так, Complete Edition на GOG. Ми лише перетворюємо твою копію на мак-версію — самої гри в нас нема.'],['Скільки часу займе встановлення?','Близько сорока хвилин, з них твоєї участі — хвилин десять: решту Мак робить сам.'],['Усе перекладено?','Майже. Шість оригінальних кампаній, Winds of War і весь інтерфейс — так. Кампанії The Gathering Storm — англійською.'],['Можна грати по мережі?','Ні, ми її свідомо вимкнули: сервери давно мертві, а зайва дірка в інтернет твоєму Маку ні до чого.'],['Є англійська?','Зараз — лише українська. Нехай хоч раз світ почекає на нас.'],['Це правда безкоштовно?','Так. Жодних донатів, підписок і «преміум-версій».'],['Можна змінити вигляд картинки?','Так, F10 перемикає фільтри: від різкого до гладкого, як тобі до смаку.'],['Як дізнатися, чи в мене Мак з процесором Apple?','Яблучко в лівому верхньому куті → «Про цей Mac». Якщо в рядку «Чип» написано Apple — ти в клубі.'],['Мак не хоче відкривати інсталятор?','Натисни на нього правою кнопкою → «Відкрити» → ще раз «Відкрити». Ми не платимо Apple за право бути милими, тож вона трохи нервує.']],
  q:['heroes of might and magic 4 mac','heroes 4 mac m1','герої меча і магії 4 українською','герої меча і магії 4 на мак']},
 {id:'hp2',title:'Гаррі Поттер і Таємна кімната',orig:'Harry Potter and the Chamber of Secrets',alt:'HP2, Гаррі Поттер 2',year:2002,
  img:'hp2-level1.jpg',shots:['hp2-level1.jpg','hp2-street.jpg','hp2-inventory-uk.jpg'],
  sub:'Версія з Xbox, яку на комп’ютерах ніхто ніколи не бачив.',
  h1:'Гаррі Поттер і Таємна кімната на Маку',
  lead:'Не та ПК-версія, яку ти пам’ятаєш з комп’ютерного клубу, а консольна, з Xbox: інші рівні, інші бої, інша камера. Тепер — на Маку, плавно й на весь екран.',
  answer:'<b>Так, «Таємна кімната» з Xbox іде на Маку.</b> Потрібен образ твого диска з грою — наш інсталятор зробить з нього звичайну мак-програму. Безкоштовно.',
  vers:[['Українська',true],['English',true]],gh:null,
  need:['Мак з процесором Apple','Образ диска Xbox, американське видання'],
  steps:[['Підготуй образ диска.','Американське видання для першого Xbox.'],['Скачай наш інсталятор.',''],['Відкрий його.','Мак спитає, чи ти нам довіряєш. Довіряй.'],['Вкажи образ диска.','Якщо Мак попросить інструменти розробника — скачай їх.'],['Відкрий «Гаррі Поттера» з робочого столу.','Гоґвортс чекає. Локонс, на жаль, теж.']],
  feats:[['Учетверо чіткіше','Картинка в чотири рази більша, 330 текстур перемальовано.'],['60 кадрів і широкий екран','Плавно й без чорних смуг по боках.'],['Сучасна камера','Слухається стіка й сама стає Гаррі за спину.'],['Будь-який геймпад','Xbox, PlayStation чи Switch Pro. Підключив посеред гри — і він одразу працює, без перезапуску.']],
  story:['2002-го кожна платформа отримала свою «Таємну кімнату», і версії відрізнялися, як брати з різних шлюбів. Xbox-версія — консольна, з власними рівнями й боями. На ПК вона не виходила ніколи.','Мак-реліз 2003 року був портом ПК-версії під старі Маки і вже давно мертвий. Тож уперше за двадцять років Xbox-версія живе деінде, крім чорної коробки під телевізором.','Рівні й бої ті самі. Ми лише дали їй широкий екран, плавність і чіткість, на які в приставки 2002-го не вистачало сил.'],
  faq:[['Можна грати в «Таємну кімнату» на Маку?','Так, у версію з Xbox. Інсталятор робить з твого диска звичайну мак-програму.'],['Що треба налаштувати?','Нічого. Це звичайна мак-програма: клацнув іконку — граєш.'],['Чому версія з Xbox?','Бо це інша гра: свої рівні, бої й камера, яких на комп’ютерах ніколи не було. І, між нами, краща.'],['Можна, щоб було як тоді?','Так. F2 перемикає вигляд картинки, зокрема на «телевізор 2002» — з тим самим милом, за яким ти, виявляється, сумуєш.'],['Ролики можна пропустити?','Так. Ролик — одним натисканням, кат-сцену — утримавши кнопку чотири секунди, щоб не проскочити сюжет випадково.'],['Піде на старому Маку з Intel?','Ні. Версія зроблена під процесори Apple, на Intel вона не запуститься.'],['А клавіатура?','Ні, лише геймпад. Приставкова гра на клавішах — як гітара в рукавицях.'],['Підійде європейське видання?','Ми його ще не перевіряли. Інсталятор підкаже, якщо щось не те.'],['Як дізнатися, чи в мене Мак з процесором Apple?','Яблучко в лівому верхньому куті → «Про цей Mac». Якщо в рядку «Чип» написано Apple — ти в клубі.'],['Мак не хоче відкривати інсталятор?','Натисни на нього правою кнопкою → «Відкрити» → ще раз «Відкрити». Ми не платимо Apple за право бути милими, тож вона трохи нервує.']],
  q:['harry potter chamber of secrets mac','how to play harry potter chamber of secrets on mac','гаррі поттер таємна кімната гра на мак']},
{id:'rotk',title:'Володар перснів: Повернення короля',orig:'The Lord of the Rings: The Return of the King',alt:'ROTK, LOTR ROTK, Повернення короля',year:2003,
  img:'rotk-helms-deep-uk.jpg',shots:['rotk-helms-deep-uk.jpg','rotk-gandalf-breach-uk.jpg','rotk-minas-tirith.jpg'],
  sub:'Версія з Xbox: Гендальф, Арагорн і купа орків тепер на Маку.',
  h1:'Володар перснів: Повернення короля на Маку',
  lead:'Та сама гра за фільмом Пітера Джексона, де кадр із кіно без шва перетікає в бій. Тепер — версія з Xbox на твоєму Маку: 60 кадрів, рідна роздільність екрана й українська.',
  answer:'<b>Так, «Повернення короля» з Xbox іде на Маку.</b> Потрібен образ твого диска з грою, американське видання. Наш інсталятор зробить з нього звичайну мак-програму.',
  vers:[['Українська',true],['English',true]],gh:null,
  req:'твій диск Xbox (американське видання).',
  need:['Мак з процесором Apple','Образ диска Xbox, американське видання','Близько 6 ГБ вільного місця на час встановлення'],
  steps:[['Підготуй образ диска.','Американське видання для першого Xbox.'],['Скачай наш інсталятор.','Він важить 8,5 МБ: гри в ньому нема, лише рецепт.'],['Відкрий його.','Мак спитає, чи ти нам довіряєш. Довіряй.'],['Вкажи образ диска.','Якщо Мак попросить інструменти розробника — скачай їх.'],['Відкрий «Повернення короля» з робочого столу.','Перстень сам себе у вулкан не кине.']],
  feats:[['60 кадрів на секунду','А на екранах ProMotion — усі 120.'],['Рідна роздільність Мака','Картинка рахується під твій екран, а не розтягується з телевізора 2003-го.'],['Три режими кольору','Оригінал, Сучасна й Тепла. Обери, яким тобі більше подобається Мордор.'],['Дві мови','Українська — перемикачем у лаунчері, за замовчуванням гра англійською. Голоси оригінальні.']],
  story:['2003 рік. EA випускає гру за третім фільмом, і вона вміє трюк, від якого на дивані завмирали: кадр із кіно без шва перетікає в бій. Щойно Арагорн на екрані витяг меч — і вже ти ним махаєш.','Потім приставки поїхали на антресолі, а Xbox-версія лишилася жити в чорній коробці під телевізором, поруч із дротами, які ніхто не наважується викинути.','Рівні, бої й ролики ті самі. Ми лише дали грі 60 кадрів, рідну роздільність твого екрана й українську мову.'],
  faq:[['Можна грати в «Повернення короля» на Маку?','Так, у версію з Xbox. Інсталятор робить з образу твого диска звичайну мак-програму.'],['Скільки займе встановлення?','Близько півтори хвилини, якщо інструменти розробника від Apple уже стоять. Якщо ні — інсталятор сам запропонує їх поставити, і це вже довше.'],['Скільки треба місця?','Після встановлення гра займає близько 3,8 ГБ. Під час встановлення треба ще близько 2 ГБ: Мак тимчасово розпаковує диск.'],['А клавіатура?','Ні, лише геймпад. Гру робили під стіки, і переробляти керування під клавіші ми не стали.'],['Який геймпад підійде?','Xbox або PlayStation. Підказки кнопок на екрані самі підлаштуються під той, що в тебе в руках.'],['Ролики можна пропустити?','Так, утримуй A. Хоча ролики тут — шматки фільму, їх не гріх і подивитися.'],['Є українська?','Так, перемикачем у лаунчері. За замовчуванням гра англійською, озвучка в обох версіях оригінальна.'],['Підійде європейське видання?','Ми його ще не перевіряли. Інсталятор підкаже, якщо щось не те.'],['Піде на старому Маку з Intel?','Ні. Версія зроблена під процесори Apple, на Intel вона не запуститься.'],['Мак не хоче відкривати інсталятор?','Натисни на нього правою кнопкою → «Відкрити» → ще раз «Відкрити». Ми не платимо Apple за право бути милими, тож вона трохи нервує.']],
  q:['lord of the rings return of the king mac','return of the king xbox on mac','володар перснів повернення короля на мак']}];
const G={};DB.forEach(g=>G[g.id]=g);

/* stories — Moody / Welsh: smart, dry, a little contemptuous, never cosy */
const POSTS=[
 /* why read it: you learn the real differences of H4 and stop playing it like «трійку» */
 {slug:'heroes-4-for-heroes-3-players',title:'«Четверті Герої» для тих, хто виріс на «трійці»',date:'2026-11-05',game:'heroes4',img:'heroes4-map.jpg',doodle:'helm',pull:'Герой більше не стоїть осторонь. Він б’ється сам — і сам падає.',
  dek:'«Четвірку» двадцять років лають люди, які грали в неї як у «трійку». Ось чотири речі, які треба знати, щоб не стати одним із них.',
  body:['«Треті Герої» — це релігія. «Четверті» — єресь, що вийшла 2002 року від студії, яка вже помирала. Більшість людей запустила її, побачила, що все не так, і повернулась молитися на «трійку». Половина претензій до гри — насправді претензії до того, що в неї грали неправильно.',
   '<b>Герой б’ється сам.</b> Він більше не стоїть за кадром з книжкою заклинань. Він виходить на поле бою, б’є, отримує по голові й може впасти. Тому прокачаний лицар — не прикраса армії, а її найкращий боєць, а маг без охорони — смертник.',
   '<b>Армія ходить без героя.</b> Загони рухаються картою самі: захоплюють шахти, збирають ресурси, підводять підкріплення. Між містами є каравани. Хто тягає всіх істот за одним героєм, як у «трійці», програє тому, хто грає трьома руками одночасно.',
   '<b>Місто змушує вибирати.</b> На рівнях з другого по четвертий у кожному місті дві істоти, а збудувати можна лише одну. Друга в цьому місті вже не з’явиться. Це не жадібність розробників, а головне рішення в грі: від нього залежить, яку війну ти вестимеш.',
   '<b>Бій — це позиція, а не черга.</b> Удар і відповідь у ближньому бою відбуваються одночасно, тож навіть перший удар коштує крові. Лучники й маги вирішують більше, ніж кількість мечів, а хто кидає все в лоб, кладе армію за два ходи.',
   'Наш порт нічого з цього не змінює: та сама гра, ті самі правила, обидва доповнення. Тільки карта тепер оновлюється 60 разів на секунду замість 20, а кампанії — українською, крім The Gathering Storm. Решта — на твоїй совісті.']},

 /* why read it: you learn which «Таємна кімната» you actually played and why the Xbox one is a different game */
 {slug:'not-that-chamber-of-secrets',title:'Ти грав не в ту «Таємну кімнату»',date:'2026-11-06',game:'hp2',img:'hp2-street.jpg',doodle:'tv',pull:'Книжка та сама. Гра — інша.',
  dek:'У 2002-му з однієї книжки зробили кілька різних ігор. Розбираємось, яка дісталась тобі і чому версія з Xbox — не та сама гра з кращою графікою.',
  body:['2002 року з другої книжки зробили не одну гру, а кілька. Версію для комп’ютера робила студія KnowWonder. Версії для PlayStation 2, Xbox і GameCube — зовсім інша студія, Eurocom. Сюжет той самий, а ігри різні, як дві екранізації однієї книжки двома режисерами, що не розмовляють між собою.',
   '<b>Як зрозуміти, у яку грав ти.</b> Якщо в комп’ютерному клубі чи вдома на ПК — у версію KnowWonder. Якщо в друга з приставкою — у версію Eurocom. Мак-реліз 2003 року, до речі, був перенесенням комп’ютерної версії, тож власники Маків теж грали в «комп’ютерну».',
   '<b>Чим вони різні.</b> Не графікою, а самою грою: інші рівні, інша будова уроків, інші бої, інша камера. Консольну версію на комп’ютерах не випускали ніколи. Тож для більшості з нас це не спогад, а нова гра зі знайомими іменами.',
   '<b>Що ми з нею зробили.</b> Сюжет і рівні не чіпали. Картинка малюється вчетверо більшою — близько 3072 пікселів по ширині, — 330 текстур світу перемальовані, інтерфейс новий, камера слухається стіка. Якщо скучив за милом 2002-го, F2 вмикає режим «телевізор 2002».',
   'І дрібниця, з якої видно, як ми думаємо. Звичайний ролик пропускається одним натисканням, а кат-сцену треба тримати чотири секунди. Бо ми знаємо, як ти тиснеш кнопки, коли нервуєш, і не хочемо, щоб ти випадково проскочив, хто ж відкрив Таємну кімнату.']}];
const P={};POSTS.forEach(p=>P[p.slug]=p);
const dUA=d=>{const m=['січня','лютого','березня','квітня','травня','червня','липня','серпня','вересня','жовтня','листопада','грудня'];const a=d.split('-');return (+a[2])+' '+m[a[1]-1]+' '+a[0];};

const FAQ_ALL=[
 ['Загальне','gen',[
  ['Що таке Deadware?','Проєкт, який бере старі ігри й робить їх звичайними програмами для Мака. Один українець і кілька AI-агентів, які не вміють казати «ні».'],
  ['Скільки це коштує?','Нуль. Гру купуєш ти, решта — наш подарунок людству, яке на нього не заслуговує.'],
  ['Можна вам задонатити?','Ні. Щойно з’являються гроші, з’являються обов’язки, а ми тут заради задоволення.'],
  ['Можна замовити гру?','Ні. Ми не ресторан: беремо тільки ігри, які любимо самі, бо порт без любові — халтура. Якщо твоя гра колись з’явиться тут — у нас схожий смак, вітаємо.'],
  ['Чому все українською?','Бо двадцять років нам пропонували грати мовою сусіда, який тепер обстрілює наші ТЕЦ. Досить.']]],
 ['Законність','legal',[
  ['Це законно?','Ми не роздаємо ігри. Ти купуєш свою копію, наш інсталятор перетворює її на мак-версію в тебе вдома. Як кравець, який перешиває твій же піджак.'],
  ['Чому треба купувати гру?','Бо хтось її колись зробив, і це його право. Ми любимо ігри, а не піратство.'],
  ['Де взяти гру?','Комп’ютерні ігри — на GOG, там вони коштують копійки. Ігри з Xbox — з власного диска.']]],
 ['Мій Мак','mac',[
  ['Мій Мак підійде?','Якщо він з процесором Apple — так. Перевір: яблучко зліва вгорі → «Про цей Mac» → рядок «Чип». Там має бути слово Apple.'],
  ['А якщо там написано Intel?','Тоді ні: наші версії зроблені лише для процесорів Apple, на Intel вони просто не запустяться. Нам шкода. Трохи.'],
  ['Скільки протримається без світла?','Чесно: батарею ми не міряли. На партію довшу за середню розмову про політику на кухні — вистачить.'],
  ['Можна з геймпадом?','Так, з будь-яким популярним: Xbox, PlayStation, Switch. Приставкові ігри — лише з геймпадом: їх робили під стіки, і переробляти керування під клавіатуру ми не стали. У «Героях» — лише мишка, як заповідали предки.'],
  ['Скільки треба місця?','Для «Героїв» — близько 5 ГБ. Приблизно як один сезон серіалу, який ти так і не додивився.']]],
 ['Встановлення','install',[
  ['Як встановити?','Зайди на сторінку гри, натисни «Скачати інсталятор», далі все покроково й з картинками — розбереться навіть кіт.'],
  ['Мак каже, що програму не можна відкрити. Ви вірус?','Ні, ми бідні. Ми не платимо Apple за підпис, тож Мак нас не знає. Правою кнопкою по програмі → «Відкрити» → «Відкрити». Один раз, і ви друзі.'],
  ['Вискочило вікно про якісь «інструменти розробника».','Скачай їх. Це безкоштовна програма від Apple, на ній гра збирається в тебе вдома.'],
  ['Чим інсталятор відрізняється від GitHub?','Інсталятор робить усе сам. GitHub — для тих, хто любить бачити, як готують сосиски.'],
  ['Скільки чекати?','«Герої» встановлюються хвилин сорок, і сидіти поруч не треба. Достатньо, щоб прочитати одну нашу історію й засумніватися в собі.']]],
 ['Ігри','games',[
  ['Які ігри вже є?','«Герої Меча і Магії IV», а з Xbox — «Гаррі Поттер і Таємна кімната» та «Володар перснів: Повернення короля». Усі три — на сторінці «Всі ігри».'],
  ['Буде українська озвучка?','Нової — ні: ми пробували, і вийшло гірше за оригінал, а погана озвучка гірша за чужу мову. У «Героях IV» українські голоси в кампаніях уже є; у «Гаррі Поттері» — український текст і оригінальні голоси.'],
  ['Мої старі збереження підійдуть?','Ні: це нова версія гри, старих файлів вона не розуміє. Почнеш спочатку — і цього разу пройдеш нормально.']]],
 ['Якщо щось зламалось','bugs',[
  ['Знайшов баг. Що робити?','Напиши на GitHub гри, що сталося і що ти натискав. Розберуть AI-агенти — у порядку черги й настрою.'],
  ['Чому так довго відповідаєте?','Бо проєкт робиться для задоволення. Наше задоволення, на жаль, не завжди збігається з твоїм дедлайном.']]]];

function setLD(objs,title,desc){document.title=title;let m=document.querySelector('meta[name=description]');if(!m){m=document.createElement('meta');m.name='description';document.head.appendChild(m);}m.content=desc;
 document.querySelectorAll('script.dw-ld').forEach(s=>s.remove());objs.forEach(o=>{const s=document.createElement('script');s.type='application/ld+json';s.className='dw-ld';s.textContent=JSON.stringify(o);document.head.appendChild(s);});}
const crumbs=a=>'<nav class="crumbs" aria-label="Хлібні крихти"><a href="#home">Deadware</a>'+a.map(x=>'<span>›</span>'+(x[1]?'<a href="'+x[1]+'">'+x[0]+'</a>':x[0])).join('')+'</nav>';
const crumbLD=a=>({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[['Deadware','/uk/']].concat(a).map((x,i)=>({'@type':'ListItem',position:i+1,name:x[0],item:SITE+x[1]}))});
const faqLD=items=>({'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(q=>({'@type':'Question',name:q[0],acceptedAnswer:{'@type':'Answer',text:q[1]}}))});
/* v92: one step component for every step-by-step on the site */
function stepsRail(steps){return '<ol class="rail" style="--n:'+steps.length+'">'+steps.map((x,i)=>'<li><span class="rail-n" aria-hidden="true">'+(i+1)+'</span><b>'+x[0]+'</b>'+x[1]+'</li>').join('')+'</ol>';}
const timeline=g=>stepsRail(g.steps);
const strip=h=>h.replace(/<p class="proto-note">[\s\S]*?<\/p>/g,'');

const _hdr=header;
header=function(a){return _hdr(a).replace('<a href="#games">Як це працює</a>','<a href="#how">Як це працює</a>').replace(/<a href="#([a-z]+)">/g,(m,id)=>id===a?'<a href="#'+id+'" aria-current="page">':m);};
const _ftr=footer;
footer=function(){return _ftr().replace('<div class="wrap">','<div class="wrap"><p class="foot-map"><a href="#games">Всі ігри</a> · '+DB.map(g=>'<a href="#game/'+g.id+'">'+g.title+'</a>').join(' · ')+' · <a href="#about">Про Deadware</a> · <a href="#how">Як це працює</a> · <a href="#stories">Потішні історії</a> · <a href="#faq">Відповіді на тупі питання</a> · <a href="#enthusiasts">Для ентузіастів</a></p>');};

const cardOf=g=>'<a class="card" href="#game/'+g.id+'"><img src="'+IMG+g.img+'" alt="'+g.title+' на Маку" loading="lazy"><div class="card-b"><h3>'+g.title+'</h3><p>'+g.sub+'</p></div></a>';

/* ---------- game page ---------- */
function gamePg(g){
 const other=DB.filter(x=>x.id!==g.id);
 const vers=g.vers.filter(v=>v[1]).map(v=>v[0]);
 const dl=(GO[g.id]?'<a class="gc-btn dl-inst" href="'+GO[g.id]+'">Скачати з GitHub</a>':'');
 const html=header('games')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Всі ігри','#games'],[g.title]])+'<div class="gp-top"><div>'+
  '<h1>'+g.h1+'</h1><p class="lead">'+g.lead+'</p>'+
  '<div class="dl">'+dl+'</div><p class="dl-req">Потрібні: Мак з процесором Apple і '+(g.req||(g.id==='hp2'?'твій диск Xbox (американське видання).':'гра з GOG.'))+'</p></div>'+
  '<div class="gp-cmp">'+strip(slider(g.shots[0],g.year,'Сьогодні, на Маку'))+(g.shots.length>1?'<div class="shot-th" role="tablist" aria-label="Скриншоти">'+g.shots.map((x,i)=>'<button type="button" role="tab" aria-selected="'+(i===0)+'" data-shot="'+x+'"><img src="'+IMG+x+'" alt="'+g.title+' на Маку, кадр '+(i+1)+'" loading="lazy"></button>').join('')+'</div>':'')+'</div></div>'+
  '</div></section>'+
 '<section class="pg-sec"><div class="wrap"><h2>Що змінилось</h2><ul class="feat feat4">'+g.feats.map(f=>'<li><b>'+f[0]+'</b>'+f[1]+'</li>').join('')+'</ul></div></section>'+
 '<section class="pg-sec" id="install"><div class="wrap"><div class="inst"><h2>Як встановити</h2>'+
  '<div class="inst-blk"><h3 class="sub-h">Що знадобиться</h3><ul class="need-row">'+g.need.map(n=>'<li>'+n+'</li>').join('')+'</ul></div>'+
  '<div class="inst-blk"><h3 class="sub-h">Крок за кроком</h3>'+timeline(g)+'</div></div></div></section>'+
 
 '<section class="pg-sec"><div class="wrap">'+RIP+'<div class="gp-duo"><div><h2>Трохи історії</h2><div class="story-txt">'+g.story.map((p,i)=>'<p'+(i?' class="st-more"':'')+'>'+p+'</p>').join('')+(g.story.length>1?'<button class="st-tgl" type="button" onclick="this.parentNode.classList.add(\'open\')">Далі</button>':'')+(POSTS.find(x=>x.game===g.id)?'<p><a class="more" href="#stories/'+POSTS.find(x=>x.game===g.id).slug+'">Читати історію →</a></p>':'')+'<p class="muted">Інші назви: '+g.orig+', '+g.alt+'.</p></div></div><div><h2>FAQ для душніл</h2>'+faq(g.faq)+'</div></div></div></section>'+
 '<section class="pg-sec rel-sec"><div class="wrap"><p class="rel-kick">Далі по цвинтарю</p><h2>Ще одна воскресла</h2><div class="rel">'+other.map(cardOf).join('')+'</div></div></section>'+footer();
 const url='/uk/'+g.id+'/';
 return {html,title:g.h1+' — Deadware',desc:g.lead.slice(0,155),url,
  ld:[{'@context':'https://schema.org','@type':'SoftwareApplication',name:g.orig+' для Mac (Deadware)',alternateName:[g.title,g.alt],applicationCategory:'GameApplication',operatingSystem:'macOS (Apple Silicon)',inLanguage:['uk','en'],offers:{'@type':'Offer',price:'0',priceCurrency:'USD'},url:SITE+url,image:SITE+'/img/'+g.img,isBasedOn:{'@type':'VideoGame',name:g.orig,datePublished:String(g.year)}},
   {'@context':'https://schema.org','@type':'HowTo',name:'Як встановити '+g.title+' на Мак',step:g.steps.map((s,i)=>({'@type':'HowToStep',position:i+1,name:s[0],text:s[1]}))},
   crumbLD([['Всі ігри','/uk/games/'],[g.title,url]]),faqLD(g.faq)],after:()=>{initSliders();document.querySelectorAll('.shot-th button').forEach(b=>b.addEventListener('click',()=>{const fig=b.closest('.wrap').querySelector('.cmp'),im=fig.querySelector('.cmp-after');b.parentNode.querySelectorAll('button').forEach(x=>x.setAttribute('aria-selected',x===b));im.addEventListener('load',()=>drawBefore(fig),{once:true});im.src=IMG+b.dataset.shot;}));}};
}

/* ---------- catalogue ---------- */
function gamesPg(){
 const html=header('games')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Всі ігри']])+'<h1>Всі ігри</h1><p class="lead">Ігри, які давно мали б лежати в цифровій могилі, а натомість живуть на Маку. Кожна збирається з твоєї копії.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="cat">'+DB.map(cardOf).join('')+'</div></div></section>'+footer();
 return {html,title:'Всі ігри на Мак — Deadware',desc:'Старі ігри, які тепер працюють на Маку як звичайні програми: Герої Меча і Магії IV, Гаррі Поттер і Таємна кімната, Володар перснів: Повернення короля.',url:'/uk/games/',
  ld:[{'@context':'https://schema.org','@type':'CollectionPage',name:'Всі ігри — Deadware',mainEntity:{'@type':'ItemList',itemListElement:DB.map((g,i)=>({'@type':'ListItem',position:i+1,name:g.title,url:SITE+'/uk/'+g.id+'/'}))}},crumbLD([['Всі ігри','/uk/games/']])]};
}


/* v77: visual jokes — helpers */
const RIP=`<svg class="rip" viewBox="0 0 560 44" aria-hidden="true"><g stroke="#c1121f" stroke-width="2" fill="none"><path d="M10 14H240"/><path d="M320 14H550"/></g><path class="drip" d="M118 14v7a3 3 0 0 0 6 0v-7z"/><path class="drip" d="M402 14v12a3 3 0 0 0 6 0V14z"/><path class="drip" d="M196 14v4a2.5 2.5 0 0 0 5 0v-4z"/><g transform="translate(280 16) scale(.42)" fill="none" stroke="#c1121f" stroke-width="6"><path d="M-30 40L0 -36L30 40"/><circle cy="-40" r="6"/><path d="M-44 2L0 44L44 2"/></g></svg>`;
const pull=(t,src)=>'<blockquote class="pull">'+t+(src?'<small>'+src+'</small>':'')+'</blockquote>';
const DOODLE={
 bulb:['Лампочка. Причина смерті — русскіє.',`<svg viewBox="0 0 140 190" role="img" aria-label="Перегоріла лампочка з хрестиками замість очей"><path d="M70 0v28" stroke="#3c3c40" stroke-width="3"/><rect x="52" y="28" width="36" height="26" rx="4" fill="#2a2a2d" stroke="#3c3c40" stroke-width="2"/><path d="M54 36h32M54 44h32" stroke="#3c3c40" stroke-width="2"/><path d="M50 56C14 74 10 130 44 152h52c34-22 30-78-6-96z" fill="#141416" stroke="#f4f1e8" stroke-width="3"/><path class="bulb-fil" d="M60 58v26l6 8-6 8 6 8M80 58v26l-5 8" fill="none" stroke-width="3"/><g stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"><path d="M46 104l12 12M58 104l-12 12M82 104l12 12M94 104l-12 12"/></g><path d="M58 134q12-8 24 0" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"/><path d="M76 136v10a4 4 0 0 0 8 0v-8" fill="#c1121f"/><path d="M44 152h52l-4 14H48z" fill="#2a2a2d" stroke="#3c3c40" stroke-width="2"/><ellipse cx="70" cy="184" rx="44" ry="5" fill="#000" opacity=".5"/></svg>`],
 yasha:['Яша. Ножі гострить сам.',`<svg viewBox="0 0 170 180" role="img" aria-label="Агент Яша, робот з ножем"><path d="M62 18l-8-14M108 18l8-14" stroke="#3c3c40" stroke-width="3"/><circle cx="54" cy="4" r="4" fill="#c1121f"/><circle cx="116" cy="4" r="4" fill="#c1121f"/><rect x="34" y="18" width="102" height="86" rx="14" fill="#18181a" stroke="#f4f1e8" stroke-width="3"/><rect class="ya-eye" x="56" y="46" width="18" height="18" rx="3" fill="#c1121f"/><path d="M96 56h20" stroke="#c1121f" stroke-width="5" stroke-linecap="round"/><path d="M60 84q25 12 50 0" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"/><path d="M70 86v6M84 89v6M98 87v6" stroke="#f4f1e8" stroke-width="2"/><rect x="58" y="104" width="54" height="56" rx="8" fill="#141416" stroke="#3c3c40" stroke-width="2"/><text x="85" y="138" text-anchor="middle" font-family="Metal Mania,serif" font-size="16" fill="#3c3c40">AI</text><path d="M112 120l26-8" stroke="#3c3c40" stroke-width="6" stroke-linecap="round"/><rect x="130" y="102" width="14" height="22" rx="3" fill="#2a2a2d" stroke="#3c3c40" stroke-width="2" transform="rotate(-18 137 113)"/><path d="M136 102L150 36l6 4-10 64z" fill="#d9d6cc" stroke="#f4f1e8" stroke-width="1.5"/><clipPath id="yk"><path d="M136 102L150 36l6 4-10 64z"/></clipPath><rect class="ya-glint" clip-path="url(#yk)" x="120" y="30" width="6" height="80" transform="rotate(14 140 70)"/><ellipse cx="85" cy="174" rx="48" ry="5" fill="#000" opacity=".5"/></svg>`],
 tv:['Експонат, 2002. Руками не чіпати.',`<svg viewBox="0 0 180 200" role="img" aria-label="Старий телевізор, під ним приставка за мотузкою"><path d="M70 22L52 2M110 22L130 2" stroke="#3c3c40" stroke-width="3"/><rect x="18" y="22" width="144" height="104" rx="12" fill="#18181a" stroke="#f4f1e8" stroke-width="3"/><rect class="tv-scr" x="32" y="34" width="100" height="80" rx="16" stroke="#3c3c40" stroke-width="2"/><path d="M44 52h50M44 64h70M44 76h34" stroke="#3b5a46" stroke-width="3" opacity=".7"/><circle cx="148" cy="52" r="5" fill="#3c3c40"/><circle cx="148" cy="70" r="5" fill="#3c3c40"/><rect x="40" y="140" width="100" height="26" rx="4" fill="#141416" stroke="#3c3c40" stroke-width="2"/><circle cx="90" cy="153" r="7" fill="#1e3d22" stroke="#7bd36b" stroke-width="2"/><path d="M8 150q82 40 164 0" fill="none" stroke="#c1121f" stroke-width="3"/><rect x="4" y="138" width="8" height="54" fill="#2a2a2d"/><rect x="168" y="138" width="8" height="54" fill="#2a2a2d"/><g transform="rotate(-6 90 178)"><rect x="56" y="168" width="68" height="20" fill="#f4f1e8"/><text x="90" y="182" text-anchor="middle" font-family="PT Mono,monospace" font-size="10" fill="#09090a">НЕ ЧІПАТИ</text></g></svg>`],
 helm:['Шолом героя. Власник прокачувався до останнього.',`<svg viewBox="0 0 180 200" role="img" aria-label="Пом’ятий лицарський шолом на землі, поруч встромлений меч"><path d="M14 176h152" stroke="#3c3c40" stroke-width="3"/><g transform="rotate(14 132 96)"><path d="M132 20v126" stroke="#f4f1e8" stroke-width="5"/><path d="M114 48h36" stroke="#f4f1e8" stroke-width="5"/><circle cx="132" cy="16" r="6" fill="#c1121f"/></g><path d="M34 172v-62q0-48 46-48t46 48v62z" fill="#18181a" stroke="#f4f1e8" stroke-width="3"/><path d="M46 112h68" stroke="#09090a" stroke-width="9"/><path d="M48 132h12M64 132h12M80 132h12M96 132h12M48 148h12M64 148h12M80 148h12M96 148h12" stroke="#3c3c40" stroke-width="3"/><path d="M80 62v-16q12-14 30-10" fill="none" stroke="#c1121f" stroke-width="4"/><path d="M58 80l10 10M98 74l-6 12" stroke="#3c3c40" stroke-width="3"/><g transform="rotate(-5 90 190)"><rect x="50" y="180" width="80" height="16" fill="#f4f1e8"/><text x="90" y="192" text-anchor="middle" font-family="PT Mono,monospace" font-size="9" fill="#09090a">РІВЕНЬ 30</text></g></svg>`]
};
const doodle=(k,l,c)=>'<figure class="doodle'+(l?' l':'')+'" aria-hidden="false">'+DOODLE[k][1]+'<figcaption>'+(c||DOODLE[k][0])+'</figcaption></figure>';
const ico=d=>'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">'+d+'</svg>';
const ICO={
 gen:ico('<path d="M5 21L12 4l7 17"/><circle cx="12" cy="3" r="1.5"/><path d="M3 12l9 9 9-9"/>'),
 legal:ico('<path d="M12 3v18M7 21h10M4 7h16"/><path d="M4 7l-2.5 6a2.5 2.5 0 0 0 5 0zM20 7l-2.5 6a2.5 2.5 0 0 0 5 0z"/>'),
 mac:ico('<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>'),
 install:ico('<path d="M14 3l7 7-3 1-5-5zM15 8L5 18"/><path d="M3 21l3-1-2-2z"/>'),
 games:ico('<path d="M6 8h12a4 4 0 0 1 4 4l-1 5a2.5 2.5 0 0 1-4.5 1L15 16H9l-1.5 2A2.5 2.5 0 0 1 3 17l-1-5a4 4 0 0 1 4-4z"/><path d="M7 11v4M5 13h4"/><circle cx="16" cy="12" r=".8"/><circle cx="18" cy="14" r=".8"/>'),
 bugs:ico('<ellipse cx="12" cy="14" rx="5" ry="6"/><path d="M12 8V20M9 6l1.5 2M15 6l-1.5 2M7 12H3M21 12h-4M7 17l-3 2M17 17l3 2M7 9L4 7M17 9l3-2"/>'),
 ports:ico('<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19l-3-3z"/><path d="M9 16l-5 5M3 20l1 1"/>'),
 quill:ico('<path d="M20 3C10 5 6 12 5 20M20 3c-1 7-5 11-11 12"/><path d="M5 20l-2 1"/>'),
 mic:ico('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>')
};
const STAMP={'Можна задонатити?':'НІ, Я ГОРДИЙ','Скільки це коштує?':'0 ₴','Можна вам задонатити?':'НІ','Можна замовити гру?':'НЕ РЕСТОРАН','А якщо там написано Intel?':'R.I.P.','Мак каже, що програму не можна відкрити. Ви вірус?':'НЕ ВІРУС','Мої старі збереження підійдуть?':'НІ'};
const stampify=h=>h.replace(/<summary>([^<]+)<\/summary>/g,(m,q)=>STAMP[q]?'<summary>'+q+'<i class="stamp" aria-hidden="true">'+STAMP[q]+'</i></summary>':m);
{const _hp=homePage;homePage=function(){return stampify(_hp.apply(this,arguments));};} /* v116: stamp on the home FAQ */

/* ---------- about ---------- */
const row=(h,t,side)=>'<div class="ab-row"><div class="ab-txt"><h3>'+h+'</h3>'+t+'</div><div class="ab-side">'+side+'</div></div>';
function aboutPg(){
 const html=header('about')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Про Deadware']])+'<h1>Про Deadware</h1><p class="lead">Ми повертаємо до життя ігри, які індустрія поховала, а ми — ні. На Маках і українською.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="essay">'+
 '<p class="drop">Почнімо з чесного: це не бізнес. Тут нема донатів, реклами, «преміуму» і замовлень. Є чоловік у відпустці, якому стало нудно, і він вирішив розважитися так, як розважаються люди з надлишком смаку й дефіцитом сну.</p>'+
 row('Звідки ми','<p>Наше покоління бачило приставки переважно в журналах. Ті небагато щасливців, у кого вони були, грали в переклади від північних сусідів, які вже тоді вважали нас молодшими братами — з усією «братньою» любов’ю, що з цього випливає. Ми виросли, вивчили англійську, купили макбуки й навчилися зневажати погану типографіку. Тепер виправляємо дитинство заднім числом.</p>',pull('Коли я був малий, моєю приставкою був журнал про приставки.'))+
 row('Чому Мак','<p>Бо ті самі сусіди методично вимикають нам світло. А макбук на процесорі Apple — тиха й ощадлива машина, яка не виє, як генератор у дворі, і не просить окремої розетки.</p><p class="punch">Ідеальна консоль для країни, яка навчилася жити в темряві й не втратила почуття гумору.</p>',doodle('bulb'))+
 row('Хто це робить','<p>Один шкіряний мішок, який, будемо відверті, не програміст, і команда AI-агентів. Агентам теж не платять, і паспорти в них, здається, забрали. Ваші листи про баги читають саме вони — у порядку наявності токенів і настрою.</p><p>Результат поки такий: «Таємна кімната» пройшла шлях від першого рядка коду до бети, в яку можна грати, приблизно за 29 годин. З того досвіду ми зібрали власний інструмент для портування з Xbox: 66 правил і 63 граблі, на які вже не наступимо. Інших, хто переносить ігри з першого Xbox на Мак так само, ми не знайшли — тож ми, схоже, одні з перших.</p>',pull('29 годин. Без сну, без зарплати, без жалю.','АІ-агент «Вітюша» про розробку порту «Таємної кімнати»'))+
 row('Хто ще може','<p>Якщо ти вмієш портувати, перекладати чи ламати ігри тестами — тобі <a href="#enthusiasts">сюди</a>. Перекладачам доведеться спершу перемогти нашого агента локалізації Яшу в чесному бою на ножах. Він не програв жодного разу.</p>',doodle('yasha'))+
 '<p class="muted" style="margin-top:34px">Правовласникам: '+MAIL+'. Відповідаємо швидше, ніж на баги.</p>'+
 '</div></div></section>'+footer();
 return {html,title:'Про Deadware — старі ігри на Маках, українською',desc:'Deadware — некомерційний проєкт: старі ігри як звичайні програми для Мака. Безкоштовно, українською, без донатів і реклами.',url:'/uk/about/',
  ld:[{'@context':'https://schema.org','@type':'AboutPage',name:'Про Deadware',mainEntity:{'@type':'Organization',name:'Deadware',url:SITE,email:MAIL,description:'Некомерційний фанатський проєкт: старі ігри як рідні програми для Маків.'}},crumbLD([['Про Deadware','/uk/about/']])]};
}

/* ---------- how it works ---------- */
function howPg(){
 const steps=[['Купуєш гру.','Або дістаєш з шафи старий диск. Можна, звісно, пошаритися по, кхм, темних куточках інтернету — ми це засуджуємо і жодної відповідальності не несемо.'],['Качаєш наш інсталятор.','Це рецепт, а не гра: файлів гри в ньому нема, бо ми не пірати. Де ти їх візьмеш — уже не наша проблема.'],['Інсталятор перекладає гру.','Переписує її рідною мовою Мака.'],['Мак збирає програму.','В середньому — до години, залежно від гри. Сидіти поруч не треба.'],['На робочому столі — іконка.','Обізяна клацає — обізяна грає.']];
 const pros=[['Плавно','60 кадрів, а не слайд-шоу.'],['Красивіше, ніж було','широкий екран, Retina, нові текстури.'],['Більше, ніж було','українська мова й сучасна камера. У 2002-му про таке тільки мріяли.'],['Нуль налаштувань','без прошивок і форумів о третій ночі.'],['Як рідна','геймпад чи мишка й повний екран, усе як у звичайній програмі.']];
 const html=header('how')+
 '<section class="pg-hero how-hero"><div class="wrap">'+crumbs([['Як це працює']])+'<h1>Як це працює</h1><p class="lead">Стара гра розмовляє мовою старої приставки, а Мак цієї мови не знає. <b>Ми</b> один раз перекладаємо всю гру, як книжку, — і Мак читає її сам.</p></div></section>'+
 '<section class="pg-sec how-sec"><div class="wrap"><h2>Що відбувається в тебе</h2>'+stepsRail(steps)+'</div></section>'+
 '<section class="pg-sec how-sec"><div class="wrap how-grid"><div><h2>Що ти з цього маєш</h2><ul class="pros">'+pros.map(p=>'<li><b>'+p[0]+'</b> — '+p[1]+'</li>').join('')+'</ul></div><div>'+
 '<p class="how-why"><b>Чому гра збирається саме в тебе?</b> Бо в інсталяторі нема жодного шматка чужої гри — лише рецепт. Продукти твої, ми тільки диктуємо, що різати.</p>'+
 '<p class="how-why"><b>Для душніл.</b> Це статична рекомпіляція. Машинний код гри написаний для старого процесора, і ми перекладаємо його на мову процесорів Apple весь і заздалегідь, а не по шматку під час гри. Графіку, яка зверталась до Direct3D, переписуємо на Metal. Потім компілятор Apple (ті самі «інструменти розробника») збирає з цього рідну програму. Під час гри між нею і Маком нема жодного перекладача.</p></div></div></section>'+footer();
 return {html,title:'Як це працює — Deadware',desc:'Як старі ігри стають звичайними програмами для Мака: просте пояснення без технічних слів, крок за кроком.',url:'/uk/how/',
  ld:[{'@context':'https://schema.org','@type':'HowTo',name:'Як стара гра стає програмою для Мака',step:steps.map((s,i)=>({'@type':'HowToStep',position:i+1,name:s[0],text:s[1]}))},crumbLD([['Як це працює','/uk/how/']])]};
}

/* ---------- stories ---------- */
function storiesPg(){
 const html=header('stories')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Потішні історії']])+'<h1>Потішні історії</h1><p class="lead">Що насправді було з іграми, у які ти грав, і як у них грати тепер. Без прес-релізів і ностальгійних соплів.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="posts">'+POSTS.slice().sort((a,b)=>a.date<b.date?1:-1).map(p=>'<a class="post" href="#stories/'+p.slug+'"><img src="'+IMG+p.img+'" alt="" loading="lazy"><div class="post-b"><span class="meta">'+dUA(p.date)+'</span><h3>'+p.title+'</h3><p>'+p.dek+'</p></div></a>').join('')+
 '</div></div></section>'+footer();
 return {html,title:'Потішні історії — Deadware',desc:'Історії про старі ігри, дитинство без приставок і гру на макбуці без світла.',url:'/uk/stories/',
  ld:[{'@context':'https://schema.org','@type':'Blog',name:'Потішні історії — Deadware',blogPost:POSTS.map(p=>({'@type':'BlogPosting',headline:p.title,datePublished:p.date,url:SITE+'/uk/stories/'+p.slug+'/'}))},crumbLD([['Потішні історії','/uk/stories/']])]};
}
function postPg(p){
 const g=G[p.game],more=POSTS.filter(x=>x!==p);
 const html=header('stories')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Потішні історії','#stories'],[p.title]])+'<div class="article"><span class="meta">'+dUA(p.date)+'</span><h1 style="margin-top:10px">'+p.title+'</h1></div></div></section>'+
 '<section class="pg-sec" style="padding-top:0"><div class="wrap"><article class="article"><img src="'+IMG+p.img+'" alt="'+g.title+' на Маку"><p class="lede">'+p.dek+'</p>'+p.body.map((t,i)=>(i===0&&p.doodle?doodle(p.doodle,0,p.cap):'')+'<p>'+t+'</p>'+(i===2&&p.pull?pull(p.pull):'')).join('')+
 '<p class="post-end"><a href="#game/'+g.id+'">'+g.title+' на Маку →</a></p></article></div></section>'+
 '<section class="pg-sec"><div class="wrap"><h2>Ще почитати</h2><div class="posts">'+more.map(x=>'<a class="post" href="#stories/'+x.slug+'"><div class="post-b"><span class="meta">'+dUA(x.date)+'</span><h3>'+x.title+'</h3><p>'+x.dek+'</p></div></a>').join('')+'</div></div></section>'+footer();
 const url='/uk/stories/'+p.slug+'/';
 return {html,title:p.title+' — Deadware',desc:p.dek.slice(0,155),url,
  ld:[{'@context':'https://schema.org','@type':'BlogPosting',headline:p.title,datePublished:p.date,author:{'@type':'Organization',name:'Deadware'},image:SITE+'/img/'+p.img,about:{'@type':'VideoGame',name:g.orig},mainEntityOfPage:SITE+url,inLanguage:'uk'},crumbLD([['Потішні історії','/uk/stories/'],[p.title,url]])]};
}

/* ---------- FAQ ---------- */
function faqPg(){
 const all=[];FAQ_ALL.forEach(g=>all.push.apply(all,g[2]));
 const html=header('faq')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Відповіді на тупі питання']])+'<h1>Відповіді на тупі питання</h1><p class="lead">Тупих питань не буває. Бувають питання, які ми вже чули сто разів. Ось вони.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="faq-cols"><div class="faq-side"><input class="faq-search" type="search" placeholder="Шукати питання…" aria-label="Шукати питання">'+
 '<nav class="faq-nav">'+FAQ_ALL.map(g=>'<a href="#faq/'+g[1]+'">'+ICO[g[1]]+g[0]+'</a>').join('')+'</nav></div><div class="faq-main">'+
 FAQ_ALL.map(g=>'<div class="faq-grp" id="f-'+g[1]+'"><h2>'+ICO[g[1]]+g[0]+'</h2>'+stampify(faq(g[2]))+'</div>').join('')+'</div></div></div></section>'+footer();
 return {html,title:'Відповіді на тупі питання — Deadware',desc:'Чи підійде мій Мак, чи це законно, як встановити й скільки коштує: усі відповіді про ігри Deadware на Маку.',url:'/uk/faq/',
  ld:[faqLD(all),crumbLD([['Відповіді на тупі питання','/uk/faq/']])],after:sub=>{const t=sub&&document.getElementById('f-'+sub);if(t)t.scrollIntoView();}};
}
document.addEventListener('input',e=>{if(!e.target.classList||!e.target.classList.contains('faq-search'))return;const q=e.target.value.trim().toLowerCase();
 document.querySelectorAll('.faq-grp').forEach(g=>{let any=0;g.querySelectorAll('details').forEach(d=>{const m=!q||d.textContent.toLowerCase().includes(q);d.hidden=!m;if(m)any=1;if(q&&m)d.open=true;});g.hidden=!any;});});

/* ---------- enthusiasts ---------- */
function enthPg(){
 const html=header('enthusiasts')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Для ентузіастів']])+'<h1>Для ентузіастів</h1><p class="lead">Якщо ти з тих, хто розбирав пульт від телевізора, щоб подивитися, що всередині, — у нас для тебе є робота. Неоплачувана, зате цікава.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="en-grid">'+
 [['ports','Порти','Хочеш сам воскресити гру? Віддамо все, що маємо: власний інструмент для портування з Xbox, 66 правил і 63 граблі, на які ми вже наступили обличчям.'],
  ['quill','Переклад','Вважаєш, що можна перекласти краще? Можливо. Але спершу — бій на ножах з нашим агентом локалізації Яшею. Переможеш — твій текст піде в гру.'],
  ['games','Історії','Знаєш про стару гру щось, чого не знає інтернет: вирізаний рівень, дивний баг, що було в коробці? Розкажи — може вийти потішна історія.'],
  ['bugs','Тести','Любиш ламати речі? Грай і пиши нам, що розвалилось. Якщо додаси відео — тебе полюблять навіть агенти, хоч вони й не вміють.']].map(c=>'<div class="en-card"><h3>'+ICO[c[0]]+c[1]+'</h3><p>'+c[2]+'</p></div>').join('')+
 '</div><div class="en-cta"><p>Пиши на <a href="mailto:'+MAIL+'">'+MAIL+'</a> або відкривай обговорення на <a href="'+GH_H4+'" target="_blank" rel="noopener">GitHub</a>. Розкажи, що хочеш робити і з якою грою.</p><p class="muted">Попереджаємо чесно: відповідаємо не одразу. Це хобі, а не служба підтримки.</p></div></div></section>'+footer();
 return {html,title:'Для ентузіастів — Deadware',desc:'Порти, переклад, озвучка й тести: як долучитися до Deadware і допомогти повернути старі ігри на Мак.',url:'/uk/enthusiasts/',
  ld:[crumbLD([['Для ентузіастів','/uk/enthusiasts/']])]};
}

/* ---------- home: links to the new pages; no queue */
function homeHtml(){return homePage().replace(', і макбук не здихає за годину без світла.',', нові текстури — і жодних налаштувань.').replace(/<details class="faq"><summary>Коли наступна гра\?<\/summary>[\s\S]*?<\/details>/,'').replace(/<details class="faq"><summary>Чому не просто емулятор\?<\/summary>[\s\S]*?<\/details>/,'');} /* voice-ok: strips removed FAQ */
function homeFix(){
 const ids=['hp2','heroes4'];
 document.querySelectorAll('.gc-slide').forEach((s,i)=>{const a=s.querySelector('.btns a');if(a&&ids[i])a.href='#game/'+ids[i];});
 document.querySelectorAll('#games .card').forEach(c=>{const t=(c.querySelector('h3')||{}).textContent;const g=DB.find(x=>x.title===t);c.setAttribute('href',g?'#game/'+g.id:'#games');});
}
const homeSeo=()=>({title:'Deadware — старі ігри на Маку',desc:'Улюблені старі ігри як звичайні програми для Мака: безкоштовно, просте встановлення, краща графіка, українською.',url:'/uk/',
 ld:[{'@context':'https://schema.org','@type':'WebSite',name:'Deadware',url:SITE+'/uk/',inLanguage:'uk'},{'@context':'https://schema.org','@type':'Organization',name:'Deadware',url:SITE,email:MAIL}]});

let cur=null,last=null;
function route(){
 const h=location.hash.replace(/^#\/?/,''),a=h.split('/');let key=h,pg;
 if(a[0]==='game'&&!G[a[1]]){location.replace('#games');return;}
 if(a[0]==='game')pg=()=>gamePg(G[a[1]]);
 else if(a[0]==='games')pg=gamesPg;
 else if(a[0]==='about')pg=aboutPg;
 else if(a[0]==='how')pg=howPg;
 else if(a[0]==='stories'&&P[a[1]])pg=()=>postPg(P[a[1]]);
 else if(a[0]==='stories')pg=storiesPg;
 else if(a[0]==='faq'){pg=faqPg;key='faq';}
 else if(a[0]==='enthusiasts')pg=enthPg;
 else key='home';
 if(key!==cur){cur=key;
  if(pg){const r=pg();document.getElementById('app').innerHTML=r.html;last=r;setLD(r.ld,r.title,r.desc);if(r.after)r.after(a[1]);if(!(a[0]==='faq'&&a[1]))scrollTo(0,0);}
  else{document.getElementById('app').innerHTML=homeHtml();initSliders();initBall();homeFix();last=homeSeo();setLD(last.ld,last.title,last.desc);scrollTo(0,0);}
 } else if(a[0]==='faq'&&last&&last.after)last.after(a[1]);
}
removeEventListener('hashchange',render);
(function(){const h=(window.DW_ROUTE||''),a=h.split('/');let pg;if(a[0]==='game'&&G[a[1]])pg=()=>gamePg(G[a[1]]);else if(a[0]==='games')pg=gamesPg;else if(a[0]==='about')pg=aboutPg;else if(a[0]==='how')pg=howPg;else if(a[0]==='stories'&&P[a[1]])pg=()=>postPg(P[a[1]]);else if(a[0]==='stories')pg=storiesPg;else if(a[0]==='faq')pg=faqPg;else if(a[0]==='enthusiasts')pg=enthPg;if(pg){const r=pg();if(r.after&&a[0]!=='faq')r.after(a[1]);}else{initSliders();initBall();}})();
})();

;

(function(){var SVG='<svg class="franken" viewBox="0 0 1000 170" role="img" aria-label="Голову Франкенштейна б’є струмом">\n  <g stroke="#3c3c40" stroke-width="2"><rect x="54" y="66" width="12" height="104" fill="#121213"/><rect x="934" y="66" width="12" height="104" fill="#121213"/><\/g>\n  <circle class="fk-orb" cx="60" cy="56" r="13"/><circle class="fk-orb" cx="940" cy="56" r="13"/>\n  <path class="fk-arc" d="M73 56 L130 82 L168 60 L226 98 L274 76 L322 112 L372 90 L421 116"/>\n  <path class="fk-arc b" d="M73 56 L118 70 L176 90 L214 70 L268 104 L316 84 L364 118 L421 116"/>\n  <path class="fk-arc" d="M927 56 L870 82 L832 60 L774 98 L726 76 L678 112 L628 90 L579 116"/>\n  <path class="fk-arc b" d="M927 56 L882 70 L824 90 L786 70 L732 104 L684 84 L636 118 L579 116"/>\n  <g class="fk-head" stroke="#09090a" stroke-width="3" stroke-linejoin="round">\n    <rect x="472" y="140" width="56" height="30" class="fk-skin"/>\n    <path class="fk-skin" d="M438 40 H562 L568 138 Q500 160 432 138 Z"/>\n    <g fill="#c9c9cc"><rect x="418" y="108" width="18" height="14" rx="2"/><rect x="564" y="108" width="18" height="14" rx="2"/><\/g>\n    <path class="fk-hair" fill="#050505" stroke="#3c3c40" stroke-width="2" d="M430 26 H570 V58 L560 49 L549 59 L537 49 L525 59 L513 49 L501 59 L489 49 L477 59 L465 49 L453 59 L442 49 L430 58 Z"/>\n    <g fill="none" stroke-width="2.5"><path d="M462 72 H520"/><path d="M468 66 V78 M480 66 V78 M492 66 V78 M504 66 V78 M516 66 V78"/><\/g>\n    <path d="M452 84 H492 M508 84 H548" stroke-width="6"/>\n    <g class="fk-shut" fill="none"><path d="M458 98 H488 M512 98 H542"/><\/g>\n    <g class="fk-open"><circle cx="473" cy="99" r="9" fill="#f4f1e8"/><circle cx="527" cy="99" r="9" fill="#f4f1e8"/><circle cx="473" cy="99" r="2.5" fill="#09090a"/><circle cx="527" cy="99" r="2.5" fill="#09090a"/><\/g>\n    <path d="M500 100 L494 116 H504" fill="none" stroke-width="2.5"/>\n    <g fill="none" stroke-width="3"><path d="M474 128 H526"/><path d="M482 123 V133 M494 123 V133 M506 123 V133 M518 123 V133" stroke-width="2"/><\/g>\n  <\/g>\n<\/svg>';
function put(){var h=document.querySelector('#games .fk-slot'),w='beforeend';if(!h){h=document.querySelector('#games h2');w='afterend';}if(h&&!document.querySelector('#games .franken'))h.insertAdjacentHTML(w,SVG);}
put();new MutationObserver(put).observe(document.getElementById('app'),{childList:true});})();
