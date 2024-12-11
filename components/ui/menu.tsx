import React from 'react';
import styles from './Menu.module.css';

type MenuItem = {
    icon: JSX.Element;
    label: string;
    href: string;
};

const menuItems: MenuItem[] = [
    { icon: <span className={styles.menuIcon}>📺</span>, label: 'Live Now', href: '/' },
    { icon: <span className={styles.menuIcon}>👑</span>, label: 'Premium', href: '/premium' },
    { icon: <span className={styles.menuIcon}>▶️</span>, label: 'Video', href: '/video' },
    { icon: <span className={styles.menuIcon}>🎞️</span>, label: 'Reels', href: '/reels' },
    { icon: <span className={styles.menuIcon}>🌐</span>, label: 'Web Stories', href: '/web-stories' },
    { icon: <span className={styles.menuIcon}>📷</span>, label: 'Photo Gallery', href: '/photo-gallery' },
    { icon: <span className={styles.menuIcon}>🎙️</span>, label: 'Podcast', href: '/podcast' },
    { icon: <span className={styles.menuIcon}>🍿</span>, label: 'Movie Review', href: '/movie-review' },
    { icon: <span className={styles.menuIcon}>💬</span>, label: 'Opinion', href: '/opinion' },
];

const Menu: React.FC = () => {
    return (
        <nav className={styles.menu}>
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

export default Menu;