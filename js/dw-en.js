var GO={"heroes4": "/go/heroes4-en/", "rotk": "/go/rotk-en/", "hp2": "/go/hp2-en/"};
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
  ['hp2-burrow-en.jpg', 'No, it won’t run on an Intel Mac. Get yourself a proper Mac.'],
  ['hp2-knockturn-en.jpg', 'Yes, free. No, you don’t need to donate.'],
  ['h4-battle-en.jpg', 'An English version of Heroes is planned. When — ask the agents, they don’t sleep.'],
  ['rotk-gandalf-breach-en.jpg', 'An emulator? We don’t pretend to be an Xbox, we rewrite the game for the Mac.'],
  ['hp2-inventory-en.jpg', 'How long without power? Longer than your power bank can take your whining.'],
];

function ball() {
  return `<div class="ball-wrap">
    <div class="ball"><img class="ball-media" alt="" src="${IMG + ANSWERS[0][0]}"><div class="ball-fog"></div><div class="ball-shine"></div></div>
    <div class="ball-base"></div>
    <p class="ball-cap" aria-live="polite">${ANSWERS[0][1]}</p>
    <button class="btn btn-ghost ball-ask" type="button">Ask the ball</button>
    <p class="proto-note">Prototype: random video answers from the owner will spin here; for now — game screenshots.</p>
  </div>`;
}

function slider(img, before, after) {
  return `<figure class="cmp" data-img="${IMG + img}">
    <img class="cmp-after" src="${IMG + img}" alt="${after}">
    <canvas class="cmp-before" aria-label="${before}"></canvas>
    <div class="cmp-line"></div>
    <span class="cmp-tag cmp-tag-l">${before}</span><span class="cmp-tag cmp-tag-r">${after}</span>
    <input class="cmp-range" type="range" min="0" max="100" value="50" aria-label="Before and after comparison">
  </figure>
  <p class="proto-note">Prototype: “before” is simulated (4:3, low resolution); the site will have real frames from the original.</p>`;
}

const GAMES = [
  { id: 'hp2', title: 'Harry Potter and the Chamber of Secrets', img: 'hp2-burrow-en.jpg', badge: 'Playable', sub: 'Xbox 2002 → Mac. 60 fps, widescreen, HD.', note: 'Code not public yet' },
  { id: 'heroes4', title: 'Heroes of Might and Magic IV', img: 'h4-map-en.jpg', badge: 'Playable', sub: 'Both expansions. In Ukrainian.', note: 'UA ✓' },
  { id: 'rotk', title: 'The Lord of the Rings: The Return of the King', img: null, badge: 'Raising it', sub: 'Levels already play in tests.', note: 'In development', dev: true },
];
const QUEUE = ['NFS Underground 2', 'BFME', 'Matrix: Path of Neo', 'Prisoner of Azkaban', '007 Nightfire', 'The Warriors', 'Constantine', 'KOTOR', 'Manhunt', 'Max Payne 2'];

const FAQ_HOME = [
  ['Is this even legal?', 'We don’t hand out games. You take your own copy, the port builds a native Mac app from it. If Warner Bros lawyers do show up in trench coats and dark glasses — we’ll take it down within a day, and the pig will hang around a bit longer.'],
  ['Why not just an emulator?', 'An emulator pretends to be an Xbox. We rewrite the game’s code for Apple Silicon: 60 fps, widescreen, and the MacBook doesn’t die within an hour without power.'],
  ['Will it run on an Intel Mac?', 'No. Only M1 and newer. Yes, it hurts. No, we won’t change our minds.'],
  ['Can I donate?', 'No. Want to help — tell a friend or star us on GitHub. Nice for us, free for you.'],
  ['Why Ukrainian?', 'Because we didn’t find our language in a dumpster.'],
  ['When’s the next game?', 'When it’s ready.'],
];
const FAQ_GAME = [
  ['Do I need to buy the game?', 'Yes, the Complete Edition on GOG. The port contains no game files — it builds the game from your installer.'],
  ['How long does it take to install?', 'About forty minutes, ten of which need you. The rest of the time you can stare at the pig.'],
  ['Wasn’t there a Mac version back in 2002?', 'There was, for PowerPC. On modern Macs it’s dead for good. This one lives.'],
];

