// Повний список цитат 
const initialQuotes = [
    "Коли ми вже не в змозі змінити ситуацію, перед нами постає виклик — змінити себе. — Віктор Франкл",
    "Своєрідний парадокс полягає в тому, що коли я приймаю себе таким, яким я є, я отримую можливість змінитися. — Карл Роджерс",
    "Я — не те, що зі мною сталося, я — те, чим я вирішив стати. — Карл Густав Юнг",
    "Найважливіше почуття безпеки — це коли ти знаєш, що можеш вистояти. — Альфред Адлер",
    "Життя — це не пошук себе. Життя — це створення себе. — Абрахам Маслоу",
    "Здатність бути наодинці з собою — це головна умова здатності бути з іншими. — Еріх Фромм",
    "Ти не можеш зупинити хвилі, але ти можеш навчитися серфити. — Джон Кабат-Зінн",
    "У кожній людині є внутрішнє прагнення до росту та розвитку. — Карен Хорні",
    "Бути повністю людиною — це жити в процесі відкриття своєї сили. — Ролло Мей",
    "Найвеличніше відкриття мого покоління — це те, що людина може змінити своє життя, змінивши хід своїх думок. — Вільям Джеймс",
    "Єдиний спосіб робити свою роботу добре — це любити її. Якщо ти ще не знайшов свою улюблену справу, продовжуй шукати. — Стів Джобс",
    "Життя — це те, що з тобою відбувається, поки ти будуєш плани. — Джон Леннон",
    "Життя — подорож, а не прибуття до кінцевого пункту призначення. — Тімоті Родерік",
    "Невдачі неодмінно будуть, і те, як ви з ними впораєтеся, буде найважливішим показником того, чи досягнете ви успіху. — Джеймі Даймон",
    "Існує два способи стать щасливим: поліпшити реальність чи знизити очікування. — Джоді Піколт",
    "Правильні люди на правильному місці важливіші за правильну стратегію. — Джек Уелч",
    "Повірте, ви можете, і ви на півдорозі. — Теодор Рузвельт",
    "Коли все, здається, йде проти вас, пам’ятайте, що літак злітає проти вітру, а не з ним. — Генрі Форд",
    "Життя без стресу — це смерть. — Ганс Сельє",
    "Найважча частина роботи — зважитися приступити до неї. — Габріель Лауб",
    "Гроші з’являються, коли ви займаєтеся правильною справою. — Майк Філліпс",
    "Всесвіт віддячить тобі за те, що ти ризикуєш від його імені. — Шакті Ґавейн",
    "Найкращий спосіб передбачити майбутнє — створити його. — Абрахам Лінкольн",
    "Будьте собою; всі інші вже зайняті. — Оскар Уайльд",
    "Не варто зациклюватися на мріях і забувати жити. — Джоан Роулінг",
    "Подорож у тисячу миль починається з одного кроку. — Лао-цзи",
    "Якщо спочатку у вас не виходить, спробуйте ще раз. — Вільям Едвард Хіксон",
    "Життя — це 10% того, що з тобою відбувається, і 90% того, як ти на це реагуєш. — Чарльз Р. Свіндолл",
    "Мета нашого життя — бути щасливими. — Далай-лама",
    "Життя — це не проблема, яку потрібно вирішити, а реальність, яку потрібно відчути. — Сьорен К’єркегор",
    "Найбільша пригода, на яку можна піти, — це жити життям своєї мрії. — Опра Вінфрі",
    "Життя полягає не в тому, щоб знайти себе, а в тому, щоб створити себе. — Джордж Бернард Шоу",
    "Неважливо, як повільно ти йдеш, поки ти не зупиняєшся. — Конфуцій",
    "У всьому є краса, але не всі можуть побачити. — Конфуцій",
    "Якби життя було передбачуваним, воно перестало б бути життям і залишилося б без смаку. — Елеонора Рузвельт",
    "Успіх не остаточний; невдача не фатальна: має значення мужність продовжувати. — Вінстон Черчилль",
    "Якщо ви хочете чогось нового, ви повинні припинити робити щось старе. — Пітер Друкер",
    "Життя полягає не в тому, щоб чекати, поки мине шторм; це в тому, щоб навчитися танцювати під дощем. — Вівіан Грін",
    "Ви ніколи не зможете перетнути океан, доки не наберетеся сміливості втратити берег з поля зору. — Христофор Колумб",
    "Корабель у гавані безпечний, але кораблі будуються не для цього. — Джон А. Шедд",
    "Людина, яка ніколи не помилялася, ніколи не пробувала нічого нового. — Альберт Ейнштейн",
    "Варто тільки повірити, що ви можете — і ви вже на півдорозі до цілі. — Теодор Рузвельт",
    "Єдиний спосіб піднятися на вершину драбини — долати сходинку за сходинкою, по одній за раз. — Маргарет Тетчер",
    "Ви не повинні бути великими, щоб почати, але ви повинні почати, щоб бути великими. — Зіг Зіглар",
    "Щоб дійти до мети, людині потрібно тільки одне — йти. — Оноре де Бальзак",
    "Якщо ви думаєте, що можете — ви маєте рацію, якщо думаєте, що не можете — ви теж маєте рацію. — Генрі Ford",
    "Ми — раби своїх звичок. Змініть свої звички, і зміниться ваше життя. — Роберт Кійосакі",
    "Завжди обирайте найважчу дорогу — на ній ви не зустрінете конкурентів. — Шарль де Голль",
    "Успіх — це здатність ризикувати і бути невпинним у праці, а також здатність бачити можливості там, де інші бачать тільки небезпеку. — Джон Максвелл",
    "Свобода — це вміння сказати «так» своїм мріям. Гідність — це вміння сказати «ні» своїм страхам. — Святослав Вакарчук",
    "Краще зазнати невдачі в оригінальності, ніж досягти успіху в наслідуванні. — Генрі Мелвілл",
    "Якщо ви цінуєте те, що у вас вже є в житті, ви завжди отримуватимете ще більше. Якщо думаєте лише про те, чого у вас немає — вам ніколи не буде досить. — Опра Вінфрі",
    "Успіх — це здатність пристосовуватися до змін у світі і використовувати їх як можливості. — Стівен Кові",
    "Успіх — це сума маленьких зусиль, які повторюються кожного дня. — Роберт Кольєр",
    "Успіх пов’язаний з дією. Успішні люди продовжують рухатись. Вони роблять помилки, але не кидають все. — Анна Вінтур",
    "Успіх — це не підсумок мрій, а підсумок творчої праці. — Сергій Жадан",
    "Є тільки один спосіб уникнути критики: нічого не робіть, нічого не говоріть і будьте ніким. — Арістотель",
    "Той, хто не планує, прирікає себе на очевидну поразку. — Сунь Цзи",
    "Бути підготовленим — половина успіху. — Мігель де Сервантес",
    "Або ви керуєте вашим днем, або день керує вами. — Джим Рон",
    "Жодного разу не впасти — не найбільша заслуга в житті. Головне кожен раз підніматися. — Нельсон Мандела",
    "Неможливих речей немає. Є недостатня кількість спроб. — Любко Дереш",
    "Великі починання не треба обмірковувати, треба взятися за справу, інакше, помітивши труднощі, відступиш. — Гай Юлій Цезар",
    "Відправною точкою всіх досягнень є бажання. — Наполеон Хілл",
    "Я знав, що якщо зазнаю невдачі, я не пошкодую про це, але я знав, що єдине, про що можу пошкодувати, це те, що не спробував. — Джефф Безос",
    "Ваш мозок може абсолютно все. Потрібно лише переконати себе в цьому. Якщо ви переконаєте себе, що ви можете все, ви дійсно все зможете. — Роберт Кійосакі"
];

