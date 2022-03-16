import React, { Component } from 'react'
import { Button, Checkbox, Form, FormField } from 'semantic-ui-react'
import { Image, Message } from 'semantic-ui-react'
import { Navigate } from 'react-router-dom'



export default class MovieForm extends Component {
    state = {
        title: this.props.movie ? this.props.movie.title   :"",
        cover: this.props.movie ? this.props.movie.cover   :"",
        errors: "",
        done: false,
        id:this.props.id ? this.props.id : null
    }
 
    render() {
        //console.log("FORM",this.props)
        const handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        const onSubmitFormData = () => {
            const errors = validate();
            this.setState({ errors })
            if (Object.keys(errors).length === 0) {
                this.props.newMovies(this.state)
                this.setState({done:true})
            }


            //console.log(this.state)
            // alert("submit")
        }
        const validate = () => {
            const errMessage = {}
            if (!this.state.title) { errMessage.title = "Can't be blank." }
            if (!this.state.cover) { errMessage.cover = "Can't be blank." }
            return errMessage
        }
        return (
            <div>
                <h2>Add New Movie</h2>
                <Form onSubmit={onSubmitFormData} loading={this.props.newMovieReducer.fetching}>

                    {
                        this.props.newMovieReducer.fetched && this.state.done
                            ? <Navigate to="/movies" />
                            : null
                    }

                    {!this.state.errors.title && !this.state.errors.cover ? "" : <Form.Field><Message negative>
                        <Message.Header>We're sorry we can't apply that discount</Message.Header>
                        <p>Can't be blank</p>
                    </Message> </Form.Field>}

                    <Form.Field error={this.state.errors.title}>
                        <label>Title</label>
                        <input name='title' onChange={handleChange} value={this.state.title} placeholder='Title' />
                    </Form.Field>
                    <Form.Field error={this.state.errors.cover}>
                        <label>Cover URL</label>
                        <input name='cover' onChange={handleChange} value={this.state.cover} placeholder='Cover URL' />
                    </Form.Field>
                    <FormField>
                        <Image src={this.state.cover} size='small' />

                    </FormField>

                    <Button primary type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}