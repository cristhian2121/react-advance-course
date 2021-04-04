import React, { useEffect, useState } from 'react';

// Components
import { Category } from '../Category'

// Stylus
import { Ul, Li } from './styles'


export const ListOfCategories = () => {

    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false)

    const onScroll = (e) => {
        const isFixed = window.scrollY > 200
        isFixed !== showFixed && setShowFixed(isFixed)
    }

    useEffect(function () {
        fetch('https://pentagram-api-cris.vercel.app/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res)
                console.log('res: ', res);
            })
            .catch(err => console.log('err', err))
    }, [])

    useEffect(function () {
        document.addEventListener('scroll', onScroll)
    })

    const renderList = (fixed) => (
        <Ul className={fixed ? 'fixed' : ''}>
            {
                categories.map(category => <Li id={category.id}><Category {...category} /></Li>)
            }
        </Ul>
    )

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
}