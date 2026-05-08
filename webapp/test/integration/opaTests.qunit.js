/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["exercise1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
