// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black'
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            plugins: [
                starlightThemeBlack({
                    navLinks: [
						{
							label: 'Core',
							link: '/core',
						},
						{
							label: 'React',
							link: '/react',
						}
					],
                    footerText: //optional
                        'Developped & maintained by [Reysin](https://reysin.fr). '
                }),
                starlightSidebarTopics([
                    {
                        label: 'Core',
                        link: '/core/',
                        items: [
                            {
								slug: "core",
                            },
                        ]
                    },
                    {
                        "label": 'React',
                        "link": '/react/',
						items: [
							{
								slug: "react",
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
