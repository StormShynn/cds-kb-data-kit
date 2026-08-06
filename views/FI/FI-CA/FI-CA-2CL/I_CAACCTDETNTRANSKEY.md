---
name: I_CAACCTDETNTRANSKEY
description: Caacctdetntranskey
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
# I_CAACCTDETNTRANSKEY

**Caacctdetntranskey**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CATransactionKeyAccountDetn` | `cast( left( dd07l.domvalue_l,3 ) as ktosl_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAcctDetnTransKeyText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Account Determination Transaction Key'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CATransactionKeyAccountDetn',
                sapObjectNodeType.name: 'ContrAcctgAcctDetnTransKey',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAcctDetnTransKey
  as select from dd07l

  association [1..*] to I_CAAcctDetnTransKeyText as _Text on $projection.CATransactionKeyAccountDetn = _Text.CATransactionKeyAccountDetn

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,3 ) as ktosl_kk preserving type ) as CATransactionKeyAccountDetn,

      _Text
}
where
      domname  = 'KTOSL_KK'
  and as4local = 'A'
```
