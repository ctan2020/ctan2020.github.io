// 站点内容数据 —— 中文源自「谈聪-中文简历-20261124.docx」，英文为对应译写
window.SITE_DATA = {
  zh: {
    meta: {
      lang: "zh",
      htmlLang: "zh-CN",
      title: "谈聪 Cong Tan · 作物多组学与智能育种",
      desc: "谈聪，崖州湾国家实验室、研究员。研究聚焦作物基因组学、单细胞空间转录与人工智能驱动的基因组精准设计育种。"
    },

    nav: {
      research: "研究方向",
      publications: "代表性论著",
      projects: "科研项目",
      career: "经历",
      contact: "联系",
      menu: "菜单"
    },

    hero: {
      eyebrow: "小麦等主粮 · 产量性状与环境适应性 · 分子设计育种",
      name: "谈聪",
      nameEn: "Cong Tan",
      role: "崖州湾国家实验室  / 研究员",
      roleNote: "正高职称",
      tagline: "以<b>小麦等重要经济作物</b>为材料，融合<b>大数据、表型组</b>与<b>单细胞空间转录组</b>，<br class=\"br-pc\" />挖掘产量性状与环境适应性关键基因，服务<b>分子设计育种</b>。",
      stats: [
        { num: 44, suffix: "+", label: "国际期刊论文" },
        { num: 18, suffix: "+", label: "一作 / 通讯" },
        { num: 3, suffix: "", label: "CNS" }
      ],
      btnPrimary: "查看代表性论著",
      btnGhost: "联系与合作",
      portraitMeta: [
        { k: "当前机构", v: "崖州湾国家实验室" },
        { k: "博士", v: "莫道克大学 · 生物科学" },
        { k: "青年编委", v: "Engineering, Agri Commun, GigaScience 等" }
      ],
      scroll: "向下滚动"
    },

    sections: {
      research: { no: "01", title: "研究方向", sub: "Research Focus" },
      publications: { no: "02", title: "代表性论著", sub: "Selected Publications" },
      projects: { no: "03", title: "科研项目", sub: "Funded Projects" },
      career: { no: "04", title: "科研与教育经历", sub: "Career & Education" },
      outputs: { no: "05", title: "学术报告与软件成果", sub: "Talks & Software" }
    },

    research: [
      {
        no: "01",
        title: "产量性状的遗传解析",
        subtitle: "大数据 × 表型组 × 空间转录组",
        body: "以小麦等主粮为材料，综合利用大数据、表型组、单细胞空间转录组等新兴技术，精准挖掘调控作物产量等关键性状及其与环境互作的关键基因，解析产量性状形成的调控网络。",
        points: [
          "小麦穗部产量组分性状的空间转录组解析（Science Advances, 2026）",
          "国际小麦空间转录组计划（Nature Genetics, 2026）",
          "拟南芥单细胞全图谱（Cell, 2025）"
        ]
      },
      {
        no: "02",
        title: "环境适应性的分子基础",
        subtitle: "遗传学 × 生物化学 × 细胞生物学",
        body: "通过遗传学、生物化学、细胞生物学及组学等手段，研究作物产量性状形成与环境适应性的分子基础，揭示基因—环境互作如何塑造主粮作物在不同环境下的表现。",
        points: [
          "野生大麦基因组分化与环境选择（Plant Biotechnology Journal, 2023）",
          "大麦发芽期储藏物质动员的细胞特异机制（Agriculture Communications, 2026）"
        ]
      },
      {
        no: "03",
        title: "分子设计育种",
        subtitle: "前沿生物技术 × 大数据驱动",
        body: "聚焦前沿生物技术和大数据驱动的作物遗传改良，挖掘对产量有利用价值的基因资源，并通过基因组精准设计育种模型与平台将其转化为可落地的育种方案。",
        points: [
          "主要作物基因设计育种平台 CropGS-Hub（Nucleic Acids Research, 2025）",
          "基因组设计育种平台（Molecular Plant, 2025 / 2026）"
        ]
      }
    ],

    highlights: [
      { tag: "Cell · 2025", title: "拟南芥单细胞全图谱", desc: "解码叶片衰老与养分分配的单核转录组图谱，一作（共同）。" },
      { tag: "Nature Genetics · 2026", title: "小麦空间基因组学", desc: "国际小麦空间转录组计划，一作（共同），勾勒谷物穗部发育的空间版图。" },
      { tag: "Nucleic Acids Research · 2025", title: "CropGS-Hub", desc: "主要作物基因型—表型资源与基因组预测平台，一作（共同）。" },
      { tag: "Molecular Plant · 2025 / 2026", title: "BarleyOmics & From Field to Factory", desc: "大麦多组学数据库与作物育种范式变革综述，通讯 / 一作（共同）。" }
    ],

    publications: {
      lede: "迄今在 <em>Nature</em>、<em>Cell</em>、<em>Nature Genetics</em> 等国际学术期刊发表论文 44 篇以上，其中以第一或通讯作者（含共同）在 <em>Cell</em>（2025）、<em>Nature Genetics</em>（2026）、<em>Science Advances</em>（2026）、<em>Molecular Plant</em>（2025, 2026）、<em>Nucleic Acids Research</em>（2022, 2023, 2024）等刊物发表文章 17 篇以上。",
      filters: { all: "全部", first: "第一作者", corr: "通讯作者", nature: "Nature 系列", review: "审稿中" },
      tagFirst: "第一作者",
      tagCorr: "通讯作者",
      tagReview: "审稿中",
      empty: "暂无条目",
      coSummary: "共同作者论文（节选 12 篇）",
      coCount: "12 篇节选",
      natureAuthors: "Barley genome consortium（参与作者）"
    },

    trajectory: [
      { period: "2026.05 — 至今", role: " 研究员", org: "崖州湾国家实验室", note: "正高职称" },
      { period: "2020.04 — 2026.05", role: "副研究员 / 研究员", org: "华大生命科学研究院 / 华大万物", note: "正高职称" },
      { period: "2019.02 — 2020.01", role: "博士后研究员", org: "默多克大学（澳大利亚）", note: "合作导师：李承道 院士" },
      { period: "2018.02 — 2019.02", role: "Rutherford 基金研究员", org: "邓迪大学 & James Hutton Institute", note: "合作导师：Robbie Waugh 教授" }
    ],

    education: [
      { period: "2014.09 — 2018.08", role: "博士 · 生物科学", org: "莫道克大学（澳大利亚）", note: "生命科学学院 · 导师：李承道 院士" },
      { period: "2009.09 — 2012.06", role: "硕士 · 生物化学与分子生物学", org: "华中农业大学", note: "生命科学学院 · 导师：邢永忠 教授" },
      { period: "2005.09 — 2009.06", role: "本科 · 生物技术", org: "长江大学", note: "生命科学学院 · 导师：田志宏 教授" }
    ],

    careerTitles: { work: "科研与工作经历", edu: "教育经历", service: "学术服务", review: "期刊审稿人", editorial: "青年编委" },

    projects: [
      { source: "国家农业农村部", title: "科技创新 2030 — 生物育种重大项目", period: "2026.11 — 2030.12", amount: "120 万元", role: "项目骨干 / 任务负责人", highlight: true },
      { source: "国家农业农村部", title: "科技创新 2030 — 生物育种重大项目", period: "2023.01 — 2025.12", amount: "130 万元", role: "项目骨干 / 任务执行负责人", highlight: true },
      { source: "省科学技术厅", title: "省自然基金面上项目", period: "2026.01 — 2027.12", amount: "10 万元", role: "主持人", highlight: true },
      { source: "广东省科学技术厅", title: "广东省基因组学科学数据中心", period: "2022.01 — 2024.12", amount: "308.68 万元", role: "项目成员" },
      { source: "深圳市人才专项", title: "玉米快速育种技术与应用（孔雀团队）", period: "2023.01 — 2027.12", amount: "2,200 万元", role: "核心成员（第 2 位）· 两个子项目负责人", highlight: true },
      { source: "广东省岭南实验室", title: "主要粮食作物胚胎发育和种子萌发时空转录组研究", period: "2022.01 — 2026.12", amount: "500 万元", role: "核心成员" }
    ],
    projectLabels: { period: "周期", amount: "经费", role: "角色" },

    talks: [
      { title: "CropGS-Hub for GWAS association, phenotype prediction and crossing design", venue: "3rd International Wheat Congress 2024", place: "Perth, Australia", type: "Workshop presentation" },
      { title: "Environmental Driven Adaptation of Wild Barley in the Evolution Canyon", venue: "Plant and Animal Genome XXVI Conference (2018)", place: "San Diego, USA", type: "Abstract oral presentation" }
    ],

    software: [
      { name: "生命大数据可信计算平台", type: "软件著作权", reg: "软著登字第 7846821 号", date: "2020.10", authors: "谈聪、徐志成、丁远彤、魏晓锋、陈凤珍、杨帆、杜文斯、彭春华、刘义群、陈静、杨雅雯、杨涛、华聪、张敏文、曾文君" },
      { name: "耐盐碱植物数据库软件", type: "软件著作权", reg: "软著登字第 7746941 号", date: "2020.10", authors: "谈聪、魏晓锋、陈凤珍、杨帆、杜文斯、赖婷婷、杨涛、蔡佳、苏伟、华聪、张敏文、游丽金、曾文君" }
    ],

    contact: {
      eyebrow: "Get in touch",
      title: "欢迎交流与合作",
      sub: "面向作物多组学、空间转录组、智能设计育种的学术合作、数据共享与人才招募，欢迎来信。",
      email: "邮箱",
      phone: "电话",
      org: "机构",
      orgValue: "崖州湾国家实验室"
    },

    footer: { copyright: "©", note: "本站内容依据个人中文简历整理", top: "回到顶部 ↑" },

    service: {
      review: "Cell、Nature Genetics、iMeta、Molecular Plant、Nucleic Acids Research、Plant Physiology、Plant Communications、The Plant Journal 等国际期刊审稿人",
      editorial: "iMeta、Engineering、Agriculture Communications、Horticulture Research、GigaScience 青年编委"
    },

    // 论著（第一 / 通讯，含共同）
    publications_list: [
      { year: 2026, authors: "Tao, X.-Y.#, Tan, C.#, Li, Y., … Xu, X., & Chen, Z.-H.", title: "The potential of wheat spatial genomics", journal: "Nature Genetics", meta: "一作· 生物学 Q1 · IF 31", tag: "first", doi: "10.1038/s41588-026-02542-w" },
      { year: 2026, authors: "Li, H., Tong, C., Ji, X., … Li, C.*, & Tan, C.*", title: "Single-nucleus transcriptomic decoding of cell-specific machinery for storage reserve remobilization in germinating barley", journal: "Agriculture Communications", meta: "通讯作者 · Q1 · IF 11.5", tag: "corr" },
      { year: 2026, authors: "Huang, W., Yang, L., Hu, N., … Chen, Z.-H., & Tan, C.*", title: "Single-nucleus transcriptome profiling unveils cell-type specific ethylene and TOR signaling in tomato", journal: "Horticulture Research", meta: "通讯作者 · Q1 · IF 8.5", tag: "corr", doi: "10.1093/hr/uhag044" },
      { year: 2026, authors: "Zhao, B., Zhang, C., Gong, Z. K., … He, W., & Tan, C.*", title: "WinPopLDdecay: a hardware-adaptive and reproducible reimplementation of PopLDdecay with a graphical interface", journal: "GigaScience", meta: "通讯作者", tag: "corr" },
      { year: 2026, authors: "Qu, Y.#, Tan, C.#, Yang, L., … & Boden, S. A.", title: "Spatial transcriptomics identifies distinct domains regulating yield-component traits of the wheat ear", journal: "Science Advances", meta: "一作· 生物学 Q1 · IF 15.5", tag: "first", doi: "10.1126/sciadv.aed1407" },
      { year: 2026, authors: "Fu, J.#, Tan, C.#, Zhang, X., … & Xu, Y.", title: "Revolution in Plant Breeding: From Field to Factory", journal: "Molecular Plant", meta: "一作· 生物学 Q1 · IF 27.5", tag: "first", doi: "10.1016/j.molp.2026.07.017" },
      { year: 2025, authors: "Guo, X.#, Wang, Y.#, Zhao, C.#, Tan, C.#, … & Xu, X.", title: "An Arabidopsis single-nucleus atlas decodes leaf senescence and nutrient allocation", journal: "Cell", meta: "一作· 生物学 Q1 · IF 45.6", tag: "first" },
      { year: 2025, authors: "Zhao, J., Xie, S., Zhang, C., … Zhang, G., Tan, C.*, & Ye, L.*", title: "BarleyOmics: A comprehensive multi-omics database of barley", journal: "Molecular Plant", meta: "通讯作者 · 生物学 Q1 · IF 27.5", tag: "corr" },
      { year: 2025, authors: "Wang, W.#, Tan, C.#, Li, L.#, … & Wei, X.", title: "The China National GeneBank Sequence Archive (CNSA) 2024 update", journal: "Horticulture Research", meta: "一作· 生物学 Q1 · IF 7.6", tag: "first" },
      { year: 2024, authors: "Huang, W.#, Tan, C.#, & Guo, H.*", title: "Ethylene in fruits: beyond ripening control", journal: "Horticulture Research", meta: "通讯作者 · 生物学 Q1 · IF 7.6", tag: "corr" },
      { year: 2024, authors: "Chen, J.#, Tan, C.#, Zhu, M.#, … & Liu, H.", title: "CropGS-Hub: a comprehensive database of genotype and phenotype resources for genomic prediction in major crops", journal: "Nucleic Acids Research", meta: "一作· 生物学 Q2 · IF 16.1", tag: "first" },
      { year: 2024, authors: "Wang, H., Xu, Y., Zhang, Z., Zhang, G., Tan, C.*, & Ye, L.*", title: "Development and application of transcriptomics technologies in plant science", journal: "Crop Design", meta: "通讯作者", tag: "corr" },
      { year: 2023, authors: "Zhang, W.#, Tan, C.#, Hu, H.#, … & Li, C.", title: "Genome architecture and diverged selection shaping pattern of genomic differentiation in wild barley", journal: "Plant Biotechnology Journal", meta: "一作· 生物学 Q1 · IF 12.1", tag: "first" },
      { year: 2023, authors: "Zhou, Z.#, Tan, C.#, Chau, M. H. K., … & Dong, Z.", title: "TEDD: a database of temporal gene expression patterns during multiple developmental periods in human and model organisms", journal: "Nucleic Acids Research", meta: "一作· 生物学 Q2 · IF 16.1", tag: "first" },
      { year: 2022, authors: "Chen, D.#, Tan, C.#, Ding, P.#, … & Liu, H.", title: "VThunter: a database for single-cell screening of virus target cells in the animal kingdom", journal: "Nucleic Acids Research", meta: "一作· 生物学 Q2 · IF 16.1", tag: "first" },
      { year: 2020, authors: "Tan, C., Chapman, B., Wang, P., … & Li, C.*", title: "BarleyVarDB: a database of barley genomic variation", journal: "Database (Oxford)", meta: "第一作者 · IF 4.2", tag: "first" },
      { year: 2019, authors: "Tan, C., Zhang, X.-Q., … & Li, C.*", title: "Characterization of genome-wide variations induced by gamma-ray radiation in barley using RNA-Seq", journal: "BMC Genomics", meta: "第一作者 · 生物学 Q2 · IF 4.1", tag: "first" },
      { year: 2012, authors: "Tan, C., Han, Z., Yu, H., … & Xing, Y.", title: "QTL Scanning for Rice Yield Using a Whole Genome SNP Array", journal: "Journal of Genetics and Genomics", meta: "第一作者 · 生物学 Q1 · IF 5.8", tag: "first" }
    ],

    naturePapers: [
      { title: "A chromosome conformation capture ordered sequence of the barley genome", journal: "Nature", year: 2017, meta: "参与 · IF 54.4" },
      { title: "The barley pan-genome reveals the hidden legacy of mutation breeding", journal: "Nature", year: 2020, meta: "参与 · IF 54.4" }
    ],

    underReview: [
      { authors: "Zhang, C., Jia, Y., Fan, L., … & Tan, C.", title: "Genome-wide association analyses revealed comprehensive genetic loci and candidate genes controlling hull colours in Setaria italica", journal: "Agriculture Communications", meta: "Under revision" }
    ],

    coauthored: [
      { year: 2022, text: "Dong H., Wang X., Tan C., … & Chen X. NAD+-capped RNAs are widespread in rice and spatiotemporally modulated during development. Science China Life Sciences, 65, 2121–2124." },
      { year: 2022, text: "Chen F. Z., You L. J., Yang F., … Tan C., … & Shan R. Q. CNGBdb: China National GeneBank DataBase. Hereditas, 42, 799–809." },
      { year: 2021, text: "He T., Angessa T. T., Hill C. B., … Han Y., … Tan C., et al. Genomic structural equation modelling provides a whole-system approach for the future crop breeding. Theoretical and Applied Genetics, 134, 2875–2889." },
      { year: 2021, text: "Hill C. B., Angessa T. T., Zhang X. Q., … Tan C., Wang P., Westcott S. & Li C. A global barley panel revealing genomic signatures of breeding in modern Australian cultivars. The Plant Journal, 106, 419–434." },
      { year: 2021, text: "Jia Y., Westcott S., He T., … Tan C., … & Li C. Genome-wide association studies reveal QTL hotspots for grain brightness and black point traits in barley. The Crop Journal, 9, 154–167." },
      { year: 2020, text: "Hu W., Zhou T., Han Z., Tan C. & Xing Y. Dominant complementary interaction between OsC1 and two tightly linked genes, Rb1 and Rb2, controls the purple leaf sheath in rice. Theoretical and Applied Genetics, 133, 2555–2566." },
      { year: 2020, text: "Hua W., Tan C., Xie J., … & Li C. Alternative splicing of a barley gene results in an excess-tillering and semi-dwarf mutant. Theoretical and Applied Genetics, 133, 163–177." },
      { year: 2020, text: "Jia Y., Selva C., Zhang Y., … Tan C., et al. Uncovering the evolutionary origin of blue anthocyanins in cereal grains. The Plant Journal, 101, 1057–1074." },
      { year: 2019, text: "Li G., Jin J., Zhou Y., … Tan C., Wang G. & Ouyang Y. Genome-wide dissection of segregation distortion using multiple inter-subspecific crosses in rice. Science China Life Sciences, 62, 507–516." },
      { year: 2018, text: "Prade V. M., Gundlach H., Twardziok S., … Tan C., … & Zhang G. The pseudogenes of barley. The Plant Journal, 93, 502–514." },
      { year: 2017, text: "Han Z., Hu W., Tan C. & Xing Y. QTLs for heading date and plant height under multiple environments in rice. Genetica, 145, 67–77." },
      { year: 2016, text: "Li Q., Yan W., Chen H., Tan C., … & Xing Y. Duplication of OsHAP family genes and their association with heading date in rice. Journal of Experimental Botany, 67, 1759–1768." }
    ],

    links: [
      { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=W2IoUbcAAAAJ" },
      { label: "ORCID", href: "https://orcid.org/0000-0003-0158-4442" },
      { label: "ResearchGate", href: "https://www.researchgate.net/profile/Cong-Tan-4" },
      { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=56810012600" }
    ]
  },

  /* ===================== ENGLISH ===================== */
  en: {
    meta: {
      lang: "en",
      htmlLang: "en",
      title: "Cong Tan · Crop Yield Genetics & Molecular Design Breeding",
      desc: "Cong Tan, Principal Scientist and Professor at Yazhou Bay National Laboratory. Genetic improvement of yield traits and environmental adaptation in staple crops such as wheat, combining big data, phenomics and single-cell spatial transcriptomics for molecular design breeding."
    },

    nav: {
      research: "Research",
      publications: "Publications",
      projects: "Projects",
      career: "Career",
      contact: "Contact",
      menu: "Menu"
    },

    hero: {
      eyebrow: "Staple Crops · Yield & Adaptation · Design Breeding",
      name: "Cong Tan",
      nameEn: "谈聪",
      role: "Yazhou Bay National Laboratory · Principal Scientist / Professor",
      roleNote: "Professor",
      tagline: "Using <b>wheat</b> and other staple crops, integrating <b>big data</b>, <b>phenomics</b> and <b>single-cell spatial transcriptomics</b> to identify genes for <b>yield and environmental adaptation</b> — and feed them into <b>molecular design breeding</b>.",
      stats: [
        { num: 44, suffix: "+", label: "journal papers" },
        { num: 17, suffix: "+", label: "first / corresponding" },
        { num: 3, suffix: "", label: " CNS " }
      ],
      btnPrimary: "Selected publications",
      btnGhost: "Get in touch",
      portraitMeta: [
        { k: "Affiliation", v: "Yazhou Bay National Laboratory" },
        { k: "PhD", v: "Murdoch University · Biological Science" },
        { k: "Review / Editorial", v: "Cell, Nature Genetics, etc." }
      ],
      scroll: "Scroll"
    },

    sections: {
      research: { no: "01", title: "Research Focus", sub: "研究方向" },
      publications: { no: "02", title: "Selected Publications", sub: "代表性论著" },
      projects: { no: "03", title: "Research Grants", sub: "科研项目" },
      career: { no: "04", title: "Career & Education", sub: "科研与教育经历" },
      outputs: { no: "05", title: "Talks & Software", sub: "学术报告与软件成果" }
    },

    research: [
      {
        no: "01",
        title: "Genetics of Yield Traits",
        subtitle: "Big Data × Phenomics × Spatial Transcriptomics",
        body: "Working with wheat and other staple crops, we combine big data, phenomics and single-cell spatial transcriptomics to pinpoint key genes controlling yield and its interaction with the environment, and to resolve the regulatory networks underlying yield formation.",
        points: [
          "Spatial transcriptomic dissection of yield-component traits in the wheat ear (Science Advances, 2026)",
          "International Wheat Spatial Transcriptomics Initiative (Nature Genetics, 2026)",
          "A single-nucleus atlas of Arabidopsis (Cell, 2025)"
        ]
      },
      {
        no: "02",
        title: "Molecular Basis of Environmental Adaptation",
        subtitle: "Genetics × Biochemistry × Cell Biology",
        body: "Using genetics, biochemistry, cell biology and multi-omics, we study the molecular basis of yield formation and environmental adaptation, asking how gene–environment interactions shape the performance of staple crops across environments.",
        points: [
          "Genome differentiation and divergent selection in wild barley (Plant Biotechnology Journal, 2023)",
          "Cell-type-specific machinery for storage reserve remobilisation in germinating barley (Agriculture Communications, 2026)"
        ]
      },
      {
        no: "03",
        title: "Molecular Design Breeding",
        subtitle: "Frontier Biotechnologies × Big-data Driven",
        body: "Focused on frontier biotechnologies and big-data-driven genetic improvement, we mine gene resources of breeding value for yield and translate them into deployable breeding schemes through genomic design breeding models and platforms.",
        points: [
          "CropGS-Hub, a genomic design breeding platform for major crops (Nucleic Acids Research, 2025)",
          "Genomic design breeding platforms (Molecular Plant, 2025 / 2026)"
        ]
      }
    ],

    highlights: [
      { tag: "Cell · 2025", title: "Arabidopsis single-nucleus atlas", desc: "A single-nucleus transcriptomic atlas decoding leaf senescence and nutrient allocation. Co-first author." },
      { tag: "Nature Genetics · 2026", title: "Wheat spatial genomics", desc: "Part of the international wheat spatial transcriptomics initiative, mapping the developing wheat ear. Co-first author." },
      { tag: "Nucleic Acids Research · 2025", title: "CropGS-Hub", desc: "Genotype–phenotype resources and genomic prediction for major crops. Co-first author." },
      { tag: "Molecular Plant · 2025 / 2026", title: "BarleyOmics & From Field to Factory", desc: "A multi-omics barley database and a perspective on the changing breeding paradigm. Corresponding / co-first author." }
    ],

    publications: {
      lede: "More than 44 papers in international journals including <em>Nature</em>, <em>Cell</em> and <em>Nature Genetics</em>, with over 17 first or corresponding author (including co-) papers in <em>Cell</em> (2025), <em>Nature Genetics</em> (2026), <em>Science Advances</em> (2026), <em>Molecular Plant</em> (2025, 2026), <em>Nucleic Acids Research</em> (2022, 2023, 2024) and others.",
      filters: { all: "All", first: "First author", corr: "Corresponding", nature: "Nature series", review: "Under review" },
      tagFirst: "First author",
      tagCorr: "Corresponding",
      tagReview: "Under review",
      empty: "No entries",
      coSummary: "Co-authored papers (12 selected)",
      coCount: "12 selected",
      natureAuthors: "Barley genome consortium (contributing author)"
    },

    trajectory: [
      { period: "May 2026 — Present", role: "Principal Scientist / Professor", org: "Yazhou Bay National Laboratory", note: "Full professor" },
      { period: "Apr 2020 — May 2026", role: "Associate / Full Professor", org: "BGI Research / BGI Bioverse", note: "Full professor" },
      { period: "Feb 2019 — Jan 2020", role: "Postdoctoral Fellow", org: "Murdoch University, Australia", note: "with Prof. Chengdao Li" },
      { period: "Feb 2018 — Feb 2019", role: "Rutherford Foundation Research Fellow", org: "University of Dundee & James Hutton Institute", note: "with Prof. Robbie Waugh" }
    ],

    education: [
      { period: "Sep 2014 — Aug 2018", role: "PhD · Biological Science", org: "Murdoch University, Australia", note: "School of Life Sciences · Supervisor: Prof. Chengdao Li" },
      { period: "Sep 2009 — Jun 2012", role: "MSc · Biochemistry & Molecular Biology", org: "Huazhong Agricultural University", note: "College of Life Sciences · Supervisor: Prof. Yongzhong Xing" },
      { period: "Sep 2005 — Jun 2009", role: "BSc · Biotechnology", org: "Yangtze University", note: "College of Life Sciences · Supervisor: Prof. Zhihong Tian" }
    ],

    careerTitles: { work: "Research & Professional Experience", edu: "Education", service: "Academic Service", review: "Journal reviewer", editorial: "Early-career editor" },

    projects: [
      { source: "Ministry of Agriculture and Rural Affairs", title: "Sci-Tech Innovation 2030 — Major Project on Biological Breeding", period: "Nov 2026 — Dec 2030", amount: "¥1.2 M", role: "Core member / Task lead", highlight: true },
      { source: "Ministry of Agriculture and Rural Affairs", title: "Sci-Tech Innovation 2030 — Major Project on Biological Breeding", period: "Jan 2023 — Dec 2025", amount: "¥1.3 M", role: "Core member / Task executive lead", highlight: true },
      { source: "Provincial Department of Science and Technology", title: "Provincial Natural Science Foundation (General Programme)", period: "Jan 2026 — Dec 2027", amount: "¥0.1 M", role: "Principal Investigator", highlight: true },
      { source: "Guangdong Provincial Department of Science and Technology", title: "Guangdong Provincial Genomics Science Data Center", period: "Jan 2022 — Dec 2024", amount: "¥3.09 M", role: "Project member" },
      { source: "Shenzhen Talent Programme", title: "Rapid Maize Breeding Technology and Application (Peacock Team)", period: "Jan 2023 — Dec 2027", amount: "¥22.0 M", role: "Core member (2nd) · Lead of two sub-projects", highlight: true },
      { source: "Guangdong Lingnan Laboratory", title: "Spatiotemporal Transcriptomics of Embryo Development and Seed Germination in Major Cereals", period: "Jan 2022 — Dec 2026", amount: "¥5.0 M", role: "Core member" }
    ],
    projectLabels: { period: "Period", amount: "Funding", role: "Role" },

    talks: [
      { title: "CropGS-Hub for GWAS association, phenotype prediction and crossing design", venue: "3rd International Wheat Congress 2024", place: "Perth, Australia", type: "Workshop presentation" },
      { title: "Environmental Driven Adaptation of Wild Barley in the Evolution Canyon", venue: "Plant and Animal Genome XXVI Conference (2018)", place: "San Diego, USA", type: "Abstract oral presentation" }
    ],

    software: [
      { name: "Trusted Computing Platform for Life Big Data", type: "Software copyright", reg: "Reg. No. 7846821", date: "Oct 2020", authors: "Tan Cong, Xu Zhicheng, Ding Yuantong, Wei Xiaofeng, Chen Fengzhen, Yang Fan, Du Wensi, Peng Chunhua, Liu Yiqun, Chen Jing, Yang Yawen, Yang Tao, Hua Cong, Zhang Minwen, Zeng Wenjun" },
      { name: "Saline-Alkali Tolerant Plant Database", type: "Software copyright", reg: "Reg. No. 7746941", date: "Oct 2020", authors: "Tan Cong, Wei Xiaofeng, Chen Fengzhen, Yang Fan, Du Wensi, Lai Tingting, Yang Tao, Cai Jia, Su Wei, Hua Cong, Zhang Minwen, You Lijin, Zeng Wenjun" }
    ],

    contact: {
      eyebrow: "Get in touch",
      title: "Let's collaborate",
      sub: "Open to academic collaboration, data sharing and talent recruitment in crop multi-omics, spatial transcriptomics and intelligent design breeding.",
      email: "Email",
      phone: "Phone",
      org: "Affiliation",
      orgValue: "Yazhou Bay National Laboratory"
    },

    footer: { copyright: "©", note: "Content adapted from the personal CV", top: "Back to top ↑" },

    service: {
      review: "Reviewer for Cell, Nature Genetics, iMeta, Molecular Plant, Nucleic Acids Research, Plant Physiology, Plant Communications, The Plant Journal and others",
      editorial: "Early-career editor of iMeta, Engineering, Agriculture Communications, Horticulture Research and GigaScience"
    },

    publications_list: [
      { year: 2026, authors: "Tao, X.-Y.#, Tan, C.#, Li, Y., … Xu, X., & Chen, Z.-H.", title: "The potential of wheat spatial genomics", journal: "Nature Genetics", meta: "Co-first author · Biology Q1 · IF 31", tag: "first", doi: "10.1038/s41588-026-02542-w" },
      { year: 2026, authors: "Li, H., Tong, C., Ji, X., … Li, C.*, & Tan, C.*", title: "Single-nucleus transcriptomic decoding of cell-specific machinery for storage reserve remobilization in germinating barley", journal: "Agriculture Communications", meta: "Corresponding author · Q1 · IF 11.5", tag: "corr" },
      { year: 2026, authors: "Huang, W., Yang, L., Hu, N., … Chen, Z.-H., & Tan, C.*", title: "Single-nucleus transcriptome profiling unveils cell-type specific ethylene and TOR signaling in tomato", journal: "Horticulture Research", meta: "Corresponding author · Q1 · IF 8.5", tag: "corr", doi: "10.1093/hr/uhag044" },
      { year: 2026, authors: "Zhao, B., Zhang, C., Gong, Z. K., … He, W., & Tan, C.*", title: "WinPopLDdecay: a hardware-adaptive and reproducible reimplementation of PopLDdecay with a graphical interface", journal: "GigaScience", meta: "Corresponding author", tag: "corr" },
      { year: 2026, authors: "Qu, Y.#, Tan, C.#, Yang, L., … & Boden, S. A.", title: "Spatial transcriptomics identifies distinct domains regulating yield-component traits of the wheat ear", journal: "Science Advances", meta: "Co-first author · Biology Q1 · IF 15.5", tag: "first", doi: "10.1126/sciadv.aed1407" },
      { year: 2026, authors: "Fu, J.#, Tan, C.#, Zhang, X., … & Xu, Y.", title: "Revolution in Plant Breeding: From Field to Factory", journal: "Molecular Plant", meta: "Co-first author · Biology Q1 · IF 27.5", tag: "first", doi: "10.1016/j.molp.2026.07.017" },
      { year: 2025, authors: "Guo, X.#, Wang, Y.#, Zhao, C.#, Tan, C.#, … & Xu, X.", title: "An Arabidopsis single-nucleus atlas decodes leaf senescence and nutrient allocation", journal: "Cell", meta: "Co-first author · Biology Q1 · IF 45.6", tag: "first" },
      { year: 2025, authors: "Zhao, J., Xie, S., Zhang, C., … Zhang, G., Tan, C.*, & Ye, L.*", title: "BarleyOmics: A comprehensive multi-omics database of barley", journal: "Molecular Plant", meta: "Corresponding author · Biology Q1 · IF 27.5", tag: "corr" },
      { year: 2025, authors: "Wang, W.#, Tan, C.#, Li, L.#, … & Wei, X.", title: "The China National GeneBank Sequence Archive (CNSA) 2024 update", journal: "Horticulture Research", meta: "Co-first author · Biology Q1 · IF 7.6", tag: "first" },
      { year: 2024, authors: "Huang, W.#, Tan, C.#, & Guo, H.*", title: "Ethylene in fruits: beyond ripening control", journal: "Horticulture Research", meta: "Corresponding author · Biology Q1 · IF 7.6", tag: "corr" },
      { year: 2024, authors: "Chen, J.#, Tan, C.#, Zhu, M.#, … & Liu, H.", title: "CropGS-Hub: a comprehensive database of genotype and phenotype resources for genomic prediction in major crops", journal: "Nucleic Acids Research", meta: "Co-first author · Biology Q2 · IF 16.1", tag: "first" },
      { year: 2024, authors: "Wang, H., Xu, Y., Zhang, Z., Zhang, G., Tan, C.*, & Ye, L.*", title: "Development and application of transcriptomics technologies in plant science", journal: "Crop Design", meta: "Corresponding author", tag: "corr" },
      { year: 2023, authors: "Zhang, W.#, Tan, C.#, Hu, H.#, … & Li, C.", title: "Genome architecture and diverged selection shaping pattern of genomic differentiation in wild barley", journal: "Plant Biotechnology Journal", meta: "Co-first author · Biology Q1 · IF 12.1", tag: "first" },
      { year: 2023, authors: "Zhou, Z.#, Tan, C.#, Chau, M. H. K., … & Dong, Z.", title: "TEDD: a database of temporal gene expression patterns during multiple developmental periods in human and model organisms", journal: "Nucleic Acids Research", meta: "Co-first author · Biology Q2 · IF 16.1", tag: "first" },
      { year: 2022, authors: "Chen, D.#, Tan, C.#, Ding, P.#, … & Liu, H.", title: "VThunter: a database for single-cell screening of virus target cells in the animal kingdom", journal: "Nucleic Acids Research", meta: "Co-first author · Biology Q2 · IF 16.1", tag: "first" },
      { year: 2020, authors: "Tan, C., Chapman, B., Wang, P., … & Li, C.*", title: "BarleyVarDB: a database of barley genomic variation", journal: "Database (Oxford)", meta: "First author · IF 4.2", tag: "first" },
      { year: 2019, authors: "Tan, C., Zhang, X.-Q., … & Li, C.*", title: "Characterization of genome-wide variations induced by gamma-ray radiation in barley using RNA-Seq", journal: "BMC Genomics", meta: "First author · Biology Q2 · IF 4.1", tag: "first" },
      { year: 2012, authors: "Tan, C., Han, Z., Yu, H., … & Xing, Y.", title: "QTL Scanning for Rice Yield Using a Whole Genome SNP Array", journal: "Journal of Genetics and Genomics", meta: "First author · Biology Q1 · IF 5.8", tag: "first" }
    ],

    naturePapers: [
      { title: "A chromosome conformation capture ordered sequence of the barley genome", journal: "Nature", year: 2017, meta: "Contributing author · IF 54.4" },
      { title: "The barley pan-genome reveals the hidden legacy of mutation breeding", journal: "Nature", year: 2020, meta: "Contributing author · IF 54.4" }
    ],

    underReview: [
      { authors: "Zhang, C., Jia, Y., Fan, L., … & Tan, C.", title: "Genome-wide association analyses revealed comprehensive genetic loci and candidate genes controlling hull colours in Setaria italica", journal: "Agriculture Communications", meta: "Under revision" }
    ],

    coauthored: [
      { year: 2022, text: "Dong H., Wang X., Tan C., … & Chen X. NAD+-capped RNAs are widespread in rice and spatiotemporally modulated during development. Science China Life Sciences, 65, 2121–2124." },
      { year: 2022, text: "Chen F. Z., You L. J., Yang F., … Tan C., … & Shan R. Q. CNGBdb: China National GeneBank DataBase. Hereditas, 42, 799–809." },
      { year: 2021, text: "He T., Angessa T. T., Hill C. B., … Han Y., … Tan C., et al. Genomic structural equation modelling provides a whole-system approach for the future crop breeding. Theoretical and Applied Genetics, 134, 2875–2889." },
      { year: 2021, text: "Hill C. B., Angessa T. T., Zhang X. Q., … Tan C., Wang P., Westcott S. & Li C. A global barley panel revealing genomic signatures of breeding in modern Australian cultivars. The Plant Journal, 106, 419–434." },
      { year: 2021, text: "Jia Y., Westcott S., He T., … Tan C., … & Li C. Genome-wide association studies reveal QTL hotspots for grain brightness and black point traits in barley. The Crop Journal, 9, 154–167." },
      { year: 2020, text: "Hu W., Zhou T., Han Z., Tan C. & Xing Y. Dominant complementary interaction between OsC1 and two tightly linked genes, Rb1 and Rb2, controls the purple leaf sheath in rice. Theoretical and Applied Genetics, 133, 2555–2566." },
      { year: 2020, text: "Hua W., Tan C., Xie J., … & Li C. Alternative splicing of a barley gene results in an excess-tillering and semi-dwarf mutant. Theoretical and Applied Genetics, 133, 163–177." },
      { year: 2020, text: "Jia Y., Selva C., Zhang Y., … Tan C., et al. Uncovering the evolutionary origin of blue anthocyanins in cereal grains. The Plant Journal, 101, 1057–1074." },
      { year: 2019, text: "Li G., Jin J., Zhou Y., … Tan C., Wang G. & Ouyang Y. Genome-wide dissection of segregation distortion using multiple inter-subspecific crosses in rice. Science China Life Sciences, 62, 507–516." },
      { year: 2018, text: "Prade V. M., Gundlach H., Twardziok S., … Tan C., … & Zhang G. The pseudogenes of barley. The Plant Journal, 93, 502–514." },
      { year: 2017, text: "Han Z., Hu W., Tan C. & Xing Y. QTLs for heading date and plant height under multiple environments in rice. Genetica, 145, 67–77." },
      { year: 2016, text: "Li Q., Yan W., Chen H., Tan C., … & Xing Y. Duplication of OsHAP family genes and their association with heading date in rice. Journal of Experimental Botany, 67, 1759–1768." }
    ],

    links: [
      { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=W2IoUbcAAAAJ" },
      { label: "ORCID", href: "https://orcid.org/0000-0003-0158-4442" },
      { label: "ResearchGate", href: "https://www.researchgate.net/profile/Cong-Tan-4" },
      { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=56810012600" }
    ]
  }
};

window.SITE_PROFILE = {
  email: "tancong@yzwlab.cn",
  phone: "+86 15971326450"
};
