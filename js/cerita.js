let currentTypeItInstance = null;
let isTyping = false;

const navbar = document.getElementById('navbar-container');
const navItems = document.querySelectorAll('.nav-items');
const navToggler = document.getElementById('navToggler');
const navIcon = document.getElementById('navIcon');
const storyLine1 = document.getElementById('storyline-1');
const storyLine2 = document.getElementById('storyline-2');
const storyLine3 = document.getElementById('storyline-3');
const continueBtn2 = document.getElementById('continue-btn-2');

const character1 = document.getElementById('character-1');
const character2 = document.getElementById('character-2');
const character3 = document.getElementById('character-3');
const charaTitle = document.getElementById('character-title');
const start = document.getElementById('start');

function disableCharacterButtons(disable) {
    character1.disabled = disable;
    character2.disabled = disable;
    character3.disabled = disable;
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navItems.forEach(item => item.style.color = "white");
        navToggler.classList.add('nav-toggler-white');
        navIcon.classList.add('navbar-toggler-icon-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navItems.forEach(item => item.style.color = "black");
        navToggler.classList.remove('nav-toggler-white');
        navIcon.classList.remove('navbar-toggler-icon-scrolled');
    }
});

function waitTypingDone() {
    return new Promise((resolve) => {
        const check = () => {
            if (!isTyping) {
                resolve();
            } else {
                setTimeout(check, 50);
            }
        };
        check();
    });
}

async function typeText(selector, text, speed = 5) {
    await waitTypingDone();
    isTyping = true;

    disableCharacterButtons(true);

    if (currentTypeItInstance && typeof currentTypeItInstance.destroy === 'function') {
        try {
            currentTypeItInstance.destroy();
        } catch (e) {
            console.warn("TypeIt destroy error:", e);
        }
    }

    return new Promise((resolve) => {
        currentTypeItInstance = new TypeIt(selector, {
            speed,
            strings: text,
            afterComplete: (instance) => {
                instance.destroy();
                currentTypeItInstance = null;
                isTyping = false;

                disableCharacterButtons(false);

                resolve();
            }
        }).go();
    });
}

async function pressStart1() {
    if (isTyping) return;
    start.style.display = "none";
    storyLine1.classList.add("storyline-1-active");

    await typeText("#story-title-1", "Chapter 1: Kisah Awal Kuliah", 10);
    await typeText("#story-content-1", "Pas pertama kali nginjekin kaki di Esa Unggul, rasanya kayak nyasar di tempat asing. Gak kenal siapa-siapa, gak ada yang nyamperin juga. Serasa sendirian di keramaian, apalagi aku bukan tipe yang gampang banget ngajak orang ngobrol. Tapi ya, pelan-pelan aku coba buka diri mulai dari sapa duluan, ngobrol kecil, sampai akhirnya bisa punya temen yang klik. Prosesnya gak instan, tapi dari situ aku belajar: kadang keluar dari zona nyaman itu emang perlu banget.");

    storyLine2.classList.add("storyline-2-active");
    await typeText("#story-title-2", "Chapter 2: Kenapa Memilih Jurusan Marketing Communication?", 10);
    await typeText("#story-content-2", "Jujur, awalnya aku milih jurusan ini karena... ya bingung aja. Abis lulus SMK, rasanya masih blur mau ke mana, jadi asal pilih jurusan yang kedengerannya seru. Eh, gak nyangka ternyata malah cocok banget! Di Marcomm ini aku belajar banyak dari ngomong depan orang, bikin strategi komunikasi, sampai ngerti cara mikir kreatif. Dan makin ke sini, makin yakin kalau ini emang jalan yang pas buat aku.");

    storyLine3.classList.add("storyline-3-active");
    await typeText("#story-title-3", "Chapter 3: Pengalaman Seru Selama Kuliah", 10);
    await typeText("#story-content-3", "Salah satu momen paling seru tuh waktu aku diajak jadi bagian tim struktural buat ngurusin event kampus. Awalnya? Wah, bener-bener heboh. Banyak pendapat beda, ide numpuk, kadang sampe debat kecil. Belum lagi tugas kuliah keteteran dan jam makan yang suka kelewat. Tapi pas hari H, alhamdulillah acaranya sukses meskipun masih ada drama kecil-kecilan. Dari situ aku belajar banget soal kerja tim, komunikasi yang jelas, dan tanggung jawab. Capek? Iya. Tapi puas? Banget!");
}

