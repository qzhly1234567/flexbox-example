import React, { useCallback, useEffect, useState } from 'react';
import { Affix, Button, Card, Form, Layout, Radio, Switch, Space } from 'antd';
import './index.module.less';
import { FormOutlined, PlusSquareOutlined } from '@ant-design/icons';

import { getName } from '../../utils';

const { Content, Footer, Sider } = Layout;


const Home: React.FC = () => {

  const [visible, setVisible] = useState(true);

  const [nodeList, setNodeList] = useState([
    { name: getName() },
    { name: getName() },
    { name: getName() },
    { name: getName() },
  ]);


  const addNode = useCallback(() => {
    setNodeList([...nodeList, { name: getName() }]);
  }, [nodeList]);


  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Content style={{ padding: '10px 50px' }}>
          <Layout>

            <Content style={{ padding: '0 10px' }}
                     onMouseEnter={(e) => {
                       e.stopPropagation();
                       setVisible(false);

                     }}
                     onMouseLeave={(e) => {
                       e.stopPropagation();
                       setVisible(true);
                     }}
            >
              <Affix offsetTop={10}>
                <Card style={{ height: '100%' }}>
                  {
                    nodeList.map((item, index) => {
                      return (
                        <Button
                          style={{ width: '200px' }}
                          type="primary"
                          icon={<FormOutlined/>}>
                          {item.name}
                        </Button>
                      );
                    })
                  }

                  <Button hidden={visible} style={{ width: '200px' }}
                          type="dashed"
                          onClick={addNode}
                          icon={<PlusSquareOutlined/>}></Button>

                </Card>
              </Affix>

            </Content>

            <Sider width={'30%'}>
              <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <Card>
                  <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                  >
                    <Form.Item
                      label={<div><Switch size={'small'} defaultChecked/> display:</div>}
                      name="username"
                    >
                      <Radio.Group>
                        <Radio value={'flex'}>flex</Radio>
                        <Radio value={'inline-flex'}>inline-flex</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      label={<div><Switch size={'small'} defaultChecked/> flex-direction:</div>}
                      name="flex-direction:"
                    >
                      <Radio.Group>
                        <Radio value={'row'}>row</Radio>
                        <Radio value={'row-reverse'}>row-reverse</Radio>
                        <Radio value={'column'}>column</Radio>
                        <Radio value={'column-reverse'}>column-reverse</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      label={<div><Switch size={'small'} defaultChecked/> flex-wrap</div>}
                      name="flex-wrap:"
                    >
                      <Radio.Group>
                        <Radio value={'wrap'}>wrap</Radio>
                        <Radio value={'nowrap'}>nowrap</Radio>
                        <Radio value={'wrap-reverse'}>wrap-reverse</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Form>
                </Card>
                <Card title={'sdasd'} hidden={visible}>
                  <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                  >
                    <Form.Item
                      label={<div><Switch size={'small'} defaultChecked/> display:</div>}
                      name="username"
                    >
                      <Radio.Group>
                        <Radio value={'flex'}>flex</Radio>
                        <Radio value={'inline-flex'}>inline-flex</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      label={<div><Switch size={'small'} defaultChecked/> flex-direction:</div>}
                      name="flex-direction:"
                    >
                      <Radio.Group>
                        <Radio value={'row'}>row</Radio>
                        <Radio value={'row-reverse'}>row-reverse</Radio>
                        <Radio value={'column'}>column</Radio>
                        <Radio value={'column-reverse'}>column-reverse</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      label={<div><Switch size={'small'} defaultChecked/> flex-wrap</div>}
                      name="flex-wrap:"
                    >
                      <Radio.Group>
                        <Radio value={'wrap'}>wrap</Radio>
                        <Radio value={'nowrap'}>nowrap</Radio>
                        <Radio value={'wrap-reverse'}>wrap-reverse</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Form>
                </Card>
              </Space>
            </Sider>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
