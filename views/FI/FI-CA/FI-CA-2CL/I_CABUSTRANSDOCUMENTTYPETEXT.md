---
name: I_CABUSTRANSDOCUMENTTYPETEXT
description: Cabustransdocumenttypetext
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
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
# I_CABUSTRANSDOCUMENTTYPETEXT

**Cabustransdocumenttypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CABusTransDocumentType` | ✓ | |  | `cast( left( dd07t.domvalue_l, 4 ) as evl_doctyp_kk preserving type )` |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |
| `CABusTransDocumentTypeText` |  | |  | `cast( ddtext as evl_doctyp_text_kk preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Bus Transaction Document Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CABusTransDocumentType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusTransDocumentTypeText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( dd07t.domvalue_l, 4 ) as evl_doctyp_kk preserving type ) as CABusTransDocumentType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                          as Language,

      @Semantics.text
      cast( ddtext as evl_doctyp_text_kk preserving type )                 as CABusTransDocumentTypeText,

      _Language
}
where
      domname  = 'EVL_DOCTYP_KK'
  and as4local = 'A'
```
