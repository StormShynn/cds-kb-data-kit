---
name: I_CAOVERDUEITEMORIGIN
description: "Caoverdueitemorigin"
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
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOVERDUEITEMORIGIN

**Caoverdueitemorigin**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAOverdueItemOrigin` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as overdue_item_origin_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAOverdueItemOriginText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Overdue Item Origin'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAOverdueItemOrigin',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAOverdueItemOrigin
  as select from dd07l

  association [1..*] to I_CAOverdueItemOriginText as _Text on $projection.CAOverdueItemOrigin = _Text.CAOverdueItemOrigin

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as overdue_item_origin_kk preserving type ) as CAOverdueItemOrigin,

      _Text
}
where
      domname  = 'OVERDUE_ITEM_ORIGIN_KK'
  and as4local = 'A'
```
