const chatData = {
  movies: {
    title: "Recent Movie Discussions",
    sub: "19,150 posts",
    badge: "🎬 Movies",
    messages: [
      {
        name: "",
        time: "",
        text: "",
        color: "#16a34a",
      },
    ],
  },
  tv: {
    title: "Recent TV Discussions",
    sub: "21,158 posts",
    badge: "📺 TV",
    messages: [
      {
        name: "",
        time: "",
        text: "",
        color: "#0284c7",
      },
    ],
  },
  celebrity: {
    title: "Recent Celebrity Discussions",
    sub: "8,313 posts",
    badge: "⭐ Celebrity",
    messages: [
      {
        name: "",
        time: "",
        text: "",
        color: "#dc2626",
      },
    ],
  },
};

function goChat(type) {
  const data = chatData[type];
  document.getElementById("chat-title").textContent = data.title;
  document.getElementById("chat-sub").textContent = data.sub;
  document.getElementById("chat-badge").textContent = data.badge;

  const body = document.getElementById("chat-body");
  body.innerHTML = "";
  data.messages.forEach((msg, i) => {
    const el = document.createElement("div");
    el.className = "chat-msg";
    el.style.animationDelay = i * 0.07 + "s";
    el.innerHTML = `
      <div class="chat-avatar" style="background:${msg.color}">${msg.name[0]}</div>
      <div class="chat-msg-content">
        <div class="chat-msg-header">
          <span class="chat-msg-name">${msg.name}</span>
          <span class="chat-msg-time">${msg.time}</span>
        </div>
        <div class="chat-msg-text">${msg.text}</div>
      </div>`;
    body.appendChild(el);
  });

  document.getElementById("page-home").classList.remove("active");
  document.getElementById("page-chat").classList.add("active");
  document.getElementById("chat-input").focus();
}

function goHome() {
  document.getElementById("page-chat").classList.remove("active");
  document.getElementById("page-home").classList.add("active");
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;
  const body = document.getElementById("chat-body");
  const el = document.createElement("div");
  el.className = "chat-msg";
  el.innerHTML = `
    <div class="chat-avatar" style="background:#01b4e4">S</div>
    <div class="chat-msg-content">
      <div class="chat-msg-header">
        <span class="chat-msg-name">Siz</span>
        <span class="chat-msg-time">Hozir</span>
      </div>
      <div class="chat-msg-text">${text}</div>
    </div>`;
  body.appendChild(el);
  input.value = "";
  body.scrollTop = body.scrollHeight;
}

document.getElementById("chat-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
