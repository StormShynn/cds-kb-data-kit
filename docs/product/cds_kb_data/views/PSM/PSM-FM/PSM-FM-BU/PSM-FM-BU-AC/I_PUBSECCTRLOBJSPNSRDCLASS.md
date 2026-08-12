---
name: I_PUBSECCTRLOBJSPNSRDCLASS
description: "Public Sector Control Object for a Sponsored Class"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDCLASS')/$value
semantic_en: "Public Sector Control Object for a Sponsored Class"
semantic_vi: "Public Sector Control Object for a Sponsored Class — CDS view giao diện dựa trên Public Sector Control Object for a Sponsored Class."
keywords:
  - "public"
  - "sector"
  - "control"
  - "object"
  - "for"
  - "sponsored"
  - "class"
  - "hierarchy"
  - "ctrl"
  - "name"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECCTRLOBJSPNSRDCLASS

**Public Sector Control Object for a Sponsored Class**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDCLASS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredClassHierarchy` | ✓ | |  |  | `CHAR(42)` | Sponsored Class Hierarchy |
| `CtrlObjForSponsoredClass` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredClassName` |  | |  | `cast( case when Map.CtrlObjForSponsoredClass = Map.SponsoredClass then _SponsoredClassText[1:Language = $session.system_language].SponsoredClassDescription else _SponsoredClassHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText end as psm_s4c_fm_avc_ctrl_obj_sc )` | `CHAR(50)` | Control Object for a Sponsored Class |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HierarchyDirectory` | `I_PubSecHierarchy` | [0..1] |
| `_SponsoredClassHierarchyNodeT` | `I_SponsoredClassHierarchyNodeT` | [0..*] |
| `_SponsoredClassText` | `I_SponsoredClassText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDCLASS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDCLASS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLSC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Control Object for a Sponsored Class'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CtrlObjForSponsoredClass'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecCtrlObjSpnsrdClass
  as select distinct from I_PubSecCtrlObjSpnsrdClassMap as Map
  association [0..1] to I_PubSecHierarchy              as _HierarchyDirectory           on  $projection.SponsoredClassHierarchy  = _HierarchyDirectory.HierarchyID
  association [0..*] to I_SponsoredClassHierarchyNodeT as _SponsoredClassHierarchyNodeT on  $projection.SponsoredClassHierarchy  = _SponsoredClassHierarchyNodeT.SponsoredClassHierarchy
                                                                                        and $projection.CtrlObjForSponsoredClass = _SponsoredClassHierarchyNodeT.HierarchyNode
  association [0..*] to I_SponsoredClassText           as _SponsoredClassText           on  $projection.CtrlObjForSponsoredClass = _SponsoredClassText.SponsoredClass
{
      @ObjectModel.foreignKey.association: '_HierarchyDirectory'
  key Map.SponsoredClassHierarchy                         as SponsoredClassHierarchy,
      @ObjectModel.text.element: 'CtrlObjForSponsoredClassName'
  key Map.CtrlObjForSponsoredClass                        as CtrlObjForSponsoredClass,
      @Semantics.text: true
      cast(
        case when Map.CtrlObjForSponsoredClass = Map.SponsoredClass then
          _SponsoredClassText[1:Language = $session.system_language].SponsoredClassDescription
        else
          _SponsoredClassHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText
        end as psm_s4c_fm_avc_ctrl_obj_sc )               as CtrlObjForSponsoredClassName,
      _HierarchyDirectory
}
```
