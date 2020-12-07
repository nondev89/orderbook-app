import { useSelector } from 'react-redux';

function MarketList() {
  const orderbook = useSelector(state => state.orderbook.data)

  let content = (
    <div> LOADING... </div>
  )

  if (orderbook !== undefined) {
    content = (
      <div> {orderbook.asks[0]} </div>
    )
  
  }

  return (
    <div className="market-list">
      {content}
    </div>
  );
}

export default MarketList;
