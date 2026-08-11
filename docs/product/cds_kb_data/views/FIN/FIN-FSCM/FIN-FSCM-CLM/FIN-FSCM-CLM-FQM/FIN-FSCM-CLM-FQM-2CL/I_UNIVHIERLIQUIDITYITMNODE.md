---
name: I_UNIVHIERLIQUIDITYITMNODE
description: "This CDS view represents the hierarchical structure of liquidity items in cash flow management. It provides a node-based representation of the liquidity item hierarchy, enabling navigation through parent-child relationships between liquidity items and hierarchy nodes. The view serves as a master data source for analyzing and organizing liquidity items in a hierarchical structure with time-dependent validity periods. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of liquidity items within a specific liquidity item hierarchy? Which liquidity items are organized under which parent nodes in the hierarchy? What are the parent-child relationships between different nodes in the liquidity item hierarchy? Which liquidity item hierarchies are valid for a specific time period or date range? What is the organizational structure of cash flow items for financial planning and analysis? How are liquidity items grouped and categorized within the hierarchy for reporting purposes? Which hierarchy nodes contain actual liquidity items versus structural nodes? What is the validity period for specific nodes within the liquidity item hierarchy? How can liquidity items be navigated from child to parent levels for consolidated cash flow analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODE')/$value
semantic_en: "This CDS view represents the hierarchical structure of liquidity items in cash flow management. It provides a node-based representation of the liquidity item hierarchy, enabling navigation through parent-child relationships between liquidity items and hierarchy nodes. The view serves as a master data source for analyzing and organizing liquidity items in a hierarchical structure with time-dependent validity periods. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of liquidity items within a specific liquidity item hierarchy? Which liquidity items are organized under which parent nodes in the hierarchy? What are the parent-child relationships between different nodes in the liquidity item hierarchy? Which liquidity item hierarchies are valid for a specific time period or date range? What is the organizational structure of cash flow items for financial planning and analysis? How are liquidity items grouped and categorized within the hierarchy for reporting purposes? Which hierarchy nodes contain actual liquidity items versus structural nodes? What is the validity period for specific nodes within the liquidity item hierarchy? How can liquidity items be navigated from child to parent levels for consolidated cash flow analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Liquidity Item Hierarchy Node — CDS view giao diện dựa trên P_FCLM_LQH_HIER."
keywords:
  - "liquidity"
  - "item"
  - "hierarchy"
  - "node"
  - "validity"
  - "date"
  - "parent"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CLM-FQM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
  - master-data
  - plan
---
# I_UNIVHIERLIQUIDITYITMNODE

**This CDS view represents the hierarchical structure of liquidity items in cash flow management. It provides a node-based representation of the liquidity item hierarchy, enabling navigation through parent-child relationships between liquidity items and hierarchy nodes. The view serves as a master data source for analyzing and organizing liquidity items in a hierarchical structure with time-dependent validity periods. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of liquidity items within a specific liquidity item hierarchy? Which liquidity items are organized under which parent nodes in the hierarchy? What are the parent-child relationships between different nodes in the liquidity item hierarchy? Which liquidity item hierarchies are valid for a specific time period or date range? What is the organizational structure of cash flow items for financial planning and analysis? How are liquidity items grouped and categorized within the hierarchy for reporting purposes? Which hierarchy nodes contain actual liquidity items versus structural nodes? What is the validity period for specific nodes within the liquidity item hierarchy? How can liquidity items be navigated from child to parent levels for consolidated cash flow analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidityItemHierarchy` | ✓ | |  | `hier_id` | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` | ✓ | |  | `hryvalto` | `DATS(8)` | Valid To Date |
| `HierarchyNode` | ✓ | |  | `nodeid` | `CHAR(50)` | Hierarchy node |
| `ParentNode` |  | |  | `parentid` | `CHAR(50)` | Hierarchy parent node |
| `LiquidityItem` |  | |  | `node_ref_key` | `CHAR(40)` | Node value |
| `ParentLiquidityItem` |  | |  | `parent_ref_key` | `CHAR(40)` | Node value |
| `ValidityStartDate` |  | |  | `hryvalfrom` | `DATS(8)` | Valid-From Date |
| `_DetailNodeText` | | ✓ | | | | |
| `_LiquidityItem` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DetailNodeText` | `I_UnivHierLiquidityItmNodeT` | [0..1] |
| `_LiquidityItem` | `I_UnivHierLiquidityItem` | [0..1] |
| `_Hierarchy` | `I_UnivHierLiquidityItmHier` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODE')/$value)*

```abap
@EndUserText.label: 'Liquidity Item Hierarchy Node' //same as DDL description
//refered to I_Liquidityitemhierarchynode for Universal Hierarchy
@Analytics.internalName: #LOCAL
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'HierarchyNode'
@Analytics.technicalName: 'IUHLIQITMHIENOD'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #D
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'CashFlow'
define view entity I_UnivHierLiquidityItmNode //must start with "I_"; same as DDL source name in upper-camelcase notation
//   as select from fclm_lqh_hier
      as select from P_FCLM_LQH_HIER
  association [0..1]  to I_UnivHierLiquidityItmNodeT      as _DetailNodeText 
        on  $projection.LiquidityItemHierarchy  = _DetailNodeText.LiquidityItemHierarchy
        and $projection.ValidityEndDate = _DetailNodeText.ValidityEndDate
        and $projection.HierarchyNode   = _DetailNodeText.HierarchyNode
        and $projection.LiquidityItem = ''
        and _DetailNodeText.Language = $session.system_language

  association [0..1]  to I_UnivHierLiquidityItem           as _LiquidityItem        on  $projection.LiquidityItem = _LiquidityItem.LiquidityItem
//  
//  -- H5: Define the association to the hierarchy directory
  association [0..1]  to I_UnivHierLiquidityItmHier           as _Hierarchy 
             on  $projection.LiquidityItemHierarchy  = _Hierarchy.LiquidityItemHierarchy
             and $projection.ValidityEndDate = _Hierarchy.ValidityEndDate

{

  @ObjectModel.foreignKey.association: '_Hierarchy'
//  key hier_id                                               as LiquidityItemHierarchy,
  key hier_id  as LiquidityItemHierarchy,

  
  @Semantics.businessDate.to: true
  key hryvalto  as ValidityEndDate,
                                                         
  @ObjectModel.text.association: '_DetailNodeText'                       
  key nodeid  as HierarchyNode,
  
  parentid as ParentNode,
  
  @ObjectModel.foreignKey.association: '_LiquidityItem'
  node_ref_key as LiquidityItem,
  
 // @ObjectModel.foreignKey.association: '_LiquidityItem'
  parent_ref_key as ParentLiquidityItem,
                                                             
  @Semantics.businessDate.from: true
  hryvalfrom as ValidityStartDate,
  
//association
   _Hierarchy,
   _DetailNodeText, 
   _LiquidityItem
} where nodelevel <> '000000'
```
