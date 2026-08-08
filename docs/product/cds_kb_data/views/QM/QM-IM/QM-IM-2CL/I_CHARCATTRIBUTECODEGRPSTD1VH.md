---
name: I_CHARCATTRIBUTECODEGRPSTD1VH
description: "Charcattributecodegrpstd 1VH"
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
# I_CHARCATTRIBUTECODEGRPSTD1VH

**Charcattributecodegrpstd 1VH**

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
| `CharacteristicAttribCodeGrpTxt` |  | |  |  |  |  |
| `CodeGroupStatus` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ICACG__VH2'
@ObjectModel.representativeKey: 'CharacteristicAttributeCodeGrp'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Characteristic Attribute Code Group'
-- this CDS view used only in deprecated result recording app
define view entity I_CharcAttributeCodeGrpStd1VH as select from I_CharcAttributeCodeGrpVH 
  ( P_Language : $session.system_language ) 
{
  @ObjectModel.text.element: ['CharacteristicAttribCodeGrpTxt']
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key CharacteristicAttributeCodeGrp,

  @Semantics.text: true
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.7 }
  CharacteristicAttribCodeGrpTxt,
  @Consumption.hidden: true
  CodeGroupStatus
}
```
