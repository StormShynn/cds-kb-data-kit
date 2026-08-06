---
name: I_MATERIALPRODNRSCETOOL
description: Materialprodnrscetool
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - material
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
  - bo:Material
---
# I_MATERIALPRODNRSCETOOL

**Materialprodnrscetool**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `PRT.Plant` |
| key `Material` | `PRT.Material` |
| `Product` | `PRT.Product` |
| `ProductionResourceType` | `PRT.ProductionResourceType` |
| `ProductionResourceInternalID` | `PRT.ProductionResourceInternalID` |
| `ProductionResourceToolGroup1` | `PRT.ProductionResourceToolGroup1` |
| `ProductionResourceToolGroup2` | `PRT.ProductionResourceToolGroup2` |
| `ProductionResourceUsage` | `PRT.ProductionResourceUsage` |
| `ProdnRsceToolControlProfile` | `ProdnRsceToolControlProfile` |
| `ChangeNumber` | `PRT.ChangeNumber` |
| `ProdnRsceToolStandardTextCode` | `ProdnRsceToolStandardTextCode` |
| `ProdnRsceToolTotQtyCalcFormula` | `ProdnRsceToolTotQtyCalcFormula` |
| `ProdnRsceToolUsageQtyCalcFmla` | `ProdnRsceToolUsageQtyCalcFmla` |
| `StartDateOffsetReferenceCode` | `StartDateOffsetReferenceCode` |
| `EndDateOffsetReferenceCode` | `EndDateOffsetReferenceCode` |
| `EndDateOffsetDurnIsReferenced` | `EndDateOffsetDurnIsReferenced` |
| `StartDateOffstDurnIsReferenced` | `StartDateOffstDurnIsReferenced` |
| `EndDteOffstRefCodeIsReferenced` | `EndDteOffstRefCodeIsReferenced` |
| `StartDateOffsetRefCodeIsRefcd` | `StartDateOffsetRefCodeIsRefcd` |
| `PRTTotQtyCalcFmlaIsReferenced` | `PRTTotQtyCalcFmlaIsReferenced` |
| `PRTUsgeQtyCalcFmlaIsReferenced` | `PRTUsgeQtyCalcFmlaIsReferenced` |
| `PRTControlProfileIsReferenced` | `PRTControlProfileIsReferenced` |
| `PRTStdTextCodeIsReferenced` | `PRTStdTextCodeIsReferenced` |
| `StartDateOffsetDuration` | `StartDateOffsetDuration` |
| `StartDateOffsetDurationUnit` | `StartDateOffsetDurationUnit` |
| `EndDateOffsetDuration` | `EndDateOffsetDuration` |
| `EndDateOffsetDurationUnit` | `EndDateOffsetDurationUnit` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `_ProductionResourceType` | *Association* |
| `_Material` | *Association* |
| `_Plant` | *Association* |
| `_Product` | *Association* |
| `_ProductPlant` | *Association* |
| `_ProductPlant2` | *Association* |
| `_ProdnRsceToolGroup1` | *Association* |
| `_ProdnRsceToolGroup2` | *Association* |
| `_ProductionResourceUsage` | *Association* |
| `_ProdnRsceToolControlProfile` | *Association* |
| `_ProdnRsceToolStandardText` | *Association* |
| `_ProdnRsceToolTotQtyCalcFmla` | *Association* |
| `_ProdnRsceToolUsageQtyCalcFmla` | *Association* |
| `_StartDateOffsetReferenceCode` | *Association* |
| `_EndDateOffsetReferenceCode` | *Association* |
| `_StartDateOffsetDurationUnit` | *Association* |
| `_EndDateOffsetDurationUnit` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |
| `_ChangeMaster` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMATERIALPRT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'Material'
@ObjectModel.semanticKey: ['Material']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Material Production Resource Tool'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_MaterialProdnRsceTool
  as select from I_MaterialPRTByInternalKey as PRT

{
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key PRT.Plant,
      -- representative key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key PRT.Material,
      @ObjectModel.foreignKey.association: '_Product'
      PRT.Product,
      
      // Internal Key
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
      PRT.ProductionResourceType,
      PRT.ProductionResourceInternalID,

      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      PRT.ProductionResourceToolGroup1,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      PRT.ProductionResourceToolGroup2,
      PRT.ProductionResourceUsage,
      ProdnRsceToolControlProfile,
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      PRT.ChangeNumber,
      ProdnRsceToolStandardTextCode,
      ProdnRsceToolTotQtyCalcFormula,
      ProdnRsceToolUsageQtyCalcFmla,
      StartDateOffsetReferenceCode,
      EndDateOffsetReferenceCode,

      // Reference Indicators
      EndDateOffsetDurnIsReferenced,
      StartDateOffstDurnIsReferenced,
      EndDteOffstRefCodeIsReferenced,
      StartDateOffsetRefCodeIsRefcd,
      PRTTotQtyCalcFmlaIsReferenced,
      PRTUsgeQtyCalcFmlaIsReferenced,
      PRTControlProfileIsReferenced,
      PRTStdTextCodeIsReferenced,

      @Semantics.quantity.unitOfMeasure: 'StartDateOffsetDurationUnit'
      @DefaultAggregation: #SUM
      StartDateOffsetDuration,
      @Semantics.unitOfMeasure: true
      StartDateOffsetDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'EndDateOffsetDurationUnit'
      @DefaultAggregation: #SUM
      EndDateOffsetDuration,
      @Semantics.unitOfMeasure: true
      EndDateOffsetDurationUnit,

      // Admin data
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      // Associations
      _ProductionResourceType,
      _Material,
      _Plant,
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      _ProductPlant,
      _ProductPlant2,
      _ProdnRsceToolGroup1,
      _ProdnRsceToolGroup2,
      _ProductionResourceUsage,
      _ProdnRsceToolControlProfile,
      _ProdnRsceToolStandardText,
      _ProdnRsceToolTotQtyCalcFmla,
      _ProdnRsceToolUsageQtyCalcFmla,
      _StartDateOffsetReferenceCode,
      _EndDateOffsetReferenceCode,
      _StartDateOffsetDurationUnit,
      _EndDateOffsetDurationUnit,
      _CreatedByUser,
      _LastChangedByUser,
      _ChangeMaster
};
```
