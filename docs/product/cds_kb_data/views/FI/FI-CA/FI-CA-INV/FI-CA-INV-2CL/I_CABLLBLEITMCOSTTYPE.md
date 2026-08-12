---
name: I_CABLLBLEITMCOSTTYPE
description: "Cabllbleitmcosttype"
app_component: FI-CA-INV-2CL
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
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABLLBLEITMCOSTTYPE

**Cabllbleitmcosttype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABllbleItmCostType` | ✓ | |  | `cast(co_type as co_type_gfn_kk preserving type)` |  |  |
| `_CABllbleItmCostTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmCostTypeText` | `I_CABllbleItmCostTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}

@EndUserText.label: 'Kostenunterart der abr Pos'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABllbleItmCostType',
  sapObjectNodeType.name: 'ContrAcctgBillableItemCostType',
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

define view entity I_CABllbleItmCostType
  as select from tfk8260 as _tfk2604
  association [1..*] to I_CABllbleItmCostTypeText as _CABllbleItmCostTypeText on $projection.CABllbleItmCostType = _CABllbleItmCostTypeText.CABllbleItmCostType
{
      @ObjectModel.text.association: '_CABllbleItmCostTypeText'
  key cast(co_type as co_type_gfn_kk preserving type) as CABllbleItmCostType,
      _CABllbleItmCostTypeText
}
```
