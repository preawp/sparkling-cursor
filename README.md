Sparkling Cursor

sparklingcursor is a React hook that adds a sparkling effect to your cursor. This hook creates animated sparkles around the cursor as it moves across the screen, adding a visually appealing, interactive element to your web applications. It's highly customizable with options for colors, sizes, and additional glow effects.

Features

Customizable color palette for sparkles
Adjustable size for sparkle elements
Optional glow effect for each sparkle
Easy to integrate with any React project
Installation

Install sparklingcursor via npm:

bash
Copy code
npm install sparklingcursor
Or via yarn:

bash
Copy code
yarn add sparklingcursor
Usage

Here is a simple example of how to use the sparklingcursor hook in your React component:

jsx
Copy code
import React from 'react';
import useSparklingCursor from 'sparklingcursor';

function MyComponent() {
  useSparklingCursor({
    colorPalette: ['#FFD700', '#FFA500', '#FFD55A', '#EAC086', '#FFFAF0'],
    size: '14px',
    glowEnabled: true,
    glowColor: '#fff4c3'
  });

  return <div>Hello, sparkle with your cursor here!</div>;
}

export default MyComponent;
Options

You can customize the sparkles with the following options:

colorPalette (Array<string>): An array of color hex codes used for the sparkle colors. Default: ['#FFD700', '#FFA500', '#FFD55A', '#EAC086', '#FFFAF0'].
size (string): The font size of the sparkles. Default: '14px'.
glowEnabled (boolean): Enables a glow effect around the sparkles. Default: false.
glowColor (string): Color of the glow effect. Default: '#fff4c3'.
Contributing

Contributions are always welcome! Please read the contribution guidelines first.

License

Distributed under the MIT License. See LICENSE for more information.

Support

If you have any issues or feature requests, please file an issue on the GitHub repository page.


