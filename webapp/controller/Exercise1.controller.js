sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("exercise1.controller.Exercise1", {
        onInit() { this._oInitialData = {   Name: "",
                                            Street: "",
                                            HouseNo: "",
                                            ZipCode: "",
                                            City: "",
                                            SelectedCountry: "",
                                            ListofCountries: [    { "Country": "England"  },
                                                    { "Country": "Germany"  },
                                                    { "Country": "USA"      },
                                                    { "Country": "Philippines"  }   ]    };                                                                          
            const oModelData = structuredClone(this._oInitialData);
            this.getView().setModel( new JSONModel(oModelData) );
        },
        onClear() { this.getView().getModel().setData(structuredClone(this._oInitialData)) }
    });
});