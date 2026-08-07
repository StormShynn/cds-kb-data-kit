---
name: I_CAINVCGSOURCEDOCTYPETEXT
description: "Cainvcgsourcedoctypetext"
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
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGSOURCEDOCTYPETEXT

**Cainvcgsourcedoctypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgSourceDocumentType` | ✓ | | `_tfk2605sct` | `srcdoctype` |  |  |
| `CAInvcgSourceDocumentCat` | ✓ | | `_tfk2605sct` | `srcdoccat` |  |  |
| `Language` | ✓ | | `_tfk2605sct` | `langu` |  |  |
| `CAInvcgSourceDocTypeText` |  | |  | `cast( _tfk2605sct.text as srcdoctype_txt_gfn_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CAInvcgSourceDocCat` | | ✓ | | | | |
| `_CAInvcgSourceDocType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CAInvcgSourceDocCat` | `I_CAInvcgSourceDocCat` | [1..1] |
| `_CAInvcgSourceDocType` | `I_CAInvcgSourceDocType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Quellbelegarten (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgSourceDocumentType',
  sapObjectNodeType.name: 'ContrAcctgInvcgSrceDocTypeText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgSourceDocTypeText
  as select from tfk2605sct as _tfk2605sct
  association [0..1] to I_Language             as _Language             on  $projection.Language = _Language.Language
  association [1..1] to I_CAInvcgSourceDocCat  as _CAInvcgSourceDocCat  on  $projection.CAInvcgSourceDocumentCat = _CAInvcgSourceDocCat.CAInvcgSourceDocumentCat
  association [0..1] to I_CAInvcgSourceDocType as _CAInvcgSourceDocType on  $projection.CAInvcgSourceDocumentType = _CAInvcgSourceDocType.CAInvcgSourceDocumentType
                                                                        and $projection.CAInvcgSourceDocumentCat  = _CAInvcgSourceDocType.CAInvcgSourceDocumentCat
{
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocType'
  key _tfk2605sct.srcdoctype                                            as CAInvcgSourceDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocCat'
  key _tfk2605sct.srcdoccat                                             as CAInvcgSourceDocumentCat,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2605sct.langu                                                 as Language,
      @Semantics.text: true
      cast( _tfk2605sct.text as srcdoctype_txt_gfn_kk preserving type ) as CAInvcgSourceDocTypeText,

      _CAInvcgSourceDocCat,
      _CAInvcgSourceDocType,
      _Language
}
```
