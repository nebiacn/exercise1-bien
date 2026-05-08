/*global QUnit*/

sap.ui.define([
	"exercise1/controller/Exercise1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Exercise1 Controller");

	QUnit.test("I should test the Exercise1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
