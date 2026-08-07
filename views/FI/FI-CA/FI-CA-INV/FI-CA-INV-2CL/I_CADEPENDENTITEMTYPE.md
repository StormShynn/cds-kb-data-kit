---
name: I_CADEPENDENTITEMTYPE
description: Cadependentitemtype
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CADEPENDENTITEMTYPE

**Cadependentitemtype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CADependentItemType` | ✓ | |  | `cast( _tfk8240.dittype as ditrsn_gfn_kk preserving type )` |
| `_CADependentItemTypeText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CADependentItemTypeText` | `I_CADependentItemTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Arten abhängiger Positionen'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CADependentItemType',
  sapObjectNodeType.name: 'ContrAcctgDependentItemType',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CADependentItemType
  as select from tfk8240 as _tfk8240
  association [0..*] to I_CADependentItemTypeText as _CADependentItemTypeText on $projection.CADependentItemType = _CADependentItemTypeText.CADependentItemType
{
      @ObjectModel.text.association: '_CADependentItemTypeText'
  key cast( _tfk8240.dittype as ditrsn_gfn_kk preserving type ) as CADependentItemType,
      _CADependentItemTypeText
}
```
