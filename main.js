(() => {
  const D = window.SITE_DATA;
  const P = window.SITE_PROFILE;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };

  /* ---------- 语言状态 ---------- */
  const STORE_KEY = "ct-lang";
  let lang =
    localStorage.getItem(STORE_KEY) ||
    (navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
  if (!D[lang]) lang = "zh";

  const get = (obj, path) =>
    path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);

  /* ---------- 静态文案 ---------- */
  const applyStatic = (t) => {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const v = get(t, node.dataset.i18n);
      if (v !== undefined && typeof v === "string") node.innerHTML = v;
    });
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t.meta.desc);
  };

  /* ---------- Hero ---------- */
  const renderHero = (t) => {
    $("#heroName").textContent = t.hero.name;
    $("#heroNameEn").textContent = t.hero.nameEn;
    $("#heroRole").textContent = t.hero.role;
    $("#heroRoleNote").textContent = t.hero.roleNote;
    $("#heroTagline").innerHTML = t.hero.tagline;
    $("#logoName").textContent = t.hero.name;
    $("#footerName").textContent = `${t.hero.name} ${t.hero.nameEn}`;

    const sr = $("#statRow");
    sr.innerHTML = "";
    t.hero.stats.forEach((s) => {
      sr.appendChild(
        el("div", "stat", `<span class="stat-num" data-count="${s.num}" data-suffix="${s.suffix}">0</span><span class="stat-label">${s.label}</span>`)
      );
    });
    startCounters(sr.querySelectorAll(".stat-num"), true);

    const pm = $("#portraitMeta");
    pm.innerHTML = "";
    t.hero.portraitMeta.forEach((m) => {
      pm.appendChild(el("div", "pm-row", `<span>${m.k}</span><b>${m.v}</b>`));
    });
  };

  /* ---------- 研究方向 ---------- */
  const renderResearch = (t) => {
    const rg = $("#researchGrid");
    rg.innerHTML = "";
    t.research.forEach((r) => {
      rg.appendChild(
        el("article", "research-card in", `
          <span class="rc-no">${r.no}</span>
          <h3 class="rc-title">${r.title}</h3>
          <p class="rc-sub">${r.subtitle}</p>
          <p class="rc-body">${r.body}</p>
          <ul class="rc-points">${r.points.map((p) => `<li>${p}</li>`).join("")}</ul>`)
      );
    });

    const hs = $("#highlightStrip");
    hs.innerHTML = "";
    t.highlights.forEach((h) => {
      hs.appendChild(
        el("div", "hl-item", `
          <span class="hl-tag">${h.tag}</span>
          <h4 class="hl-title">${h.title}</h4>
          <p class="hl-desc">${h.desc}</p>`)
      );
    });
  };

  /* ---------- 论著 ---------- */
  let pubFilter = "all";

  const boldName = (authors) =>
    authors
      .replace(/Tan,\s?C\.\*/g, "<b>Tan, C.*</b>")
      .replace(/(Tan,?\s?C\.#?)/g, "<b>$1</b>");

  const renderPubFilters = (t) => {
    const fb = $("#pubFilters");
    fb.innerHTML = "";
    ["all", "first", "corr", "nature", "review"].forEach((k) => {
      const b = el("button", "chip" + (pubFilter === k ? " active" : ""), t.publications.filters[k]);
      b.dataset.filter = k;
      fb.appendChild(b);
    });
  };

  const renderPubs = (t) => {
    const list = $("#pubList");
    list.innerHTML = "";
    const items = [];

    t.publications_list.forEach((p) => {
      if (pubFilter === "all" || p.tag === pubFilter) items.push(p);
    });
    if (pubFilter === "all" || pubFilter === "nature") {
      t.naturePapers.forEach((p) =>
        items.push({ year: p.year, authors: t.publications.natureAuthors, title: p.title, journal: p.journal, meta: p.meta, tag: "nature" })
      );
    }
    if (pubFilter === "all" || pubFilter === "review") {
      t.underReview.forEach((p) => items.push({ ...p, tag: "review" }));
    }
    items.sort((a, b) => b.year - a.year);

    items.forEach((p, i) => {
      const item = el("article", "pub-item");
      item.style.animationDelay = Math.min(i * 0.04, 0.5) + "s";
      const tagHtml =
        p.tag === "first" ? `<span class="tag tag-first">${t.publications.tagFirst}</span>`
        : p.tag === "corr" ? `<span class="tag tag-corr">${t.publications.tagCorr}</span>`
        : p.tag === "nature" ? '<span class="tag tag-first">Nature</span>'
        : p.tag === "review" ? `<span class="tag tag-corr">${t.publications.tagReview}</span>` : "";

      const titleHtml = p.doi
        ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${p.title}</a>`
        : p.title;

      item.innerHTML = `
        <div class="pub-year">${p.year}</div>
        <div class="pub-main">
          <h3 class="pub-title">${titleHtml}</h3>
          <p class="pub-authors">${boldName(p.authors)}</p>
          <div class="pub-foot">
            <span class="pub-journal">${p.journal}</span>
            <span class="dot-sep"></span>
            <span class="pub-meta">${p.meta}</span>
            ${tagHtml}
          </div>
        </div>`;
      list.appendChild(item);
    });

    if (!items.length) {
      list.innerHTML = `<p style="padding:30px 0;color:var(--ink-mute)">${t.publications.empty}</p>`;
    }
  };

  const renderCoauthors = (t) => {
    $("#coSummary").textContent = t.publications.coSummary;
    $("#coCount").textContent = t.publications.coCount;
    const cl = $("#coList");
    cl.innerHTML = "";
    t.coauthored.forEach((c) => {
      cl.appendChild(
        el("li", "", `<span style="font-family:var(--serif);color:var(--ink-mute);margin-right:8px">${c.year}</span>${c.text}`)
      );
    });
  };

  /* ---------- 项目 / 经历 / 报告 / 软著 ---------- */
  const renderProjects = (t) => {
    const pg = $("#projectGrid");
    pg.innerHTML = "";
    t.projects.forEach((p) => {
      const card = el("article", "project-card" + (p.highlight ? " is-key" : ""));
      card.innerHTML = `
        <span class="pc-source">${p.source}</span>
        <h3 class="pc-title">${p.title}</h3>
        <div class="pc-rows">
          <div class="pc-row"><span>${t.projectLabels.period}</span><b>${p.period}</b></div>
          <div class="pc-row"><span>${t.projectLabels.amount}</span><b class="pc-amount">${p.amount}</b></div>
          <div class="pc-row"><span>${t.projectLabels.role}</span><b>${p.role}</b></div>
        </div>`;
      pg.appendChild(card);
    });
  };

  const fillTimeline = (target, data) => {
    target.innerHTML = "";
    data.forEach((d) => {
      target.appendChild(
        el("li", "", `
          <div class="tl-period">${d.period}</div>
          <div class="tl-role">${d.role}</div>
          <div class="tl-org">${d.org}</div>
          ${d.note ? `<div class="tl-note">${d.note}</div>` : ""}`)
      );
    });
  };

  const renderOutputs = (t) => {
    $("#talkTitle").textContent = t.sections.outputs.title === "Talks & Software" ? "Conference Talks" : "国际学术会议报告";
    $("#swTitle").textContent = t.sections.outputs.title === "Talks & Software" ? "Software Copyrights" : "授权专利与软件著作权";

    const tl = $("#talkList");
    tl.innerHTML = "";
    t.talks.forEach((x) => {
      tl.appendChild(
        el("div", "talk-card", `
          <div class="talk-title">${x.title}</div>
          <div class="talk-meta">
            <span>${x.venue}</span><span class="dot-sep"></span>
            <span>${x.place}</span><span class="dot-sep"></span>
            <span class="talk-type">${x.type}</span>
          </div>`)
      );
    });

    const sw = $("#swList");
    sw.innerHTML = "";
    t.software.forEach((s) => {
      sw.appendChild(
        el("div", "sw-card", `
          <div class="sw-head">
            <span class="sw-name">${s.name}</span>
            <span class="sw-reg">${s.reg} · ${s.date}</span>
          </div>
          <p class="sw-authors">${s.type}｜${s.authors}</p>`)
      );
    });
  };

  /* ---------- 链接 ---------- */
  const renderLinks = (t) => {
    const al = $("#academicLinks");
    const cl = $("#contactLinks");
    al.innerHTML = "";
    cl.innerHTML = "";
    t.links.forEach((l) => {
      const a = el("a", "link-pill", `${l.label} <svg viewBox="0 0 12 12" width="10" height="10"><path d="M3 9L9 3M9 3H4.5M9 3v4.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
      a.href = l.href; a.target = "_blank"; a.rel = "noopener";
      al.appendChild(a);

      const b = el("a", "", l.label);
      b.href = l.href; b.target = "_blank"; b.rel = "noopener";
      cl.appendChild(b);
    });

    $("#mailValue").textContent = P.email;
    $("#phoneValue").textContent = P.phone;
    $("#mailLink").href = "mailto:" + P.email;
    $("#phoneLink").href = "tel:" + P.phone.replace(/\s/g, "");
    $("#orgValue").textContent = t.contact.orgValue;
    $("#svcReview").textContent = t.service.review;
    $("#svcEditorial").textContent = t.service.editorial;
  };

  /* ---------- 语言切换主流程 ---------- */
  const render = (code) => {
    lang = code;
    const t = D[code];
    applyStatic(t);
    renderHero(t);
    renderResearch(t);
    $("#pubLede").innerHTML = t.publications.lede;
    renderPubFilters(t);
    renderPubs(t);
    renderCoauthors(t);
    renderProjects(t);
    fillTimeline($("#timeline"), t.trajectory);
    fillTimeline($("#timelineEdu"), t.education);
    renderOutputs(t);
    renderLinks(t);

    document.querySelectorAll("#langSwitch button").forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === code)
    );
    localStorage.setItem(STORE_KEY, code);
    document.body.classList.toggle("lang-en", code === "en");
  };

  document.querySelectorAll("#langSwitch button").forEach((b) =>
    b.addEventListener("click", () => {
      if (b.dataset.lang !== lang) render(b.dataset.lang);
    })
  );

  $("#pubFilters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    pubFilter = btn.dataset.filter;
    document.querySelectorAll("#pubFilters .chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    renderPubs(D[lang]);
  });

  /* ---------- 导航 ---------- */
  const nav = $("#nav");
  const progress = $("#progressBar");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    })
  );

  /* ---------- 数字滚动 ---------- */
  const startCounters = (nodes, force) => {
    nodes.forEach((node) => {
      const target = parseInt(node.dataset.count, 10);
      const suffix = node.dataset.suffix || "";
      node.textContent = "0" + suffix;
      const begin = () => {
        const t0 = performance.now();
        const dur = 1200;
        const step = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          node.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      if (force) begin();
      else {
        const cio = new IntersectionObserver(
          (entries) => entries.forEach((en) => {
            if (en.isIntersecting) { begin(); cio.unobserve(node); }
          }),
          { threshold: 0.6 }
        );
        cio.observe(node);
      }
    });
  };

  /* ---------- 出现动画 ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

  /* ---------- 麦穗插画 ---------- */
  const grains = document.getElementById("grains");
  if (grains) {
    const NS = "http://www.w3.org/2000/svg";
    for (let i = 0; i < 13; i++) {
      const y = 100 + i * 20;
      const spread = 1 + i * 0.16;
      [-1, 1].forEach((side) => {
        const p = document.createElementNS(NS, "ellipse");
        const cx = 150 + side * (10 + spread * 6);
        p.setAttribute("cx", cx);
        p.setAttribute("cy", y);
        p.setAttribute("rx", 6 + spread * 1.6);
        p.setAttribute("ry", 9.5);
        p.setAttribute("transform", `rotate(${side * 26} ${cx} ${y})`);
        p.setAttribute("fill", i % 3 === 0 ? "#e8cd8e" : "none");
        p.setAttribute("stroke", "url(#gB)");
        p.setAttribute("stroke-width", "1.3");
        grains.appendChild(p);
      });
    }
  }

  /* ---------- Hero 粒子网络 ---------- */
  const canvas = document.getElementById("helixCanvas");
  if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let W, H, dots = [], raf;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(58, Math.floor((W * H) / 26000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.6
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 118) {
            ctx.strokeStyle = `rgba(31,111,80,${(1 - dist / 118) * 0.16})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      dots.forEach((d) => {
        ctx.fillStyle = "rgba(31,111,80,.32)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); draw(); });
  }

  /* ---------- 启动 ---------- */
  $("#year").textContent = new Date().getFullYear();
  render(lang);
})();
