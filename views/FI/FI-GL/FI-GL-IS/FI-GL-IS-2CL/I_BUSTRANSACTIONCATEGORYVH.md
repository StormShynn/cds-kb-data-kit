---
name: I_BUSTRANSACTIONCATEGORYVH
description: Bustransactioncategoryvh
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BUSTRANSACTIONCATEGORYVH

**Bustransactioncategoryvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessTransactionCategory` | `I_BusinessTransactionCategory.BusinessTransactionCategory` |
| `_Text` | *Association* |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Business Transaction Category'
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'BusinessTransactionCategory',
                usageType.sizeCategory: #M,
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_BusTransactionCategoryVH as select from I_BusinessTransactionCategory {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key I_BusinessTransactionCategory.BusinessTransactionCategory,
  
  _Text
}
```
