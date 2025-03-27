'use client';

import Image from 'next/image';
import React from 'react';
import ExampleImage from 'public/images/TelaSistema.webp';

function SingleImageDisplay() {
  return (
    <div className="flex justify-center items-center h-[500px]">
      <Image 
        src={ExampleImage}
        alt="Tela do Sistema"
        height={500} 
        style={{ maxHeight: '500px', width: 'auto' }}
      />
    </div>
  );
}

export default SingleImageDisplay;