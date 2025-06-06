async function sendMessage() {
  const token = document.getElementById("token").value.trim();
  const uid = document.getElementById("uid").value.trim();
  const message = document.getElementById("message").value.trim();
  const fileInput = document.getElementById("messageFile").files[0];
  const delay = parseInt(document.getElementById("delay").value);
  const log = document.getElementById("logBox");

  let finalMessage = message;

  if (fileInput) {
    const text = await fileInput.text();
    finalMessage = text;
  }

  const res = await fetch("/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, uid, message: finalMessage, delay }),
  });

  const data = await res.json();
  log.innerText = JSON.stringify(data, null, 2);
}

async function stopBot() {
  const code = document.getElementById("stopCode").value.trim();
  const res = await fetch("/stop", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });

  const log = document.getElementById("logBox");
  const data = await res.json();
  log.innerText = JSON.stringify(data, null, 2);
}
