// utils/aside.ts
export function open_aside() {
  const sidepanel = document.getElementById('mySidenav')
  if (sidepanel) sidepanel.style.left = '0'
}
export function close_aside() {
  const sidepanel = document.getElementById('mySidenav')
  if (sidepanel) sidepanel.style.left = '-355px'
}
