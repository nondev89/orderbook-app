
function MarketUnit({pair, orderbook}) {

  const [PRICE, VOLUME] = [0, 1];

  let data = orderbook.data;
  let topAsks = data.asks.slice(0, 3)
  let topAsksDisplayed = topAsks.map((item, index) => { return display(item, index, 'asks') })
  topAsks.reverse()

  let topBids = data.bids.slice(0, 3)
  let topBidsDisiplayed = topBids.slice(0, 3).map((item, index) => { return display(item, index, 'bids')})

  function display(item, index, className) {
      return (
        <div className={className + " row"} key={index}>
          <div className="price">{Math.round(parseFloat(item[PRICE])*100000)/100000}</div>
          <div className="volume">{Math.round(parseFloat(item[VOLUME])*100000)/100000}</div>
        </div>
        )
  }

  let obPerMinIssue = orderbook.updatesPerMinute === 0;

  let average = (parseFloat(topAsks[0][PRICE])+parseFloat(topBids[0][PRICE]))/2
  average = Math.round(average*10000)/10000

  let spread = ((parseFloat(topAsks[0][PRICE])-parseFloat(topBids[0][PRICE]))/average)*100
  spread = Math.round(spread*10000)/10000;
  let spreadIssue = spread > 1;

  let issue = obPerMinIssue || spreadIssue;

  return (
    <div className={(issue)? "market-unit issue" : "market-unit"}>
        <div className="header">
            <div>{pair}</div>
            <div className={(obPerMinIssue)? "issue" : ""}>Speed: {orderbook.updatesPerMinute} ob/min</div>
        </div>
        {topAsksDisplayed}
        <div className="price average"><div>{average}</div> <div className={(spreadIssue)? "spread issue" : "spread"}>{spread}%</div></div>
        {topBidsDisiplayed}
    </div>
  );
  
}

export default MarketUnit;
