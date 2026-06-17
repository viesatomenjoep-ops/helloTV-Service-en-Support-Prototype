/* =====================================================================
   Service & Support Dashboard Pro — helloTV
   Statisch prototype. Geen backend. Demo-data hieronder.
   In productie vervangen door: Supabase (data), Cloudinary (media),
   Next.js/Vercel (hosting). Zie README + .env.example.
===================================================================== */

/* ---------- ICONS (inline, stroke = currentColor) ---------- */
const I = {
  check:'<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/>',
  truck:'<path stroke-linecap="round" stroke-linejoin="round" d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>',
  tool:'<path stroke-linecap="round" stroke-linejoin="round" d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.5 2.5-2-2 2.5-2.5z"/>',
  alert:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4M12 17h.01M10.3 3.9L2.7 17a2 2 0 001.7 3h15.2a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/>',
  send:'<path stroke-linecap="round" stroke-linejoin="round" d="M3 11l18-8-8 18-2-7-8-3z"/>',
  box:'<path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9 4 9-4M12 11v10"/>',
  chat:'<path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5a8.5 8.5 0 01-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1121 11.5z"/>',
  pin:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z"/><circle cx="12" cy="11" r="2.5"/>',
  doc:'<path stroke-linecap="round" stroke-linejoin="round" d="M7 3h7l5 5v13H7zM14 3v5h5"/>',
  arrow:'<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/>',
};
const ic = (k,cls='') => `<svg ${cls?`class="${cls}"`:''} fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">${I[k]}</svg>`;

/* ---------- STATUS MODEL ---------- */
const STATUS = {
  aangemeld:   {label:'Aangemeld',        pill:'p-grey'},
  troubleshoot:{label:'Troubleshoot',     pill:'p-violet'},
  goedgekeurd: {label:'Goedgekeurd',      pill:'p-blue'},
  onderweg:    {label:'Onderweg naar merk',pill:'p-blue'},
  reparatie:   {label:'In reparatie',     pill:'p-yellow'},
  eta:         {label:'ETA gewijzigd',    pill:'p-red'},
  retour:      {label:'Retour onderweg',  pill:'p-blue'},
  doa:         {label:'DOA goedgekeurd',  pill:'p-violet'},
  akkoord:     {label:'Wacht op akkoord', pill:'p-red'},
  afgerond:    {label:'Afgerond',         pill:'p-green'},
};
const pill = s => `<span class="pill ${STATUS[s].pill}"><span class="dot"></span>${STATUS[s].label}</span>`;

/* ---------- DEMO DATA (geïnspireerd op de reparatiebon) ---------- */
const BRANDS_MODELS = {
  'Samsung': ['OLED S95C', 'OLED S90C', 'QN90C Neo QLED', 'The Frame', 'Q-Symphony Soundbar', 'HW-Q990C'],
  'LG': ['OLED G4', 'OLED C4', 'OLED B4', 'QNED85', 'S95QR Soundbar', 'XBOOM'],
  'Sony': ['Bravia XR A95L', 'Bravia XR A80L', 'Bravia X90L', 'HT-A7000 Soundbar', 'WH-1000XM5'],
  'Philips': ['OLED+908', 'OLED808', 'The One (PUS8808)', 'Fidelio B97', 'Evnia Monitor'],
  'Panasonic': ['MZ2000 OLED', 'MZ1500 OLED', 'MX950 LED', 'SC-HTB490 Soundbar'],
  'TCL': ['C845 Mini-LED', 'C745 QLED', 'P745', 'Ray-Danz Soundbar'],
  'Hisense': ['UXKQ Mini-LED', 'U8KQ', 'A6K', 'HS214 Soundbar'],
  'Sonos': ['Arc', 'Beam (Gen 2)', 'Ray', 'Sub (Gen 3)', 'Sub Mini', 'Era 300', 'Era 100', 'Move 2', 'Roam'],
  'Bose': ['Smart Soundbar 900', 'Smart Soundbar 600', 'Bass Module 700', 'QuietComfort Ultra', 'Portable Smart Speaker'],
  'JBL': ['Bar 1300X', 'Bar 1000', 'Bar 800', 'PartyBox 710', 'Flip 6', 'Charge 5'],
  'Denon': ['AVR-X3800H', 'AVR-X2800H', 'Home 150', 'Home 350', 'Home Sound Bar 550'],
  'Yamaha': ['RX-V6A', 'RX-A2A', 'MusicCast BAR 400', 'SR-B20A'],
  'Marantz': ['CINEMA 40', 'CINEMA 50', 'STEREO 70s', 'MODEL 40n'],
  'Harman Kardon': ['Citation MultiBeam 1100', 'Citation Sub', 'Onyx Studio 8', 'Aura Studio 3']
};

