import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { GitContext } from '@/lib/hooks/use-git-context';
import { collectEvent, EventName } from '@/lib/collect';

function HeroDesc({ inView }: { inView?: boolean }) {
  const gitData = useContext(GitContext);

  useEffect(() => {
    if (inView) {
      [EventName.homePageMorePlatformsLink, EventName.homePageWhatIsNewLink, EventName.homePageGetTemplatesLink].forEach(
        (eventName) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          collectEvent(eventName, {
            type: 'view',
          });
        }
      );
    }
  }, [inView]);

  const onClick = (eventName: EventName) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    collectEvent(eventName, {
      type: 'click',
    });
  };
}

export default HeroDesc;
