import styles from './Cell.module.scss';
import type {SudokuNumber} from "../../common/types";

type CellProps = {
    isUserInput: boolean,
    value: SudokuNumber
};

export const Cell = ({
    isUserInput,
    value
}: CellProps): JSX.Element => {
    return (
        <div className={styles.cell}>
            {isUserInput ? (
                <input className={styles.input}>{value}</input>
            ) : (
                <div className={styles.display}>{value}</div>
            )}
        </div>
    );
};
