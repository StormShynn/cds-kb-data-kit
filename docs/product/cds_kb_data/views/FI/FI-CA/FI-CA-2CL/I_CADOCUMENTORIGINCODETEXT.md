---
name: I_CADOCUMENTORIGINCODETEXT
description: "Cadocumentorigincodetext"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - document
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTORIGINCODETEXT

**Cadocumentorigincodetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentOriginCode` | ✓ | |  | `herkf` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CADocumentOriginCodeName` |  | |  | `cast( htext as herkf_text_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics.dataExtraction.enabled : true

@EndUserText.label: 'Document Origin Code - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CADocumentOriginCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADocumentOriginCodeText
  as select from tfk001t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key herkf                                          as CADocumentOriginCode,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                          as Language,

      @Semantics.text
      cast( htext as herkf_text_kk preserving type ) as CADocumentOriginCodeName,

      _Language
}
```
