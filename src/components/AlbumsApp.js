import React, {useEffect, useState} from 'react'
import Album from './Album'
import AlbumList from './AlbumList'

const AlbumsApp = () => {
  const [albums, setAlbums] = useState([])
  const [currentAlbum, setCurrentAlbum] = useState(null)

  // useEffect hook allow to handle side effects inside render()
  // second param [] tells react to run it only once
  // in fact it bind the run of the effect on the change
  // of the named variables in the array
  // so when you do not specify a variable it will only be run once
  //
  // If you do not specify the second argument, the effect will
  // be run on each render of the component (pretty bad in our case
  useEffect(() => {
    console.log('call effect')
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(response => response.slice(0, 15))
    .then(setAlbums)
  }, [])

  const displayAlbum = (album) => {
    setCurrentAlbum(album)
  } 

  const displayList = () => {
    setCurrentAlbum(null)
   
  }

  if(currentAlbum != null) {
    return (
        <Album album={currentAlbum} callback={displayList}></Album>
      )
  } else {

    return (
      <AlbumList albums={albums} displayAlbum={displayAlbum}></AlbumList>
    )
  }
}

export default AlbumsApp