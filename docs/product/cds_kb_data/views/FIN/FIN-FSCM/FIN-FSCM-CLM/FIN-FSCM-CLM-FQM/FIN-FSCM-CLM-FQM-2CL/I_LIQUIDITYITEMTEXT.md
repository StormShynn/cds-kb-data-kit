---
name: I_LIQUIDITYITEMTEXT
description: "Liquidity Item - Text"
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEMTEXT')/$value
semantic_en: "Liquidity Item - Text"
semantic_vi: "Liquidity Item - Text — CDS view giao diện dựa trên flqlpost."
keywords:
  - "liquidity"
  - "item"
  - "text"
  - "language"
  - "name"
  - "long"
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
  - bo:purchaseorder
---
# I_LIQUIDITYITEMTEXT

**Liquidity Item - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidityItem` | ✓ | |  | `lqpos` | `CHAR(16)` | Liquidity Item |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LiquidityItemName` |  | |  | `cast( s_text as fclm_lqitem_name preserving type )` | `CHAR(30)` | Liquidity Item Name |
| `LongText` |  | |  | `cast( l_text as fclm_lqitem_desc preserving type )` | `CHAR(60)` | Liquidity Item Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEMTEXT')/$value)*

```abap
@EndUserText.label: 'Liquidity Item - Text' //same as DDL description
@ObjectModel.dataCategory: #TEXT 
@VDM.viewType: #BASIC
@Search.searchable: true
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'ILIQUIDITYITEMT'
@ObjectModel.representativeKey: 'LiquidityItem'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'CashFlow'
define view I_LiquidityItemText //must start with "I_"; same as DDL source name in upper-camelcase notation 
as select from flqlpost
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key lqpos as LiquidityItem,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
    key spras as Language,
    @Semantics.text: true
    @Search: {
      defaultSearchElement: true,
      ranking: #LOW,
      fuzzinessThreshold: 0.8
    }
    cast( s_text as fclm_lqitem_name preserving type ) as LiquidityItemName,
    @Semantics.text: true
    cast( l_text as fclm_lqitem_desc preserving type ) as LongText,
    _Language 
}
```
