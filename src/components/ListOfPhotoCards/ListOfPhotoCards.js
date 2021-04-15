import React from "react";
import { PhotoCard } from "../PhotoCard/PhotoCard";
import { gql } from "apollo-boost"; // query how string
import { useQuery } from "@apollo/react-hooks";

// componente de orden superior
// es una funcion que se le envia por parametros un componente y devuelve otro componente.
const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = ({ categoryId }) => {
  console.log("props: ", categoryId);
  const { data, loading, error } = useQuery(getPhotos, {
    variables: {
      categoryId
    }
  });

  if (loading) return "loading";
  if (error) return "Error";
  console.log("data: ", data);

  return (
    <ul>
      {data.photos.map((_) => (
        <PhotoCard key={_.id} id={_.id} src={_.src} />
      ))}
    </ul>
  );
};
