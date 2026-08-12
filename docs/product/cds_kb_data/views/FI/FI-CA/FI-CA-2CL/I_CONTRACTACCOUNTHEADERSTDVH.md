---
name: I_CONTRACTACCOUNTHEADERSTDVH
description: "Contractaccountheaderstdvh"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - value-help
  - standard-value-help
  - contract
  - header-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACTACCOUNTHEADERSTDVH

**Contractaccountheaderstdvh**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccount` | ✓ | |  |  |  |  |
| `ContractAccountName` |  | |  |  |  |  |
| `ContractAccountCategory` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Consumption.ranked: true

@EndUserText.label: 'Contract Account Header'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'ContractAccount',
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #XL } }

@Search.searchable: true

@VDM.viewType: #COMPOSITE

define view entity I_ContractAccountHeaderStdVH 
  as select from I_ContractAccountHeader {
  
  @ObjectModel.text.element: ['ContractAccountName']
  @EndUserText.label: 'Contract Account'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key ContractAccount,

  @EndUserText.label: 'Description'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  @Semantics.text: true
  ContractAccountName,

  @EndUserText.label: 'Category'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  ContractAccountCategory
}
```
