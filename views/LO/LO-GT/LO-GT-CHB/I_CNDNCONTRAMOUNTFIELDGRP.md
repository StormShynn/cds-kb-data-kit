---
name: I_CNDNCONTRAMOUNTFIELDGRP
description: Cndncontramountfieldgrp
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRAMOUNTFIELDGRP

**Cndncontramountfieldgrp**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AmountFieldGroup` | ✓ | |  | `af_group` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CndnContrAmountFieldGrpText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Amount Field Group'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'AmountFieldGroup',
  sapObjectNodeType.name: 'CndnContractAmountFieldGroup',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  }
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@Metadata.ignorePropagatedAnnotations:true
define root view entity I_CndnContrAmountFieldGrp
  as select from wb2_c_af_group as AmountFieldGroup
  association [0..*] to I_CndnContrAmountFieldGrpText as _Text on $projection.AmountFieldGroup = _Text.AmountFieldGroup
{
      @ObjectModel.text.association: '_Text'
  key AmountFieldGroup.af_group as AmountFieldGroup,

      /* Associations */
      _Text
}
```
