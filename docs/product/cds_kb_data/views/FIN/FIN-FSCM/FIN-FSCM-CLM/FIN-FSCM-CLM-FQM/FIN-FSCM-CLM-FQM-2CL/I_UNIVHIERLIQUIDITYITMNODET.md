---
name: I_UNIVHIERLIQUIDITYITMNODET
description: "Liquidity Item Hierarchy Node Base - Txt"
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODET')/$value
semantic_en: "Liquidity Item Hierarchy Node Base - Txt"
semantic_vi: "Liquidity Item Hierarchy Node Base - Txt — CDS view giao diện dựa trên I_UnivHierLiquidityItmNode."
keywords:
  - "liquidity"
  - "item"
  - "hierarchy"
  - "node"
  - "base"
  - "txt"
  - "language"
  - "validity"
  - "date"
  - "text"
tags:
  - FIN
  - component:FIN-FSCM-CLM-FQM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
---
# I_UNIVHIERLIQUIDITYITMNODET

**Liquidity Item Hierarchy Node Base - Txt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_LiquidityItemText` | `spras` | `LANG(1)` | Language Key |
| `LiquidityItemHierarchy` | ✓ | |  |  | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `HierarchyNode` | ✓ | |  |  | `CHAR(50)` | Hierarchy node |
| `HierarchyNodeText` |  | |  | `coalesce(_LiquidityItemText.s_text, LiquidityItemNode.LiquidityItem )` | `CHAR(40)` |  |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `LiquidityItem` |  | |  |  | `CHAR(40)` | Node value |
| `_Language` | | ✓ | | | | |
| `_Node` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Node` | `I_UnivHierLiquidityItmNode` | [0..1] |
| `_Hierarchy` | `I_UnivHierLiquidityItmHier` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODET')/$value)*

```abap
@EndUserText.label: 'Liquidity Item Hierarchy Node Base - Txt' //same as DDL description
//refered to I_Liquidityitemhieranodetext for Universal Hierarchy
@VDM.viewType: #BASIC
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IUHLIQITEMHNODET'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'CashFlow'
define view entity I_UnivHierLiquidityItmNodeT //must start with "I_"; same as DDL source name in upper-camelcase notation
   as select from I_UnivHierLiquidityItmNode as LiquidityItemNode
   inner join flqlpost as _LiquidityItemText on LiquidityItemNode.LiquidityItem = _LiquidityItemText.lqpos
   
   association [0..1] to I_Language                          as _Language
                 on  $projection.Language       = _Language.Language
   association [0..1] to I_UnivHierLiquidityItmNode as _Node                  
           on  $projection.LiquidityItemHierarchy  = _Node.LiquidityItemHierarchy
           and $projection.ValidityEndDate = _Node.ValidityEndDate
           and $projection.HierarchyNode   = _Node.HierarchyNode
   association [0..*] to I_UnivHierLiquidityItmHier            as _Hierarchy 
           on  $projection.LiquidityItemHierarchy  = _Hierarchy.LiquidityItemHierarchy
  //         and $projection.ValidityEndDate = _Hierarchy.ValidityEndDate
 
{
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key _LiquidityItemText.spras                          as Language,
    @ObjectModel.foreignKey.association: '_Hierarchy'    
    key LiquidityItemNode.LiquidityItemHierarchy,
    @Semantics.businessDate.to: true
    key LiquidityItemNode.ValidityEndDate,
    @ObjectModel.foreignKey.association: '_Node'
    key LiquidityItemNode.HierarchyNode,
    
    @Semantics.text: true
    coalesce(_LiquidityItemText.s_text, LiquidityItemNode.LiquidityItem )                   as HierarchyNodeText,        
    @Semantics.businessDate.from: true
    LiquidityItemNode.ValidityStartDate,

    LiquidityItemNode.LiquidityItem,

//association    
    _Language,
    _Node,
    _Hierarchy    
                                     
}   where _LiquidityItemText.spras = $session.system_language
```
