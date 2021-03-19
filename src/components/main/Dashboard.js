import React from 'react'
import { Header, Icon, Divider, Container, Grid, Image, List } from 'semantic-ui-react'

function  Dashboard({children}) {
    return (
        <>
       
        <Container style={{ margin: 20 }}>

        <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Dashboard</Header.Content>
    </Header>
    
    <div className="heading">
        <h3>hio[ahdfo[aidhfaoisdfhas[oidhfas[iodhf</h3>
    </div>


        <Divider />
        <Grid>
    
                <Grid.Column width={4}>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Semantic UI</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>New York, NY</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='linkify' />
                        <List.Content>
                            <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                        </List.Content>
                    </List.Item>
                </List>
                </Grid.Column>

                <Grid.Column width={9}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
        </Grid>
        {children}
        </Container>
        </>
    )
}

export default Dashboard
