---
name: I_CADISPUTETYPE
description: "Cadisputetype"
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
  - dispute
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADISPUTETYPE

**Cadisputetype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADisputeType` | ✓ | |  | `cast( left( dd07l.domvalue_l, 4 ) as fkkdm_int_reason preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADisputeTypeText` | [1..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dispute Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADisputeType',
                sapObjectNodeType.name: 'ContrAcctgDisputeType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADisputeType
  as select from dd07l

  association [1..*] to I_CADisputeTypeText as _Text on $projection.CADisputeType = _Text.CADisputeType

{
  key cast( left( dd07l.domvalue_l, 4 ) as fkkdm_int_reason preserving type ) as CADisputeType,

      _Text
}
where
      domname  = 'FKKDM_INT_REASON'
  and as4local = 'A'
```
