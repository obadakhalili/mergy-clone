function main() {
  feather.replace();
  
  const $sidebar = document.getElementById("sidebar");
  const $sidebarChildrenWrapper = document.getElementById("sidebarChildrenWrapper");
  const $sidebarOpenBtn = document.getElementById("sidebarOpenBtn");
  const $sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
  
  $sidebarOpenBtn.addEventListener("click", () => {
    $sidebar.classList.add("active");
    $sidebar.classList.remove("w-0");
    setTimeout(() => $sidebarChildrenWrapper.classList.add("active"), 300);
  });

  $sidebarCloseBtn.addEventListener("click", () => {
    $sidebarChildrenWrapper.classList.remove("active");
    $sidebar.classList.add("w-0");
    $sidebar.classList.remove("active");
  });
}

window.addEventListener("load", main);
