const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4";
const IMG = "https://media.themoviedb.org/t/p/";
const H = { accept: "application/json", Authorization: TOKEN };
const BASE = "https://api.themoviedb.org/3";

// ── THREADS DATA ──
const THREADS = [
    {
        id: 1, av: "E", col: "#0090e7", author: "Elghettany", title: 'Request to add Actor "Ahmed Abdel Majeed" to the database', time: "about 3 hours ago", status: "open", replies: 1,
        body: `Hello TMDB Support Team,\n\nI hope this message finds you well.\n\nI would like to request the addition of the Egyptian actor Ahmed Abdel Majeed to the TMDB database. He is a professional actor who has participated in various drama and cinematic works.\n\nActor Definition & Bio:\nAhmed Abdel Majeed is an Egyptian actor who has built a notable career in the Arab entertainment industry, delivering diverse roles across television series and film productions.\n\nTo verify his profile and filmography, please find the official documentation and reference links below:\n\nElCinema Profile: https://elcinema.com/person/2109887/\nRotana Link: https://rotana.net/en/actor-details/6476/ahmed-abdel-majeed\nIMDb link: https://www.imdb.com/name/nm14374479/\n\nThank you for your time and efforts in keeping the database accurate and comprehensive.\n\nBest regards,`,
        rBy: "softpillow", rCol: "#e84393",
        rBody: "do you mean this person https://www.themoviedb.org/person/4842540-ahmed-abdel-majeed\n\nEDIT: This is a user contributed database, if there is missing information then feel free to add it yourself."
    },
    {
        id: 2, av: "N", col: "#c0392b", author: "Noonat0o0", title: "The Movie In This Corner (and Other Corners) of the World was removed from TMDB", time: "about 20 hours ago", status: "closed", replies: 4,
        body: "I noticed that the film \"In This Corner of the World\" seems to have been removed from TMDB. Can someone explain why this happened?",
        rBy: "Admin", rCol: "#032541", rBody: "The movie was merged with a duplicate entry. They should all be accessible at the updated link."
    },
    {
        id: 3, av: "T", col: "#7f8c8d", author: "tulgaralan", title: "Eligibility Question", time: "2 days ago", status: "open", replies: 67,
        body: "I have a question about eligibility for adding content to TMDB. What are the requirements for a film to be listed in the database?",
        rBy: "softpillow", rCol: "#e84393", rBody: "Generally, a film needs to have been publicly released or have a confirmed release date. Self-produced home videos are not eligible."
    },
    {
        id: 4, av: "J", col: "#e84393", author: "Jpenunuri1", title: "I just want to delete my poster, dude", time: "2 days ago", status: "closed", replies: 2,
        body: "Hi, I accidentally uploaded the wrong poster image. How can I delete it? I've been trying for hours.",
        rBy: "softpillow", rCol: "#e84393", rBody: "You can remove images by going to the image section of the movie/show and clicking the delete option."
    },
    {
        id: 5, av: "F", col: "#27ae60", author: "Banana", title: "How to register a person profile picture", time: "2 days ago", status: "open", replies: 5,
        body: "Hello, I would like to know how to add a profile picture for a person entry in TMDB.",
        rBy: "Samara", rCol: "#7f8c8d", rBody: "You need to reach at least level 3 contributor to upload profile pictures."
    },
    {
        id: 6, av: "M", col: "#e67e22", author: "ticao2 вя pt-BR", title: "How to add a photo to a person's profile?", time: "3 days ago", status: "open", replies: 3,
        body: "I want to add a photo to an actor's profile page, but I can't find where to do it. Is this feature restricted?",
        rBy: "softpillow", rCol: "#e84393", rBody: 'Navigate to the person page, click "Edit" then go to the "Images" tab and upload from there.'
    },
    {
        id: 7, av: "S", col: "#7f8c8d", author: "Samara", title: "Information about my first film are locked", time: "3 days ago", status: "closed", replies: 1,
        body: "I submitted my first short film to TMDB two weeks ago and it was approved. But now all the edit fields are locked. Why?",
        rBy: "Admin", rCol: "#032541", rBody: "New entries go through a lock period. After 3 days without issues they unlock for further editing."
    },
    {
        id: 8, av: "O", col: "#7f8c8d", author: "owenbaoo", title: "猫和老鼠的剧集怎么被删除了，刚维护好不久", time: "4 days ago", status: "open", replies: 10,
        body: "Tom and Jerry episodes were recently edited and maintained, but now they seem to be deleted. What happened?",
        rBy: "Moderator", rCol: "#7f8c8d", rBody: "Some episodes were merged into the correct season structure. They should all still be accessible under the main series page."
    },
    {
        id: 9, av: "C", col: "#8e44ad", author: "Samara", title: "Person Removed", time: "4 days ago", status: "closed", replies: 3,
        body: "A person entry I was tracking has been removed. Can someone explain the removal policy for person pages?",
        rBy: "Admin", rCol: "#032541", rBody: "Person pages are removed if they have no credits or if the person does not meet the minimum notability requirements."
    },
    {
        id: 10, av: "C", col: "#01b4e4", author: "capable-low3050", title: "Film Classification Inquiry", time: "4 days ago", status: "open", replies: 0,
        body: "I have a question about how films are classified on TMDB. What criteria is used for genre tagging?",
        rBy: "", rCol: "", rBody: ""
    },
    {
        id: 11, av: "T", col: "#e67e22", author: "ticao2 вя pt-BR", title: "How to add missing crew credits when a page doesn't include a link to do so?", time: "5 days ago", status: "open", replies: 5,
        body: "I'm trying to add crew credits to a movie page but there's no obvious link or button to do so. How can I add them?",
        rBy: "softpillow", rCol: "#e84393", rBody: "Go to the movie page and click Edit, then navigate to the Crew tab to add missing credits."
    },
    {
        id: 12, av: "Q", col: "#7f8c8d", author: "quarry", title: "posters", time: "5 days ago", status: "open", replies: 0,
        body: "How do I upload alternate posters for a film? I have higher quality versions available.",
        rBy: "", rCol: "", rBody: ""
    },
    {
        id: 13, av: "S", col: "#e84393", author: "softpillow", title: "No character names", time: "5 days ago", status: "open", replies: 5,
        body: "Many cast entries on TMDB are missing character names. Is there a bulk way to add these or does each one need to be done individually?",
        rBy: "Admin", rCol: "#032541", rBody: "Each character name needs to be added individually through the movie's cast editing interface."
    },
    {
        id: 14, av: "M", col: "#e67e22", author: "softpillow", title: "YouTube Channels to be made Official", time: "6 days ago", status: "open", replies: 1007,
        body: "There are many YouTube channels that should be marked as official sources for networks and studios on TMDB. What is the process for getting these verified?",
        rBy: "softpillow", rCol: "#e84393", rBody: "Please submit requests through the official content management system with verification links."
    },
    {
        id: 15, av: "L", col: "#01b4e4", author: "superboy97", title: "Retrieving exhibition formats and technologies (IMAX, Dolby Atmos, 4DX)?", time: "7 days ago", status: "closed", replies: 1,
        body: "Is there a way to retrieve information about exhibition formats (IMAX, Dolby Atmos, 4DX) through the TMDB API?",
        rBy: "Admin", rCol: "#032541", rBody: "TMDB does not currently store exhibition format data. This is outside the scope of our database."
    }
];

