import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';

import Layout from '@/components/layout';
import NestedLayout from '@/components/layout/nested-layout';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Bookmarks: NextPageWithLayout = () => {
	return <main className={`${inter.className}`}></main>;
};

Bookmarks.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<NestedLayout>{page}</NestedLayout>
		</Layout>
	);
};

export default Bookmarks;
