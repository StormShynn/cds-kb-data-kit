---
name: I_CATOLERANCEGROUP
description: Catolerancegroup
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CATOLERANCEGROUP

**Catolerancegroup**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAToleranceGroup` | ✓ | |  | `togru` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `CAMaxPaytDiffForExpense` |  | |  | `difbh` |  |  |
| `CAMaxPaytDiffForRevenue` |  | |  | `difbs` |  |  |
| `CAMaxPaytDiffForExpenseInPct` |  | |  | `difph` |  |  |
| `CAMaxPaytDiffForRevenueInPct` |  | |  | `difps` |  |  |
| `CAPaytNtcIsCreatedForUndrpayt` |  | |  | `xundp` |  |  |
| `CAPaytNtcIsCreatedForOvrpayt` |  | |  | `xovrp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAToleranceGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Tolerance Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAToleranceGroup',
                sapObjectNodeType.name: 'ContrAcctgToleranceGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAToleranceGroup
  as select from tfk043
  
  association [0..*] to I_CAToleranceGroupText as _Text on $projection.CAToleranceGroup = _Text.CAToleranceGroup

{
      @ObjectModel.text.association: '_Text'
  key togru as CAToleranceGroup,
  
      waers as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      difbh as CAMaxPaytDiffForExpense,
      @Semantics.amount.currencyCode: 'Currency'
      difbs as CAMaxPaytDiffForRevenue,
      difph as CAMaxPaytDiffForExpenseInPct,
      difps as CAMaxPaytDiffForRevenueInPct,
      xundp as CAPaytNtcIsCreatedForUndrpayt,
      xovrp as CAPaytNtcIsCreatedForOvrpayt,

      _Text
}
```
