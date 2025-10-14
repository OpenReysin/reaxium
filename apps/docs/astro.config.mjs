// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black'
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
    site: "https://reaxium.reysin.fr/",
    integrations: [
        starlight({
            plugins: [
                starlightThemeBlack({
                    navLinks: [
                        {
                            label: 'Core',
                            link: '/core/intro',
                        },
                        {
                            label: 'React',
                            link: '/react',
                        },
                        {
                            label: "VueJS",
                            link: "/vue/"
                        }
                    ],
                    footerText: 'Developped & maintained by [Reysin](https://reysin.fr). '
                }),
                starlightSidebarTopics([
                    {
                        label: 'Core',
                        link: '/core/',
                        items: [
                            {
                                label: "Starting",
                                autogenerate: {
                                    directory: 'core/intro',
                                }
                            }
                        ]
                    },
                    {
                        label: 'React',
                        link: '/react/',
                        items: [
                            {
                                slug: "react",
                            },
                        ]
                    },
                    {
                        label: 'VueJS',
                        link: '/vue/',
                        items: [
                            {
                                slug: "vue",
                            },
                        ]
                    }
                ])
            ],
            title: 'Reaxium',
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/OpenReysin/reaxium'}],
        }),
    ],
});
