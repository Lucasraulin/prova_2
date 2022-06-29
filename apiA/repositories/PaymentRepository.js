"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolhaRepository = void 0;
const folhas = [];
class FolhaRepository {
    cadastrar(folha) {
        folhas.push(folha);
        return folhas;
    }
    listar() {
        return folhas;
    }
}
exports.FolhaRepository = FolhaRepository;
