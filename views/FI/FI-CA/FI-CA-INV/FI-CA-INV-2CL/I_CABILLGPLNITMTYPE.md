---
name: I_CABILLGPLNITMTYPE
description: Cabillgplnitmtype
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
# I_CABILLGPLNITMTYPE

**Cabillgplnitmtype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CABillgPlnItmType` | ✓ | | `_tfk8213` | `bipitemtype` |
| `CABillgPlnItmCat` |  | | `_tfk8213` | `bipitemcat` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABillgPlnItmTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Art der Abrechnungsplanposition'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnItmType',
  sapObjectNodeType.name: 'ContrAcctgBillingPlanItemType',
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
define view entity I_CABillgPlnItmType
  as select from tfk8213 as _tfk8213  
  association [0..*] to I_CABillgPlnItmTypeText as _Text on $projection.CABillgPlnItmType = _Text.CABillgPlnItmType
{
      @ObjectModel.text.association: '_Text'
  key _tfk8213.bipitemtype      as CABillgPlnItmType,
      _tfk8213.bipitemcat       as CABillgPlnItmCat,

      _Text
}
```
