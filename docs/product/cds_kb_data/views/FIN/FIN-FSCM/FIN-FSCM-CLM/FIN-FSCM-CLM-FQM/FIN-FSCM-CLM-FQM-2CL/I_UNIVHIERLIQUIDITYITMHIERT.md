---
name: I_UNIVHIERLIQUIDITYITMHIERT
description: "Liquidity Item Hierarchy - Text"
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIERT')/$value
semantic_en: "Liquidity Item Hierarchy - Text"
semantic_vi: "Liquidity Item Hierarchy - Text — CDS view giao diện dựa trên P_FCLM_LQH_TEXT."
keywords:
  - "liquidity"
  - "item"
  - "hierarchy"
  - "text"
  - "language"
  - "validity"
  - "date"
  - "start"
  - "name"
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
# I_UNIVHIERLIQUIDITYITMHIERT

**Liquidity Item Hierarchy - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIERT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `LiquidityItemHierarchy` | ✓ | |  | `hier_id` | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` | ✓ | |  | `hryvalto` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  | `hryvalfrom` | `DATS(8)` | Valid-From Date |
| `LiquidityItemName` |  | |  | `txt_sh` | `CHAR(50)` |  |
| `_Language` | | ✓ | | | | |
| `_LiquidityItemHierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LiquidityItemHierarchy` | `I_UnivHierLiquidityItmHier` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIERT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIERT')/$value)*

```abap
@EndUserText.label: 'Liquidity Item Hierarchy - Text' //same as DDL description
//refered to I_Liquidityitemhierarchyt for Universal Hierarchy
@AccessControl.authorizationCheck: #CHECK
@Analytics.internalName: #LOCAL
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IUHLQIHIERT'
@ObjectModel.representativeKey: 'LiquidityItemHierarchy'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #D
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'CashFlow'
define view entity I_UnivHierLiquidityItmHierT //must start with "I_"; same as DDL source name in upper-camelcase notation
   as select from P_FCLM_LQH_TEXT as text
  association [0..1] to I_Language   as _Language 
      on text.langu = _Language.Language
  association [0..*] to I_UnivHierLiquidityItmHier as _LiquidityItemHierarchy  
      on text.hier_id = _LiquidityItemHierarchy.LiquidityItemHierarchy
   //   and text.hryvalto = _LiquidityItemHierarchy.ValidityEndDate
 
 {
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key langu as Language, 
  
  key hier_id as LiquidityItemHierarchy,
  
  @Semantics.businessDate.to: true
  key hryvalto as ValidityEndDate,
  @Semantics.businessDate.from: true
  hryvalfrom as ValidityStartDate,
                  
  @Semantics.text: true
  text.txt_sh as LiquidityItemName,
   
//association
  _Language,
  _LiquidityItemHierarchy 
}
```
