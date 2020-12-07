import { useSelector } from 'react-redux';

function MarketList() {
  const orderbook = useSelector(state => state.orderbook)

  let content = (
    <div> LOADING... </div>
  )

  if (orderbook !== undefined) {
    content = (
      <div> {Object.keys(orderbook)} </div>
    )
  
  }

  return (
    <div className="market-list">
      {content}
    </div>
  );
}

export default MarketList;
