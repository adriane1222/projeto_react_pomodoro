import style from './styles.module.css'

type ContainerProperty = {
    children: React.ReactNode;
}

export function Container({children}: ContainerProperty) { 
   return (
      <div className={style.container}>
         <div className={style.content}>{children}</div>
      </div> 
   );
}