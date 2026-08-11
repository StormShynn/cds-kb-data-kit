---
name: I_PUBSECCTRLOBJCOSTCENTER
description: "Public Sector Control Object for a Cost Center"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJCOSTCENTER')/$value
semantic_en: "Public Sector Control Object for a Cost Center"
semantic_vi: "Public Sector Control Object for a Cost Center — CDS view giao diện dựa trên Public Sector Control Object for a Cost Center."
keywords:
  - "public"
  - "sector"
  - "control"
  - "object"
  - "for"
  - "cost"
  - "center"
  - "hierarchy"
  - "ctrl"
  - "name"
tags:
  - PSM
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECCTRLOBJCOSTCENTER

**Public Sector Control Object for a Cost Center**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJCOSTCENTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyIDForCostCenter` | ✓ | |  |  | `CHAR(42)` | Hierarchy ID for Cost Center |
| `CtrlObjForCostCenter` | ✓ | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjNameForCostCenter` |  | |  | `cast( case when Map.CtrlObjForCostCenter = Map.CostCenter then _CostCenterText[1:Language = $session.system_language].CostCenterDescription else _CostCenterHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText end as psm_s4c_fm_avc_ctrl_obj_cc_na )` | `CHAR(50)` | Name of a Control Object for a Cost Center |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HierarchyDirectory` | `I_PubSecHierarchy` | [0..1] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_CostCenterHierarchyNodeT` | `I_CostCenterHierarchyNodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJCOSTCENTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJCOSTCENTER')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLCC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Control Object for a Cost Center'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CtrlObjForCostCenter'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecCtrlObjCostCenter
  as select distinct from I_PubSecCtrlObjCostCenterMap as Map
  association [0..1] to I_PubSecHierarchy          as _HierarchyDirectory       on  $projection.HierarchyIDForCostCenter = _HierarchyDirectory.HierarchyID
  association [0..*] to I_CostCenterText           as _CostCenterText           on  $projection.HierarchyIDForCostCenter = _CostCenterText.ControllingArea
                                                                                and $projection.CtrlObjForCostCenter     = _CostCenterText.CostCenter
  association [0..*] to I_CostCenterHierarchyNodeT as _CostCenterHierarchyNodeT on  $projection.HierarchyIDForCostCenter = _CostCenterHierarchyNodeT.CostCenterHierarchy
                                                                                and $projection.CtrlObjForCostCenter     = _CostCenterHierarchyNodeT.HierarchyNode
{
      @ObjectModel.foreignKey.association: '_HierarchyDirectory'
  key Map.HierarchyIDForCostCenter,
      @ObjectModel.text.element: 'CtrlObjNameForCostCenter'
  key Map.CtrlObjForCostCenter,
      @Semantics.text: true
      cast(
        case when Map.CtrlObjForCostCenter = Map.CostCenter then
          _CostCenterText[1:Language = $session.system_language].CostCenterDescription
        else
          _CostCenterHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText
        end as psm_s4c_fm_avc_ctrl_obj_cc_na ) as CtrlObjNameForCostCenter,
      _HierarchyDirectory
}
```
