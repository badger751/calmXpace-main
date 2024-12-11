import React from 'react';
import styles from './Menu.module.css';

type MenuItem = {
    icon: JSX.Element;
    label: string;
    href: string;
};

interface MenuProps {
    className?: string; // Allow optional custom className prop
}

const menuItems: MenuItem[] = [
    { icon: <span className={styles.menuIcon}></span>, label: 'Loan calculate', href: '/' },
    { icon: <span className={styles.menuIcon}></span>, label: 'EMI calculate', href: '/premium' },
    { icon: <span className={styles.menuIcon}></span>, label: 'Edu. Loan', href: '/video' },
    { icon: <span className={styles.menuIcon}></span>, label: 'Age calculate', href: '/reels' },
    { icon: <span className={styles.menuIcon}></span>, label: 'Car EMI calc.', href: '/web-stories' },
    { icon: <span className={styles.menuIcon}></span>, label: 'Petrol Prices', href: '/photo-gallery' },
    { icon: <span className={styles.menuIcon}></span>, label: 'Diesel Prices', href: '/podcast' },
    { icon: <span className={styles.menuIcon}></span>, label: 'Gold Prices', href: '/movie-review' },
    { icon: <span className={styles.menuIcon}></span>, label: 'Silver Prices', href: '/opinion' },
];

const Menu2: React.FC<MenuProps> = ({ className }) => {
    return (
        <nav className={`${styles.menu} ${className}`}>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className={styles.menuItem}>
                            {item.icon}
                            <span>{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu2;
