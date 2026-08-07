---
name: I_CASCRTYDEPDOCCATEGORYTEXT
description: "Cascrtydepdoccategorytext"
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
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASCRTYDEPDOCCATEGORYTEXT

**Cascrtydepdoccategorytext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CASecurityDepositDocCategory` | ✓ | |  | `cast( left( dd07t.domvalue_l, 3 ) as secdep_doc_category_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `CASecurityDepositDocCatText` |  | |  | `cast( ddtext as secdep_doc_category_text_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Security Deposit Document Categ - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CASecurityDepositDocCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAScrtyDepDocCategoryText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( dd07t.domvalue_l, 3 ) as secdep_doc_category_kk preserving type ) as CASecurityDepositDocCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                             as Language,

      @Semantics.text: true
      cast( ddtext as secdep_doc_category_text_kk preserving type )                 as CASecurityDepositDocCatText,

      _Language
}
where
      dd07t.domname  = 'SECDEP_DOC_CATEGORY_KK'
  and dd07t.as4local = 'A'
```
