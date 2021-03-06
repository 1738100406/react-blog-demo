import React, { useState } from 'react'
import '../static/css/adminindex.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const AdminIndex = () => {
  let [collapsed, setcollapsed] = useState(false)

  let onCollapse = collapsed => {
    setcollapsed(collapsed)
  }
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1'>
              <Icon type='pie-chart' />
              <span>工作台</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='desktop' />
              <span>添加文章</span>
            </Menu.Item>
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' />
                  <span>文章管理</span>
                </span>
              }
            >
              <Menu.Item key='3'>文章列表</Menu.Item>
              <Menu.Item key='4'>留言管理</Menu.Item>
            </SubMenu>
            <Menu.Item key='9'>
              <Icon type='file' />
              <span>留言管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>文章管理</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>后台文章管理</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  )
}
export default AdminIndex
