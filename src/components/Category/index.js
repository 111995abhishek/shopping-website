import clothes from './clothes.jpg';
import watches from './watches.jpg';
import './styles.scss';

const ProductCategory = props =>{
    return(
        <div className="productcategory">
            <div className="wrap">
                <div className="item" style={{backgroundImage: `url(${clothes})`}}>
                    <a className="product-title">Apparels Collections</a>
                </div>

                <div className="item" style={{backgroundImage: `url(${watches})`}}>
                    <a className="product-title">Watch Collection</a>
                </div>

            </div>
        </div>
    )
}

export default ProductCategory;