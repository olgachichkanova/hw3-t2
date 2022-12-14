const Listing = ({items = []}) => {
    let currency = (c) => {
        switch (c) {
            case 'USD':
                return "$"
            case 'EUR':
                return "€"
            default:
                return c
        }
    }
     let level = (q) => {
        if(q <= 10) {
            return "level-low";
        } else if(q > 10 && q <=20) {
            return "level-medium"
        } else {
            return "level-high"
        }
     }
    return (
        <div className="item-list">
            {items.map(item => {
                return (
                item.state === 'active' && <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage?.url_570xN} alt="" />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title?.length < 50 ? item.title : item?.title?.slice(0, 50)+'...'}</p>
                        <p className="item-price">{currency(item.currency_code)}{item.price}</p>
                        <p className={`item-quantity ${level(item.quantity)}`}>{item.quantity}</p>
                    </div>
                </div>)})}
        </div>
    )
}

export default Listing;