const initialImages = Array.from({ length: 66 }, (el, index) => index + 1);

// Кнопки
const not_yet_btn = document.getElementById('not-yet-btn');
const yes_btn = document.getElementById('yes-btn');
const close_warning_btn = document.getElementById('close-warning-btn');
const start_timer_btn = document.getElementById('start-timer-btn');
const settings = document.getElementById('settings');
const start_timer_again = document.getElementById('start-timer-again');
const openedInSiteBtn = document.getElementById('opened-in-site-btn');
const openedInAppBtn = document.getElementById('opened-in-app-btn');
const settingsFinal = document.getElementById('settings-final');

// Екрани
const pwaCheckScreen = document.getElementById('pwa-check-screen');
const pwaInstructionScreen = document.getElementById('pwa-instruction-screen');
const loaderScreen = document.getElementById('pwa-loader-screen');
const welcome_screen = document.getElementById('welcome-screen');
const warning_screen = document.getElementById('warning-screen');
const date_screen = document.getElementById('date-screen');
const main = document.getElementById('main');
const change_date = document.getElementById('change-date');

// Слоти таймера
const daysSlot = document.getElementById('timer-days');
const hoursSlot = document.getElementById('timer-hours');
const minutesSlot = document.getElementById('timer-minutes');
const secondsSlot = document.getElementById('timer-seconds');

