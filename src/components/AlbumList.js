import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

const AlbumList = ({ albums, displayAlbum }) => {
  const listItems = albums.map((album, index) => (
    <ListItem key={index}>
      <Button
        alt="Go to detail card"
        onClick={() => {
          displayAlbum(albums[index])
        }}
      >
        {album.title}
      </Button>
    </ListItem>
  ))

  return (
    <Grid container xs={12} justify="center" spacing={24} className="AlbumList">
      <List>{listItems}</List>
    </Grid>
  )
}

export default AlbumList