const ORDERS = [
  {
    id:'251195109', merk:'Sonos', type:'Move 2 — wit', serie:'251195109',
    klant:'P. Hattink', adres:'Bontwerkerstraat 19, 4813LM Breda', tel:'06-13672768',
    filiaal:'Breda', medewerker:'Anne', datum:'08-10-2025',
    klacht:'Laadt niet meer op. Reeds omgeruild voor een nieuwe — toestel kan na reparatie naar ODM.',
    accessoires:'Move 2 (wit) en lader', garantie:true, leen:false, doa:true,
    route:'ODM', status:'doa', eta:'13 juni 2026', progress:55,
    timeline:[
      {s:'done', t:'Aangemeld via klantportaal', tm:'8 jun · 09:14', d:'Serienummer automatisch herkend. Klant ontving direct een bevestiging met trackinglink.', comm:'Klant geïnformeerd'},
      {s:'done', t:'Gezamenlijke troubleshoot', tm:'8 jun · 09:40', d:'Verplichte controle doorlopen (laadt niet op, lader getest). Geen "No Defect Found"-risico. Goedgekeurd voor inname.', comm:'Klant geïnformeerd'},
      {s:'done', t:'DOA-aanvraag goedgekeurd', tm:'8 jun · 11:02', d:'Binnen 8 dagen gemeld → kwalificeert als Dead on Arrival. Vervangend toestel uitgegeven aan klant.', comm:'Klant geïnformeerd'},
      {s:'current', t:'Doorgezet naar ODM', tm:'8 jun · 14:30', d:'Toestel automatisch op de ODM-lijst geplaatst (Open Doos Model). Wacht op verwerking richting merk.', },
      {s:'todo', t:'Merkvergoeding claimen', tm:'Verwacht 13 jun', d:'Claim bij Sonos wordt automatisch klaargezet zodra ODM is verwerkt.'},
    ],
  },
  { id:'251204417', merk:'Samsung', type:'QN90C 65"', serie:'SN-QN90C-8842', klant:'F. de Vries',
    adres:'Marktplein 4, 7001AB Doetinchem', tel:'06-22119007', filiaal:'Doetinchem', medewerker:'Jeffrey',
    datum:'11-06-2026', klacht:'Beeld valt willekeurig uit, paneel knippert bij opstarten.', accessoires:'Afstandsbediening',
    garantie:true, leen:false, doa:false, route:'CE-Repair', status:'reparatie', eta:'19 juni 2026', progress:65,
    timeline:[
      {s:'done', t:'Aangemeld', tm:'11 jun · 10:02', d:'Online aangemeld, klacht + serienummer ontvangen.', comm:'Klant geïnformeerd'},
      {s:'done', t:'Troubleshoot afgerond', tm:'11 jun · 10:35', d:'Paneelfout bevestigd. Geen NDF-risico.'},
      {s:'done', t:'API-push naar CE-Repair', tm:'11 jun · 10:36', d:'Volledig automatisch aangemeld bij CE-Repair — geen handmatig overkloppen.', comm:'Klant geïnformeerd'},
      {s:'done', t:'Opgehaald door PostNL', tm:'12 jun · 16:20', d:'QR-label gescand bij inname.', comm:'Klant geïnformeerd'},
      {s:'current', t:'In reparatie bij CE-Repair', tm:'13 jun · 08:10', d:'Panelvervanging ingepland.'},
      {s:'todo', t:'Retour naar klant', tm:'Verwacht 19 jun'},
    ],
  },
  { id:'251203991', merk:'LG', type:'OLED C4 48"', serie:'LG-OLEDC4-1190', klant:'M. Bakker',
    adres:'Dorpsstraat 88, 6921 GH Duiven', tel:'06-40028841', filiaal:'Online', medewerker:'Jeffrey',
    datum:'09-06-2026', klacht:'Inbranden zichtbaar linksboven, ghosting bij lichte beelden.', accessoires:'Geen',
    garantie:true, leen:true, doa:false, route:'LG Service', status:'eta', eta:'24 juni 2026 (was 17 jun)', progress:45,
    timeline:[
      {s:'done', t:'Aangemeld', tm:'9 jun · 13:40', comm:'Klant geïnformeerd'},
      {s:'done', t:'API-push naar LG Service', tm:'9 jun · 13:41', comm:'Klant geïnformeerd'},
      {s:'done', t:'Leentoestel uitgegeven', tm:'10 jun · 11:00', d:'LG NanoCell 50" als leenapparaat (borg geregistreerd).', comm:'Klant geïnformeerd'},
      {s:'alert', t:'ETA gewijzigd door merk', tm:'14 jun · 09:22', d:'Onderdeel (paneel) in backorder. Nieuwe ETA: 24 juni. Klant proactief geïnformeerd — geen verrassing meer.', comm:'Klant proactief geïnformeerd'},
      {s:'todo', t:'In reparatie', tm:'Verwacht 18 jun'},
    ],
  },
  { id:'251202204', merk:'Bose', type:'Smart Soundbar 600', serie:'BO-SB600-5521', klant:'K. Jansen',
    adres:'Veldweg 12, 7271 AT Borculo', tel:'06-19223344', filiaal:'Doetinchem', medewerker:'Anne',
    datum:'07-06-2026', klacht:'Geen geluid uit rechterkanaal, HDMI eARC niet herkend.', accessoires:'Netadapter, HDMI-kabel',
    garantie:false, leen:false, doa:false, route:'CE-Repair', status:'akkoord', eta:'—', progress:30,
    timeline:[
      {s:'done', t:'Aangemeld', tm:'7 jun · 15:10', comm:'Klant geïnformeerd'},
      {s:'done', t:'Buiten garantie vastgesteld', tm:'7 jun · 15:30', d:'Aankoopdatum gecontroleerd via factuur-upload (Cloudinary).'},
      {s:'current', t:'Wacht op akkoord klant', tm:'8 jun · 09:00', d:'Onderzoek uitgevoerd, prijsopgave digitaal verzonden. Klant kan met één tik akkoord geven in het portaal.', comm:'Akkoordverzoek verstuurd'},
      {s:'todo', t:'Doorzetten naar CE-Repair'},
    ],
  },
  { id:'251201880', merk:'Sonos', type:'Era 300', serie:'SON-ERA300-7781', klant:'T. Smit',
    adres:'Kerkstraat 5, 7311 GA Apeldoorn', tel:'06-55667788', filiaal:'Online', medewerker:'Jeffrey',
    datum:'05-06-2026', klacht:'Verbindt niet meer met wifi na update, blijft oranje knipperen.', accessoires:'Voedingskabel',
    garantie:true, leen:false, doa:false, route:'Sonos', status:'retour', eta:'18 juni 2026', progress:85,
    timeline:[
      {s:'done', t:'Aangemeld', tm:'5 jun · 11:20', comm:'Klant geïnformeerd'},
      {s:'done', t:'Troubleshoot + API-push Sonos', tm:'5 jun · 11:45', comm:'Klant geïnformeerd'},
      {s:'done', t:'Gerepareerd (moederbord)', tm:'13 jun · 14:00'},
      {s:'current', t:'Retour onderweg naar klant', tm:'16 jun · 09:30', d:'Track & trace gedeeld via portaal.', comm:'Klant geïnformeerd'},
      {s:'todo', t:'Afgerond', tm:'Verwacht 18 jun'},
    ],
  },
  { id:'251198120', merk:'Philips', type:'OLED808 55"', serie:'PH-808-3320', klant:'R. Mol',
    adres:'Stationsweg 2, 7101 GH Winterswijk', tel:'06-11002233', filiaal:'Winterswijk', medewerker:'Anne',
    datum:'02-06-2026', klacht:'Ambilight werkt deels niet, onderste ledstrip dood.', accessoires:'Afstandsbediening, voet',
    garantie:true, leen:false, doa:false, route:'CE-Repair', status:'afgerond', eta:'Afgerond 12 jun', progress:100,
    timeline:[
      {s:'done', t:'Aangemeld', tm:'2 jun · 09:00', comm:'Klant geïnformeerd'},
      {s:'done', t:'Gerepareerd & getest', tm:'10 jun · 16:00'},
      {s:'done', t:'Opgehaald in winkel Winterswijk', tm:'12 jun · 13:15', d:'Afgerond binnen Turnaround Time.', comm:'Klant geïnformeerd'},
    ],
  },
  { id:'251199540', merk:'JBL', type:'Bar 1300X', serie:'JBL-1300X-9921', klant:'S. Visser',
    adres:'Brink 9, 7411 BT Deventer', tel:'06-77889900', filiaal:'Online', medewerker:'Jeffrey',
    datum:'13-06-2026', klacht:'Subwoofer koppelt niet, soundbar herstart spontaan.', accessoires:'2× surroundspeakers',
    garantie:true, leen:false, doa:false, route:'CE-Repair', status:'troubleshoot', eta:'—', progress:15,
    timeline:[
      {s:'done', t:'Aangemeld', tm:'13 jun · 18:40', comm:'Klant geïnformeerd'},
      {s:'current', t:'Gezamenlijke troubleshoot loopt', tm:'14 jun · 09:10', d:'Verplichte stappen om NDF (No Defect Found) te voorkomen — boete bij onterechte inzending wordt zo vermeden.'},
      {s:'todo', t:'Goedkeuring & API-push'},
    ],
  },
  { id:'251200071', merk:'Samsung', type:'The Frame 55"', serie:'SN-FRAME-4410', klant:'L. Hendriks',
    adres:'Hoofdstraat 21, 7081 CA Gendringen', tel:'06-33445566', filiaal:'Doetinchem', medewerker:'Anne',
    datum:'14-06-2026', klacht:'One Connect Box geeft geen signaal door, kunstmodus loopt vast.', accessoires:'One Connect Box, kabel',
    garantie:true, leen:false, doa:false, route:'Samsung', status:'onderweg', eta:'23 juni 2026', progress:40,
    timeline:[
      {s:'done', t:'Aangemeld', tm:'14 jun · 10:05', comm:'Klant geïnformeerd'},
      {s:'done', t:'API-push naar Samsung', tm:'14 jun · 10:06', comm:'Klant geïnformeerd'},
      {s:'current', t:'Onderweg naar servicepartner', tm:'15 jun · 12:00', d:'QR-label gescand, PostNL opgehaald.', comm:'Klant geïnformeerd'},
      {s:'todo', t:'In reparatie'},
    ],
  },
];

const ODM = [
  {merk:'Sonos', type:'Move 2 — wit', serie:'251195109', herkomst:'DOA #251195109', status:'op-vrrd', loc:'Doetinchem · rek B3', sync:'Live'},
  {merk:'Samsung', type:'QN85B 55"', serie:'SN-QN85B-1102', herkomst:'Retour klant', status:'doorgestuurd', loc:'Onderweg → merk', sync:'Live'},
  {merk:'LG', type:'OLED B3 48"', serie:'LG-B3-7741', herkomst:'Open doos', status:'op-vrrd', loc:'Doetinchem · rek A1', sync:'Live'},
  {merk:'Bose', type:'Soundbar 900', serie:'BO-900-2293', herkomst:'DOA', status:'afgehandeld', loc:'Afgevoerd', sync:'Live'},
  {merk:'Philips', type:'The One 50"', serie:'PH-ONE-5567', herkomst:'Open doos', status:'op-vrrd', loc:'Winterswijk · rek C2', sync:'Live'},
];
const ODM_STATUS = {
  'op-vrrd':{label:'Op voorraad', pill:'p-green'},
  'doorgestuurd':{label:'Doorgestuurd', pill:'p-blue'},
  'afgehandeld':{label:'Afgehandeld', pill:'p-grey'},
};

