function setupTheme() {
  const html = document.querySelector("html");
  const stored = document.cookie.split(";")[0].split("=");

  if (stored[0] === "dark") {
    html.setAttribute("dark", stored[1]);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute("dark", "true");
    document.cookie = "dark=true; path=/";
  }
}
setupTheme();

// Delete cookie
// document.cookie = "dark=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";