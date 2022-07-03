"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaOmakaseComponent = void 0;
const core_1 = require("@angular/core");
let TiendaOmakaseComponent = class TiendaOmakaseComponent {
    constructor() {
        this.idProducto = [1, 2];
        this.nombreProducto = ['Nigiri salmón', 'Maki salmón'];
        this.precios = [4.95, 3.80];
        this.sumaTotal = 0;
    }
    get getSuma() {
        return this.sumaTotal;
    }
    ngOnInit() {
    }
};
TiendaOmakaseComponent = __decorate([
    (0, core_1.Component)({
        selector: 'tienda-omakase',
        templateUrl: './tienda-omakase.component.html',
        styleUrls: ['./tienda-omakase.component.css']
    })
], TiendaOmakaseComponent);
exports.TiendaOmakaseComponent = TiendaOmakaseComponent;
