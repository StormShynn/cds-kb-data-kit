---
name: I_SALESDOCUMENTTYPELANGDEPDNT
description: "Salesdocumenttypelangdepdnt"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - sales-document
  - document
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTTYPELANGDEPDNT

**Salesdocumenttypelangdepdnt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentType` | ✓ | |  | `auart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SalesDocumentTypeLangDepdnt` |  | |  | `auart_spr` |  |  |
| `_SalesDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentType` | `I_SalesDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Sales Document Item Language Dependent'
@Analytics: { dataCategory: #DIMENSION}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSDOCLANGDPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentTypeLangDepdnt
  as select from tauum

  association [1..1] to I_SalesDocumentType as _SalesDocumentType on $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      //key
  key auart        as SalesDocumentType,
      @ObjectModel.foreignKey.association: '_Language'
  key spras        as Language,

      auart_spr    as SalesDocumentTypeLangDepdnt,
      
      //Association
      _SalesDocumentType,
      _Language
};
```
