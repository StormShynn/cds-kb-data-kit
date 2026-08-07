---
name: I_CHARCATTRIBUTECODEGRPVH
description: "Charcattributecodegrpvh"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - value-help
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_CHARCATTRIBUTECODEGRPVH

**Charcattributecodegrpvh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharacteristicAttributeCodeGrp` | ✓ | |  |  |  |  |
| `CodeGroupStatus` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Characteristic Attribute Code Group'
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #A }
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ICHARCATTCDGRPVH'
@ObjectModel.representativeKey: 'CharacteristicAttributeCodeGrp'
@Metadata.ignorePropagatedAnnotations: true
-- this CDS view used only in deprecated result recording app
define view entity I_CharcAttributeCodeGrpVH
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden: true
    P_Language : vdm_qm_sylangu
  as select from I_CharcAttributeCodeGrp
{
      @ObjectModel.text.element: [ 'CharacteristicAttribCodeGrpTxt']
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key CharacteristicAttributeCodeGrp,
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.7 }
      _Text[1:Language = $parameters.P_Language].CharacteristicAttribCodeGrpTxt,
      CodeGroupStatus
}
```
