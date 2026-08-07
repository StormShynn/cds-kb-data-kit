---
name: I_CAINVCGSOURCEDOCCAT
description: "Cainvcgsourcedoccat"
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
# I_CAINVCGSOURCEDOCCAT

**Cainvcgsourcedoccat**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgSourceDocumentCat` | ✓ | |  | `srcdoccat` |  |  |
| `CAInvcgSourceDocumentSemObj` |  | |  | `semantic_object` |  |  |
| `_CAInvcgSourceDocCatText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgSourceDocCatText` | `I_CAInvcgSourceDocCatText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Quellbelegtypen'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgSourceDocumentCat',
  sapObjectNodeType.name: 'ContrAcctgInvcgSrceDocCategory',
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

define view entity I_CAInvcgSourceDocCat
  as select from tfk2605c
  association [0..*] to I_CAInvcgSourceDocCatText as _CAInvcgSourceDocCatText on $projection.CAInvcgSourceDocumentCat = _CAInvcgSourceDocCatText.CAInvcgSourceDocumentCat
{
      @ObjectModel.text.association: '_CAInvcgSourceDocCatText'
  key srcdoccat       as CAInvcgSourceDocumentCat,

      @UI.hidden: true
      semantic_object as CAInvcgSourceDocumentSemObj,

      _CAInvcgSourceDocCatText
}
```
