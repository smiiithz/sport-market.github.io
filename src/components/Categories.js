import React, { useState, useEffect } from 'react'
import { TfiMenu, TfiClose } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const categories = [
        { key: 'all', name: 'Все товары', linkTo: '/all' },
        { key: 'sports', name: 'Спортивный инвентарь', linkTo: '/sports' },
        { key: 'yoga', name: 'Товары для йоги', linkTo: '/yoga'},
        { key: 'running', name: 'Обувь для бега', linkTo: '/running' },
        { key: 'nutrition', name: 'Спортивное питание', linkTo: 'nutrition' },
        { key: 'massage', name: 'Массажеры', linkTo: 'massage' },
        { key: 'bicycle', name: 'Велосипеды', linkTo: 'bicycle' },
    ];
    
    useEffect(() => {
        const handleRouteChange = () => {
            setIsOpen(false);
        };

        navigate(handleRouteChange); 

        return () => {
            setIsOpen(false);
        };
    }, [navigate]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="categories-container">
            <button 
                className={`catalog-button ${isOpen ? 'active' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <TfiClose /> : <TfiMenu />} 
            </button>
            {isOpen && (
                <ul className="categories-list">
                    {categories.map((category) => (
                        <li key={category.key}>
                             <Link 
                                to={category.linkTo} 
                                onClick={handleLinkClick}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Categories