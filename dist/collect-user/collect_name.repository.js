"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectUserRepository = void 0;
const promises_1 = require("fs/promises");
class CollectUserRepository {
    async create(user) {
        const content = await (0, promises_1.readFile)('users.json', 'utf-8');
        const users = JSON.parse(content);
        const id = Math.floor(Math.random() * 999);
        users.push(Object.assign(Object.assign({}, user), { id }));
        await (0, promises_1.writeFile)('users.json', JSON.stringify(users));
    }
}
exports.CollectUserRepository = CollectUserRepository;
//# sourceMappingURL=collect_name.repository.js.map