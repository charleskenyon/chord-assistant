#!/bin/bash

post_and_exit() {
    echo "${1}"
    exit 1
}

npm run test || post_and_exit "tests failed"

webpack || post_and_exit "webpack build failed"

es-check es3 "./dist/**/*.js" || post_and_exit "test es3 failed"
