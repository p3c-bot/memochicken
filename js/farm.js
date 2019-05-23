if ("web3" in window){
    var farmContract = web3.eth.contract(contracts.farm.abi).at(contracts.farm.address);
    var p3cContract = web3.eth.contract(contracts.p3c.abi).at(contracts.p3c.address);
    var cropAbi = web3.eth.contract(contracts.crop.abi)
}

var myCropAddress;
var myCropTokens;
var myCropDividends;
var myCropDisabled;

alertify.defaults.notifier.delay = 45

function getMyCrop(onboard) {
    myCropAddress = localStorage.getItem(web3.eth.accounts[0])
    // if we don't have the crop in local storage
    if (myCropAddress == 'null' || myCropAddress == null || myCropAddress == "0x") {
        farmContract.myCrop.call(function (err, result) {
            // if onboard is true and we don't have a crop address already.
            if (onboard == true && (result == '0x0000000000000000000000000000000000000000')) {
                setTimeout(function () {
                    alertify.confirm(
                        'Welcome to P3C',
                        `
                        <h1 id="loginWarning" class="login-warning">Login to Saturn wallet, and refresh!</h1>
                        <p id="agreement" class="agreement">
                        P3C is a public smart contract. Read it <a target="_blank" href="https://blockscout.com/etc/mainnet/address/0xde6fb6a5adbe6415cdaf143f8d90eb01883e42ac/contracts">here</a>. By continuing, you accept that the smart contract will run exactly as written, and that there is <b>no guarantee</b> of profit.
                        To start using P3C, click "Accept" and sign the transaction request.
                        </p>
                        <img id="loginLogo" src="img/etc-logo.png" class="ui image etc-logo center-larger" />
                        `,
                        //if ok deploy the crop
                        function () {
                            if (typeof gtag !== 'undefined') {
                                gtag('event', 'Wallet', {
                                    'event_label': 'Usage',
                                    'event_category': 'NewFarmAgree'
                                });
                            };
                            alertify.success("Please approve the transaction from your wallet to get started.")
                            deployCrop(0, '0x0000000000000000000000000000000000000000', false)
                        },
                        // if cancel disable everything
                        function () {
                            if (typeof gtag !== 'undefined') {
                                gtag('event', 'Wallet', {
                                    'event_label': 'Usage',
                                    'event_category': 'NewFarmDisagree'
                                });
                            };
                            alertify.defaults.notifier.delay = 10000
                            alertify.error('P3C View Mode.')
                        }).set({
                        labels: {
                            ok: 'Accept',
                            cancel: 'Decline'
                        }
                    });
                    //checks if web3 is loaded, but not logged in on saturn
                    if (web3.eth.accounts[0] === undefined) {
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'Wallet', {
                                'event_label': 'Issue',
                                'event_category': 'SaturnLoggedOut'
                            });
                        };
                        $("#loginLogo").attr("src", "img/areugood.png");
                        $("#loginWarning").show();
                        $("#agreement").hide();
                        $('#loginLogo').transition({
                            animation: 'flash',
                            duration: '2s',
                        });
                    }
                }, 1000)
            } else {
                // if we have already made an account but, it just failed to load.
                if (result !== '0x0000000000000000000000000000000000000000') {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'Wallet', {
                            'event_label': 'Usage',
                            'event_category': 'RemoteFarmConnect'
                        });
                    };
                    myCropAddress = result;
                    alertify.success('Connecting to P3C.')
                    localStorage.setItem(web3.eth.accounts[0], result)
                }
            }
        });
    } else {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'Wallet', {
                'event_label': 'Usage',
                'event_category': 'LocalFarmConnect'
            });
        };
    }
}


function getMyCropDividends() {
    farmContract.myCropDividends.call(function (err, result) {
        if (!err) {
            change = (String(myCropDividends) !== String(result))
            myCropDividends = result;
            // if (p3cPriceUSD > 0) {
            //     $("#myDividendsValue").replaceWith("<b id='myDividendsValue'> ($" + (p3cPriceUSD * (web3.fromWei(myCropDividends))).toFixed(3) + ")</b>")
            // }
            if (change) {
                $("#myCropDividends").replaceWith("<b id='myCropDividends'>" + web3.fromWei(myCropDividends).toFixed(8) + " ETC</b>")
                $('#myCropDividends').transition({
                    animation: 'flash',
                    duration: '1s',
                });
            }
        }
    });
}

var myETCValue = 0

function getMyCropTokens() {
    farmContract.myCropTokens.call(function (err, result) {
        if (!err) {
            change = (String(myCropTokens) !== String(result))
            myCropTokens = result;
            if (p3cPriceUSD > 0) {
                $("#myCropValue").replaceWith("<b id='myCropValue'> ($" + (p3cPriceUSD * (web3.fromWei(myCropTokens))).toFixed(3) + ")</b>")
            }
            if (change) {
                $("#myCropTokens").replaceWith("<b id='myCropTokens'>" + numberWithCommas((web3.fromWei(myCropTokens)).toFixed(2)) + "</b>")

                p3cContract.sellPrice(function (e, r) {
                    let sellPrice = web3.fromWei(r)
                    myETCValue = (sellPrice * web3.fromWei(myCropTokens))
                    $('#myETCValue').text(myETCValue.toFixed(1))
                })
                $('#myCropTokens').transition({
                    animation: 'flash',
                    duration: '1s',
                });
            }
        }
    });
}

