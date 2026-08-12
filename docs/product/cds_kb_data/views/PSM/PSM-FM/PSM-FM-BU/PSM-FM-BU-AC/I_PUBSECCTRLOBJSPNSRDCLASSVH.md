---
name: I_PUBSECCTRLOBJSPNSRDCLASSVH
description: "Sponsored Class Control Objects"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDCLASSVH')/$value
semantic_en: "Sponsored Class Control Objects"
semantic_vi: "Sponsored Class Control Objects — CDS view giao diện dựa trên Sponsored Class Control Objects."
keywords:
  - "sponsored"
  - "class"
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
# I_PUBSECCTRLOBJSPNSRDCLASSVH

**Sponsored Class Control Objects**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDCLASSVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CtrlObjForSponsoredClass` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `SponsoredClass` |  | | `_SponsoredClassText` | `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `HierarchyNode` |  | | `_SponsoredClassHierarchyNodeT` | `HierarchyNode` | `CHAR(50)` | Hierarchy node |
| `CtrlObjForSponsoredClassName` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `SponsoredClassDescription` |  | |  | `_SponsoredClassText[1:Language = $session.system_language].SponsoredClassDescription` | `CHAR(30)` | Sponsored Class Description |
| `HierarchyNodeText` |  | |  | `_SponsoredClassHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText` | `CHAR(50)` | Hierarchy node description |
| `SponsoredClassHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Class Hierarchy |
| `_SponsoredClassHierarchyNodeT` | | ✓ | | | | |
| `_SponsoredClassText` | | ✓ | | | | |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SponsoredClassHierarchyNodeT` | `I_SponsoredClassHierarchyNodeT` | [0..*] |
| `_SponsoredClassText` | `I_SponsoredClassText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDCLASSVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJSPNSRDCLASSVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLSCVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE 
@ObjectModel.representativeKey: 'CtrlObjForSponsoredClass'
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  usageType: {
    serviceQuality: #C, 
    sizeCategory: #S,     
    dataClass: #CUSTOMIZING
    }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sponsored Class Control Objects'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
define view I_PubSecCtrlObjSpnsrdClassVH
  as select distinct from I_PubSecCtrlObjSpnsrdClass

  association [0..*] to I_SponsoredClassHierarchyNodeT as _SponsoredClassHierarchyNodeT on  $projection.SponsoredClassHierarchy  = _SponsoredClassHierarchyNodeT.SponsoredClassHierarchy
                                                                                        and $projection.CtrlObjForSponsoredClass = _SponsoredClassHierarchyNodeT.HierarchyNode
  association [0..*] to I_SponsoredClassText           as _SponsoredClassText           on  $projection.CtrlObjForSponsoredClass = _SponsoredClassText.SponsoredClass
{
  key CtrlObjForSponsoredClass,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _SponsoredClassText.SponsoredClass as SponsoredClass,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  _SponsoredClassHierarchyNodeT.HierarchyNode as HierarchyNode,
 
  @UI.hidden: true
  CtrlObjForSponsoredClassName,
 
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _SponsoredClassText[1:Language = $session.system_language].SponsoredClassDescription as SponsoredClassDescription,
  
  @EndUserText.label: 'Sponsored Class Node Description'
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _SponsoredClassHierarchyNodeT[1:Language = $session.system_language].HierarchyNodeText as HierarchyNodeText,
  
  @UI.hidden: true
  SponsoredClassHierarchy,
  
  _HierarchyDirectory,
  
  _SponsoredClassHierarchyNodeT,
  
  _SponsoredClassText
}
```
