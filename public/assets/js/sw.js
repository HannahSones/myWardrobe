// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('serviceWorker.js').then((reg) => {
      console.log('Our service worker file is installed', reg);
    });
  });
}