'use client';

import { useState } from 'react';
import Sort from '@/components/product/Sort';
import { SmallSort } from '@/components/product/Sort';
import type { TSortOption } from '@/types/sortOption';

export default function ProductAllLayout({
    latest,
    cheap,
    expensive,
}: {
    latest: React.ReactNode;
    cheap: React.ReactNode;
    expensive: React.ReactNode;
}) {
    const [sortOption, setSortOption] = useState<TSortOption>('new');

    const changeSortOption = (id: TSortOption) => {
        setSortOption(id);
    };

    return (
        <>
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
            <div className="w-full md:w-4/5">{latest}</div>
        </>
    );
}
