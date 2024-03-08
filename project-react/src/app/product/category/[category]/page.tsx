import {
    getCategoryDict,
    convertParamToCategory,
} from '@/utils/productCategory';

export async function generateStaticParams() {
    const categories = await getCategoryDict();
    const params = Object.values(categories).map((category) => ({
        category: category,
    }));

    return params;
}

export interface CategoryPageParams {
    params: { category: string };
}

export default async function ProductCategoryPage({
    params,
}: CategoryPageParams) {
    let category = await convertParamToCategory(params.category);
    if (category === 'all') {
        category = 'all products';
    }

    return <h2 className="text-2xl font-semibold capitalize">{category}</h2>;
}
