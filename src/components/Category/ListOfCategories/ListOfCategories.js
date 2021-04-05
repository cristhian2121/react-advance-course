import React, { useEffect, useState } from 'react';

// Components
import { Category } from '../Category'

// Stylus
import { Ul, Li } from './styles'

// Good practices custom hook
export function useCategoriesData() {    
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(function () {
        fetch('https://pentagram-api-cris.vercel.app/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res)
                setLoading(false)
                console.log('res: ', res);
            })
            .catch(err => console.log('err', err))
    }, [])

    return { categories, loading }
}


export const ListOfCategories = () => {

    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    const onScroll = (e) => {
        const isFixed = window.scrollY > 200
        isFixed !== showFixed && setShowFixed(isFixed)
    }



    useEffect(function () {
        document.addEventListener('scroll', onScroll)
        // Useeffect can return a FUNCTION
        return () => document.removeEventListener('scroll', onScroll)
    })

    const renderList = (fixed) => (
        <Ul className={fixed ? 'fixed' : ''}>
            {
                categories.map(category => <Li id={category.id}><Category {...category} /></Li>)
            }
        </Ul>
    )

    // loading action
    if(loading){
        return "Cargando"
    }

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
    
}