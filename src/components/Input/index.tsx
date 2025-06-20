import styles from './styles.module.css'

type Input = { /*propriedades*/
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>;

export function Input({ id, type, labelText, ...rest }: Input) {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
		    <input className={styles.input} id={id} type={type} {...rest} />
        </>
       

    );
} 