function faq(items) {
  return items.map(([q, a]) => `<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join('');
}

function header(active) {
  return `<header class="top"><div class="wrap top-in">
    <a class="mini-logo" href="#home">dead<span>ware</span></a>
    <nav><a href="#home"${active === 'home' ? ' aria-current="page"' : ''}>Games</a><a href="#game"${active === 'game' ? ' aria-current="page"' : ''}>Heroes IV</a><a href="#home">FAQ</a></nav>
    <span class="lang"><b>UK</b> / EN</span></div></header>`;
}

function footer() {
  return `<footer class="foot"><div class="wrap">
    <p>Logos and box art belong to their owners. We make no money and claim no rights. There are no game files here: every port is built from your own copy.</p>
    <p>Deadware is a fan project of one leather bag and a pack of AI agents. © 2026</p></div></footer>`;
}

function homePage() {
  const cards = GAMES.map(g => `<a class="card${g.dev ? ' card-dev' : ''}" href="${g.id === 'heroes4' ? '#game' : '#home'}">
      ${g.img ? `<img src="${IMG + g.img}" alt="${g.title} on Mac">` : '<div class="card-ph">☠ still in the grave</div>'}
      <div class="card-b"><span class="badge${g.dev ? ' badge-dev' : ''}">${g.badge}</span><h3>${g.title}</h3><p>${g.sub}</p><small>${g.note}</small></div></a>`).join('');
  return `${header('home')}
  <section class="hero"><div class="wrap">
    <div class="hero-logo">${logoSVG()}</div>
    <h1>Old games rise from the dead. On your Mac.</h1>
    <p class="lead">Ports from the original Xbox and old PCs — native apps for Apple Silicon. Your copy of the game — our black magic.</p>
    <div class="btns"><a class="btn" href="#games">Pick a victim</a><a class="btn btn-ghost" href="#about">What is this graveyard</a></div>
  </div></section>
  <section id="about" class="sec manifesto"><div class="wrap">
    <h2>Kitties, this project is for you</h2>
    <p>Some people had an Xbox as kids. We had a “Heroes” disc in a translation better left unmentioned. Now we have a MacBook that lasts a few hours without power while Russia wages war on our substations. So one leather bag and a pack of unpaid AI agents are moving old games to the Mac — in Ukrainian.</p>
  </div></section>
  <section id="games" class="sec"><div class="wrap">
    <h2>Risen</h2>
    <div class="cards">${cards}</div>
    <p class="queue"><span>Up for exhumation:</span> ${QUEUE.map(q => `<i>${q}</i>`).join(' ')}</p>
  </div></section>
  <section class="sec split"><div class="wrap split-in">
    <div><h2>Ask the ball</h2><p class="muted">An answer to your dumb question. No sign-up, no SMS.</p>${ball()}</div>
    <div class="pig-col"><h2>How much does it cost?</h2><p class="muted">For you — zero. For us — this much, plus some nerves.</p>${pigSVG('$398 spent')}</div>
  </div></section>
  <section class="sec"><div class="wrap narrow"><h2>Questions you’ll ask anyway</h2>${faq(FAQ_HOME)}</div></section>
  ${footer()}`;
}

function gamePage() {
  return `${header('game')}
  <section class="hero hero-game"><div class="wrap">
    <p class="kicker">Windows → Mac · Playable</p>
    <h1>Heroes of Might and Magic IV on Mac</h1>
    <p class="lead">“Heroes IV” with both expansions — a native app for M1–M4. From your GOG copy.</p>
    <div class="btns"><a class="btn" href="#game">Ukrainian version</a><a class="btn btn-ghost btn-soon" href="#game">English version</a></div>
  </div></section>
  <section class="sec"><div class="wrap">
    <h2>Before → after</h2>
    ${slider('heroes4-map.jpg', '2002 · 800×600', 'Mac · widescreen, Retina')}
  </div></section>
  <section class="sec"><div class="wrap two">
    <div><h2>What’s inside</h2><ul class="facts">
      <li>A native app for Apple Silicon</li>
      <li>Base game + The Gathering Storm + Winds of War</li>
      <li>Ukrainian version</li>
      <li>Widescreen, Retina, smoothing on F10</li>
      <li>One-command install from the GOG installer, ~40 min</li></ul></div>
    <div><h2>History</h2><p>2002, the 3DO studio is living out its last months. “Heroes IV” comes out raw, gets slammed for everything — and it’s exactly the game a whole generation in Ukraine spent a winter on, on pirated discs. Twenty-odd years later the game finally speaks Ukrainian and runs on a Mac that isn’t afraid of blackouts.</p></div>
  </div></section>
  <section class="sec"><div class="wrap narrow"><h2>Questions</h2>${faq(FAQ_GAME)}</div></section>
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
var NAV='<nav><a href="#games">Games</a><a href="#games">How it works</a><a href="#about">About Deadware</a><a href="#stories">Funny stories</a><a href="#faq">Answers to dumb questions</a><a href="#enthusiasts">For enthusiasts</a></nav>';
/* v117: UA/EN switch keeps the current route */document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a.lang-sw');if(a&&location.hash)a.href=a.getAttribute('href').split('#')[0]+location.hash;},true);
header=function(a){return _header(a).replace('<div class="wrap top-in">','<div class="wrap top-in"><a class="brand" href="#home">'+logoSVG()+'<span class="dw-glow" aria-hidden="true">DEADWARE</span><span class="dw-word" aria-hidden="true">DEADWARE</span></a>').replace(/<nav>[\s\S]*?<\/nav>/,NAV).replace(/<span class="lang">[\s\S]*?<\/span>/,'<span class="lang"><a class="lang-sw" href="index.html" lang="uk" hreflang="uk">UA</a> / <b>EN</b></span>');};
var HOW='<section id="how" class="sec"><div class="wrap"><h2>How it works</h2><ol class="how">'+
 '<li><b>Your copy of the game.</b> A disc or an image you already own. We don’t hand out game files.</li>'+
 '<li><b>The port from GitHub.</b> Download the release: it builds the game from your copy into a native app for Apple Silicon Macs.</li>'+
 '<li><b>An icon on your desktop.</b> Launch it and play: 60 fps, widescreen, even during a blackout.</li></ol></div></section>';
var SLIDES=[
 {mark:'Harry Potter',tag:'and the Chamber of Secrets',img:'hp2-burrow-en.jpg',h:'The Chamber of Secrets has opened on the Mac',sub:'Xbox 2002 → Apple Silicon',body:'The same Hogwarts, except now it lives on your MacBook longer than Lockhart holds on to his memory.',b:[['Game page','#game']],
  done:[['A native Mac app','The game was rewritten for the Mac once, so it opens from an icon like any other app.'],['60 fps, widescreen','16:10 picture, rendered at up to ×4 (about 3072×1920) on Retina.'],['Any gamepad','Xbox, PlayStation or Switch Pro. The game was made for sticks, so we’re not bending it to a keyboard.'],['A modern camera','Free camera on the right stick, skippable videos and cutscenes.']]},
 {mark:'Heroes of Might and Magic IV',tag:'both expansions',img:'h4-map-en.jpg',h:'The Heroes have risen from the grave',sub:'PC 2002 → Apple Silicon',body:'Take turns till dawn: the map now updates 60 times a second, not 20.',b:[['Game page','#game']],
  done:[['Both expansions','Complete Edition: the base game, The Gathering Storm and Winds of War.'],['Ukrainian version','Interface, campaigns and campaign voice-over.'],['Widescreen and Retina','A sharp picture, smoothing filter on F10.'],['Smooth animation','Smooth movement on the adventure map and in combat.'],['One-step setup','One command installs everything from the GOG installer, in about 40 minutes.']]}];
function showcase(){
 var bg='',sl='',th='',dn='';
 SLIDES.slice(0,1).forEach(function(g,i){var on=i===0?' on':''; /* v64: only the latest game */
  bg+='<div class="gc-bg'+(g.img?'':' ph')+on+'">'+(g.img?'<img src="'+IMG+g.img+'" alt="">':'')+'</div>';
  sl+='<div class="gc-slide'+on+'"><div class="gc-mark">'+g.mark+'<small>'+g.tag+'</small></div><h3>'+g.h+'</h3><p class="gc-body">'+g.body+'</p><div class="btns">'+
   g.b.map(function(x){return '<a class="gc-btn'+(x[2]?' ghost':'')+'" href="'+x[1]+'">'+x[0]+'</a>';}).join('')+'</div></div>';
  th+='<button class="gc-th'+on+'" type="button" aria-label="'+g.mark+'">'+(g.img?'<img src="'+IMG+g.img+'" alt="">':'<span>'+g.mark+'</span>')+'</button>';
  dn+='<ul class="gc-list'+(g.wait?' wait':'')+on+'">'+g.done.map(function(d){return '<li><b>'+d[0]+'</b>'+d[1]+'</li>';}).join('')+'</ul>';});
 return '<section id="showcase" class="sec gcs"><div class="wrap gcs-in"><p class="kicker gcs-k">Freshly dug up from the digital grave</p><div class="gc" aria-roledescription="carousel">'+bg+'<div class="gc-shade"></div><div class="gc-in">'+sl+'</div></div>'+
  '<aside class="gc-done"><h4>What we did to it</h4>'+dn+'</aside></div></section>';
}
var gcI=0,gcT=null;
function gcGo(n){var r=document.querySelector('.gcs');if(!r)return;var N=SLIDES.length;gcI=(n+N)%N;
 ['.gc-bg','.gc-slide','.gc-th','.gc-list'].forEach(function(q){r.querySelectorAll(q).forEach(function(e,i){e.classList.toggle('on',i===gcI);});});gcArm();}
function gcArm(){clearTimeout(gcT);if(document.querySelectorAll('.gcs .gc-slide').length<2)return;var r=document.querySelector('.gcs');if(r&&!r.classList.contains('paused'))gcT=setTimeout(function(){gcGo(gcI+1);},7000);}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.gc-th');if(!b)return;gcGo([].indexOf.call(b.parentNode.children,b));});
document.addEventListener('mouseover',function(e){var r=e.target.closest&&e.target.closest('.gcs');if(r&&!r.classList.contains('paused')){r.classList.add('paused');clearTimeout(gcT);}});
document.addEventListener('mouseout',function(e){var r=document.querySelector('.gcs.paused');if(r&&!(e.relatedTarget&&r.contains(e.relatedTarget))){r.classList.remove('paused');var a=r.querySelector('.gc-th.on');if(a){a.classList.remove('on');void a.offsetWidth;a.classList.add('on');}gcArm();}});
function card(g){return '<a class="card'+(g.dev?' card-dev':'')+'" href="'+(g.id==='heroes4'?'#game':'#games')+'">'+(g.img?'<img src="'+IMG+g.img+'" alt="'+g.title+' on Mac">':'<div class="card-ph">☠ still in the grave</div>')+
 '<div class="card-b"><span class="badge'+(g.dev?' badge-dev':'')+'">'+g.badge+'</span><h3>'+g.title+'</h3><p>'+g.sub+'</p><small>'+g.note+'</small></div></a>';}
/* v89: no «скоро»/process notes on cards */var CARD_TXT={hp2:'The Xbox version. 60 fps, widescreen, HD.',heroes4:'Both expansions, in Ukrainian.',rotk:'The Xbox version. 60 fps, your Mac’s native resolution.'};
/* v119: ROTK is playable (Head, 2026-11-06): a regular card, like HP2 */GAMES.forEach(function(g){if(g.id==='rotk'){g.img='rotk-helms-deep-en.jpg';g.badge='Playable';g.dev=false;}});
function cards6(){var all=GAMES.filter(function(g){return !g.dev;}).map(function(g){return Object.assign({},g,{sub:CARD_TXT[g.id]||g.sub,note:''});});return '<div class="cards cards2">'+all.map(card).join('')+'</div><div class="fk-slot"></div>';}
var VP=['A native Mac app','Free, from your own copy of the game','60 fps, widescreen, Retina','In Ukrainian and English'];
var HERO2='<section class="hero h2c"><div class="wrap"><div><h1>Old games rise from the dead. On your Mac.</h1>'+
 '<p class="lead">Ports of old games into native apps for Apple Silicon Macs.</p>'+
 '<ul class="vp">'+VP.map(function(v){return '<li>'+v+'</li>';}).join('')+'</ul></div></div></section>';
var HERO3='<section class="hero h2c"><div class="wrap"><div><h1 data-g="Old games rise from the dead.">Old games rise from the dead.</h1><p class="h2c-sub">Native ports of beloved games for MacBooks — free, easy to install, better graphics.</p><a class="gc-btn m-only" href="#games">Pick a game</a></div></div></section>';
var WHOIC={
 shoe:'<path d="M2 15.5V11l4-3 2.5 2L11 8l5 5h3.5a2.5 2.5 0 0 1 2.5 2.5V18H2z"/><path d="M2 15.5h20"/><circle cx="16" cy="16.8" r=".6"/>',
 disc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.4"/><path d="M12 6.5a5.5 5.5 0 0 1 5.5 5.5"/>',
 mac:'<rect x="4" y="5" width="16" height="11" rx="1.2"/><path d="M2 19h20"/>',
 bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/><path d="M3 3l18 18"/>'};
var ABOUT='<section id="about" class="sec manifesto"><div class="wrap"><h2>We raise them for our own people — the ones who</h2><ul class="vp who">'+
 [['shoe','Grew up so broke they dreamed of sneakers without holes instead of a console.'],
  ['disc','As kids drooled over pirated game discs, but those were expensive and in Russian.'],
  ['mac','Grew up into stuck-up hipsters with pretty MacBooks and every console under the sun.'],
  ['bulb','But then the Russians started bombing the power grid, and now a hot shower is a luxury. And electricity… what electricity? I never saw much of it until I was a grown-up.']].map(function(t){return '<li><span class="who-ic"><svg viewBox="0 0 24 24" aria-hidden="true">'+WHOIC[t[0]]+'</svg></span>'+t[1]+'</li>';}).join('')+
 '</ul><p class="who-out">Long story short, this project is for you, my young grandpas and grandmas.</p><div class="who-cta"><p>Grab your fucking energy-efficient MacBook and play, no power needed, the upgraded versions of games you couldn’t afford as kids.</p></div></div></section>';
var RIGHTS=['There are no game files here: every port is built from a copy the player bought.',
 'We make no money: no ads, no donations, no paid versions.',
 'Logos and box art belong to you. We claim no rights to them.',
 'Something wrong? Write to us first and we’ll take the material down within 24 hours.'];
var VIDEOS=[]; // owner's video answers go here, e.g. 'video/answer-1.mp4'; until then the ball shows game frames
var DIE='<svg viewBox="0 0 100 100" aria-hidden="true"><g stroke="#09090a" stroke-width="2" stroke-linejoin="round"><path d="M50 8L90 30L50 52L10 30Z" fill="#f4f1e8"/><path d="M10 30L50 52L50 95L10 72Z" fill="#d6cdb8"/><path d="M50 52L90 30L90 72L50 95Z" fill="#b3a88f"/></g><polygon points="67.2,39.5 62.2,41.6 56.3,42.9 50.0,43.4 43.7,42.9 37.8,41.6 32.8,39.5 28.9,36.7 26.5,33.5 25.7,30.0 26.5,26.5 28.9,23.3 32.8,20.5 37.8,18.4 43.7,17.1 50.0,16.6 56.3,17.1 62.2,18.4 67.2,20.5 71.1,23.3 73.5,26.5 74.3,30.0 73.5,33.5 71.1,36.7" fill="none" stroke="#c1121f" stroke-width="2.4"/><path d="M50.0 41.2 L38.0 20.9 L69.4 33.5 L30.6 33.5 L62.0 20.9 Z" fill="none" stroke="#c1121f" stroke-width="2.4" stroke-linejoin="miter"/><ellipse cx="21.2" cy="45.4" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="61.2" cy="55.3" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="21.2" cy="57.2" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="61.2" cy="67.3" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="21.2" cy="68.9" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="61.2" cy="79.4" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="38.8" cy="55.1" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="78.8" cy="45.6" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="38.8" cy="66.8" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="78.8" cy="57.7" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="38.8" cy="78.6" rx="3.6" ry="4.2" fill="#c1121f"/><ellipse cx="78.8" cy="69.7" rx="3.6" ry="4.2" fill="#c1121f"/></svg>';
function orb(){return '<div class="orb-wrap"><div class="ball orb"><img class="ball-media orb-img" alt="" hidden><video class="orb-vid" playsinline hidden></video><div class="ball-fog"></div><p class="orb-q" aria-live="polite"></p><div class="ball-shine"></div>'+
 '<button class="orb-die" type="button" aria-label="Roll the bone: the ball will answer">'+DIE+'</button></div><div class="ball-base"></div><p class="ball-cap orb-cap" aria-live="polite"></p></div>';}
/* v63: the die pulls a random FAQ question; the ball answers in its own words (never the FAQ text) and keeps the answer until the next throw */
var ORB_QA=[['Is this even legal?','You buy the game, we only give you the recipe. Lawyers find it boring here, and we like it that way.'],
 ['How much does it cost?','Zero. You buy the game yourself, and our work is a hobby — there’s nothing to charge for.'],
 ['Will my Mac work?','If “About This Mac” says Apple in the “Chip” line and macOS is 26 or newer — yes. That’s almost every Mac since 2020, just update the system. Older ones have the ball’s sympathy.'],
 ['Is this a virus?','No. The Mac gets nervous because we don’t pay Apple for a signature. A virus wants your passwords; we want you to finally beat this game.'],
 ['Why is this better than the original?','You’ve seen the original. Here you get 60 fps instead of 30, widescreen and Ukrainian — the same childhood, just with glasses on.'],
 ['Can I donate?','No: money means obligations, and we’re here for the fun of it. Buy the game on GOG instead — that’s a donation to the people who made it.'],
 ['How long does the install take?','“Heroes” — about forty minutes. Just enough to reread your texts with your ex and regret it.'],
 ['How long will it last without power?','We haven’t timed it, and we won’t lie. It’ll outlast your morning optimism, that’s for sure.'],
 ['Will my old saves work?','No: this is a new version of the game, and it doesn’t read the old files. You have to let the past go. Even in “Heroes”.'],
 ['Can I play with a gamepad?','In console games — yes, with Xbox, PlayStation or Switch. In “Heroes” it’s mouse only. With a TV remote — no, we checked.'],
 ['Found a bug. Now what?','Congratulations, you’re a tester now. No salary, eternal glory. Post it on GitHub.'],
 ['Can I request a game?','No. We only take games we love ourselves: work done without love comes out as junk.'],
 ['Can I play with a keyboard?','No. The game was made for sticks, and a console game on keys is like playing guitar in mittens. A gamepad is cheaper than a therapist.'],
 ['What about an Intel Mac?','No. Our versions only know Apple chips. Your Intel has earned an honourable retirement, not “Heroes”.'],
 ['Where do I get “Heroes IV”?','On GOG, Complete Edition. Legal, cheap, and the money finally goes to the people who made the game, not to some guy at the flea market.'],
 ['Where do I get “Chamber of Secrets”?','Only from your own Xbox disc, US edition. We don’t give games away — not even really good ones.'],
 ['Does Harry speak Ukrainian?','He writes it. Texts and subtitles are in Ukrainian, the voices are original. We left Lockhart’s British intonation alone: some things don’t translate.'],
 ['And do “Heroes” speak Ukrainian?','Yes: the interface, campaigns, help and campaign voice-over. The Necromancer finally threatens you in your own language.'],
 ['Can I play online?','Not in “Heroes”: the servers have long been in the grave, and we raise games, not servers.'],
 ['Why do I need 60 fps?','So your army doesn’t crawl across the map like a bus at rush hour. Your eye gets used to smoothness in five minutes, and never goes back.'],
 ['How much space do I need?','For “Heroes” — about 5 GB. Roughly what the photos of your cat take up, the ones you never look at.'],
 ['Do I need the internet?','Only while installing. After that, play in a bomb shelter if you like — the game doesn’t phone home.'],
 ['What developer tools is my Mac asking for?','Scaffolding from Apple: your game gets built on it at home. Free, one button, no panic.'],
 ['Why is everything in Ukrainian?','Because for twenty years we were offered someone else’s language. Now it’s our turn, and we’re not giving it up.'],
 ['Is there English?','In “Harry Potter” — yes, both languages in one installer. “Heroes” speak only Ukrainian for now — let the world wait for once.'],
 ['How is this different from the PC “Harry Potter”?','In every way. The Xbox version is a separate game with its own levels, fights and camera. You saw the PC one at the internet café; this one you only saw in a magazine.'],
 ['Can I skip the videos?','Yes: a video — one press, a cutscene — hold for four seconds. That’s so you don’t skip the story while reaching for your tea.'],
 ['What does F2 do in “Chamber of Secrets”?','It brings back 2002: a picture like on an old CRT. Look at it for a minute and you’ll understand why we did all this.'],
 ['And F10 in “Heroes”?','Picture filters, from sharp to smooth. Like picking glasses at the optician’s, only free and without the queue.'],
 ['Who makes all this?','One leather bag and a team of AI agents. The bag sets the tasks, the agents do the work. They don’t have a union yet.'],
 ['Aren’t you afraid of the rights holders?','We respect them. We don’t hand out games, we don’t take money, we read our mail. If they write, we’ll answer faster than we answer bug reports.'],
 ['Why does the game take so long to build?','Because your Mac rewrites the whole game for itself, from the first line to the last. Half an hour after twenty years of waiting is a fair trade.'],
 ['Why Xbox games?','Because some games came out there in their own, better version. And because we once stared at that black box like a jewellery shop window.'],
 ['What if I don’t like it?','Delete it and that’s that. You didn’t pay us, so there’s nothing to refund.'],
 ['Is this for the long haul?','As long as it’s interesting to us. So, judging by everything, longer than your last relationship.']];
var orbT=null,orbLast=-1;
function orbPick(n){if(n<2)return 0;var i;do{i=Math.floor(Math.random()*n);}while(i===orbLast);orbLast=i;return i;}
function orbReset(w){clearTimeout(orbT);w.classList.remove('playing');var v=w.querySelector('.orb-vid');v.onended=v.onerror=null;v.pause();v.removeAttribute('src');v.hidden=true;w.querySelector('.orb-img').hidden=true;w.querySelector('.orb-cap').textContent='';}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.orb-die');if(!b)return;var w=b.closest('.orb-wrap');if(w.classList.contains('rolling'))return;
 w.classList.add('rolling');setTimeout(function(){w.classList.remove('rolling');w.classList.add('playing');
  if(VIDEOS.length){var v=w.querySelector('.orb-vid');v.src=VIDEOS[orbPick(VIDEOS.length)];v.hidden=false;v.onended=v.onerror=function(){orbReset(w);};var p=v.play();if(p&&p.catch)p.catch(function(){orbReset(w);});}
  else{var a=ORB_QA[orbPick(ORB_QA.length)];w.querySelector('.orb-q').innerHTML='<b>'+a[0]+'</b><span>'+a[1]+'</span>';}
 },600);});
function split2(){return '<section id="ask" class="sec split two-halves"><div class="wrap split-in">'+
 '<div class="half-ask"><h2>Get an answer to your dumb question</h2>'+orb()+'</div>'+
 '<div class="half-rights"><div class="rights-txt"><h2>For rights holders</h2><p class="muted">We’re fans, not pirates.</p><ul class="rights">'+
 RIGHTS.map(function(t){return '<li>'+t+'</li>';}).join('')+'</ul><a class="gc-btn ghost" href="mailto:deadwareproject@gmail.com">Write to us</a><p class="rights-mail">deadwareproject@gmail.com</p></div>'+'<figure class="rights-pig">'+pigSVG('$398 spent')+'<figcaption>I’ve already spent $398 on this and I’m not asking for so much as a lollipop in return. Dear rights holder, if you’re reading this, don’t be a jerk and don’t shut my project down.</figcaption></figure></div>'+
 '</div></section>';}
var _home=homePage;
homePage=function(){setTimeout(function(){gcI=0;gcArm();},0);return _home().replace(/<section class="hero">[\s\S]*?<\/section>/,HERO3).replace(/<div class="cards">[\s\S]*?<\/a><\/div>/,cards6).replace(/<p class="queue">[\s\S]*?<\/p>/,'<p class="all-games"><a class="gc-btn" href="#games">All games</a></p>').replace(/(<section id="about" class="sec manifesto">[\s\S]*?<\/section>)/,function(){return showcase()+ABOUT;}).replace(/<section class=\"sec split\">[\s\S]*?<\/section>/,split2).replace('<section class="sec"><div class="wrap narrow"><h2>Questions you’ll ask anyway','<section id="faq" class="sec"><div class="wrap narrow"><h2>FAQ for nerds');};

})();

;
/* v62: inner pages. Hash routes stand in for real URLs: #games → /uk/games/, #game/heroes4 → /uk/heroes4/, #stories/<slug> → /uk/stories/<slug>/ */
(function(){
const SITE='https://deadware.games';
const GH_H4='https://github.com/LeoDeadware/HoMM4Deadware',GH_HP2='https://github.com/LeoDeadware/HP2Deadware';
const MAIL='deadwareproject@gmail.com';
/* only games that play; a new release is one more record */
const DB=[
 {id:'heroes4',title:'Heroes of Might and Magic IV',orig:'Heroes of Might and Magic IV',alt:'Heroes 4, HoMM4, Heroes of Might and Magic 4',year:2002,
  img:'h4-map-en.jpg',shots:['h4-hero.jpg','h4-map-en.jpg','h4-battle-en.jpg','h4-town-en.jpg','h4-heroscreen-en.jpg','h4-wow-en.jpg','h4-campaign-en.jpg'],
  sub:'With both expansions and a Ukrainian translation it never had.',
  h1:'Heroes of Might and Magic IV on Mac',
  lead:'The same “Heroes 4” that made a whole generation skip lectures. Now it lives on your MacBook as a regular app — and finally speaks Ukrainian.',
  answer:'<b>Yes, you can play Heroes IV on a Mac.</b> Buy the game on GOG, download our installer — and in 15–40 minutes «Heroes» is in your Applications. In Ukrainian or English, with both expansions.',
  vers:[['Ukrainian',true],['English',true]],gh:GH_H4,
  need:['A Mac with an Apple chip and macOS 26 or newer','The game from GOG: <i>Heroes IV Complete Edition</i>','5 GB of free space while it builds'],
  steps:[['Buy the game on GOG.','Download the Complete (version 3.0) Windows installer from there and leave it in Downloads. Don’t open it.'],['Download our installer.','The button at the top of the page downloads Heroes.IV.dmg, 46 MB. No game inside.'],['Drag “Heroes” to Applications.','The first time, right-click it → Open → Open again. The Mac will ask whether you trust us. Trust us.'],['Point it to the GOG installer.','If the Mac asks for developer tools, install them. Then the game is built on your Mac: 15–40 minutes depending on the Mac, once. A window shows the progress.'],['Pick a language and play.','English or Ukrainian, in the launch window, every time. From then on the game opens right away.']],
  feats:[['Full-screen map','Combat is full-screen too: painted edges instead of black bars.'],['Three times smoother','60 frames per second instead of 20.'],['In Ukrainian','All six original campaigns, the tutorial, Winds of War, the interface and the campaign voice-over.'],['Both expansions','The Gathering Storm and Winds of War are included.']],
  story:['2002. The publisher 3DO is dying, and “Heroes IV” goes out half-baked — like a novel handed in because the debt collectors showed up. Critics spat. Players quietly sat in it for ten years.','In Ukraine people knew it from pirated discs, translated by people who were clearly paid by the word, not by the meaning. Now the game has a Ukrainian translation made with respect for the first time — and it lives on a Mac none of us could even imagine in 2002.','The same game, with the same maps and campaigns. It just doesn’t need a computer from two thousand and two anymore.'],
  faq:[['The Mac won\'t open the installer?','Right-click “Heroes” → «Open» → «Open» again. We don\'t pay Apple for the right to be trusted, so it gets a little nervous.'],['How much space does it need?','5 GB free while it builds, then about 1.9 GB, English and Ukrainian together.'],['Can I play Heroes 4 on a Mac?','Yes. The port runs the game as a regular app on any Mac with an Apple chip and macOS 26 or newer.'],['Do I need to buy the game?','Yes, the Complete Edition on GOG. We only turn your copy into a Mac version — we don’t have the game itself.'],['How long does the install take?','The first build takes 15–40 minutes depending on the Mac; a window shows the progress. After that the game opens right away. If Apple’s developer tools aren’t there yet, the installer offers to install them.'],['Is everything translated?','Almost. All six original campaigns, the tutorial, Winds of War and the whole interface — yes. The Gathering Storm expansion is in English for now; its translation comes later.'],['Can I play online?','No, we switched it off on purpose: the servers are long dead, and your Mac doesn’t need an extra hole into the internet.'],['Is there English?','Yes. Pick English or Ukrainian in the launch window, every time. The Gathering Storm expansion is in English for now; its translation comes later.'],['Is it really free?','Yes. No donations, subscriptions or “premium versions”.'],['Can I change how the picture looks?','Yes, F10 switches filters: from sharp to smooth, to your taste.'],['How do I know if my Mac has an Apple chip?','The apple in the top-left corner → “About This Mac”. If the “Chip” line says Apple — you’re in the club.'],['The Mac won’t open the installer?','Right-click it → “Open” → “Open” again. We don’t pay Apple for the right to be trusted, so it gets a little nervous.']],
  q:['heroes of might and magic 4 mac','heroes 4 mac m1','heroes of might and magic 4 mac','heroes of might and magic 4 apple silicon']},
 {id:'hp2',title:'Harry Potter and the Chamber of Secrets',orig:'Harry Potter and the Chamber of Secrets',alt:'HP2, Harry Potter 2',year:2002,
  img:'hp2-burrow-en.jpg',shots:['hp2-burrow-en.jpg','hp2-diagon-en.jpg','hp2-knockturn-en.jpg','hp2-inventory-en.jpg'],
  sub:'The Xbox version that nobody ever saw on a computer.',
  h1:'Harry Potter and the Chamber of Secrets on Mac',
  lead:'Not the PC version you remember from the internet café, but the console one, from the Xbox: different levels, different fights, a different camera. Now on the Mac, smooth and full-screen.',
  answer:'<b>Yes, the Xbox “Chamber of Secrets” runs on a Mac.</b> You need an image of your game disc — our installer turns it into a regular Mac app.',
  vers:[['Ukrainian',true],['English',true]],gh:GH_HP2,
  need:['A Mac with an Apple chip and macOS 26 or newer','Xbox disc image, US edition','About 2.8 GB of disk space'],
  steps:[['Prepare a disc image.','US edition for the original Xbox.'],['Download our installer.','The button at the top of the page downloads HP2.dmg, 127 MB. No game inside, just the recipe and our HD textures.'],['Drag “Harry Potter” to Applications.','The first time, right-click it → Open → Open again. The Mac will ask whether you trust us. Trust us.'],['Point it to the disc image.','If the Mac asks for developer tools, install them. Then the game is built on your Mac: about 20 minutes, once.'],['Pick a language and hit Play.','Hogwarts is waiting. So, unfortunately, is Lockhart.']],
  feats:[['Four times sharper','The picture is four times bigger, 330 textures redrawn.'],['60 fps and widescreen','Smooth, with no black bars on the sides.'],['A modern camera','Follows the stick and gets behind Harry on its own.'],['Any gamepad','Xbox, PlayStation or Switch Pro. Plug it in mid-game — and it works right away, no restart.']],
  story:['In 2002 every platform got its own “Chamber of Secrets”, and the versions differed like brothers from different marriages. The Xbox version is a console game with its own levels and fights. It never came out on PC.','The 2003 Mac release was a port of the PC version for old Macs, and it has long been dead. So for the first time in twenty years the Xbox version lives somewhere other than the black box under the TV.','Same levels, same fights. We just gave it the widescreen, smoothness and sharpness the 2002 console didn’t have the strength for.'],
  faq:[['The Mac won’t open the game?','Right-click “Harry Potter” → «Open» → «Open» again. We don\'t pay Apple for the right to be trusted, so it gets a little nervous.'],['How long does the install take?','About 20 minutes if Apple’s developer tools are already on your Mac. If not, the installer offers to install them, and that takes longer.'],['Can I play “Chamber of Secrets” on a Mac?','Yes, the Xbox version. The installer turns your disc into a regular Mac app.'],['What do I need to set up?','Nothing. It’s a regular Mac app: click the icon, play.'],['Why the Xbox version?','Because it’s a different game: its own levels, fights and camera that never existed on computers. And, between us, a better one.'],['Can it look like it used to?','Yes. F2 switches the picture mode, including “TV 2002” — with the same blur you, it turns out, miss.'],['Can I skip the videos?','Yes. A video — with one press, a cutscene — by holding the button for four seconds, so you don’t skip the story by accident.'],['Will it run on an old Intel Mac?','No. It’s built for Apple chips; it won’t launch on Intel.'],['What about a keyboard?','No, gamepad only. A console game on keys is like playing guitar in mittens.'],['Will the European edition work?','We haven’t tested it yet. The installer will tell you if something’s off.'],['How do I know if my Mac has an Apple chip?','The apple in the top-left corner → “About This Mac”. If the “Chip” line says Apple — you’re in the club.'],['The Mac won’t open the installer?','Right-click it → “Open” → “Open” again. We don’t pay Apple for the right to be trusted, so it gets a little nervous.']],
  q:['harry potter chamber of secrets mac','how to play harry potter chamber of secrets on mac','harry potter chamber of secrets xbox mac']},
{id:'rotk',title:'The Lord of the Rings: The Return of the King',orig:'The Lord of the Rings: The Return of the King',alt:'ROTK, LOTR ROTK, LOTR Return of the King',year:2003,
  img:'rotk-helms-deep-en.jpg',shots:['rotk-helms-deep-en.jpg','rotk-minas-tirith.jpg','rotk-gandalf-breach-en.jpg'],
  sub:'The Xbox version: Gandalf, Aragorn and a pile of orcs, now on your Mac.',
  h1:'The Lord of the Rings: The Return of the King on Mac',
  lead:'The same Peter Jackson movie game where a shot from the film slides straight into a fight. Now the Xbox version runs on your Mac: 60 fps, your screen’s native resolution, English and Ukrainian.',
  answer:'<b>Yes, the Xbox Return of the King runs on a Mac.</b> You need an image of your own game disc, US edition. Our installer turns it into a regular Mac app.',
  vers:[['Ukrainian',true],['English',true]],gh:null,
  req:'your Xbox disc (US edition).',
  need:['A Mac with an Apple chip and macOS 26 or newer','Xbox disc image, US edition','About 6 GB of disk space while it installs'],
  steps:[['Prepare a disc image.','US edition for the original Xbox.'],['Download our installer.','The button at the top of the page downloads ROTK.dmg right away, 123 MB. No game inside, just the recipe and our HD textures.'],['Drag “The Return of the King” to Applications.','The first time, right-click it → Open → Open again. The Mac will ask whether you trust us. Trust us.'],['Point it to the disc image.','If the Mac asks for developer tools, get them. Then about two minutes, and only once.'],['Pick a language and hit Play.','That ring won’t throw itself into the volcano.']],
  feats:[['60 frames per second','And the full 120 on ProMotion screens.'],['Your Mac’s native resolution','The picture is rendered for your screen, not stretched from a 2003 TV.'],['Three colour modes','Original, Modern and Warm. Pick the Mordor you like best.'],['Two languages','Ukrainian is a switch in the launcher; the game starts in English. The voices are the original ones.']],
  story:['2003. EA puts out the game of the third film, and it pulls a trick that froze whole sofas: a shot from the movie slides into the fight without a seam. Aragorn draws his sword on screen, and a second later you’re the one swinging it.','Then the consoles went up to the attic, and the Xbox version stayed in the black box under the TV, next to the cables nobody dares to throw away.','Same levels, same fights, same cutscenes. We just gave it 60 fps, your screen’s native resolution and a Ukrainian translation.'],
  faq:[['Can I play Return of the King on a Mac?','Yes, the Xbox version. The installer turns an image of your disc into a regular Mac app.'],['How long does the install take?','About two minutes if Apple’s developer tools are already on your Mac. If not, the installer offers to install them, and that takes longer.'],['How much space do I need?','Installed, the game takes about 3.8 GB. While it installs it needs about 2 GB more: your Mac unpacks the disc for a while.'],['What about a keyboard?','No, gamepad only. The game was made for sticks, and we didn’t rebuild the controls for keys.'],['Which gamepad works?','Xbox or PlayStation. The button prompts on screen switch to match the one in your hands.'],['Can I skip the videos?','Yes, hold A. Though the cutscenes here are pieces of the film, so watching them is no sin.'],['Is there Ukrainian?','Yes, with a switch in the launcher. The game starts in English; both versions use the original voices.'],['Will the European edition work?','We haven’t tested it yet. The installer will tell you if something’s off.'],['Will it run on an old Intel Mac?','No. It’s built for Apple chips; it won’t launch on Intel.'],['The Mac won’t open the game?','Right-click “The Return of the King” → “Open” → “Open” again. We don’t pay Apple for the right to be trusted, so it gets a little nervous.']],
  q:['lord of the rings return of the king mac','return of the king xbox on mac','lotr return of the king mac m1']}];
const G={};DB.forEach(g=>G[g.id]=g);

/* stories — Moody / Welsh: smart, dry, a little contemptuous, never cosy */
const POSTS=[
 /* why read it: you learn the real differences of H4 and stop playing it like «трійку» */
 {slug:'heroes-4-for-heroes-3-players',title:'“Heroes IV” for people who grew up on “Heroes III”',date:'2026-11-05',game:'heroes4',img:'h4-map-en.jpg',doodle:'helm',pull:'The hero no longer stands on the sidelines. He fights himself — and falls himself.',
  dek:'For twenty years “Heroes IV” has been trashed by people who played it like “III”. Here are four things to know so you don’t become one of them.',
  body:['“Heroes III” is a religion. “IV” is a heresy, released in 2002 by a studio that was already dying. Most people launched it, saw that everything was wrong, and went back to praying to “III”. Half the complaints about the game are really complaints about playing it wrong.',
   '<b>The hero fights.</b> He no longer stands off-screen with a spellbook. He walks onto the battlefield, hits, gets hit on the head and can fall. So a levelled-up knight isn’t an army ornament but its best fighter, and an unguarded mage is a dead man.',
   '<b>Armies move without a hero.</b> Troops travel the map on their own: they capture mines, gather resources, bring up reinforcements. There are caravans between towns. Whoever drags every creature behind one hero, like in “III”, loses to whoever plays with three hands at once.',
   '<b>A town makes you choose.</b> At levels two to four every town has two creatures, and you can build only one. The other will never appear in that town. It’s not developer greed but the main decision of the game: it decides which war you’ll fight.',
   '<b>Combat is about position, not turns.</b> In melee, the strike and the counter happen at the same time, so even the first blow costs blood. Archers and mages decide more than the number of swords, and whoever throws everything head-on loses the army in two turns.',
   'Our port changes none of this: the same game, the same rules, both expansions. The map just updates 60 times a second instead of 20, and the campaigns are in Ukrainian, except The Gathering Storm. The rest is on your conscience.']},

 /* why read it: you learn which «Таємна кімната» you actually played and why the Xbox one is a different game */
 {slug:'not-that-chamber-of-secrets',title:'You played the wrong “Chamber of Secrets”',date:'2026-11-06',game:'hp2',img:'hp2-diagon-en.jpg',doodle:'tv',pull:'Same book. Different game.',
  dek:'In 2002 one book became several different games. Let’s work out which one you got and why the Xbox version isn’t the same game with better graphics.',
  body:['In 2002 the second book became not one game but several. The computer version was made by KnowWonder. The PlayStation 2, Xbox and GameCube versions — by a completely different studio, Eurocom. Same story, different games, like two adaptations of one book by two directors who aren’t on speaking terms.',
   '<b>How to tell which one you played.</b> If at an internet café or at home on a PC — the KnowWonder version. If at a friend’s with a console — the Eurocom version. The 2003 Mac release, by the way, was a port of the computer version, so Mac owners played the “computer” one too.',
   '<b>How they differ.</b> Not in graphics but in the game itself: different levels, different lesson structure, different fights, a different camera. The console version never came out on computers. So for most of us it’s not a memory but a new game with familiar names.',
   '<b>What we did to it.</b> We didn’t touch the story or the levels. The picture is rendered four times bigger — about 3072 pixels wide — 330 world textures are redrawn, the interface is new, the camera follows the stick. If you miss the 2002 blur, F2 switches on “TV 2002” mode.',
   'And a small thing that shows how we think. A regular video is skipped with one press, but a cutscene has to be held for four seconds. Because we know how you mash buttons when you’re nervous, and we don’t want you to accidentally skip who opened the Chamber of Secrets.']}];
const P={};POSTS.forEach(p=>P[p.slug]=p);
const dUA=d=>{const m=['January','February','March','April','May','June','July','August','September','October','November','December'];const a=d.split('-');return (+a[2])+' '+m[a[1]-1]+' '+a[0];};

const FAQ_ALL=[
 ['General','gen',[
  ['What is Deadware?','A project that takes old games and turns them into regular Mac apps. One Ukrainian and a few AI agents who can’t say “no”.'],
  ['How much does it cost?','Zero. You buy the game; the rest is our gift to a humanity that doesn’t deserve it.'],
  ['Can I donate to you?','No. As soon as money shows up, obligations show up, and we’re here for the fun of it.'],
  ['Can I request a game?','No. We’re not a restaurant: we only take games we love ourselves, because a port without love is junk. If your game shows up here one day — we have similar taste, congrats.'],
  ['Why is everything in Ukrainian?','Because for twenty years we were offered games in the language of a neighbour who now shells our power plants. Enough.']]],
 ['Legal stuff','legal',[
  ['Is it legal?','We don’t hand out games. You buy your copy, our installer turns it into a Mac version at your place. Like a tailor altering your own jacket.'],
  ['Why do I have to buy the game?','Because someone once made it, and that’s their right. We love games, not piracy.'],
  ['Where do I get the game?','PC games — on GOG, where they cost pennies. Xbox games — from your own disc.']]],
 ['My Mac','mac',[
  ['Will my Mac work?','If it has an Apple chip and runs macOS 26 or newer — yes. Check: the apple in the top left → “About This Mac”. The “Chip” line should say Apple, the “macOS” line 26 or higher. Update an older system in System Settings.'],
  ['And if it says Intel?','Then no: our versions are made only for Apple chips, they simply won’t launch on Intel. We’re sorry. A little.'],
  ['How long will it last without power?','Honestly: we haven’t measured the battery. It’ll last a session longer than an average kitchen-table argument about politics.'],
  ['Can I use a gamepad?','Yes, any popular one: Xbox, PlayStation, Switch. Console games are gamepad only: they were made for sticks, and we didn’t rebuild the controls for a keyboard. “Heroes” is mouse only, as the ancestors intended.'],
  ['How much space do I need?','For “Heroes” — about 5 GB. Roughly one season of that show you never finished.']]],
 ['Installing','install',[
  ['How do I install it?','Go to the game’s page, press “Download the installer”, then it’s all step by step with pictures — even a cat could figure it out.'],
  ['The Mac says the app can’t be opened. Are you a virus?','No, we’re poor. We don’t pay Apple for a signature, so the Mac doesn’t know us. Right-click the app → “Open” → “Open”. Once, and you’re friends.'],
  ['A window popped up about some “developer tools”.','Download them. It’s a free program from Apple; the game gets built on it at your place.'],
  ['How is the installer different from GitHub?','The installer does everything itself. GitHub is for people who like to watch how the sausage gets made.'],
  ['How long do I wait?','“Heroes” installs in about forty minutes, and you don’t need to sit next to it. Enough time to read one of our stories and start doubting yourself.']]],
 ['Games','games',[
  ['Which games are out?','Heroes of Might and Magic IV, plus two from the Xbox: Harry Potter and the Chamber of Secrets and The Lord of the Rings: The Return of the King. All three are on the All games page.'],
  ['Will there be Ukrainian voice-over?','No new one: we tried, it came out worse than the original, and bad voice acting is worse than a foreign language. “Heroes IV” already has Ukrainian voices in the campaigns; “Harry Potter” has Ukrainian text and the original voices.'],
  ['Will my old saves work?','No: this is a new version of the game, it doesn’t understand the old files. You’ll start over — and this time you’ll play it properly.']]],
 ['If something broke','bugs',[
  ['Found a bug. What do I do?','Write on the game’s GitHub what happened and what you pressed. AI agents will look into it — in order of queue and mood.'],
  ['Why do you take so long to answer?','Because the project is done for fun. Our fun, sadly, doesn’t always line up with your deadline.']]]];

function setLD(objs,title,desc){document.title=title;let m=document.querySelector('meta[name=description]');if(!m){m=document.createElement('meta');m.name='description';document.head.appendChild(m);}m.content=desc;
 document.querySelectorAll('script.dw-ld').forEach(s=>s.remove());objs.forEach(o=>{const s=document.createElement('script');s.type='application/ld+json';s.className='dw-ld';s.textContent=JSON.stringify(o);document.head.appendChild(s);});}
const crumbs=a=>'<nav class="crumbs" aria-label="Breadcrumbs"><a href="#home">Deadware</a>'+a.map(x=>'<span>›</span>'+(x[1]?'<a href="'+x[1]+'">'+x[0]+'</a>':x[0])).join('')+'</nav>';
const crumbLD=a=>({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[['Deadware','/uk/']].concat(a).map((x,i)=>({'@type':'ListItem',position:i+1,name:x[0],item:SITE+x[1]}))});
const faqLD=items=>({'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(q=>({'@type':'Question',name:q[0],acceptedAnswer:{'@type':'Answer',text:q[1]}}))});
/* v92: one step component for every step-by-step on the site */
function stepsRail(steps){return '<ol class="rail" style="--n:'+steps.length+'">'+steps.map((x,i)=>'<li><span class="rail-n" aria-hidden="true">'+(i+1)+'</span><b>'+x[0]+'</b>'+x[1]+'</li>').join('')+'</ol>';}
const timeline=g=>stepsRail(g.steps);
const strip=h=>h.replace(/<p class="proto-note">[\s\S]*?<\/p>/g,'');

const _hdr=header;
header=function(a){return _hdr(a).replace('<a href="#games">How it works</a>','<a href="#how">How it works</a>').replace(/<a href="#([a-z]+)">/g,(m,id)=>id===a?'<a href="#'+id+'" aria-current="page">':m);};
const _ftr=footer;
footer=function(){return _ftr().replace('<div class="wrap">','<div class="wrap"><p class="foot-map"><a href="#games">All games</a> · '+DB.map(g=>'<a href="#game/'+g.id+'">'+g.title+'</a>').join(' · ')+' · <a href="#about">About Deadware</a> · <a href="#how">How it works</a> · <a href="#stories">Funny stories</a> · <a href="#faq">Answers to dumb questions</a> · <a href="#enthusiasts">For enthusiasts</a></p>');};

const cardOf=g=>'<a class="card" href="#game/'+g.id+'"><img src="'+IMG+g.img+'" alt="'+g.title+' on Mac" loading="lazy"><div class="card-b"><h3>'+g.title+'</h3><p>'+g.sub+'</p></div></a>';

/* ---------- game page ---------- */
function gamePg(g){
 const other=DB.filter(x=>x.id!==g.id);
 const vers=g.vers.filter(v=>v[1]).map(v=>v[0]);
 const dl=(GO[g.id]?'<a class="gc-btn dl-inst" href="'+GO[g.id]+'">Download from GitHub</a>':'');
 const html=header('games')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['All games','#games'],[g.title]])+'<div class="gp-top"><div>'+
  '<h1>'+g.h1+'</h1><p class="lead">'+g.lead+'</p>'+
  '<div class="dl">'+dl+'</div><p class="dl-req">You need: a Mac with an Apple chip, macOS 26 or newer, and '+(g.req||(g.id==='hp2'?'your Xbox disc (US edition).':'the game from GOG.'))+'</p></div>'+
  '<div class="gp-cmp">'+strip(slider(g.shots[0],g.year,'Today, on Mac'))+(g.shots.length>1?'<div class="shot-th" role="tablist" aria-label="Screenshots">'+g.shots.map((x,i)=>'<button type="button" role="tab" aria-selected="'+(i===0)+'" data-shot="'+x+'"><img src="'+IMG+x+'" alt="'+g.title+' on Mac, frame '+(i+1)+'" loading="lazy"></button>').join('')+'</div>':'')+'</div></div>'+
  '</div></section>'+
 '<section class="pg-sec"><div class="wrap"><h2>What changed</h2><ul class="feat feat4">'+g.feats.map(f=>'<li><b>'+f[0]+'</b>'+f[1]+'</li>').join('')+'</ul></div></section>'+
 '<section class="pg-sec" id="install"><div class="wrap"><div class="inst"><h2>How to install</h2>'+
  '<div class="inst-blk"><h3 class="sub-h">What you’ll need</h3><ul class="need-row">'+g.need.map(n=>'<li>'+n+'</li>').join('')+'</ul></div>'+
  '<div class="inst-blk"><h3 class="sub-h">Step by step</h3>'+timeline(g)+'</div></div></div></section>'+
 
 '<section class="pg-sec"><div class="wrap">'+RIP+'<div class="gp-duo"><div><h2>A bit of history</h2><div class="story-txt">'+g.story.map((p,i)=>'<p'+(i?' class="st-more"':'')+'>'+p+'</p>').join('')+(g.story.length>1?'<button class="st-tgl" type="button" onclick="this.parentNode.classList.add(\'open\')">More</button>':'')+(POSTS.find(x=>x.game===g.id)?'<p><a class="more" href="#stories/'+POSTS.find(x=>x.game===g.id).slug+'">Read the story →</a></p>':'')+'<p class="muted">Also known as: '+g.orig+', '+g.alt+'.</p></div></div><div><h2>FAQ for nerds</h2>'+faq(g.faq)+'</div></div></div></section>'+
 '<section class="pg-sec rel-sec"><div class="wrap"><p class="rel-kick">Further through the graveyard</p><h2>Another one risen</h2><div class="rel">'+other.map(cardOf).join('')+'</div></div></section>'+footer();
 const url='/uk/'+g.id+'/';
 return {html,title:g.h1+' — Deadware',desc:g.lead.slice(0,155),url,
  ld:[{'@context':'https://schema.org','@type':'SoftwareApplication',name:g.orig+' for Mac (Deadware)',alternateName:[g.title,g.alt],applicationCategory:'GameApplication',operatingSystem:'macOS (Apple Silicon)',inLanguage:['uk','en'],offers:{'@type':'Offer',price:'0',priceCurrency:'USD'},url:SITE+url,image:SITE+'/img/'+g.img,isBasedOn:{'@type':'VideoGame',name:g.orig,datePublished:String(g.year)}},
   {'@context':'https://schema.org','@type':'HowTo',name:'How to install '+g.title+' on Mac',step:g.steps.map((s,i)=>({'@type':'HowToStep',position:i+1,name:s[0],text:s[1]}))},
   crumbLD([['All games','/uk/games/'],[g.title,url]]),faqLD(g.faq)],after:()=>{initSliders();document.querySelectorAll('.shot-th button').forEach(b=>b.addEventListener('click',()=>{const fig=b.closest('.wrap').querySelector('.cmp'),im=fig.querySelector('.cmp-after');b.parentNode.querySelectorAll('button').forEach(x=>x.setAttribute('aria-selected',x===b));im.addEventListener('load',()=>drawBefore(fig),{once:true});im.src=IMG+b.dataset.shot;}));}};
}

/* ---------- catalogue ---------- */
function gamesPg(){
 const html=header('games')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['All games']])+'<h1>All games</h1><p class="lead">Games that should have been lying in a digital grave long ago, but live on the Mac instead. Each is built from your own copy.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="cat">'+DB.map(cardOf).join('')+'</div></div></section>'+footer();
 return {html,title:'All games on Mac — Deadware',desc:'Old games that now run on a Mac as regular apps: Heroes of Might and Magic IV, Harry Potter and the Chamber of Secrets, The Lord of the Rings: The Return of the King.',url:'/uk/games/',
  ld:[{'@context':'https://schema.org','@type':'CollectionPage',name:'All games — Deadware',mainEntity:{'@type':'ItemList',itemListElement:DB.map((g,i)=>({'@type':'ListItem',position:i+1,name:g.title,url:SITE+'/uk/'+g.id+'/'}))}},crumbLD([['All games','/uk/games/']])]};
}


/* v77: visual jokes — helpers */
const RIP=`<svg class="rip" viewBox="0 0 560 44" aria-hidden="true"><g stroke="#c1121f" stroke-width="2" fill="none"><path d="M10 14H240"/><path d="M320 14H550"/></g><path class="drip" d="M118 14v7a3 3 0 0 0 6 0v-7z"/><path class="drip" d="M402 14v12a3 3 0 0 0 6 0V14z"/><path class="drip" d="M196 14v4a2.5 2.5 0 0 0 5 0v-4z"/><g transform="translate(280 16) scale(.42)" fill="none" stroke="#c1121f" stroke-width="6"><path d="M-30 40L0 -36L30 40"/><circle cy="-40" r="6"/><path d="M-44 2L0 44L44 2"/></g></svg>`;
const pull=(t,src)=>'<blockquote class="pull">'+t+(src?'<small>'+src+'</small>':'')+'</blockquote>';
const DOODLE={
 bulb:['A light bulb. Cause of death — the Russians.',`<svg viewBox="0 0 140 190" role="img" aria-label="A burnt-out light bulb with crosses for eyes"><path d="M70 0v28" stroke="#3c3c40" stroke-width="3"/><rect x="52" y="28" width="36" height="26" rx="4" fill="#2a2a2d" stroke="#3c3c40" stroke-width="2"/><path d="M54 36h32M54 44h32" stroke="#3c3c40" stroke-width="2"/><path d="M50 56C14 74 10 130 44 152h52c34-22 30-78-6-96z" fill="#141416" stroke="#f4f1e8" stroke-width="3"/><path class="bulb-fil" d="M60 58v26l6 8-6 8 6 8M80 58v26l-5 8" fill="none" stroke-width="3"/><g stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"><path d="M46 104l12 12M58 104l-12 12M82 104l12 12M94 104l-12 12"/></g><path d="M58 134q12-8 24 0" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"/><path d="M76 136v10a4 4 0 0 0 8 0v-8" fill="#c1121f"/><path d="M44 152h52l-4 14H48z" fill="#2a2a2d" stroke="#3c3c40" stroke-width="2"/><ellipse cx="70" cy="184" rx="44" ry="5" fill="#000" opacity=".5"/></svg>`],
 yasha:['Yasha. Sharpens his own knives.',`<svg viewBox="0 0 170 180" role="img" aria-label="Agent Yasha, a robot with a knife"><path d="M62 18l-8-14M108 18l8-14" stroke="#3c3c40" stroke-width="3"/><circle cx="54" cy="4" r="4" fill="#c1121f"/><circle cx="116" cy="4" r="4" fill="#c1121f"/><rect x="34" y="18" width="102" height="86" rx="14" fill="#18181a" stroke="#f4f1e8" stroke-width="3"/><rect class="ya-eye" x="56" y="46" width="18" height="18" rx="3" fill="#c1121f"/><path d="M96 56h20" stroke="#c1121f" stroke-width="5" stroke-linecap="round"/><path d="M60 84q25 12 50 0" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"/><path d="M70 86v6M84 89v6M98 87v6" stroke="#f4f1e8" stroke-width="2"/><rect x="58" y="104" width="54" height="56" rx="8" fill="#141416" stroke="#3c3c40" stroke-width="2"/><text x="85" y="138" text-anchor="middle" font-family="Metal Mania,serif" font-size="16" fill="#3c3c40">AI</text><path d="M112 120l26-8" stroke="#3c3c40" stroke-width="6" stroke-linecap="round"/><rect x="130" y="102" width="14" height="22" rx="3" fill="#2a2a2d" stroke="#3c3c40" stroke-width="2" transform="rotate(-18 137 113)"/><path d="M136 102L150 36l6 4-10 64z" fill="#d9d6cc" stroke="#f4f1e8" stroke-width="1.5"/><clipPath id="yk"><path d="M136 102L150 36l6 4-10 64z"/></clipPath><rect class="ya-glint" clip-path="url(#yk)" x="120" y="30" width="6" height="80" transform="rotate(14 140 70)"/><ellipse cx="85" cy="174" rx="48" ry="5" fill="#000" opacity=".5"/></svg>`],
 tv:['Exhibit, 2002. Do not touch.',`<svg viewBox="0 0 180 200" role="img" aria-label="An old TV with a console on a string under it"><path d="M70 22L52 2M110 22L130 2" stroke="#3c3c40" stroke-width="3"/><rect x="18" y="22" width="144" height="104" rx="12" fill="#18181a" stroke="#f4f1e8" stroke-width="3"/><rect class="tv-scr" x="32" y="34" width="100" height="80" rx="16" stroke="#3c3c40" stroke-width="2"/><path d="M44 52h50M44 64h70M44 76h34" stroke="#3b5a46" stroke-width="3" opacity=".7"/><circle cx="148" cy="52" r="5" fill="#3c3c40"/><circle cx="148" cy="70" r="5" fill="#3c3c40"/><rect x="40" y="140" width="100" height="26" rx="4" fill="#141416" stroke="#3c3c40" stroke-width="2"/><circle cx="90" cy="153" r="7" fill="#1e3d22" stroke="#7bd36b" stroke-width="2"/><path d="M8 150q82 40 164 0" fill="none" stroke="#c1121f" stroke-width="3"/><rect x="4" y="138" width="8" height="54" fill="#2a2a2d"/><rect x="168" y="138" width="8" height="54" fill="#2a2a2d"/><g transform="rotate(-6 90 178)"><rect x="56" y="168" width="68" height="20" fill="#f4f1e8"/><text x="90" y="182" text-anchor="middle" font-family="PT Mono,monospace" font-size="10" fill="#09090a">DO NOT TOUCH</text></g></svg>`],
 helm:['A hero’s helmet. Its owner levelled up to the very end.',`<svg viewBox="0 0 180 200" role="img" aria-label="A dented knight’s helmet on the ground, a sword stuck in beside it"><path d="M14 176h152" stroke="#3c3c40" stroke-width="3"/><g transform="rotate(14 132 96)"><path d="M132 20v126" stroke="#f4f1e8" stroke-width="5"/><path d="M114 48h36" stroke="#f4f1e8" stroke-width="5"/><circle cx="132" cy="16" r="6" fill="#c1121f"/></g><path d="M34 172v-62q0-48 46-48t46 48v62z" fill="#18181a" stroke="#f4f1e8" stroke-width="3"/><path d="M46 112h68" stroke="#09090a" stroke-width="9"/><path d="M48 132h12M64 132h12M80 132h12M96 132h12M48 148h12M64 148h12M80 148h12M96 148h12" stroke="#3c3c40" stroke-width="3"/><path d="M80 62v-16q12-14 30-10" fill="none" stroke="#c1121f" stroke-width="4"/><path d="M58 80l10 10M98 74l-6 12" stroke="#3c3c40" stroke-width="3"/><g transform="rotate(-5 90 190)"><rect x="50" y="180" width="80" height="16" fill="#f4f1e8"/><text x="90" y="192" text-anchor="middle" font-family="PT Mono,monospace" font-size="9" fill="#09090a">LEVEL 30</text></g></svg>`]
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
const STAMP={'Can I donate?':'NO, I’M PROUD','How much does it cost?':'$0','Can I donate to you?':'NO','Can I request a game?':'NOT A RESTAURANT','And if it says Intel?':'R.I.P.','The Mac says the app can’t be opened. Are you a virus?':'NOT A VIRUS','Will my old saves work?':'NO'};
const stampify=h=>h.replace(/<summary>([^<]+)<\/summary>/g,(m,q)=>STAMP[q]?'<summary>'+q+'<i class="stamp" aria-hidden="true">'+STAMP[q]+'</i></summary>':m);
{const _hp=homePage;homePage=function(){return stampify(_hp.apply(this,arguments));};} /* v116: stamp on the home FAQ */

/* ---------- about ---------- */
const row=(h,t,side)=>'<div class="ab-row"><div class="ab-txt"><h3>'+h+'</h3>'+t+'</div><div class="ab-side">'+side+'</div></div>';
function aboutPg(){
 const html=header('about')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['About Deadware']])+'<h1>About Deadware</h1><p class="lead">We bring back to life games the industry buried and we didn’t. On Macs, and in Ukrainian.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="essay">'+
 '<p class="drop">Let’s start honest: this is not a business. There are no donations, ads, “premium” or commissions here. There’s a guy on vacation who got bored and decided to have fun the way people with an excess of taste and a shortage of sleep have fun.</p>'+
 row('Where we come from','<p>Our generation mostly saw consoles in magazines. The lucky few who had them played translations from our northern neighbours, who even then considered us their little brothers — with all the “brotherly” love that implies. We grew up, learned English, bought MacBooks and learned to despise bad typography. Now we’re fixing our childhood retroactively.</p>',pull('When I was a kid, my console was a magazine about consoles.'))+
 row('Why Mac','<p>Because those same neighbours methodically switch our power off. And a MacBook with an Apple chip is a quiet, frugal machine that doesn’t howl like a generator in the yard and doesn’t ask for its own socket.</p><p class="punch">The perfect console for a country that learned to live in the dark and didn’t lose its sense of humour.</p>',doodle('bulb'))+
 row('Who makes this','<p>One leather bag who, let’s be honest, isn’t a programmer, and a team of AI agents. The agents don’t get paid either, and it seems their passports were taken away. They’re the ones who read your bug reports — in order of available tokens and mood.</p><p>Here’s where it stands: “Chamber of Secrets” went from the first line of code to a playable beta in about 29 hours. From that experience we built our own tool for porting from the Xbox: 66 rules and 63 rakes we won’t step on again. We haven’t found anyone else moving games from the original Xbox to the Mac the same way — so we may well be among the first.</p>',pull('29 hours. No sleep, no pay, no regrets.','AI agent “Vitiusha” on developing the “Chamber of Secrets” port'))+
 row('Who else can join','<p>If you can port, translate or break games with tests — you belong <a href="#enthusiasts">here</a>. Translators will first have to beat our localisation agent Yasha in a fair knife fight. He has never lost.</p>',doodle('yasha'))+
 '<p class="muted" style="margin-top:34px">Rights holders: '+MAIL+'. We answer faster than we answer bugs.</p>'+
 '</div></div></section>'+footer();
 return {html,title:'About Deadware — old games on Macs, in Ukrainian',desc:'Deadware is a non-commercial project: old games as regular Mac apps. In Ukrainian, no donations, no ads.',url:'/uk/about/',
  ld:[{'@context':'https://schema.org','@type':'AboutPage',name:'About Deadware',mainEntity:{'@type':'Organization',name:'Deadware',url:SITE,email:MAIL,description:'A non-commercial fan project: old games as native Mac apps.'}},crumbLD([['About Deadware','/uk/about/']])]};
}

