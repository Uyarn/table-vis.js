import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default [{
	input: 'src/index.js',
	name:'table_vis',
	output: {
		file: 'dist/table_vis.min.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs(),
		uglify()
	]
},
{
	input: 'src/index.js',
	output:{
		file:'dist/table_vis.js',
		format:'cjs'
	},
	plugins: [
		// resolve(),
		// commonjs(),
		uglify()
	]
}];
