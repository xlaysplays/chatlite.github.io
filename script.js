const fakeReplies = [
  "Interesting... tell me more!",
  "I'm not sure I understand, can you rephrase?",
  "That's a good question!",
  "I'm just a fake bot, but that sounds cool!",
  "Let's talk more about that.",
  "Hmm... what do *you* think?"
];

function sendMessage() {
  const input = document.getElementById('userInput');
  const chatbox = document.getElementById('chatbox');
  const userText = input.value.trim();

  if (userText === "") return;

  chatbox.innerHTML += `<div><b>You:</b> ${userText}</div>`;

  // Generate a fake response
  const botReply = fakeReplies[Math.floor(Math.random() * fakeReplies.length)];
  chatbox.innerHTML += `<div><b>FakeGPT:</b> ${botReply}</div>`;

  input.value = '';
  chatbox.scrollTop = chatbox.scrollHeight;
}
