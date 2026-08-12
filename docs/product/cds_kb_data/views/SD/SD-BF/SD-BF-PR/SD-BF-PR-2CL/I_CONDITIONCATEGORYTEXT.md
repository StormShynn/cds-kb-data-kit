---
name: I_CONDITIONCATEGORYTEXT
description: "Conditioncategorytext"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONCATEGORYTEXT

**Conditioncategorytext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `ConditionCategory` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kntyp )` |  |  |
| `ConditionCategoryName` |  | |  | `cast ( ddtext as price_element_category_descr )` |  |  |
| `_ConditionCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionCategory` | `I_ConditionCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNCATEGORYT'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Category - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionCategory'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]

define view I_ConditionCategoryText 
  as select from dd07t
  association [0..1] to I_ConditionCategory as _ConditionCategory on $projection.ConditionCategory = _ConditionCategory.ConditionCategory
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,
      @ObjectModel.foreignKey.association: '_ConditionCategory'
  key cast ( substring( domvalue_l, 1, 1 ) as kntyp ) as ConditionCategory,
      @Semantics.text:true
      cast ( ddtext as price_element_category_descr ) as ConditionCategoryName,
      _ConditionCategory,
      _Language 
}
where
      domname  = 'KNTYP'
  and as4local = 'A'
```
