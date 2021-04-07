import clothes from './clothes.jpg';
import watches from './watches.jpg';
import shoes from './shoes.jpg';
import sunglasses from './sunglasses.jpg';
import './styles.scss';

const ProductCategory = props => {
    return (
        <div className="productcategory">
            <div className="universal-container">
                <div className="wrap">
                    <div className="item" style={{ backgroundImage: `url(${clothes})` }}>
                        <a className="product-title">Apparels Collections</a>
                    </div>

                    <div className="item" style={{ backgroundImage: `url(${watches})` }}>
                        <a className="product-title">Watch Collection</a>
                    </div>

                </div>
                <div className="wrap">
                    <div className="item" style={{ backgroundImage: `url(${shoes})` }}>
                        <a className="product-title">shoes Collections</a>
                    </div>

                    <div className="item" style={{ backgroundImage: `url(${sunglasses})` }}>
                        <a className="product-title">sunglasses Collection</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCategory;