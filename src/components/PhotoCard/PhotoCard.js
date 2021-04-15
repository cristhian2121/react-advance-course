import React, { useEffect, useRef, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { ImgWrapper, Img, Button, Article } from "./styles";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNearScreen } from "../hooks/useNearscreen";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [liked, setLiked] = useLocalStorage(`like-${id}`, false);
  const [show, $element] = useNearScreen();

  // Note: Icon is in uppercase because so react understed that
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={$element}>
      {show ? (
        <>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
          <a href={`/detail/${id}`}></a>
        </>
      ) : null}

      <Button onClick={() => setLiked(!liked)}>
        <Icon size="32px" color="#99bc49" /> {likes} likes!
      </Button>
    </Article>
  );
};
