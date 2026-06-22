const demoButtons = Array.from(document.querySelectorAll(".demo-tabs button"));
const panels = Array.from(document.querySelectorAll(".demo-panel"));

demoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.demo;
    demoButtons.forEach((item) => item.classList.toggle("active", item === button));
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === `demo-${target}`));
  });
});

const mockWinners = [
  { name: "Alex Chen", prize: "Grand Prize", group: "Floor 1" },
  { name: "Mina Lin", prize: "Travel Voucher", group: "Floor 5" },
  { name: "Jay Wu", prize: "Smart Display", group: "Floor 6" },
  { name: "Ivy Huang", prize: "Gift Card", group: "Floor 1" },
];

let drawIndex = 0;

document.getElementById("mock-draw").addEventListener("click", () => {
  const winner = mockWinners[drawIndex % mockWinners.length];
  drawIndex += 1;
  document.getElementById("winner-reel").textContent = winner.name;
  document.getElementById("host-batches").innerHTML = `
    <article class="host-batch latest">
      <strong>${escapeHtml(winner.name)}</strong>
      <span>${escapeHtml(winner.prize)} / ${escapeHtml(winner.group)} / synced to host display</span>
    </article>
    <article class="host-batch">
      <strong>Previous winners</strong>
      <span>Older batches remain available for review.</span>
    </article>
  `;
  document.getElementById("query-result").textContent =
    `${winner.name} is now visible in the mock winner query and host display.`;
});

document.getElementById("query-winner").addEventListener("click", () => {
  const query = document.getElementById("winner-query").value.trim().toLowerCase();
  const match = mockWinners.find((winner) => winner.name.toLowerCase().includes(query));
  document.getElementById("query-result").textContent = match
    ? `${match.name} won ${match.prize}. This mirrors the live participant query flow.`
    : "No matching mock winner found. The live page checks Firebase winner records.";
});

const stockData = {
  NVDA: { bias: "Watch / Wait", risk: "Medium", momentum: 72, valuation: 48, news: 61 },
  TSLA: { bias: "Speculative", risk: "High", momentum: 58, valuation: 36, news: 78 },
  AAPL: { bias: "Hold", risk: "Low", momentum: 64, valuation: 54, news: 34 },
  MSFT: { bias: "Accumulate", risk: "Medium", momentum: 69, valuation: 57, news: 42 },
};

document.querySelectorAll(".symbol").forEach((button) => {
  button.addEventListener("click", () => {
    const symbol = button.dataset.symbol;
    const data = stockData[symbol];
    document.querySelectorAll(".symbol").forEach((item) => item.classList.toggle("active", item === button));
    document.getElementById("stock-symbol").textContent = symbol;
    document.getElementById("stock-bias").textContent = data.bias;
    document.getElementById("stock-risk").textContent = data.risk;
    document.getElementById("momentum").textContent = data.momentum;
    document.getElementById("valuation").textContent = data.valuation;
    document.getElementById("news-risk").textContent = data.news;
    document.getElementById("prompt-preview").textContent =
      `Analyze ${symbol} with technical momentum, valuation risk, portfolio exposure, and a disciplined entry plan.`;
    document.getElementById("prompt-state").textContent = "Ready";
  });
});

document.getElementById("copy-prompt").addEventListener("click", () => {
  document.getElementById("prompt-state").textContent = "Prompt copied in mock workflow";
});

const hpSlider = document.getElementById("hp-slider");
const mpSlider = document.getElementById("mp-slider");
const hpFill = document.getElementById("hp-fill");
const mpFill = document.getElementById("mp-fill");
const hpText = document.getElementById("hp-text");
const mpText = document.getElementById("mp-text");
const ruleOutput = document.getElementById("rule-output");

function updateMeters() {
  const hp = Number(hpSlider.value);
  const mp = Number(mpSlider.value);
  hpFill.style.width = `${hp}%`;
  mpFill.style.width = `${mp}%`;
  hpText.textContent = `${hp}%`;
  mpText.textContent = `${mp}%`;
  if (hp < 35) {
    ruleOutput.textContent = "State: HP below threshold. Action would trigger after cooldown check.";
  } else if (mp < 40) {
    ruleOutput.textContent = "State: MP below threshold. Secondary action would be queued.";
  } else {
    ruleOutput.textContent = "State: monitoring. No action triggered.";
  }
}

hpSlider.addEventListener("input", updateMeters);
mpSlider.addEventListener("input", updateMeters);

const workerLines = [
  "task received: mock-registration-001",
  "browser profile opened",
  "page state detected: login-valid",
  "step checkpoint saved",
  "dialog detected: recoverable",
  "retry applied",
  "artifact captured: mock-screenshot",
  "task completed: success"
];

document.getElementById("run-worker").addEventListener("click", () => {
  const log = document.getElementById("worker-log");
  log.textContent = "worker running\n";
  workerLines.forEach((line, index) => {
    setTimeout(() => {
      log.textContent += `${String(index + 1).padStart(2, "0")} ${line}\n`;
    }, index * 180);
  });
});

document.getElementById("parse-names").addEventListener("click", () => {
  const lines = document.getElementById("name-input").value.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const rows = lines.map((line) => {
    const parts = line.split(/\s+/);
    const name = parts[0] || "Unknown";
    const area = parts[1] || "N/A";
    return `<tr><td>${escapeHtml(name)}</td><td>${escapeHtml(area)}</td><td>Filled</td></tr>`;
  });
  document.getElementById("form-body").innerHTML = rows.length ? rows.join("") : "<tr><td colspan=\"3\">No input parsed.</td></tr>";
});

let selectedPoint = "A";
let selectedSpeed = "5";
document.querySelectorAll(".pin").forEach((pin) => {
  pin.addEventListener("click", () => {
    selectedPoint = pin.dataset.point;
    updateLocationState();
  });
});

document.querySelectorAll(".speed").forEach((button) => {
  button.addEventListener("click", () => {
    selectedSpeed = button.dataset.speed;
    document.querySelectorAll(".speed").forEach((item) => item.classList.toggle("active", item === button));
    updateLocationState();
  });
});

document.getElementById("simulate-adb").addEventListener("click", () => {
  document.getElementById("adb-state").textContent = `Mock ADB update sent for point ${selectedPoint}`;
});

function updateLocationState() {
  document.getElementById("location-state").textContent = `Selected route point: ${selectedPoint}. Speed: ${selectedSpeed} km/h.`;
  document.getElementById("adb-state").textContent = "Device bridge ready";
}

document.querySelectorAll(".npc").forEach((npc) => {
  npc.addEventListener("click", () => {
    document.getElementById("npc-dialogue").textContent = npc.dataset.line;
  });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
