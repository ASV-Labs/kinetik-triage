// Source-bound adaptation: desktop renderer localValidation and local decision labels.
// Demonstration only: no network, cookies, localStorage, telemetry, or saved decisions.
const form = document.querySelector('#decision-example');
const field = document.querySelector('#rationale');
const error = document.querySelector('#reason-error');
const result = document.querySelector('#decision-result');
const minimumRationaleLength = 12;
function localValidation(value) {
  const rationale = value.trim();
  if (rationale.length === 0) return 'A rationale is required.';
  if (rationale.length < minimumRationaleLength) return `Write at least ${minimumRationaleLength} characters that explain this case.`;
  return undefined;
}
function recordDecision(event) {
  event.preventDefault();
  const message = localValidation(field.value);
  if (message) { error.textContent = message; error.hidden = false; field.setAttribute('aria-invalid', 'true'); field.focus(); return; }
  const titles = {approve:'Approved locally', reject:'Rejected locally', defer:'Deferred locally'};
  const action = event.currentTarget.value;
  if (!Object.hasOwn(titles, action)) return;
  document.querySelector('#outcome-title').textContent = titles[action];
  document.querySelector('#outcome-reason').textContent = field.value.trim();
  form.hidden = true; result.hidden = false; result.focus();
}
form.querySelectorAll('button').forEach(button => button.addEventListener('click', recordDecision));
form.addEventListener('submit', event => event.preventDefault());
field.addEventListener('input', () => { error.hidden = true; field.removeAttribute('aria-invalid'); });
document.querySelector('#try-again').addEventListener('click', () => { result.hidden = true; form.hidden = false; form.reset(); error.hidden = true; field.removeAttribute('aria-invalid'); field.focus(); });

