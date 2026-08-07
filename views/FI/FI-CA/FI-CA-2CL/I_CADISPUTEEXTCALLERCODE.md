---
name: I_CADISPUTEEXTCALLERCODE
description: Cadisputeextcallercode
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
  - dispute
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADISPUTEEXTCALLERCODE

**Cadisputeextcallercode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CADisputeExternalCallerCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 3 ) as calld_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADisputeExtCallerCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dispute External Caller Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADisputeExternalCallerCode',
                sapObjectNodeType.name: 'ContrAcctgDisputeExtCallerCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }
@VDM.viewType: #BASIC

define view entity I_CADisputeExtCallerCode
  as select from dd07l

  association [1..*] to I_CADisputeExtCallerCodeText as _Text on $projection.CADisputeExternalCallerCode = _Text.CADisputeExternalCallerCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 3 ) as calld_kk preserving type ) as CADisputeExternalCallerCode,

      _Text
}
where
      domname  = 'CALLD_KK'
  and as4local = 'A'
```
