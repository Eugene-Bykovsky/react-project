import React from 'react'

export const ArticlesHeadDefault = () => {
    return (
        <thead>
            <tr className={'title-row'}>
                <th className={'title-row__item'}>Название</th>
                <th className={'title-row__item'}>Краткое описание</th>
                <th className={'title-row__item'}>Действия</th>
            </tr>
        </thead>
    )
}

export const ArticlesHeadCreateForm = () => {
    return (
        <thead>
            <tr className={'title-row'}>
                <th className={'title-row__item'}>Название</th>
                <th className={'title-row__item'}>Картинка</th>
                <th className={'title-row__item'}>Описание</th>
                <th className={'title-row__item'}>Текст</th>
                <th className={'title-row__item'}>Категории</th>
                <th className={'title-row__item'}>Действие</th>
            </tr>
        </thead>
    )
}