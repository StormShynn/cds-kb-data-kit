---
name: I_REVALUATIONCONDITIONGRP
description: "Revaluationconditiongrp"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - pricing-condition
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALUATIONCONDITIONGRP

**Revaluationconditiongrp**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REValuationConditionGroup` | ✓ | |  | `cdgroup` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REValuationConditionGrpText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'REVALCNDGRP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Valuation Condition Group'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REValuationConditionGroup',
  semanticKey: ['REValuationConditionGroup'],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REValuationConditionGroup'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType:#BASIC
define view entity I_REValuationConditionGrp
  as select from tivcecdgrp
  association [0..*] to I_REValuationConditionGrpText as _Text on $projection.REValuationConditionGroup = _Text.REValuationConditionGroup
{
      @ObjectModel.text.association: '_Text'
  key cdgroup as REValuationConditionGroup,

      _Text
}
```
