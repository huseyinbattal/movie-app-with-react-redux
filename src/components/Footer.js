import React from 'react'
import {
    Container, Divider, Grid, Header, Image, List, Segment,
} from 'semantic-ui-react'

export default function Footer() {
    return (
        <div>
            <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
                <Container textAlign='center'>
                    <Grid columns={1} divided stackable inverted>
                        <Image centered size='small' src="https://www.pngall.com/wp-content/uploads/2017/05/Copyright-All-Rights-Reserved-Symbol-PNG-Image.png" />
                      
                    </Grid>
                    <br/>
                    {/* <p>Designed & Coded by Fırat DİKMEN</p>
                    <p>Designed by Hüseyin BATTAL</p> */}

                    <Divider inverted section />
                  
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    )
}
