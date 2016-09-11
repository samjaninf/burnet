module.exports = {
    "extends": "google",
    "globals": {
        "angular": true,
        "chai": true,
        "sinon": true,
        "inject": true,
        "readJSON": true,
        "expect": true,
        "google": true
    },
    "rules": {
        'max-len': [1, 110, 4, {
            ignoreComments: true,
            ignoreUrls: true
        }],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ],
        "no-console": 0,
        "no-unused-expressions": 0,
        "no-new": 0
    },
    "env": {
        "browser": true,
        "mocha": true
    }
};
