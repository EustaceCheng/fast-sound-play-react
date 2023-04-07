# fast sound play react

### Getting Started
```
yarn && yarn start
```

### Flow

1. use cra start project
2. import craco package
3. use craco.config.js to modify webpack
```
module: {
        rules: [
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ],
    },
```
4. declare mp3 type on react-app-env.d.ts 
```
declare module '*.mp3' {
    const src: string
    export default src
}

```

5. easy use on any position~
