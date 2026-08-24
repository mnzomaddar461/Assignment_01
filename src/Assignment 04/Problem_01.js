"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Battery Level Status
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return `Low`;
    }
    else if (percentage >= 21 && percentage <= 50) {
        return `Medium`;
    }
    else if (percentage >= 51 && percentage <= 90) {
        return `High`;
    }
    else {
        return `Full`;
    }
}
console.log(getBatteryStatus(18));
//# sourceMappingURL=Problem_01.js.map