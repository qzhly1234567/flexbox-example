import React, { useCallback, useEffect, useState } from 'react';
import { Affix, Button, Card, Form, Layout, Radio, Switch, Space, Modal, Slider } from 'antd';
import './index.module.less';
import { FormOutlined, PlusSquareOutlined, DeleteOutlined } from '@ant-design/icons';

import { getName, containerStyleList, itemStyleList } from '@/utils';

const { Content, Footer, Sider } = Layout;
const Home: React.FC = () => {

  const marks = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '13',
    14: '14',
    15: '15',
    16: '16',
    17: '17',
    18: '18',
    19: '19',
    20: '20',

  };
  const [visible, setVisible] = useState(true);

  const [nodeList, setNodeList] = useState([
    { name: getName() },
    { name: getName() },
    { name: getName() },
    { name: getName() },
  ]);
  const [modal, contextHolder] = Modal.useModal();

  const addNode = useCallback(() => {
    if (nodeList.length <= 20) {
      setNodeList([...nodeList, { name: getName() }]);
    } else {
      modal.warning({
        title: '最多只能添加20个节点',
      });
    }
  }, [nodeList]);


  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Content style={{ padding: '10px 50px' }}>
          <Layout>

            <Content style={{ padding: '0 10px' }}
                     onMouseEnter={(e) => {
                       e.stopPropagation();
                       // setVisible(false);

                     }}
                     onMouseLeave={(e) => {
                       e.stopPropagation();
                       // setVisible(true);
                     }}
            >
              <Affix offsetTop={10}>
                <Card style={{ height: '100%' }} bodyStyle={{ flexGrow: 11 }}>
                  {
                    nodeList.map((item, index) => {
                      return (
                        <Button
                          style={{ width: '200px' }}
                          type="primary"
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setVisible(false);
                          }}
                          icon={<FormOutlined/>}>
                          {item.name}
                          <Button
                            style={{ width: '50px', height: '40px', position: 'absolute', top: '0', right: '0' }}
                            type="primary"
                            danger
                            key={index}
                            icon={<DeleteOutlined/>}>
                          </Button>


                        </Button>
                      );
                    })
                  }

                  <Button hidden={visible} style={{ width: '200px' }}
                          type="dashed"
                          onClick={addNode}
                          icon={<PlusSquareOutlined/>}>


                  </Button>

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
                    {
                      containerStyleList.map((item, index) => {
                        return <Form.Item
                          label={<div><Switch size={'small'} defaultChecked/> {item.name}:</div>}
                          name="username"
                        >
                          <Radio.Group disabled>
                            {
                              item.options.map((option, index) => {
                                return <Radio value={option} key={index}>{option}</Radio>;
                              })
                            }
                          </Radio.Group>
                        </Form.Item>;
                      })

                    }

                  </Form>
                </Card>
                <Card title={'sdasd'} hidden={visible}>
                  <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                  >
                    {
                      itemStyleList.map((item, index) => {
                        return <Form.Item
                          label={<div><Switch size={'small'} defaultChecked/> {item.name}:</div>}
                          name="username"
                        >
                          <Radio.Group disabled>
                            {
                              item.options.map((option, index) => {
                                return <Radio value={option} key={index}>{option}</Radio>;
                              })
                            }
                          </Radio.Group>
                        </Form.Item>;
                      })
                    }
                  </Form>
                </Card>
              </Space>
            </Sider>
          </Layout>
        </Content>
      </Layout>
      {contextHolder}
    </>
  );
};

export default Home;
