---
name: I_PUBSECCTRLOBJFUND
description: "Public Sector Control Object for a Fund"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUND')/$value
semantic_en: "Public Sector Control Object for a Fund"
semantic_vi: "Public Sector Control Object for a Fund — CDS view giao diện dựa trên Public Sector Control Object for a Fund."
keywords:
  - "public"
  - "sector"
  - "control"
  - "object"
  - "for"
  - "fund"
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
# I_PUBSECCTRLOBJFUND

**Public Sector Control Object for a Fund**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyIDForFund` | ✓ | |  |  | `CHAR(42)` | Hierarchy ID for Fund |
| `CtrlObjForFund` | ✓ | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjNameForFund` |  | |  | `cast( case when Map.CtrlObjForFund = Map.Fund then _FundText[1:Language = $session.system_language].FundDescription else _FundHierarchyNodeText[1:Language = $session.system_language].HierarchyNodeText end as psm_s4c_fm_avc_ctrl_obj_fu_na )` | `CHAR(50)` | Name of a Control Object for a Fund |
| `_HierarchyDirectory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HierarchyDirectory` | `I_PubSecHierarchy` | [0..1] |
| `_FundHierarchyNodeText` | `I_FundHierarchyNodeText` | [0..*] |
| `_FundText` | `I_FundText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUND')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRLOBJFUND')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECCTRLFU'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Control Object for a Fund'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CtrlObjForFund'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecCtrlObjFund
  as select distinct from I_PubSecCtrlObjFundMap as Map
  association [0..1] to I_PubSecHierarchy       as _HierarchyDirectory    on  $projection.HierarchyIDForFund = _HierarchyDirectory.HierarchyID
  association [0..*] to I_FundHierarchyNodeText as _FundHierarchyNodeText on  $projection.HierarchyIDForFund = _FundHierarchyNodeText.FundHierarchy
                                                                          and $projection.CtrlObjForFund     = _FundHierarchyNodeText.HierarchyNode
  association [0..*] to I_FundText              as _FundText              on  $projection.HierarchyIDForFund = _FundText.FinancialManagementArea
                                                                          and $projection.CtrlObjForFund     = _FundText.Fund
{
      @ObjectModel.foreignKey.association: '_HierarchyDirectory'
  key Map.HierarchyIDForFund                   as HierarchyIDForFund,
      @ObjectModel.text.element: 'CtrlObjNameForFund'
  key Map.CtrlObjForFund                       as CtrlObjForFund,
      @Semantics.text: true
      cast(
        case when Map.CtrlObjForFund = Map.Fund then
          _FundText[1:Language = $session.system_language].FundDescription
        else
          _FundHierarchyNodeText[1:Language = $session.system_language].HierarchyNodeText
        end as psm_s4c_fm_avc_ctrl_obj_fu_na ) as CtrlObjNameForFund,
      _HierarchyDirectory
}
```
