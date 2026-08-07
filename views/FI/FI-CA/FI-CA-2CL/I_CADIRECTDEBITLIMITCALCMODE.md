---
name: I_CADIRECTDEBITLIMITCALCMODE
description: Cadirectdebitlimitcalcmode
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
# I_CADIRECTDEBITLIMITCALCMODE

**Cadirectdebitlimitcalcmode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CADirectDebitLimitCalcMode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as ddlxg_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADirectDebitLimitCalcModeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Direct Debit Limit Calculation Mode'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADirectDebitLimitCalcMode',
                sapObjectNodeType.name: 'ContrAcctgDrctDebitLmtCalcMode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADirectDebitLimitCalcMode
  as select from dd07l

  association [1..*] to I_CADirectDebitLimitCalcModeT as _Text on $projection.CADirectDebitLimitCalcMode = _Text.CADirectDebitLimitCalcMode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as ddlxg_kk preserving type ) as CADirectDebitLimitCalcMode,

      _Text
}
where
      domname  = 'DDLXG_KK'
  and as4local = 'A'
```
