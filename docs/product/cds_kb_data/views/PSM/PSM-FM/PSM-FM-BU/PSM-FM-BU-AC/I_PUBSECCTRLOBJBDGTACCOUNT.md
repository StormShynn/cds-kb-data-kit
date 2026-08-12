---
name: I_PUBSECCTRLOBJBDGTACCOUNT
description: "Public Sector Control Object for a Budget Account"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJBDGTACCOUNT')/$value
semantic_en: "Public Sector Control Object for a Budget Account"
semantic_vi: "Public Sector Control Object for a Budget Account — CDS view giao diện dựa trên Public Sector Control Object for a Budget Account."
keywords:
  - "public"
  - "sector"
  - "control"
  - "object"
  - "for"
  - "budget"
  - "account"
  - "hierarchy"
  - "ctrl"
  - "name"
tags:
  - PSM
  - account
  - budget
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECCTRLOBJBDGTACCOUNT

**Public Sector Control Object for a Budget Account**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJBDGTACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyIDForBudgetAccount` | ✓ | |  |  | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `CtrlObjForBudgetAccount` | ✓ | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjNameForBudgetAccount` |  | |  | `cast( case when Map.CtrlObjForBudgetAccount = Map.PubSecBudgetAccount then _BudgetAccount._BudgetAccountText[1:Language = $session.system_language].BudgetAccountDescription else _BudgetAccountHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText end as psm_s4c_fm_avc_ctrl_obj_ba_na )` | `CHAR(50)` | Name of a Control Object for a Budget Account |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HierarchyDirectory` | `I_PubSecHierarchy` | [0..1] |
| `_BudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_BudgetAccountHierarchyNodeT` | `I_BudgetAccountHierarchyNodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJBDGTACCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJBDGTACCOUNT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLBA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Control Object for a Budget Account'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CtrlObjForBudgetAccount'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecCtrlObjBdgtAccount
  as select distinct from I_PubSecCtrlObjBdgtAccountMap as Map
  association [0..1] to I_PubSecHierarchy             as _HierarchyDirectory          on  $projection.HierarchyIDForBudgetAccount = _HierarchyDirectory.HierarchyID
  association [0..1] to I_PubSecBudgetAccount         as _BudgetAccount               on  $projection.HierarchyIDForBudgetAccount = _BudgetAccount.PubSecBudgetAccountCoCode
                                                                                      and $projection.CtrlObjForBudgetAccount     = _BudgetAccount.PubSecBudgetAccount
  association [0..*] to I_BudgetAccountHierarchyNodeT as _BudgetAccountHierarchyNodeT on  $projection.HierarchyIDForBudgetAccount = _BudgetAccountHierarchyNodeT.BudgetAccountHierarchy
                                                                                      and $projection.CtrlObjForBudgetAccount     = _BudgetAccountHierarchyNodeT.HierarchyNode
{
      @ObjectModel.foreignKey.association: '_HierarchyDirectory'
  key Map.HierarchyIDForBudgetAccount,
      @ObjectModel.text.element: 'CtrlObjNameForBudgetAccount'
  key Map.CtrlObjForBudgetAccount,
      @Semantics.text: true
      cast(
        case when Map.CtrlObjForBudgetAccount = Map.PubSecBudgetAccount then
//          _BudgetAccount._Text[1:Language = $session.system_language].GLAccountLongName
          _BudgetAccount._BudgetAccountText[1:Language = $session.system_language].BudgetAccountDescription
        else
          _BudgetAccountHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText
        end as psm_s4c_fm_avc_ctrl_obj_ba_na ) as CtrlObjNameForBudgetAccount,
      _HierarchyDirectory
}
```
