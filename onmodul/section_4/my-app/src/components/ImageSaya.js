import React from 'react';

const ImageSaya = (props) => {
    const angka = Math.floor(Math.random() * props.angka)
    return (
      <img src={`http://api.adorable.io/avatars/70/${angka}`} alt=""/>
    )
  }

export default ImageSaya;