import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/index.js',
    sourceMap: true,
    plugins: [ babel(), uglify() ],
    format: 'umd',
    moduleName: 'UUID',
    dest: 'dist/uuid.js'
};
