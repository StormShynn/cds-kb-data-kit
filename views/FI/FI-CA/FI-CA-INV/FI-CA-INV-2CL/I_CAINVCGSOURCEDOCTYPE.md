---
name: I_CAINVCGSOURCEDOCTYPE
description: "Cainvcgsourcedoctype"
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
# I_CAINVCGSOURCEDOCTYPE

**Cainvcgsourcedoctype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgSourceDocumentCat` | ✓ | | `_tfk2605sc` | `srcdoccat` |  |  |
| `CAInvcgSourceDocumentType` | ✓ | | `_tfk2605sc` | `srcdoctype` |  |  |
| `_CAInvcgSourceDocTypeText` | | ✓ | | | | |
| `_CAInvcgSourceDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgSourceDocTypeText` | `I_CAInvcgSourceDocTypeText` | [0..*] |
| `_CAInvcgSourceDocCat` | `I_CAInvcgSourceDocCat` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Quellbelegarten'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgSourceDocumentType',
  sapObjectNodeType.name: 'ContrAcctgInvcgSourceDocType',
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

define view entity I_CAInvcgSourceDocType
  as select from tfk2605sc as _tfk2605sc
  association [0..*] to I_CAInvcgSourceDocTypeText as _CAInvcgSourceDocTypeText on  $projection.CAInvcgSourceDocumentType = _CAInvcgSourceDocTypeText.CAInvcgSourceDocumentType
                                                                                and $projection.CAInvcgSourceDocumentCat  = _CAInvcgSourceDocTypeText.CAInvcgSourceDocumentCat
  association [1..1] to I_CAInvcgSourceDocCat      as _CAInvcgSourceDocCat      on  $projection.CAInvcgSourceDocumentCat = _CAInvcgSourceDocCat.CAInvcgSourceDocumentCat
{
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocCat'
  key _tfk2605sc.srcdoccat  as CAInvcgSourceDocumentCat,
      @ObjectModel.text.association: '_CAInvcgSourceDocTypeText'
  key _tfk2605sc.srcdoctype as CAInvcgSourceDocumentType,

      _CAInvcgSourceDocTypeText,
      _CAInvcgSourceDocCat
}
```
