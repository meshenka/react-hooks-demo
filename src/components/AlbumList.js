import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const AlbumList = ({albums, displayAlbum}) => {
  const listItems = albums.map((album, index) =>
    <ListItem key={index}>
      <button onClick={e => {
        displayAlbum(albums[index])}
      } >{album.title}</button>
    </ListItem>
  )

  return (
    <div className="AlbumList">
      <List>
        {listItems}
      </List>
    </div>
  )
}

export default AlbumList
