---
name: I_FINANCIALSTATEMENTHIERNODET
description: "Financialstatementhiernodet"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINANCIALSTATEMENTHIERNODET

**Financialstatementhiernodet**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementHierarchy` | ✓ | |  | `hryid_42` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `ValidityEndDate` | ✓ | |  | `hryvalto` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `HierarchyNodeText` |  | |  | `nodetxt` |  |  |
| `HierarchyNodeShortText` |  | |  | `substring(hrrp_nodet_n.nodetxt, 1, 20)` |  |  |
| `ValidityStartDate` |  | |  | `hryvalfrom` |  |  |
| `FinStmntNodeFormattedID` |  | | `_node` | `FinStmntNodeFormattedID` |  |  |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_GLAccountHierarchy` | [0..*] |
| `_node` | `I_FinancialStatementHierNode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTMTHERNDT'
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Financial Statement Hierarchy Node - Text'
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@Analytics: { dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name:'FinancialStatementHierNodeText'

define view I_FinancialStatementHierNodeT
  as select from hrrp_nodet_n
  association [0..1] to I_Language                   as _Language  on  $projection.Language = _Language.Language

  association [0..*] to I_GLAccountHierarchy         as _Hierarchy on  $projection.FinancialStatementHierarchy = _Hierarchy.GLAccountHierarchy

  association [0..1] to I_FinancialStatementHierNode as _node      on  $projection.FinancialStatementHierarchy = _node.FinancialStatementHierarchy
                                                                   and $projection.HierarchyNode               = _node.HierarchyNode
                                                                   and $projection.ValidityEndDate             = _node.ValidityEndDate
{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key hrrp_nodet_n.hryid_42                  as FinancialStatementHierarchy,
      @ObjectModel.text.element: 'HierarchyNodeText'
  key hrrp_nodet_n.hrynode                   as HierarchyNode,
      @Semantics.businessDate.to: true
  key hrrp_nodet_n.hryvalto                  as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                     as Language,
      @Semantics.text: true
      hrrp_nodet_n.nodetxt                   as HierarchyNodeText,
      @Semantics.text: true
      substring(hrrp_nodet_n.nodetxt, 1, 20) as HierarchyNodeShortText,

      @Semantics.businessDate.from: true
      hrrp_nodet_n.hryvalfrom                as ValidityStartDate,

      @Analytics.dataExtraction.relevant: true
      _node.FinStmntNodeFormattedID,

      _Language,
      _Hierarchy
}
where
      hrrp_nodet_n.hier_catg   =    'FSVN'
```
