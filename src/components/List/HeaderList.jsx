import styles from './HeaderList.module.css';

export function HeaderList() {
    return(
        <div className={styles.headerList}>
            <aside className={styles.criadas}>
                <p>Tarefas criadas</p>
                <span>0</span>
            </aside> 
            <aside className={styles.concluidas}>
                <p>Concluídas</p>
                <span>0</span>
            </aside>
        </div>
    );
}