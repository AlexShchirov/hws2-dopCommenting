import React from 'react'
import arrowUp from '../../icons/Polygon6.png'
import arrowDown from '../../icons/Polygon7.png'
import arrow from '../../icons/arrow.png'
import s from '../../HW15.module.css'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = arrow


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === down) return up; // если текущее значение равно down, возвращаем up
    if (sort === up) return ''; // если текущее значение равно up, возвращаем ''
    return down;
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            
            <img
               id={id + '-icon-' + sort}
               src={icon}
               alt='icon-img'
               className={s.arrow}
            />
           

            {/* {icon}  */}
        </span>
    )
}

export default SuperSort