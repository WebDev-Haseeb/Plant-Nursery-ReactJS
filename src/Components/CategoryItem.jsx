import { Leaf, Sun, Droplets } from 'lucide-react';

export default function CategoryItem(props) {
    return (
        <>
            <li className="category-item">
                <div className="icon-wrapper">
                    {props.logo === "Leaf" ? (
                        <Leaf className="category-icon" />
                    ) : props.logo === "Sun" ? (
                        <Sun className="category-icon" />
                    ) : (
                        <Droplets className="category-icon" />
                    )}
                </div>
                <div className="category-content">
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>
                </div>
            </li>
        </>
    )
}



