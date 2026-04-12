import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}


export const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (newPage: number) => {
        onChange(newPage, itemsCountForPage)
    }

    const onChangeSelect = (value: number) => {
        onChange(1, value)
    }

    const pages = []
    for (let i = 1; i <= lastPage; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagination}>
            <span id={id + '-pagination'}>
                {pages.map(p => (
                    <button
                        key={p}
                        id={id + '-page-' + p}
                        onClick={() => onChangeCallback(p)}
                        className={page === p ? s.activePage : s.pageButton}
                    >
                        {p}
                    </button>
                ))}
            </span>

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}
