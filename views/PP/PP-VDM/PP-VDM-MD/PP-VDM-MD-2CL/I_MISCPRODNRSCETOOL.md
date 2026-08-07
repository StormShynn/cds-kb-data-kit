---
name: I_MISCPRODNRSCETOOL
description: Miscprodnrscetool
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_MISCPRODNRSCETOOL

**Miscprodnrscetool**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MiscProductionResourceTool` | ✓ | |  |  |
| `ProductionResourceType` |  | |  |  |
| `ProductionResourceInternalID` |  | |  |  |
| `ProductionResourceToolGroup1` |  | |  |  |
| `ProductionResourceToolGroup2` |  | |  |  |
| `ProductionResourceUsage` |  | |  |  |
| `ProdnRsceToolControlProfile` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `ProdnRsceToolStandardTextCode` |  | |  |  |
| `ProdnRsceToolTotQtyCalcFormula` |  | |  |  |
| `ProdnRsceToolUsageQtyCalcFmla` |  | |  |  |
| `StartDateOffsetReferenceCode` |  | |  |  |
| `EndDateOffsetReferenceCode` |  | |  |  |
| `EndDateOffsetDurnIsReferenced` |  | |  |  |
| `StartDateOffstDurnIsReferenced` |  | |  |  |
| `EndDteOffstRefCodeIsReferenced` |  | |  |  |
| `StartDateOffsetRefCodeIsRefcd` |  | |  |  |
| `PRTTotQtyCalcFmlaIsReferenced` |  | |  |  |
| `PRTUsgeQtyCalcFmlaIsReferenced` |  | |  |  |
| `PRTControlProfileIsReferenced` |  | |  |  |
| `PRTStdTextCodeIsReferenced` |  | |  |  |
| `StartDateOffsetDuration` |  | |  |  |
| `StartDateOffsetDurationUnit` |  | |  |  |
| `EndDateOffsetDuration` |  | |  |  |
| `EndDateOffsetDurationUnit` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `MiscPRTAuthorizationGroup` |  | |  |  |
| `ProdnRsceToolPlntLoc` |  | |  |  |
| `ProductionResourceToolStatus` |  | |  |  |
| `ProdnRsceToolIsDeleted` |  | |  |  |
| `ProductionResourceToolLocation` |  | |  |  |
| `ProdnRsceToolBaseUnit` |  | |  |  |
| `_ProductionResourceType` | | ✓ | | |
| `_Text` | | ✓ | | |
| `_ProdnRsceToolGroup1` | | ✓ | | |
| `_ProdnRsceToolGroup2` | | ✓ | | |
| `_ProductionResourceUsage` | | ✓ | | |
| `_ProdnRsceToolControlProfile` | | ✓ | | |
| `_ProdnRsceToolStandardText` | | ✓ | | |
| `_ProdnRsceToolTotQtyCalcFmla` | | ✓ | | |
| `_ProdnRsceToolUsageQtyCalcFmla` | | ✓ | | |
| `_StartDateOffsetReferenceCode` | | ✓ | | |
| `_EndDateOffsetReferenceCode` | | ✓ | | |
| `_StartDateOffsetDurationUnit` | | ✓ | | |
| `_EndDateOffsetDurationUnit` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |
| `_ChangeMaster` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMISCPRT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'MiscProductionResourceTool'
@ObjectModel.semanticKey: ['MiscProductionResourceTool']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Miscellaneous Production Resource Tool'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_MiscProdnRsceTool
  as select from I_MiscPRTByInternalKey as PRT

{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key PRT.MiscProductionResourceTool,
  
      // Internal key
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
      PRT.ProductionResourceType,
      @ObjectModel.text.association: '_Text'
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

      // for DCLS
      PRT.MiscPRTAuthorizationGroup,

      //Manage PRT
      PRT.ProdnRsceToolPlntLoc,
      PRT.ProductionResourceToolStatus,
      PRT.ProdnRsceToolIsDeleted,
      PRT.ProductionResourceToolLocation,
      PRT.ProdnRsceToolBaseUnit,

      // Associations
      _ProductionResourceType,
      _Text,
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
