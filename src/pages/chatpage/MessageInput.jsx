import React from 'react';
import { SendOutlined } from '@ant-design/icons';

const MessageInput = () => {
  return (
    <div className="mt-4 flex items-center gap-2">
      <input
        className="w-full border rounded-lg px-4 py-2 text-sm"
        placeholder="What's in your mind?"
      />
      <button className="bg-blue-600 text-white p-2 rounded-lg">
        <SendOutlined />
      </button>
    </div>
  );
};

export default MessageInput;
