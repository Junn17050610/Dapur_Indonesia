/* ═══════════════════════════════════════════════
   Dapur Indonesia — shared.js
   Shared data, utilities, localStorage helpers
═══════════════════════════════════════════════ */

/* ══════════════════════════════
   SEED DATA
══════════════════════════════ */
const SEED_RECIPES = [
  {
    id: 1,
    name: "Rendang Padang",
    category: "daging",
    emoji: "🥩",
    bgColor: "#7A3B1E",
    bgLight: "#F5E6DC",
    time: 180,
    serving: "6 orang",
    difficulty: "Sulit",
    rating: 4.9,
    ratingCount: 248,
    author: "Chef Minang",
    authorAvatar: "👨‍🍳",
    desc: "Rendang adalah masakan daging khas Minangkabau yang dimasak perlahan dengan santan dan rempah pilihan hingga mengering. Dinobatkan sebagai salah satu makanan terenak di dunia oleh CNN.",
    ingredients: [
      { name: "Daging sapi", amount: "1 kg" },
      { name: "Santan kelapa kental", amount: "2 liter" },
      { name: "Serai, memarkan", amount: "4 batang" },
      { name: "Daun jeruk", amount: "8 lembar" },
      { name: "Daun kunyit", amount: "2 lembar" },
      { name: "Cabe merah keriting", amount: "15 buah" },
      { name: "Cabe merah besar", amount: "5 buah" },
      { name: "Bawang merah", amount: "12 siung" },
      { name: "Bawang putih", amount: "6 siung" },
      { name: "Jahe", amount: "3 cm" },
      { name: "Kunyit", amount: "2 cm" },
      { name: "Lengkuas, memarkan", amount: "3 cm" },
      { name: "Garam", amount: "secukupnya" }
    ],
    steps: [
      "Haluskan bumbu: cabe merah, bawang merah, bawang putih, jahe, dan kunyit menggunakan blender atau ulekan tradisional.",
      "Potong daging sapi menjadi potongan besar (±5x5 cm). Cuci bersih lalu tiriskan.",
      "Masukkan daging, bumbu halus, serai, daun jeruk, daun kunyit, dan lengkuas ke dalam wajan besar.",
      "Tuangkan santan kelapa kental, aduk rata. Masak dengan api sedang sambil sesekali diaduk agar tidak gosong.",
      "Setelah santan mendidih dan mulai menyusut, kecilkan api menjadi api kecil.",
      "Masak terus selama 2–3 jam sambil sesekali diaduk. Santan akan mengering dan daging akan berwarna coklat.",
      "Teruskan memasak hingga bumbu benar-benar kering dan melapisi daging berwarna coklat kehitaman.",
      "Angkat dan sajikan dengan nasi putih panas. Lebih enak disimpan dulu sebelum disajikan."
    ],
    tips: "Kunci rendang yang sempurna adalah kesabaran. Api kecil dan waktu memasak yang panjang membuat bumbu meresap sempurna ke dalam daging. Rendang yang didiamkan semalam bahkan lebih enak rasanya.",
    reviews: [
      { name: "Siti Rahayu", avatar: "👩", rating: 5, comment: "Resep ini persis seperti buatan ibu saya di kampung! Teksturnya sempurna dan rasanya otentik sekali.", date: "12 Mei 2025" },
      { name: "Budi Santoso", avatar: "👨", rating: 5, comment: "Sudah 3 kali buat, selalu berhasil. Kuncinya memang di kesabaran memasak. Terima kasih resepnya!", date: "3 Apr 2025" },
      { name: "Dewi Permata", avatar: "👩‍🦱", rating: 4, comment: "Lezat! Saya kurangi cabenya karena anak-anak. Tetap enak dan harum.", date: "20 Mar 2025" }
    ],
    isMine: false,
    isFav: false,
    createdAt: "2024-01-01"
  },
  {
    id: 2,
    name: "Nasi Goreng Spesial",
    category: "ayam",
    emoji: "🍳",
    bgColor: "#C8621A",
    bgLight: "#FEF0E3",
    time: 20,
    serving: "2 orang",
    difficulty: "Mudah",
    rating: 4.7,
    ratingCount: 512,
    author: "Chef Jakarta",
    authorAvatar: "🧑‍🍳",
    desc: "Nasi goreng ikonik Indonesia yang dibuat dari nasi dengan bumbu kecap, telur, dan ayam. Hidangan sarapan favorit yang bisa disajikan dalam 20 menit.",
    ingredients: [
      { name: "Nasi putih (sisa kemarin)", amount: "2 porsi" },
      { name: "Ayam fillet, potong dadu", amount: "150 gram" },
      { name: "Telur", amount: "2 butir" },
      { name: "Bawang putih", amount: "4 siung" },
      { name: "Bawang merah", amount: "5 siung" },
      { name: "Kecap manis", amount: "2 sdm" },
      { name: "Kecap asin", amount: "1 sdm" },
      { name: "Cabe rawit (opsional)", amount: "3 buah" },
      { name: "Minyak goreng", amount: "3 sdm" },
      { name: "Garam & merica", amount: "secukupnya" },
      { name: "Bawang goreng", amount: "untuk taburan" }
    ],
    steps: [
      "Iris tipis bawang merah, bawang putih, dan cabe rawit. Sisihkan.",
      "Panaskan minyak di wajan dengan api sedang-tinggi. Tumis bawang merah dan bawang putih hingga harum dan keemasan (±2 menit).",
      "Masukkan cabe rawit dan potongan ayam fillet. Masak hingga ayam berubah warna dan matang (±3 menit).",
      "Sisihkan bahan ke pinggir wajan. Di ruang kosong, masukkan telur dan orak-arik hingga setengah matang.",
      "Masukkan nasi putih. Aduk rata dengan semua bahan menggunakan spatula, tekan-tekan agar nasi tidak menggumpal.",
      "Tuangkan kecap manis dan kecap asin. Aduk rata. Tambahkan garam dan merica, koreksi rasa.",
      "Masak dengan api besar 1–2 menit agar nasi sedikit kering dan harum.",
      "Sajikan panas dengan taburan bawang goreng, kerupuk, acar timun, dan irisan tomat."
    ],
    tips: "Gunakan nasi sisa yang sudah dingin atau disimpan semalam di kulkas. Nasi dingin lebih kering sehingga menghasilkan nasi goreng yang tidak lembek. Gunakan api besar agar cepat dan harum (wok hei).",
    reviews: [
      { name: "Rina Dewi", avatar: "👩", rating: 5, comment: "Simple tapi lezat! Jadi menu sarapan favorit keluarga. Tambahkan saus sambal biar makin maknyus.", date: "20 Jun 2025" },
      { name: "Agus Pratama", avatar: "👨‍🦰", rating: 4, comment: "Enak! Saran: tambahkan sedikit saus tiram untuk rasa yang lebih kaya dan umami.", date: "15 Jun 2025" }
    ],
    isMine: false,
    isFav: false,
    createdAt: "2024-01-05"
  },
  {
    id: 3,
    name: "Soto Ayam Lamongan",
    category: "ayam",
    emoji: "🍲",
    bgColor: "#B8860B",
    bgLight: "#FEFAE3",
    time: 75,
    serving: "5 orang",
    difficulty: "Sedang",
    rating: 4.8,
    ratingCount: 189,
    author: "Chef Lamongan",
    authorAvatar: "👩‍🍳",
    desc: "Soto ayam khas Lamongan dengan kuah bening kekuningan yang kaya rempah. Keistimewaannya ada pada koya (bubuk kerupuk udang) yang menjadi taburan khasnya.",
    ingredients: [
      { name: "Ayam kampung", amount: "1 ekor" },
      { name: "Telur rebus", amount: "4 butir" },
      { name: "Tauge", amount: "100 gram" },
      { name: "Soun/bihun", amount: "50 gram" },
      { name: "Bawang putih", amount: "8 siung" },
      { name: "Bawang merah", amount: "10 siung" },
      { name: "Kunyit", amount: "3 cm" },
      { name: "Jahe", amount: "2 cm" },
      { name: "Kemiri", amount: "4 butir" },
      { name: "Serai", amount: "2 batang" },
      { name: "Daun jeruk", amount: "5 lembar" },
      { name: "Air", amount: "2,5 liter" },
      { name: "Minyak goreng", amount: "3 sdm" },
      { name: "Garam & merica", amount: "secukupnya" }
    ],
    steps: [
      "Rebus ayam kampung hingga mendidih. Buang air pertama, lalu rebus kembali dengan 2,5 liter air bersih.",
      "Haluskan bumbu: bawang putih, bawang merah, kunyit, jahe, dan kemiri.",
      "Tumis bumbu halus dengan sedikit minyak hingga matang dan harum (±5 menit). Masukkan serai dan daun jeruk.",
      "Pindahkan bumbu tumis ke dalam panci rebusan ayam. Aduk rata.",
      "Masak dengan api sedang selama 45 menit hingga ayam empuk. Koreksi rasa dengan garam dan merica.",
      "Angkat ayam, suwir-suwir dagingnya. Saring kaldu hingga bening.",
      "Didihkan kembali kaldu, masukkan suwiran ayam.",
      "Sajikan dalam mangkuk: isi dengan soun, tauge rebus, telur rebus iris, dan suwiran ayam. Tuang kaldu panas. Taburi koya dan bawang goreng."
    ],
    tips: "Koya adalah rahasia cita rasa khas Lamongan: haluskan kerupuk udang bersama bawang putih goreng. Taburi di atas soto sebelum disajikan untuk rasa gurih yang khas dan berbeda.",
    reviews: [
      { name: "Dewi Kusuma", avatar: "👩‍🦱", rating: 5, comment: "Koyanya bikin beda banget! Rasanya persis soto Lamongan asli. Akan buat lagi.", date: "5 Jul 2025" }
    ],
    isMine: false,
    isFav: false,
    createdAt: "2024-01-10"
  },
  {
    id: 4,
    name: "Gado-Gado Jakarta",
    category: "sayur",
    emoji: "🥗",
    bgColor: "#2A6B5E",
    bgLight: "#E3F5F2",
    time: 35,
    serving: "4 orang",
    difficulty: "Mudah",
    rating: 4.6,
    ratingCount: 143,
    author: "Chef Betawi",
    authorAvatar: "👵",
    desc: "Salad khas Indonesia dengan sayuran rebus segar, tahu, tempe, dan telur yang disiram saus kacang gurih-manis. Makan siang sehat yang mengenyangkan.",
    ingredients: [
      { name: "Kangkung", amount: "200 gram" },
      { name: "Kacang panjang", amount: "150 gram" },
      { name: "Tauge", amount: "100 gram" },
      { name: "Kentang", amount: "3 buah sedang" },
      { name: "Tahu putih, goreng", amount: "4 potong" },
      { name: "Tempe, goreng", amount: "200 gram" },
      { name: "Telur rebus", amount: "4 butir" },
      { name: "Kacang tanah goreng", amount: "200 gram" },
      { name: "Bawang putih", amount: "3 siung" },
      { name: "Cabe merah", amount: "5 buah" },
      { name: "Gula merah", amount: "2 sdm" },
      { name: "Kecap manis", amount: "2 sdm" },
      { name: "Air matang", amount: "150 ml" },
      { name: "Garam & air jeruk nipis", amount: "secukupnya" }
    ],
    steps: [
      "Rebus kangkung, kacang panjang, dan tauge secara terpisah. Jangan terlalu matang, angkat saat masih hijau segar.",
      "Rebus kentang hingga matang (tidak terlalu lembek). Kupas dan potong.",
      "Goreng tahu dan tempe hingga keemasan dan renyah di luar.",
      "Buat saus kacang: haluskan kacang tanah goreng, bawang putih, dan cabe merah.",
      "Masak bumbu halus dengan sedikit minyak, tambahkan gula merah, kecap manis, dan air matang. Aduk hingga rata dan mengental.",
      "Tambahkan garam dan perasan jeruk nipis. Koreksi rasa — saus harus gurih, manis, dan sedikit asam.",
      "Tata semua bahan di piring saji: sayuran, tahu, tempe, kentang, dan telur rebus.",
      "Siram dengan saus kacang hangat. Sajikan dengan kerupuk dan emping."
    ],
    tips: "Saus kacang paling enak menggunakan kacang tanah yang baru digoreng, masih hangat. Blender saat masih panas untuk menghasilkan saus yang lebih halus dan creamy.",
    reviews: [
      { name: "Maya Sari", avatar: "👩", rating: 5, comment: "Saus kacangnya pas banget rasanya! Tidak terlalu kental dan cita rasanya seimbang.", date: "18 Jun 2025" }
    ],
    isMine: false,
    isFav: false,
    createdAt: "2024-02-01"
  },
  {
    id: 5,
    name: "Bakso Sapi Kenyal",
    category: "daging",
    emoji: "🍜",
    bgColor: "#5C3D2E",
    bgLight: "#F0E8E3",
    time: 90,
    serving: "8 orang",
    difficulty: "Sedang",
    rating: 4.7,
    ratingCount: 97,
    author: "Chef Solo",
    authorAvatar: "👴",
    desc: "Bakso sapi kenyal sempurna dalam kaldu bening yang gurih, disajikan dengan mi dan tahu. Resep autentik dengan teknik profesional yang bisa dibuat di rumah.",
    ingredients: [
      { name: "Daging sapi giling", amount: "500 gram" },
      { name: "Tepung tapioka", amount: "100 gram" },
      { name: "Bawang putih", amount: "6 siung" },
      { name: "Es batu halus", amount: "100 gram" },
      { name: "Mi kuning", amount: "400 gram" },
      { name: "Tahu putih", amount: "4 potong" },
      { name: "Tulang sapi", amount: "500 gram" },
      { name: "Daun bawang, iris", amount: "3 batang" },
      { name: "Seledri, iris", amount: "2 batang" },
      { name: "Garam", amount: "2 sdt" },
      { name: "Merica bubuk", amount: "1 sdt" },
      { name: "Bawang goreng", amount: "untuk taburan" }
    ],
    steps: [
      "Rebus tulang sapi dengan 2 liter air, sedikit garam, dan daun bawang. Masak minimal 1 jam untuk kaldu yang gurih.",
      "Haluskan bawang putih, campurkan ke daging sapi giling bersama tepung tapioka, es batu, garam, dan merica.",
      "Uleni adonan bakso dengan tangan hingga kalis dan tercampur merata. Pastikan adonan tetap dingin.",
      "Test kekenyalan: ambil sedikit adonan, rebus sebentar. Jika kenyal sesuai selera, lanjutkan.",
      "Bentuk adonan menjadi bola-bola (gunakan sendok atau tangan basah). Masukkan langsung ke air panas (bukan mendidih).",
      "Rebus bakso hingga mengapung ke permukaan, tanda sudah matang. Angkat dan tiriskan.",
      "Saring kaldu tulang hingga bening. Didihkan kembali, masukkan bakso. Koreksi rasa.",
      "Sajikan bakso dalam mangkuk berisi mi dan tahu goreng. Tuang kaldu panas. Taburi bawang goreng dan seledri."
    ],
    tips: "Rahasia bakso kenyal: gunakan es batu saat menguleni dan pastikan suhu adonan tetap dingin selama proses. Ini mencegah protein daging rusak sehingga bakso menjadi kenyal.",
    reviews: [
      { name: "Joko Purnomo", avatar: "👨", rating: 5, comment: "Resep terbaik! Kenyalnya pas, tidak terlalu keras. Kuahnya juga gurih banget.", date: "2 Jul 2025" }
    ],
    isMine: false,
    isFav: false,
    createdAt: "2024-02-15"
  },
  {
    id: 6,
    name: "Udang Saus Tiram",
    category: "seafood",
    emoji: "🦐",
    bgColor: "#C0392B",
    bgLight: "#FDEAEA",
    time: 25,
    serving: "3 orang",
    difficulty: "Mudah",
    rating: 4.5,
    ratingCount: 76,
    author: "Chef Coastal",
    authorAvatar: "👩‍🍳",
    desc: "Udang segar yang ditumis cepat dengan saus tiram kental, bawang putih, dan jahe. Hidangan laut yang kaya protein, lezat, dan bisa tersaji dalam 25 menit.",
    ingredients: [
      { name: "Udang segar, bersihkan", amount: "500 gram" },
      { name: "Saus tiram", amount: "3 sdm" },
      { name: "Bawang putih", amount: "5 siung" },
      { name: "Jahe segar, parut", amount: "1 ruas jari" },
      { name: "Daun bawang, iris serong", amount: "2 batang" },
      { name: "Kecap asin", amount: "1 sdm" },
      { name: "Gula pasir", amount: "1 sdt" },
      { name: "Minyak wijen", amount: "1 sdt" },
      { name: "Minyak goreng", amount: "2 sdm" },
      { name: "Air", amount: "3 sdm" }
    ],
    steps: [
      "Bersihkan udang: buang kepala (opsional), kulit, dan kotoran hitam di punggungnya. Cuci bersih dan tiriskan.",
      "Cincang halus bawang putih. Parut jahe. Siapkan semua bahan sebelum mulai memasak.",
      "Panaskan minyak di wajan dengan api sedang-tinggi. Tumis bawang putih dan jahe parut hingga harum dan sedikit keemasan (±1 menit).",
      "Masukkan udang, masak sambil diaduk hingga berubah warna menjadi merah muda (±2–3 menit). Jangan terlalu lama.",
      "Tambahkan saus tiram, kecap asin, gula, dan 3 sdm air. Aduk rata agar saus melapisi udang.",
      "Masak 1–2 menit lagi hingga saus sedikit mengental. Koreksi rasa.",
      "Matikan api. Teteskan minyak wijen dan taburi irisan daun bawang. Sajikan segera."
    ],
    tips: "Jangan overcook udang! Udang cukup 2–3 menit di atas api tinggi. Tanda matang: warna berubah merah muda dan udang melengkung membentuk huruf C. Jika sudah melingkar penuh (O), sudah terlalu matang dan akan keras.",
    reviews: [
      { name: "Anita Putri", avatar: "👩‍🦰", rating: 4, comment: "Cepat, mudah, dan enak! Cocok banget untuk makan malam hari kerja. Saus tiramnya meresap sempurna.", date: "8 Jun 2025" }
    ],
    isMine: false,
    isFav: false,
    createdAt: "2024-03-01"
  },
  {
    id: 7,
    name: "Martabak Manis Coklat Keju",
    category: "snack",
    emoji: "🍫",
    bgColor: "#6D4C41",
    bgLight: "#F5EDEA",
    time: 50,
    serving: "8 potong",
    difficulty: "Sedang",
    rating: 4.8,
    ratingCount: 204,
    author: "Chef Bandung",
    authorAvatar: "👩",
    desc: "Martabak manis tebal khas Indonesia dengan tekstur lembut berongga di dalam, diisi coklat meises dan keju cheddar leleh. Camilan favorit semua kalangan.",
    ingredients: [
      { name: "Tepung terigu protein sedang", amount: "250 gram" },
      { name: "Gula pasir", amount: "50 gram" },
      { name: "Telur", amount: "2 butir" },
      { name: "Ragi instan", amount: "1 sdt" },
      { name: "Baking soda", amount: "½ sdt" },
      { name: "Air hangat (±40°C)", amount: "300 ml" },
      { name: "Garam", amount: "¼ sdt" },
      { name: "Coklat meises", amount: "100 gram" },
      { name: "Keju cheddar parut", amount: "100 gram" },
      { name: "Margarin/butter", amount: "50 gram" }
    ],
    steps: [
      "Campurkan tepung, gula, ragi, dan garam dalam mangkuk besar. Buat lubang di tengah.",
      "Masukkan telur ke lubang, lalu tuang air hangat sedikit demi sedikit sambil diaduk rata hingga adonan halus tanpa gumpalan.",
      "Tambahkan baking soda, aduk rata. Diamkan adonan 30–45 menit hingga mengembang dan permukaan berbuih.",
      "Panaskan wajan khusus martabak atau wajan tebal anti lengket dengan api sedang-kecil. Olesi sedikit margarin.",
      "Tuang adonan, isi wajan. Tutup dan masak hingga permukaan berbusa, berongga, dan tidak terlihat adonan cair.",
      "Taburkan topping merata di atas adonan yang masih agak basah di pinggirnya. Tutup kembali 1–2 menit.",
      "Angkat martabak. Olesi permukaan dengan margarin leleh. Taburi keju parut tambahan jika suka.",
      "Lipat menjadi dua, tekan perlahan, potong menjadi 8 bagian. Sajikan hangat."
    ],
    tips: "Fermentasi adonan adalah kunci! Ragi aktif dan adonan benar-benar mengembang membuat martabak berongga sempurna. Gunakan api kecil-sedang agar matang merata dan tidak gosong di bawah.",
    reviews: [
      { name: "Hendra Wijaya", avatar: "👨", rating: 5, comment: "Teksturnya lembut dan berongga sempurna! Persis martabak manis yang dijual di pinggir jalan.", date: "25 Mei 2025" }
    ],
    isMine: false,
    isFav: false,
    createdAt: "2024-03-10"
  },
  {
    id: 8,
    name: "Es Teh Tarik Susu",
    category: "minuman",
    emoji: "🧋",
    bgColor: "#795548",
    bgLight: "#F5EDE9",
    time: 10,
    serving: "2 gelas",
    difficulty: "Mudah",
    rating: 4.4,
    ratingCount: 88,
    author: "Chef Kopi",
    authorAvatar: "🧑",
    desc: "Teh hitam pekat yang ditarik agar berbusa creamy, lalu dicampur susu kental manis. Minuman warung legendaris yang segar dan menyegarkan.",
    ingredients: [
      { name: "Teh celup hitam (teh kuat)", amount: "4 kantong" },
      { name: "Air mendidih", amount: "400 ml" },
      { name: "Susu kental manis putih", amount: "6 sdm" },
      { name: "Susu evaporasi", amount: "100 ml" },
      { name: "Gula pasir", amount: "sesuai selera" },
      { name: "Es batu", amount: "secukupnya" }
    ],
    steps: [
      "Seduh 4 kantong teh dalam 400 ml air mendidih. Biarkan 5 menit hingga teh benar-benar pekat.",
      "Peras kantong teh untuk mendapatkan rasa maksimal. Tambahkan gula, aduk hingga larut.",
      "Dalam gelas atau pitcher, campurkan susu kental manis dan susu evaporasi, aduk rata.",
      "Tuangkan teh panas perlahan ke dalam campuran susu sambil diaduk.",
      "Untuk teknik 'tarik': tuang cairan dari ketinggian 30–40 cm ke gelas lain, bolak-balik 3–5 kali untuk menghasilkan busa.",
      "Masukkan es batu ke gelas saji. Tuang teh susu di atasnya.",
      "Sajikan segera saat masih segar dengan lapisan busa di atas."
    ],
    tips: "Gunakan teh hitam berkualitas seperti teh Walini, Twinnings English Breakfast, atau teh Assam untuk rasa yang lebih autentik dan kuat. Semakin pekat tehnya, semakin nikmat saat dicampur susu.",
    reviews: [],
    isMine: false,
    isFav: false,
    createdAt: "2024-04-01"
  }
];

/* ══════════════════════════════
   LOCALSTORAGE HELPERS
══════════════════════════════ */
const DB = {
  KEY_RECIPES:  'dn_recipes',
  KEY_USER:     'dn_user',
  KEY_FAVS:     'dn_favs',
  KEY_AUTH:     'dn_auth',

  getRecipes() {
    const saved = localStorage.getItem(this.KEY_RECIPES);
    if (!saved) {
      this.setRecipes(SEED_RECIPES);
      return SEED_RECIPES;
    }
    return JSON.parse(saved);
  },

  setRecipes(data) {
    localStorage.setItem(this.KEY_RECIPES, JSON.stringify(data));
  },

  getUser() {
    const u = localStorage.getItem(this.KEY_USER);
    return u ? JSON.parse(u) : null;
  },

  setUser(user) {
    localStorage.setItem(this.KEY_USER, JSON.stringify(user));
  },

  getFavs() {
    return JSON.parse(localStorage.getItem(this.KEY_FAVS) || '[]');
  },

  setFavs(arr) {
    localStorage.setItem(this.KEY_FAVS, JSON.stringify(arr));
  },

  isLoggedIn() {
    return !!localStorage.getItem(this.KEY_AUTH);
  },

  login(user) {
    localStorage.setItem(this.KEY_AUTH, '1');
    this.setUser(user);
  },

  logout() {
    localStorage.removeItem(this.KEY_AUTH);
  }
};