const CLAIMS = [
  {merk:'CE-Repair', open:7, ingediend:4, ontvangen:12, sla:'Op schema'},
  {merk:'Sonos', open:2, ingediend:1, ontvangen:5, sla:'Op schema'},
  {merk:'Samsung', open:3, ingediend:2, ontvangen:8, sla:'1 te laat'},
  {merk:'LG', open:1, ingediend:0, ontvangen:3, sla:'Op schema'},
];

/* =====================================================================
   VIEW RENDERERS
===================================================================== */
const $ = s => document.querySelector(s);
const content = $('#content');

const PAGE = {
  dashboard:{title:'Overzicht', sub:'Dinsdag 17 juni 2026 · realtime servicebeeld'},
  reparaties:{title:'Reparaties', sub:'Alle lopende en afgeronde service-orders'},
  aanmelden:{title:'Nieuwe aanmelding', sub:'Gestandaardiseerd intakeformulier met troubleshoot-check'},
  logistiek:{title:'Retouren & logistiek', sub:'QR-inname, statusupdates en verzendkeuzes'},
  whatsapp:{title:'Interne AI-assistent', sub:'Vraag een orderstatus op via de servicebot'},
  odm:{title:'ODM-lijst', sub:'Open Doos Modellen — gesynchroniseerd, geen losse Excel meer'},
  sla:{title:'SLA & merkvergoedingen', sub:'Turnaround Times en te claimen vergoedingen bewaakt'},
  portaal:{title:'Klantportaal (preview)', sub:'Wat de klant ziet — einde van het "zwarte gat"'},
};

