---
name: I_PUBSECISCONSUMABLEBUDGETT
description: "Indicator for Consumable Budget - Text"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECISCONSUMABLEBUDGETT')/$value
semantic_en: "Indicator for Consumable Budget - Text"
semantic_vi: "Indicator for Consumable Budget - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "indicator"
  - "for"
  - "consumable"
  - "budget"
  - "text"
  - "language"
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECISCONSUMABLEBUDGETT

**Indicator for Consumable Budget - Text**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECISCONSUMABLEBUDGETT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecIsConsumableBudget` | ✓ | |  | `cast( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as psm_is_consumable_budget preserving type )` | `CHAR(1)` | Include Consumable Budget (AVC) |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `PubSecConsumableBudgetText` |  | |  | `cast ( dd07t.ddtext as psm_is_consumable_budget_text preserving type )` | `CHAR(60)` | Include Consumable Budget Text |
| `_Language` | | ✓ | | | | |
| `_PubSecIsConsumableBudget` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECISCONSUMABLEBUDGETT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECISCONSUMABLEBUDGETT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Indicator for Consumable Budget - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'PubSecIsConsumableBudget',
     modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
     supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ],
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #A,
         sizeCategory: #S
     }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: false

define view entity I_PubSecIsConsumableBudgetT
  as select from dd07t
  association        to parent I_PubSecIsConsumableBudget as _PubSecIsConsumableBudget on $projection.PubSecIsConsumableBudget = _PubSecIsConsumableBudget.PubSecIsConsumableBudget
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PubSecIsConsumableBudget'
      @ObjectModel.text.element: ['PubSecConsumableBudgetText']
  key cast( cast ( substring( dd07t.domvalue_l, 1, 1 )
                   as abap.char( 1 ) ) as psm_is_consumable_budget preserving type ) as PubSecIsConsumableBudget,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                              as Language,
      @Semantics.text: true
      cast ( dd07t.ddtext as  psm_is_consumable_budget_text preserving type )        as PubSecConsumableBudgetText,

      _PubSecIsConsumableBudget,
      _Language

}
where
      domname  = 'XFELD'
  and as4local = 'A'
```