const PER_PAGE = 15;
let curPage = 1;
const TOTAL_PAGES = 380;

// ── FORUM ──
function showForum() {
    const start = (curPage - 1) * PER_PAGE;
    const rows = THREADS.slice(start, start + PER_PAGE);
    document.getElementById('pageContent').innerHTML = `
    <p style="font-size:13px;color:#999;margin-bottom:16px">Support → General</p>
    <h1 class="page-title">The Movie Database Support</h1>
    <table class="forum-table">
      <tbody id="threadBody">
        ${rows.map(threadRow).join('')}
      </tbody>
    </table>
    ${pagination()}`;
}

function threadRow(t) {
    return `<tr onclick="openThread(${t.id})">
    <td class="td-avatar"><div class="row-avatar" style="background:${t.col}">${t.av}</div></td>
    <td class="td-body">
      <div class="row-title">${t.title}</div>
      <div class="row-meta"><a href="#">${t.author}</a> replied ${t.time}</div>
    </td>
    <td class="td-right">
      <span class="${t.status === 'open' ? 'status-open' : 'status-closed'}">${t.status === 'open' ? 'Open' : 'Closed'}</span>
      <span class="comments-count">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        ${t.replies}
      </span>
    </td>
  </tr>`;
}

function pagination() {
    const p = curPage;
    const total = TOTAL_PAGES;
    let html = '<div class="pagination">';
    html += `<button class="page-btn" onclick="goPage(${p - 1})" ${p <= 1 ? 'disabled' : ''}>‹</button>`;
    html += `<button class="page-btn ${p === 1 ? 'active' : ''}" onclick="goPage(1)">1</button>`;
    if (p > 3) html += '<span class="page-dots">…</span>';
    for (let i = Math.max(2, p - 1); i <= Math.min(total - 1, p + 1); i++) {
        html += `<button class="page-btn ${p === i ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
    }
    if (p < total - 2) html += '<span class="page-dots">…</span>';
    if (total > 1) html += `<button class="page-btn ${p === total ? 'active' : ''}" onclick="goPage(${total})">${total}</button>`;
    html += `<button class="page-btn" onclick="goPage(${p + 1})" ${p >= total ? 'disabled' : ''}>›</button>`;
    html += '</div>';
    return html;
}

function goPage(p) {
    curPage = Math.max(1, Math.min(TOTAL_PAGES, p));
    showForum();
    window.scrollTo(0, 0);
}

// ── OPEN THREAD ──
function openThread(id) {
    const t = THREADS.find(x => x.id === id);
    if (!t) return;
    document.getElementById('mTitle').textContent = t.title;
    document.getElementById('mDate').textContent = `posted by ${t.author} on May 31, 2026 at 5:32 PM`;
    const fmt = s => s.replace(/(https?:\/\/\S+)/g, u => `<a href="${u}" target="_blank">${u}</a>`).replace(/\n/g, '<br>');
    let html = `
    <div class="post">
      <div class="post-hd">
        <div class="post-av" style="background:${t.col}">${t.av}</div>
        <div><div class="post-name">${t.author}</div><div class="post-time">May 31, 2026 at 5:32 PM</div></div>
      </div>
      <div class="post-body">${fmt(t.body)}</div>
    </div>`;
    if (t.replies > 0 && t.rBy) {
        html += `<div class="replies-label">1 reply (on page 1 of 1) • <a href="#" style="color:#01b4e4">Jump to last post</a></div>
    <div class="reply">
      <div class="post-hd">
        <div class="post-av" style="background:${t.rCol}">${t.rBy[0]}</div>
        <div><div class="post-name">${t.rBy}</div><div class="post-time">May 31, 2026 at 6:05 PM</div></div>
      </div>
      <div class="reply-quote">@${t.author} said:</div>
      <div class="post-body">${fmt(t.rBody)}</div>
    </div>`;
    }
    document.getElementById('mBody').innerHTML = html;
    document.getElementById('overlay').classList.add('open');
}

// ── SEARCH ──
function doSearch() {
    const q = document.getElementById('searchInput').value.trim();
    if (!q) return;
    fetchSearch(q, 'multi');
}

async function fetchSearch(q, type, year, minRating, lang) {
    setNav('');
    let url = `${BASE}/search/${type}?query=${encodeURIComponent(q)}&language=en-US&include_adult=false`;
    if (year) url += `&year=${year}`;
    if (lang) url += `&with_original_language=${lang}`;
    document.getElementById('pageContent').innerHTML = `
    <p style="font-size:13px;color:#999;margin-bottom:16px">Search → <strong>${q}</strong></p>
    <h1 class="page-title">Search Results</h1>
    <div class="loading">Loading…</div>`;
    try {
        const r = await fetch(url, { headers: H });
        const d = await r.json();
        let results = (d.results || []);
        if (minRating) results = results.filter(m => (m.vote_average || 0) >= parseFloat(minRating));
        if (!results.length) { document.getElementById('pageContent').innerHTML += '<div class="loading">No results found.</div>'; return; }
        document.getElementById('pageContent').innerHTML = `
      <p style="font-size:13px;color:#999;margin-bottom:16px">Search → <strong>${q}</strong></p>
      <h1 class="page-title">Search Results</h1>
      <table class="forum-table"><tbody>${results.slice(0, 15).map(m => {
            const mt = m.media_type || type;
            const title = m.title || m.name || '';
            const year2 = (m.release_date || m.first_air_date || '').substring(0, 4);
            const av = title[0] || '?';
            return `<tr onclick="${mt === 'person' ? `openPerson(${m.id})` : `openMovie(${m.id},'${mt}')`}">
          <td class="td-avatar"><div class="row-avatar" style="background:#01b4e4">${av}</div></td>
          <td class="td-body">
            <div class="row-title">${title}</div>
            <div class="row-meta">${year2} · ${mt === 'person' ? 'Person' : mt === 'tv' ? 'TV Show' : 'Movie'}</div>
          </td>
          <td class="td-right"><span style="font-size:13px;color:#01b4e4;font-weight:700">${m.vote_average ? m.vote_average.toFixed(1) : '—'}</span></td>
        </tr>`;
        }).join('')}</tbody></table>`;
    } catch (e) { document.getElementById('pageContent').innerHTML += '<div class="loading" style="color:red">Failed to load.</div>'; }
}

// ── ADV SEARCH ──
function openAdv() { document.getElementById('advOverlay').classList.add('open'); }
function closeAdv() { document.getElementById('advOverlay').classList.remove('open'); }
function runAdv() {
    const q = document.getElementById('advQ').value.trim();
    if (!q) return;
    closeAdv();
    fetchSearch(q, document.getElementById('advType').value, document.getElementById('advYear').value, document.getElementById('advMin').value, document.getElementById('advLang').value);
}

// ── MOVIE MODAL ──
async function openMovie(id, type = 'movie') {
    document.getElementById('mTitle').textContent = 'Loading…';
    document.getElementById('mDate').textContent = '';
    document.getElementById('mBody').innerHTML = '<div class="loading">Loading…</div>';
    document.getElementById('overlay').classList.add('open');
    try {
        const [dr, cr] = await Promise.all([
            fetch(`${BASE}/${type}/${id}?language=en-US`, { headers: H }),
            fetch(`${BASE}/${type}/${id}/credits`, { headers: H })
        ]);
        const det = await dr.json(), cred = await cr.json();
        const title = det.title || det.name;
        document.getElementById('mTitle').textContent = title;
        document.getElementById('mDate').textContent = det.release_date || det.first_air_date || '';
        const cast = (cred.cast || []).slice(0, 10);
        document.getElementById('mBody').innerHTML = `
      <div class="det-hd">
        <img class="det-poster" src="${det.poster_path ? IMG + 'w154' + det.poster_path : ''}" onerror="this.style.background='#eee'" alt="">
        <div class="det-info">
          <h2>${title}</h2>
          <div class="det-rating">★ ${(det.vote_average || 0).toFixed(1)} / 10 <span style="font-weight:400;font-size:12px;color:#999">(${(det.vote_count || 0).toLocaleString()} votes)</span></div>
          <div class="det-genres">${(det.genres || []).map(g => `<span class="det-genre">${g.name}</span>`).join('')}</div>
          <div class="det-overview">${det.overview || 'No overview available.'}</div>
          ${det.runtime ? `<div class="det-meta" style="margin-top:8px">Runtime: ${det.runtime} min</div>` : ''}
        </div>
      </div>
      ${cast.length ? `<div class="replies-label" style="margin-top:4px">Cast</div>
      <div class="cast-row">${cast.map(c => `
        <div class="cast-item" onclick="openPerson(${c.id})">
          <img src="${c.profile_path ? IMG + 'w92' + c.profile_path : ''}" onerror="this.style.background='#eee'" alt="">
          <div class="cn">${c.name}</div>
          <div class="cc">${c.character || ''}</div>
        </div>`).join('')}</div>` : ''}`;
    } catch (e) { document.getElementById('mBody').innerHTML = '<div style="color:red;padding:20px">Failed to load.</div>'; }
}

// ── PERSON MODAL ──
async function openPerson(id) {
    document.getElementById('mTitle').textContent = 'Loading…';
    document.getElementById('mDate').textContent = '';
    document.getElementById('mBody').innerHTML = '<div class="loading">Loading…</div>';
    document.getElementById('overlay').classList.add('open');
    try {
        const [pr, cr] = await Promise.all([
            fetch(`${BASE}/person/${id}?language=en-US`, { headers: H }),
            fetch(`${BASE}/person/${id}/movie_credits`, { headers: H })
        ]);
        const p = await pr.json(), c = await cr.json();
        document.getElementById('mTitle').textContent = p.name;
        document.getElementById('mDate').textContent = p.birthday ? `Born: ${p.birthday}${p.place_of_birth ? ' · ' + p.place_of_birth : ''}` : '';
        const movies = (c.cast || []).sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0)).slice(0, 6);
        document.getElementById('mBody').innerHTML = `
      <div class="det-hd">
        <img class="det-poster" src="${p.profile_path ? IMG + 'w154' + p.profile_path : ''}" onerror="this.style.background='#eee'" alt="">
        <div class="det-info">
          <h2>${p.name}</h2>
          ${p.birthday ? `<div class="det-meta">Born: ${p.birthday}</div>` : ''}
          <div class="det-overview" style="margin-top:8px">${p.biography ? p.biography.substring(0, 300) + '…' : 'No biography available.'}</div>
          <a href="https://www.themoviedb.org/person/${p.id}" target="_blank" style="display:inline-block;margin-top:10px;font-size:13px;color:#01b4e4">View on TMDB →</a>
        </div>
      </div>
      ${movies.length ? `<div class="replies-label" style="margin-top:4px">Known for</div>
      <table class="forum-table">${movies.map(m => `
        <tr onclick="openMovie(${m.id})">
          <td class="td-avatar"><div class="row-avatar" style="background:#01b4e4">${(m.title || '?')[0]}</div></td>
          <td class="td-body">
            <div class="row-title">${m.title}</div>
            <div class="row-meta">${(m.release_date || '').substring(0, 4)} · ${m.character || ''}</div>
          </td>
          <td class="td-right"><span style="font-size:13px;color:#01b4e4;font-weight:700">★ ${(m.vote_average || 0).toFixed(1)}</span></td>
        </tr>`).join('')}</table>` : ''}`;
    } catch (e) { document.getElementById('mBody').innerHTML = '<div style="color:red;padding:20px">Failed to load.</div>'; }
}

// ── HELPERS ──
function closeOverlay() { document.getElementById('overlay').classList.remove('open'); }
function openKbd() { document.getElementById('kbdOverlay').classList.add('open'); }
function closeKbd() { document.getElementById('kbdOverlay').classList.remove('open'); }

function setNav(id) {
    document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
    if (id) { const el = document.getElementById(id); if (el) el.classList.add('active'); }
}

document.addEventListener('keydown', e => {
    if (!document.getElementById('kbdEnabled').checked) return;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === 's') { document.getElementById('searchInput').focus(); e.preventDefault(); }
    if (e.key === '?') openKbd();
    if (e.key === 'Escape') { closeOverlay(); closeKbd(); closeAdv(); }
});

showForum();