if ("web3" in window){
  var broadcaster = web3.eth.contract(contracts.broadcaster.abi).at(contracts.broadcaster.address);
}

var videoID = getUrlVars()["videoID"];
var tipAmount = getUrlVars()["tip"];
var crop = getUrlVars()["crop"]

$.getJSON('https://api.p3c.io/test/', function (json) {

  var params = JSON.parse(JSON.stringify(json));

  // check if any overrides 
  if (videoID && tipAmount && crop){
    params.videoID = videoID
    params.tipAmount = tipAmount
    params.streamerAddress = crop
  }


  var chatID = "https://www.youtube.com/live_chat?v=" + params.videoID + "&embed_domain=p3c.tv"

  $('#done').text(' $' + (Number(params.tipAmount)/100).toFixed(2));

  // iframe init
  var iframe = document.createElement("iframe");
  iframe.src =  ("https://www.youtube.com/embed/" + params.videoID);
  iframe.frameborder = "0"
  iframe.allowfullscreen = "true"
  iframe.scrolling = "no"
  iframe.height = "" + window.innerHeight;
  iframe.width = "" + window.innerWidth;
  document.body.appendChild(iframe)

  $('#youtubeComments').attr('src', chatID);

  // Feed Hide/Show UI
  document.querySelector("#handle").addEventListener("click", function (e) {
    var feed = document.querySelector(".feed")
    feed.classList.toggle("collapsed")
    if (feed.classList.contains("collapsed")) {
      document.querySelector("#handle").innerHTML = "<i class='fas fa-angle-double-down'></i> Chat</a>"
    } else {
      document.querySelector("#handle").innerHTML = "<i class='fas fa-angle-double-up'></i> Hide</a>"
    }
    e.preventDefault()
  })

  document.querySelector("#done").addEventListener("click", function (e) {
    let message = document.querySelector("#msg").value
    convert(params.tipAmount)
      .then(function (amount) {
        console.log(myCropAddress)
        broadcaster.purchaseBroadcast.sendTransaction(
          message,
          // streamer crop, this is set in stone
          params.streamerAddress,
          myCropAddress, {
            from: web3.eth.accounts[0],
            value: web3.toWei(amount),
            gasPrice: web3.toWei('0.000000003')
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
});


var currentBroadcast = ""

function getBroadcast() {
  broadcaster.broadcast.call(function (err, result) {
    if (!err) {
      change = (String(currentBroadcast) !== String(result))
      if (change) {
        currentBroadcast = String(result)
        $("#broadcast").replaceWith("<b id='broadcast' class='count blink_me'>" + currentBroadcast + "</b>")
        $('#broadcast').transition({
          animation: 'flash',
          duration: '1s',
        });
      }
    }
  });
}



//   jsPanel.create({
//     theme:       'primary',
//     headerTitle: 'my panel #1',
//     position:    'center-top 0 58',
//     contentSize: '450 250',
//     content:     '<p>Example panel ...</p>',
//     callback: function () {
//         this.content.style.padding = '20px';
//     },
//     onbeforeclose: function () {
//         return confirm('Do you really want to close the panel?');
//     }
// });


// $("[id=msg]").css(
//   "--yt-live-chat-primary-text-color", "aqua !important")