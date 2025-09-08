function setupToggleTheme() {
  const toggleTheme = document.querySelector("#toggle-theme");
  const html = document.querySelector("html");

  const click = () => {
    const current = html.getAttribute("dark");
    const value = current === "true" ? "false" : "true";

    html.setAttribute("dark", value);
    document.cookie = `dark=${value}; path=/`;
  };

  toggleTheme.onclick = click;
}
setupToggleTheme();
