if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => {
      console.log('Service Worker terdaftar!');
    })
    .catch((error) => {
      console.log('Gagal daftar SW:', error);
    });
}
