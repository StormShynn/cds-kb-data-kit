---
name: I_SLSMATLDETNRECDADDLSUBSTIT
description: "Slsmatldetnrecdaddlsubstit"
app_component: SD-MD-MM-DET-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - component:SD-MD-MM-DET-2CL
  - lob:Sales & Distribution
---
# I_SLSMATLDETNRECDADDLSUBSTIT

**Slsmatldetnrecdaddlsubstit**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-DET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@EndUserText.label: 'Additional Substitute for Material Detn'

@VDM.viewType: #BASIC

@AccessControl:
{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}

@ObjectModel.usageType:
{
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]

@Analytics.dataExtraction:
{
  enabled: true,
  delta.changeDataCapture.automatic: true
}

@ObjectModel.sapObjectNodeType.name: 'SlsMatlDetnRecdAddlSubstit'

define view entity I_SlsMatlDetnRecdAddlSubstit
  as select from konddp as konddp
  association [1..1] to I_SlsMatlDeterminationRecord as _SlsMatlDeterminationRecord on $projection.ConditionRecord = _SlsMatlDeterminationRecord.ConditionRecord
{
  key konddp.knumh as ConditionRecord,
  key konddp.kposn as SlsMatlDetnSequenceNumber,

      // *** Data Fields ***
      konddp.smatn as SlsMatlDetnSubstituteMaterial,
      konddp.meins as SlsMatlDetnSubstitMaterialUoM,

      _SlsMatlDeterminationRecord
}
```