/* ---------- how it works ---------- */
function howPg(){
 const steps=[['Buy the game.','Or dig an old disc out of the closet. You could, of course, poke around the, ahem, dark corners of the internet — we condemn that and take no responsibility whatsoever.'],['Download our installer.','It’s a recipe, not a game: there are no game files in it, because we’re not pirates. Where you get them is not our problem.'],['The installer translates the game.','Rewrites it in the Mac’s native language.'],['The Mac builds the app.','On average — up to an hour, depending on the game. No need to sit next to it.'],['An icon on the desktop.','Monkey clicks, monkey plays.']];
 const pros=[['Smooth','60 fps, not a slideshow.'],['Prettier than before','widescreen, Retina, new textures.'],['More than before','Ukrainian language and a modern camera. In 2002 we could only dream of that.'],['Zero setup','no firmware hacks and no forums at three in the morning.'],['Like a native','gamepad or mouse and full screen, just like a regular app.']];
 const html=header('how')+
 '<section class="pg-hero how-hero"><div class="wrap">'+crumbs([['How it works']])+'<h1>How it works</h1><p class="lead">An old game speaks the language of an old console, and the Mac doesn’t know that language. <b>We</b> translate the whole game once, like a book — and the Mac reads it on its own.</p></div></section>'+
 '<section class="pg-sec how-sec"><div class="wrap"><h2>What happens on your end</h2>'+stepsRail(steps)+'</div></section>'+
 '<section class="pg-sec how-sec"><div class="wrap how-grid"><div><h2>What you get out of it</h2><ul class="pros">'+pros.map(p=>'<li><b>'+p[0]+'</b> — '+p[1]+'</li>').join('')+'</ul></div><div>'+
 '<p class="how-why"><b>Why is the game built on your machine?</b> Because the installer has no piece of anyone else’s game in it — just a recipe. The groceries are yours, we only tell you what to chop.</p>'+
 '<p class="how-why"><b>For nerds.</b> This is static recompilation. The game’s machine code was written for an old processor, and we translate all of it into the language of Apple chips ahead of time, not piece by piece while you play. Graphics that called Direct3D get rewritten for Metal. Then Apple’s compiler (those same “developer tools”) builds a native app out of it. While you play, there is no translator between the game and the Mac.</p></div></div></section>'+footer();
 return {html,title:'How it works — Deadware',desc:'How old games become regular Mac apps: a simple explanation without tech talk, step by step.',url:'/uk/how/',
  ld:[{'@context':'https://schema.org','@type':'HowTo',name:'How an old game becomes a Mac app',step:steps.map((s,i)=>({'@type':'HowToStep',position:i+1,name:s[0],text:s[1]}))},crumbLD([['How it works','/uk/how/']])]};
}

