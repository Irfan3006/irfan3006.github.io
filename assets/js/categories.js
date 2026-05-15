const BLOG_CATEGORIES = ["K-Pop", "Blackpink", "BTS", "Jisoo", "Lisa", "ARMY", "Anime", "Amikom", "HIMTEKK", "RISMA", "Karang Jambe", "Campus Life", "Student Organization",
  "University", "College", "Scholarship", "Internship", "Graduation", "Lecture", "Seminar", "Webinar",
  "Workshop", "Research", "Thesis", "Dormitory", "Student Exchange", "UKM", "BEM",
  "Library", "Lab", "Campus News", "Event Kampus", "Tips Mahasiswa", "Study Abroad", "Alumni",
  "UI", "UGM", "ITB", "IPB", "ITS", "UNAIR", "UNDIP", "UNPAD", "UB", "UNHAS", "UNS", "UNY", "UNESA",
  "UNM", "UNP", "UNRI", "UNAND", "UNILA", "UNUD", "UMBY", "UAJY", "UII", "UMY", "UAD", "Binus",
  "Telkom University", "Petra", "Atma Jaya", "Tarumanagara", "Parahyangan", "Maranatha", "Ciputra",
  "Prasetya Mulya", "UPH", "Mercu Buana", "Trisakti", "Gunadarma", "Pancasila", "UMM", "UMS", "UNISBA",
  "UNIKOM", "UIN Jakarta", "UIN Jogja", "UIN Malang", "MIT", "Harvard", "Stanford", "Oxford", "Cambridge",
  "Caltech", "ETH Zurich", "UCL", "Imperial College", "Chicago University", "Princeton", "Yale", "Cornell",
  "Columbia", "UPenn", "Johns Hopkins", "UC Berkeley", "UCLA", "University of Toronto", "McGill",
  "University of Tokyo", "Kyoto University", "NUS", "NTU", "Tsinghua", "Peking University", "SNU",
  "KAIST", "Melbourne University", "ANU", "Sydney University", "UBC", "Manchester University",
  "King's College", "LSE", "Edinburgh University", "Sorbonne", "PSL", "Technical University Munich",
  "Heidelberg University", "Delft University", "KU Leuven", "Zhejiang University", "Fudan University",
  "Hong Kong University", "USTC", "Osaka University", "Tohoku University", "Yonsei University",
  "Korea University", "Monash University", "Queensland University", "Auckland University",
  "SNBP", "SNBT", "Seleksi Mandiri", "UTBK", "KIP Kuliah", "Jalur Prestasi", "Jalur Rapor",
  "Passing Grade", "Tryout UTBK", "Latihan Soal", "Tips Masuk PTN", "Kedinasan", "STAN", "STIS",
  "IPDN", "Akpol", "Akmil", "CPNS", "PPPK",
  "Dark Triad", "Bullying", "Cyberbullying", "Mind Peace", "Inner Peace", "Emotional Intelligence",
  "Narcissism", "Gaslighting", "Toxic Relationships", "Mental Health", "Self Love", "Self Care",
  "Mindfulness", "Trauma Healing", "Stress Management", "Burnout", "Personality Disorders",
  "Cognitive Psychology", "Behavioral Science", "Body Language", "Micro-expressions", "MBTI",
  "Enneagram", "Psychological Warfare", "Manipulation", "Boundaries", "Positive Psychology",
  "Neuroscience", "Neurobiology", "Neuroplasticity", "Cognitive Neuroscience", "Neuropsychology",
  "Brain Mapping", "Neural Networks (Bio)", "Dopamine", "Serotonin", "Brain-Computer Interface",
  "Breaking News", "World News", "National News", "Local News", "Investigative Journalism",
  "Editorial", "Opinion", "Trending News", "Viral News", "Media Literacy", "Press Release",
  "SOC", "Blue Team", "Red Team", "Purple Team", "Wazuh", "Nmap", "Nuclei", "Kali Linux",
  "Wireshark", "Postman", "Burp Suite", "Metasploit", "SIEM", "EDR", "Malware Analysis",
  "Penetration Testing", "Vulnerability Assessment", "Threat Hunting", "Incident Response",
  "Digital Forensics", "CTF", "Bug Bounty", "OSINT", "SOCINT", "GEOINT", "IMINT", "HUMINT",
  "Dark Web Investigation", "Google Dorking", "Shodan", "Maltego", "SpiderFoot", "Recon-ng",
  "Network Security", "Web Security", "API Security", "Cloud Security", "DevSecOps", "Linux",
  "Open Source", "Cyber Warfare", "TCP/IP", "DNS", "DHCP", "VPN", "Firewall", "Router", "Switch",
  "VLAN", "Subnetting", "Network Monitoring", "Wireless Security", "Cisco", "MikroTik",
  "Juniper", "Ubiquiti", "SDN", "Load Balancing", "Proxy",
  "Technology", "Programming", "Artificial Intelligence", "Web Development", "Mobile Development",
  "Cyber Security", "Blockchain", "Data Science", "Machine Learning", "Cloud Computing",
  "Internet of Things (IoT)", "Robotics", "Software Engineering", "Game Development", "UI/UX Design",
  "Gadgets", "Hardware", "Networking", "Open Source", "Tech News", "Digital Marketing",
  "SEO", "Social Media", "E-commerce", "SaaS", "Fintech", "Crypto", "Startup", "Business",
  "Entrepreneurship", "Economy", "Finance", "Personal Finance", "Investment", "Stock Market",
  "Real Estate", "Marketing", "Management", "Leadership", "Productivity", "Career", "Work Life",
  "Education", "Online Learning", "Academic", "Science", "Physics", "Chemistry", "Biology",
  "Mathematics", "Astronomy", "Nature", "Environment", "Sustainability", "Climate Change",
  "Health", "Fitness", "Mental Health", "Wellness", "Nutrition", "Yoga", "Meditation",
  "Medicine", "Psychology", "Life Hacks", "Lifestyle", "Fashion", "Beauty", "Skincare",
  "Travel", "Tourism", "Adventure", "Photography", "Videography", "Music", "Movies", "Cinema",
  "TV Shows", "Gaming", "Esports", "Sports", "Football", "Basketball", "Tennis", "Outdoor",
  "Automotive", "Cars", "Motorcycles", "DIY", "Crafts", "Home Decor", "Interior Design",
  "Gardening", "Cooking", "Food & Drink", "Recipes", "Baking", "Coffee", "Pets", "Animals",
  "History", "Archaeology", "Culture", "Art", "Literature", "Books", "Poetry", "Philosophy",
  "Spirituality", "Religion", "Mythology", "Politics", "Law", "Society", "Human Rights",
  "Journalism", "Parenting", "Family", "Relationships", "Weddings", "Personal Growth",
  "Psychology", "Minimalism", "Organization", "Architecture", "Urban Planning", "Space Exploration",
  "Military", "Aviation", "Maritime", "Graphic Design", "Illustration", "Animation", "Typography",
  "Copywriting", "Public Speaking", "Language Learning", "Translation", "Event Planning", "Volunteering",
  "Anime", "Manga", "Otaku Culture", "Cosplay", "Light Novels", "Webtoons", "Adult", "Erotica",
  "Romance", "True Crime", "Mystery", "Thriller", "Horror", "Documentary", "Indie Films", "Animation",
  "Gothic Art", "Comic", "Webcomics", "Manhwa", "Manhua", "Digital Illustration", "Audio Visual",
  "Fine Art", "Abstract Art", "Surrealism Art", "Concept Art", "Character Design", "Storyboard",
  "Geology", "Earth Sciences", "Geography", "Internship", "Freelancing", "Remote Work", "Gig Economy",
  "Digital Nomad", "Ecology", "Wildlife", "Forestry", "Meteorology", "Oceanography", "Marine Biology",
  "Neuroscience", "Genetics", "Biotechnology", "Nanotechnology", "Material Science", "Forensics",
  "Linguistics", "Sociology", "Anthropology", "Ethics", "Logic", "Theology", "Paranormal", "Occult",
  "Urban Legends", "Conspiracy Theories", "Esoteric", "Astrology", "Zodiac", "Tarot", "Magic",
  "Handmade", "Knitting", "Crochet", "Sewing", "Woodworking", "Metalworking", "Pottery", "Ceramics",
  "Jewelry Making", "Scrapbooking", "Calligraphy", "Collecting", "Antiques", "Wine", "Beer", "Spirit",
  "Cocktails", "Vegan", "Vegetarian", "Keto", "Paleo", "Gluten Free", "Organic", "Gardening",
  "Farming", "Permaculture", "Hunting", "Fishing", "Camping", "Backpacking", "Solo Travel",
  "Luxury Travel", "Budget Travel", "Van Life", "Cruise", "National Parks", "Hiking", "Climbing",
  "Cycling", "Surfing", "Skating", "Extreme Sports", "Martial Arts", "Boxing", "MMA", "Wrestling",
  "Golf", "Cricket", "Rugby", "Baseball", "Hockey", "Athletics", "Gymnastics", "Dancing", "Theater",
  "Broadcasting", "Podcasting", "Streaming", "Content Creation", "Influencer", "Blogging",
  "Vlogging", "Self Defense", "Military Tech", "Espionage", "Cyber Warfare", "Historical Fiction",
  "Science Fiction", "High Fantasy", "Cyberpunk", "Steampunk", "Dystopian", "Utopian", "Satire",
  "Comedy", "Drama", "Action", "Adventure", "Western", "Musical", "Opera", "Classical Music",
  "Jazz", "Rock", "Pop", "Hip Hop", "Electronic Music", "Metal", "Country Music", "Reggae",
  "World Music", "Art History", "Modern Art", "Contemporary Art", "Street Art", "Graffiti",
  "Digital Art", "Crypto Art", "NFT", "Virtual Reality", "Augmented Reality", "Metaverse",
  "JavaScript", "Python", "Java", "C++", "Ruby", "Rust", "Swift", "Kotlin", "TypeScript",
  "Go", "PHP", "SQL", "HTML5", "CSS3", "React", "Vue.js", "Angular", "Node.js", "Next.js",
  "Italian Cuisine", "Japanese Cuisine", "French Cuisine", "Mexican Cuisine", "Chinese Cuisine",
  "Indian Cuisine", "Indonesian Cuisine", "Thai Cuisine", "Korean Cuisine", "Turkish Cuisine",
  "Mediterranean Diet", "Street Food", "Fine Dining", "Street Food", "Mixology", "Sommelier",
  "Guitar", "Piano", "Violin", "Drums", "Saxophone", "Ukulele", "Synthesizer", "DJing", "Orchestra",
  "Badminton", "Swimming", "Volleyball", "Table Tennis", "Archery", "Fencing", "Bowling",
  "Billards", "Darts", "Equestrian", "Sailing", "Rowing", "Powerlifting", "Bodybuilding",
  "Shonen", "Shojo", "Seinen", "Josei", "Isekai", "Mecha", "Slice of Life", "Moe", "Ecchi",
  "Harem", "Yaoi", "Yuri", "Hentai", "Doujinshi", "Gore", "Psychological Anime", "Magical Girl",
  "ASMR", "Mukbang", "Unboxing", "Reaction Videos", "Speedrunning", "Vtubing", "VTuber",
  "Web3", "Smart Contracts", "DeFi", "DAOs", "AI Art", "Prompt Engineering", "Stable Diffusion",
  "Midjourney", "ChatGPT", "Generative AI", "LLMs", "Neural Networks", "Deep Learning",
  "AGI", "Superintelligence", "AI Ethics", "AI Safety", "Explainable AI (XAI)", "Computer Vision",
  "NLP", "Speech Recognition", "Reinforcement Learning", "Transfer Learning", "Federated Learning",
  "Edge AI", "GANs", "Transformers", "Diffusion Models", "Multimodal AI", "AI Agents",
  "Autonomous Systems", "AI Regulation", "AI Alignment", "AI in Healthcare", "AI in Finance",
  "Urban Gardening", "Aquaponics", "Hydroponics", "Vertical Farming", "Beekeeping", "Mycology",
  "Foraging", "Mushrooms", "Wild Edibles", "Canning", "Pickling", "Fermentation", "Kombucha",
  "Biohacking", "Nootropics", "Transhumanism", "Life Extension", "Cryonics", "Stoicism",
  "Epicureanism", "Existentialism", "Nihilism", "Zen", "Buddhism", "Hinduism", "Taoism",
  "Ancient Rome", "Ancient Greece", "Ancient Egypt", "Ottoman Empire", "British Empire",
  "Victorian Era", "Roaring 20s", "The 60s", "The 80s", "The 90s", "Y2K Aesthetic",
  "Cottagecore", "Dark Academia", "Light Academia", "Grandmacore", "Gorpcore", "Vaporwave",
  "Dreamcore", "Weirdcore", "Liminal Spaces", "Backrooms", "Analog Horror", "Creepypasta",
  "Lockpicking", "Pen Spinning", "Speedcubing", "Cardistry", "Magic Tricks", "Coin Magic",
  "Origami", "Papercraft", "3D Printing", "Laser Cutting", "CNC Machining", "Arduino",
  "Raspberry Pi", "Home Lab", "Self Hosting", "Home Automation", "Smart Home", "Solar Punk",
  "Cyberpunk 2077", "The Witcher", "Elden Ring", "Dark Souls", "Minecraft", "Roblox",
  "Genshin Impact", "League of Legends", "Dota 2", "Valorant", "Counter-Strike", "Fortnite",
  "Apex Legends", "Call of Duty", "Overwatch", "Destiny 2", "Warframe", "Final Fantasy",
  "The Last of Us", "God of War", "Horizon Zero Dawn", "Red Dead Redemption", "Grand Theft Auto",
  "Animal Crossing", "The Sims", "Stardew Valley", "Terraria", "Hollow Knight", "Celeste",
  "Hades", "Undertale", "Deltarune", "FNAF", "SCP Foundation", "Backrooms Lore",
  "Doom", "Quake", "Half-Life", "StarCraft", "Diablo", "Resident Evil", "Silent Hill", "Tomb Raider",
  "Metal Gear Solid", "Ocarina of Time", "GoldenEye 007", "Super Mario 64", "Chrono Trigger",
  "Street Fighter", "Mortal Kombat", "Sonic the Hedgehog", "GTA: San Andreas", "Halo",
  "World of Warcraft", "Portal", "BioShock", "Call of Duty 4", "Assassin's Creed", "Mass Effect",
  "Fallout 3", "Shadow of the Colossus", "Skyrim", "Bloodborne", "Breath of the Wild", "Sekiro",
  "Baldur's Gate 3", "Starfield", "Alan Wake 2", "Helldivers 2", "Black Myth: Wukong", "GTA VI",
  "Monster Hunter Wilds", "Metroid Prime 4", "Death Stranding 2", "Marvel's Wolverine", "Hades II",
  "Platonism", "Aristotelianism", "Rationalism", "Empiricism", "Kantianism", "Hegelianism",
  "Marxism", "Phenomenology", "Hermeneutics", "Structuralism", "Post-structuralism",
  "Deconstruction", "Postmodernism", "Feminist Philosophy", "Analytic Philosophy",
  "Continental Philosophy", "Pragmatism", "Humanism", "Secularism", "Cynicism", "Skepticism",
  "Neoplatonism", "Thomism", "Objectivism", "Absurdism", "Hedonism", "Utilitarianism",
  "Virtue Ethics", "Meta-ethics", "Applied Ethics", "Bioethics", "Social Philosophy",
  "Political Philosophy", "Philosophy of Mind", "Philosophy of Language", "Philosophy of Science",
  "Epistemology", "Metaphysics", "Aesthetics", "Social Psychology", "Ethnography", "Demography",
  "Social Stratification", "Social Justice", "Social Equality", "Social Inequality", "Social Change",
  "Social Movements", "Feminism", "LGBTQ+ Rights", "Civil Rights", "Poverty", "Wealth Gap",
  "Globalism", "Nationalism", "Multiculturalism", "Identity Politics", "Migration", "Refugees",
  "Urbanization", "Digital Sociology", "Cyber-culture", "Community Development", "Public Health",
  "Environmental Sociology", "Criminal Justice", "Criminology", "Political Science", "Geopolitics",
  "International Relations", "Public Policy", "Governance", "Diplomacy", "Political Theory",
  "Comparative Politics", "Democracy", "Authoritarianism", "Totalitarianism", "Fascism",
  "Anarchism", "Liberalism", "Conservatism", "Libertarianism", "Populism", "Election Analysis",
  "Voting Rights", "Lobbying", "Political Corruption", "Public Administration", "International Law",
  "War & Conflict", "Peace Studies", "Terrorism", "National Security", "Foreign Policy",
  "Political Campaigns", "Grassroots Organizing", "Brainrot", "Skibidi", "Skibidi Toilet", "Ohio",
  "Rizz", "Gyatt", "Sigma", "Mewing", "Fanum Tax", "Grimace Shake", "Glazing", "Looksmaxxing",
  "Mogging", "Delulu", "Cap", "No Cap", "Bussin", "Sheesh", "Sus", "POG", "Ratio", "L", "W",
  "Stan", "Slay", "Periodt", "Ate", "Left No Crumbs", "Gucci", "Mid", "NPC", "Main Character",
  "Simp", "Cringe", "Based", "Redpill", "Bluepill", "Blackpill", "Gigachad", "Chad", "Wojak",
  "Pepe", "Doomer", "Zoomer", "Boomer", "Gen Alpha", "Gen Z", "Gen Beta", "Alpha Grindset",
  "Sigma Grindset", "Edging", "Gooning", "Shitposting", "Dank Memes", "Surreal Memes",
  "Deep Fried Memes", "Irony", "Post-Irony", "Meta-Irony", "TikTok Trends", "Brain Nourishment",
  "Brainrot Lore", "Taxation without Representation (Meme)", "Negative Aura", "Positive Aura",
  "Political Campaigns", "Grassroots Organizing", "Brainrot", "Skibidi", "Skibidi Toilet", "Ohio",
  "Rizz", "Gyatt", "Sigma", "Mewing", "Fanum Tax", "Grimace Shake", "Glazing", "Looksmaxxing",
  "Mogging", "Delulu", "Cap", "No Cap", "Bussin", "Sheesh", "Sus", "POG", "Ratio", "L", "W",
  "Stan", "Slay", "Periodt", "Ate", "Left No Crumbs", "Gucci", "Mid", "NPC", "Main Character",
  "Simp", "Cringe", "Based", "Redpill", "Bluepill", "Blackpill", "Gigachad", "Chad", "Wojak",
  "Pepe", "Doomer", "Zoomer", "Boomer", "Gen Alpha", "Gen Z", "Gen Beta", "Alpha Grindset",
  "Sigma Grindset", "Edging", "Gooning", "Shitposting", "Dank Memes", "Surreal Memes",
  "Deep Fried Memes", "Irony", "Post-Irony", "Meta-Irony", "TikTok Trends", "Brain Nourishment",
  "Brainrot Lore", "Taxation without Representation (Meme)", "Negative Aura", "Positive Aura",
  "Aura Points", "Baby Gronk", "Livvy Dunne", "Rizz King",
  "Lost Media", "Digital Minimalism", "Internet Mysteries", "Analog Photography", "Retro Tech",
  "Cyberpunk Culture", "Obscure Websites", "Deep Web Culture", "Digital Privacy", "Indie Hacking",
  "Terminal Customization", "Keyboard Enthusiast", "Digital Archaeology", "Tech Philosophy",
  "Underground Music", "Urban Exploration", "Psychology Tricks", "Weird Science", "Sleep Optimization",
  "Human Behavior", "Dark Academia", "Future Society", "Solarpunk", "Liminal Space", "Backrooms Culture",
  "Nostalgia Core", "Online Rabbit Holes", "Micro Blogging", "Internet Drama Analysis", "AI Ethics",
  "Digital Burnout", "Study Psychology", "Brain Hacks", "Conspiracy Analysis", "Digital Lifestyle",
  "Hidden Linux Tools", "Open Source Stories", "Vintage Games", "Mythology", "Forgotten History",
  "Digital Nomad", "Experimental Design", "Cult Movies", "Interactive Fiction", "Virtual Identity",
  "Techwear", "Sound Design", "Data Visualization", "Philosophy of Technology", "Internet Subcultures",
  "Underrated Apps", "Archive Culture", "Modern Loneliness", "Future Jobs", "Human vs AI",
  "Mind Mapping", "Weird Facts", "Minimal Setup", "Second Brain", "Cyber Aesthetics", "Productivity Experiments",
  "Skincare", "Makeup", "Haircare", "Fragrance", "Men's Grooming", "Barber Culture", "Fashion Style", "Skin Health", "Beauty Tips", "Self Care Routine",
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
  "General", "Announcement", "Update", "Meta", "FAQ", "Help", "Personal", "Diary", "Journal",
  "Memoir", "Storytime", "Curhat", "Opini", "Hiburan", "Random", "Thoughts", "Reflection",
  "Review", "Recommendation", "Comparison", "Best Of", "Gift Guide", "Shopping", "Deals",
  "Q&A", "Poll", "Discussion", "Collaboration", "Challenge", "Contest", "Milestone",
  "Chill", "Hype", "Nostalgic", "Futuristic", "Happy", "Sad", "Inspirational", "Motivational",
  "Tutorial", "How-to", "Tips & Tricks", "Life Hacks", "Life Lessons", "Uncategorized", "Irfan Syarifudin", "FanBlog"
];

