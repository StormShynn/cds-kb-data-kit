---
name: I_PLANNEDORDERCATEGORYTEXT
description: Planned OrderCATEGORYTEXT
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
  - planned-order
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERCATEGORYTEXT

**Planned OrderCATEGORYTEXT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrderCategory` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as plannedordercategory preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `PlannedOrderCategoryName` |  | |  | `cast(txt.ddtext as plannedordercategoryname preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Category` | `I_PlannedOrderCategory` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPPPLNDORDCATTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'PlannedOrderCategory'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Planned Order Category - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_PlannedOrderCategoryText
  as select from dd07t as txt
  association [0..1] to I_Language             as _Language on $projection.Language = _Language.Language
  association [1..1] to I_PlannedOrderCategory as _Category on $projection.PlannedOrderCategory = _Category .PlannedOrderCategory 
{
      @ObjectModel.foreignKey.association: '_Category'
      @ObjectModel.text.element: ['PlannedOrderCategoryName']
  key cast(substring(txt.domvalue_l, 1, 1) as plannedordercategory preserving type) as PlannedOrderCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                                 as Language,
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      cast(txt.ddtext as plannedordercategoryname preserving type)                  as PlannedOrderCategoryName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      txt.domvalue_l                                                                as DomainValue,
    
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Category,
      _Language
}
  where txt.domname  = 'PLANNEDORDERCATEGORY'
    and txt.as4local = 'A'
    and txt.as4vers  = '0000';
```
