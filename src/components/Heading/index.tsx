import styles from './styles.module.css';

type HeadingProperty = {
    children: React.ReactNode;
}

export  function Heading({ children }: HeadingProperty) {
    return <h1 className={styles.heading}>{children}</h1>;
}