async function pressStart2() {
    if (isTyping) return;
    start.style.display = "none";
    storyLine1.classList.add("storyline-1-active");

    await typeText("#story-title-1", "Chapter 1: Kisah Awal Kuliah", 10);
    await typeText("#story-content-1", "Awal pertama kali masuk ke area di Esa Unggul pas saat ppkmb dimulai. Sejujurnya buat berangkat ngejalanin ppkmb hari pertama tuh bener-bener bikin aku nervous banget, salah satunya karena aku memiliki kepribadian yang introvert, dimana hal itu sangat membuat aku merasa struggle dalam memulai pertemanan dengan orang baru. Tapi ya, pelan-pelan aku mulai mencoba untuk membuka obrolan ringan, sampai akhirnya aku dan teman-temanku merasa bahwa kami memiliki chemistry yang sama.");

    storyLine2.classList.add("storyline-2-active");
    await typeText("#story-title-2", "Chapter 2: Kenapa Memilih Jurusan Marketing Communication?", 10);
    await typeText("#story-content-2", "Honestly, dari awal aku masuk sma emang udah interest sama jurusan Ilmu Komunikasi ... selain kedengerannya menarik, aku juga pengen keluar dari comfort zone juga sih. Sampe akhirnya setelah lulus SMA pun ketertarikanku untuk menempuh jurusan komunikasi makin bertambah besar. Eh, ga nyangka ternyata malah cocok, dan yakin kalo jurusan serta peminatan yang aku tempuh itu emang jalan yang pas. Oiya, di Marcomm aku mempelajari banyak hal mulai dari bagaimana cara berkomunikasi dengan baik, dan benar, belajar berbicara di depan orang banyak, dan juga selalu berfikir secara kreatif.");

    storyLine3.classList.add("storyline-3-active");
    await typeText("#story-title-3", "Chapter 3: Pengalaman Seru Selama Kuliah", 10);
    await typeText("#story-content-3", "Momen yang paling memorable buat aku, pada saat kelas kami kebagian tugas untuk mengelola sebuah event. Wah, complicated banget pastinya, ya karena event itu emang first experience kami semua. Mulai dari perdebatan kecil karena perbedaan pendapat maupun sudut pandang, misscomm antar divisi, belum lagi perubahan roundown yang super tiba-tiba. Ditambah tugas kuliah, tugas kelompok yang udah cepet-cepet pengen di selesain karena mepet sama deadline. Tapi ya, waktu acara dimulai semua rasa cape langsung hilang ketika melihat acaranya sukses meskipun ada sedikit kendala di dalamnya. Aku banyak banget belajar dari event yang sudah di jalani kemarin. Kalo kekompakan dalam sebuah tim itu dibutuhkan banget, mulai dari mengkomunikasikan sesuatu dengan jelas agar bisa meminimalisirkan adanya misscomm di dalem tim, melakukan crosscheck kebutuhan event dengan teliti untuk mengurangi ketidakinginan yang terjadi, dan terakhir tanggung jawab dalam mengemban pekerjaan.");
}

