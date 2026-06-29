function sendMsg() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chat");

  const msg = input.value;

  if (msg.trim() === "") return;

  const p = document.createElement("p");
  p.innerText = msg;

  chat.appendChild(p);

  input.value = "";
}