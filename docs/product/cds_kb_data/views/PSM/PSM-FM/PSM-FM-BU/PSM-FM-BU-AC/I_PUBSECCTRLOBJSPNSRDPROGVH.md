---
name: I_PUBSECCTRLOBJSPNSRDPROGVH
description: "Sponsored Program Control Objects"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDPROGVH')/$value
semantic_en: "Sponsored Program Control Objects"
semantic_vi: "Sponsored Program Control Objects — CDS view giao diện dựa trên Sponsored Program Control Objects."
keywords:
  - "sponsored"
  - "program"
  - "control"
  - "objects"
  - "ctrl"
  - "hierarchy"
  - "node"
  - "name"
  - "description"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECCTRLOBJSPNSRDPROGVH

**Sponsored Program Control Objects**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDPROGVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CtrlObjForSponsoredProgram` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `SponsoredProgram` |  | | `_SponsoredProgramText` | `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `HierarchyNode` |  | | `_SponsoredProgHierarchyNodeT` | `HierarchyNode` | `CHAR(50)` | Hierarchy node |
| `CtrlObjForSponsoredProgramName` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `SponsoredProgramDescription` |  | |  | `_SponsoredProgramText[1:Language = $session.system_language].SponsoredProgramDescription` | `CHAR(30)` | Sponsored Program Description |
| `HierarchyNodeText` |  | |  | `_SponsoredProgHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText` | `CHAR(50)` | Hierarchy node description |
| `SponsoredProgramHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Program Hierarchy |
| `_SponsoredProgHierarchyNodeT` | | ✓ | | | | |
| `_SponsoredProgramText` | | ✓ | | | | |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SponsoredProgHierarchyNodeT` | `I_SponsoredProgHierarchyNodeT` | [0..*] |
| `_SponsoredProgramText` | `I_SponsoredProgramText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDPROGVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDPROGVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLSPVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE 
@ObjectModel.representativeKey: 'CtrlObjForSponsoredProgram'
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
@EndUserText.label: 'Sponsored Program Control Objects'
@Search.searchable: true
define view I_PubSecCtrlObjSpnsrdProgVH
  as select distinct from I_PubSecCtrlObjSpnsrdProg

  association [0..*] to I_SponsoredProgHierarchyNodeT as _SponsoredProgHierarchyNodeT on  $projection.SponsoredProgramHierarchy = _SponsoredProgHierarchyNodeT.SponsoredProgramHierarchy
                                                                                      and $projection.CtrlObjForSponsoredProgram     = _SponsoredProgHierarchyNodeT.HierarchyNode
  association [0..*] to I_SponsoredProgramText        as _SponsoredProgramText        on  $projection.CtrlObjForSponsoredProgram = _SponsoredProgramText.SponsoredProgram
  {
  key CtrlObjForSponsoredProgram,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _SponsoredProgramText.SponsoredProgram as SponsoredProgram,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  _SponsoredProgHierarchyNodeT.HierarchyNode as HierarchyNode,
 
  @UI.hidden: true
  @EndUserText.label: 'Sponsored Program Ctrl Obj Name'
  CtrlObjForSponsoredProgramName,
 
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _SponsoredProgramText[1:Language = $session.system_language].SponsoredProgramDescription as SponsoredProgramDescription,
  
  @EndUserText.label: 'Sponsored Program Node Description'
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _SponsoredProgHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText as HierarchyNodeText,
  
  @UI.hidden: true
  SponsoredProgramHierarchy,
  
  _HierarchyDirectory,
  
  _SponsoredProgHierarchyNodeT,
  
  _SponsoredProgramText
}
```
