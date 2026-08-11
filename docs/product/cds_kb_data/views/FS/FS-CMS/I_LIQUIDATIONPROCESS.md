---
name: I_LIQUIDATIONPROCESS
description: "Liquidation Process Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESS')/$value
semantic_en: "Liquidation Process Details"
semantic_vi: "Liquidation Process Details — CDS view giao diện dựa trên cms_liq_proc."
keywords:
  - "liquidation"
  - "process"
  - "details"
  - "collateral"
  - "date"
  - "type"
  - "amount"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONPROCESS

**Liquidation Process Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationProcessUUID` | ✓ | |  | `enf_proc_guid` | `RAW(16)` | GUID for enforcement process details |
| `CollateralLiquidationUUID` |  | |  | `liq_guid` | `RAW(16)` | Liquidation GUID |
| `LiquidationProcessDate` |  | |  | `proc_date` | `DATS(8)` | Process Date |
| `LiquidationProcessType` |  | |  | `proc_typ` | `CHAR(6)` | Enforcement Process Date Type |
| `LiquidationProcessMaxBidAmount` |  | |  | `max_bid` | `CURR(17)` | Maximum Bid Amount for a Process Step |
| `LiquidationProcessMaxBidCrcy` |  | |  | `max_bid_curr` | `CUKY(5)` | Currency: Maximum Bid |
| `LqdtnProcessForclrSaleResult` |  | |  | `result_fc` | `CHAR(6)` | Result of a Foreclosure Sale |
| `LiquidationProcessEnfrcmntAmt` |  | |  | `joining_amount` | `CURR(17)` | Joining Amount |
| `LiquidationProcessEnfrcmntCrcy` |  | |  | `joining_curr` | `CUKY(5)` | Currency: Joining amount |
| `LiquidationObjectRefSystem` |  | | `_LiquidationData` | `LiquidationObjectRefSystem` | `CHAR(6)` | Object System Reference ID for Liquidation |
| `_LiquidationData` | | ✓ | | | | |
| `_LiquidationCashFlow` | | ✓ | | | | |
| `_LiquidationPartner` | | ✓ | | | | |
| `_LiquidationDocument` | | ✓ | | | | |
| `_LiquidationProcessType` | | ✓ | | | | |
| `_LqdtnProcessForclrSaleResult` | | ✓ | | | | |
| `_LiquidationProcessMaxBidCrcy` | | ✓ | | | | |
| `_LiquidationProcEnfrcmntCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LiquidationData` | `I_LiquidationData` | [0..1] |
| `_LiquidationCashFlow` | `I_LiquidationCashFlow` | [0..*] |
| `_LiquidationPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_LiquidationDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_LiquidationProcessType` | `I_LiquidationProcessType` | [0..1] |
| `_LqdtnProcessForclrSaleResult` | `I_CollateralAttributeIndType` | [0..1] |
| `_LiquidationProcessMaxBidCrcy` | `I_Currency` | [0..1] |
| `_LiquidationProcEnfrcmntCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESS')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ILIQPROCESS',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'C',
        sizeCategory: 'L',
        dataClass: 'TRANSACTIONAL'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LiquidationProcessUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #CUBE,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping: [
         { table : 'CMS_LIQ_PROC',
           role : #MAIN,
           viewElement : ['LiquidationProcessUUID'],
           tableElement : ['ENF_PROC_GUID'] },
         { table : 'CMS_LIQ',
           role : #LEFT_OUTER_TO_ONE_JOIN,
           viewElement : ['CollateralLiquidationUUID'],
           tableElement : ['LIQ_GUID'] }
       ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Process Details'
define view I_LiquidationProcess
  as select from cms_liq_proc
  association [0..1] to I_LiquidationData            as _LiquidationData              on  $projection.CollateralLiquidationUUID = _LiquidationData.CollateralLiquidationUUID
  association [0..*] to I_LiquidationCashFlow        as _LiquidationCashFlow          on  $projection.CollateralLiquidationUUID = _LiquidationCashFlow.CollateralLiquidationUUID
  association [0..*] to I_ObjectAssetPartner         as _LiquidationPartner           on  $projection.CollateralLiquidationUUID = _LiquidationPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument        as _LiquidationDocument          on  $projection.CollateralLiquidationUUID = _LiquidationDocument.ObjectAssetUUID
  association [0..1] to I_LiquidationProcessType     as _LiquidationProcessType       on  $projection.LiquidationProcessType = _LiquidationProcessType.LiquidationProcessType
  association [0..1] to I_CollateralAttributeIndType as _LqdtnProcessForclrSaleResult on  $projection.LqdtnProcessForclrSaleResult                = _LqdtnProcessForclrSaleResult.CollateralAttributeIndType
                                                                                      and _LqdtnProcessForclrSaleResult.CollateralAttributeIndCat = 'LIQ001'
  association [0..1] to I_Currency                   as _LiquidationProcessMaxBidCrcy on  $projection.LiquidationProcessMaxBidCrcy = _LiquidationProcessMaxBidCrcy.Currency
  association [0..1] to I_Currency                   as _LiquidationProcEnfrcmntCrcy  on  $projection.LiquidationProcessEnfrcmntCrcy = _LiquidationProcEnfrcmntCrcy.Currency
{
  key enf_proc_guid                            as LiquidationProcessUUID,
      @ObjectModel.foreignKey.association: '_LiquidationData'
      liq_guid                                 as CollateralLiquidationUUID,
      proc_date                                as LiquidationProcessDate,
      @ObjectModel.foreignKey.association: '_LiquidationProcessType'
      proc_typ                                 as LiquidationProcessType,
      @Semantics.amount.currencyCode: 'LiquidationProcessMaxBidCrcy'
      max_bid                                  as LiquidationProcessMaxBidAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_LiquidationProcessMaxBidCrcy'
      max_bid_curr                             as LiquidationProcessMaxBidCrcy,
      @ObjectModel.foreignKey.association: '_LqdtnProcessForclrSaleResult'
      result_fc                                as LqdtnProcessForclrSaleResult,
      @Semantics.amount.currencyCode: 'LiquidationProcessEnfrcmntCrcy'
      joining_amount                           as LiquidationProcessEnfrcmntAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_LiquidationProcEnfrcmntCrcy'
      joining_curr                             as LiquidationProcessEnfrcmntCrcy,

      _LiquidationData.LiquidationObjectRefSystem as LiquidationObjectRefSystem,

      _LiquidationData,
      _LiquidationCashFlow,
      _LiquidationPartner,
      _LiquidationDocument,
      _LiquidationProcessType,
      _LqdtnProcessForclrSaleResult,
      _LiquidationProcessMaxBidCrcy,
      _LiquidationProcEnfrcmntCrcy
}
```
