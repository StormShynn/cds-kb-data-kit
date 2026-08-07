---
name: I_CAINVCGDOCTECHDOCTYPETEXT
description: Cainvcgdoctechdoctypetext
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
# I_CAINVCGDOCTECHDOCTYPETEXT

**Cainvcgdoctechdoctypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgTechnicalDocumentType` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as techdoctype_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |  |  |
| `CAInvcgDocTechDocTypeText` |  | |  | `cast ( ddtext as techdoctype_txt_gfn_kk preserving type )` |  |  |
| `_CAInvcgDocTechDocType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocTechDocType` | `I_CAInvcgDocTechDocType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Art des technischen Belegs (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgTechnicalDocumentType',
  sapObjectNodeType.name: 'ContrAcctgInvcgTechDocTypeText',
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

define view entity I_CAInvcgDocTechDocTypeText
  as select from dd07t
  association [1..1] to I_CAInvcgDocTechDocType as _CAInvcgDocTechDocType on $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocType.CAInvcgTechnicalDocumentType
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocTechDocType'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as techdoctype_kk preserving type ) as CAInvcgTechnicalDocumentType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                 as Language,
      @Semantics.text
      cast ( ddtext as techdoctype_txt_gfn_kk preserving type )                    as CAInvcgDocTechDocTypeText,

      _CAInvcgDocTechDocType,
      _Language
}
where
      domname  = 'TECHDOCTYPE_KK'
  and as4local = 'A'
```
