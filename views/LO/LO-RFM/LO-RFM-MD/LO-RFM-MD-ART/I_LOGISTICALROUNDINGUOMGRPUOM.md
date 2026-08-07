---
name: I_LOGISTICALROUNDINGUOMGRPUOM
description: "Logisticalroundinguomgrpuom"
app_component: LO-RFM-MD-ART
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - unit-of-measure
  - component:LO-RFM-MD-ART
  - lob:Logistics General
---
# I_LOGISTICALROUNDINGUOMGRPUOM

**Logisticalroundinguomgrpuom**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogisticalRoundingUoMGroup` | ✓ | |  | `megru` |  |  |
| `LogisticalRoundingUoMGroupUoM` | ✓ | |  | `meins` |  |  |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_LogisticalRoundingUoMGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Logistical Rounding UoM Group UoM'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.technicalName: 'ILGLRNDUOMGRPUOM'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
    representativeKey: 'LogisticalRoundingUoMGroupUoM',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}

define view entity I_LogisticalRoundingUoMGrpUoM

  as select from twmeg
  association        to parent I_LogisticalRoundingUoMGroup as _LogisticalRoundingUoMGroup on $projection.LogisticalRoundingUoMGroup = _LogisticalRoundingUoMGroup.LogisticalRoundingUoMGroup
  association [1..1] to I_UnitOfMeasure                     as _UnitOfMeasure              on $projection.LogisticalRoundingUoMGroupUoM = _UnitOfMeasure.UnitOfMeasure

{

  key megru as LogisticalRoundingUoMGroup,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  key meins as LogisticalRoundingUoMGroupUoM,

      _LogisticalRoundingUoMGroup,
      _UnitOfMeasure
};
```
