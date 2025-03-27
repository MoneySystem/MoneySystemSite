'use client';
import Check from '@/components/icons/check';
import LinkIcon from '@/components/icons/link-icon';
import LinkedInIcon from '@/components/icons/linked-in-icon';
import WhatsApp from '@/components/icons/whatsapp';
import { copyToClipboard, shareToLinkedIn, shareToWhatsApp } from '@/lib/utils';
import { Tooltip } from '@mui/material';
import React, { useMemo } from 'react';

function Share({ content }: { content: string }) {
  const link = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return window.location.href;
  }, []);
  const [copiedLink, setCopiedLink] = React.useState(false);

  return (
    <div className={'share'}>
      <button onClick={() => shareToWhatsApp(link, content)}>
        <WhatsApp />
      </button>
      <button onClick={() => shareToLinkedIn(link, content)}>
        <LinkedInIcon />
      </button>

      <Tooltip title={copiedLink ? 'Copied!' : 'Copiar link'} placement={'top'}>
        <button
          onMouseLeave={() => {
            setCopiedLink(false);
          }}
          onClick={() => {
            copyToClipboard(window.location.href);
            setCopiedLink(true);
          }}
        >
          {copiedLink ? <Check /> : <LinkIcon />}
        </button>
      </Tooltip>
    </div>
  );
}

export default Share;
