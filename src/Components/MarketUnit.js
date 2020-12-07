
function MarketUnit({pair, orderbook}) {

  const [PRICE, VOLUME, TIMESTAMP] = [0, 1, 2];

  let data = orderbook.data;
  let topAsks = data.asks.slice(0, 3)
  let topAsksDisplayed = topAsks.map((item, index) => { return display(item, index, 'asks') })
  topAsks.reverse()

  let topBids = data.bids.slice(0, 3)
  let topBidsDisiplayed = topBids.slice(0, 3).map((item, index) => { return display(item, index, 'bids')})

  function display(item, index, className) {
      return (
        <div className={className + " row"} key={index}>
          <div className="price">{item[PRICE].substring(0,8)}</div>
          <div className="volume">{item[VOLUME].substring(0,5)}</div>
        </div>
        )
  }

  function calcAverage() {
    let average = (parseFloat(topAsks[0][PRICE])+parseFloat(topBids[0][PRICE]))/2
    return Math.round(average*10000)/10000;
  }

  function calcSpread() {
    let spread = ((parseFloat(topAsks[0][PRICE])-parseFloat(topBids[0][PRICE]))/calcAverage())*100
    return Math.round(spread*10000)/10000;
  }

  return (
    <div className="market-unit">
        <div className="header">
            <div>{pair}</div>
            <div>Speed: {orderbook.updatesPerMinute} ob/min</div>
        </div>
        {topAsksDisplayed}
        <div className="price average">{calcAverage()} {calcSpread()}%</div>
        {topBidsDisiplayed}
    </div>
  );
  
}

export default MarketUnit;
