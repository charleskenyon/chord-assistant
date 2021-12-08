#!/bin/bash

post_and_exit() {
    echo "${1}"
    exit 1
}

npm run test || post_and_exit "tests failed"

webpack || post_and_exit "webpack build failed"

tsc --outFile ./dist/max-globals.js ./src/max-globals.ts ./typings/index.d.ts || post_and_exit "failed to compile max-globals.ts"

es-check es3 "./dist/**/*.js" || post_and_exit "test es3 failed"

cd "$(dirname $0)/dist"
cat max-globals.js main.js >> chord-assistant.js
rm max-globals.js main.js 
