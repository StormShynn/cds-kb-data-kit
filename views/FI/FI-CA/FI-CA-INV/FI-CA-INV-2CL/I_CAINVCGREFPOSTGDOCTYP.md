---
name: I_CAINVCGREFPOSTGDOCTYP
description: Cainvcgrefpostgdoctyp
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
# I_CAINVCGREFPOSTGDOCTYP

**Cainvcgrefpostgdoctyp**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAInvcgRefPostingDocType` | ✓ | | `_tfk2605` | `cadoctype` |
| `_CAInvcgRefPostgDocTypTxt` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgRefPostgDocTypTxt` | `I_CAInvcgRefPostgDocTypTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Referenzbelegarten für Buchungsbelege'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgRefPostingDocType',
  sapObjectNodeType.name: 'ContrAcctgInvcgRefPostgDocType',
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

define view entity I_CAInvcgRefPostgDocTyp
  as select from tfk2605 as _tfk2605
  association [0..*] to I_CAInvcgRefPostgDocTypTxt as _CAInvcgRefPostgDocTypTxt on $projection.CAInvcgRefPostingDocType = _CAInvcgRefPostgDocTypTxt.CAInvcgRefPostingDocType
{
      @ObjectModel.text.association: '_CAInvcgRefPostgDocTypTxt'
  key _tfk2605.cadoctype as CAInvcgRefPostingDocType,
      _CAInvcgRefPostgDocTypTxt
}
```
