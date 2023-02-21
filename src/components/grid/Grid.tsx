import styles from './Grid.module.scss';
import {SudokuNumber} from "../../common/types";
import {Cell} from "./Cell";

type GridProps = {
    grid: SudokuNumber[][]
};

export const Grid = ({
    grid
}: GridProps): JSX.Element => {
    return (
        <div className={styles.grid}>
            {
                grid.map(row => (
                    <div className={styles.row}>
                        {
                            row.map((value) => (
                                <Cell isUserInput={false} value={value}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};
