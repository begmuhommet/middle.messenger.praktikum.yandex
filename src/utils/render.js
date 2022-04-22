export function render(screen) {
  const element = document.getElementById('app');

  if (element) {
    element.innerHTML = screen;
  }
}
