/*
TEAM PLAN:
Cycle 1 (Driver: [Joao]): Extract components, import data, render unstyled cards
Cycle 2 (Driver: [Jasleen]): Build responsive grid layout with Tailwind
Cycle 3 (Driver: [Joao]): Style card details, buttons, typography, and add hover effects

Grid: 1 column mobile, 2 columns tablet, 3 columns desktop
Colors: Dark bg (#1a1a1a), white cards, accent green (#10b981) for buttons
*/


//This functions returns a card item component with title, description, and image
import Image from 'next/image';

export default function CardItem({ title, subtitle, description, imgPath, price, cta }) {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <header>
                <div className="relative h-48 w-full">
                    <Image src={imgPath} alt={title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold dark: text-black">{title}</h3>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
            </header>
            <div className="p-4">
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">${price.toFixed(2)}</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                        {cta}
                    </button>
                </div>
            </div>
        </article>
    );
}