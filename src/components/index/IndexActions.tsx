/* component imports */
import ThemeToggler from '../ui/theme-toggler/ThemeToggler';
import MainButton from '../ui/button/MainButton';

/* other imports */
import styles from './IndexActions.module.css'

const IndexActions = ({
    onActionClick,
    disabled,
} : {
    onActionClick: (action: string) => void,
    disabled: boolean,
}) => {
    return <div className={styles['actions-wrapper']}>
        <ThemeToggler />
        <MainButton type='primary' onClick={() => onActionClick('start')} disabled={disabled}>Start Sort</MainButton>
        <MainButton type='secondary' onClick={() => onActionClick("reset-array")} disabled={disabled}>Reset Array</MainButton>
    </div>
}

export default IndexActions;