"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BookingForm = function BookingForm() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  (0, _react.useEffect)(function () {
    console.log(email, password, 'FORM VALUES');
  }, [email, password]);
  return /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: {
      email: email,
      password: password
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!values.password) {
        errors.password = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        margin: "30px auto",
        flexDirection: "column",
        width: "50%"
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: "20px"
      }
    }, /*#__PURE__*/_react.default.createElement("label", null, 'Email: ', /*#__PURE__*/_react.default.createElement("input", {
      type: "email",
      name: "email",
      onChange: function onChange(e) {
        setEmail(e.target.value);
        handleChange(e);
      },
      onBlur: handleBlur,
      value: values.email,
      style: {
        width: '300px'
      },
      placeholder: "Please enter email"
    })), errors.email && touched.email && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        color: 'red'
      }
    }, errors.email)), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: "20px"
      }
    }, /*#__PURE__*/_react.default.createElement("label", null, 'Password: ', /*#__PURE__*/_react.default.createElement("input", {
      type: "password",
      name: "password",
      onChange: function onChange(e) {
        setPassword(e.target.value);
        handleChange(e);
      },
      onBlur: handleBlur,
      value: values.password,
      style: {
        width: '300px'
      },
      placeholder: "Please enter password"
    })), errors.password && touched.password && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        color: 'red'
      }
    }, errors.password)), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: "20px"
      }
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "submit",
      disabled: isSubmitting,
      style: {
        width: "200px",
        backgroundColor: '#4895d0',
        color: '#fff',
        fontWeight: "bold",
        padding: '5px'
      }
    }, "Submit"))));
  });
};

var _default = BookingForm;
exports.default = _default;