---
name: I_CAINVCGCATEGORYTEXT
description: Cainvcgcategorytext
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
# I_CAINVCGCATEGORYTEXT

**Cainvcgcategorytext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAInvcgCategory` | ✓ | | `_tfk2604t` | `inv_category` |
| `Language` | ✓ | | `_tfk2604t` | `langu` |
| `CAInvcgCategoryText` |  | |  | `cast( _tfk2604t.text as inv_category_txt_gfn_kk preserving type )` |
| `_CAInvcgCategory` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgCategory` | `I_CAInvcgCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Fakturierungstyp - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgCategory',
  sapObjectNodeType.name: 'ContrAcctgInvcgCategoryText',
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

define view entity I_CAInvcgCategoryText
  as select from tfk2604t as _tfk2604t
  association [1..1] to I_CAInvcgCategory as _CAInvcgCategory on $projection.CAInvcgCategory = _CAInvcgCategory.CAInvcgCategory
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgCategory'
  key _tfk2604t.inv_category                                            as CAInvcgCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2604t.langu                                                   as Language,
      @Semantics.text: true
      cast( _tfk2604t.text as inv_category_txt_gfn_kk preserving type ) as CAInvcgCategoryText,

      _CAInvcgCategory,
      _Language
}
```
