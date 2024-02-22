import React, { useState } from 'react';
import Header from '../../../shared/components/Header/index';
import Footer from '../../../shared/components/Footer/index';

import FormTitle from '../../../shared/components/FormTitle';
import { useTranslation } from 'react-i18next';

interface FaqOption {
  id: number;
  title: string;
  description: string;
}

const faqOption: FaqOption[] = [
  {
    id: 1,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
  },
  {
    id: 2,
    title: 'App installation failed, how to update system information?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
  },
  {
    id: 3,
    title: 'Website response taking time, how to improve?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
  },
  {
    id: 4,
    title: 'How do I create an account?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
  },
];

const Fags: React.FC = () => {
  const { t } = useTranslation()
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (itemId: number) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  return (
    <div className="bg-white">
      <div className="p-[30px]">
        <Header
          isLogin={true}
          isBasket={true}
          isAvatar={true}
          isName={true}
          isBottom={false}
        />
      </div>

      <main className="p-[30px] flex justify-center">
        <div className="max-w-[1440px] w-full flex flex-col px-[50px] py-[25px] gap-[40px] justify-center items-center  ">
          <FormTitle
            value={t("faq")}
            size={'55px'}
            weight={500}
            color={'#000'}
            mwidth={'120px'}
          />

          <div className='flex flex-col gap-[20px] w-full'>
            {faqOption.map((item) => (
              <div style={{boxShadow: '0px 3px 8px -2px rgba(0, 0, 0, 0.20)'}} className='bg-white py-[22px] px-[20px]' key={item.id}>
                <div className='flex justify-between w-full cursor-pointer' onClick={() => toggleItem(item.id)}>
                  <p className='text-black text-center text-xl not-italic font-medium leading-7'>
                    {
                      item.title
                    } 
                  </p>

                  <p className='text-[20px] font-bold'>
                    {
                      expandedItems.includes(item.id) ? '-' : '+'
                    }
                  </p>
                </div>

                {expandedItems.includes(item.id) && (
                    <p className='text-lg text-[#828282] not-italic font-medium leading-7 mt-3'>
                      {
                        item.description
                      }
                    </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer isTop={false} />
    </div>
  );
};

export default Fags;