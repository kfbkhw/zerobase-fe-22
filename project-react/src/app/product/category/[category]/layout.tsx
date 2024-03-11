'use client';

import { useState } from 'react';
import Wrap from '@/components/common/template/Wrap';
import Sort, { SmallSort } from '@/components/_product/Sort';
import type { TSortOption } from '@/types/sortOption';

interface CategoryLayoutProps {
    children: React.ReactNode;
    latest: React.ReactNode;
    cheap: React.ReactNode;
    expensive: React.ReactNode;
}

export default function ProductCategoryLayout({
    children,
    latest,
    cheap,
    expensive,
}: CategoryLayoutProps) {
    const [sortOption, setSortOption] = useState<TSortOption>('latest');

    const changeSortOption = (id: TSortOption) => {
        setSortOption(id);
    };

    return (
        <Wrap classList="flex justify-between flex-col md:flex-row">
            <div className="w-1/5 text-sm hidden md:block">
                <Sort
                    sortOption={sortOption}
                    changeSortOption={changeSortOption}
                />
            </div>
            <div className="block md:hidden flex justify-end">
                <SmallSort
                    sortOption={sortOption}
                    changeSortOption={changeSortOption}
                />
            </div>
            <div className="w-full md:w-4/5">
                {children}
                {sortOption === 'latest' && latest}
                {sortOption === 'cheap' && cheap}
                {sortOption === 'expensive' && expensive}
            </div>
        </Wrap>
    );
}
