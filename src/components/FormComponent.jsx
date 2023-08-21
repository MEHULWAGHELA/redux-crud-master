import React, { useEffect, useState } from 'react'
import { Hoc } from './Hoc'
import axios from 'axios'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addData, editData, updateData } from '../redux/action/action'
import { Outlet, useNavigate } from 'react-router'

const FormComponent = (props) => {
  let state = useSelector(state => state)
  let [obj, setobj] = useState({ hobbies: '' })
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const setData = () => {
    dispatch(addData(obj))
  }
  useEffect(() => {
    let editobj = state.api.arr.find((x) => x._id == props.param.number)
    if (editobj && editobj.hobbies) {
      editobj.hobbies = editobj.hobbies.split(",")
      setobj({ ...editobj })
      console.log(editobj)
    }
  }, [props.param])

  const updateapi = () => {
    dispatch(updateData(obj))
  }

  const changeData = (e) => {
    if (e.target.name === "hobbies") {
      if (e.target.checked) {
        obj.hobbies = [...obj.hobbies, e.target.value]
      }
      else {
        obj.hobbies = obj.hobbies.filter((x) => !x.includes(e.target.value))
      }
    }
    else {
      obj[e.target.name] = e.target.value
    }
    setobj({ ...obj })
  }

  const submitFunction = (e) => {
    e.preventDefault();
    if (obj._id === undefined) {
      setData()
    }
    else {
      updateapi()
    }
    obj = { hobbies: '' }
    setobj({ ...obj })
    navigate("/table")
  }
  return (
    <div>
      <Row>
        <Outlet />
        <Col xs={8} className="offset-2">
          <Container className="mt-1 py-1 px-4 border border-1 border-black rounded-2 shadow-lg">
            <h1 className="text-center py-3">Student Form</h1>
            <Form onSubmit={(e) => { submitFunction(e) }}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstName" className="fw-600">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.firstName || ''}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName" className="fw-600 ">
                      last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.lastName || ''}

                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="age" className="fw-600 ">
                      Age
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      placeholder=""
                      type="number"
                      className="main"
                      onChange={changeData}
                      value={obj.age || ''}

                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city" className="fw-600 ">
                      City
                    </Label>
                    <select onChange={changeData} value={obj.city || ''} name="city" className="form-select">
                      <option value="surat">Surat</option>
                      <option value="bharuch">Bharuch</option>
                      <option value="vadodara">Vadoadara</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label for="example" className="fw-600 ">
                    Gender
                  </Label>
                  <div className="d-flex">
                    <div>
                      <Input
                        id="exampleCheck3"
                        name="gender"
                        type="radio"
                        className="gender me-2"
                        onChange={changeData}
                        value="Male"
                        checked={obj.gender === "Male" || obj.gender === "male"}
                      />
                      <Label
                        check
                        for="radio"
                        className="px-2"
                      >
                        Male
                      </Label>
                    </div>
                    <div>
                      <Input
                        id="exampleCheck3"
                        name="gender"
                        type="radio"
                        className="gender me-2"
                        onChange={changeData}
                        value="Female"
                        checked={obj.gender === "Female" || obj.gender === "female"}
                      />

                      <Label
                        check
                        for="radio"
                        className="px-2"
                      >
                        Female
                      </Label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="">
                  <Label
                    check
                    for="example"
                    className="fw-600 
                                my-2"
                  >
                    hobbies
                  </Label>
                  <Row className="">
                    <Col xs={3}>
                      <Input
                        id="Travelling"
                        name="hobbies"
                        type="checkbox"
                        className="language me-2"
                        onChange={changeData}
                        value="Travelling"
                        checked={obj.hobbies?.includes('Travelling')}
                      />
                      <Label
                        check
                        for="Travelling"
                        className="px-2"
                      >
                        Travelling
                      </Label>
                    </Col>
                    <Col xs={3}>
                      <Input
                        id="Reading"
                        name="hobbies"
                        type="checkbox"
                        className="language me-2"
                        onChange={changeData}
                        value="Reading"
                        checked={obj.hobbies?.includes('Reading')}
                      />
                      <Label
                        check
                        for="Reading"
                        className="px-2"
                      >
                        Reading
                      </Label>
                    </Col>
                    <Col xs={3}>
                      <Input
                        id="Exersice"
                        name="hobbies"
                        type="checkbox"
                        className="language me-2"
                        onChange={changeData}
                        value="Exersice"
                        checked={obj.hobbies?.includes('Exersice')}
                      />
                      <Label
                        check
                        for="Exersice"
                        className="px-2"
                      >
                        Exersice
                      </Label>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="text-center">
                <button className="my-2 btn btn-secondary submit fs-4">
                  Submit
                </button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Hoc(FormComponent)