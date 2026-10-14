import { useMemo, useState } from "react";

type IconName =
  | "search"
  | "house"
  | "arrowDown"
  | "clock"
  | "gear"
  | "chevron"
  | "x"
  | "play"
  | "film"
  | "tv"
  | "folder"
  | "check"
  | "moon"
  | "sun"
  | "sidebar";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    house: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-7h6v7" /></>,
    arrowDown: <><path d="M12 3v14m0 0 5-5m-5 5-5-5" /><path d="M5 21h14" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v6l4 2" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    x: <path d="M6 6l12 12M18 6 6 18" />,
    play: <path d="m9 6 9 6-9 6Z" />,
    film: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 5v14M17 5v14M3 9h4m10 0h4M3 15h4m10 0h4" /></>,
    tv: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m9 2 3 3 3-3" /></>,
    folder: <path d="M3 7h7l2 2h9v10H3Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    moon: <path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    sidebar: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Button({
  children,
  variant = "secondary",
  className = "",
  onClick,
  title,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "icon";
  className?: string;
  onClick?: () => void;
  title?: string;
}) {
  return <button title={title} className={`button ${variant} ${className}`} onClick={onClick}>{children}</button>;
}

const images = [
  "https://images.unsplash.com/photo-1661124280301-ca0e33ceb438?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1742764513373-44813b0430da?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1695114584354-13e1910d491b?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1594012537146-64a81a336550?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1636036567661-145deb7cc6ee?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1685879682768-a610cb145b16?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1595852302614-a2d9a5274100?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1575582511038-6a673d0ccbad?auto=format&fit=crop&w=600&q=85",
];

const media = [
  { title: "Oltre la Nebbia", kind: "Film", year: "2024", rating: "8.7", image: images[0], plot: "Dopo anni lontano da casa, una cartografa torna sulle rive del lago dove è cresciuta. Nella nebbia che avvolge la valle, una scoperta inattesa la costringe a rileggere ogni ricordo." },
  { title: "Città Verticale", kind: "Serie TV", seasons: 3, year: "2024", rating: "9.1", image: images[1], plot: "Le vite di otto sconosciuti si incrociano in una metropoli sospesa tra ambizione, memoria e futuro." },
  { title: "Luce Residua", kind: "Film", year: "2023", rating: "8.4", image: images[2], plot: "Una notte, una città e l'ultima occasione per dire la verità. Un noir contemporaneo dalle atmosfere elettriche." },
  { title: "Casa 17", kind: "Serie TV", seasons: 2, year: "2024", rating: "8.9", image: images[3], plot: "Dietro la facciata perfetta di una villa modernista, ogni stanza custodisce una versione diversa della stessa storia." },
  { title: "Il Campo", kind: "Film", year: "2022", rating: "7.9", image: images[4], plot: "Una finestra aperta su un'estate che sembra non finire mai e su una scelta destinata a cambiare tutto." },
  { title: "Forma e Silenzio", kind: "Documentario", year: "2024", rating: "8.2", image: images[5], plot: "Un viaggio intimo attraverso gli spazi, le geometrie e le persone che hanno ridefinito l'architettura contemporanea." },
  { title: "Ultima Corsa", kind: "Serie TV", seasons: 4, year: "2023", rating: "8.6", image: images[6], plot: "Quando la città dorme, una linea notturna unisce destini che di giorno non si sarebbero mai incontrati." },
  { title: "Brutalismo", kind: "Film", year: "2021", rating: "7.8", image: images[7], plot: "Un giovane fotografo scopre che gli edifici che ritrae conservano tracce di una storia rimossa." },
];

type Media = typeof media[number];
type View = "home" | "downloads";

function TrafficLights() {
  return <div className="traffic"><span className="red" /><span className="yellow" /><span className="green" /></div>;
}

