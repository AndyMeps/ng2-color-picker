<a name="1.2.2"></a>
# [1.2.2](https://github.com/andymeps/ng2-color-picker/compare/v1.2.1...v1.2.2) (2017-04-19)

### Bug Fixes

Removed default assignment of `availableColors` to avoid change in behaviour from previous revs.

<a name="1.2.1"></a>
# [1.2.1](https://github.com/andymeps/ng2-color-picker/compare/v1.2.0...v1.2.1) (2017-04-19)

### Enhancements

Implemented change for #4 - `availableColors` has been deprecated from `IColorPickerConfiguration`, use as `[availableColors]` on the component instead; this allows colors to be added and removed from the parent component. Will be removed entirely in next minor revision.

<a name="1.2.0"></a>
# [1.2.0](https://github.com/andymeps/ng2-color-picker/compare/v1.1.0...v.1.2.0) (2017-04-17)

### Bug Fixes

* Fixed #5, #6 with a move to NG4 and upgrade to ngx-bootstrap
* Resolved issues with AoT compilation.

### Notes

* This version now supports the current version of @angular and ngx-bootstrap
* I have reconfigured the dependencies to prevent breaking changes from working their way in in future.
* No major changes to codebase but should be upgraded to with care, `lib` directory has been renamed `dist` and will be removed entirely in the next minor revision to simplify SystemJS integration.

<a name="1.1.0"></a>
# [1.1.0](https://github.com/andymeps/ng2-color-picker/compare/v1.0.0...v1.1.0) (2017-01-02)

### Bug Fixes

* Fixed #2 with a move to the latest version of angular 2 and ng2-bootstrap

### Notes

* This version now supports the latest version of angular 2 and ng2-bootstrap.

<a name="1.0.0"></a>
# [1.0.0](https://github.com/andymeps/ng2-color-picker/compare/v0.2.0...v1.0.0) (2016-12-02)

### Notes

* Refactored the picker component to make use of more syntactic sugar to help tidy up the code.
* Added documentation to README.md!
* Bumped to `1.0.0` as this library is now being used in production environments.

<a name="0.2.0"></a>
# [0.2.0](https://github.com/andymeps/ng2-color-picker/compare/v0.1.3...v0.2.0) (2016-10-03)

### New

* Added in onChange and onTouched calls to provide `ng-touched` and `ng-dirty` class notation.

### Breaking Changes

* Renamed input `[picker-config]` to `[pickerConfig]` to match best practices

### Notes

* Added in bump commands.