const supportImg = document.getElementById('support-img');
const supportQuote = document.getElementById('support-quote');

let timerInterval = null;

// Початковий запуск та маскування екранів
document.addEventListener('DOMContentLoaded', () => {
    if (welcome_screen) welcome_screen.style.display = 'none';
    if (warning_screen) warning_screen.style.display = 'none';
    if (date_screen) date_screen.style.display = 'none';
    if (main) main.style.display = 'none';
    if (change_date) change_date.style.display = 'none';
    if (loaderScreen) loaderScreen.style.display = 'none';
    if (pwaInstructionScreen) pwaInstructionScreen.style.display = 'none';
    
    // Перевірка стану опитування PWA
    if (localStorage.getItem('pwaConfirmed') === 'true') {
        if (pwaCheckScreen) pwaCheckScreen.style.display = 'none';
        if (loaderScreen) loaderScreen.style.display = 'flex';
        startPWARegistration();
    } else {
        if (pwaCheckScreen) pwaCheckScreen.style.display = 'block';
    }
});

openedInSiteBtn.addEventListener('click', () => {
    pwaCheckScreen.style.display = 'none';
    pwaInstructionScreen.style.display = 'block';
});

openedInAppBtn.addEventListener('click', () => {
    localStorage.setItem('pwaConfirmed', 'true');
    pwaCheckScreen.style.display = 'none';
    loaderScreen.style.display = 'flex';
    
    startPWARegistration();
});

