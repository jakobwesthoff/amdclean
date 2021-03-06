// generateCode.js
// ===============
// Returns standard JavaScript generated by Escodegen

define([
	'errorMsgs'
], function(
	errorMsgs
) {
	return function generateCode(ast) {
		var amdclean = this,
			options = amdclean.options,
			esprimaOptions = options.esprima || {},
			escodegenOptions = options.escodegen || {};

		if(!_.isPlainObject(escodegen) || !_.isFunction(escodegen.generate)) {
			throw new Error(errorMsgs.escodegen);
		}

		// Check if both the esprima and escodegen comment options are set to true
		if(esprimaOptions.comment === true && escodegenOptions.comment === true) {
			try {
			    // Needed to keep source code comments when generating the code with escodegen
			    ast = escodegen.attachComments(ast, ast.comments, ast.tokens);
			} catch(e) {}
		}

		return escodegen.generate(ast, escodegenOptions);
	};
});