function Sidebar({ view, onView, dark, onDark }: { view: View; onView: (v: View) => void; dark: boolean; onDark: () => void }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top"><TrafficLights /><Button variant="icon" title="Nascondi barra laterale"><Icon name="sidebar" size={17} /></Button></div>
      <div className="brand"><div className="brand-mark"><Icon name="play" size={16} /></div><span>Cineflow</span></div>
      <div className="nav-label">Libreria</div>
      <nav>
        <button className={`nav-item ${view === "home" ? "active" : ""}`} onClick={() => onView("home")}><Icon name="house" /><span>Scopri</span></button>
        <button className={`nav-item ${view === "downloads" ? "active" : ""}`} onClick={() => onView("downloads")}><Icon name="arrowDown" /><span>Download</span><span className="nav-count">2</span></button>
        <button className="nav-item"><Icon name="clock" /><span>Recenti</span></button>
      </nav>
      <div className="nav-label second">Raccolte</div>
      <nav>
        <button className="nav-item"><Icon name="film" /><span>Film</span></button>
        <button className="nav-item"><Icon name="tv" /><span>Serie TV</span></button>
      </nav>
      <div className="sidebar-bottom">
        <button className="nav-item"><Icon name="gear" /><span>Impostazioni</span></button>
        <button className="theme-toggle" onClick={onDark}><Icon name={dark ? "sun" : "moon"} size={16} /><span>{dark ? "Aspetto chiaro" : "Aspetto scuro"}</span><span className="key">⌘ D</span></button>
      </div>
    </aside>
  );
}

function Home({ onSelect }: { onSelect: (item: Media) => void }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => media.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, 12), [query]);
  return (
    <main className="content">
      <header className="toolbar">
        <div><div className="eyebrow">Esplora</div><div className="page-title">Cinema, senza limiti.</div></div>
        <label className="search-field"><Icon name="search" size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cerca film e serie TV" /><span className="shortcut">⌘ K</span></label>
      </header>
      <section className="hero">
        <img src={images[0]} alt="" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="hero-label">IN PRIMO PIANO</span>
          <div className="hero-title">Oltre la Nebbia</div>
          <p>Un viaggio intimo dove memoria e paesaggio si confondono.</p>
          <Button variant="primary" onClick={() => onSelect(media[0])}><Icon name="play" size={15} /> Guarda i dettagli</Button>
        </div>
        <div className="hero-rating"><span>★</span> 8.7</div>
      </section>
      <div className="section-heading"><div><strong>{query ? "Risultati" : "Scelti per te"}</strong><span>{filtered.length} titoli disponibili</span></div><Button variant="ghost">Vedi tutti <Icon name="chevron" size={15} /></Button></div>
      <section className="media-grid">
        {filtered.map((item) => (
          <button className="media-card" key={item.title} onClick={() => onSelect(item)}>
            <div className="poster-wrap"><img src={item.image} alt={`Locandina di ${item.title}`} /><span className="rating">★ {item.rating}</span><span className="card-play"><Icon name="play" size={17} /></span></div>
            <div className="card-title">{item.title}</div>
            <div className="card-meta">{item.kind === "Serie TV" ? `${item.kind} · ${item.seasons} stagioni` : `${item.kind} · ${item.year}`}</div>
          </button>
        ))}
      </section>
      {filtered.length === 0 && <div className="empty"><Icon name="search" size={28} /><strong>Nessun titolo trovato</strong><span>Prova con una ricerca diversa.</span></div>}
    </main>
  );
}

function DetailSheet({ item, onClose, onDownload, onSeries }: { item: Media; onClose: () => void; onDownload: () => void; onSeries: () => void }) {
  return (
    <div className="overlay" onMouseDown={onClose}>
      <section className="sheet" onMouseDown={(e) => e.stopPropagation()}>
        <Button variant="icon" className="close" onClick={onClose} title="Chiudi"><Icon name="x" size={17} /></Button>
        <div className="detail-poster"><img src={item.image} alt={`Locandina di ${item.title}`} /><div className="poster-glow" /></div>
        <div className="detail-copy">
          <div className="detail-topline"><span className="quality">4K</span><span>{item.year}</span><span>Dolby Vision</span><span>Dolby Atmos</span></div>
          <div className="detail-title">{item.title}</div>
          <div className="detail-stats"><span className="score">★ {item.rating}</span><span>16+</span><span>{item.kind === "Serie TV" ? `${item.seasons} stagioni` : "2h 08min"}</span></div>
          <p className="plot">{item.plot}</p>
          <div className="credits"><div><span>Regia</span><strong>Elena Moretti</strong></div><div><span>Genere</span><strong>Drammatico, Mistero</strong></div><div><span>Lingue</span><strong>Italiano, Inglese</strong></div></div>
          <div className="detail-actions">
            <Button variant="primary" onClick={item.kind === "Serie TV" ? onSeries : onDownload}><Icon name="arrowDown" size={17} /> {item.kind === "Serie TV" ? "Scegli episodi" : "Scarica alla massima qualità"}</Button>
            <Button><Icon name="play" size={16} /> Anteprima</Button>
          </div>
          <div className="source-note"><span className="status-dot" /> Disponibile in qualità originale · 18.4 GB</div>
        </div>
      </section>
    </div>
  );
}

