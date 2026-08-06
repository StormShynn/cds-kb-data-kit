---
name: I_MSRGPOINTPRODNRSCETOOL
description: Msrgpointprodnrscetool
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
# I_MSRGPOINTPRODNRSCETOOL

**Msrgpointprodnrscetool**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MeasuringPoint` | `PRT.MeasuringPoint` |
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
| `AuthorizationGroup` | `AuthorizationGroup` |
| `StartDateOffsetDuration` | `StartDateOffsetDuration` |
| `StartDateOffsetDurationUnit` | `StartDateOffsetDurationUnit` |
| `EndDateOffsetDuration` | `EndDateOffsetDuration` |
| `EndDateOffsetDurationUnit` | `EndDateOffsetDurationUnit` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `_ProductionResourceType` | *Association* |
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
@AbapCatalog.sqlViewName: 'IPPMSRGPRT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'MeasuringPoint'
@ObjectModel.semanticKey: ['MeasuringPoint']
@Search.searchable: true
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Measuring Point Production Resource Tool'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_MsrgPointProdnRsceTool
    as select from I_MsrgPointPRTByInternalKey as PRT
    
{
      -- representative key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key PRT.MeasuringPoint,

      // Internal key
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

      // for DCLS
      AuthorizationGroup,

      // Durations
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
--    _MeasuringPoint,   to be added later once the view is relased
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
