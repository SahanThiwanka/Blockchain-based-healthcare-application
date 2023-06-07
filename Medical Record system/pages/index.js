import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from '../routes';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
  <Container text >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
    <Header
    inverted
      as='h1'
      content='Medical Record System'
      
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginLeft:'-700px' ,
        marginTop: mobile ? '1.5em' : '2em',
        fontFamily:'Georgia',
      }}
    />
    <Header
      as='h2'
      content='Ensure that your records are safe and sound'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginLeft:'-850px' ,
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button style={{marginLeft:'-1100px' ,marginTop:'50px'}} primary size='huge' inverted>
      <Link route='/dashboard'>
        <a className='item'>Go to dashboard</a>
      </Link>
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  onClickedPatient = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }

  onClickedDoctor = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em',backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/011/231/538/original/abstract-geometric-background-with-isometric-digital-blocks-blockchain-concept-and-modern-technology-illustration-free-vector.jpg)',backgroundSize: 'cover',
            backgroundPosition: '',
            backgroundRepeat: 'no-repeat' }}
            vertical
          >
            <Menu size='large' inverted style={{ backgroundColor: 'transparent' , color: 'blue'}}>
              <Link route='/'>
                  <a style={{color:'rgb(33, 133, 208)'}}className='item'>Home</a>
              </Link>

              <Menu.Menu position='right'>
                <Link route='/dashboard'>
                    <a style={{color:'rgb(23, 154, 248)'}}className='item'>Dashboard</a>
                </Link>

                <Link route='/list'>
                    <a style={{color:'rgb(23, 105, 251)'}}className='item'>Records List</a>
                </Link>

                <Dropdown style={{color:'rgb(26, 88, 249)'}}item text='Doctor'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route='/'>
                        <a style={{color:'black'}} onClick={this.onClickedDoctor}>View Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-doctor'>
                        <a style={{color:'black'}}>Edit Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/make-appointment'>
                        <a style={{color:'black'}}>Make Medical Record</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-appointment'>
                        <a style={{color:'black'}}>Update Medical Record</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                <Dropdown style={{color:'rgb(90, 94, 255)'}}item text='Patient'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route='/'>
                        <a style={{color:'black'}} onClick={this.onClickedPatient}>View Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-patient'>
                        <a style={{color:'black'}}>Edit Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/approve-doctor'>
                        <a style={{color:'black'}}>Allow Access</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/revoke-doctor'>
                        <a style={{color:'black'}}>Revoke Access</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={{color:'rgb(152, 101, 247)'}}item text='Register'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route='/register-patient'>
                        <a style={{color:'black'}}>Patient</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/register-doctor'>
                        <a style={{color:'black'}}>Doctor</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Menu.Menu>
            </Menu>    
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  onClickedPatient = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }

  onClickedDoctor = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Link route='/'>
                <a className='item'>Home</a>
            </Link>

            <Link route='/dashboard'>
                <a className='item'>Dashboard</a>
            </Link>
  
            <Link route='/list'>
                <a className='item'>Records List</a>
            </Link>
  
            <Dropdown item text='Doctor'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/'>
                    <a style={{color:'black'}} onClick={this.onClickedDoctor}>View Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-doctor'>
                    <a style={{color:'black'}}>Edit Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/make-appointment'>
                    <a style={{color:'black'}}>Make Appointment</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-appointment'>
                    <a style={{color:'black'}}>Update Appointment</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              
            <Dropdown item text='Patient'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/'>
                    <a style={{color:'black'}} onClick={this.onClickedPatient}>View Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-patient'>
                    <a style={{color:'black'}}>Edit Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/approve-doctor'>
                    <a style={{color:'black'}}>Allow Access</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/revoke-doctor'>
                    <a style={{color:'black'}}>Revoke Access</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Register'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/register-patient'>
                    <a style={{color:'black'}}>Patient</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/register-doctor'>
                    <a style={{color:'black'}}>Doctor</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>                 
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Powered by Ethereum Blockchain
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            This is  a patient-based system where patients have the privilege to access their own health reports and information.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Decentralized health records 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Blockchain provides a secure, transparent, and immutable platform for storing sensitive medical data and ensuring the integrity and privacy of patient information. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://integrisok.com/-/media/Blog/19-April-May-June-July-Aug/Man-at-the-doctors-office.ashx?revision=ccc13a85-78b3-422e-bbc0-e82a7ad64e22' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Read More</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Easy to use, Reliable, Secure"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "One of the Best Blockchain Medical Record Systems available."
            </Header>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
        A Serious Problem with Medical Record Systems
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        In a hospital emergency department (ED), doctors spent 43% of their time entering data. Only 28% of doctors have direct contact with patients. 
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
        Is Blockchain the best way to advance Medical Record Systems?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Blockchain technology has the potential to make data management more secure, transparent, and equitable. Blockchain has significant advantages in distributing data access, control, and ownership to end users, in addition to securely managing data.
        </p>
        <Button as='a' size='large'>
          View Research
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Creator Info</List.Item>
                <List.Item as='a'>Site Details</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Create Blockchain System</List.Item>
                <List.Item as='a'>Store Medical Record</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>How To Store</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
               
              </Header>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout