---
name: I_CAINVCGSOURCEDOCCATTEXT
description: "Cainvcgsourcedoccattext"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CAINVCGSOURCEDOCCATTEXT

**Cainvcgsourcedoccattext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgSourceDocumentCat` | ✓ | | `_tfk2605ct` | `srcdoccat` |  |  |
| `Language` | ✓ | | `_tfk2605ct` | `langu` |  |  |
| `CAInvcgSourceDocCatText` |  | |  | `cast( _tfk2605ct.text as srcdoccat_txt_gfn_kk preserving type )` |  |  |
| `_CAInvcgSourceDocCat` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgSourceDocCat` | `I_CAInvcgSourceDocCat` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Quellbelegtypen (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgSourceDocumentCat',
  sapObjectNodeType.name: 'ContrAcctgInvcgSrceDocCatText',
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

define view entity I_CAInvcgSourceDocCatText
  as select from tfk2605ct as _tfk2605ct
  association [0..1] to I_CAInvcgSourceDocCat as _CAInvcgSourceDocCat on $projection.CAInvcgSourceDocumentCat = _CAInvcgSourceDocCat.CAInvcgSourceDocumentCat
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocCat'
  key _tfk2605ct.srcdoccat                                            as CAInvcgSourceDocumentCat,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2605ct.langu                                                as Language,
      @Semantics.text: true
      cast( _tfk2605ct.text as srcdoccat_txt_gfn_kk preserving type ) as CAInvcgSourceDocCatText,
      
      _CAInvcgSourceDocCat,
      _Language
}
```
