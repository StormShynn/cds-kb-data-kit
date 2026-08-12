---
name: I_PUBSECCTRLOBJFUNDVH
description: "Fund Control Objects"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUNDVH')/$value
semantic_en: "Fund Control Objects"
semantic_vi: "Fund Control Objects — CDS view giao diện dựa trên Fund Control Objects."
keywords:
  - "fund"
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
# I_PUBSECCTRLOBJFUNDVH

**Fund Control Objects**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUNDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CtrlObjForFund` | ✓ | |  |  | `CHAR(50)` | Control Object for a Fund |
| `Fund` |  | | `_FundText` | `Fund` | `CHAR(10)` | Fund |
| `HierarchyNode` |  | | `_FundHierarchyNodeText` | `HierarchyNode` | `CHAR(50)` | Hierarchy node |
| `CtrlObjNameForFund` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Fund |
| `FundDescription` |  | |  | `_FundText[1:Language = $session.system_language].FundDescription` | `CHAR(40)` | Fund Description |
| `HierarchyNodeText` |  | |  | `_FundHierarchyNodeText[1:Language = $session.system_language].HierarchyNodeText` | `CHAR(50)` | Hierarchy node description |
| `HierarchyIDForFund` |  | |  |  | `CHAR(42)` | Hierarchy ID for Fund |
| `_FundHierarchyNodeText` | | ✓ | | | | |
| `_FundText` | | ✓ | | | | |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FundHierarchyNodeText` | `I_FundHierarchyNodeText` | [0..*] |
| `_FundText` | `I_FundText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUNDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUNDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLFVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'CtrlObjForFund'
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
@EndUserText.label: 'Fund Control Objects'
@Search.searchable: true
define view I_PubSecCtrlObjFundVH
  as select distinct from I_PubSecCtrlObjFund
  association [0..*] to I_FundHierarchyNodeText as _FundHierarchyNodeText on  $projection.HierarchyIDForFund = _FundHierarchyNodeText.FundHierarchy
                                                                          and $projection.CtrlObjForFund     = _FundHierarchyNodeText.HierarchyNode
  association [0..*] to I_FundText              as _FundText              on  $projection.HierarchyIDForFund = _FundText.FinancialManagementArea
                                                                          and $projection.CtrlObjForFund     = _FundText.Fund
{
  @EndUserText.label: 'Ctrl. Obj. Fund' 
  key CtrlObjForFund,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _FundText.Fund                       as Fund,
  
  @UI.hidden: true
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  _FundHierarchyNodeText.HierarchyNode as HierarchyNode,
 
  @UI.hidden: true
  CtrlObjNameForFund,
 
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _FundText[1:Language = $session.system_language].FundDescription                as FundDescription,
  
  @EndUserText.label: 'Fund Node Description'
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  _FundHierarchyNodeText[1:Language = $session.system_language].HierarchyNodeText as HierarchyNodeText,
  
  @UI.hidden: true
  HierarchyIDForFund,
  
  _HierarchyDirectory,
  
  _FundHierarchyNodeText,
  
  _FundText
}
```
