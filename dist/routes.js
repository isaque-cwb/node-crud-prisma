"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var createProductController_1 = require("./controllers/createProductController");
exports.router = (0, express_1.Router)();
var createProduct = new createProductController_1.CreateProductController();
exports.router.post('/product', createProduct.handle);
//# sourceMappingURL=routes.js.map