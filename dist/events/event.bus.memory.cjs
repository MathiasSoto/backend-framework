"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// core/events/event.bus.memory.ts
var event_bus_memory_exports = {};
__export(event_bus_memory_exports, {
  default: () => EventBussMemory
});
module.exports = __toCommonJS(event_bus_memory_exports);
var EventBussMemory = class {
  create(name) {
    throw new Error("Method not implemented.");
  }
  on(event, payload) {
    throw new Error("Method not implemented.");
  }
  emit(event, payload) {
    throw new Error("Method not implemented.");
  }
};
