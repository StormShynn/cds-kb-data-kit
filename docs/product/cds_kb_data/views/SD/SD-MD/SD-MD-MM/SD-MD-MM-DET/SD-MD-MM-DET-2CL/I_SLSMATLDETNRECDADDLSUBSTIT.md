---
name: I_SLSMATLDETNRECDADDLSUBSTIT
description: "Slsmatldetnrecdaddlsubstit"
app_component: SD-MD-MM-DET-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
