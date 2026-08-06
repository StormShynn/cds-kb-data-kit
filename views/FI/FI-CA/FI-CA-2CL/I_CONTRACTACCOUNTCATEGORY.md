---
name: I_CONTRACTACCOUNTCATEGORY
description: Contractaccountcategory
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
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACTACCOUNTCATEGORY

**Contractaccountcategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ContractAccountCategory` | `vktyp` |
| key `CAApplicationArea` | `applk` |
| `CAOnlyOneBPIsAllowed` | `xgein` |
| `CAOnlyOneContractIsAllowed` | `xvein` |
| `CAIsCollectiveBillAccount` | `samrg` |
| `CAIsOneTimeAccount` | `cpd` |
| `_ApplArea` | `_CAApplicationArea` |
| `_CAApplicationArea` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_Text` | `I_ContractAccountCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Contract Account Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'ContractAccountCategory',
                sapObjectNodeType.name: 'ContractAccountCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ContractAccountCategory
  as select from tfk002a

  association [1..1] to I_CAApplicationArea           as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..*] to I_ContractAccountCategoryText as _Text              on  $projection.ContractAccountCategory = _Text.ContractAccountCategory
                                                                            and $projection.CAApplicationArea       = _Text.CAApplicationArea
{
      @ObjectModel.text.association: '_Text'
  key vktyp as ContractAccountCategory,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key applk as CAApplicationArea,

      xgein as CAOnlyOneBPIsAllowed,
      xvein as CAOnlyOneContractIsAllowed,
      samrg as CAIsCollectiveBillAccount,
      cpd   as CAIsOneTimeAccount,

      /* associations */
      _CAApplicationArea,
      _Text,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea as _ApplArea 
}
where
  applk = 'C'
```
