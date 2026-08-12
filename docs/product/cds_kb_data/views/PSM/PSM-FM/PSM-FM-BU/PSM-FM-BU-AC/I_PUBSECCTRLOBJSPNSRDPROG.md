---
name: I_PUBSECCTRLOBJSPNSRDPROG
description: "Public Sector Control Object for a Sponsored Program"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDPROG')/$value
semantic_en: "Public Sector Control Object for a Sponsored Program"
semantic_vi: "Public Sector Control Object for a Sponsored Program — CDS view giao diện dựa trên Public Sector Control Object for a Sponsored Program."
keywords:
  - "public"
  - "sector"
  - "control"
  - "object"
  - "for"
  - "sponsored"
  - "program"
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
# I_PUBSECCTRLOBJSPNSRDPROG

**Public Sector Control Object for a Sponsored Program**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDPROG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredProgramHierarchy` | ✓ | |  |  | `CHAR(42)` | Sponsored Program Hierarchy |
| `CtrlObjForSponsoredProgram` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `CtrlObjForSponsoredProgramName` |  | |  | `cast( case when Map.CtrlObjForSponsoredProgram = Map.SponsoredProgram then _SponsoredProgramText[1:Language = $session.system_language].SponsoredProgramDescription else _SponsoredProgHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText end as psm_s4c_fm_avc_ctrl_obj_sp )` | `CHAR(50)` | Control Object for a Sponsored Program |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HierarchyDirectory` | `I_PubSecHierarchy` | [0..1] |
| `_SponsoredProgHierarchyNodeT` | `I_SponsoredProgHierarchyNodeT` | [0..*] |
| `_SponsoredProgramText` | `I_SponsoredProgramText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDPROG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDPROG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLSP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Control Object for a Sponsored Program'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CtrlObjForSponsoredProgram'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecCtrlObjSpnsrdProg
  as select distinct from I_PubSecCtrlObjSpnsrdProgMap as Map
  association [0..1] to I_PubSecHierarchy             as _HierarchyDirectory          on  $projection.SponsoredProgramHierarchy = _HierarchyDirectory.HierarchyID
  association [0..*] to I_SponsoredProgHierarchyNodeT as _SponsoredProgHierarchyNodeT on  $projection.SponsoredProgramHierarchy = _SponsoredProgHierarchyNodeT.SponsoredProgramHierarchy
                                                                                      and $projection.CtrlObjForSponsoredProgram     = _SponsoredProgHierarchyNodeT.HierarchyNode
  association [0..*] to I_SponsoredProgramText        as _SponsoredProgramText        on  $projection.CtrlObjForSponsoredProgram = _SponsoredProgramText.SponsoredProgram
{
      @ObjectModel.foreignKey.association: '_HierarchyDirectory'
  key Map.SponsoredProgramHierarchy                       as SponsoredProgramHierarchy,
      @ObjectModel.text.element: 'CtrlObjForSponsoredProgramName'
  key Map.CtrlObjForSponsoredProgram                      as CtrlObjForSponsoredProgram,
      @Semantics.text: true
      cast(
        case when Map.CtrlObjForSponsoredProgram = Map.SponsoredProgram then
          _SponsoredProgramText[1:Language = $session.system_language].SponsoredProgramDescription
        else
          _SponsoredProgHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText
        end as psm_s4c_fm_avc_ctrl_obj_sp )               as CtrlObjForSponsoredProgramName,
      _HierarchyDirectory
}
```