/* ---- DASHBOARD ---- */
function viewDashboard(){
  const open = ORDERS.filter(o=>o.status!=='afgerond').length;
  return `
  <div class="kpis">
    ${kpi('tool','42','Open reparaties','up','+6 deze week','var(--yellow-soft)','var(--yellow-deep)')}
    ${kpi('alert','3','DOA / ODM-flow','up','2 vandaag','var(--violet-soft)','var(--violet)')}
    ${kpi('clock','96%','Binnen 48u contact','up','+11% vs vorige maand','var(--green-soft)','var(--green)')}
    ${kpi('doc','13','Te claimen vergoedingen','down','−4 verwerkt','var(--blue-soft)','var(--blue)')}
  </div>

  <div class="grid" style="grid-template-columns:1.6fr 1fr;margin-top:18px">
    <div class="card pad">
      <div class="between" style="margin-bottom:18px">
        <div><div class="eyebrow">Deze week</div><div style="font-family:var(--font-d);font-size:17px;font-weight:700;margin-top:3px">Contactmomenten over orderstatus</div></div>
        <span class="pill p-green"><span class="dot"></span>−55% doel</span>
      </div>
      <div class="bars">
        ${barCol('Ma',70,'alt')}${barCol('Di',62,'alt')}${barCol('Wo',48,'alt')}${barCol('Do',40,'')}${barCol('Vr',31,'')}${barCol('Za',22,'')}${barCol('Zo',18,'')}
      </div>
      <div class="between" style="margin-top:16px;font-size:12.5px;color:var(--ink-3)">
        <span style="display:inline-flex;align-items:center;gap:7px"><span style="width:10px;height:10px;border-radius:3px;background:var(--ink);display:inline-block"></span>Vóór automatisering</span>
        <span style="display:inline-flex;align-items:center;gap:7px"><span style="width:10px;height:10px;border-radius:3px;background:var(--yellow);display:inline-block"></span>Na proactieve updates</span>
      </div>
    </div>

    <div class="card pad">
      <div class="eyebrow">Verdeling status</div>
      <div class="donut-wrap" style="margin-top:18px">
        ${donut()}
        <div class="legend">
          ${leg('var(--yellow-deep)','In reparatie',14)}
          ${leg('var(--blue)','Onderweg / retour',11)}
          ${leg('var(--violet)','Troubleshoot / DOA',6)}
          ${leg('var(--red)','Actie vereist',4)}
          ${leg('var(--green)','Afgerond',7)}
        </div>
      </div>
    </div>
  </div>

  <div class="sec-h"><h2>Aandacht vereist</h2><div class="line"></div><button class="btn btn-ghost" data-go="reparaties">Alle reparaties ${ic('arrow')}</button></div>
  <div class="card">
    <div style="padding:16px 6px 0">
      <table class="tbl">
        <thead><tr><th>Order</th><th>Product</th><th>Klant</th><th>Status</th><th>ETA</th><th></th></tr></thead>
        <tbody>
          ${ORDERS.filter(o=>['eta','akkoord','doa'].includes(o.status)).map(orderRow).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}
function kpi(icon,val,lab,dir,trend,bg,fg){
  return `<div class="kpi">
    <div class="ic" style="background:${bg};color:${fg}">${ic(icon)}</div>
    <div class="trend ${dir}">${dir==='up'?'▲':'▼'} ${trend}</div>
    <div class="val">${val}</div><div class="lab">${lab}</div>
  </div>`;
}
function barCol(l,h,alt){return `<div class="bar-col"><div class="bar ${alt}" style="height:${h}%"></div><div class="bar-lab">${l}</div></div>`;}
function leg(c,l,n){return `<div class="li"><span class="sw" style="background:${c}"></span>${l}<span class="ct">${n}</span></div>`;}
function donut(){
  const segs=[['#E0A800',14],['#0EA5E9',11],['#7C5CFC',6],['#DC2626',4],['#15A24A',7]];
  const tot=segs.reduce((a,[,n])=>a+n,0); let off=0; const r=52,c=2*Math.PI*r;
  const ring=segs.map(([col,n])=>{const len=c*n/tot;const s=`<circle cx="70" cy="70" r="${r}" fill="none" stroke="${col}" stroke-width="20" stroke-dasharray="${len} ${c-len}" stroke-dashoffset="${-off}" transform="rotate(-90 70 70)"/>`;off+=len;return s;}).join('');
  return `<svg width="140" height="140" viewBox="0 0 140 140">${ring}<text x="70" y="66" text-anchor="middle" font-family="Outfit" font-weight="800" font-size="26" fill="#18181B">${tot}</text><text x="70" y="86" text-anchor="middle" font-family="Inter" font-size="11" fill="#71717A">orders</text></svg>`;
}

/* ---- REPARATIES (list) ---- */
function orderRow(o){
  return `<tr data-order="${o.id}">
    <td><span class="ordno">${o.id}</span></td>
    <td><div class="prod">${o.merk} ${o.type}</div><div class="sub">${o.route}${o.doa?' · DOA':''}</div></td>
    <td><div style="display:flex;align-items:center;gap:9px"><span class="ava-sm">${o.klant.split(' ').slice(-1)[0][0]}</span>${o.klant}</div></td>
    <td>${pill(o.status)}</td>
    <td class="sub">${o.eta}</td>
    <td style="text-align:right;color:var(--ink-4)">${ic('arrow')}</td>
  </tr>`;
}
function viewReparaties(){
  return `
  <div class="between" style="margin-bottom:18px">
    <div class="chips">
      <button class="chip on" data-filter="alle">Alle (${ORDERS.length})</button>
      <button class="chip" data-filter="reparatie">In reparatie</button>
      <button class="chip" data-filter="onderweg">Onderweg</button>
      <button class="chip" data-filter="akkoord">Actie vereist</button>
      <button class="chip" data-filter="afgerond">Afgerond</button>
    </div>
    <button class="btn btn-yellow" data-go="aanmelden">${ic('doc')} Nieuwe aanmelding</button>
  </div>
  <div class="card">
    <div style="padding:16px 6px 0">
      <table class="tbl">
        <thead><tr><th>Order</th><th>Product</th><th>Klant</th><th>Status</th><th>ETA</th><th></th></tr></thead>
        <tbody id="orderBody">${ORDERS.map(orderRow).join('')}</tbody>
      </table>
    </div>
  </div>`;
}

/* ---- ORDER DETAIL (digitale reparatiebon + timeline) ---- */
function viewOrder(id){
  const o = ORDERS.find(x=>x.id===id); if(!o) return viewReparaties();
  return `
  <a class="back" data-go="reparaties"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M11 6l-6 6 6 6"/></svg>Terug naar reparaties</a>
  <div class="orderhero" style="margin-bottom:18px">
    <div>
      <div class="lab">Ordernummer · ${o.merk} ${o.type}</div>
      <div class="no">${o.id}</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center">
      ${pill(o.status)}
      <button class="btn btn-primary" data-toast="Data via API doorgezet naar ${o.route} — geen handmatig overkloppen.">${ic('send')} Push naar ${o.route}</button>
    </div>
  </div>

  <div class="grid" style="grid-template-columns:1.1fr 1fr">
    <!-- digitale bon -->
    <div class="card pad">
      <div class="between" style="margin-bottom:16px">
        <div style="font-family:var(--font-d);font-size:16px;font-weight:700">Reparatiebon</div>
        <span class="sub">${o.datum} · ${o.filiaal} · ${o.medewerker}</span>
      </div>
      <div class="two">
        <div class="field"><label>Merk</label><div class="vbox">${o.merk}</div></div>
        <div class="field"><label>Type</label><div class="vbox">${o.type}</div></div>
      </div>
      <div class="field"><label>Serienummer</label><div class="vbox">${o.serie}</div></div>
      <div class="field"><label>Omschrijving klacht / defect</label><div class="vbox area">${o.klacht}</div></div>
      <div class="two">
        <div class="field"><label>Accessoires meegezonden</label><div class="vbox">${o.accessoires}</div></div>
        <div class="field"><label>Route</label><div class="vbox">${o.route}${o.doa?' · DOA':''}</div></div>
      </div>
      <div class="two">
        <div class="field"><label>Garantie</label><div class="vbox">${o.garantie?'<span class="pill p-green"><span class="dot"></span>Ja — factuur bijgevoegd</span>':'<span class="pill p-grey"><span class="dot"></span>Buiten garantie</span>'}</div></div>
        <div class="field"><label>Leenapparaat</label><div class="vbox">${o.leen?'Ja — geregistreerd':'Nee'}</div></div>
      </div>
      <div class="divider"></div>
      <div class="field" style="margin-bottom:0">
        <label>Bewijsmateriaal & foto's <span class="demo-flag">${ic('box')} Cloudinary</span></label>
        <div style="display:flex;gap:10px;margin-top:4px">
          ${[1,2,3].map(()=>`<div style="width:74px;height:74px;border-radius:12px;background:var(--field);border:1px dashed var(--line);display:grid;place-items:center;color:var(--ink-4)">${ic('box')}</div>`).join('')}
          <div style="width:74px;height:74px;border-radius:12px;border:1px dashed var(--ink-4);display:grid;place-items:center;color:var(--ink-3);font-size:11px;font-weight:600;text-align:center">+ upload</div>
        </div>
      </div>
    </div>

    <!-- klant + timeline -->
    <div class="stack" style="gap:18px">
      <div class="card pad">
        <div class="eyebrow">Klantgegevens</div>
        <div style="margin-top:12px" class="field"><label>Naam</label><div class="vbox">${o.klant}</div></div>
        <div class="field"><label>Adres</label><div class="vbox">${o.adres}</div></div>
        <div class="field" style="margin-bottom:0"><label>Telefoon</label><div class="vbox">${o.tel}</div></div>
      </div>
      <div class="card pad">
        <div class="between" style="margin-bottom:18px">
          <div class="eyebrow">Statusverloop — proactief</div>
          <span class="pill p-green"><span class="dot"></span>Klant up-to-date</span>
        </div>
        <div class="timeline">
          ${o.timeline.map(tlItem).join('')}
        </div>
      </div>
    </div>
  </div>`;
}
function tlItem(t){
  const cls = t.s==='done'?'done':t.s==='current'?'current':t.s==='alert'?'alert':'';
  const dot = t.s==='done'?ic('check'):t.s==='alert'?ic('alert'):t.s==='current'?ic('clock'):'';
  return `<div class="tl-item ${cls}">
    <div class="tl-dot">${dot}</div>
    <div class="tl-t">${t.t}</div>
    <div class="tl-time">${t.tm||''}</div>
    ${t.d?`<div class="tl-d">${t.d}</div>`:''}
    ${t.comm?`<div class="tl-comm">${ic('chat')} ${t.comm}</div>`:''}
  </div>`;
}

/* ---- AANMELDEN (intake form) ---- */
function viewAanmelden(){
  return `
  <div class="grid" style="grid-template-columns:1.3fr 1fr;max-width:1100px">
    <div class="card pad">
      <div class="eyebrow">Stap 1 — verplichte gezamenlijke troubleshoot</div>
      <p class="muted" style="font-size:13.5px;margin:8px 0 16px">Voorkomt onterechte inzendingen en de "No Defect Found"-correctie. Pas na akkoord wordt de aanmelding doorgezet.</p>
      ${['Klacht reproduceerbaar met klant doorlopen','Voeding / kabels / bron getest','Reset of firmware-update geprobeerd','Serienummer & garantie geverifieerd'].map((t,i)=>`
        <label style="display:flex;align-items:center;gap:12px;padding:13px;border:1px solid var(--line);border-radius:13px;margin-bottom:9px;cursor:pointer;font-size:14px" class="ts-row">
          <input type="checkbox" ${i<3?'checked':''} style="width:18px;height:18px;accent-color:var(--yellow-deep)"> ${t}
        </label>`).join('')}
      <div class="divider"></div>
      <div class="eyebrow">Stap 2 — productgegevens</div>
      <div class="two" style="margin-top:12px">
        <div class="field"><label>Merk</label>
          <select id="merkSelect" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--line);background:var(--field);color:var(--ink);font-family:inherit;font-size:14px">
            <option value="">Selecteer merk…</option>
            ${Object.keys(BRANDS_MODELS).sort().map(m=>`<option value="${m}">${m}</option>`).join('')}
            <option value="Anders">Anders...</option>
          </select>
        </div>
        <div class="field"><label>Type</label>
          <select id="typeSelect" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--line);background:var(--field);color:var(--ink);font-family:inherit;font-size:14px" disabled>
            <option value="">Kies eerst een merk…</option>
          </select>
        </div>
      </div>
      <div class="field"><label>Serienummer <span class="demo-flag">${ic('check')} auto-herkenning</span></label><input class="vbox" style="width:100%;color:var(--ink);font-family:inherit;border:none;background:var(--field)" placeholder="Scan of voer in…"/></div>
      <div class="field"><label>Omschrijving klacht — geen "nakijken" of "defect"</label><textarea class="vbox area" style="width:100%;color:var(--ink);font-family:inherit;border:none;background:var(--field);resize:vertical" placeholder="Beschrijf het probleem zo concreet mogelijk…"></textarea></div>
      <button class="btn btn-yellow" data-toast="Aanmelding doorgezet. Klant ontvangt automatisch een trackinglink." style="width:100%;justify-content:center;margin-top:6px">${ic('send')} Aanmelding doorzetten naar merk / CE-Repair</button>
    </div>
    <div class="stack" style="gap:18px">
      <div class="card pad" style="background:var(--ink);color:#fff">
        <div class="eyebrow" style="color:var(--yellow)">Waarom dit werkt</div>
        <ul style="list-style:none;margin-top:14px;display:flex;flex-direction:column;gap:14px">
          ${[['check','Geen handmatig overkloppen','Goedgekeurde aanmeldingen gaan via API direct naar het merk.'],['chat','Geen "zwart gat"','Klant krijgt automatisch een trackinglink en updates.'],['alert','NDF-boete bewaakt','Verplichte troubleshoot voorkomt onterechte inzendingen.']].map(([i,t,d])=>`
            <li style="display:flex;gap:12px"><span style="flex:0 0 34px;width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.1);display:grid;place-items:center;color:var(--yellow)">${ic(i)}</span><div><div style="font-family:var(--font-d);font-weight:600;font-size:14px">${t}</div><div style="font-size:12.5px;color:#a1a1aa;margin-top:2px">${d}</div></div></li>`).join('')}
        </ul>
      </div>
      <div class="card pad">
        <div class="eyebrow">Live preview klantbericht</div>
        <div style="margin-top:12px;background:var(--yellow-soft);border:1px solid #f1e3a8;border-radius:14px;padding:14px;font-size:13.5px">
          <strong style="font-family:var(--font-d)">Bedankt, je aanmelding staat klaar 👍</strong><br>
          We houden je per stap op de hoogte. Volg je reparatie live via je persoonlijke trackinglink.
        </div>
      </div>
    </div>
  </div>`;
}

/* ---- LOGISTIEK ---- */
function viewLogistiek(){
  return `
  <div class="grid" style="grid-template-columns:1fr 1fr 1fr">
    ${[
      ['box','Inleveren in winkel','Klant kiest een filiaal. QR-label wordt direct getoond en gemaild.','Doetinchem · Breda · Winterswijk'],
      ['pin','Thuisophaling','Klant kiest een dag (geen tijdvak — voorkomt valse verwachtingen).','Eerstvolgende: do 19 jun'],
      ['truck','Verzenden via PostNL','Geautomatiseerd label + track & trace gekoppeld aan de order.','Scan = automatische statusupdate'],
    ].map(([i,t,d,s])=>`
      <div class="card pad">
        <div class="ic" style="width:42px;height:42px;border-radius:12px;background:var(--yellow-soft);color:var(--yellow-deep);display:grid;place-items:center;margin-bottom:14px">${ic(i)}</div>
        <div style="font-family:var(--font-d);font-size:16px;font-weight:700">${t}</div>
        <p class="muted" style="font-size:13.5px;margin:7px 0 12px">${d}</p>
        <div class="pill p-grey"><span class="dot"></span>${s}</div>
      </div>`).join('')}
  </div>

  <div class="grid" style="grid-template-columns:1fr 1.4fr;margin-top:18px">
    <div class="card pad" style="text-align:center">
      <div class="eyebrow">Retourlabel</div>
      <div style="display:flex;justify-content:center;margin:18px 0">
        ${qrSvg()}
      </div>
      <div style="font-family:var(--font-d);font-weight:700;font-size:15px">Order 251195109</div>
      <p class="muted tiny" style="margin-top:6px">Klant plakt deze QR op de doos. Bij binnenkomst in Doetinchem scannen → automatische update naar de klant.</p>
      <button class="btn btn-ghost" data-toast="QR-label opnieuw verzonden naar klant." style="margin-top:14px">${ic('send')} Label opnieuw sturen</button>
    </div>
    <div class="card pad">
      <div class="between" style="margin-bottom:14px"><div class="eyebrow">Binnenkomende pakketten</div><span class="pill p-blue"><span class="dot"></span>Scan om te koppelen</span></div>
      <table class="tbl">
        <thead><tr><th>QR / referentie</th><th>Gekoppelde order</th><th>Status bij binnenkomst</th></tr></thead>
        <tbody>
          <tr><td><span class="ordno">QR-9F2A</span></td><td>251204417 · Samsung QN90C</td><td>${pill('reparatie')}</td></tr>
          <tr><td><span class="ordno">QR-3C71</span></td><td>251200071 · The Frame 55"</td><td>${pill('onderweg')}</td></tr>
          <tr><td><span class="ordno">QR-7B40</span></td><td><span class="muted">Niet gekoppeld — scan vereist</span></td><td>${pill('aangemeld')}</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
}
function qrSvg(){
  // decoratieve QR-achtige matrix
  let cells='';const g=11;const seed=[0,1,4,5,6,9,10];
  for(let y=0;y<g;y++)for(let x=0;x<g;x++){const on=((x*7+y*3+ (x%3) + (y%4))%5<2)|| (x<3&&y<3)||(x>g-4&&y<3)||(x<3&&y>g-4);if(on)cells+=`<rect x="${x*10}" y="${y*10}" width="9" height="9" rx="2" fill="#18181B"/>`;}
  return `<div class="qr"><svg viewBox="0 0 110 110">${cells}</svg></div>`;
}