/* ---------- stories ---------- */
function storiesPg(){
 const html=header('stories')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Funny stories']])+'<h1>Funny stories</h1><p class="lead">What really happened to the games you played, and how to play them now. No press releases and no nostalgic snot.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="posts">'+POSTS.slice().sort((a,b)=>a.date<b.date?1:-1).map(p=>'<a class="post" href="#stories/'+p.slug+'"><img src="'+IMG+p.img+'" alt="" loading="lazy"><div class="post-b"><span class="meta">'+dUA(p.date)+'</span><h3>'+p.title+'</h3><p>'+p.dek+'</p></div></a>').join('')+
 '</div></div></section>'+footer();
 return {html,title:'Funny stories — Deadware',desc:'Stories about old games, what was really different in them, and how to play them on a Mac.',url:'/uk/stories/',
  ld:[{'@context':'https://schema.org','@type':'Blog',name:'Funny stories — Deadware',blogPost:POSTS.map(p=>({'@type':'BlogPosting',headline:p.title,datePublished:p.date,url:SITE+'/uk/stories/'+p.slug+'/'}))},crumbLD([['Funny stories','/uk/stories/']])]};
}
function postPg(p){
 const g=G[p.game],more=POSTS.filter(x=>x!==p);
 const html=header('stories')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Funny stories','#stories'],[p.title]])+'<div class="article"><span class="meta">'+dUA(p.date)+'</span><h1 style="margin-top:10px">'+p.title+'</h1></div></div></section>'+
 '<section class="pg-sec" style="padding-top:0"><div class="wrap"><article class="article"><img src="'+IMG+p.img+'" alt="'+g.title+' on Mac"><p class="lede">'+p.dek+'</p>'+p.body.map((t,i)=>(i===0&&p.doodle?doodle(p.doodle,0,p.cap):'')+'<p>'+t+'</p>'+(i===2&&p.pull?pull(p.pull):'')).join('')+
 '<p class="post-end"><a href="#game/'+g.id+'">'+g.title+' on Mac →</a></p></article></div></section>'+
 '<section class="pg-sec"><div class="wrap"><h2>Read more</h2><div class="posts">'+more.map(x=>'<a class="post" href="#stories/'+x.slug+'"><div class="post-b"><span class="meta">'+dUA(x.date)+'</span><h3>'+x.title+'</h3><p>'+x.dek+'</p></div></a>').join('')+'</div></div></section>'+footer();
 const url='/uk/stories/'+p.slug+'/';
 return {html,title:p.title+' — Deadware',desc:p.dek.slice(0,155),url,
  ld:[{'@context':'https://schema.org','@type':'BlogPosting',headline:p.title,datePublished:p.date,author:{'@type':'Organization',name:'Deadware'},image:SITE+'/img/'+p.img,about:{'@type':'VideoGame',name:g.orig},mainEntityOfPage:SITE+url,inLanguage:'uk'},crumbLD([['Funny stories','/uk/stories/'],[p.title,url]])]};
}

