---
name: I_SDDOCUMENTMULTILEVELPROCFLOW
description: Sddocumentmultilevelprocflow
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - interface-view
  - document
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTMULTILEVELPROCFLOW

**Sddocumentmultilevelprocflow**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DocRelationshipUUID` | ✓ | |  | `ruuid` |
| `PrecedingDocument` |  | |  | `vbelv` |
| `PrecedingDocumentItem` |  | |  | `posnv` |
| `PrecedingDocumentCategory` |  | |  | `vbtyp_v` |
| `SubsequentDocument` |  | |  | `vbeln` |
| `SubsequentDocumentItem` |  | |  | `posnn` |
| `SubsequentDocumentCategory` |  | |  | `vbtyp_n` |
| `ProcessFlowLevel` |  | |  | `stufe` |
| `CreationDate` |  | |  | `erdat` |
| `CreationTime` |  | |  | `erzet` |
| `LastChangeDate` |  | |  | `aedat` |
| `QuantityInBaseUnit` |  | |  | `rfmng` |
| `RefQuantityInOrdQtyUnitAsFloat` |  | |  | `rfmng_flo` |
| `RefQuantityInBaseUnitAsFloat` |  | |  | `rfmng_flt` |
| `BaseUnit` |  | |  | `meins` |
| `OrderQuantityUnit` |  | |  | `vrkme` |
| `SDFulfillmentCalculationRule` |  | |  | `plmin` |
| `NetAmount` |  | |  | `rfwrt` |
| `StatisticsCurrency` |  | |  | `waers` |
| `TransferOrderInWrhsMgmtIsConfd` |  | |  | `taqui` |
| `WarehouseNumber` |  | |  | `lgnum` |
| `MaterialDocumentYear` |  | |  | `mjahr` |
| `GoodsMovementType` |  | |  | `bwart` |
| `BillingPlan` |  | |  | `fplnr` |
| `BillingPlanItem` |  | |  | `fpltr` |
| `_BaseUnit` | | ✓ | | |
| `_OrderQuantityUnit` | | ✓ | | |
| `_StatisticsCurrency` | | ✓ | | |
| `_GoodsMovementType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_StatisticsCurrency` | `I_Currency` | [0..1] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    representativeKey: 'DocRelationshipUUID',
    usageType: {
        dataClass: #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory: #XL
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'SD Document Multi Level Process Flow'
@Analytics:{dataCategory:#DIMENSION}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'ISDDOCMLPROCFLOW'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Metadata.allowExtensions:true


define view I_SDDocumentMultiLevelProcFlow
  as select from vbfa
  association [0..1] to I_UnitOfMeasure     as _BaseUnit           on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure     as _OrderQuantityUnit  on $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure
  association [0..1] to I_Currency          as _StatisticsCurrency on $projection.StatisticsCurrency = _StatisticsCurrency.Currency
  association [0..1] to I_GoodsMovementType as _GoodsMovementType  on $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType

{
      //Key
  key vbfa.ruuid                                                   as  DocRelationshipUUID,

      //Preceding
      vbfa.vbelv                                                   as  PrecedingDocument,
      vbfa.posnv                                                   as  PrecedingDocumentItem,
      vbfa.vbtyp_v                                                 as  PrecedingDocumentCategory,

      //Subsequent
      vbfa.vbeln                                                   as  SubsequentDocument,
      vbfa.posnn                                                   as  SubsequentDocumentItem,
      vbfa.vbtyp_n                                                 as  SubsequentDocumentCategory,

      //Process Flow Level
      vbfa.stufe                                                   as  ProcessFlowLevel,

      //Admin
      @Semantics.systemDate.createdAt: true
      vbfa.erdat                                                   as  CreationDate,
      vbfa.erzet                                                   as  CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      vbfa.aedat                                                   as  LastChangeDate,

      //Quantity of subsequent document
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      vbfa.rfmng                                                   as  QuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      vbfa.rfmng_flo                                               as  RefQuantityInOrdQtyUnitAsFloat,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      vbfa.rfmng_flt                                               as  RefQuantityInBaseUnitAsFloat,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      vbfa.meins                                                   as  BaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      vbfa.vrkme                                                   as  OrderQuantityUnit,
      vbfa.plmin                                                   as  SDFulfillmentCalculationRule,

      //Pricing of subsequent document
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'StatisticsCurrency'
      vbfa.rfwrt                                                   as  NetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      vbfa.waers                                                   as  StatisticsCurrency,

      //Pick Pack Load
      vbfa.taqui                                                   as  TransferOrderInWrhsMgmtIsConfd,

      // Delivery related fields
      vbfa.lgnum                                                   as  WarehouseNumber,
      vbfa.mjahr                                                   as  MaterialDocumentYear,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      vbfa.bwart                                                   as  GoodsMovementType,

      // Billing Plan related fields
      vbfa.fplnr                                                   as  BillingPlan,
      vbfa.fpltr                                                   as  BillingPlanItem,

      _BaseUnit,
      _OrderQuantityUnit,
      _StatisticsCurrency,
      _GoodsMovementType
}
```
