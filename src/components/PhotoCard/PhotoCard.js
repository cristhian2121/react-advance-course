import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

  const $article = useRef(null)
  const [show, setShow] = useState(false)
  
  useEffect(function () {
    // use interception observe
    const observer$ = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        // if the image is in viwwpor unsuscribe observer for improve performance
        observer$.disconnect()
        console.log('show: ', show);
      }
    })
    observer$.observe($article.current)
  }, [$article])

  return (
    <Article ref={$article}>
      {
        show ?
          <>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
            <a href={`/detail/${id}`}>
            </a>
          </>
        : null
      }

      <Button>
        <MdFavoriteBorder size='32px' /> {likes} likes!
      </Button>
    </Article>
  )
}