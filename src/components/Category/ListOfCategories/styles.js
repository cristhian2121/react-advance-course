import styled from 'styled-components'

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    overflow: scroll;
    width: 100%;
    &.fixed {
        position: fixed;
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20 px rgba(0,0,0,0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        right: 0;
        top: -20px;
        transform: scale(.6);
        z-index: 1;
    }
`

export const Li = styled.li`
    padding: 0 8px;
`