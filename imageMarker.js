// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;



// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
//  console.log('e', e);
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
                    let exchangeName = i.quoteSummary.result[0].price.exchangeName
                    if (exchangeName.toLowerCase().includes("nasdaq")) {
                        exchangeName = "NASDAQ"
                    }

                    var span = document.createElement('span');
                    span.style.color = "#e60073";
                    span.textContent = ` $` + price + " | ";
                    e.target.parentElement.appendChild(span)

                    const mouseX = e.clientX;
                    const mouseY = e.clientY;
                    // const mouseX = e.pageX;
                    // const mouseY = e.pageY;

                    //remove prev div with chart 
                    const s = document.getElementById("chart")
                    if (s) s.remove();
                    
                    const div = document.createElement("div");
                    div.id = "chart"
                    div.style.position = "fixed"
                    div.style.top = (mouseY + 20) + "px"
                    div.style.left = mouseX + "px"
                    div.style.width = "600px";
                    div.style.height = "430px";
                    div.style.padding = "10px";
                    div.style.backgroundColor = "white";
                    div.style.border = "1px solid gray";
                    div.innerHTML = `<div id="chartHeader" style="cursor:move;background-color: #2196F3;"><button id="closeChart">Close</button></div>
                                        <div id="chartDiv"></div>`;

                    document.body.appendChild(div)
                    new TradingView.widget(
                        {
                            "width": 600,
                            "height": 400,
                            "symbol": exchangeName + ":" + ticker,
                            "interval": "30",
                            "timezone": "Etc/UTC",
                            "theme": "light",
                            "style": "1",
                            "locale": "ru",
                            "toolbar_bg": "#f1f3f6",
                            "enable_publishing": false,
                            "allow_symbol_change": true,
                            "hide_legend": false,
                            "save_image": false,
                            "container_id": "chartDiv"
                        }
                    );

                    // Make the DIV element draggable:
                    dragElement(document.getElementById("chart"));

                })
        }
        prevDOM = t;
    }

}, false);

document.addEventListener("click", (e) => {
    console.log('e', e);
    if (e.target.id === "closeChart") {
        document.getElementById("chart").remove()
    }
})


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        //elmnt.style.position = "fixed";
    }
}

