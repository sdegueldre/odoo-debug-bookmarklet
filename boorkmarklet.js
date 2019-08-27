javascript: (
  function () {
    const url = new URL(window.location);
    url.search = '?debug&' + (window.location.search || '?').slice(1);
    window.location.href = url.href;
  }
)();
