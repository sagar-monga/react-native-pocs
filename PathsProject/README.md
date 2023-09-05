# Paths Project.

This is a project focusing on creating named aliases instead of using relative exports.

# Steps
1. Add packages - metro-react-native-babel-preset, babel-plugin-module-resolver as dev dependencies
2. Update module-resolver in babel.config.js
3. For VSCode to identify these, update the same in tsconfig.json - don't forget /*
4. Clean & rebuild

# Files to focus on  
package.json
babel.config.js - for modules to understand each other's path in code
tsconfig.json - for vscode