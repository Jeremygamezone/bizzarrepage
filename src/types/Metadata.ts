export interface IMetadata {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
        canonicals?: Array<{ href: string; hreflang: string }>;
    }