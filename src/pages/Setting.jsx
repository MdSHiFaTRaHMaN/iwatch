import React, { useState } from 'react';
import { Form, Input, Button, message, Card, Divider } from 'antd';
import { 
  MailOutlined, 
  LockOutlined, 
  EyeInvisibleOutlined, 
  EyeTwoTone,
  CheckOutlined,
  SyncOutlined 
} from '@ant-design/icons';
import { FiSettings } from 'react-icons/fi';

const Setting = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('account');

  const onFinish = (values) => {
    setLoading(true);
    console.log('Received values:', values);
    // Simulate API call
    setTimeout(() => {
      message.success('Settings updated successfully!');
      setLoading(false);
    }, 1500);
  };

  const handleResetPassword = () => {
    setLoading(true);
    // Simulate reset password API call
    setTimeout(() => {
      message.success('Password reset link sent to your email!');
      setLoading(false);
    }, 1500);
  };

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <Form
        form={form}
        name="settings_form"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input 
            prefix={<MailOutlined className="text-gray-400 py-2 rounded" />} 
            placeholder="your@email.com" 
          />
        </Form.Item>

        <Divider orientation="left" className="text-gray-500">Password Settings</Divider>

        <Form.Item
          name="currentPassword"
          label="Current Password"
          rules={[{ required: true, message: 'Please input your current password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-400 py-2 rounded" />}
            placeholder="Current password"
            iconRender={(visible) => 
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            { required: true, message: 'Please input your new password!' },
            { min: 8, message: 'Password must be at least 8 characters!' }
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-400 py-2 rounded" />}
            placeholder="New password"
            iconRender={(visible) => 
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm New Password"
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords do not match!');
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-400 py-2 rounded" />}
            placeholder="Confirm new password"
            iconRender={(visible) => 
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-between">
            <Button 
              type="primary" 
              htmlType="submit" 
              icon={<CheckOutlined />}
              loading={loading}
              className='!py-2'
            >
              Save Changes
            </Button>
            
            <Button 
              type="link" 
              onClick={handleResetPassword}
              loading={loading}
              icon={<SyncOutlined />}
            >
              Reset Password
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );

  return (
    <div className="container mx-auto max-w-3xl">
      <Card
        title={
          <div className="flex items-center space-x-2">
            <FiSettings className="text-xl" />
            <span>Account Settings</span>
          </div>
        }
        bordered={false}
        className="shadow-lg rounded-lg"
      >

        {activeTab === 'account' && renderAccountSettings()}
      </Card>
    </div>
  );
};

export default Setting;