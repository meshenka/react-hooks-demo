import React, {useEffect, useState} from 'react';

const AlbumList = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(setAlbums);
  }, [])

  const listItems = albums.map((a) =>
    <li data-id={a.id}>{a.title}</li>
  );

  return (
    <div className="AlbumList">
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default AlbumList;