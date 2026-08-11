---
name: I_TRDGCONTRSCHEDULELINE
description: "Trading Contract Schedule Line"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSCHEDULELINE')/$value
semantic_en: "Trading Contract Schedule Line"
semantic_vi: "Trading Contract Schedule Line — CDS view tổng hợp dựa trên R_TrdgContrScheduleLine."
keywords:
  - "Trading Contract Schedule Line"
  - "trading"
  - "contract"
  - "schedule"
  - "line"
  - "item"
  - "created"
  - "user"
  - "creation"
  - "date"
tags:
  - LO
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGCONTRSCHEDULELINE

**Trading Contract Schedule Line**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSCHEDULELINE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContract` | ✓ | |  |  | `CHAR(10)` | Trading Contract |
| `TradingContractItem` | ✓ | |  |  | `NUMC(6)` | Item Number of Trading Contract |
| `TradingContractScheduleLine` | ✓ | |  |  | `NUMC(4)` | Schedule Line Number in Trading Contract |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Created At |
| `TrdgContrSalesQuantity` |  | |  |  | `QUAN(15)` | Cumulative Order Quantity in Sales Units |
| `TrdgContrSlsQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `TrdgContrPurgQuantity` |  | |  |  | `QUAN(13)` | Quantity ordered against this purchase requisition |
| `TrdgContrPurgQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `TrdgContrSlsSchedLineDelivDte` |  | |  |  | `DATS(8)` | Sales Schedule Line Delivery Date |
| `TrdgContrPurgSchedLineDelivDte` |  | |  |  | `DATS(8)` | Purchasing Schedule line delivery date |
| `TrdgContrSlsDelivDteCat` |  | |  |  | `CHAR(1)` | Sales Delivery Date Category |
| `TrdgContrPurgDelivDteCat` |  | |  |  | `CHAR(1)` | Purchasing Delivery Date Category |
| `TrdgContrSlsReqdDelivTme` |  | |  |  | `TIMS(6)` | Sales Requested Delivery Time |
| `TrdgContrPurgReqdDelivTme` |  | |  |  | `TIMS(6)` | Purchasing Requested Delivery Time |
| `TrdgContrInbLglCtrlChkSts` |  | |  |  | `CHAR(1)` | Legal Control Check Status (Inbound) |
| `TrdgContrOutbLglCtrlChkSts` |  | |  |  | `CHAR(1)` | Legal Control Check Status (Outbound) |
| `_TrdgContr` | | ✓ | | | | |
| `_TrdgContrItem` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdgContr` | `I_TrdgContr` | [1..1] |
| `_TrdgContrItem` | `I_TrdgContrItem` | [1..1] |
| `_TradingDocumentScheduleLine` | `E_TradingDocumentScheduleLine` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSCHEDULELINE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSCHEDULELINE')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser']
}
@EndUserText.label: 'Trading Contract Schedule Line'
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions:true
}
@ObjectModel: {
  semanticKey: ['TradingContractScheduleLine', 'TradingContractItem', 'TradingContract'],
  representativeKey: 'TradingContractScheduleLine',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}
//@Analytics.internalName: #LOCAL
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_TrdgContrScheduleLine
  as select from R_TrdgContrScheduleLine as TrdgContrScheduleLine

  association [1..1] to I_TrdgContr                   as _TrdgContr                   on  $projection.TradingContract = _TrdgContr.TradingContract
  association [1..1] to I_TrdgContrItem               as _TrdgContrItem               on  $projection.TradingContract     = _TrdgContrItem.TradingContract
                                                                                      and $projection.TradingContractItem = _TrdgContrItem.TradingContractItem
  association [0..1] to E_TradingDocumentScheduleLine as _TradingDocumentScheduleLine on  $projection.TradingContract             = _TradingDocumentScheduleLine.TradingDocument
                                                                                      and $projection.TradingContractItem         = _TradingDocumentScheduleLine.TradingDocumentItem
                                                                                      and $projection.TradingContractScheduleLine = _TradingDocumentScheduleLine.TradingDocumentScheduleLine

{
      @ObjectModel.foreignKey.association: '_TrdgContr'
  key TradingContract,
      @ObjectModel.foreignKey.association: '_TrdgContrItem'
  key TradingContractItem,
  key TradingContractScheduleLine,
      TrdgContrScheduleLine.CreatedByUser as CreatedByUser,
      CreationDate,
      CreationTime,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsQuantityUnit'
      @Aggregation.default: #NONE
      TrdgContrSalesQuantity,
      TrdgContrSlsQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrPurgQuantityUnit'
      @Aggregation.default: #NONE
      TrdgContrPurgQuantity,
      TrdgContrPurgQuantityUnit,
      TrdgContrSlsSchedLineDelivDte,
      TrdgContrPurgSchedLineDelivDte,
      TrdgContrSlsDelivDteCat,
      TrdgContrPurgDelivDteCat,
      TrdgContrSlsReqdDelivTme,
      TrdgContrPurgReqdDelivTme,
      TrdgContrInbLglCtrlChkSts,
      TrdgContrOutbLglCtrlChkSts,


      /* Exposed Associations */
      _TrdgContr,
      _TrdgContrItem,
      _CreatedByUser



}
```
