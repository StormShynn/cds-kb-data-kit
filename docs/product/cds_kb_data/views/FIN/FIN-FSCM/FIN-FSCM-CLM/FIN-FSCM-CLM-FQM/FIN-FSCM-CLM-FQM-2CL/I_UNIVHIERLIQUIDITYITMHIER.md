---
name: I_UNIVHIERLIQUIDITYITMHIER
description: "This CDS view provides access to the Liquidity Item Hierarchy master data, representing the organizational structure used to categorize and analyze liquidity items in cash flow management. The view serves as a basic interface to the hierarchy attributes, including validity periods, and enables text associations for descriptive information across different languages. This CDS view provides the data to answer the following business questions: What liquidity item hierarchies are available in the system? What is the validity period (start and end dates) for each liquidity item hierarchy? Which liquidity item hierarchies are currently active or valid for a specific date? What are the descriptive texts associated with each liquidity item hierarchy in different languages? How are liquidity items structured and organized for cash flow analysis and reporting? Which hierarchy structures can be used for categorizing cash flow transactions? What is the historical evolution of liquidity item hierarchy structures over time based on validity periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIER')/$value
semantic_en: "This CDS view provides access to the Liquidity Item Hierarchy master data, representing the organizational structure used to categorize and analyze liquidity items in cash flow management. The view serves as a basic interface to the hierarchy attributes, including validity periods, and enables text associations for descriptive information across different languages. This CDS view provides the data to answer the following business questions: What liquidity item hierarchies are available in the system? What is the validity period (start and end dates) for each liquidity item hierarchy? Which liquidity item hierarchies are currently active or valid for a specific date? What are the descriptive texts associated with each liquidity item hierarchy in different languages? How are liquidity items structured and organized for cash flow analysis and reporting? Which hierarchy structures can be used for categorizing cash flow transactions? What is the historical evolution of liquidity item hierarchy structures over time based on validity periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Liquidity Item Hierarchy — CDS view giao diện dựa trên P_FCLM_LQH_ATTR."
keywords:
  - "liquidity"
  - "item"
  - "hierarchy"
  - "validity"
  - "date"
  - "start"
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
  - transaction
---
# I_UNIVHIERLIQUIDITYITMHIER

**This CDS view provides access to the Liquidity Item Hierarchy master data, representing the organizational structure used to categorize and analyze liquidity items in cash flow management. The view serves as a basic interface to the hierarchy attributes, including validity periods, and enables text associations for descriptive information across different languages. This CDS view provides the data to answer the following business questions: What liquidity item hierarchies are available in the system? What is the validity period (start and end dates) for each liquidity item hierarchy? Which liquidity item hierarchies are currently active or valid for a specific date? What are the descriptive texts associated with each liquidity item hierarchy in different languages? How are liquidity items structured and organized for cash flow analysis and reporting? Which hierarchy structures can be used for categorizing cash flow transactions? What is the historical evolution of liquidity item hierarchy structures over time based on validity periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidityItemHierarchy` | ✓ | |  | `hier_id` | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` | ✓ | |  | `dateto` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  | `datefrom` | `DATS(8)` | Valid-From Date |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_UnivHierLiquidityItmHierT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIER')/$value)*

```abap
@EndUserText.label: 'Liquidity Item Hierarchy' //same as DDL description
//refered to I_Liquidityitemhierarchy for Universal Hierarchy
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'LiquidityItemHierarchy'
@Analytics.technicalName: 'IUHLIQITEMHIE'
@VDM.viewType: #BASIC
@Analytics.internalName: #LOCAL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'CashFlow'
define view entity I_UnivHierLiquidityItmHier //must start with "I_"; same as DDL source name in upper-camelcase notation
   as select from P_FCLM_LQH_ATTR
    association [0..*] to I_UnivHierLiquidityItmHierT as _Text 
         on P_FCLM_LQH_ATTR.hier_id  = _Text.LiquidityItemHierarchy
    //     and P_FCLM_LQH_ATTR.dateto = _Text.ValidityEndDate
{
  
  @ObjectModel.text.association: '_Text'
  key hier_id          as LiquidityItemHierarchy,
  @Semantics.businessDate.to: true
  key dateto                as ValidityEndDate,
  @Semantics.businessDate.from: true                        
  datefrom              as ValidityStartDate,
  _Text 
   
}
```
