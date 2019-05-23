if ("web3" in window){
  var streamContract = web3.eth.contract(contracts.stream.abi).at(contracts.stream.address);
}

var videoID = getUrlVars()["videoID"];
var tipAmount = getUrlVars()["tip"];
var crop = getUrlVars()["crop"]

$.getJSON('https://api.p3c.io/tv/', function (json) {

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

  (params.tipAmount)
  document.querySelector("#done").innerHTML = "<i class='fas'></i>" + "$ " + params.tipAmount / 100 + "</a>"

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
        alert(amount)
        streamContract.tip.sendTransaction(
          message,
          // streamer crop, this is set in stone
          params.streamerAddress,
          myCropAddress, {
            from: web3.eth.accounts[0],
            value: web3.toWei(amount),
            gasPrice: web3.toWei(1, 'gwei')
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


var currentMessage = "Default"

function getMessage() {
  streamContract.message.call(function (err, result) {
    if (!err) {
      change = (String(currentMessage) !== String(result))
      if (change) {
        currentMessage = String(result)
        $("#broadcast").replaceWith("<b id='broadcast' class='count blink_me'>" + currentMessage + "</b>")
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