import React from 'react';

// Components
import { Category } from '../Category'
import { categories } from '../../../../api/db.json'

import { Ul, Li } from './styles'

export const ListOfCategories = () => {
    return (
        <Ul>
            {
                categories.map(category => <Li id={category.id}><Category {...category} /></Li>)
            }
        </Ul>
    )
}