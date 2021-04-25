# React prototype
Experimenting with adding React components to an existing website. Not interested in making the whole website into a React based single page application. The process for adding React components to an existing website is clearly explained in this tutorial from reactjs.org: https://reactjs.org/docs/add-react-to-a-website.html

This project uses almost the simplest toolchain possible. The only reason to use the babel-cli tools is to transpile React components that use the declaritve JSX syntax.

Installing babel package to use for transpiling JavaScript code
that uses JSX into JavasScript code that browser's understand
```
npm install babel-cli@6 babel-preset-react-app@3 --save-dev
```

Installing the serve command to serve the files (simple server)
```
npm install serve --save-dev
```


This project also uses the react-autosuggest React component. This is here because the original intent of this work was to play around with adding a pre-packaged react component to an existing website (index.html in this case). So, install react-autosuggest
```
npm install react-autosuggest
```


Using the command below to watch the src directory and spit out compiled js files any time something in the src directory changes
```
npx babel --watch src --out-dir . --presets react-app/prod
```



Run the serve command to serve the files
```
npx serve
```
Very simple, very easy.