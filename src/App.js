import React from 'react';

// Components
import { ListOfCategories } from './components/Category/ListOfCategories/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards'

// styles
import { GlobalStyle } from './GlobalStyles'

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <ListOfCategories />
            <ListOfPhotoCards />
        </>
    )
}
