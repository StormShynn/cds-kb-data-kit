---
name: I_PUBSECCTRLOBJGRANTVH
description: "Control Object for a Grant Search Help"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJGRANTVH')/$value
semantic_en: "Control Object for a Grant Search Help"
semantic_vi: "Control Object for a Grant Search Help — CDS view giao diện dựa trên Control Object for a Grant Search Help."
keywords:
  - "control"
  - "object"
  - "for"
  - "grant"
  - "search"
  - "help"
  - "ctrl"
  - "trimmed"
  - "hierarchy"
  - "node"
  - "name"
tags:
  - PSM
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECCTRLOBJGRANTVH

**Control Object for a Grant Search Help**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJGRANTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CtrlObjForGrant` | ✓ | |  |  | `CHAR(50)` | Control Object for a Grant |
| `ControlObjectForGrantTrimmed` |  | |  | `cast ( ltrim(CtrlObjForGrant,'0') as psm_s4c_fm_avc_ctrl_obj_gr )` | `CHAR(50)` | Control Object for a Grant |
| `GrantID` |  | | `_GrantText` | `GrantID` | `CHAR(20)` | Grant |
| `HierarchyNode` |  | | `_GrantHierarchyNodeText` | `HierarchyNode` | `CHAR(50)` | Hierarchy node |
| `CtrlObjForGrantName` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `GrantDescription` |  | |  | `_GrantText[1:Language = $session.system_language].GrantDescription` | `CHAR(80)` | Descriptive Text |
| `HierarchyNodeText` |  | |  | `_GrantHierarchyNodeText[1:Language = $session.system_language].HierarchyNodeText` | `CHAR(50)` | Hierarchy node description |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `_GrantHierarchyNodeText` | | ✓ | | | | |
| `_GrantText` | | ✓ | | | | |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GrantHierarchyNodeText` | `I_GrantHierarchyNodeText` | [0..*] |
| `_GrantText` | `I_GrantText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJGRANTVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJGRANTVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLGRVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE 
@ObjectModel.representativeKey: 'CtrlObjForGrant'
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  usageType: {
    serviceQuality: #C, 
    sizeCategory: #S,     
    dataClass: #CUSTOMIZING
    }
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Control Object for a Grant Search Help'
@Search.searchable: true
define view I_PubSecCtrlObjGrantVH
  as select distinct from I_PubSecCtrlObjGrant
  association [0..*] to I_GrantHierarchyNodeText as _GrantHierarchyNodeText on  $projection.GrantHierarchy  = _GrantHierarchyNodeText.GrantHierarchy
                                                                            and $projection.CtrlObjForGrant = _GrantHierarchyNodeText.HierarchyNode
  association [0..*] to I_GrantText              as _GrantText              on  $projection.CtrlObjForGrant = _GrantText.GrantID{
  
  @UI.hidden: true
  @EndUserText.label: 'Ctrl. Obj. Grant' 
  key CtrlObjForGrant,
  
  @Consumption.filter.hidden: true
  @EndUserText.label: 'Ctrl. Obj. Grant Trimmed' 
  cast ( ltrim(CtrlObjForGrant,'0') as psm_s4c_fm_avc_ctrl_obj_gr ) as ControlObjectForGrantTrimmed,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _GrantText.GrantID as GrantID,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  _GrantHierarchyNodeText.HierarchyNode as HierarchyNode,
 
  @UI.hidden: true
  @EndUserText.label: 'Grant Control Object Name'
  CtrlObjForGrantName,
 
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _GrantText[1:Language = $session.system_language].GrantDescription as GrantDescription,
  
  @EndUserText.label: 'Grant Node Description'
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _GrantHierarchyNodeText[1:Language = $session.system_language].HierarchyNodeText as HierarchyNodeText,
  
  @UI.hidden: true
  GrantHierarchy,
  
  _HierarchyDirectory,
  
  _GrantHierarchyNodeText,
  
  _GrantText
}
```
