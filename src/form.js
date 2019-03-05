import React, { Fragment } from 'react';
import { MainGrid } from './styles/layout';
import { UserConsumer } from './userCtxt';
import Form from './styles/formStyle';

const formInputs = [
  {
    label: 'Last name',
    type: 'text',
    name: 'lname'
  },
  {
    label: 'Phone',
    type: 'number',
    name: 'phone'
  },
  {
    label: 'Country',
    type: 'text',
    name: 'country'
  }
]

function setFocus(e) {
  const parentNode = e.currentTarget.parentNode;
  parentNode.classList.add('active');
}

function removeFocus(e, sideEffect) {
  if(e.currentTarget.name === 'fname'){
    sideEffect(e.currentTarget.value);
  }

  // if there is no value in input
  if (e.currentTarget.value.length === 0) {
    const parentNode = e.currentTarget.parentNode;
    parentNode.classList.remove('active');
  }
}

const Main = () => (
  <MainGrid>
    <div className="title-container">
      <h1>Your account</h1>
      <p>Tell us a little more about yourself</p>
    </div>
    <div className="border" />
    <Form className="form-container">
      <h3 className="form-title">Personal information</h3>
      <UserConsumer>
        {({username, updateUserNameState}) => {
          return (
            <Fragment>
              <div className="form-inputs active">
                <label className="animate--fast">First name</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="fname"
                  defaultValue={username}
                  onFocus={setFocus}
                  onBlur={e => removeFocus(e, updateUserNameState)} />
              </div>
              {formInputs.map((el, idx) => (
                <div className="form-inputs" key={idx}>
                  <label className="animate--fast">{el.label}</label>
                  <input
                    autoComplete="off"
                    type={el.type}
                    name={el.name}
                    onFocus={setFocus}
                    onBlur={removeFocus}/>
                </div>
              ))}
            </Fragment>
        )}}
      </UserConsumer>

    </Form>
  </MainGrid>
)

export default Main;
