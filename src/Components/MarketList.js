import { useSelector } from 'react-redux';
import MarketUnit from './MarketUnit'

function MarketList() {
  const orderbook = useSelector(state => state.orderbook)

  let loading = (<div></div>)
  if (Object.keys(orderbook).length === 0) {
    loading = (<div> LOADING... </div>)
  } 
  
  
  let items = []
  if (Object.keys(orderbook).length !== 0) {
    let pairs = Object.keys(orderbook)
    for (let i = 0; i < pairs.length; i++) {
      items.push(<MarketUnit key={i} pair={pairs[i]} orderbook={orderbook[pairs[i]]} />)
    }
  }

  return (
    <div className="market-list">
      {loading}
      {items}
    </div>
  );
}

export default MarketList;
