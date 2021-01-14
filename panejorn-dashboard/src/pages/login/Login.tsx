import React from 'react'
import {Form, Input, Button, Row, Col} from 'antd'
import { NavLink as Link, useHistory } from 'react-router-dom';
import Statistic from '../overall-statistic/Overall-statistic';

const layout = {
    labelCol: {span: 3},
    wrapperCol: {span: 19}
}

const tailLayout = {
    wrapperCol: {
      offset: 3,
     span: 19,
    },
  };

const userAccount = {
    username: 'admin',
    password: 'admin'
}

const Login = () => {

    const history = useHistory();
    
    const onFinish = (values: any) => {
        if(values.username === userAccount.username && values.password === userAccount.password)
            history.push('/dashboard/stat')
        else
            return onFinishFailed('username or password not correct');
    }

    const onFinishFailed = (err:any) => {
        return 
    }

    return (
    
        <div className='fullscreen'>
            
            <Row justify='center' align='middle' className='fullscreen'>
                <Col span={10}>
                    <Col span={24} style={{textAlign:'center'}}>
                        <h1> พเนจร </h1>
                    </Col>
                    <Form {...layout}
                        name='loginForm'
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>

                            <Form.Item
                                label='ชื่อผู้ใช้'
                                name='username'
                                rules={[{ required: true, message: 'กรุณากรอกผู้ใช้งาน'}]}>
                                    <Input className='input'/>
                            </Form.Item>

                            <Form.Item
                                label='รหัสผ่าน'
                                name='password'
                                rules={[{required: true, message:'กรุณากรอกรหัสผ่าน'}]}>
                                    <Input.Password className='input'/>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button block type='primary' htmlType='submit' className='gradient-background input'>
                                    ลงชื่อเข้าใช้
                                </Button>

                            </Form.Item>
                        </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login;