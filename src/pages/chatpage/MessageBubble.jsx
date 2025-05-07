import React from 'react';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';

const MessageBubble = ({ sender, content }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-2xl px-4 py-3 rounded-xl ${isUser ? 'bg-[#3A7EFF] text-white' : 'bg-white text-gray-800 border'}`}>
        <div className="flex gap-2 items-start">
          <div className="text-lg">
            {isUser ? <UserOutlined /> : <RobotOutlined />}
          </div>
          <div className="whitespace-pre-wrap text-sm">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
