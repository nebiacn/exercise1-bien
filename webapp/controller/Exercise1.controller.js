sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("exercise1.controller.Exercise1", {
        onInit() {
            var oData = {   "SelectedCountry": "",
                            "ListofCountries": [    { "Country": "England"  },
                                                    { "Country": "Germany"  },
                                                    { "Country": "USA"      },
                                                    { "Country": "Philippines"  }   ]   }
            var oModel  = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});