/* ---------- FAQ ---------- */
function faqPg(){
 const all=[];FAQ_ALL.forEach(g=>all.push.apply(all,g[2]));
 const html=header('faq')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['Answers to dumb questions']])+'<h1>Answers to dumb questions</h1><p class="lead">There are no dumb questions. There are questions we’ve heard a hundred times. Here they are.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="faq-cols"><div class="faq-side"><input class="faq-search" type="search" placeholder="Search questions…" aria-label="Search questions">'+
 '<nav class="faq-nav">'+FAQ_ALL.map(g=>'<a href="#faq/'+g[1]+'">'+ICO[g[1]]+g[0]+'</a>').join('')+'</nav></div><div class="faq-main">'+
 FAQ_ALL.map(g=>'<div class="faq-grp" id="f-'+g[1]+'"><h2>'+ICO[g[1]]+g[0]+'</h2>'+stampify(faq(g[2]))+'</div>').join('')+'</div></div></div></section>'+footer();
 return {html,title:'Answers to dumb questions — Deadware',desc:'Will my Mac work, is it legal, how to install and what it costs: all the answers about Deadware games on Mac.',url:'/uk/faq/',
  ld:[faqLD(all),crumbLD([['Answers to dumb questions','/uk/faq/']])],after:sub=>{const t=sub&&document.getElementById('f-'+sub);if(t)t.scrollIntoView();}};
}
document.addEventListener('input',e=>{if(!e.target.classList||!e.target.classList.contains('faq-search'))return;const q=e.target.value.trim().toLowerCase();
 document.querySelectorAll('.faq-grp').forEach(g=>{let any=0;g.querySelectorAll('details').forEach(d=>{const m=!q||d.textContent.toLowerCase().includes(q);d.hidden=!m;if(m)any=1;if(q&&m)d.open=true;});g.hidden=!any;});});

