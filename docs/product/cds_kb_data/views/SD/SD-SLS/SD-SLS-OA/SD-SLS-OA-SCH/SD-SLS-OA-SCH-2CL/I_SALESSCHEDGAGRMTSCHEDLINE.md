---
name: I_SALESSCHEDGAGRMTSCHEDLINE
description: "Salesschedgagrmtschedline"
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTSCHEDLINE

**Salesschedgagrmtschedline**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedulingAgreement` | ✓ | |  | `cast(SalesDocumentScheduleLine.SalesDocument as vdm_sales_schedg_agrmt preserving type )` |  |  |
| `SalesSchedulingAgreementItem` | ✓ | |  | `cast(SalesDocumentItem as vdm_sales_schedg_agrmt_item preserving type )` |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `ScheduleLineCategory` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `IsRequestedDelivSchedLine` |  | |  | `cast(IsRequestedDelivSchedLine as reqd_deliv)` |  |  |
| `RequestedDeliveryDate` |  | |  | `cast(SalesDocumentScheduleLine.RequestedDeliveryDate as reqd_deliv_date)` |  |  |
| `RequestedDeliveryTime` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `CorrectedQtyInOrderQtyUnit` |  | |  |  |  |  |
| `IsConfirmedDelivSchedLine` |  | |  | `cast(IsConfirmedDelivSchedLine as confd_deliv)` |  |  |
| `ConfirmedDeliveryDate` |  | |  | `cast(ConfirmedDeliveryDate as confd_deliv_date)` |  |  |
| `ConfirmedDeliveryTime` |  | |  |  |  |  |
| `ConfdOrderQtyByMatlAvailCheck` |  | |  |  |  |  |
| `ConfdSchedLineReqdDelivDate` |  | |  |  |  |  |
| `OpenConfdDelivQtyInBaseUnit` |  | |  |  |  |  |
| `ProductAvailabilityDate` |  | |  |  |  |  |
| `ProductAvailabilityTime` |  | |  |  |  |  |
| `ProductAvailCheckRqmtDate` |  | |  |  |  |  |
| `ProdAvailabilityCheckRqmtType` |  | |  |  |  |  |
| `ProdAvailyCheckPlanningType` |  | |  |  |  |  |
| `ScheduleLineConfirmationStatus` |  | |  |  |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `SchedulingAgreementReleaseType` |  | |  |  |  |  |
| `ScheduleLineByForecastDelivery` |  | |  |  |  |  |
| `OrderSchedulingGroup` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `SalesDelivDateCategory` |  | |  | `cast(DelivDateCategory as sd_schedg_agrmt_deliv_dte_type preserving type )` |  |  |
| `CustEngineeringChgStatus` |  | |  |  |  |  |
| `DeliveryCreationDate` |  | |  |  |  |  |
| `TransportationPlanningDate` |  | |  |  |  |  |
| `TransportationPlanningTime` |  | |  |  |  |  |
| `GoodsIssueDate` |  | |  |  |  |  |
| `LoadingDate` |  | |  |  |  |  |
| `GoodsIssueTime` |  | |  |  |  |  |
| `LoadingTime` |  | |  |  |  |  |
| `ItemIsDeliveryRelevant` |  | |  |  |  |  |
| `DelivBlockReasonForSchedLine` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `OpenDeliveryNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `_TransactionCurrency` |  | |  |  |  |  |
| `_SalesSchedgAgrmt` | | ✓ | | | | |
| `_SalesSchedgAgrmtItem` | | ✓ | | | | |
| `_SalesSchedgAgrmtDelivSched` | | ✓ | | | | |
| `_SalesDelivDateCategory` | | ✓ | | | | |
| `_ScheduleLineCategory` | | ✓ | | | | |
| `_ProdAvailabilityCheckRqmtType` | | ✓ | | | | |
| `_ScheduleLineConfStatus` | | ✓ | | | | |
| `_OrderID` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_DelivBlockReasonForSchedLine` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesSchedgAgrmt` | `I_SalesSchedgAgrmt` | [1..1] |
| `_SalesSchedgAgrmtItem` | `I_SalesSchedgAgrmtItem` | [1..1] |
| `_SalesSchedgAgrmtDelivSched` | `I_SalesSchedgAgrmtDelivSched` | [1..1] |
| `_SalesDelivDateCategory` | `I_SalesDelivDateCategory` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Schedule Line of Sales Scheduling Agreement'
@VDM.viewType: #BASIC
@AbapCatalog:{
  sqlViewName: 'ISDSASCHEDLINE',
  compiler.compareFilter: true
}
@ObjectModel:{
  representativeKey: 'ScheduleLine',
  usageType:{
   dataClass: #TRANSACTIONAL,
   serviceQuality: #B,
   sizeCategory: #XL
  },
   supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Metadata:{ 
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'SlsSchedgAgrmtScheduleLine'

define view I_SalesSchedgAgrmtSchedLine
  as select from           I_SalesDocumentScheduleLine as SalesDocumentScheduleLine
    left outer to one join I_SalesDocumentBasic        as SalesDocumentBasic on SalesDocumentScheduleLine.SalesDocument = SalesDocumentBasic.SalesDocument
  association [1..1] to I_SalesSchedgAgrmt           as _SalesSchedgAgrmt           on  $projection.SalesSchedulingAgreement = _SalesSchedgAgrmt.SalesSchedulingAgreement
  association [1..1] to I_SalesSchedgAgrmtItem       as _SalesSchedgAgrmtItem       on  $projection.SalesSchedulingAgreement     = _SalesSchedgAgrmtItem.SalesSchedulingAgreement
                                                                                    and $projection.SalesSchedulingAgreementItem = _SalesSchedgAgrmtItem.SalesSchedulingAgreementItem
  association [1..1] to I_SalesSchedgAgrmtDelivSched as _SalesSchedgAgrmtDelivSched on  _SalesSchedgAgrmtDelivSched.SalesSchedulingAgreementItem   = $projection.SalesSchedulingAgreementItem
                                                                                    and _SalesSchedgAgrmtDelivSched.SalesSchedulingAgreement       = $projection.SalesSchedulingAgreement
                                                                                    and _SalesSchedgAgrmtDelivSched.SchedulingAgreementReleaseType = $projection.SchedulingAgreementReleaseType
                                                                                    and _SalesSchedgAgrmtDelivSched.IntDeliveryScheduleNumber      = '0000'
  association [0..1] to I_SalesDelivDateCategory     as _SalesDelivDateCategory     on  $projection.SalesDelivDateCategory = _SalesDelivDateCategory.SalesDelivDateCategory
{
      // Key
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmt'
  key cast(SalesDocumentScheduleLine.SalesDocument as vdm_sales_schedg_agrmt preserving type )                                                                                        as SalesSchedulingAgreement,
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtItem'
  key cast(SalesDocumentItem    as vdm_sales_schedg_agrmt_item preserving type )                                                                                                      as SalesSchedulingAgreementItem,
  key ScheduleLine,

      // Category
      @ObjectModel.foreignKey.association: '_ScheduleLineCategory'
      ScheduleLineCategory,

      // Sales
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,
      OrderToBaseQuantityDnmntr,
      OrderToBaseQuantityNmrtr,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,

      // Requested
      cast(IsRequestedDelivSchedLine as reqd_deliv)                                                                                                                                   as IsRequestedDelivSchedLine,
      cast(SalesDocumentScheduleLine.RequestedDeliveryDate as reqd_deliv_date)                                                                                                        as RequestedDeliveryDate,
      RequestedDeliveryTime,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      CorrectedQtyInOrderQtyUnit,

      // Confrimed
      cast(IsConfirmedDelivSchedLine as confd_deliv)                                                                                                                                  as IsConfirmedDelivSchedLine,
      cast(ConfirmedDeliveryDate as confd_deliv_date)                                                                                                                                 as ConfirmedDeliveryDate,
      ConfirmedDeliveryTime,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ConfdOrderQtyByMatlAvailCheck,
      ConfdSchedLineReqdDelivDate,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentScheduleLine.OpenConfdDelivQtyInBaseUnit,

      // Availibity
      ProductAvailabilityDate,
      ProductAvailabilityTime,
      ProductAvailCheckRqmtDate,
      ProdAvailabilityCheckRqmtType,
      ProdAvailyCheckPlanningType,
      @ObjectModel.foreignKey.association: '_ScheduleLineConfStatus'
      ScheduleLineConfirmationStatus,

      //InternalProcurement
      PlannedOrder,
      @ObjectModel.foreignKey.association: '_OrderID'
      SalesDocumentScheduleLine.OrderID,

      //SchedulingAgreement
      SchedulingAgreementReleaseType,
      ScheduleLineByForecastDelivery,
      OrderSchedulingGroup,
      DeliveryDate,
      @ObjectModel.foreignKey.association: '_Salesdelivdatecategory'
      cast(DelivDateCategory as sd_schedg_agrmt_deliv_dte_type preserving type )                                                                                                      as SalesDelivDateCategory,
      CustEngineeringChgStatus,

      // Shipping
      DeliveryCreationDate,
      TransportationPlanningDate,
      TransportationPlanningTime,
      GoodsIssueDate,
      LoadingDate,
      GoodsIssueTime,
      LoadingTime,
      ItemIsDeliveryRelevant,
      @ObjectModel.foreignKey.association: '_DelivBlockReasonForSchedLine'
      DelivBlockReasonForSchedLine,
      
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      GoodsMovementType,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      OpenDeliveryNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SalesDocumentScheduleLine.TransactionCurrency,

      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SalesSchedgAgrmt,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SalesSchedgAgrmtDelivSched,
      _SalesSchedgAgrmtItem,
      _ScheduleLineCategory,
      _ProdAvailabilityCheckRqmtType,
      _ScheduleLineConfStatus,
      SalesDocumentScheduleLine._TransactionCurrency                                                                                                                                  as _TransactionCurrency,
      _OrderID,
      _OrderQuantityUnit,
      _BaseUnit,
      _DelivBlockReasonForSchedLine,
      _GoodsMovementType,
      _SalesDocument,
      _SalesDocumentItem,
      _SalesDelivDateCategory

}
where
  SalesDocumentBasic.SDDocumentCategory = 'E' or SalesDocumentBasic.SDDocumentCategory = 'F';
```
