// Element Creation
const main = document.createElement("main");
const mainTitle = document.createElement("h1");
const form = document.createElement("form");
const textArea = document.createElement("textarea");
const button = document.createElement("button");

// Function to createInputContainer according to some params
function createInputContainer(inputType, inputTitle) {
  const inputContainer = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.setAttribute("for", inputTitle);
  label.textContent = inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1);

  input.setAttribute("type", inputType);
  input.setAttribute("name", inputTitle);
  input.setAttribute("id", inputTitle);

  inputContainer.append(label, input);
  return inputContainer;
}

// Set Element Attribute and InnerHTML
main.className = "main-contact";
mainTitle.className = "contact-title";
mainTitle.textContent = "CONTACT US";

form.className = "form";
form.setAttribute("autocomplete", "off");

textArea.setAttribute("rows", "8");
textArea.setAttribute("name", "message");
textArea.setAttribute("id", "message");
textArea.className = "textarea";

const messageContainer = document.createElement("div");
const messageLabel = document.createElement("label");
messageLabel.setAttribute("for", "message");
messageLabel.textContent = "Message";

button.className = "contact-btn";
button.setAttribute("type", "submit");
button.textContent = "SEND";

// Append Element
main.append(mainTitle, form);
messageContainer.append(messageLabel, textArea);
form.appendChild(createInputContainer("text", "name"));
form.appendChild(createInputContainer("email", "Email"));
form.append(messageContainer, button);

// Append to contentContainer
export function appendContact(contentContainer) {
  contentContainer.appendChild(main);
}
