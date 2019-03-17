var ad = web3.eth.contract(contracts.sponsor.abi).at(contracts.sponsor.address);

$("#purchase").click(function () {
	var imgLink= $("#imgLink").val();
	var text= $("#text").val();
	var hyperlinkText= $("#hyperlinkText").val();
	var hyperlink= $("#hyperlink").val();

	convert(100).then(function(amountToBuy){
		ad.purchaseAd.sendTransaction(
		imgLink,
		text,
		hyperlinkText,
		hyperlink,
		{
			from: web3.eth.accounts[0],
			value: web3.toWei(amountToBuy)
		}, function (error, result) { //get callback from function which is your transaction key
			if (!error) {
				console.log(result);
			} else {
				console.log(error);
			}
		})
	});
})

$("#sample").click(function () {
	var imgLink= $("#imgLink").val();
	var text= $("#text").val();
	var hyperlinkText= $("#hyperlinkText").val();
	var hyperlink= $("#hyperlink").val();

	$( "#sampleAd" ).html('<img src="' + imgLink + '" height="30" width="30"> ' + text + ' <a target="_blank" href="' + hyperlink + '" rel="nofollow" title="Links to an External Advertiser site" target="_blank"> <b>' + hyperlinkText + '</b></a><div id="beacon_2a55ce0186" style="position: absolute; left: 0px; top: 0px; visibility: hidden;"><img src="https://gen.etherscan.io/www/d/lg.php?ebannerid=5&amp;campaignid=5&amp;zoneid=2&amp;loc=https%3A%2F%2Fetherscan.io%2F&amp;cb=2a55ce0186" width="0" height="0" alt="" style="width: 0px; height: 0px;"></div>');

})