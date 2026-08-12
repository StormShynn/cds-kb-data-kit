---
name: I_MRPLOTSIZINGPROCEDURE
description: "Mrplotsizingprocedure"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPLOTSIZINGPROCEDURE

**Mrplotsizingprocedure**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialLotSizingProcedure` | ✓ | |  | `disls` |  |  |
| `LotSizingProcedureType` |  | |  | `cast(proc.losvf as vdm_losvf preserving type)` |  |  |
| `LotSizeType` |  | |  | `loskz` |  |  |
| `LotSizePeriodSchedulingType` |  | |  | `terbv` |  |  |
| `LastLotIsPlannedExactly` |  | |  | `lastl` |  |  |
| `UnderDeliveryTolIsChecked` |  | |  | `untkz` |  |  |
| `_Text` | | ✓ | | | | |
| `_LotSizingProcedureType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MRPLotSizingProcedureText` | [0..*] |
| `_LotSizingProcedureType` | `I_MRPLotSizingProcedureType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPLOTSIZPROC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MaterialLotSizingProcedure'
@ObjectModel.sapObjectNodeType.name: 'MRPLotSizingProcedure'
@ObjectModel.semanticKey: ['MaterialLotSizingProcedure']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Lot Sizing Procedure'
// For value help purposes refer to CDS I_MRPLotSizingProcedureVH

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MRPLotSizingProcedure
  as select from t439a as proc

  association [0..*] to I_MRPLotSizingProcedureText as _Text                   on $projection.MaterialLotSizingProcedure = _Text.MaterialLotSizingProcedure
  association [1..1] to I_MRPLotSizingProcedureType as _LotSizingProcedureType on $projection.LotSizingProcedureType = _LotSizingProcedureType.LotSizingProcedureType
{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key proc.disls                                    as MaterialLotSizingProcedure,

      @ObjectModel.foreignKey.association: '_LotSizingProcedureType'
      cast(proc.losvf as vdm_losvf preserving type) as LotSizingProcedureType,
      proc.loskz                                    as LotSizeType,
--    proc.peraz                                    as NumberOfLotSizingPeriods,  // DEC fields not allowed
      proc.terbv                                    as LotSizePeriodSchedulingType,
      proc.lastl                                    as LastLotIsPlannedExactly,
      proc.untkz                                    as UnderDeliveryTolIsChecked,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _LotSizingProcedureType
};
```
