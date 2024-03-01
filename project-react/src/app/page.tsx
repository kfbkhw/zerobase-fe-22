import CarouselBanner from '@/components/home/CarouselBanner';
import ContentWrap from '@/components/common/ContentWrap';
import HomeSection from '@/components/home/template/section';
import { getProductData } from '@/api/products';

export default async function Home() {
    const data = await getProductData();

    const newProducts: object[] = data.slice(0, 3);
    const bestProducts: object[] = data.slice(3, 6);
    const saleProducts: object[] = data.slice(6, 9);

    const sectionList = [
        { id: 'new', title: 'New Arrivals', products: newProducts },
        { id: 'best', title: 'Best Sellers', products: bestProducts },
        { id: 'sale', title: 'Sale', products: saleProducts },
    ];

    return (
        <main className="relative top-16 min-h-screen bg-neutral-100 dark:bg-neutral-700">
            <CarouselBanner />
            <ContentWrap classList="min-h-screen p-10">
                {sectionList.map((section) => {
                    return (
                        <HomeSection
                            title={section.title}
                            products={section.products}
                            key={section.id}
                        />
                    );
                })}
            </ContentWrap>
        </main>
    );
}
