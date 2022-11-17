import React, { Component } from 'react'
import { Card, Input, Space} from "antd";
import 'antd/dist/antd.css';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { DisplayButton } from '../library/Button';
class Login extends Component {
    state={
        email:"",
        password:""
    }
    

  render() {
    return (
      <div>
        <Card
          bordered={true}
          style={{
            width: "27%",
            backgroundColor: " #4169E1",
            marginLeft: "35%",
            marginTop: "10%",
          }}
        >
          <Space direction="vertical" >
            <Input
              size="large"
              placeholder="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              suffix={<UserOutlined style={{ color: "gray" }} />}
              style={{ width: "100%", marginLeft: "45%" }}
            />
            <Input.Password
              placeholder="password"
              size="large"
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              style={{ width: "100%", marginLeft: "45%" }}
            />

            <DisplayButton
              type="primary"
              disabled={false}
              text={"Connect"}
              onPress={() => this.handleConnect()}
              style={{ width: "100%", height: 50, marginLeft: "45%", paddingTop: "6px" }}
            />
          </Space>
        </Card>
      </div>
    )
  }
}
export default Login