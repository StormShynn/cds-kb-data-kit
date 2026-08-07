---
name: I_CABILLGPLNTYPE
description: Cabillgplntype
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
# I_CABILLGPLNTYPE

**Cabillgplntype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnType` | ✓ | | `_tfk8211` | `biptype` |  |  |
| `CABillgPlnCategory` |  | | `_tfk8211` | `bipcat` |  |  |
| `CABillgPlnIsNotEditable` |  | | `_tfk8211` | `xnoedit` |  |  |
| `_CABillgPlnTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnTypeText` | `I_CABillgPlnTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Art des Abrechnungsplans'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnType',
  sapObjectNodeType.name: 'ContrAcctgBillingPlanType',
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
define view entity I_CABillgPlnType
  as select from tfk8211 as _tfk8211
  association [0..*] to I_CABillgPlnTypeText as _CABillgPlnTypeText on $projection.CABillgPlnType = _CABillgPlnTypeText.CABillgPlnType
{
      @ObjectModel.text.association: '_CABillgPlnTypeText'
      @Consumption.filter.hidden: true
  key _tfk8211.biptype as CABillgPlnType,
      _CABillgPlnTypeText,

      @Consumption.filter.hidden: true
      _tfk8211.bipcat  as CABillgPlnCategory,

      @UI.hidden: true
      _tfk8211.xnoedit as CABillgPlnIsNotEditable
}
```
