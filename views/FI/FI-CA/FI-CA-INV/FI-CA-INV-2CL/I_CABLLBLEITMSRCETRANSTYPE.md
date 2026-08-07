---
name: I_CABLLBLEITMSRCETRANSTYPE
description: "Cabllbleitmsrcetranstype"
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABLLBLEITMSRCETRANSTYPE

**Cabllbleitmsrcetranstype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABllbleItmSourceTransType` | ✓ | | `_tfk8103` | `srctatype` |  |  |
| `CABllbleItmSourceTransSemObj` |  | |  | `semantic_object` |  |  |
| `_CABllbleItmSrceTransTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmSrceTransTypeText` | `I_CABllbleItmSrceTransTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Art des Quellvorgangs'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABllbleItmSourceTransType',
  sapObjectNodeType.name: 'CABllbleItmSrceTransType',
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
define view entity I_CABllbleItmSrceTransType
  as select from tfk8103 as _tfk8103
  association [0..*] to I_CABllbleItmSrceTransTypeText as _CABllbleItmSrceTransTypeText on $projection.CABllbleItmSourceTransType = _CABllbleItmSrceTransTypeText.CABllbleItmSourceTransType
{
      @ObjectModel.text.association: '_CABllbleItmSrceTransTypeText'
  key _tfk8103.srctatype as CABllbleItmSourceTransType,

      @UI.hidden: true
      semantic_object    as CABllbleItmSourceTransSemObj,

      _CABllbleItmSrceTransTypeText
}
```
