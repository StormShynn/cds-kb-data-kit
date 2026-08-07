---
name: I_MFGORDERCATEGORYTEXT
description: "Mfgordercategorytext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERCATEGORYTEXT

**Mfgordercategorytext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrderCategory` | ✓ | |  | `cast( cast(substring(t.domvalue_l, 1, 2) as abap.numc(2) ) as manufacturingordercategory preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `ManufacturingOrderCategoryName` |  | |  | `cast(t.ddtext as manufacturingordercategoryname preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_MfgOrderCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPPMFGORDCATTXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ManufacturingOrderCategory'
@ObjectModel.sapObjectNodeType.name: 'ManufacturingOrderCategoryText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Category - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MfgOrderCategoryText
  as select from dd07t as t
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
  association [1..1] to I_MfgOrderCategory as _MfgOrderCategory on $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  {
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      @ObjectModel.text.element: ['ManufacturingOrderCategoryName']
  key cast( cast(substring(t.domvalue_l, 1, 2) as abap.numc(2) ) as manufacturingordercategory preserving type) as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                      as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}  
      @Semantics.text: true
      cast(t.ddtext as manufacturingordercategoryname preserving type) as ManufacturingOrderCategoryName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                     as DomainValue,
    
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _MfgOrderCategory,
      _Language
  }
  where t.domname = 'MANUFACTURINGORDERCATEGORY'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