const seasonData = [
  { season: 1, episodes: 8, year: 2022 },
  { season: 2, episodes: 10, year: 2023 },
  { season: 3, episodes: 8, year: 2024 },
];

function SeriesSheet({ item, onClose, onConfirm }: { item: Media; onClose: () => void; onConfirm: () => void }) {
  const [mode, setMode] = useState(0);
  const [season, setSeason] = useState(2);
  const [episode, setEpisode] = useState(4);
  const selectedCount = mode === 0 ? 26 : mode === 1 ? seasonData.filter(s => s.season >= season).reduce((a, b) => a + b.episodes, 0) : mode === 2 ? seasonData[season - 1].episodes : 1;
  const labels = ["Tutte", "Da stagione", "Una stagione", "Un episodio"];
  return (
    <div className="overlay" onMouseDown={onClose}>
      <section className="series-sheet" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-toolbar"><div><span className="modal-kicker">Configura download</span><strong>{item.title}</strong></div><Button variant="icon" onClick={onClose}><Icon name="x" /></Button></div>
        <div className="series-body">
          <aside className="season-sidebar">
            <div className="season-cover"><img src={item.image} alt="" /><div><strong>{item.title}</strong><span>3 stagioni · 26 episodi</span></div></div>
            <div className="season-label">STAGIONI</div>
            {seasonData.map((s) => <button className={`season-row ${season === s.season ? "selected" : ""}`} onClick={() => setSeason(s.season)} key={s.season}><span className="season-number">{s.season}</span><span><strong>Stagione {s.season}</strong><small>{s.episodes} episodi · {s.year}</small></span><Icon name="chevron" size={14} /></button>)}
          </aside>
          <div className="series-config">
            <div className="config-title">Cosa vuoi scaricare?</div>
            <div className="segmented">{labels.map((label, index) => <button className={mode === index ? "selected" : ""} onClick={() => setMode(index)} key={label}>{label}</button>)}</div>
            <div className="option-panel">
              <div className="option-icon"><Icon name={mode === 3 ? "play" : "tv"} /></div>
              <div className="option-copy">
                <strong>{mode === 0 ? "Tutta la serie" : mode === 1 ? "Dalla stagione indicata" : mode === 2 ? "Una stagione specifica" : "Un singolo episodio"}</strong>
                <span>{mode === 0 ? "Scarica tutti i 26 episodi disponibili." : mode === 1 ? "Include la stagione scelta e tutte le successive." : mode === 2 ? "Scarica tutti gli episodi della stagione scelta." : "Scegli una stagione e poi un episodio."}</span>
              </div>
              {mode > 0 && <div className="pickers"><label><span>Stagione</span><select value={season} onChange={e => setSeason(Number(e.target.value))}>{seasonData.map(s => <option key={s.season} value={s.season}>Stagione {s.season}</option>)}</select></label>{mode === 3 && <label><span>Episodio</span><select value={episode} onChange={e => setEpisode(Number(e.target.value))}>{Array.from({ length: seasonData[season - 1].episodes }, (_, i) => <option key={i + 1} value={i + 1}>Episodio {i + 1}</option>)}</select></label>}</div>}
            </div>
            <div className="selection-preview">
              <div className="preview-head"><strong>Riepilogo selezione</strong><span>{selectedCount} {selectedCount === 1 ? "episodio" : "episodi"}</span></div>
              <div className="preview-row"><span className="episode-art"><img src={item.image} alt="" /><span><Icon name="play" size={12} /></span></span><div><strong>{mode === 3 ? `S${season.toString().padStart(2, "0")}E${episode.toString().padStart(2, "0")} · L'orizzonte` : mode === 2 ? `Stagione ${season} completa` : mode === 1 ? `Stagioni ${season}–3` : "Serie completa"}</strong><span>Qualità originale · Italiano</span></div><span className="size">{mode === 3 ? "2.1 GB" : `${(selectedCount * 2.1).toFixed(1)} GB`}</span></div>
            </div>
          </div>
        </div>
        <footer className="modal-footer"><span>Il download può essere modificato in seguito.</span><div><Button onClick={onClose}>Annulla</Button><Button variant="primary" onClick={onConfirm}>Aggiungi al download <Icon name="arrowDown" size={16} /></Button></div></footer>
      </section>
    </div>
  );
}

