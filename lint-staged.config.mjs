export default {
  '**/*.(ts|(c|m)?js|vue|md|json)': filenames => [
    `npx --no eslint ${filenames.join(' ')}`,
  ],
}
