import React from 'react';
import { Layout, Breadcrumb, Card, Button } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MessageShow from '../components/MessageShow';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;

const Message = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
  
    if (!userId) {
      navigate('/auth/');
    }
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className="p-4">
            <MessageShow />
          </Content>
          <Footer className="text-center bg-gray-200 p-4">Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Message;
