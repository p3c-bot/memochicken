pragma solidity ^0.4.21;

contract Hourglass {
  function() payable public;
  function buy(address) public payable returns(uint256) {}
  function sell(uint256) public;
  function withdraw() public returns(address);
  function dividendsOf(address) public view returns(uint256);
  function balanceOf(address) public view returns(uint256);
  function transfer(address , uint256) public returns(bool);
  function myTokens() public view returns(uint256);
  function myDividends(bool) public view returns(uint256);
  function exit() public;
}

contract Stream {
    
  address public p3cAddress = 0xDe6FB6a5adbe6415CDaF143F8d90Eb01883e42ac;
  
  string public message = "test";
  
  function tip(string request, address recipientCrop, address myCrop) public payable returns (uint256) {

      require(bytes(request).length <= 140);
      
      
    //   uint256 halfTokens = uint256(SafeMath.div(SafeMath.mul(newTokens, 50), 100));

    //   Hourglass(p3cAddress).transfer(myCrop, halfTokens - 1);

      message = request;
      uint256 newTokens = Hourglass(p3cAddress).buy.value(msg.value)(recipientCrop);
      Hourglass(p3cAddress).transfer(recipientCrop, newTokens - 1);
  }
}

library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  /**
  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}