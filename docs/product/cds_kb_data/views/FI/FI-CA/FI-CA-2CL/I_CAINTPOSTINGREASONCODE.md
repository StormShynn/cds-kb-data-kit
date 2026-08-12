---
name: I_CAINTPOSTINGREASONCODE
description: "Caintpostingreasoncode"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAINTPOSTINGREASONCODE

**Caintpostingreasoncode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInternalPostingReasonCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as intbu_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAIntPostingReasonCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Internal Posting Reason Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAInternalPostingReasonCode',
                sapObjectNodeType.name: 'ContrAcctgIntPostingReasonCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAIntPostingReasonCode
  as select from dd07l

  association [1..*] to I_CAIntPostingReasonCodeText as _Text on $projection.CAInternalPostingReasonCode = _Text.CAInternalPostingReasonCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as intbu_kk preserving type ) as CAInternalPostingReasonCode,

      _Text
}
where
      domname  = 'INTBU_KK'
  and as4local = 'A'
```
