---
name: I_PUBSECISCONSUMABLEBUDGET
description: "Indicator for Consumable Budget"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECISCONSUMABLEBUDGET')/$value
semantic_en: "Indicator for Consumable Budget"
semantic_vi: "Indicator for Consumable Budget — CDS view giao diện (master data) dựa trên dd07l."
keywords:
  - "indicator"
  - "for"
  - "consumable"
  - "budget"
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECISCONSUMABLEBUDGET

**Indicator for Consumable Budget**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECISCONSUMABLEBUDGET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecIsConsumableBudget` | ✓ | |  | `cast( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as psm_is_consumable_budget )` | `CHAR(1)` | Include Consumable Budget (AVC) |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECISCONSUMABLEBUDGET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECISCONSUMABLEBUDGET')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Indicator for Consumable Budget'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: false,
     internalName: #LOCAL
}
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'PubSecIsConsumableBudget',
     modelingPattern: #ANALYTICAL_DIMENSION,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER ],
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: false

define root view entity I_PubSecIsConsumableBudget
  as select from dd07l
  composition [0..*] of I_PubSecIsConsumableBudgetT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as psm_is_consumable_budget ) as PubSecIsConsumableBudget,

      _Text

}
where
      domname  = 'XFELD'
  and as4local = 'A'
```
