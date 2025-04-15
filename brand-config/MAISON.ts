import { DEFAULT_CONFIG } from '../src/base-config';
import type { Config } from '../src/schema';

export const config = {
    data: {
        ...DEFAULT_CONFIG,
        theme: 'wrf',
        tenant: 'maison_dellos',
        brand_title: 'Maison Dellos',
        hasMultiLanguage: true,
        sortStatusInDashboard: true,
        newBookingDesign: true,
        vipSign: true,
        hasStatusFiltersInHallScheme: true,
        enableShiftIntervalForGrid: true,
    },
    hostnames: ['maison-dellos', 'maison-dellos-demo'],
    version: '1.0',
} as const satisfies Config;
