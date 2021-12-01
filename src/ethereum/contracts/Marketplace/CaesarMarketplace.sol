// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { CaesarNFT } from "./CaesarNFT.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract CaesarMarketplace {
    using EnumerableSet for EnumerableSet.UintSet; 

    event TradeStatusChange(uint256 ad, bytes32 status);
    event csrNFTOwnershipChanged (
        CaesarNFT csrNFT,
        uint prntId, 
        address ownerBeforeOwnershipTransferred,
        address ownerAfterOwnershipTransferred
    );

    mapping(uint256 => Token) public tokens;
    
    struct Token {
        uint worth;
        address ownerAddress;
        // string status;
    }

    struct Trade {
        address seller;
        // uint256 prntId;  /// csrNFT's token ID
        uint256 price;
        bytes16 status;   /// Open, Cancelled, Executed
    }

    mapping(uint256 => Trade) public trades;  /// [Key]: csrNFT's token ID
    uint256 public tradeCounter;

    mapping(address => EnumerableSet.UintSet) _totalSales;

    CaesarNFT public csrNFT;
    address public admin;

    constructor(CaesarNFT _csrNFT) {
        admin = msg.sender;
        csrNFT = _csrNFT;
        // PRNT_NFT_MARKETPLACE = address(uint160(address(this)));
    }

    /**
     * @notice - This method is only executed when a seller create a new csrNFT
     * @dev Opens a new trade. Puts _tokenId in escrow.
     * @param _tokenId The id for the prntId to trade.
     * @param _price The amount of currency for which to trade the prntId.
     */
    // function openTradeFirstTime(uint256 _tokenId, uint256 _price) external {  
    //     // tokens[_tokenId].price = _price; //**
    //     // tradeCounter += 1;    /// [Note]: New. Trade count is started from "1". This is to align prntId
    //     tokens[_tokenId].ownerAddress = csrNFT.ownerOf(_tokenId);

    //     trades[_tokenId] = Trade({
    //         seller: msg.sender,
    //         // prntId: _tokenId,
    //         price: _price,
    //         status: "Open"
    //     });
    //     _totalSales[msg.sender].add(_tokenId);
    //     csrNFT.transferFrom(msg.sender, address(this), _tokenId);
    //     tradeCounter += 1;  /// [Note]: Original
    //     emit TradeStatusChange(_tokenId, "Open");
    // }

    /**
     * @dev Opens a trade by the seller.
     */
    function openTrade(uint256 _tokenId, uint256 _price) public {
        // updateStatus
        // tokens[_tokenId].status = "Open";

        // Trade memory trade = trades[_tokenId];
        address owner = csrNFT.ownerOf(_tokenId);
        tokens[_tokenId].ownerAddress = owner;
        require(
            msg.sender == owner,
            "Trade can be open only by owner."
        );
        
        //owner opens the token for sale becoming the new/latest seller
        trades[_tokenId].seller = owner;
        // updatePrice in trade
        trades[_tokenId].price = _price;
        //updateStatus
        trades[_tokenId].status = "Open";

        _totalSales[msg.sender].add(_tokenId);

        csrNFT.transferFrom(msg.sender, address(this), _tokenId);
        tradeCounter += 1;  /// [Note]: Original
        emit TradeStatusChange(_tokenId, "Open");
    }

    /**
     * @dev Cancels a trade by the seller.
     */
    function cancelTrade(uint256 _tokenId) public {
        // tokens[_tokenId].status = "Cancelled";
        
        Trade memory trade = trades[_tokenId];
        require(
            msg.sender == trade.seller,
            "Trade can be cancelled only by seller."
        );
        require(trade.status == "Open", "Trade is not Open.");
        csrNFT.transferFrom(address(this), trade.seller, _tokenId);
        // remove from the sales set of the user
        _totalSales[msg.sender].remove(_tokenId);
        trades[_tokenId].status = "Cancelled";
        emit TradeStatusChange(_tokenId, "Cancelled");
    }

    /** 
     * @notice - Buy function is that buy NFT token and ownership transfer. (Reference from IERC721.sol)
     * @notice - msg.sender buy NFT with ETH (msg.value)
    //  * @notice - we have one csrNFT collection with multiple token ids.
     */
    function buyCsrNFT(uint256 _tokenId) public payable {
        Trade memory trade = getTrade(_tokenId);
        require(trade.status == "Open", "Token is not open for sale");
        uint price = trade.price;
        require (msg.value >= price, "msg.value should be equal to the buyAmount");

        address seller = trade.seller;
        /// Bought-amount is transferred into a seller wallet
        payable(trade.seller).transfer(price); 
        
        /// Approve a buyer address as a receiver before NFT's transferFrom method is executed
        // address buyer = msg.sender;
        // uint prntId = 1;  /// [Note]: PrntID is always 1. Because each csrNFT is unique.
        csrNFT.approve(msg.sender, _tokenId); // ??
        
        address ownerBeforeOwnershipTransferred = csrNFT.ownerOf(_tokenId);
        
        /// Transfer Ownership of the csrNFT from a seller to a buyer
        transferOwnershipOfcsrNFT(_tokenId, msg.sender);    
        // csrNFTData.updateOwnerOfcsrNFT(csrNFT, _tokenId, msg.sender);
        // require (_newOwner != address(0), "A new owner address should be not empty");
        tokens[_tokenId].ownerAddress = msg.sender;
        tokens[_tokenId].worth = price;

        // tokens[_tokenId].status = "Cancelled";

        /// Event for checking result of transferring ownership of a csrNFT
        address ownerAfterOwnershipTransferred = csrNFT.ownerOf(_tokenId);
        _totalSales[seller].remove(_tokenId);
        
        // csrNFTData.Prnt memory _prnt = csrNFTData.getPrntByNFTAddress(csrNFT);
        // collections[msg.sender].push(_prnt);
        
        // csrNFTData.addArtist(msg.sender);
        
        emit csrNFTOwnershipChanged(csrNFT, _tokenId, ownerBeforeOwnershipTransferred, ownerAfterOwnershipTransferred);
    }

    /**
     * @dev Executes a trade. Must have approved this contract to transfer the amount of currency specified to the seller. Transfers ownership of the prntId to the filler.
     */
    function transferOwnershipOfcsrNFT(uint256 _tokenId, address _buyer) internal {

        Trade memory trade = getTrade(_tokenId);
        require(trade.status == "Open", "Trade is not Open.");

        // _updateSeller(_tokenId, _buyer);

        csrNFT.transferFrom(address(this), _buyer, _tokenId);
        trades[_tokenId].status = "Executed";
        emit TradeStatusChange(_tokenId, "Executed");
    }

    // function _updateSeller(uint256 _tokenId, address _newSeller) internal {
    //     // Trade storage trade = trades[_prntId];
    //     trades[_tokenId].seller = _newSeller;
    // }


    /**
     * @dev - Returns the details for a trade.
     */
    function getTrade(uint256 _tokenId) public view returns (Trade memory trade) {
        
        return trades[_tokenId];
        //return (trade.seller, trade.prntId, trade.price, trade.status);
    }

    function getSales(address _account) external view returns(uint256[] memory) {
        EnumerableSet.UintSet storage tokenSet = _totalSales[_account];
        uint256[] memory tokenIds = new uint256[] (tokenSet.length());

        for (uint256 i; i < tokenSet.length(); i++) {
            tokenIds[i] = tokenSet.at(i);
        }

        return tokenIds;
    }

    
}