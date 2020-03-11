import React, { Component } from 'react'
import ContentComponent from '../content/content.component'
import { TextField, Button } from '@material-ui/core'
import { UserAuthService } from '../../modules/services/user-auth.service'
import './login.scss'

export default class LoginComponent extends Component {
  state = {
    email: '',
    password: '',
  }

  checkEmail() {
    if (
      this.state.email !== 'dude@gmail.com' ||
      this.state.password !== '1234'
    ) {
      alert('Wrong password dude/et')
    }
    return (
      this.state.email === 'dude@gmail.com' && this.state.password === '1234'
    )
  }

  render() {
    return (
      <ContentComponent className="center">
        <div className='login-form'>
          <UserAuthService.Consumer>
            {state => (
              <form
                onSubmit={evt => {
                  evt.preventDefault()
                  state.setState(this.checkEmail())
                }}>
                <TextField
                  onChange={val => this.setState({ email: val.target.value })}
                  label='Email'></TextField>
                <TextField
                  type='password'
                  onChange={val =>
                    this.setState({ password: val.target.value })
                  }
                  label='Password'></TextField>
                <Button type='submit'>Submit</Button>
              </form>
            )}
          </UserAuthService.Consumer>
        </div>
      </ContentComponent>
    )
  }
}