async function pressStart3() {
    if (isTyping) return;
    start.style.display = "none";
    storyLine1.classList.add("storyline-1-active");

    await typeText("#story-title-1", "Chapter 1: Kisah Awal Kuliah", 10);
    await typeText("#story-content-1", "Awal-awal masuk kuliah, aku sempat takut banget. Takut nggak punya teman kayak waktu di SMA dulu. Tapi lama-lama, setelah mulai kenal dan ngobrol sama anak-anak sejurusan, ternyata mereka asik dan ramah-ramah. Nggak nyangka juga sih, ternyata kenalan sama orang baru semenyenangkan itu. Malah dari situ aku jadi dapet banyak wawasan dan pengalaman baru yang sebelumnya nggak pernah aku bayangin.");

    storyLine2.classList.add("storyline-2-active");
    await typeText("#story-title-2", "Chapter 2: Kenapa Memilih Jurusan Marketing Communication?", 10);
    await typeText("#story-content-2", "Awalnya aku tuh tertarik banget sama jurusan Ilmu Komunikasi, soalnya belum tahu kalau ada yang namanya Marketing Communication. Tapi setelah aku cari-cari info soal Marketing Communication, ternyata itu pas banget sama apa yang selama ini aku pengen. Di Marketing Communication, kita belajar gimana caranya ngomong di depan umum, mikir kreatif, dan nyusun strategi komunikasi. Seru banget sih, soalnya semuanya relevan banget sama hal-hal yang aku suka.");

    storyLine3.classList.add("storyline-3-active");
    await typeText("#story-title-3", "Chapter 3: Pengalaman Seru Selama Kuliah", 10);
    await typeText("#story-content-3", "Pengalaman seru selama kuliah juga lumayan banyak sih. Yang pertama itu pas PPKMB, di situ aku dapet banyak teman baru dan acaranya juga seru banget. Ada lomba adu yel-yel, flashmob, sampai mini konser yang bikin suasananya rame dan nggak ngebosenin. Terus yang kedua, waktu satu kelas diminta buat megang sebuah event kampus nah ini seru banget karena event nya ngundang salah satu pembawa berita dari TV One. Jadi kita harus mikir kreatif bareng-bareng biar acaranya bisa jalan dengan lancar. Dan yang paling berkesan juga, aku ikut organisasi di Esa Unggul. Buat aku ini pengalaman baru banget karena sebelumnya belum pernah aktif di organisasi. Di sini aku belajar buat jadi lebih kritis, ngelatih jiwa kepemimpinan, dan belajar gimana caranya bersikap demokratis dalam ngambil keputusan bareng tim");
}

function charaSelected1() {
  if (isTyping) return;

  character1.classList.add('character-active');
  character2.classList.remove('character-active');
  character3.classList.remove('character-active');

  charaTitle.innerHTML = 'Emnis La Heinzhe';
  start.style.display = 'block';
  clearStorylines();
  resetTypeText();
  start.setAttribute('onclick', 'pressStart1()');
}

function charaSelected2() {
  if (isTyping) return;

  character1.classList.remove('character-active');
  character2.classList.add('character-active');
  character3.classList.remove('character-active');

  charaTitle.innerHTML = 'Syahla Nabilla Putri';
  start.style.display = 'block';
  clearStorylines();
  resetTypeText();
  start.setAttribute('onclick', 'pressStart2()');
}

function charaSelected3() {
  if (isTyping) return;

  character1.classList.remove('character-active');
  character2.classList.remove('character-active');
  character3.classList.add('character-active');

  charaTitle.innerHTML = 'Muhammad Zakky Al Hafidz';
  start.style.display = 'block';
  clearStorylines();
  resetTypeText();
  start.setAttribute('onclick', 'pressStart3()');
}

function clearStorylines() {
  storyLine1.classList.remove('storyline-1-active');
  storyLine2.classList.remove('storyline-2-active');
  storyLine3.classList.remove('storyline-3-active');
}

function resetTypeText() {
  if (isTyping) return;

  try {
      if (currentTypeItInstance && typeof currentTypeItInstance.destroy === 'function') {
          currentTypeItInstance.destroy();
      }
  } catch (error) {
      console.warn('TypeIt instance destroy error:', error);
  }

  currentTypeItInstance = null;
  isTyping = false;

  document.querySelector('#story-title-1').innerHTML = '';
  document.querySelector('#story-content-1').innerHTML = '';
  document.querySelector('#story-title-2').innerHTML = '';
  document.querySelector('#story-content-2').innerHTML = '';
  document.querySelector('#story-title-3').innerHTML = '';
  document.querySelector('#story-content-3').innerHTML = '';
}

AOS.init();