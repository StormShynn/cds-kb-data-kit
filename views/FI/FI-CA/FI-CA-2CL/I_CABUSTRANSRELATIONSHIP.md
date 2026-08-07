---
name: I_CABUSTRANSRELATIONSHIP
description: Cabustransrelationship
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
# I_CABUSTRANSRELATIONSHIP

**Cabustransrelationship**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusTransRelationship` | ✓ | |  | `cast ( left( dd07l.domvalue_l, 2 ) as evl_objrl_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABusTransRelationshipText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Transaction Relationship'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusTransRelationship',
                sapObjectNodeType.name: 'ContrAcctgBusTransRelationship',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusTransRelationship
  as select from dd07l

  association [1..*] to I_CABusTransRelationshipText as _Text on $projection.CABusTransRelationship = _Text.CABusTransRelationship

{
      @ObjectModel.text.association: '_Text'
  key cast ( left( dd07l.domvalue_l, 2 ) as evl_objrl_kk preserving type ) as CABusTransRelationship,

      _Text
}
where
      domname  = 'EVL_OBJRL_KK'
  and as4local = 'A'
```
