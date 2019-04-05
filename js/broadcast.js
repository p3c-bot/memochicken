var broadcaster = web3.eth.contract(contracts.broadcaster.abi).at(contracts.broadcaster.address);

$('#youtubeComments').attr('src', chatID);


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


var currentBroadcast = ""
function getBroadcast() {
    broadcaster.broadcast.call(function (err, result) {
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

document.querySelector("#done").addEventListener("click", function (e) {
    let message = document.querySelector("#msg").value
    convert(5)
      .then(function (amount) {
        console.log(myCropAddress)
        broadcaster.purchaseBroadcast.sendTransaction(
          message,
          // streamer crop, this is set in stone
          "0x501f0e393F1baaF5BfCC9c6baCF575C9ccb89644",
          myCropAddress, {
            from: web3.eth.accounts[0],
            value: web3.toWei(amount)
          },
          function (error, result) { //get callback from function which is your transaction key
            if (!error) {
              console.log(result);
              playSound('register');
            } else {
              console.log(error);
            }
          })
      })
  })