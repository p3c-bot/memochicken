$('#statsContainer').hide();
setStats()
function setStats() {
    $.getJSON("https://api.p3c.io/airdrop/info", function (data) {
		if (data !== null){
			// (New Number - Original Number) ÷ Original Number × 100.
			$('#statsContainer').show();
			P3CSupply = numberWithCommas(Number(data.P3CSupply).toFixed(0))
			// SupplyPercentage = (data.P3CSupply / 204939005.8).toFixed(4) * 100 + "%"

			$("#tokenSupply").replaceWith(P3CSupply)
			// $("#tokenSupplyPercentage").replaceWith(SupplyPercentage)
			
			PriceETC = data.PriceETC.toFixed(4) + " ETC"
			PriceUSD = "$" + data.PriceUSD.toFixed(2)

			$("#priceETC").replaceWith(PriceETC)
			$("#priceUSD").replaceWith(PriceUSD)

			SizeETC = numberWithCommas(data.SizeETC.toFixed(0)) + " ETC"
			SizeUSD = "$" + numberWithCommas(data.SizeUSD.toFixed(0)) + ""

			$("#sizeETC").replaceWith(SizeETC)
			$("#sizeUSD").replaceWith(SizeUSD)
			// $('#createdStats').popup({
			// 	html: 'P3C tokens can <b>only</b> be created by sending Ethereum Classic (ETC) to the contract. There is no central authority that can inflate P3C. Hard cap assumes every ETC possible (210,000,000) is in contract.',
			// 	position: 'bottom center'
			// });
			// $('#priceStats').popup({
			// 	html: 'Current price of a new P3C token. All tokens are denominated in ETC and feed into the locked fund.',
			// 	position: 'bottom center'
			// });
			// $('#sizeStats').popup({
			// 	html: 'P3C uses a peer-reviewed <b>bonding curve</b> algorithm to intelligently distribute funds. These funds are only accessible by P3C participants.',
			// 	position: 'bottom center'
			// });
			if (typeof gtag !== 'undefined'){gtag('event', 'Home', {'event_label': 'Usage', 'event_category': 'LoadHome'});};
		}
	});
}

function getURL(query) {
	var vars = query.split("&");
	var query_string = {};
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = decodeURIComponent(pair[1]);
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(decodeURIComponent(pair[1]));
		}
	}
	return query_string;
}


var masternode = getURL(window.location.search.substring(1)).ref;
localStorage.removeItem("ref");
if (masternode){
	 localStorage.setItem("ref", masternode)
}

if (localStorage.getItem('ref')) {
	$(".dashboard-link").attr("href", "/use.html?ref=" + localStorage.getItem('ref'))
}

// var opts = {
//     clockFace: 'DailyCounter',
//     countdown: true,
//     language: 'Custom'
// };
// var countdown = 1475924400 - ((new Date().getTime())/1000); // from: 10/08/2016 12:00 pm +0100
// countdown = Math.max(1, countdown);
// $('.flip-clock').FlipClock(countdown, opts);
// FlipClock.Lang.Custom = { days:'Dagar', hours:'Tim', minutes:'Min', seconds:'Sek' };
// var opts = {
//     clockFace: 'DailyCounter',
//     // countdown: true,
// };
var startDate = new Date(2018,7,1,19,2); //What date to start counting from
var now = Math.floor(Date.now() / 1000); //Current timestamp in seconds
var clockStart = now - startDate.getTime() / 1000; //What to set the clock at when page loads
console.log(startDate)
// var clock2 = $('.flip-clock').FlipClock(opts).setTime(clockStart); //Start clock

var clock = $('.flip-clock').FlipClock(clockStart, {
	clockFace: 'DailyCounter',
});



    var f = document.createElement('iframe');
    f.src = "https://titanembeds.com/embed/463160028099117059?defaultchannel=463160028644245507&scrollbartheme=light-thin&theme=IceWyvern"; 
    f.width = 700; 
    f.height = 500;
    $('#titan').append(f);