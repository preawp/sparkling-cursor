# Welcome to Sparkling Cursor!
![sparks](https://github.com/preawp/sparkling-cursor/assets/113046852/a773e3d6-6704-4e20-a425-7ccee60229df)



Enhance your web applications with `sparklingcursor`, a React hook that adds delightful, animated sparkles around the cursor as it moves across the screen. This easy-to-use hook is designed for React developers looking to add a touch of visual flair to their projects.

## Features

- **Customizable Color Palette**: Choose from a predefined set of colors or define your own to match your site's theme.
- **Adjustable Size**: Set the size of the sparkles to ensure they don't overpower your content.
- **Glow Effect**: Optionally add a subtle glow around each sparkle to make them stand out even more.
- **Ease of Integration**: With minimal setup, you can incorporate `sparklingcursor` into any React application.

## Installation

To get started with `sparklingcursor`, install the package using npm or Yarn:

```bash
npm install sparklingcursor
```
or 
```bash
yarn add sparklingcursor
```

## Usage 
To use the sparklingcursor hook in your React component, simply import and call it as shown in the following example:

```jsx
import React from 'react';
import useSparklingCursor from 'sparklingcursor';

function MyComponent() {
    useSparklingCursor({
        colorPalette: ['#FFD700', '#FFA500', '#FFD55A', '#EAC086', '#FFFAF0'],
        size: '14px',
        glowEnabled: true,
        glowColor: '#fff4c3'
    });

    return <div>Welcome to the sparkly experience!</div>;
}

export default MyComponent;

```
