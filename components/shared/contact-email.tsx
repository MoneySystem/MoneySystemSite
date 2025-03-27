'use client';

import React from 'react';

function ContactEmail() {
  return (
    <span
      onClick={() => {
        window.location.href = 'mailto:support@moneysystem.com.br';
      }}
      className={'hover:underline'}
    >
      support@moneysystem.com.br
    </span>
  );
}

export default ContactEmail;
