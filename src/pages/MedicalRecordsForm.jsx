import React from 'react';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RecordForm from '../components/RecordForm';

const { Content, Footer } = Layout;

const MedicalRecordsForm = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className="p-4">
            <RecordForm />
          </Content>
          <Footer className="text-center bg-gray-200 p-4">Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MedicalRecordsForm;