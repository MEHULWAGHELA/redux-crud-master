import React, { useState } from 'react'
import { Hoc } from './Hoc'
import { Table } from 'reactstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../redux/action/action'
import { useNavigate } from 'react-router'

const TableComponents = () => {
  const state = useSelector(state => state)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const deleteapi = (id) => {
    dispatch(deleteData(id))
  }

  const editFunction = (id) => {
    navigate('/form/' + id)
  }

  return (
    <div>
      <Table className="bg-danger">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>City</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.api.arr.map((x, i) => {
            return <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.age}</td>
              <td>{x.city}</td>
              <td>{x.gender}</td>
              <td>{x.hobbies}</td>
              <td>
                <button onClick={() => deleteapi(x._id)} className='me-2 btn text-bg-danger'>Delete</button>
                <button onClick={() => editFunction(x._id)} className='btn text-bg-warning'>Edit</button>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Hoc(TableComponents)