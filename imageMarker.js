// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;


// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
    // console.log('e', e);
    const t = e.target
    if (prevDOM != t && t.nodeName == 'A') {
        const text = t.text;
        if (text.charAt(0) === "$") {
            const ticker = text.substring(1)
            console.log('ticker', ticker);
            fetch(`https://serg.one/cors_api.php?query=https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=price`)
                .then(i => i.json())
                .then(i => {
                    console.log('i', i);
                    const price = i.quoteSummary.result[0].price.regularMarketPrice.raw
                    const exchangeName = i.quoteSummary.result[0].price.exchangeName

                    var span = document.createElement('span');
                    span.style.color = "#e60073";
                    span.textContent = ` $` + price + " | ";
                    e.target.parentElement.appendChild(span)

                    const mouseX = e.pageX;
                    const mouseY = e.pageY;
                    //remove prev div with chart 
                    const s = document.getElementById("chart")
                    if (s) s.remove();
                    const div = document.createElement("div");
                    div.id = "chart"
                    div.style.position = "absolute"
                    div.style.top = (mouseY + 20) + "px"
                    div.style.left = mouseX + "px"
                    div.style.width = "600px";
                    div.style.height = "400px";
                    div.style.padding = "10px";
                    div.style.backgroundColor = "white";
                    div.style.border = "1px solid gray";
                    div.innerHTML = `
                     
                    `;
                    document.body.appendChild(div)
                    new TradingView.widget(
                        {
                            "width": 600,
                            "height": 400,
                            "symbol": exchangeName + ":" + ticker,
                            "interval": "D",
                            "timezone": "Etc/UTC",
                            "theme": "light",
                            "style": "1",
                            "locale": "ru",
                            "toolbar_bg": "#f1f3f6",
                            "enable_publishing": false,
                            "hide_legend": false,
                            "save_image": false,
                            "container_id": "chart"
                        }
                    );

                })
        }
        prevDOM = t;
    }

}, false);