function getMyCropDisabled() {
    farmContract.myCropDisabled.call(function (err, result) {
        if (!err) {
            myCropDisabled = result;
            if (myCropDisabled == false) {
                $('#autoReinvest').checkbox('set checked');
            } else {
                $('#autoReinvest').checkbox('set unchecked');
            }
        }
    })
}

var p3cPriceUSD = 0;

function getCropInfo(onboard) {
    getMyCrop(onboard)
    getMyCropTokens()
    getMyCropDividends()
}

function deployCrop(amountToBuy, referrer, selfBuy) {
    amount = web3.toWei(amountToBuy)
    farmContract.createCrop.sendTransaction(
        referrer,
        selfBuy, {
            from: web3.eth.accounts[0],
            value: amount,
            gas: 1200011
        },
        function (error, result) { //get callback from function which is your transaction key
            if (!error) {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'Wallet', {
                        'event_label': 'Usage',
                        'event_category': 'NewFarmDeploy'
                    });
                };
                alertify.success("Welcome to P3C! Please wait 30 seconds for your crop to be created.")
                playSound('register');
            } else {
                alertify.error("New account declined. View mode.")
            }
        })
}

function transferAllP3CToCrop() {
    farmContract.myCrop.call(function (err, cropAddress) {
        alert('This is my crop ' + cropAddress)
        p3cContract.myTokens.call(function (err, myTokens) {
            tokens = myTokens.toNumber()
            alert('Move this many tokens' + web3.fromWei(tokens))
            p3cContract.transfer.sendTransaction(
                cropAddress,
                tokens, {
                    from: web3.eth.accounts[0],
                    gas: 1200011
                },
                function (error, result) { //get callback from function which is your transaction key
                    if (!error) {
                        console.log(result);
                    } else {
                        console.log(error);
                    }
                })
        });
    })
}
// This buys P3C from the crop, but with you as the referrer
function buyFromCrop(amountToBuy, referrer) {
    farmContract.myCrop.call(function (err, cropAddress) {
        amount = web3.toWei(amountToBuy)
        cropAbi.at(cropAddress).buy.sendTransaction(
            // your crop is the referrer
            referrer, {
                from: web3.eth.accounts[0],
                value: amount,
                gas: 1200011
            },
            function (error, result) { //get callback from function which is your transaction key
                if (!error) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'Wallet', {
                            'event_label': 'Usage',
                            'event_category': 'BuyP3C',
                            'value': amountToBuy
                        });
                    };
                    alertify.success(amountToBuy + " ETC spent. Waiting for Blockchain.")
                    playSound('register');
                } else {
                    console.log(error);
                }
            })
    })
}

// This buys P3C from the crop, but with you as the referrer
function sellFromCrop(amountToSell) {
    farmContract.myCrop.call(function (err, cropAddress) {
        amount = web3.toWei(amountToSell)
        cropAbi.at(cropAddress).sell.sendTransaction(
            // you are the referer
            amount, {
                from: web3.eth.accounts[0],
                gas: 1200011
            },
            function (error, result) { //get callback from function which is your transaction key
                if (!error) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'Wallet', {
                            'event_label': 'Usage',
                            'event_category': 'SellP3C',
                            'value': amountToSell
                        });
                    };
                    alertify.success(amountToSell + " P3C Sold. Waiting for Blockchain.")
                    console.log(result);
                } else {
                    console.log(error);
                }
            })
    })
}

function reinvestFromCrop(referrer) {
    farmContract.myCrop.call(function (err, cropAddress) {
        cropAbi.at(cropAddress).reinvest.sendTransaction(
            referrer, {
                from: web3.eth.accounts[0],
                gas: 560000
            },
            function (error, result) { //get callback from function which is your transaction key
                if (!error) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'Wallet', {
                            'event_label': 'Usage',
                            'event_category': 'Reinvest'
                        });
                    };
                    alertify.success("Reinvested P3C. Waiting for Blockchain.")
                    console.log(result);
                } else {
                    console.log(error);
                }
            })
    })
}

function withdrawFromCrop() {
    farmContract.myCrop.call(function (err, cropAddress) {
        cropAbi.at(cropAddress).withdraw.sendTransaction({
                from: web3.eth.accounts[0],
                gas: 560000
            },
            function (error, result) { //get callback from function which is your transaction key
                if (!error) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'Wallet', {
                            'event_label': 'Usage',
                            'event_category': 'Withdraw'
                        });
                    };
                    alertify.success("Withdrawing prosperity. Waiting for Blockchain.")
                    console.log(result);
                } else {
                    console.log(error);
                }
            })
    })
}

function transferFromCrop(destination, amountToTransfer) {
    amount = web3.toWei(amountToTransfer)
    farmContract.myCrop.call(function (err, cropAddress) {
        cropAbi.at(cropAddress).transfer.sendTransaction(
            destination,
            amount, {
                from: web3.eth.accounts[0],
                gas: 150000
            },
            function (error, result) { //get callback from function which is your transaction key
                if (!error) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'Wallet', {
                            'event_label': 'Usage',
                            'event_category': 'Transfer'
                        });
                    };
                    alertify.success("Transfering " + amountToTransfer + " P3C to " + destination.substring(0, 7) + "...")
                    console.log(result);
                } else {
                    console.log(error);
                }
            })
    })
}

function setPrice() {
    $.getJSON('https://api.p3c.io/chart/info', function (json) {
        p3cPriceUSD = Number(JSON.parse(JSON.stringify(json)).PriceUSD);
    });
}