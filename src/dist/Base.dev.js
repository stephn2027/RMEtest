"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyDTU7LfzwEq9z1mS2mcVz7yd7wh8PAbccA",
  authDomain: "stephuy-react-recipe-app.firebaseapp.com",
  projectId: "stephuy-react-recipe-app",
  storageBucket: "stephuy-react-recipe-app.appspot.com",
  messagingSenderId: "997336713673",
  appId: "1:997336713673:web:e0302a4eacd16afa920018",
  measurementId: "G-0ETLC9BYDG"
};

_firebase["default"].initializeApp(firebaseConfig);

var _default = _firebase["default"];
exports["default"] = _default;