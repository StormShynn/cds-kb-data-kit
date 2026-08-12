---
name: I_CABLLBLEITMDISCOUNTKEY
description: "Cabllbleitmdiscountkey"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CABLLBLEITMDISCOUNTKEY

**Cabllbleitmdiscountkey**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABllbleItmDiscountKey` | ✓ | | `_tfk8117` | `disckey` |  |  |
| `CABllbleItmDiscUtilzn` |  | | `_tfk8117` | `utilization` |  |  |
| `_CABllbleItmDiscountKeyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmDiscountKeyText` | `I_CABllbleItmDiscountKeyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Rabatt-/Zuschlagschlüssel für abr. Pos.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABllbleItmDiscountKey',
  sapObjectNodeType.name: 'ContrAcctgBllbleItmDiscountKey',
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
define view entity I_CABllbleItmDiscountKey
  as select from tfk8117 as _tfk8117
  association [0..*] to I_CABllbleItmDiscountKeyText as _CABllbleItmDiscountKeyText on $projection.CABllbleItmDiscountKey = _CABllbleItmDiscountKeyText.CABllbleItmDiscountKey

{
      @ObjectModel.text.association: '_CABllbleItmDiscountKeyText'
  key _tfk8117.disckey as CABllbleItmDiscountKey,
      _tfk8117.utilization as CABllbleItmDiscUtilzn,
      _CABllbleItmDiscountKeyText
}
```
