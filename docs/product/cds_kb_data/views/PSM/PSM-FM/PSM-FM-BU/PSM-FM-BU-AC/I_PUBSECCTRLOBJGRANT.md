---
name: I_PUBSECCTRLOBJGRANT
description: "Public Sector Control Object for a Grant"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJGRANT')/$value
semantic_en: "Public Sector Control Object for a Grant"
semantic_vi: "Public Sector Control Object for a Grant — CDS view giao diện dựa trên Public Sector Control Object for a Grant."
keywords:
  - "public"
  - "sector"
  - "control"
  - "object"
  - "for"
  - "grant"
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
# I_PUBSECCTRLOBJGRANT

**Public Sector Control Object for a Grant**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJGRANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantHierarchy` | ✓ | |  |  | `CHAR(42)` | Grant Hierarchy |
| `CtrlObjForGrant` | ✓ | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForGrantName` |  | |  | `cast( case when Map.CtrlObjForGrant = Map.GrantID then _GrantText[1:Language = $session.system_language].GrantDescription else _GrantHierarchyNodeText[1:Language = $session.system_language].HierarchyNodeText end as psm_s4c_fm_avc_ctrl_obj_gr )` | `CHAR(50)` | Control Object for a Grant |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HierarchyDirectory` | `I_PubSecHierarchy` | [0..1] |
| `_GrantHierarchyNodeText` | `I_GrantHierarchyNodeText` | [0..*] |
| `_GrantText` | `I_GrantText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJGRANT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJGRANT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLGR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Control Object for a Grant'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CtrlObjForGrant'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecCtrlObjGrant
  as select distinct from I_PubSecCtrlObjGrantMap as Map
  association [0..1] to I_PubSecHierarchy        as _HierarchyDirectory     on  $projection.GrantHierarchy = _HierarchyDirectory.HierarchyID
  association [0..*] to I_GrantHierarchyNodeText as _GrantHierarchyNodeText on  $projection.GrantHierarchy  = _GrantHierarchyNodeText.GrantHierarchy
                                                                            and $projection.CtrlObjForGrant = _GrantHierarchyNodeText.HierarchyNode
  association [0..*] to I_GrantText              as _GrantText              on  $projection.CtrlObjForGrant = _GrantText.GrantID
{
      @ObjectModel.foreignKey.association: '_HierarchyDirectory'
  key Map.GrantHierarchy                                  as GrantHierarchy,
      @ObjectModel.text.element: 'CtrlObjForGrantName'
  key Map.CtrlObjForGrant                                 as CtrlObjForGrant,
      @Semantics.text: true
      cast(
        case when Map.CtrlObjForGrant = Map.GrantID then
          _GrantText[1:Language = $session.system_language].GrantDescription
        else
          _GrantHierarchyNodeText[1:Language = $session.system_language].HierarchyNodeText
        end as psm_s4c_fm_avc_ctrl_obj_gr )               as CtrlObjForGrantName,
      _HierarchyDirectory
}
```
