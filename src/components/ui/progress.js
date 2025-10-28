"use client";
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
var React = require("react");
var ProgressPrimitive = require("@radix-ui/react-progress");
var utils_1 = require("@/lib/utils");
var Progress = React.forwardRef(function (_a, ref) {
    var className = _a.className, value = _a.value, props = __rest(_a, ["className", "value"]);
    return (<ProgressPrimitive.Root ref={ref} className={(0, utils_1.cn)("relative h-2 w-full overflow-hidden rounded-full bg-zinc-900/20 dark:bg-zinc-50/20", className)} {...props}>
    <ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-zinc-900 transition-all dark:bg-zinc-50" style={{ transform: "translateX(-".concat(100 - (value || 0), "%)") }}/>
  </ProgressPrimitive.Root>);
});
exports.Progress = Progress;
Progress.displayName = ProgressPrimitive.Root.displayName;
