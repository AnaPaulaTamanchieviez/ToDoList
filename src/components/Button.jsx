import styles from './Button.module.css';
import {PlusCircle} from '@phosphor-icons/react'



export function Button ({ children, ...rest }) {
    return (
        <button className={styles.button} {...rest}>
        {children}
      </button>
            
        
    );
}