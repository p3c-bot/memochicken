var broadcast = web3.eth.contract(contracts.broadcast.abi).at(contracts.broadcast.address);

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