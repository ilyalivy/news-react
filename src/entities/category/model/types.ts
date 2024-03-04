export interface CategoriesApiResponse {
    categories: CategoriesType[];
    description: string;
    status: string;
}

export type CategoriesType =
    | 'regional'
    | 'technology'
    | 'lifestyle'
    | 'business'
    | 'general'
    | 'programming'
    | 'science'
    | 'entertainment'
    | 'world'
    | 'sports'
    | 'finance'
    | 'academia'
    | 'politics'
    | 'health'
    | 'opinion';
