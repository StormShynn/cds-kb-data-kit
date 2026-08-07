---
name: I_CABILLGPLNCATEGORY
description: Cabillgplncategory
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
# I_CABILLGPLNCATEGORY

**Cabillgplncategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CABillgPlnCategory` | ✓ | | `_tfk8210` | `bipcat` |
| `CABillgPlnIsNotEditable` |  | | `_tfk8210` | `xnoedit` |
| `_CABillgPlnCategoryText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnCategoryText` | `I_CABillgPlnCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Typ des Abrechnungsplans'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnCategory',
  sapObjectNodeType.name: 'ContrAcctgBillingPlanCategory',
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
  },
  resultSet.sizeCategory: #XS
}
@VDM.viewType: #BASIC
define view entity I_CABillgPlnCategory
  as select from tfk8210 as _tfk8210
  association [0..*] to I_CABillgPlnCategoryText as _CABillgPlnCategoryText on $projection.CABillgPlnCategory = _CABillgPlnCategoryText.CABillgPlnCategory
{
      @ObjectModel.text.association: '_CABillgPlnCategoryText'
  key _tfk8210.bipcat  as CABillgPlnCategory,

      @UI.hidden: true
      _tfk8210.xnoedit as CABillgPlnIsNotEditable,

      _CABillgPlnCategoryText
}
```
