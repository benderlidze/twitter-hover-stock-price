// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {

    const t = e.target
    if (prevDOM != t && t.nodeName == 'A') {
        const text = t.text;
        if (text.charAt(0) === "$") {
            const ticker = text.substring(1)
            console.log('ticker', ticker);
            fetch(`https://serg.one/cors_api.php?query=https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=price`)
                .then(i => i.json())
                .then(i => {
                    console.log('i', i.quoteSummary.result[0].price.regularMarketPrice.raw);
                    const price = i.quoteSummary.result[0].price.regularMarketPrice.raw

                    var span = document.createElement('span');
                    span.style.color = "#e60073";
                    span.textContent = price + " | ";
                    e.target.parentElement.appendChild(span)
                })
        }
        prevDOM = t;
    }

}, false);