---
name: I_STOCKTRANSPORTORDERPARTNERTP
description: Stocktransportorderpartnertp
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - transport
  - partner
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKTRANSPORTORDERPARTNERTP

**Stocktransportorderpartnertp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `StockTransportOrder` | `StockTransportOrder` |
| key `PartnerFunction` | `PartnerFunction` |
| `SupplierSubrange` | `SupplierSubrange` |
| `Plant` | `Plant` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PartnerCounter` | `PartnerCounter` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `PurchasingDocumentPartnerType` | `PurchasingDocumentPartnerType` |
| `Supplier` | `Supplier` |
| `SupplierHierarchyCategory` | `SupplierHierarchyCategory` |
| `SupplierContact` | `SupplierContact` |
| `PersonWorkAgreement` | `PersonWorkAgreement` |
| `_PartnerFunction` | *Association* |
| `_PartnerFunctionText` | *Association* |
| `_PersonWorkAgreement` | *Association* |
| `_Plant` | *Association* |
| `_StockTransportOrder` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierContact` | *Association* |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,  //#MASTER?
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder', 'PartnerFunction'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY, //authorizationCheck: #PRIVILEGED_ONLY
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Partner for Stock Transport Order - TP'

define view entity I_StockTransportOrderPartnerTP as projection on R_StockTransportOrderPartnerTP 
{

  key StockTransportOrder,
      @ObjectModel.text.association: '_PartnerFunctionText'       //CustomUI
  key PartnerFunction,
      SupplierSubrange,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
      Plant,
      PurchasingOrganization,
      PartnerCounter,
      CreatedByUser,
      CreationDate,
      PurchasingDocumentPartnerType,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      Supplier,
      SupplierHierarchyCategory,
      SupplierContact,
      PersonWorkAgreement,
//      DefaultPartner,
      
      /* Associations */
      _PartnerFunction,
      _PartnerFunctionText,
      _PersonWorkAgreement,
      _Plant,

      _StockTransportOrder : redirected to parent I_StockTransportOrderTP,
      _PurchasingOrganization,
      _Supplier,
      _SupplierContact
}
```
