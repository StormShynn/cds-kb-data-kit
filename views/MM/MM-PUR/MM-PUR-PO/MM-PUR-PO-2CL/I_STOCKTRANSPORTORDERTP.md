---
name: I_STOCKTRANSPORTORDERTP
description: Stocktransportordertp
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
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKTRANSPORTORDERTP

**Stocktransportordertp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  |
| `StockTransportOrderType` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `StockTransportOrderDate` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `Language` |  | |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `SupplyingPlant` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `IsIntrastatReportingRelevant` |  | |  |  |
| `IsIntrastatReportingExcluded` |  | |  |  |
| `_StockTransportOrderItem` | | ✓ | | |
| `_StockTransportOrderNote` | | ✓ | | |
| `_StockTransportOrderPartner` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_DocumentCurrency` | | ✓ | | |
| `_Language` | | ✓ | | |
| `_PurchasingGroup` | | ✓ | | |
| `_PurchasingOrganization` | | ✓ | | |
| `_SupplyingPlant` | | ✓ | | |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  sapObjectNodeType: {
     name: 'StockTransportOrder'
  },

  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Stock Transport Order - TP'

define root view entity I_StockTransportOrderTP
  provider contract transactional_interface
  as projection on R_StockTransportOrderTP as _StockTransportOrderTP
{
  key StockTransportOrder,
  
//      @ObjectModel.text.association: '_StockTransportOrderTypeText'
      StockTransportOrderType,
      
      CreatedByUser,
      CreationDate,
      StockTransportOrderDate,
      LastChangeDateTime,
      Language,
      ReleaseIsNotCompleted,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true }] //CustomUI
      CompanyCode,

      PurchasingOrganization,
      PurchasingGroup,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }] //CustomUI
      SupplyingPlant,

//      @ObjectModel.text.association: '_DocumentCurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }] //CustomUI
      DocumentCurrency,

      IsIntrastatReportingRelevant,
      IsIntrastatReportingExcluded,

      /* Composition */
      _StockTransportOrderItem    : redirected to composition child I_StockTransportOrderItemTP,
      _StockTransportOrderNote    : redirected to composition child I_StockTransportOrderNoteTP,
      _StockTransportOrderPartner : redirected to composition child I_StockTransportOrderPartnerTP,

      /* Associations */
      _CompanyCode,
      _CreatedByUser,
      _DocumentCurrency,
      _Language,
      _PurchasingGroup,
      _PurchasingOrganization,
      _SupplyingPlant

      /* Text associations for CustomUI */
//      _StockTransportOrderTypeText,
//      _DocumentCurrencyText
}
```
