---
name: C_IT_ELECTRONICDOCPARTSTATVH
description: IT Electronicdocpartstatvh
app_component: CA-GTF-CSC-EDO-IT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - consumption-view
  - value-help
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
---
# C_IT_ELECTRONICDOCPARTSTATVH

**IT Electronicdocpartstatvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IT_ElectronicDocPartStat` | ✓ | |  |  |
| `IT_ElectronicDocPartStatText` |  | |  | `_Text[1:Language = $session.system_language].IT_ElectronicDocPartStatText` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Italy status of edocument Partner - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL
}

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]


@VDM.viewType: #CONSUMPTION
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey:'IT_ElectronicDocPartStat'
@Search.searchable: true
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
@Consumption.ranked: true
define view entity C_IT_ElectronicDocPartStatVH as select from I_IT_ElectronicDocStatPart
{
  @ObjectModel.text.element: ['IT_ElectronicDocPartStatText']
  @Search: { defaultSearchElement: true, ranking: #LOW }
  key IT_ElectronicDocPartStat,

  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #HIGH }
  @Search.fuzzinessThreshold: 0.8
  _Text[1:Language = $session.system_language].IT_ElectronicDocPartStatText as IT_ElectronicDocPartStatText
}
```