function shuffleArray(array) {
    let shuffled = [...array]; 
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateTimer() {
    const savedDateStr = localStorage.getItem('returnDate');
    if (!savedDateStr) return;

    const targetDate = new Date(savedDateStr);
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();

    if (day === 1 && month === 1) {
        clearInterval(timerInterval);
        main.style.display = 'none'; 
        welcome_screen.style.display = 'none';
        date_screen.style.display = 'none';
        change_date.style.display = 'none';
        document.getElementById('birthday-screen').style.display = 'block';
        return;
    }

    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(timerInterval);
        main.style.display = 'none'; 
        welcome_screen.style.display = 'none';
        date_screen.style.display = 'none';
        change_date.style.display = 'none';
        document.getElementById('final-screen').style.display = 'block';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysSlot.innerText = days;
    hoursSlot.innerText = hours;
    minutesSlot.innerText = minutes;
    secondsSlot.innerText = seconds;
}

function displayDailyContent() {
    let storedQuotes = localStorage.getItem('currentQuotes');
    let quotesArray = storedQuotes ? JSON.parse(storedQuotes) : [];

    if (quotesArray.length === 0) {
        quotesArray = shuffleArray(initialQuotes); 
    }
    const nextQuote = quotesArray.shift();
    localStorage.setItem('currentQuotes', JSON.stringify(quotesArray));
    supportQuote.innerText = nextQuote;

    let storedImages = localStorage.getItem('currentImages');
    let imagesArray = storedImages ? JSON.parse(storedImages) : [];

    if (imagesArray.length === 0) {
        imagesArray = shuffleArray(initialImages); 
    }

    const nextImageNumber = imagesArray.shift();
    localStorage.setItem('currentImages', JSON.stringify(imagesArray));

    supportImg.src = `assets/images/${nextImageNumber}.jpg`;
}

not_yet_btn.addEventListener('click', function() {
    welcome_screen.style.display = 'none';
    warning_screen.style.display = 'block';
});

yes_btn.addEventListener('click', function() {
    welcome_screen.style.display = 'none';
    date_screen.style.display = 'block';
});

close_warning_btn.addEventListener('click', function() {
    warning_screen.style.display = 'none';
    welcome_screen.style.display = 'block';
});

start_timer_btn.addEventListener('click', function() {
    const return_date_value = document.getElementById('return-date-input').value;
    if (!return_date_value) return;
    
    localStorage.setItem('returnDate', return_date_value);
    date_screen.style.display = 'none';
    main.style.display = 'block'; // Вмикаємо інтерфейс

    displayDailyContent();
    updateTimer();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
});

settings.addEventListener('click', function() {
    clearInterval(timerInterval); 
    main.style.display = 'none';
    change_date.style.display = 'block';
});

if (settingsFinal) {
    settingsFinal.addEventListener('click', function() {
        clearInterval(timerInterval); 
        document.getElementById('final-screen').style.display = 'none';
        change_date.style.display = 'block';
    });
}

// ФІКС РОЖЕВОГО ЕКРАНУ: Примусове відновлення відображення блоку main при оновленні дати
start_timer_again.addEventListener('click', function() {
    const return_date_value = document.getElementById('new-date-input').value;
    if (!return_date_value) return;
    
    localStorage.setItem('returnDate', return_date_value);
    change_date.style.display = 'none';
    main.style.display = 'block'; // ПРИМУСОВО вмикаємо головний таймер назад!
    
    displayDailyContent();
    updateTimer(); 
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
});

// --- НАДІЙНЕ КЕРУВАННЯ ЗАВАНТАЖЕННЯМ ТА SERVICE WORKER ---
function startPWARegistration() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => {
                console.log('Service Worker зареєстрований!');
                
                const activateAppLayout = () => {
                    if (loaderScreen) loaderScreen.style.display = 'none';
                    
                    const savedDateStr = localStorage.getItem('returnDate');
                    
                    if (savedDateStr) {
                        const targetDate = new Date(savedDateStr);
                        const now = new Date();
                        const diff = targetDate - now;
                        const day = now.getDate();
                        const month = now.getMonth();

                        if (day === 30 && month === 7) {
                            document.getElementById('birthday-screen').style.display = 'block';
                        } else if (diff <= 0) {
                            document.getElementById('final-screen').style.display = 'block';
                        } else {
                            main.style.display = 'block';
                            displayDailyContent();
                            updateTimer(); 
                            clearInterval(timerInterval);
                            timerInterval = setInterval(updateTimer, 1000); 
                        }
                    } else {
                        welcome_screen.style.display = 'block';
                    }
                };

                if (reg.active || navigator.serviceWorker.controller) {
                    activateAppLayout();
                } else {
                    reg.addEventListener('updatefound', () => {
                        const newWorker = reg.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'activated') {
                                activateAppLayout();
                            }
                        });
                    });
                    setTimeout(activateAppLayout, 3500);
                }
            })
            .catch(err => {
                console.log('Помилка SW:', err);
                if (loaderScreen) loaderScreen.style.display = 'none';
                if (localStorage.getItem('returnDate')) {
                    main.style.display = 'block';
                    clearInterval(timerInterval);
                    timerInterval = setInterval(updateTimer, 1000);
                } else {
                    welcome_screen.style.display = 'block';
                }
            });
    } else {
        if (loaderScreen) loaderScreen.style.display = 'none';
        if (localStorage.getItem('returnDate')) {
            main.style.display = 'block';
            clearInterval(timerInterval);
            timerInterval = setInterval(updateTimer, 1000);
        } else {
            welcome_screen.style.display = 'block';
        }
    }
}