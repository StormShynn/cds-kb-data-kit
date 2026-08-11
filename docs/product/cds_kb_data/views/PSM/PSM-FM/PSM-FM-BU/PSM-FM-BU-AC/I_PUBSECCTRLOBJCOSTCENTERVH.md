---
name: I_PUBSECCTRLOBJCOSTCENTERVH
description: "Cost Center Control Objects"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJCOSTCENTERVH')/$value
semantic_en: "Cost Center Control Objects"
semantic_vi: "Cost Center Control Objects — CDS view giao diện dựa trên Cost Center Control Objects."
keywords:
  - "cost"
  - "center"
  - "control"
  - "objects"
  - "ctrl"
  - "hierarchy"
  - "node"
  - "name"
  - "description"
tags:
  - PSM
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECCTRLOBJCOSTCENTERVH

**Cost Center Control Objects**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJCOSTCENTERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CtrlObjForCostCenter` | ✓ | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CostCenter` |  | | `_CostCenterText` | `CostCenter` | `CHAR(10)` | Cost Center |
| `HierarchyNode` |  | | `_CostCenterHierarchyNodeT` | `HierarchyNode` | `CHAR(50)` | Hierarchy node |
| `CtrlObjNameForCostCenter` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Cost Center |
| `CostCenterDescription` |  | |  | `_CostCenterText[1:Language = $session.system_language].CostCenterDescription` | `CHAR(40)` | Description of Cost Center |
| `HierarchyNodeText` |  | |  | `_CostCenterHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText` | `CHAR(50)` | Hierarchy node description |
| `HierarchyIDForCostCenter` |  | |  |  | `CHAR(42)` | Hierarchy ID for Cost Center |
| `_CostCenterText` | | ✓ | | | | |
| `_CostCenterHierarchyNodeT` | | ✓ | | | | |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_CostCenterHierarchyNodeT` | `I_CostCenterHierarchyNodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJCOSTCENTERVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJCOSTCENTERVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECTRLCCVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE 
@ObjectModel.representativeKey: 'CtrlObjForCostCenter'
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  usageType: {
    serviceQuality: #C, 
    sizeCategory: #S,     
    dataClass: #CUSTOMIZING
    }
}

@UI.presentationVariant: [{ groupBy: ['_HierarchyDirectory'],
                            sortOrder: [{ by: 'CtrlObjForCostCenter', direction: #ASC }] }]

@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Cost Center Control Objects'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
define view I_PubSecCtrlObjCostCenterVH
  as select distinct from I_PubSecCtrlObjCostCenter

  association [0..*] to I_CostCenterText           as _CostCenterText           on  $projection.HierarchyIDForCostCenter = _CostCenterText.ControllingArea
                                                                                and $projection.CtrlObjForCostCenter     = _CostCenterText.CostCenter
  association [0..*] to I_CostCenterHierarchyNodeT as _CostCenterHierarchyNodeT on  $projection.HierarchyIDForCostCenter = _CostCenterHierarchyNodeT.CostCenterHierarchy
                                                                                and $projection.CtrlObjForCostCenter     = _CostCenterHierarchyNodeT.HierarchyNode
{
  key CtrlObjForCostCenter,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _CostCenterText.CostCenter as CostCenter,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  _CostCenterHierarchyNodeT.HierarchyNode as HierarchyNode,
 
  @UI.hidden: true
  CtrlObjNameForCostCenter,
 
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _CostCenterText[1:Language = $session.system_language].CostCenterDescription as CostCenterDescription,
  
  @EndUserText.label: 'Cost Center Node Description'
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _CostCenterHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText as HierarchyNodeText,
  
  @UI.hidden: true
  HierarchyIDForCostCenter,
  
  _HierarchyDirectory,
  
  _CostCenterHierarchyNodeT,
  
  _CostCenterText
}
```
