// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dubaicarrepairservice.com',
  trailingSlash: 'never',
  redirects: {
    '/car-repair-dubai': '/',
    '/service/car-ac-repair-dubai': '/car-ac-repair-dubai',
    '/service/car-battery-replacement-dubai': '/car-battery-replacement-dubai',
    '/service/car-engine-service-dubai': '/car-engine-service-dubai',
    '/service/car-inspection-dubai': '/car-inspection-dubai',
    '/service/car-maintenance-dubai': '/car-maintenance-dubai',
    '/service/engine-oil-change-dubai': '/engine-oil-change-dubai',
    '/service/mobile-car-repair-dubai': '/mobile-car-repair-dubai',
    '/service/roadside-assistance-dubai': '/roadside-assistance-dubai',
    '/service/tyre-replacement-dubai': '/tyre-replacement-dubai',
    '/locations/car-repair-al-satwa': '/car-repair-al-satwa',
    '/locations/car-repair-sheikh-zayed-road': '/car-repair-sheikh-zayed-road',
    '/resources': '/resource'
  }
});
