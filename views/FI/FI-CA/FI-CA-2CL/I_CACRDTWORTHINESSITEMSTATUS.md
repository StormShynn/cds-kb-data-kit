---
name: I_CACRDTWORTHINESSITEMSTATUS
description: Cacrdtworthinessitemstatus
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
  - status
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACRDTWORTHINESSITEMSTATUS

**Cacrdtworthinessitemstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CACrdtWorthinessItemStatus` | ✓ | |  | `cast( left( domvalue_l, 1 ) as bonis_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACrdtWorthinessItemStatusT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Creditworthiness Item Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACrdtWorthinessItemStatus',
                sapObjectNodeType.name: 'CACreditWorthinessItemStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACrdtWorthinessItemStatus
  as select from dd07l

  association [1..*] to I_CACrdtWorthinessItemStatusT as _Text on $projection.CACrdtWorthinessItemStatus = _Text.CACrdtWorthinessItemStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l, 1 ) as bonis_kk preserving type ) as CACrdtWorthinessItemStatus,

     _Text
}
where
      domname  = 'BONIS_KK'
  and as4local = 'A'
```
