---
name: I_CADUNNINGVALUATIONSTATUS
description: "Cadunningvaluationstatus"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADUNNINGVALUATIONSTATUS

**Cadunningvaluationstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADunningValuationStatus` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as scdst_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADunningValuationStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dunning Valuation Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADunningValuationStatus',
                sapObjectNodeType.name: 'ContrAcctgDunningValnStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADunningValuationStatus
  as select from dd07l

  association [0..*] to I_CADunningValuationStatusText as _Text on $projection.CADunningValuationStatus = _Text.CADunningValuationStatus

{
  key cast( left( dd07l.domvalue_l, 1 ) as scdst_kk preserving type ) as CADunningValuationStatus,

      _Text

}
where
      domname  = 'SCDST_KK'
  and as4local = 'A'
```
