var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function withEZDebug(Class) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.debug = function () {
            var Name = _super.prototype.constructor.name;
            var value = this.getDebugValue();
            return Name + '(' + JSON.stringify(value) + ')';
        };
        return class_1;
    }(Class));
}
var HardToDebugUser = /** @class */ (function () {
    function HardToDebugUser(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HardToDebugUser.prototype.getDebugValue = function () {
        return {
            id: this.id,
            name: this.firstName + this.lastName
        };
    };
    return HardToDebugUser;
}());
var User = withEZDebug(HardToDebugUser);
var user = new User(3, 'Emma', 'Watson');
user.debug();
