post_and_exit() {
    echo "${1}"
    exit 1
}

npm run test || post_and_exit "tests failed"

npm run build || post_and_exit "webpack build failed"

npm run check:es3 || post_and_exit "test es3 failed"