/* ══════════════════════════════
   AUTH GUARD
══════════════════════════════ */
function requireAuth() {
  if (!DB.isLoggedIn()) {
    window.location.href = 'login_page.html';
    return false;
  }
  return true;
}

/* ══════════════════════════════
   CATEGORY HELPERS
══════════════════════════════ */
const CATEGORIES = {
  ayam:    { label: 'Ayam',     icon: '🐔', badge: 'badge-amber' },
  seafood: { label: 'Seafood',  icon: '🦐', badge: 'badge-teal' },
  sayur:   { label: 'Sayur',    icon: '🥦', badge: 'badge-green' },
  daging:  { label: 'Daging',   icon: '🥩', badge: 'badge-brown' },
  snack:   { label: 'Snack',    icon: '🍡', badge: 'badge-yellow' },
  minuman: { label: 'Minuman',  icon: '🥤', badge: 'badge-teal' },
};

function getCatLabel(cat) {
  return CATEGORIES[cat] ? `${CATEGORIES[cat].icon} ${CATEGORIES[cat].label}` : cat;
}

/* ══════════════════════════════
   RECIPE CARD BUILDER
══════════════════════════════ */
function buildRecipeCard(recipe, options = {}) {
  const { linkTarget = 'see_recipe.html', showMine = false } = options;
  const favs = DB.getFavs();
  const isFav = favs.includes(recipe.id);
  const diffClass = `diff diff-${recipe.difficulty.toLowerCase()}`;

  const card = document.createElement('article');
  card.className = 'recipe-card anim-fade-up';
  card.innerHTML = `
    <div class="rc-thumb" style="background:${recipe.bgLight}">
      <span style="font-size:5rem">${recipe.emoji}</span>
      <div class="rc-thumb-overlay"></div>
      <button class="rc-fav ${isFav ? 'active' : ''}"
              data-id="${recipe.id}"
              aria-label="${isFav ? 'Hapus dari favorit' : 'Tambah ke favorit'}"
              title="${isFav ? 'Hapus favorit' : 'Favorit'}">
        ${isFav ? '❤️' : '🤍'}
      </button>
      ${showMine && recipe.isMine ? '<span class="badge badge-amber" style="position:absolute;bottom:.7rem;left:.7rem">Milik Saya</span>' : ''}
    </div>
    <div class="rc-body">
      <p class="rc-cat">${getCatLabel(recipe.category)}</p>
      <h3 class="rc-title">${recipe.name}</h3>
      <p class="rc-desc">${recipe.desc}</p>
      <div class="rc-meta">
        <span class="rc-meta-item">⏱️ ${recipe.time} mnt</span>
        <span class="rc-meta-item">👥 ${recipe.serving}</span>
      </div>
    </div>
    <div class="rc-footer">
      <span class="rc-rating">★ ${recipe.rating.toFixed(1)} <span>(${recipe.ratingCount})</span></span>
      <span class="badge ${diffClass}">${recipe.difficulty}</span>
    </div>
  `;

  // navigate to detail
  card.addEventListener('click', (e) => {
    if (e.target.closest('.rc-fav')) return;
    localStorage.setItem('dn_active_recipe', recipe.id);
    window.location.href = linkTarget;
  });

  // fav toggle
  card.querySelector('.rc-fav').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavById(recipe.id, e.currentTarget);
  });

  return card;
}

