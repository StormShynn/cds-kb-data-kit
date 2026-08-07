---
name: I_CAINVCGCATEGORY
description: Cainvcgcategory
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
# I_CAINVCGCATEGORY

**Cainvcgcategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgCategory` | ✓ | | `_tfk2604` | `inv_category` |  |  |
| `_CAInvcgCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgCategoryText` | `I_CAInvcgCategoryText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}

@EndUserText.label: 'Fakturierungstyp'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgCategory',
  sapObjectNodeType.name: 'ContrAcctgInvoicingCategory',
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

define view entity I_CAInvcgCategory
  as select from tfk2604 as _tfk2604
  association [1..*] to I_CAInvcgCategoryText as _CAInvcgCategoryText on $projection.CAInvcgCategory = _CAInvcgCategoryText.CAInvcgCategory

{
      @ObjectModel.text.association: '_CAInvcgCategoryText'
  key _tfk2604.inv_category as CAInvcgCategory,
      _CAInvcgCategoryText
}
```
