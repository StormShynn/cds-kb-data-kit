---
name: I_FINANCIALACCOUNTTYPESTDVH
description: Financialaccounttypestdvh
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FINANCIALACCOUNTTYPESTDVH

**Financialaccounttypestdvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialAccountType` | ✓ | |  |  |  |  |
| `DomainValue` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Financial Account Type'
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'FinancialAccountType',
                usageType.sizeCategory: #S,
                usageType.dataClass: #MASTER,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_FinancialAccountTypeStdVH as select from I_FinancialAccountType {
  @ObjectModel.text.association: '_Text'
  key FinancialAccountType,
  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH  
  DomainValue,
  
  _Text
}
```