function populateCategorySelect(selectId, selectedValue = "") {
  const select = document.getElementById(selectId);
  if (!select) return;

  const uniqueCategories = [...new Set(BLOG_CATEGORIES)].sort();

  // First, populate the original select with actual options
  // so that .value = "X" works correctly later.
  select.innerHTML = '<option value="" disabled selected>Pilih Kategori...</option>';
  uniqueCategories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    if (cat === selectedValue) opt.selected = true;
    select.appendChild(opt);
  });

  initSearchableSelect(select, uniqueCategories, selectedValue);
}

function initSearchableSelect(originalSelect, categories, selectedValue) {
  originalSelect.style.display = 'none';

  const existingContainer = originalSelect.parentNode.querySelector('.search-select-container');
  if (existingContainer) existingContainer.remove();

  const container = document.createElement('div');
  container.className = 'search-select-container';
  originalSelect.parentNode.insertBefore(container, originalSelect);

  const trigger = document.createElement('div');
  trigger.className = 'form-select search-select-trigger';
  trigger.textContent = selectedValue || "Pilih Kategori...";
  trigger.style.cursor = 'pointer';
  container.appendChild(trigger);

  const menu = document.createElement('div');
  menu.className = 'search-select-menu';
  container.appendChild(menu);

  const searchBox = document.createElement('div');
  searchBox.className = 'search-select-search-box';
  searchBox.innerHTML = `<input type="text" class="search-select-input-field" placeholder="Cari kategori...">`;
  menu.appendChild(searchBox);

  const searchInput = searchBox.querySelector('input');
  const optionsList = document.createElement('div');
  menu.appendChild(optionsList);

  function renderOptions(filter = "") {
    optionsList.innerHTML = "";
    const filtered = categories.filter(c => c.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) {
      optionsList.innerHTML = `<div class="p-3 text-muted">Kategori tidak ditemukan</div>`;
      return;
    }

    filtered.forEach(cat => {
      const opt = document.createElement('div');
      opt.className = `search-select-option ${cat === originalSelect.value ? 'selected' : ''}`;
      opt.textContent = cat;
      opt.onclick = () => {
        originalSelect.value = cat;
        trigger.textContent = cat;
        menu.classList.remove('show');
        originalSelect.dispatchEvent(new Event('change'));
      };
      optionsList.appendChild(opt);
    });
  }

  renderOptions();

  trigger.onclick = (e) => {
    e.stopPropagation();
    const isShowing = menu.classList.contains('show');
    document.querySelectorAll('.search-select-menu').forEach(m => m.classList.remove('show'));
    if (!isShowing) {
      menu.classList.add('show');
      searchInput.value = "";
      renderOptions();
      searchInput.focus();
    }
  };

  searchInput.onclick = (e) => e.stopPropagation();
  searchInput.oninput = (e) => renderOptions(e.target.value);

  document.addEventListener('click', () => menu.classList.remove('show'));
}

function renderTrendingCategories(containerId, limit = 10) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const displayCats = [...BLOG_CATEGORIES]
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);

  container.innerHTML = displayCats.map(cat => `
    <a href="/index.html?category=${encodeURIComponent(cat)}" class="badge bg-light text-dark border px-3 py-2 text-decoration-none hover-accent">
      ${cat}
    </a>
  `).join('');
}
