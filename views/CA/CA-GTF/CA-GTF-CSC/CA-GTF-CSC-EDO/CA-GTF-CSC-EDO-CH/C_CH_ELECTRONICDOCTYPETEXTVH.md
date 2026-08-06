---
name: C_CH_ELECTRONICDOCTYPETEXTVH
description: CH Electronicdoctypetextvh
app_component: CA-GTF-CSC-EDO-CH
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
  - text
  - component:CA-GTF-CSC-EDO-CH
  - lob:Cross-Application Components
---
# C_CH_ELECTRONICDOCTYPETEXTVH

**CH Electronicdoctypetextvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CH` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CH_ElectronicDocAcctgDocType` | `CH_ElectronicDocAcctgDocType` |
| `CH_ElectronicDocTypeText` | `_Text[1:Language = $session.system_language].CH_ElectronicDocTypeText` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label:'Switzerland Document Type - Text'
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
@ObjectModel.representativeKey:'CH_ElectronicDocAcctgDocType'
@Search.searchable: true
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
@Consumption.ranked: true
define view entity C_CH_ElectronicDocTypeTextVH as select from I_CH_ElectronicDocType
{ 
  @ObjectModel.text.element: ['CH_ElectronicDocTypeText']
  @Search: { defaultSearchElement: true, ranking: #HIGH }
  key CH_ElectronicDocAcctgDocType,
  
  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #LOW }
  @Search.fuzzinessThreshold: 0.8
  _Text[1:Language = $session.system_language].CH_ElectronicDocTypeText as CH_ElectronicDocTypeText 
}
```
