"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectUserModule = void 0;
const common_1 = require("@nestjs/common");
const collect_user_controller_1 = require("./collect_user.controller");
const collect_user_repository_1 = require("./collect_user.repository");
const collect_user_service_1 = require("./collect_user.service");
let CollectUserModule = class CollectUserModule {
};
CollectUserModule = __decorate([
    (0, common_1.Module)({
        controllers: [collect_user_controller_1.CollectUserController],
        providers: [collect_user_service_1.CollectUserService, collect_user_repository_1.CollectUserRepository]
    })
], CollectUserModule);
exports.CollectUserModule = CollectUserModule;
//# sourceMappingURL=collect_user.module.js.map