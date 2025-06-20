import styles from './styles.module.css'

type Button = { /*propriedades*/
    icon: React.ReactNode;
} & React.ComponentProps<'button'>;

export function Button({icon, ...props }: Button) {
    return (
        <>
		    <button className={styles.button} {...props}>
                {icon}

            </button>
        </>
       

    );
} 