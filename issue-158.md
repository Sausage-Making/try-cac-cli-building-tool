Testing with CAC 6.7.14 and 7.0.0:

Your example code works well with Node and Bun, i.e.
`node index.ts.hello`
and
`bun index.ts.hello`

It works also with a locally installed vite-node (v6.0.0), i.e.
`vite-node index.ts hello`
and with pnpx (pnpm's version of npx), i.e.
`pnpx vite-node index.ts hello`

I could not reproduce your tweak with passing process.argv as an explicit argument argument for .parse().

Note that process.argv for `vite-node index.ts hello` is indeed `node (...)/cli.mjs index.ts hello`, i.e. it has an additional `cli.mjs` compared to a direct `node index.ts hello` call. I'd suppose your vite-node version (or something in your environment) fails at stripping off `cli.mjs` and CAC receives this as an undefined command and therefore does nothing
