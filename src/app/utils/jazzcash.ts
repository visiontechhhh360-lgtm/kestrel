// Submits a hidden form to JazzCash's hosted payment page.
// All params (including the secure hash) come from the /api/jazzcash backend.
export function submitJazzCashForm(gatewayUrl: string, params: Record<string, string>): void {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = gatewayUrl;

  Object.entries(params).forEach(([key, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
}
