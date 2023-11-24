const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput);
};

const renderMessageEle = (txt) => {
    const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add("user-message");
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};