---
name: I_PUBSECCTRLOBJBDGTPERIOD
description: "Public Sector Control Object for a Budget Period"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJBDGTPERIOD')/$value
semantic_en: "Public Sector Control Object for a Budget Period"
semantic_vi: "Public Sector Control Object for a Budget Period — CDS view giao diện dựa trên Public Sector Control Object for a Budget Period."
keywords:
  - "public"
  - "sector"
  - "control"
  - "object"
  - "for"
  - "budget"
  - "period"
  - "hierarchy"
  - "ctrl"
  - "name"
tags:
  - PSM
  - budget
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECCTRLOBJBDGTPERIOD

**Public Sector Control Object for a Budget Period**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJBDGTPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyIDForBudgetPeriod` | ✓ | |  |  | `CHAR(42)` | Hierarchy ID for Budget Period |
| `CtrlObjForBudgetPeriod` | ✓ | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjNameForBudgetPeriod` |  | |  | `cast( case when Map.CtrlObjForBudgetPeriod = Map.BudgetPeriod then _BudgetPeriodText[1:Language = $session.system_language].BudgetPeriodName else _BudgetPeriodHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText end as psm_s4c_fm_avc_ctrl_obj_bp_na )` | `CHAR(50)` | Name of a Control Object for a Budget Period |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HierarchyDirectory` | `I_PubSecHierarchy` | [0..1] |
| `_BudgetPeriodText` | `I_BudgetPeriodText` | [0..*] |
| `_BudgetPeriodHierarchyNodeT` | `I_BudgetPeriodHierarchyNodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJBDGTPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJBDGTPERIOD')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLBP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Control Object for a Budget Period'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CtrlObjForBudgetPeriod'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecCtrlObjBdgtPeriod
  as select distinct from I_PubSecCtrlObjBdgtPeriodMap as Map
  association [0..1] to I_PubSecHierarchy            as _HierarchyDirectory         on  $projection.HierarchyIDForBudgetPeriod = _HierarchyDirectory.HierarchyID
  association [0..*] to I_BudgetPeriodText           as _BudgetPeriodText           on  $projection.CtrlObjForBudgetPeriod = _BudgetPeriodText.BudgetPeriod
  association [0..*] to I_BudgetPeriodHierarchyNodeT as _BudgetPeriodHierarchyNodeT on  $projection.HierarchyIDForBudgetPeriod = _BudgetPeriodHierarchyNodeT.BudgetPeriodHierarchy
                                                                                    and $projection.CtrlObjForBudgetPeriod     = _BudgetPeriodHierarchyNodeT.HierarchyNode
{
      @ObjectModel.foreignKey.association: '_HierarchyDirectory'
  key Map.HierarchyIDForBudgetPeriod,
      @ObjectModel.text.element: 'CtrlObjNameForBudgetPeriod'
  key Map.CtrlObjForBudgetPeriod,
      @Semantics.text: true
      cast(
        case when Map.CtrlObjForBudgetPeriod = Map.BudgetPeriod then
          _BudgetPeriodText[1:Language = $session.system_language].BudgetPeriodName
        else
          _BudgetPeriodHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText
        end as psm_s4c_fm_avc_ctrl_obj_bp_na ) as CtrlObjNameForBudgetPeriod,
      _HierarchyDirectory
}
```
