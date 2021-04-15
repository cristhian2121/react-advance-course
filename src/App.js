import React from 'react';

// Components
import { ListOfCategories } from './components/Category/ListOfCategories/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards'
import Logo from './components/Logo'

// styles
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
    return (
        <>
            <Logo />
            <GlobalStyle />
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
        </>
    )
}
