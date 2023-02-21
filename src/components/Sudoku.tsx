import {Grid} from "./grid/Grid";
import {useState} from "react";
import {SudokuNumber} from "../common/types";

const getFakeGrid = () => {
    const grid: SudokuNumber[][] = [];
    for (let i = 1; i <= 9; i++) {
        const row: SudokuNumber[] = [];
        for (let j = 1; j <= 9; j++) {
            row.push(j as SudokuNumber);
        }
        grid.push(row);
    }
    return grid;
};

export const Sudoku = () => {
    const [grid, setGrid] = useState<SudokuNumber[][]>(getFakeGrid());

    return (
        <div>
            <Grid grid={grid}/>
        </div>
    );
};
