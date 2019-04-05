var broadcast = web3.eth.contract(contracts.broadcast.abi).at(contracts.broadcast.address);


$('#yotubeComments').attr('src', chatID);


var convert = function (amount) {
    return new Promise(function (resolve, reject) {
        fetch("https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD")
            .then(function (res) {
                return res.json()
            })
            .then(function (currency) {
                // ETC Price in cents
                let rate = Number(currency.USD) * 100
                let converted = (amount / rate)
                resolve(converted)
            })
    })
}


var currentBroadcast

function getBroadcast() {
    broadcast.broadcast.call(function (err, result) {
        if (!err) {
            change = (String(currentBroadcast) !== String(result))
            if (change) {
                currentBroadcast = String(result)
                $("#broadcast").replaceWith("<b id='broadcast'>" + currentBroadcast + "</b>")
                $('#broadcast').transition({
                    animation: 'flash',
                    duration: '1s',
                });
            }
        }
    });
}