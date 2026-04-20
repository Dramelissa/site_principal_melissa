export interface UtmParams {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
}

const STORAGE_KEY = 'utm_params';

export const getUtmParamsFromUrl = (): UtmParams => {
    if (typeof window === 'undefined') return {};

    const searchParams = new URLSearchParams(window.location.search);
    const params: UtmParams = {};

    if (searchParams.has('utm_source')) params.source = searchParams.get('utm_source') || undefined;
    if (searchParams.has('utm_medium')) params.medium = searchParams.get('utm_medium') || undefined;
    if (searchParams.has('utm_campaign')) params.campaign = searchParams.get('utm_campaign') || undefined;
    if (searchParams.has('utm_term')) params.term = searchParams.get('utm_term') || undefined;
    if (searchParams.has('utm_content')) params.content = searchParams.get('utm_content') || undefined;

    return params;
};

export const storeUtmParams = (params: UtmParams) => {
    if (typeof window === 'undefined') return;

    // Only store if there are actual UTM parameters
    if (Object.keys(params).length > 0) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    }
};

export const getStoredUtmParams = (): UtmParams => {
    if (typeof window === 'undefined') return {};

    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing stored UTM params', e);
            return {};
        }
    }
    return {};
};
