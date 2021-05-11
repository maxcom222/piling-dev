module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true,
        "node": true,
    },
    "extends": [
        "plugin:import/errors",
        "plugin:import/warnings",
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "no-unused-vars": 1,
    },
    "settings": {
        "import/resolver": {
          "babel-module": {}
        }
    },
};
