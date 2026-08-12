---
name: I_CADOCUMENTTYPETEXT
description: "Cadocumenttypetext"
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
# I_CADOCUMENTTYPETEXT

**Cadocumenttypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentType` | ✓ | |  | `blart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAApplicationArea` | ✓ | |  | `applk` |  |  |
| `CADocumentTypeName` |  | |  | `cast( ltext as blart_text_kk preserving type )` |  |  |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_Language` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{ dataExtraction: { enabled: true,
                               delta.changeDataCapture.automatic: true } }

@EndUserText.label: 'Document Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CADocumentType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING } }

@VDM.viewType: #BASIC

define view entity I_CADocumentTypeText
  as select from tfk003t

  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
  association [1..1] to I_CAApplicationArea as _CAApplicationArea on $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea

{
  key blart                                           as CADocumentType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                           as Language,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key applk                                           as CAApplicationArea,

      @Semantics.text
      cast( ltext as blart_text_kk  preserving type ) as CADocumentTypeName,

      _Language,
      _CAApplicationArea,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea                              as _ApplArea
}
```
