import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import Head from 'next/head';
import MenuBar from './MenuBar';
import {
    Button,
    Divider,
    Grid,
    Image,
    List,
    Menu,
    Sidebar,
    Visibility,
    Dropdown
  } from 'semantic-ui-react'

//Layout properly the Header at the top of every page and then the content come afterwards


export default props => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
            </Head>

            <Segment
            inverted
            textAlign='left'
            style={{ minHeight: 440,backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/011/231/538/original/abstract-geometric-background-with-isometric-digital-blocks-blockchain-concept-and-modern-technology-illustration-free-vector.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: '',
            backgroundRepeat: 'no-repeat'}}
            >
            <MenuBar/>
                <Header as='h2' color='blue' style={{ fontSize:'3em', fontWeight:'normal',paddingLeft:'40px',paddingTop:'80px'}} content='Medical Record system'/>
                <Header as='h3' style={{ fontSize:'1.5em', fontWeight:'normal',paddingLeft:'40px'}} content='Ensure that your records are safe and sound'/>
                {/* <Image bordered rounded size='large'src='https://img.freepik.com/free-vector/abstract-technological-background_23-2148897676.jpg?w=900&t=st=1684598604~exp=1684599204~hmac=fec9c792cfc3eca05679b0274684c503189c2ef4fe55cd2973b6046192503e17' style={{ position: 'absolute',top: '30%',left: '70%', width: '300px', height: '300px' }} /> */}
                
            </Segment>
            <Segment style={{ backgroundImage: 'url(https://www.freepnglogos.com/uploads/wave-png/abstract-blue-top-wave-png-transparent-20.png)',backgroundSize: 'cover',backgroundPosition: '',backgroundRepeat: 'no-repeat' }}>
            <Container>
                {props.children}
            </Container>
            </Segment>
        </>
    );
};