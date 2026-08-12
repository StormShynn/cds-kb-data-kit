---
name: I_TRDGCONTRTYPETEXT
description: "Trading Contract Type - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPETEXT')/$value
semantic_en: "Trading Contract Type - Text"
semantic_vi: "Trading Contract Type - Text — CDS view cơ bản dựa trên R_TrdgDocTypeText."
keywords:
  - "trading"
  - "contract"
  - "type"
  - "text"
  - "language"
  - "trdg"
  - "contr"
  - "name"
tags:
  - LO
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGCONTRTYPETEXT

**Trading Contract Type - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TradingContractType` | ✓ | |  | `TradingDocumentType` | `CHAR(4)` | Reference Document Type |
| `TrdgContrTypeName` |  | |  | `TrdgDocTypeName` | `CHAR(40)` | Trading Contract Type Description |
| `_Language` | | ✓ | | | | |
| `_TrdgContrType` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Trading Contract Type - Text'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   representativeKey: 'TradingContractType',
   dataCategory: #TEXT,
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #SEARCHABLE_ENTITY,
                           #SQL_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true


define view entity I_TrdgContrTypeText
  as select from R_TrdgDocTypeText

  association to parent I_TrdgContrType as _TrdgContrType on $projection.TradingContractType = _TrdgContrType.TradingContractType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_TrdgContrType'
      @ObjectModel.text.element: ['TrdgContrTypeName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: false
  key TradingDocumentType as TradingContractType ,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text: true
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      @UI.textArrangement: #TEXT_ONLY
      TrdgDocTypeName as TrdgContrTypeName,
      
      /* Associations */
      _Language,
      @Consumption.valueHelp: '_TrdgContrType'
      _TrdgContrType
}
```
