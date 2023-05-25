import { type constants } from './services/Utils';
import type { translate, translatePlural } from '@nextcloud/l10n';

declare module 'vue' {
  interface ComponentCustomProperties {
    // GlobalMixin.ts
    t: typeof translate;
    n: typeof translatePlural;

    c: typeof constants.c;

    state_noDownload: boolean;

    routeIsBase: boolean;
    routeIsPeople: boolean;
    routeIsArchive: boolean;
    routeIsFolders: boolean;
    routeIsAlbums: boolean;
    routeIsPublic: boolean;
  }
}

export {};
