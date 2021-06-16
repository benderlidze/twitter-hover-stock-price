chrome.runtime.onMessage.addListener(
    function(ticker, sender, onSuccess) {
        fetch(`https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=price`)
            .then(response => response.json())
            .then(responseText => onSuccess(responseText))
        return true;  // Will respond asynchronously.
    }
);