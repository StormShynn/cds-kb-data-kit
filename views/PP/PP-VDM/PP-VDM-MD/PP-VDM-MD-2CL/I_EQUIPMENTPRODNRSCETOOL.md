---
name: I_EQUIPMENTPRODNRSCETOOL
description: "Equipmentprodnrscetool"
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
  - equipment
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_EQUIPMENTPRODNRSCETOOL

**Equipmentprodnrscetool**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` | ✓ | |  |  |  |  |
| `ProductionResourceType` |  | |  |  |  |  |
| `ProductionResourceInternalID` |  | |  |  |  |  |
| `ProductionResourceToolGroup1` |  | |  |  |  |  |
| `ProductionResourceToolGroup2` |  | |  |  |  |  |
| `ProductionResourceUsage` |  | |  |  |  |  |
| `ProdnRsceToolControlProfile` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ProdnRsceToolStandardTextCode` |  | |  |  |  |  |
| `ProdnRsceToolTotQtyCalcFormula` |  | |  |  |  |  |
| `ProdnRsceToolUsageQtyCalcFmla` |  | |  |  |  |  |
| `StartDateOffsetReferenceCode` |  | |  |  |  |  |
| `EndDateOffsetReferenceCode` |  | |  |  |  |  |
| `ProdPRTLoadRecordsAreCreated` |  | |  |  |  |  |
| `EndDateOffsetDurnIsReferenced` |  | |  |  |  |  |
| `StartDateOffstDurnIsReferenced` |  | |  |  |  |  |
| `EndDteOffstRefCodeIsReferenced` |  | |  |  |  |  |
| `StartDateOffsetRefCodeIsRefcd` |  | |  |  |  |  |
| `PRTTotQtyCalcFmlaIsReferenced` |  | |  |  |  |  |
| `PRTUsgeQtyCalcFmlaIsReferenced` |  | |  |  |  |  |
| `PRTControlProfileIsReferenced` |  | |  |  |  |  |
| `PRTStdTextCodeIsReferenced` |  | |  |  |  |  |
| `StartDateOffsetDuration` |  | |  |  |  |  |
| `StartDateOffsetDurationUnit` |  | |  |  |  |  |
| `EndDateOffsetDuration` |  | |  |  |  |  |
| `EndDateOffsetDurationUnit` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_ProductionResourceType` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_ProdnRsceToolGroup1` | | ✓ | | | | |
| `_ProdnRsceToolGroup2` | | ✓ | | | | |
| `_ProductionResourceUsage` | | ✓ | | | | |
| `_ProdnRsceToolControlProfile` | | ✓ | | | | |
| `_ProdnRsceToolStandardText` | | ✓ | | | | |
| `_ProdnRsceToolTotQtyCalcFmla` | | ✓ | | | | |
| `_ProdnRsceToolUsageQtyCalcFmla` | | ✓ | | | | |
| `_StartDateOffsetReferenceCode` | | ✓ | | | | |
| `_EndDateOffsetReferenceCode` | | ✓ | | | | |
| `_StartDateOffsetDurationUnit` | | ✓ | | | | |
| `_EndDateOffsetDurationUnit` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPEQUIPMENTPRT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] 
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'Equipment'
@ObjectModel.semanticKey: ['Equipment']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Equipment Production Resource Tool'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_EquipmentProdnRsceTool
  as select from I_EquipmentPRTByInternalKey as PRT

{
      -- representative key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key PRT.Equipment,

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
      ProdPRTLoadRecordsAreCreated,
      
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
      _Equipment,
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
