---
name: I_LIQUIDITYITEM
description: "This CDS view provides the prerequisites for answering the following business question: How many liquidity items are defined?"
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many liquidity items are defined?"
semantic_vi: "Liquidity Item — CDS view giao diện dựa trên flqlpos."
keywords:
  - "liquidity"
  - "item"
  - "cash"
  - "flow"
  - "direction"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-FQM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
  - bo:purchaseorder
---
# I_LIQUIDITYITEM

**This CDS view provides the prerequisites for answering the following business question: How many liquidity items are defined?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidityItem` | ✓ | |  | `lqpos` | `CHAR(16)` | Liquidity Item |
| `CashFlowDirection` |  | |  | `direction` | `CHAR(4)` | Cash Flow Direction |
| `_Text` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |
| `_Direction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LiquidityItemText` | [0..*] |
| `_HierarchyNode` | `I_Liquidityitemhierarchynode` | [0..*] |
| `_Direction` | `I_Direction` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEM')/$value)*

```abap
@EndUserText.label: 'Liquidity Item' //same as DDL description
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true } //or #CUBE or #FACT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILIQUIDITYITEM' //must start with "I"
@ObjectModel.representativeKey: 'LiquidityItem'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'CashFlow'
define view I_LiquidityItem //must start with "I_"; same as DDL source name in upper-camelcase notation
as select from flqlpos
association[0..*] to I_LiquidityItemText            as _Text            on $projection.LiquidityItem = _Text.LiquidityItem
association[0..*] to I_Liquidityitemhierarchynode   as _HierarchyNode   on $projection.LiquidityItem = _HierarchyNode.LiquidityItem
association[0..1] to I_Direction                    as _Direction       on $projection.CashFlowDirection     = _Direction.CashFlowDirection
{
   @ObjectModel.text.association: '_Text'
   @ObjectModel.hierarchy.association: '_HierarchyNode'
   key lqpos as LiquidityItem,
--      _Text.LiquidityItemName,
      _HierarchyNode,
      _Text,

   @ObjectModel.foreignKey.association: '_Direction'
   direction as CashFlowDirection,
   _Direction

}
```