/* ---- WHATSAPP / AI ASSISTANT ---- */
function viewWhatsapp(){
  return `
  <div class="chips" style="margin-bottom:18px" id="waTabs">
    <button class="chip on" data-watab="intern">Interne AI (Medewerkers)</button>
    <button class="chip" data-watab="extern">Externe Bot (16 Filialen)</button>
  </div>

  <div id="tab-intern" class="grid" style="grid-template-columns:1fr 1fr;align-items:start">
    <div>
      <div class="wa">
        <div class="wa-head">
          <div class="ava">${ic('chat')}</div>
          <div><div class="nm">helloTV Service-bot</div><div class="st">online · gekoppeld aan database</div></div>
        </div>
        <div class="wa-body" id="waBodyIntern">
          ${bubble('in','Hoi! 👋 Stuur me een <strong>ordernummer</strong> of <strong>serienummer</strong> en ik geef je direct de actuele status.','09:01')}
        </div>
        <div class="wa-sugg" id="waSuggIntern">
          <button data-q="251195109">251195109</button>
          <button data-q="voorraad LG OLED">Voorraad LG OLED?</button>
        </div>
        <div class="wa-input">
          <input id="waInputIntern" placeholder="Typ een ordernummer…" />
          <button id="waSendIntern">${ic('send')}</button>
        </div>
      </div>
    </div>
    <div class="stack" style="gap:18px">
      <div class="card pad">
        <div class="eyebrow">Voor wie</div>
        <div style="font-family:var(--font-d);font-size:17px;font-weight:700;margin-top:4px">Winkel- en supportmedewerkers</div>
        <p class="muted" style="font-size:13.5px;margin-top:8px">Geen klant meer in de wacht en geen memo's naar Doetinchem. De medewerker appt een ordernummer en krijgt direct de status.</p>
      </div>
      <div class="card pad" style="background:var(--violet-soft);border-color:#ddd3fb">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <span style="color:var(--violet)">${ic('alert')}</span>
          <p class="tiny" style="color:#5b3fd6">Prototype: antwoorden komen uit demo-data in de browser. In productie via de API op de centrale database, met een taalmodel voor vrije vragen.</p>
        </div>
      </div>
    </div>
  </div>

  <div id="tab-extern" class="grid" style="grid-template-columns:1fr 1fr;align-items:start;display:none">
    <div>
      <div class="wa">
        <div class="wa-head" style="background:#0f7a37;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:12px">
            <div class="ava" style="background:#fff">${ic('chat')}</div>
            <div><div class="nm" id="waStoreName">helloTV Doetinchem (Filiaal)</div><div class="st" style="color:#e4f7ea">Klantenservice Bot</div></div>
          </div>
          <div>
            <select id="waStoreSelect" style="background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.4);padding:4px 8px;border-radius:6px;outline:none;font-size:12px;font-family:inherit">
              ${['Doetinchem', 'Amsterdam', 'Breda', 'Den Bosch', 'Den Haag', 'Duiven', 'Eindhoven', 'Groningen', 'Haarlem', 'Leeuwarden', 'Leiderdorp', 'Nijmegen', 'Rotterdam', 'Tilburg', 'Utrecht', 'Zoeterwoude'].map(s => `<option value="${s}" style="color:#000">${s}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="wa-body" id="waBodyExtern">
          ${bubble('in','Welkom bij helloTV Doetinchem! Hoe kunnen we je helpen?','10:00')}
        </div>
        <div class="wa-sugg" id="waSuggExtern">
          <button data-q="Mijn tv gaat niet meer aan">Tv gaat niet aan</button>
          <button data-q="Ik wil doorverwezen worden naar support">Doorverwijzen naar support</button>
        </div>
        <div class="wa-input">
          <input id="waInputExtern" placeholder="Typ je bericht als klant…" />
          <button id="waSendExtern">${ic('send')}</button>
        </div>
      </div>
    </div>
    <div class="stack" style="gap:18px">
      <div class="card pad">
        <div class="eyebrow">Doorschakeling naar Support</div>
        <p class="muted" style="font-size:13.5px;margin-top:8px">Wanneer de lokale filiaalbot een reparatie-vraag detecteert, schakelt deze automatisch door. Het hele klantverhaal kan direct gekopieerd worden naar het nieuwe ordemanagementsysteem (klaar voor API in oktober).</p>
        <div style="margin-top:12px;padding:12px;background:var(--field);border-radius:8px;font-size:13px;border:1px solid var(--line-2)" id="waContextBox">
          <em>Nog geen klachtomschrijving ontvangen via doorschakeling...</em>
        </div>
        <button class="btn btn-ghost" style="margin-top:10px" id="waCopyBtn" data-toast="Tekst gekopieerd naar klembord!">${ic('doc')} Kopieer Omschrijving</button>
        <button class="btn btn-primary" style="margin-top:10px;margin-left:10px" data-toast="API-status gekoppeld aan nieuw OMS">${ic('send')} Koppel Status API (OMS oktober)</button>
      </div>
    </div>
  </div>`;
}
function bubble(dir,html,tm){return `<div class="bub ${dir}">${html}<span class="tm">${tm}</span></div>`;}

function botReplyIntern(qRaw){
  const q=qRaw.toLowerCase().trim();
  
  // Order lookup
  const o=ORDERS.find(x=>q.includes(x.id)||q.includes(x.serie.toLowerCase()));
  if(o){
    const cur=o.timeline.find(t=>t.s==='current'||t.s==='alert')||o.timeline[o.timeline.length-1];
    return `<strong>${o.merk} ${o.type}</strong> — order ${o.id}\n📦 Status: <strong>${STATUS[o.status].label}</strong>\n👤 ${o.klant} (${o.filiaal})\n🗓️ ETA: ${o.eta}\n📍 Laatste stap: ${cur.t}\n${o.leen?'🔁 Leentoestel actief.\n':''}✅ Klant is automatisch op de hoogte gehouden.`;
  }
  
  // Stock check
  if(q.includes('voorraad')){
    const hit=ODM.find(x=>q.includes(x.merk.toLowerCase()));
    if(hit) return `Voorraad <strong>${hit.merk} ${hit.type}</strong>:\n📍 ${hit.loc}\nStatus: ${ODM_STATUS[hit.status].label}\n(bron: ODM-lijst, live gesynchroniseerd)`;
    return `Voorraadcheck loopt live via de centrale database. Noem een merk/type, dan zoek ik het filiaal erbij — bijv. "voorraad LG OLED".`;
  }
  
  // ETA logic
  if(q.includes('eta') || q.includes('wanneer')) return `ETA-wijzigingen worden automatisch doorgezet naar de klant zodra het merk een nieuwe datum meldt. Geef een ordernummer, dan toon ik de actuele ETA.`;
  
  // Sales / Internal procedures
  if(q.includes('kopen') || q.includes('klant wil tv') || q.includes('verkopen') || q.includes('offerte')) return `Als een klant direct wil kopen, gebruik dan het VMS of Magento systeem om de order aan te maken. Heb je specifiek aankoopadvies nodig voor de klant? Gebruik onze interne 'helloTV Academy' kennisbank.`;
  
  // Repairs general
  if(q.includes('reparatie') || q.includes('service') || q.includes('aanmelden') || q.includes('defect')) return `Meld nieuwe reparaties altijd aan via het formulier "Nieuwe Aanmelding" in dit dashboard. Zorg dat je de verplichte troubleshoot-check doet om "No Defect Found" boetes te voorkomen.`;
  
  // Fallback
  if(/(hoi|hallo|hey|help)/.test(q)) return `Hoi! Ik help je met orderstatussen, reparatie-instructies, ETA, en voorraad (bijv. order 251195109 of "voorraad Samsung").`;
  return `Ik kon daar geen order bij vinden. Probeer een ordernummer (8 cijfers) of stel een vraag over een procedure.`;
}

function botReplyExtern(qRaw){
  const q=qRaw.toLowerCase().trim();
  
  // Service/Repair matching
  if(q.includes('tv gaat niet aan') || q.includes('kapot') || q.includes('defect') || q.includes('probleem') || q.includes('niet meer') || q.includes('reparatie') || q.includes('service') || q.includes('garantie') || q.includes('stuk')) {
    setTimeout(() => {
      const box = document.getElementById('waContextBox');
      if(box) box.innerHTML = `<strong>Ontvangen serviceverzoek (doorgeschakeld):</strong><br/>"${qRaw}"`;
    }, 900);
    return `Wat vervelend om te horen! Dit klinkt als een vraag voor onze specialisten. Ik ga je nu direct doorverbinden met de centrale Service & Support afdeling van helloTV.\n\n<em>Doorgeschakeld naar Service & Support... Jouw bericht is meegestuurd.</em>`;
  }
  
  // Status/Order tracking
  if(q.includes('status') || q.includes('zending') || q.includes('waar is') || q.includes('bezorg') || q.includes('volg')) {
    return `Wil je de status van je zending of reparatie weten? Je kunt je bestelling live volgen via ons klantportaal! Vul daarvoor je ordernummer of serienummer in bij "Volg je reparatie", of geef je ordernummer (8 cijfers) hier even door.`;
  }
  
  // Buying/Advice
  if(q.includes('kopen') || q.includes('advies') || q.includes('welke tv') || q.includes('prijs') || q.includes('aanbieding')) {
    return `Wat leuk dat je op zoek bent naar een nieuwe TV of audio! Onze experts in dit filiaal helpen je heel graag met persoonlijk advies. Wil je dat ik direct een afspraak voor je inplan, of kom je spontaan langs?`;
  }
  
  // Fallback
  return `Bedankt voor je bericht aan helloTV. Voor technische vragen kan ik je doorverbinden met Service & Support, of onze filiaalmedewerkers kunnen je adviseren bij een aankoop. Waarmee kan ik je helpen?`;
}

/* ---- ODM ---- */
function viewOdm(){
  return `
  <div class="card pad" style="margin-bottom:18px;background:var(--ink);color:#fff">
    <img src="new_logo.png" class="logo-img" style="margin-bottom:10px" alt="helloTV"/>
    <h2 style="font-family:var(--font-d);font-size:20px;font-weight:700">Open Doos Modellen Registratie</h2>
    <p style="color:#a1a1aa;font-size:13.5px;margin-top:4px">Meld een toestel aan voor de ODM-voorraad of pas een bestaande status aan.</p>
  </div>

  <div class="between" style="margin-bottom:18px">
    <div class="row">
      <div class="card pad" style="padding:14px 20px"><div class="eyebrow">Op voorraad</div><div style="font-family:var(--font-d);font-size:26px;font-weight:700">3</div></div>
      <div class="card pad" style="padding:14px 20px"><div class="eyebrow">Doorgestuurd</div><div style="font-family:var(--font-d);font-size:26px;font-weight:700">1</div></div>
      <div class="card pad" style="padding:14px 20px"><div class="eyebrow">Sync-status</div><div class="pill p-green" style="margin-top:6px"><span class="dot"></span>Live · geen Excel</div></div>
    </div>
    <button class="btn btn-yellow" id="odmAddBtn">${ic('box')} Model toevoegen</button>
  </div>

  <div class="card pad" id="odmAddForm" style="display:none;margin-bottom:18px;border-left:4px solid var(--yellow)">
    <div class="eyebrow">Nieuw Open Doos Model Aanmelden</div>
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:12px;margin-top:12px">
      <div class="field"><label>Merk</label><select style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--line);font-family:inherit"><option>Samsung</option><option>LG</option><option>Sonos</option><option>Bose</option></select></div>
      <div class="field"><label>Type</label><input placeholder="Bijv. QN90C" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--line);font-family:inherit"/></div>
      <div class="field"><label>Serienummer</label><input placeholder="Scan of typ..." style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--line);font-family:inherit"/></div>
      <div class="field"><label>Locatie</label><select style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--line);font-family:inherit"><option>Doetinchem</option><option>Breda</option><option>Winterswijk</option></select></div>
    </div>
    <button class="btn btn-primary" id="odmSaveBtn" data-toast="Model succesvol toegevoegd aan de ODM-lijst." style="margin-top:8px">Opslaan & toevoegen</button>
  </div>

  <div class="card">
    <div style="padding:16px 6px 0">
      <table class="tbl">
        <thead><tr><th>Merk</th><th>Type</th><th>Serienummer</th><th>Herkomst</th><th>Locatie</th><th>Status</th><th>Sync</th></tr></thead>
        <tbody>
          ${ODM.map(m=>`<tr style="cursor:default">
            <td class="prod">${m.merk}</td><td>${m.type}</td><td class="sub">${m.serie}</td>
            <td class="sub">${m.herkomst}</td><td class="sub">${m.loc}</td>
            <td><span class="pill ${ODM_STATUS[m.status].pill}"><span class="dot"></span>${ODM_STATUS[m.status].label}</span></td>
            <td><span class="pill p-green"><span class="dot"></span>${m.sync}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  <div class="card pad" style="margin-top:18px;display:flex;gap:12px;align-items:flex-start">
    <span style="color:var(--green)">${ic('check')}</span>
    <p class="tiny muted">Elk toestel wordt automatisch bijgewerkt: ingeboekt → op voorraad → doorgestuurd → afgehandeld. Voorraadverplaatsingen tussen filialen triggeren de status — niet langer afhankelijk van handmatig bijwerken van een losse sheet.</p>
  </div>`;
}

/* ---- SLA ---- */
function viewSla(){
  return `
  <div class="grid" style="grid-template-columns:1fr 1fr 1fr">
    ${[['Eerste contact binnen 48u','96%',96,'p-green'],['Afspraak binnen 14 dagen (TAT)','89%',89,'p-yellow'],['Proactieve ETA-communicatie','100%',100,'p-green']].map(([t,v,p,cl])=>`
      <div class="card pad">
        <div class="eyebrow">${t}</div>
        <div style="font-family:var(--font-d);font-size:30px;font-weight:700;margin:8px 0 12px">${v}</div>
        <div class="pbar"><i style="width:${p}%"></i></div>
        <div class="pill ${cl}" style="margin-top:12px"><span class="dot"></span>${p>=95?'Op schema':p>=85?'Aandacht':'Onder norm'}</div>
      </div>`).join('')}
  </div>

  <div class="sec-h"><h2>Te claimen merkvergoedingen</h2><div class="line"></div><span class="pill p-blue"><span class="dot"></span>Gecentraliseerd · geen losse sheet</span></div>
  <div class="card">
    <div style="padding:16px 6px 0">
      <table class="tbl">
        <thead><tr><th>Merk / partner</th><th>Open</th><th>Ingediend</th><th>Ontvangen</th><th>Bewaking</th></tr></thead>
        <tbody>
          ${CLAIMS.map(c=>`<tr style="cursor:default">
            <td class="prod">${c.merk}</td>
            <td><span class="pill p-yellow"><span class="dot"></span>${c.open} open</span></td>
            <td class="sub">${c.ingediend}</td>
            <td class="sub">${c.ontvangen}</td>
            <td>${c.sla.includes('te laat')?`<span class="pill p-red"><span class="dot"></span>${c.sla}</span>`:`<span class="pill p-green"><span class="dot"></span>${c.sla}</span>`}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  <div class="card pad" style="margin-top:18px;display:flex;gap:12px;align-items:flex-start">
    <span style="color:var(--blue)">${ic('doc')}</span>
    <p class="tiny muted">Elke werkzaamheid wordt centraal gelogd met de bijbehorende, te claimen vergoeding. Turnaround Times worden softwarematig bewaakt — niet langer afhankelijk van een foutgevoelige Google Doc of Excel-sheet.</p>
  </div>`;
}

/* ---- KLANTPORTAAL ---- */
function viewPortaal(){
  const o=ORDERS.find(x=>x.id==='251204417');
  return `
  <div class="portal">
    <div class="track-hero" style="padding:10px 16px;background:var(--ink);color:#fff;border-radius:8px;margin-bottom:18px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <div style="flex:1;min-width:200px">
        <h2 style="font-family:var(--font-d);font-size:15px;font-weight:700">tv volg je reparatie</h2>
        <p style="color:#a1a1aa;font-size:12px;margin-top:2px">Altijd up-to-date. Geen "wanneer hoor ik wat" meer.</p>
      </div>
      <div class="track-search" style="margin:0;display:flex;gap:8px">
        <input id="trackInput" placeholder="Ordernummer..." value="251204417" style="padding:6px 10px;font-size:13px;border-radius:6px;border:none;color:var(--ink)"/>
        <button class="btn btn-yellow" id="trackBtn" style="padding:6px 12px;font-size:13px">${ic('arrow')} Volg</button>
      </div>
    </div>

    <div class="card pad" style="margin-bottom:18px;background:var(--ink);text-align:center;padding:24px">
      <h2 style="font-family:var(--font-d);font-size:20px;font-weight:800;color:var(--yellow);margin-bottom:24px">Jouw Reparatie in 3 Simpele Stappen</h2>
      <div style="display:flex;justify-content:center;align-items:flex-end;gap:24px;flex-wrap:wrap">
        
        <!-- Bubble 1: Small -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
          <div style="position:relative;width:90px;height:90px">
            <svg viewBox="0 0 100 100" style="width:100%;height:100%;overflow:visible">
              <path d="M 50,5 A 45,45 0 1,1 18,81 L 5,105 L 32,89 A 45,45 0 0,1 50,5 Z" fill="none" stroke="var(--yellow)" stroke-width="5" stroke-linejoin="round"/>
            </svg>
            <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;padding:10%">
              <span style="font-family:var(--font-d);font-weight:800;font-size:14px;color:#fff;line-height:1.2">1.<br/>MELD<br/>AAN</span>
            </div>
          </div>
        </div>

        <!-- Bubble 2: Medium -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
          <div style="position:relative;width:110px;height:110px">
            <svg viewBox="0 0 100 100" style="width:100%;height:100%;overflow:visible">
              <path d="M 50,5 A 45,45 0 1,1 18,81 L 5,105 L 32,89 A 45,45 0 0,1 50,5 Z" fill="none" stroke="var(--yellow)" stroke-width="5" stroke-linejoin="round"/>
            </svg>
            <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;padding:10%">
              <span style="font-family:var(--font-d);font-weight:800;font-size:16px;color:#fff;line-height:1.2">2.<br/>VOLG<br/>LIVE</span>
            </div>
          </div>
        </div>

        <!-- Bubble 3: Large -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
          <div style="position:relative;width:140px;height:140px">
            <svg viewBox="0 0 100 100" style="width:100%;height:100%;overflow:visible">
              <path d="M 50,5 A 45,45 0 1,1 18,81 L 5,105 L 32,89 A 45,45 0 0,1 50,5 Z" fill="none" stroke="var(--yellow)" stroke-width="5" stroke-linejoin="round"/>
            </svg>
            <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;padding:10%">
              <span style="font-family:var(--font-d);font-weight:800;font-size:20px;color:#fff;line-height:1.1">3.<br/>SNEL<br/>WEER<br/>KIJKEN!</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div id="trackResult" style="margin-top:18px">${portalCard(o)}</div>
  </div>`;
}
function portalCard(o){
  if(!o) return `<div class="card pad empty">Geen reparatie gevonden. Controleer je ordernummer.</div>`;
  return `
  <div class="card pad">
    <div class="between" style="margin-bottom:16px;flex-wrap:wrap;gap:12px">
      <div><div class="eyebrow">Order ${o.id}</div><div style="font-family:var(--font-d);font-size:19px;font-weight:700;margin-top:3px">${o.merk} ${o.type}</div></div>
      ${pill(o.status)}
    </div>
    <div class="pbar"><i style="width:${o.progress}%"></i></div>
    <div class="between" style="margin-top:8px"><span class="tiny muted">Aangemeld</span><span class="tiny muted" style="font-weight:600;color:var(--ink-2)">Verwachte gereedheid: ${o.eta}</span></div>
    <div class="divider"></div>
    <div class="timeline">${o.timeline.map(tlItem).join('')}</div>
    <div class="divider"></div>
    <div class="between" style="flex-wrap:wrap;gap:12px">
      <div class="stack"><span class="eyebrow">Vragen?</span><span class="tiny muted">Reageer in deze tracker — je hoeft niet te bellen.</span></div>
      <button class="btn btn-ghost" data-toast="Bericht verstuurd naar het serviceteam.">${ic('chat')} Stel een vraag</button>
    </div>
  </div>`;
}

/* =====================================================================
   ROUTER + EVENTS
===================================================================== */
const RENDER = {dashboard:viewDashboard,reparaties:viewReparaties,aanmelden:viewAanmelden,
  logistiek:viewLogistiek,whatsapp:viewWhatsapp,odm:viewOdm,sla:viewSla,portaal:viewPortaal};

function navigate(view,arg){
  // active nav
  document.querySelectorAll('.navitem').forEach(n=>n.classList.toggle('active',n.dataset.view===view));
  const p=PAGE[view]||PAGE.dashboard;
  $('#pageTitle').textContent = arg?`Order ${arg}`:p.title;
  $('#pageSub').textContent = p.sub;
  content.innerHTML = view==='order'?viewOrder(arg):(RENDER[view]||viewDashboard)();
  content.scrollTo&&content.scrollTo(0,0); window.scrollTo(0,0);
  if(view==='whatsapp') initWa();
  if(view==='portaal') initPortal();
  if(view==='aanmelden') initAanmelden();
  if(view==='odm') initOdm();
  bindDynamic();
  // animate bars/progress
  requestAnimationFrame(()=>{});
  $('#sidebar').classList.remove('open');
}

function bindDynamic(){
  content.querySelectorAll('[data-order]').forEach(r=>r.onclick=()=>navigate('order',r.dataset.order));
  content.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>navigate(b.dataset.go));
  content.querySelectorAll('[data-toast]').forEach(b=>b.onclick=()=>toast(b.dataset.toast));
  // filters
  content.querySelectorAll('[data-filter]').forEach(c=>c.onclick=()=>{
    content.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('on'));c.classList.add('on');
    const f=c.dataset.filter;const list=f==='alle'?ORDERS:f==='akkoord'?ORDERS.filter(o=>['akkoord','eta','doa'].includes(o.status)):ORDERS.filter(o=>o.status===f);
    const body=$('#orderBody');if(body){body.innerHTML=list.length?list.map(orderRow).join(''):`<tr><td colspan="6" class="empty">Geen reparaties in deze categorie.</td></tr>`;body.querySelectorAll('[data-order]').forEach(r=>r.onclick=()=>navigate('order',r.dataset.order));}
  });
}

/* WhatsApp interactions */
function initWa(){
  // Tabs
  const tabs=$('#waTabs').querySelectorAll('button');
  tabs.forEach(t=>{
    t.onclick=()=>{
      tabs.forEach(x=>x.classList.remove('on')); t.classList.add('on');
      $('#tab-intern').style.display = t.dataset.watab==='intern'?'grid':'none';
      $('#tab-extern').style.display = t.dataset.watab==='extern'?'grid':'none';
    };
  });

  // Init Intern
  setupWaBot('Intern', botReplyIntern);
  // Init Extern
  setupWaBot('Extern', botReplyExtern);

  // Copy button
  const copyBtn = $('#waCopyBtn');
  if(copyBtn) {
    copyBtn.onclick = () => {
      const box = $('#waContextBox');
      if(box) navigator.clipboard.writeText(box.innerText);
      toast(copyBtn.dataset.toast);
    };
  }
  
  // Store selector logic
  const storeSel = $('#waStoreSelect');
  const storeNm = $('#waStoreName');
  const waBodyExtern = $('#waBodyExtern');
  if(storeSel && storeNm && waBodyExtern) {
    storeSel.onchange = () => {
      const s = storeSel.value;
      storeNm.innerText = \`helloTV \${s} (Filiaal)\`;
      const t=new Date();const tm=\`\${String(t.getHours()).padStart(2,'0')}:\${String(t.getMinutes()).padStart(2,'0')}\`;
      waBodyExtern.innerHTML = bubble('in', \`Welkom bij helloTV \${s}! Hoe kunnen we je helpen?\`, tm);
      const box = $('#waContextBox');
      if(box) box.innerHTML = '<em>Nog geen klachtomschrijving ontvangen via doorschakeling...</em>';
    };
  }
}

function setupWaBot(mode, replyFunc){
  const body=$('#waBody'+mode),input=$('#waInput'+mode),send=$('#waSend'+mode);
  if(!body)return;
  function push(dir,html){const t=new Date();const tm=`${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}`;body.insertAdjacentHTML('beforeend',bubble(dir,html,tm));body.scrollTop=body.scrollHeight;}
  function ask(q){if(!q.trim())return;push('out',q);setTimeout(()=>{push('in','<em style="color:#9a9aa2">aan het typen…</em>');setTimeout(()=>{body.lastElementChild.remove();push('in',replyFunc(q));},800);},300);}
  send.onclick=()=>{ask(input.value);input.value='';};
  input.onkeydown=e=>{if(e.key==='Enter'){ask(input.value);input.value='';}};
  $('#waSugg'+mode).querySelectorAll('button').forEach(b=>b.onclick=()=>ask(b.dataset.q));
}
/* Portal lookup */
function initPortal(){
  const btn=$('#trackBtn'),input=$('#trackInput');
  function look(){const q=input.value.toLowerCase().trim();const o=ORDERS.find(x=>x.id===q||x.serie.toLowerCase()===q);$('#trackResult').innerHTML=portalCard(o);$('#trackResult').querySelectorAll('[data-toast]').forEach(b=>b.onclick=()=>toast(b.dataset.toast));}
  if(btn) btn.onclick=look;
  if(input) input.onkeydown=e=>{if(e.key==='Enter')look();};
}

function initAanmelden(){
  const m = $('#merkSelect'), t = $('#typeSelect');
  if(!m || !t) return;
  m.onchange = () => {
    const val = m.value;
    if(val && BRANDS_MODELS[val]) {
      t.innerHTML = '<option value="">Selecteer type…</option>' + BRANDS_MODELS[val].map(x=>`<option value="${x}">${x}</option>`).join('') + '<option value="Anders">Anders...</option>';
      t.disabled = false;
    } else if (val === 'Anders') {
      t.innerHTML = '<option value="Anders">Anders...</option>';
      t.disabled = false;
    } else {
      t.innerHTML = '<option value="">Kies eerst een merk…</option>';
      t.disabled = true;
    }
  };
}

function initOdm(){
  const btn = $('#odmAddBtn');
  const form = $('#odmAddForm');
  if(btn && form) {
    btn.onclick = () => {
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
    };
  }
  const saveBtn = $('#odmSaveBtn');
  if(saveBtn) {
    saveBtn.onclick = () => {
      form.style.display = 'none';
      toast(saveBtn.dataset.toast);
    };
  }
}

/* toast */
let toastTimer;
function toast(msg){const t=$('#toast');$('#toastMsg').textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),3200);}

/* global search → jump to order */
$('#globalSearch').addEventListener('keydown',e=>{
  if(e.key==='Enter'){const q=e.target.value.toLowerCase().trim();const o=ORDERS.find(x=>x.id===q||x.serie.toLowerCase()===q||x.klant.toLowerCase().includes(q));if(o){navigate('order',o.id);e.target.value='';}else toast('Geen order gevonden voor "'+e.target.value+'"');}
});

/* sidebar nav */
document.querySelectorAll('.navitem').forEach(n=>n.onclick=()=>navigate(n.dataset.view));
$('#menuBtn').onclick=()=>$('#sidebar').classList.toggle('open');

/* boot */
navigate('dashboard');
