---
name: I_CABLLBLEITMCLASS
description: Cabllbleitmclass
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
# I_CABLLBLEITMCLASS

**Cabllbleitmclass**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABllbleItmClass` | `_tfk8101C.bitcat` |
| `_CABllbleItmClassText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmClassText` | `I_CABllbleItmClassText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Klassen der abr. Positionen' 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABllbleItmClass',
  sapObjectNodeType.name: 'ContrAcctgBillableItemClass',
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
define view entity I_CABllbleItmClass
  as select from tfk8101c as _tfk8101C
  association [0..*] to I_CABllbleItmClassText      as _CABllbleItmClassText      on $projection.CABllbleItmClass = _CABllbleItmClassText.CABllbleItmClass
{
      @ObjectModel.text.association: '_CABllbleItmClassText'
  key _tfk8101C.bitcat as CABllbleItmClass,
  
      _CABllbleItmClassText
}
```
