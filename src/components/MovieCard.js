import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button, Icon } from 'semantic-ui-react'

const MovieCard = ({ movie,deleteMovie}) => (
  <Card>
    <Image src={movie.cover} wrapped ui={false} />
    <Card.Content>
      {/* <Card.Header>{movie.title}</Card.Header> */}
      {/* <Card.Meta>
                <span className='date'>Created At {movie.createdAt}</span>
      </Card.Meta> */}
      <Card.Description style={{textAlign:"center", fontWeight:"bold",fontSize:"18px"}}>
      {movie.title}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>

        <Button animated color='red' size='mini' onClick={()=>{deleteMovie(movie.id)}}>
          <Button.Content visible>Del</Button.Content>
          <Button.Content hidden>
            <Icon name="trash" />
          </Button.Content>
        </Button>
        <Button animated color='primary' size='mini' as={Link} to={`/movies/new/${movie.id}`}>
          <Button.Content visible>Edit</Button.Content>
          <Button.Content hidden>
            <Icon name="edit" />
          </Button.Content>
        </Button>
      </div>
    </Card.Content>
  </Card>
)

export default MovieCard