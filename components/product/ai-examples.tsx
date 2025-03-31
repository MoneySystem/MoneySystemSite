'use client';
import GetAnswer from '@/assets/images/product/get-answer.png';
import WriteBetter from '@/assets/images/product/write-better.png';
import AutofillTables from '@/assets/images/product/autofill-tables.png';
import AutomateIcon from '@/components/product/automate-icon';
import GetAnswersIcon from '@/components/product/get-answers-icon';
import WriteBetterIcon from '@/components/product/write-better-icon';
import { TabPanel } from '@/components/shared/tab-panel';
import { useAutoPlay } from '@/lib/hooks/use-auto-play';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useMemo } from 'react';

function AiExamples() {
  const [value, setValue] = React.useState('write');
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabOptions = useMemo(() => {
    return [
      { value: 'get', label: 'Garantias', icon: <GetAnswersIcon /> },
      { value: 'write', label: 'Previsão de Vendas', icon: <WriteBetterIcon /> },
      { value: 'auto', label: 'Relatórios', icon: <AutomateIcon /> },
    ];
  }, []);

  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const { start, stop } = useAutoPlay({
    options: tabOptions,
    onChange: setValue,
  });

  useEffect(() => {
    if (!inView) {
      stop();
    } else {
      start();
    }
  }, [inView, start, stop]);

  return (
    <div ref={ref} className={'ai-examples'}>
      <MuiTabs value={value} onChange={handleChange}>
        {tabOptions.map((tab) => (
          <MuiTab
            onClick={() => start()}
            className={`ai-example-tab ${value === tab.value ? 'selected' : ''}`}
            key={tab.value}
            value={tab.value}
            label={<span className={'tab-label'}>{tab.label}</span>}
            icon={tab.icon}
          />
        ))}
      </MuiTabs>
      <TabPanel value={value} index={'get'}>
        <div className={'panel-title'}>
          Com apenas
          <span className={'text-[#6cb640]'}> um clique</span>, {`\ngere termos de garantia profissionais`}
        </div>
        <div className={'panel-image'}>
          <Image
            loading={'eager'}
            src={GetAnswer.src}
            width={1040}
            height={648}
            alt={'Get answers, find inspiration, and unblock your work'}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={'write'}>
        <div className={'panel-title'}>
          Com base no seu faturamento, <span className={'text-[#6cb640]'}>saiba a previsão futura da sua loja</span>
        </div>
        <div className={'panel-image'}>
          <Image
            loading={'eager'}
            src={WriteBetter}
            alt={'Write better, brainstorm ideas, and improve writing'}
            width={1040}
            height={648}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={'auto'}>
        <div className={'panel-title'}>
          Gere relatórios <span className={'text-[#6cb640]'}>com filtros</span> por data, cliente, produto, etc.
        </div>
        <div className={'panel-image'}>
          <Image
            loading={'eager'}
            src={AutofillTables}
            alt={'Autofill tables and turn databases into actionable insights'}
            width={1040}
            height={648}
          />
        </div>
      </TabPanel>
    </div>
  );
}

export default AiExamples;
