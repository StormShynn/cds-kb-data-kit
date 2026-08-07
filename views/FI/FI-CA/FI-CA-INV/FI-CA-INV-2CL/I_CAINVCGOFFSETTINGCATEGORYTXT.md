---
name: I_CAINVCGOFFSETTINGCATEGORYTXT
description: Cainvcgoffsettingcategorytxt
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
# I_CAINVCGOFFSETTINGCATEGORYTXT

**Cainvcgoffsettingcategorytxt**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAInvcgOffsettingCategory` | ✓ | |  | `offset_cat` |
| `Language` | ✓ | |  | `cast( langu as spras preserving type )` |
| `CAInvcgOffsettingCategoryTxt` |  | |  | `cast( text as inv_offset_cat_txt_gfn_kk preserving type )` |
| `_CAInvcgOffsettingCategory` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICAINV_OFFSCATT'
@EndUserText.label: 'Typ der Anrechnung (Text)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgOffsettingCategory',
  sapObjectNodeType.name: 'ContrAcctgInvcgOffstgCatText',
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

define view entity I_CAInvcgOffsettingCategoryTxt
  as select from tfk2609t
  association [0..1] to I_CAInvcgOffsettingCategory as _CAInvcgOffsettingCategory on $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
       @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
       @ObjectModel.text.element: ['CAInvcgOffsettingCategoryTxt']
  key  offset_cat                                                as CAInvcgOffsettingCategory,

       @Semantics.language
       @ObjectModel.foreignKey.association: '_Language'
  key  cast( langu as spras preserving type )                    as Language,

       @Semantics.text
       cast( text as inv_offset_cat_txt_gfn_kk preserving type ) as CAInvcgOffsettingCategoryTxt,

       _CAInvcgOffsettingCategory,
       _Language

}
```
