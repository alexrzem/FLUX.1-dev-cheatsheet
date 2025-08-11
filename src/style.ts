import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import './assets/styles/main.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fadt } from '@fortawesome/duotone-thin-svg-icons';

library.add(fal, far, fass, fad, fadt);

import type { Preset } from '@primeuix/themes/types';

const preset: Preset = {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}',
        },
        colorScheme: {
            light: {
                root: {
                    background: '{surface.50}',
                    color: '{surface.700}',
                },
            },
            dark: {
                root: {
                    background: '{surface.950}',
                    color: '{surface.0}',
                },
            },
        },
    },
    components: {
        accordion: {
            header: {
                padding: '0px 0px 2px 0px',
            },
            content: {
                padding: '0px 0px 2px 0px',
            },
            panel: {
                borderWidth: '0px',
            },
        },
        button: {
            root: {
                paddingX: '0px',
                paddingY: '0px',
            },
        },
        card: {
            body: {
                padding: '1rem',
            },
        },
        inplace: {
            root: {
                padding: '0',
            },
        },
        inputgroup: {
            addon: {
                padding: '0px',
            },
        },
        inputnumber: {},
        inputswitch: {
            root: {
                paddingX: '0px',
                paddingY: '0px',
            },
            handle: {
                width: '1.5rem',
                height: '1.5rem',
            },
        },
        inputtextarea: {
            root: {
                paddingX: '8px',
                paddingY: '2px',
            },
            button: {
                width: '0rem',
            },
        },
        inputtext: {
            root: {
                paddingX: '8px',
                paddingY: '2px',
            },
        },
        select: {
            emptyMessage: {
                padding: '0px',
            },
            root: {
                paddingX: '8px',
                paddingY: '2px',
            },
        },
        splitter: {
            handle: {
                background: '{surface.400}',
                focusRing: {
                    color: '{focus.ring.color}',
                    offset: '{focus.ring.offset}',
                    shadow: '{focus.ring.shadow}',
                    style: '{focus.ring.style}',
                    width: '{focus.ring.width}',
                },
                size: '20px',
            },
            root: {
                background: 'transparent',
                borderColor: 'transparent',
            },
        },
    },
};

const themePreset = definePreset(Aura, preset);

console.log(themePreset);

const theme = {
    theme: {
        preset: themePreset,
        options: {
            darkModeSelector: '.p-dark',
        },
    },
};

export { theme };
