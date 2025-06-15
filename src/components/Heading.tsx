import styles from './Heading.module.css';

type HeadingProperty = {
    children: React.ReactNode;
}

export  function Heading({ children }: HeadingProperty) {
   console.log(children)
    return <h1 className={styles.heading}>{children}</h1>;
}