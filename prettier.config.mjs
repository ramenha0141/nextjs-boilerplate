/** @type {import('prettier').Config} */
export default {
    tabWidth: 4,
    singleQuote: true,
    jsxSingleQuote: true,
    arrowParens: 'avoid',
    printWidth: 80,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrder: [
        '^next(/.+)?$',
        '^react$',
        '<THIRD_PARTY_MODULES>',
        '^~/',
        '^[./]+',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
