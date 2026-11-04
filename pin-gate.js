(() => {
  const CORRECT_PIN = "2221";
  const STORAGE_KEY = "seaOfWealthPreviewUnlocked";
  const gate = document.getElementById("pin-gate");
  const form = document.getElementById("pin-gate-form");
  const input = document.getElementById("pin-gate-input");
  const error = document.getElementById("pin-gate-error");
  if (!gate || !form) return;
  // while locked, the page behind the gate can't be reached with the keyboard or a screen reader
  const lockPage = (on) => Array.from(document.body.children).forEach((el) => { if (el !== gate) el.inert = on; });

  const localQaBypass = ["127.0.0.1", "localhost"].includes(location.hostname)
    && new URLSearchParams(location.search).has("qa");

  if (localQaBypass || sessionStorage.getItem(STORAGE_KEY) === "1") {
    gate.hidden = true;
  } else {
    document.body.classList.add("pin-locked");
    lockPage(true);
    input.focus();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim() === CORRECT_PIN) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      gate.hidden = true;
      document.body.classList.remove("pin-locked");
      lockPage(false);
      error.textContent = "";
    } else {
      error.textContent = "Incorrect PIN. Try again.";
      input.value = "";
      input.focus();
    }
  });
})();
