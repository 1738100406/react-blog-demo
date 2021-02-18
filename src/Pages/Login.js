import React, { useState } from 'react'
import { Card, Input, Button, Spin, Icon } from 'antd'
const Login = () => {
  let [userName, setuserName] = useState()
  let [password, setpassword] = useState()
  let [loading, setLoading] = useState(false)

  let checkLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  return (
    <div className='login-div'>
      <Spin spinning={loading}>
        <Card title='Default size card' style={{ width: '300px', padding: '20px' }}>
          <Input
            onChange={e => {
              setuserName(e.target.value)
            }}
            size='large'
            placeholder='账号'
            prefix={<Icon type='user' />}
          />
          <br />
          <br />
          <Input.Password
            onChange={e => {
              setpassword(e.target.value)
            }}
            size='large'
            placeholder='密码'
            prefix={<Icon type='key' />}
          />
          <br />
          <br />
          <Button onClick={checkLogin} type='primary'>
            Login in
          </Button>
        </Card>
      </Spin>
    </div>
  )
}
export default Login
