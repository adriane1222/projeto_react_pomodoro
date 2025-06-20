import styles from './styles.module.css'

type Button = { /*propriedades*/
    icon: React.ReactNode;
    color?: 'green'| 'red';
} & React.ComponentProps<'button'>;

export function Button({icon, color= 'green', ...props }: Button) {
    return (
        <>
		    <button className={`${styles.button} ${styles[color]}`} {...props}>
                {icon}

            </button>
        </>
       

    );
} 