function Downloads() {
  return (
    <main className="content downloads">
      <header className="toolbar"><div><div className="eyebrow">Attività</div><div className="page-title">Download</div></div><div className="toolbar-actions"><Button>Metti in pausa</Button><Button variant="icon"><Icon name="gear" /></Button></div></header>
      <div className="success-banner"><span className="success-icon"><Icon name="check" size={17} /></span><div><strong>Download completato</strong><span>“Luce Residua” è stato salvato nella cartella Film.</span></div><Button variant="ghost">Mostra nel Finder</Button></div>
      <section className="download-card active-download">
        <img src={images[0]} alt="" />
        <div className="download-main">
          <div className="download-title"><div><strong>Oltre la Nebbia</strong><span>Film · 4K Dolby Vision</span></div><span>68%</span></div>
          <div className="progress"><span style={{ width: "68%" }} /></div>
          <div className="download-meta"><span><i className="live-dot" /> 24.8 MB/s</span><span>12.5 GB di 18.4 GB</span><span>4 min rimanenti</span></div>
        </div>
        <Button variant="icon" title="Pausa"><span className="pause">Ⅱ</span></Button>
      </section>
      <section className="download-card">
        <img src={images[1]} alt="" />
        <div className="download-main">
          <div className="download-title"><div><strong>Città Verticale</strong><span>Stagione 2 · 10 episodi</span></div><span>In coda</span></div>
          <div className="progress muted"><span /></div>
          <div className="download-meta"><span>Avvio automatico al termine</span><span>21.0 GB</span></div>
        </div>
        <Button variant="icon"><Icon name="x" size={15} /></Button>
      </section>
      <section className="console-card">
        <div className="console-head"><div><span className="console-dot" /> Attività in tempo reale</div><Button variant="ghost">Cancella</Button></div>
        <div className="console">
          <p><time>16:42:08</time><span className="info">INFO</span> Connessione al server stabilita</p>
          <p><time>16:42:09</time><span className="info">INFO</span> Qualità selezionata: 2160p · Dolby Vision · HEVC</p>
          <p><time>16:42:10</time><span className="good">OK</span> Traccia audio italiana trovata · E-AC-3 5.1</p>
          <p><time>16:42:10</time><span className="good">OK</span> Sottotitoli italiani inclusi</p>
          <p><time>16:47:32</time><span className="work">SYNC</span> Download segmento 1842 di 2710 · 24.8 MB/s</p>
          <p className="cursor-line"><time>16:47:33</time><span className="work">SYNC</span> Verifica integrità dati in corso<span className="cursor" /></p>
        </div>
      </section>
      <div className="destination"><div className="folder-icon"><Icon name="folder" /></div><div><span>Salva download in</span><strong>Macintosh HD › Utenti › Marco › Film</strong></div><Button>Scegli…</Button></div>
    </main>
  );
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [selected, setSelected] = useState<Media | null>(null);
  const [seriesItem, setSeriesItem] = useState<Media | null>(null);
  const [dark, setDark] = useState(false);
  const startDownload = () => { setSelected(null); setSeriesItem(null); setView("downloads"); };
  return (
    <div className={dark ? "app dark" : "app"}>
      <div className="ambient one" /><div className="ambient two" />
      <div className="window">
        <Sidebar view={view} onView={setView} dark={dark} onDark={() => setDark(v => !v)} />
        {view === "home" ? <Home onSelect={setSelected} /> : <Downloads />}
      </div>
      {selected && <DetailSheet item={selected} onClose={() => setSelected(null)} onDownload={startDownload} onSeries={() => { setSeriesItem(selected); setSelected(null); }} />}
      {seriesItem && <SeriesSheet item={seriesItem} onClose={() => setSeriesItem(null)} onConfirm={startDownload} />}
    </div>
  );
}
