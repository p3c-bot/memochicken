var broadcaster = web3.eth.contract(contracts.broadcaster.abi).at(contracts.broadcaster.address);

$.getJSON('http://api.p3c.io/test/', function (json) {

  var params = JSON.parse(JSON.stringify(json));
  console.log(params)


  var chatID = "https://www.youtube.com/live_chat?v=" + params.videoID + "&embed_domain=p3c.tv"

  document.addEventListener("DOMContentLoaded", function () {
    // iframe init
    var iframe = document.createElement("iframe");
    iframe.src = ("https://www.youtube.com/embed/" + params.videoID);
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

$.fn.draggable = function(){
  var $this = this,
  ns = 'draggable_'+(Math.random()+'').replace('.',''),
  mm = 'mousemove.'+ns,
  mu = 'mouseup.'+ns,
  $w = $(window),
  isFixed = ($this.css('position') === 'fixed'),
  adjX = 0, adjY = 0;

  $this.mousedown(function(ev){
      var pos = $this.offset();
      if (isFixed) {
          adjX = $w.scrollLeft(); adjY = $w.scrollTop();
      }
      var ox = (ev.pageX - pos.left), oy = (ev.pageY - pos.top);
      $this.data(ns,{ x : ox, y: oy });
      $w.on(mm, function(ev){
          ev.preventDefault();
          ev.stopPropagation();
          if (isFixed) {
              adjX = $w.scrollLeft(); adjY = $w.scrollTop();
          }
          var offset = $this.data(ns);
          $this.css({left: ev.pageX - adjX - offset.x, top: ev.pageY - adjY - offset.y});
      });
      $w.on(mu, function(){
          $w.off(mm + ' ' + mu).removeData(ns);
      });
  });

  return this;
};

$("[id=msg]").css(
  "--yt-live-chat-primary-text-color", "aqua !important")
