---
name: I_ORDERCATEGORYTEXT
description: Ordercategorytext
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
# I_ORDERCATEGORYTEXT

**Ordercategorytext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OrderCategory` | ✓ | |  | `cast( cast(substring(t.domvalue_l, 1, 2) as abap.numc(2) ) as auftyp preserving type)` |
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |
| `OrderCategoryName` |  | |  | `cast(t.ddtext as ordercategoryname preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Language` | | ✓ | | |
| `_OrderCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_OrderCategory` | `I_OrderCategory` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPPORDERCATTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'OrderCategory'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Order Category - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_OrderCategoryText
  as select from dd07t as t
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
  association [1..1] to I_OrderCategory as _OrderCategory on $projection.OrderCategory = _OrderCategory.OrderCategory

{
      @ObjectModel.foreignKey.association: '_OrderCategory'
      @ObjectModel.text.element: ['OrderCategoryName']
  key cast( cast(substring(t.domvalue_l, 1, 2) as abap.numc(2) ) as auftyp preserving type) as OrderCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                                           as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.ddtext as ordercategoryname preserving type)                                   as OrderCategoryName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                                          as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _OrderCategory,
      _Language
}
  where t.domname = 'AUFTYP'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
