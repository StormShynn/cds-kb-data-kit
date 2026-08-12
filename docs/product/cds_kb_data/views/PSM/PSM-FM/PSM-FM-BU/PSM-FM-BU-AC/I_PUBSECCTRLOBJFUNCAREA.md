---
name: I_PUBSECCTRLOBJFUNCAREA
description: "Public Sector Control Object for a Functional Area"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUNCAREA')/$value
semantic_en: "Public Sector Control Object for a Functional Area"
semantic_vi: "Public Sector Control Object for a Functional Area — CDS view giao diện dựa trên Public Sector Control Object for a Functional Area."
keywords:
  - "public"
  - "sector"
  - "control"
  - "object"
  - "for"
  - "functional"
  - "area"
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
# I_PUBSECCTRLOBJFUNCAREA

**Public Sector Control Object for a Functional Area**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUNCAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyIDForFunctionalArea` | ✓ | |  |  | `CHAR(42)` | Hierarchy ID for Functional Area |
| `CtrlObjForFunctionalArea` | ✓ | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjNameForFunctionalArea` |  | |  | `cast( case when Map.CtrlObjForFunctionalArea = Map.FunctionalArea then _FunctionalAreaText[1:Language = $session.system_language].FunctionalAreaName else _FunctionalAreaHierNodeT[1:Language = $session.system_language].HierarchyNodeText end as psm_s4c_fm_avc_ctrl_obj_fa_na )` | `CHAR(50)` | Name of a Control Object for a Functional Area |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HierarchyDirectory` | `I_PubSecHierarchy` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |
| `_FunctionalAreaHierNodeT` | `I_FunctionalAreaHierNodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUNCAREA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUNCAREA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLFA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Control Object for a Functional Area'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CtrlObjForFunctionalArea'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecCtrlObjFuncArea
  as select distinct from I_PubSecCtrlObjFuncAreaMap as Map
  association [0..1] to I_PubSecHierarchy         as _HierarchyDirectory      on  $projection.HierarchyIDForFunctionalArea = _HierarchyDirectory.HierarchyID
  association [0..*] to I_FunctionalAreaText      as _FunctionalAreaText      on  $projection.CtrlObjForFunctionalArea = _FunctionalAreaText.FunctionalArea
  association [0..*] to I_FunctionalAreaHierNodeT as _FunctionalAreaHierNodeT on  $projection.HierarchyIDForFunctionalArea = _FunctionalAreaHierNodeT.FunctionalAreaHierarchy
                                                                              and $projection.CtrlObjForFunctionalArea     = _FunctionalAreaHierNodeT.HierarchyNode
{
      @ObjectModel.foreignKey.association: '_HierarchyDirectory'
  key Map.HierarchyIDForFunctionalArea,
      @ObjectModel.text.element: 'CtrlObjNameForFunctionalArea'
  key Map.CtrlObjForFunctionalArea,
      @Semantics.text: true
      cast(
        case when Map.CtrlObjForFunctionalArea = Map.FunctionalArea then
          _FunctionalAreaText[1:Language = $session.system_language].FunctionalAreaName
        else
          _FunctionalAreaHierNodeT[1:Language = $session.system_language].HierarchyNodeText
        end as psm_s4c_fm_avc_ctrl_obj_fa_na ) as CtrlObjNameForFunctionalArea,
      _HierarchyDirectory
}
```
