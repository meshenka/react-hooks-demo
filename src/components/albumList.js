import React, {useEffect, useState} from 'react';

const AlbumList = () => {
  // this functionnal component got states using state hooks 
  const [albums, setAlbums] = useState([])
  const [currentAlbum, setCurrentAlbum] = useState(null)

  // useEffect hook allow to handle side effects inside render()
  //  second param [] tells react to run it only once
  //  in fact it bind the run of the effect on the change
  //  of the named variables in the array
  //  so when you do not specify a variable it will only be run once
  //
  //  If you do not specify the second argument, the effect will
  //  be run on each render of the component (pretty bad in our case
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(setAlbums);
  }, [])

  const loadAlbum = (id)  => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then(response => response.json())
    .then(setCurrentAlbum);
  }

  if(currentAlbum != null) {
    return (
      <>
        <li key={currentAlbum.id}>
          <h2>{currentAlbum.title}</h2>
        </li>
        <li>
          <button onClick={e => {setCurrentAlbum(null)}}>Back</button>
        </li>
      </>
      )
  } else {

    const listItems = albums.map((a) =>
      <li key={a.id}><button onClick={e => {
        loadAlbum(a.id)}
      } >{a.title}</button></li>
    );

    return (
      <div className="AlbumList">
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default AlbumList;
