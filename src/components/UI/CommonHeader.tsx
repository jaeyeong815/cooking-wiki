import Link from 'next/link';

import { prefix } from '@/utils/prefix';

const CommonHeader = () => {
  return (
    <header className="flex justify-center py-6 mb-10">
      <Link href="/">
        <img className="w-40" src={`${prefix}/main_logo.png`} alt="logo" />
      </Link>
    </header>
  );
};

export default CommonHeader;