function toggleFavById(id, btn) {
  const favs = DB.getFavs();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
    if (btn) { btn.innerHTML = '❤️'; btn.classList.add('active'); }
    showToast('❤️ Ditambahkan ke Favorit!');
  } else {
    favs.splice(idx, 1);
    if (btn) { btn.innerHTML = '🤍'; btn.classList.remove('active'); }
    showToast('💔 Dihapus dari Favorit');
  }
  DB.setFavs(favs);
  // update badge
  document.querySelectorAll('[data-fav-count]').forEach(el => el.textContent = favs.length);
}

/* ══════════════════════════════
   TOAST
══════════════════════════════ */
function showToast(msg, duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), duration);
}

/* ══════════════════════════════
   SIDEBAR TOGGLE
══════════════════════════════ */
function initSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  const hamburger = document.getElementById('hamburger-btn');

  if (!sidebar) return;

  hamburger?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay?.classList.toggle('show');
  });
  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });
}

/* ══════════════════════════════
   ACTIVE NAV LINK
══════════════════════════════ */
function setActiveNav(pageId) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
}

/* ══════════════════════════════
   GREETING
══════════════════════════════ */
function getGreeting() {
  const h = new Date().getHours();
  if (h < 11) return 'Selamat pagi';
  if (h < 15) return 'Selamat siang';
  if (h < 18) return 'Selamat sore';
  return 'Selamat malam';
}

/* ══════════════════════════════
   RENDER STARS
══════════════════════════════ */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const empty = 5 - full;
  return '★'.repeat(full) + '☆'.repeat(empty);
}

/* ══════════════════════════════
   DATE FORMAT
══════════════════════════════ */
function formatDate(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}
