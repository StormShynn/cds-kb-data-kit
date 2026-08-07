---
name: I_STOACCOUNTASSIGNMENTTP
description: "Stoaccountassignmenttp"
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
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOACCOUNTASSIGNMENTTP

**Stoaccountassignmenttp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  |  |  |
| `StockTransportOrderItem` | ✓ | |  |  |  |  |
| `AccountAssignmentNumber` | ✓ | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistrPercent` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `ProjectNetworkInternalID` |  | |  |  |  |  |
| `NetworkActivityInternalID` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `_StockTransportOrderItem` | | ✓ | | | | |
| `_StockTransportOrder` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_SalesDocumentScheduleLine` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_OrderQuantityUnitText` | | ✓ | | | | |
| `_DocumentCurrencyText` | | ✓ | | | | |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder', 'StockTransportOrderItem', 'AccountAssignmentNumber'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Account Assignment for STO - TP'

define view entity I_STOAccountAssignmentTP 
  as projection on R_STOAccountAssignmentTP
{
  key StockTransportOrder,
  key StockTransportOrderItem,
  key AccountAssignmentNumber,
  CostCenter,
  ProjectNetwork,
  @ObjectModel.text.association: '_OrderQuantityUnitText'
  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
  OrderQuantityUnit,
  @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
  Quantity,
  MultipleAcctAssgmtDistrPercent,
  @ObjectModel.text.association: '_DocumentCurrencyText'
  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
  DocumentCurrency,
//  @Semantics.amount.currencyCode: 'DocumentCurrency'
//  PurgDocNetAmount,
  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' }, useAsTemplate: true }]       //CustomUI
  GLAccount,
  SalesOrder,
  SalesOrderItem,
  SalesOrderScheduleLine,
//  WBSElementInternalID,
  WBSElementExternalID,
  ProjectNetworkInternalID,
  NetworkActivityInternalID,
  CreationDate,
  
  /* Associations */
  _StockTransportOrderItem : redirected to parent I_StockTransportOrderItemTP,
  _StockTransportOrder     : redirected to I_StockTransportOrderTP,
  
  
  _GLAccount,
  //_NetworkActivity, //internal API, shouldn't be exposed
  _SalesDocumentScheduleLine,
  _SalesOrder,
  _SalesOrderItem,
//  _WBSElement

  /* Text associations for CustomUI */
  _OrderQuantityUnitText,
  _DocumentCurrencyText
}
```
