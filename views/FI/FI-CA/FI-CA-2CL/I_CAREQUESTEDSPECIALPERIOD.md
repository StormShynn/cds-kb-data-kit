---
name: I_CAREQUESTEDSPECIALPERIOD
description: Carequestedspecialperiod
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
# I_CAREQUESTEDSPECIALPERIOD

**Carequestedspecialperiod**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CARequestedPeriodForGLTransfer` | ✓ | |  | `cast( left( dd07l.domvalue_l, 2 ) as wnper_kk )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CARequestedSpecialPeriodT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Requested Special Period'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CARequestedPeriodForGLTransfer',
                sapObjectNodeType.name: 'ContrAcctgReqdSpecialPeriod',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CARequestedSpecialPeriod
  as select from dd07l

  association [1..*] to I_CARequestedSpecialPeriodT as _Text on $projection.CARequestedPeriodForGLTransfer = _Text.CARequestedPeriodForGLTransfer

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 2 ) as wnper_kk ) as CARequestedPeriodForGLTransfer,

      _Text
}
where
      domname  = 'WNPER_KK'
  and as4local = 'A'
```
