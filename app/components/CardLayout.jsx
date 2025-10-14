//This function renders a grid layout for card items by mapping over the products array and rendering a CardItem for each product array and rendering multiple card items
import { products } from '../data';
import CardItem from './CardItem';
export default function CardLayout() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
                <CardItem key={product.id} {...product} />
            ))}
        </div>
    );
}