/* ---------- enthusiasts ---------- */
function enthPg(){
 const html=header('enthusiasts')+
 '<section class="pg-hero"><div class="wrap">'+crumbs([['For enthusiasts']])+'<h1>For enthusiasts</h1><p class="lead">If you’re the kind who took apart the TV remote to see what’s inside — we have a job for you. Unpaid, but interesting.</p></div></section>'+
 '<section class="pg-sec" style="padding-top:10px"><div class="wrap"><div class="en-grid">'+
 [['ports','Ports','Want to raise a game yourself? We’ll give you everything we have: our own Xbox porting tool, 66 rules and 63 rakes we’ve already stepped on face-first.'],
  ['quill','Translation','Think you can translate better? Maybe. But first — a knife fight with our localisation agent Yasha. Win, and your text goes into the game.'],
  ['games','Stories','Know something about an old game the internet doesn’t: a cut level, a weird bug, what was in the box? Tell us — it might become a funny story.'],
  ['bugs','Testing','Love breaking things? Play and tell us what fell apart. Add a video — and even the agents will love you, though they don’t know how.']].map(c=>'<div class="en-card"><h3>'+ICO[c[0]]+c[1]+'</h3><p>'+c[2]+'</p></div>').join('')+
 '</div><div class="en-cta"><p>Write to <a href="mailto:'+MAIL+'">'+MAIL+'</a> or open a discussion on <a href="'+GH_H4+'" target="_blank" rel="noopener">GitHub</a>. Tell us what you want to do and with which game.</p><p class="muted">Fair warning: we don’t answer right away. It’s a hobby, not a support desk.</p></div></div></section>'+footer();
 return {html,title:'For enthusiasts — Deadware',desc:'Ports, translation and testing: how to join Deadware and help bring old games back to the Mac.',url:'/uk/enthusiasts/',
  ld:[crumbLD([['For enthusiasts','/uk/enthusiasts/']])]};
}

