---
name: I_CAINVCGPRELIMINARYCATEGORYT
description: Cainvcgpreliminarycategoryt
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
# I_CAINVCGPRELIMINARYCATEGORYT

**Cainvcgpreliminarycategoryt**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAInvcgPreliminaryCategory` | `cast( prlinv_cat as prlinv_cat_gfn_kk preserving type )` |
| key `Language` | `langu` |
| `CAInvcgPreliminaryCategoryTxt` | `cast( text as prlinv_cat_txt_gfn_kk preserving type )` |
| `_Language` | *Association* |
| `_CAInvcgPreliminaryCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics: {
  technicalName: 'ICATFK2639T',
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Typ der Vorl. Rechnung (Text)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgPreliminaryCategory',
  sapObjectNodeType.name: 'ContrAcctgInvcgPrelimCatText',
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


define view entity I_CAInvcgPreliminaryCategoryT
  as select from tfk2639t
  association        to parent I_CAInvcgPreliminaryCategory as _CAInvcgPreliminaryCategory on $projection.CAInvcgPreliminaryCategory = _CAInvcgPreliminaryCategory.CAInvcgPreliminaryCategory
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgPreliminaryCategory'
      @ObjectModel.text.element: ['CAInvcgPreliminaryCategoryTxt']
  key cast( prlinv_cat as prlinv_cat_gfn_kk preserving type ) as CAInvcgPreliminaryCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu                                                   as Language,

      //      @Search.defaultSearchElement: true
      //      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( text as prlinv_cat_txt_gfn_kk preserving type )   as CAInvcgPreliminaryCategoryTxt,

      _CAInvcgPreliminaryCategory,
      _Language
}
```
