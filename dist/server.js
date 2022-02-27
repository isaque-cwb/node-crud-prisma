"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var HOST = '0.0.0.0';
var PORT = 3000;
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(routes_1.router);
app.listen(PORT, HOST, function () { console.log("servidor iniciado..."); });
//# sourceMappingURL=server.js.map