/* ---------- home: links to the new pages; no queue */
function homeHtml(){return homePage().replace(', and the MacBook doesn’t die within an hour without power.',', new textures — and zero setup.').replace(/<details class="faq"><summary>When’s the next game\?<\/summary>[\s\S]*?<\/details>/,'').replace(/<details class="faq"><summary>Why not just an emulator\?<\/summary>[\s\S]*?<\/details>/,'');} /* voice-ok: strips removed FAQ */
function homeFix(){
 const ids=['hp2','heroes4'];
 document.querySelectorAll('.gc-slide').forEach((s,i)=>{const a=s.querySelector('.btns a');if(a&&ids[i])a.href='#game/'+ids[i];});
 document.querySelectorAll('#games .card').forEach(c=>{const t=(c.querySelector('h3')||{}).textContent;const g=DB.find(x=>x.title===t);c.setAttribute('href',g?'#game/'+g.id:'#games');});
}
const homeSeo=()=>({title:'Deadware — old games on Mac',desc:'Beloved old games as regular Mac apps: easy to install, better graphics, in Ukrainian.',url:'/uk/',
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

(function(){var SVG='<svg class="franken" viewBox="0 0 1000 170" role="img" aria-label="Frankenstein’s head getting electrocuted">\n  <g stroke="#3c3c40" stroke-width="2"><rect x="54" y="66" width="12" height="104" fill="#121213"/><rect x="934" y="66" width="12" height="104" fill="#121213"/><\/g>\n  <circle class="fk-orb" cx="60" cy="56" r="13"/><circle class="fk-orb" cx="940" cy="56" r="13"/>\n  <path class="fk-arc" d="M73 56 L130 82 L168 60 L226 98 L274 76 L322 112 L372 90 L421 116"/>\n  <path class="fk-arc b" d="M73 56 L118 70 L176 90 L214 70 L268 104 L316 84 L364 118 L421 116"/>\n  <path class="fk-arc" d="M927 56 L870 82 L832 60 L774 98 L726 76 L678 112 L628 90 L579 116"/>\n  <path class="fk-arc b" d="M927 56 L882 70 L824 90 L786 70 L732 104 L684 84 L636 118 L579 116"/>\n  <g class="fk-head" stroke="#09090a" stroke-width="3" stroke-linejoin="round">\n    <rect x="472" y="140" width="56" height="30" class="fk-skin"/>\n    <path class="fk-skin" d="M438 40 H562 L568 138 Q500 160 432 138 Z"/>\n    <g fill="#c9c9cc"><rect x="418" y="108" width="18" height="14" rx="2"/><rect x="564" y="108" width="18" height="14" rx="2"/><\/g>\n    <path class="fk-hair" fill="#050505" stroke="#3c3c40" stroke-width="2" d="M430 26 H570 V58 L560 49 L549 59 L537 49 L525 59 L513 49 L501 59 L489 49 L477 59 L465 49 L453 59 L442 49 L430 58 Z"/>\n    <g fill="none" stroke-width="2.5"><path d="M462 72 H520"/><path d="M468 66 V78 M480 66 V78 M492 66 V78 M504 66 V78 M516 66 V78"/><\/g>\n    <path d="M452 84 H492 M508 84 H548" stroke-width="6"/>\n    <g class="fk-shut" fill="none"><path d="M458 98 H488 M512 98 H542"/><\/g>\n    <g class="fk-open"><circle cx="473" cy="99" r="9" fill="#f4f1e8"/><circle cx="527" cy="99" r="9" fill="#f4f1e8"/><circle cx="473" cy="99" r="2.5" fill="#09090a"/><circle cx="527" cy="99" r="2.5" fill="#09090a"/><\/g>\n    <path d="M500 100 L494 116 H504" fill="none" stroke-width="2.5"/>\n    <g fill="none" stroke-width="3"><path d="M474 128 H526"/><path d="M482 123 V133 M494 123 V133 M506 123 V133 M518 123 V133" stroke-width="2"/><\/g>\n  <\/g>\n<\/svg>';
function put(){var h=document.querySelector('#games .fk-slot'),w='beforeend';if(!h){h=document.querySelector('#games h2');w='afterend';}if(h&&!document.querySelector('#games .franken'))h.insertAdjacentHTML(w,SVG);}
put();new MutationObserver(put).observe(document.getElementById('app'),{childList:true});})();
