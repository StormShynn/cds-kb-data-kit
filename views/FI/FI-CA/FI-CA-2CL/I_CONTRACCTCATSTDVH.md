---
name: I_CONTRACCTCATSTDVH
description: Contracctcatstdvh
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACCTCATSTDVH

**Contracctcatstdvh**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccountCategory` | ✓ | |  |  |  |  |
| `CAApplicationArea` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  privilegedAssociations: ['_Text'] }

@Consumption.ranked: true

@EndUserText.label: 'Contract Account Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'ContractAccountCategory',
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #C,
                             sizeCategory: #S } }
                             
@Search.searchable: true

@VDM.viewType: #COMPOSITE

define view entity I_ContrAcctCatStdVH 
  as select from I_ContractAccountCategory {
  
  @ObjectModel.text.element: ['ContractAccountCategoryName']
  @EndUserText.label: 'Contract Account Category'
  @Search : {defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH}
  key ContractAccountCategory,
  @EndUserText.label: 'Application Area'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  key CAApplicationArea,
  
  @EndUserText.label: 'Description'
  @EndUserText.quickInfo: 'Description of Contract Account Category'
  @Consumption.quickInfoElement: 'ContractAccountCategoryName'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  @Semantics.text: true
  _Text[1:Language = $session.system_language].ContractAccountCategoryName,
  
  _Text

//  @Consumption.hidden: true
//  _ApplArea
}
```
