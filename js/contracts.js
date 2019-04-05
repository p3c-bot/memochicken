contracts = {
  "p3c" : {
    "address": "0xDe6FB6a5adbe6415CDaF143F8d90Eb01883e42ac",
    "abi": [ { "constant": false, "inputs": [ { "name": "_referredBy", "type": "address" } ], "name": "buy", "outputs": [ { "name": "", "type": "uint256" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "exit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "reinvest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amountOfTokens", "type": "uint256" } ], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_toAddress", "type": "address" }, { "name": "_amountOfTokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "incomingEthereum", "type": "uint256" }, { "indexed": false, "name": "tokensMinted", "type": "uint256" }, { "indexed": true, "name": "referredBy", "type": "address" } ], "name": "onTokenPurchase", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "tokensBurned", "type": "uint256" }, { "indexed": false, "name": "ethereumEarned", "type": "uint256" } ], "name": "onTokenSell", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "ethereumReinvested", "type": "uint256" }, { "indexed": false, "name": "tokensMinted", "type": "uint256" } ], "name": "onReinvestment", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "ethereumWithdrawn", "type": "uint256" } ], "name": "onWithdraw", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [ { "name": "_customerAddress", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "buyPrice", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokensToSell", "type": "uint256" } ], "name": "calculateEthereumReceived", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ethereumToSpend", "type": "uint256" } ], "name": "calculateTokensReceived", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_customerAddress", "type": "address" } ], "name": "dividendsOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_includeReferralBonus", "type": "bool" } ], "name": "myDividends", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "myTokens", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "sellPrice", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalEthereumBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
  },
  "rainMaker" : {
    "address": "0x2078adfC93C4d059f8D038CD699bacADA37c76e7",
    "abi": [ { "constant": false, "inputs": [ { "name": "_playerAddress", "type": "address" } ], "name": "reinvest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": true, "inputs": [], "name": "contractRatio", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currentP3CAddress", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "myDividends", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "myTokens", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "newBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "oldBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "oldDiviesAddress", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "oldP3CAddress", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
  },
  "divies" : {
    "address": "0xd1A231ae68eBE7Aec3ECDAEAC4C0776eB525D969",
    "abi" : [ { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "distribute", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "pusher", "type": "address" }, { "indexed": false, "name": "startingBalance", "type": "uint256" }, { "indexed": false, "name": "finalBalance", "type": "uint256" }, { "indexed": false, "name": "compressedData", "type": "uint256" } ], "name": "onDistribute", "type": "event" }, { "constant": true, "inputs": [], "name": "balances", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "pushers_", "outputs": [ { "name": "tracker", "type": "uint256" }, { "name": "time", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pusherTracker_", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
  },
  "farm" : {
    "address": "0x93123bA3781bc066e076D249479eEF760970aa32",
    "abi": [ { "constant": false, "inputs": [ { "name": "_playerAddress", "type": "address" }, { "name": "_selfBuy", "type": "bool" } ], "name": "createCrop", "outputs": [ { "name": "", "type": "address" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": false, "name": "crop", "type": "address" } ], "name": "CropCreated", "type": "event" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "crops", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "myCrop", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "myCropDisabled", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "myCropDividends", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "myCropTokens", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "p3cAddress", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
  },
  "crop" : {
    "abi": [ { "constant": false, "inputs": [ { "name": "_playerAddress", "type": "address" } ], "name": "buy", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_disabled", "type": "bool" } ], "name": "disable", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "exit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_playerAddress", "type": "address" } ], "name": "reinvest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amountOfTokens", "type": "uint256" } ], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_toAddress", "type": "address" }, { "name": "_amountOfTokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "newOwner", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": true, "inputs": [ { "name": "_includeReferralBonus", "type": "bool" } ], "name": "cropDividends", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "cropTokens", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "disabled", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
  },
  "sponsor" : {
    "address": "0x9a9716772c5f43Dc050Cf9E9eA3a531D55a0a31e",
    "abi": [{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"purchaseTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"globalAd","outputs":[{"name":"image","type":"string"},{"name":"text","type":"string"},{"name":"go_text","type":"string"},{"name":"go_link","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"calculatePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"purchasePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"defaultPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"image","type":"string"},{"name":"text","type":"string"},{"name":"go_text","type":"string"},{"name":"go_link","type":"string"}],"name":"purchaseAd","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
  },
  "oldP3C" : {
    "address": "0xdf9aac76b722b08511a4c561607a9bf3afa62e49",
    "abi": [ { "constant": true, "inputs": [ { "name": "_customerAddress", "type": "address" } ], "name": "dividendsOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ethereumToSpend", "type": "uint256" } ], "name": "calculateTokensReceived", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokensToSell", "type": "uint256" } ], "name": "calculateEthereumReceived", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "onlyAmbassadors", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "administrators", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "sellPrice", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "stakingRequirement", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_includeReferralBonus", "type": "bool" } ], "name": "myDividends", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalEthereumBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_customerAddress", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amountOfTokens", "type": "uint256" } ], "name": "setStakingRequirement", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "buyPrice", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_identifier", "type": "bytes32" }, { "name": "_status", "type": "bool" } ], "name": "setAdministrator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "myTokens", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "disableInitialStage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_toAddress", "type": "address" }, { "name": "_amountOfTokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_symbol", "type": "string" } ], "name": "setSymbol", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" } ], "name": "setName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amountOfTokens", "type": "uint256" } ], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "exit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_referredBy", "type": "address" } ], "name": "buy", "outputs": [ { "name": "", "type": "uint256" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "reinvest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "incomingEthereum", "type": "uint256" }, { "indexed": false, "name": "tokensMinted", "type": "uint256" }, { "indexed": true, "name": "referredBy", "type": "address" } ], "name": "onTokenPurchase", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "tokensBurned", "type": "uint256" }, { "indexed": false, "name": "ethereumEarned", "type": "uint256" } ], "name": "onTokenSell", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "ethereumReinvested", "type": "uint256" }, { "indexed": false, "name": "tokensMinted", "type": "uint256" } ], "name": "onReinvestment", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "ethereumWithdrawn", "type": "uint256" } ], "name": "onWithdraw", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Transfer", "type": "event" } ]
  },
  "broadcaster" : {
    "address": "0x6473e1Ee3740668057647E286D927c48829F07Ba",
    "abi": [{"type":"function","stateMutability":"payable","payable":true,"outputs":[{"type":"uint256","name":""}],"name":"purchaseBroadcast","inputs":[{"type":"string","name":"request"},{"type":"address","name":"recipientCrop"},{"type":"address","name":"myCrop"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":""}],"name":"broadcast","inputs":[],"constant":true}]
  }
}