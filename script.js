document.addEventListener("DOMContentLoaded", () => {

  const music = document.getElementById("backgroundMusic");
  const musicToggleBtn = document.getElementById("musicToggleBtn");

  let isPlaying = false;

  function playMusic(customSrc = null) {
    if (!music) return;
    
    const targetSrc = customSrc || "https://files.catbox.moe/qcqzak.mp3";

    if (music.src !== targetSrc) {
      music.src = targetSrc;
      music.load();
    }

    music.volume = 0.35;
    
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying = true;
        if (musicToggleBtn) {
          musicToggleBtn.textContent = "🔊";
          musicToggleBtn.style.display = "flex";
        }
      }).catch(error => {
        console.log("Audio play failed:", error);
        isPlaying = false;
        if (musicToggleBtn) {
          musicToggleBtn.textContent = "🔇";
          musicToggleBtn.style.display = "flex";
        }
      });
    }
  }

  function pauseMusic() {
    if (!music) return;
    music.pause();
    isPlaying = false;
    if (musicToggleBtn) {
      musicToggleBtn.textContent = "🔇";
      musicToggleBtn.style.display = "flex";
    }
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener("click", () => {
      if (isPlaying) {
        pauseMusic();
      } else {
        playMusic();
      }
    });
  }

  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particlesArray = [];

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4 - 0.2;
      this.opacity = Math.random() * 0.7 + 0.2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }
    draw() {
      ctx.fillStyle = `rgba(243, 229, 171, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    if (!canvas) return;
    const count = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }
  initParticles();

  function animateParticles() {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  const validNames = [
    "naila",
    "shifa",
    "naila islam",
    "naila islam shifa"
  ];

  const questions = [
    {
      title: "Be honest… which one sounds most like you?",
      subtitle: "Pick one.",
      options: [
        "I'll sleep early tonight.",
        "One more episode.",
        "One more scroll.",
        "I have no idea how it became 3 AM."
      ]
    },
    {
      title: "If you suddenly got a completely free day, what would you choose?",
      subtitle: "No wrong answers.",
      options: [
        "Sleep",
        "Go somewhere",
        "Spend time with people",
        "Just disappear from everyone for a while"
      ]
    },
    {
      title: "Which matters more?",
      subtitle: "Interesting question.",
      options: [
        "A perfect photograph",
        "A perfect memory"
      ]
    },
    {
      title: "One last thing…",
      subtitle: "Do you think some ordinary days become special only when you look back at them?",
      options: [
        "Yes",
        "Maybe",
        "Absolutely"
      ]
    }
  ];

  const memories = [
    { date: "06.08.23", fullDate: "06 AUG 2023", img: "images/memory1.jpg", title: "A beginning", caption: "Where the story first quietly started to unfold." },
    { date: "22.08.23", fullDate: "22 AUG 2023", img: "images/memory2.jpg", title: "A gentle step", caption: "Another ordinary day that ended up sticking around in memory." },
    { date: "31.08.23", fullDate: "31 AUG 2023", img: "images/memory3.jpg", title: "Quiet moments", caption: "Unplanned conversations and simple clarity." },
    { date: "14.09.23", fullDate: "14 SEP 2023", img: "images/memory18.jpg", title: "Afternoon calm", caption: "Slow hours spent talking about absolutely nothing at all." },
    { date: "05.10.23", fullDate: "05 OCT 2023", img: "images/memory19.jpg", title: "Unexpected smiles", caption: "Little surprises that made the whole week better." },
    { date: "23.10.23", fullDate: "23 OCT 2023", img: "images/memory4.jpg", title: "Shared time", caption: "Proof that time passes, but good feelings don't." },
    { date: "29.10.23", fullDate: "29 OCT 2023", img: "images/memory5.jpg", title: "First meet", caption: "The day we finally met in person and created a core memory." },
    { date: "11.11.23", fullDate: "11 NOV 2023", img: "images/memory6.jpg", title: "Unplanned laughter", caption: "The best times are usually the ones that weren't scheduled." },
    { date: "04.12.23", fullDate: "04 DEC 2023", img: "images/memory20.jpg", title: "Chilly breeze", caption: "Finding warmth in simple company as the season changed." },
    { date: "16.03.24", fullDate: "16 MAR 2024", img: "images/memory7.jpg", title: "Spring memory", caption: "A bright day worth holding on to." },
    { date: "17.07.24", fullDate: "17 JUL 2024", img: "images/memory8.jpg", title: "Midsummer chapter", caption: "Moments becoming special without asking permission." },
    { date: "19.07.24", fullDate: "19 JUL 2024", img: "images/memory9.jpg", title: "Good company", caption: "Just one of many reasons to celebrate this story." },
    { date: "21.09.24", fullDate: "21 SEP 2024", img: "images/memory10.jpg", title: "Autumn warmth", caption: "Reflecting on how quickly time moves." },
    { date: "09.12.24", fullDate: "09 DEC 2024", img: "images/memory11.jpg", title: "Winter reflection", caption: "Finding comfort in shared memories." },
    { date: "25.12.24", fullDate: "25 DEC 2024", img: "images/memory12.jpg", title: "Year-end magic", caption: "A cozy moment at the end of the year." },
    { date: "27.12.24", fullDate: "27 DEC 2024", img: "images/memory13.jpg", title: "Revisiting those days", caption: "Recently visited the place to remember those days." },
    { date: "14.01.25", fullDate: "14 JAN 2025", img: "images/memory21.jpg", title: "Quiet evening", caption: "Watching the sky fade into a peaceful twilight." },
    { date: "26.01.25", fullDate: "26 JAN 2025", img: "images/memory14.jpg", title: "New year chapter", caption: "Starting a new year with cherished memories." },
    { date: "27.01.25", fullDate: "27 JAN 2025", img: "images/memory15.jpg", title: "A calm day", caption: "Quiet peace and simple gratitude." },
    { date: "18.02.25", fullDate: "18 FEB 2025", img: "images/memory22.jpg", title: "Random snapshots", caption: "Capturing everyday magic that usually goes unnoticed." },
    { date: "15.04.25", fullDate: "15 APR 2025", img: "images/memory16.jpg", title: "Spring sunshine", caption: "Capturing a brand-new page of the journey." },
    { date: "20.06.25", fullDate: "20 JUN 2025", img: "images/memory23.jpg", title: "Slowing down", caption: "A lazy afternoon where nothing else mattered." },
    { date: "27.10.25", fullDate: "27 OCT 2025", img: "images/memory17.jpg", title: "Looking back", caption: "Reflecting on two years of wonderful moments." },
    { date: "12.12.25", fullDate: "12 DEC 2025", img: "images/memory24.jpg", title: "Closing thoughts", caption: "Another year well spent and deeply appreciated." }
  ];

  let questionIndex = 0;
  let memoryIndex = 0;

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
      screen.classList.remove("active");
    });
    const screen = document.getElementById(id) || document.getElementById("screen-" + id);
    if (screen) {
      screen.classList.add("active");
    }
    window.scrollTo(0, 0);
  }

  function typeText(elementId, lines, callback) {
    const container = document.getElementById(elementId);
    if (!container) return;
    container.innerHTML = "";
    let lineIndex = 0;

    function writeLine() {
      if (lineIndex >= lines.length) {
        if (callback) callback();
        return;
      }
      const line = document.createElement("p");
      line.className = "typewriter-line";
      container.appendChild(line);
      const text = lines[lineIndex];
      let charIndex = 0;

      const timer = setInterval(() => {
        line.textContent += text.charAt(charIndex);
        charIndex++;
        if (charIndex >= text.length) {
          clearInterval(timer);
          lineIndex++;
          setTimeout(writeLine, 300);
        }
      }, 30);
    }
    writeLine();
  }

  function startIntro() {
    const button = document.getElementById("introBtn");
    if (!button) return;
    button.classList.add("hidden");
    typeText(
      "introText",
      [
        "We are looking for someone.",
        "Someone very specific.",
        "So before we continue...",
        "We need to ask you something."
      ],
      () => {
        button.classList.remove("hidden");
      }
    );
  }

  startIntro();

  const introBtn = document.getElementById("introBtn");
  if (introBtn) {
    introBtn.addEventListener("click", () => {
      showScreen("screen-name");
      startNameScreen();
    });
  }

  function startNameScreen() {
    const form = document.getElementById("nameForm");
    const error = document.getElementById("nameError");
    const input = document.getElementById("nameInput");
    if (!form || !input) return;
    form.classList.add("hidden");
    if (error) error.classList.add("hidden");
    input.value = "";

    typeText(
      "nameText",
      ["First things first.", "What's your name?"],
      () => {
        form.classList.remove("hidden");
        input.focus();
      }
    );
  }

  function submitName() {
    const inputField = document.getElementById("nameInput");
    if (!inputField) return;
    const input = inputField.value.trim().toLowerCase();
    const valid = validNames.some(name => input === name || input.includes(name));

    if (!valid) {
      const error = document.getElementById("nameError");
      if (error) error.classList.remove("hidden");
      return;
    }

    showScreen("screen-questions");
    startQuestions();
  }

  const nameBtn = document.getElementById("nameBtn");
  if (nameBtn) {
    nameBtn.addEventListener("click", submitName);
  }

  const nameInput = document.getElementById("nameInput");
  if (nameInput) {
    nameInput.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        submitName();
      }
    });
  }

  function startQuestions() {
    questionIndex = 0;
    showQuestion();
  }

  function showQuestion() {
    const question = questions[questionIndex];
    const qNum = document.getElementById("questionNumber");
    const qTitle = document.getElementById("questionTitle");
    const qSub = document.getElementById("questionSubtitle");

    if (qNum) qNum.textContent = `QUESTION ${String(questionIndex + 1).padStart(2, "0")} / ${questions.length}`;
    if (qTitle) qTitle.textContent = question.title;
    if (qSub) qSub.textContent = question.subtitle;

    const options = document.getElementById("options");
    const feedback = document.getElementById("feedback");
    if (!options) return;

    options.innerHTML = "";
    if (feedback) feedback.classList.add("hidden");
    options.style.opacity = "1";
    options.style.pointerEvents = "auto";

    question.options.forEach(optionText => {
      const button = document.createElement("button");
      button.className = "option-btn";
      button.textContent = optionText;
      button.addEventListener("click", () => chooseOption(optionText));
      options.appendChild(button);
    });
  }

  function chooseOption(optionText) {
    const options = document.getElementById("options");
    const feedback = document.getElementById("feedback");
    if (options) {
      options.style.pointerEvents = "none";
      options.style.opacity = "0.4";
    }

    let message = "Interesting choice.";
    if (optionText === "I have no idea how it became 3 AM.") {
      message = "Thought so. 🌙";
    } else if (optionText === "Sleep") {
      message = "Pure bliss. 🛌";
    } else if (optionText === "Go somewhere") {
      message = "Wanderlust wins. ✈️";
    } else if (optionText === "A perfect memory") {
      message = "Maybe that's why some moments are worth keeping.";
    } else if (optionText === "Absolutely") {
      message = "And today might just be one of them.";
    }

    if (feedback) {
      feedback.textContent = message;
      feedback.classList.remove("hidden");
    }

    setTimeout(() => {
      questionIndex++;
      if (questionIndex < questions.length) {
        showQuestion();
      } else {
        showScreen("screen-confirmation");
        startConfirmation();
      }
    }, 1200);
  }

  function startConfirmation() {
    const box = document.getElementById("confirmBox");
    if (box) box.classList.add("hidden");
    typeText(
      "confirmText",
      ["Okay.", "I think we have enough.", "Name checked.", "A few answers checked."],
      () => {
        if (box) box.classList.remove("hidden");
      }
    );
  }

  const enterBtn = document.getElementById("enterBtn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      showScreen("screen-hub");
    });
  }

  document.querySelectorAll(".hub-card").forEach(card => {
    card.addEventListener("click", () => {
      const target = card.dataset.open;
      if (target === "memories") {
        playMusic("https://files.catbox.moe/qcqzak.mp3");
        showScreen("screen-memories");
        initMemories();
      } else if (target === "little-things") {
        showScreen("screen-little-things");
      } else if (target === "letter") {
        showScreen("screen-letter");
      } else if (target === "last") {
        showScreen("screen-suspense");
        startLastThing();
      }
    });
  });

  document.querySelectorAll("[data-back]").forEach(button => {
    button.addEventListener("click", () => {
      showScreen("screen-hub");
    });
  });

  function initMemories() {
    const selector = document.getElementById("dateSelector");
    if (!selector) return;
    selector.innerHTML = "";
    memoryIndex = 0;

    memories.forEach((memory, index) => {
      const button = document.createElement("button");
      button.className = "date-chip";
      button.textContent = memory.date;
      button.addEventListener("click", () => selectMemory(index));
      selector.appendChild(button);
    });

    selectMemory(0);
  }

  function selectMemory(index) {
    if (index < 0 || index >= memories.length) return;
    memoryIndex = index;
    const memory = memories[index];

    const image = document.getElementById("memoryImg");
    const fallback = document.getElementById("imageFallback");

    if (image && fallback) {
      image.style.display = "block";
      fallback.classList.add("hidden");
      image.src = memory.img;

      image.onerror = () => {
        image.style.display = "none";
        fallback.classList.remove("hidden");
      };
    }

    const mCounter = document.getElementById("memoryCounter");
    const mDate = document.getElementById("memoryDate");
    const mTitle = document.getElementById("memoryTitle");
    const mCaption = document.getElementById("memoryCaption");

    if (mCounter) mCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${memories.length}`;
    if (mDate) mDate.textContent = memory.fullDate;
    if (mTitle) mTitle.textContent = memory.title;
    if (mCaption) mCaption.textContent = memory.caption;

    document.querySelectorAll(".date-chip").forEach((button, i) => {
      button.classList.toggle("active", i === index);
    });
  }

  const prevMemory = document.getElementById("prevMemory");
  if (prevMemory) {
    prevMemory.addEventListener("click", () => {
      if (memoryIndex > 0) selectMemory(memoryIndex - 1);
    });
  }

  const nextMemory = document.getElementById("nextMemory");
  if (nextMemory) {
    nextMemory.addEventListener("click", () => {
      if (memoryIndex < memories.length - 1) selectMemory(memoryIndex + 1);
    });
  }

  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  const envelope = document.getElementById("envelope");
  if (envelope) {
    envelope.addEventListener("click", () => {
      const envFront = document.getElementById("envelopeFront");
      const letterContent = document.getElementById("letterContent");
      if (envFront) envFront.classList.add("hidden");
      if (letterContent) letterContent.classList.remove("hidden");
    });
  }

  function startLastThing() {
    const button = document.getElementById("lastBtn");
    if (!button) return;
    button.classList.add("hidden");
    typeText(
      "lastText",
      ["Okay...", "That's almost everything.", "Almost."],
      () => {
        button.textContent = "Continue →";
        button.classList.remove("hidden");
        button.onclick = startLastPart;
      }
    );
  }

  function startLastPart() {
    const button = document.getElementById("lastBtn");
    if (!button) return;
    button.classList.add("hidden");
    typeText(
      "lastText",
      ["You probably thought that was the whole thing.", "It wasn't.", "There's one last thing."],
      () => {
        button.textContent = "Show me →";
        button.classList.remove("hidden");
        button.onclick = finalBuildUp;
      }
    );
  }

  function finalBuildUp() {
    const button = document.getElementById("lastBtn");
    if (!button) return;
    button.classList.add("hidden");
    typeText(
      "lastText",
      [
        "We started by looking for someone.",
        "We found her.",
        "Then we went through a few memories.",
        "A few random things.",
        "And one small letter.",
        "But there was always one reason for all of this.",
        "Her birthday."
      ],
      () => {
        button.textContent = "Continue →";
        button.classList.remove("hidden");
        button.onclick = () => {
          showScreen("stage-opening");
          runStageOpening();
        };
      }
    );
  }

  const stages = [
    document.getElementById('stage-opening'),
    document.getElementById('stage-name'),
    document.getElementById('stage-balloons-scene'),
    document.getElementById('stage-styles'),
    document.getElementById('stage-pop'),
    document.getElementById('stage-cake'),
    document.getElementById('stage-final')
  ];

  function switchStage(fromIndex, toIndex) {
    stages[fromIndex].classList.remove('active');
    setTimeout(() => {
      stages[toIndex].classList.add('active');
      onStageEnter(toIndex);
    }, 1000);
  }

  function onStageEnter(index) {
    switch(index) {
      case 1: runNameRevealStage(); break;
      case 2: runBalloonSceneStage(); break;
      case 3: runStylesStage(); break;
      case 4: runBalloonPopStage(); break;
      case 5: runCakeStage(); break;
      case 6: runFinalStage(); break;
    }
  }

  const openBtn = document.getElementById('openBtn');
  if (openBtn) {
    openBtn.onclick = () => {
      playMusic("https://files.catbox.moe/pf1rse.mp3");
      switchStage(0, 1);
    };
  }

  function runStageOpening() {
    stages.forEach(s => s.classList.remove('active'));
    const opening = document.getElementById('stage-opening');
    if (opening) opening.classList.add('active');
  }

  function runNameRevealStage() {
    const line1 = document.querySelector('.line-1');
    const line2 = document.querySelector('.line-2');
    const line3 = document.querySelector('.line-3');
    const lineCombined = document.querySelector('.line-combined');

    if (line1) setTimeout(() => line1.classList.add('show'), 500);
    if (line1 && line2) setTimeout(() => { line1.classList.remove('show'); line2.classList.add('show'); }, 2200);
    if (line2 && line3) setTimeout(() => { line2.classList.remove('show'); line3.classList.add('show'); }, 3900);
    if (line3 && lineCombined) setTimeout(() => {
      line3.classList.remove('show');
      lineCombined.classList.add('show');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3e5ab', '#ffb6c1', '#fafafa']
      });
    }, 5600);

    setTimeout(() => { switchStage(1, 2); }, 8800);
  }

  function runBalloonSceneStage() {
    const container = document.getElementById('floatingBalloonsContainer');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['#d4af37', '#e8b4b8', '#b8c5e8', '#e8d4b8', '#d4b8e8', '#f7e7ce'];
    
    for (let i = 0; i < 25; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'css-balloon';
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.left = `${Math.random() * 90 + 5}%`;
      balloon.style.animationDuration = `${Math.random() * 6 + 6}s`;
      balloon.style.animationDelay = `${Math.random() * 4}s`;
      container.appendChild(balloon);
    }

    setTimeout(() => { switchStage(2, 3); }, 7500);
  }

  function runStylesStage() {
    const styles = [
      document.getElementById('hbdStyle1'),
      document.getElementById('hbdStyle2'),
      document.getElementById('hbdStyle3'),
      document.getElementById('hbdStyle4'),
      document.getElementById('hbdStyle5'),
      document.getElementById('hbdStyle6')
    ];

    let currentStyle = 0;

    function showNextStyle() {
      if (currentStyle > 0 && styles[currentStyle - 1]) {
        styles[currentStyle - 1].style.opacity = '0';
        styles[currentStyle - 1].style.transform = 'scale(1.05)';
      }
      if (currentStyle < styles.length && styles[currentStyle]) {
        styles[currentStyle].style.opacity = '1';
        styles[currentStyle].style.transform = 'scale(1)';
        currentStyle++;
        setTimeout(showNextStyle, 3200);
      } else {
        setTimeout(() => { switchStage(3, 4); }, 1500);
      }
    }
    showNextStyle();
  }

  function runBalloonPopStage() {
    const area = document.getElementById('interactiveBalloonArea');
    if (!area) return;
    area.innerHTML = '';
    const popup = document.getElementById('messagePopup');
    const popupText = document.getElementById('popupText');
    const proceedBtn = document.getElementById('proceedToCakeBtn');

    const messages = [
      "Keep smiling.",
      "You deserve all the happiness.",
      "Today is your day.",
      "Another beautiful year begins.",
      "Stay exactly who you are."
    ];

    const colors = ['#d4af37', '#e8b4b8', '#d4b8e8', '#f7e7ce', '#b8c5e8'];
    let poppedCount = 0;
    const totalBalloons = messages.length;

    const positions = [
      { top: '25%', left: '20%' },
      { top: '35%', left: '70%' },
      { top: '55%', left: '30%' },
      { top: '60%', left: '75%' },
      { top: '45%', left: '48%' }
    ];

    positions.forEach((pos, index) => {
      const b = document.createElement('div');
      b.className = 'interactive-balloon';
      b.style.backgroundColor = colors[index % colors.length];
      b.style.top = pos.top;
      b.style.left = pos.left;

      b.addEventListener('click', () => {
        const rect = b.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
          particleCount: 30,
          spread: 50,
          origin: { x, y },
          colors: [colors[index % colors.length], '#ffffff', '#d4af37']
        });

        b.style.transform = 'scale(1.4)';
        b.style.opacity = '0';
        setTimeout(() => b.remove(), 300);

        if (popupText) popupText.textContent = messages[index];
        if (popup) popup.classList.add('show');

        poppedCount++;
        if (poppedCount === totalBalloons) {
          setTimeout(() => {
            if (popup) popup.classList.remove('show');
            if (proceedBtn) proceedBtn.classList.remove('hidden');
          }, 2500);
        }
      });

      area.appendChild(b);
    });

    if (proceedBtn) {
      proceedBtn.onclick = () => {
        if (popup) popup.classList.remove('hidden');
        switchStage(4, 5);
      };
    }
  }

  function runCakeStage() {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#d4af37', '#f3e5ab', '#ffb6c1']
    });

    setTimeout(() => { switchStage(5, 6); }, 9000);
  }

  function runFinalStage() {
    const overlay = document.getElementById('finalDarkOverlay');
    const line1 = document.getElementById('finalLine1');
    const line2 = document.getElementById('finalLine2');

    setTimeout(() => { if (overlay) overlay.classList.add('active'); }, 1500);
    setTimeout(() => { if (line1) line1.classList.add('show'); }, 3000);
    setTimeout(() => { if (line1) line1.classList.remove('show'); }, 6000);
    setTimeout(() => {
      if (line2) line2.classList.add('show');
      
      var duration = 4.5 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 30 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#d4af37', '#ffb6c1', '#ffffff'] }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#f3e5ab', '#f7e7ce', '#d4af37'] }));
      }, 2505);

    }, 7000);

    setTimeout(() => {
      showScreen("screen-final");
    }, 14000);
  }

  const photoBtn = document.getElementById("photoBtn");
  if (photoBtn) {
    photoBtn.addEventListener("click", () => {
      showScreen("screen-final");
    });
  }

  const endBtn = document.getElementById("endBtn");
  if (endBtn) {
    endBtn.addEventListener("click", () => {
      showScreen("screen-end");
      startEnd();
    });
  }

  function startEnd() {
    const button = document.getElementById("restartBtn");
    if (!button) return;
    button.classList.add("hidden");
    typeText(
      "endText",
      [
        "That's it.",
        "No more hidden files.",
        "No more questions.",
        "Just one simple thing left to say.",
        "Happy Birthday, Naila.",
        "And thank you for being part of so many memories."
      ],
      () => {
        button.classList.remove("hidden");
      }
    );
  }

  const restartBtn = document.getElementById("restartBtn");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      pauseMusic();
      if (musicToggleBtn) musicToggleBtn.style.display = "none";
      showScreen("screen-intro");
      startIntro();
    });
  }

});
