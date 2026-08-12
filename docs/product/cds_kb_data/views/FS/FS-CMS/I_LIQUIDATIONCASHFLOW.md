---
name: I_LIQUIDATIONCASHFLOW
description: "Liquidation Cashflow"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOW')/$value
semantic_en: "Liquidation Cashflow"
semantic_vi: "Liquidation Cashflow — CDS view giao diện dựa trên cms_liq_cflow."
keywords:
  - "liquidation"
  - "cashflow"
  - "cash"
  - "flow"
  - "collateral"
  - "amount"
  - "currency"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONCASHFLOW

**Liquidation Cashflow**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationCashFlowUUID` | ✓ | |  | `liq_cflow_guid` | `RAW(16)` | Liquidation Cashflow GUID |
| `CollateralLiquidationUUID` |  | |  | `liq_guid` | `RAW(16)` | Liquidation GUID |
| `LiquidationCashFlowAmount` |  | |  | `liq_cflow_amnt` | `CURR(17)` | Liquidation Cash Flow Amount |
| `LiquidationCashFlowCurrency` |  | |  | `liq_cflow_curr` | `CUKY(5)` | Liquidation cash flow currency |
| `LiquidationCashFlowType` |  | |  | `liq_cflow_typ` | `CHAR(6)` | Cash Flow Type |
| `LiquidationCashFlowDate` |  | |  | `liq_cflow_date` | `DATS(8)` | Liquidation Cash Flow Date |
| `LiquidationObjectRefSystem` |  | | `_LiquidationData` | `LiquidationObjectRefSystem` | `CHAR(6)` | Object System Reference ID for Liquidation |
| `_LiquidationData` | | ✓ | | | | |
| `_LiquidationProcess` | | ✓ | | | | |
| `_LiquidationPartner` | | ✓ | | | | |
| `_LiquidationDocument` | | ✓ | | | | |
| `_LiquidationCashFlowCurrency` | | ✓ | | | | |
| `_LiquidationCashFlowType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LiquidationData` | `I_LiquidationData` | [0..1] |
| `_LiquidationProcess` | `I_LiquidationProcess` | [0..*] |
| `_LiquidationPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_LiquidationDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_LiquidationCashFlowCurrency` | `I_Currency` | [0..1] |
| `_LiquidationCashFlowType` | `I_LiquidationCashFlowType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOW')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ILIQCASHFLOW',
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
    representativeKey: 'LiquidationCashFlowUUID'
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
        { table : 'CMS_LIQ_CFLOW',
          role : #MAIN,
          viewElement : ['LiquidationCashFlowUUID'],
          tableElement : ['LIQ_CFLOW_GUID'] },
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
@EndUserText.label: 'Liquidation Cashflow'
define view I_LiquidationCashFlow
  as select from cms_liq_cflow
  association [0..1] to I_LiquidationData         as _LiquidationData             on $projection.CollateralLiquidationUUID = _LiquidationData.CollateralLiquidationUUID
  association [0..*] to I_LiquidationProcess      as _LiquidationProcess          on $projection.CollateralLiquidationUUID = _LiquidationProcess.CollateralLiquidationUUID
  association [0..*] to I_ObjectAssetPartner      as _LiquidationPartner          on $projection.CollateralLiquidationUUID = _LiquidationPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument     as _LiquidationDocument         on $projection.CollateralLiquidationUUID = _LiquidationDocument.ObjectAssetUUID
  association [0..1] to I_Currency                as _LiquidationCashFlowCurrency on $projection.LiquidationCashFlowCurrency = _LiquidationCashFlowCurrency.Currency
  association [0..1] to I_LiquidationCashFlowType as _LiquidationCashFlowType     on $projection.LiquidationCashFlowType = _LiquidationCashFlowType.LiquidationCashFlowType
{
  key liq_cflow_guid                           as LiquidationCashFlowUUID,
      @ObjectModel.foreignKey.association: '_LiquidationData'
      liq_guid                                 as CollateralLiquidationUUID,
      @Semantics.amount.currencyCode: 'LiquidationCashFlowCurrency'
      liq_cflow_amnt                           as LiquidationCashFlowAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_LiquidationCashFlowCurrency'
      liq_cflow_curr                           as LiquidationCashFlowCurrency,
      @ObjectModel.foreignKey.association: '_LiquidationCashFlowType'
      liq_cflow_typ                            as LiquidationCashFlowType,
      liq_cflow_date                           as LiquidationCashFlowDate,

      _LiquidationData.LiquidationObjectRefSystem as LiquidationObjectRefSystem,

      _LiquidationData,
      _LiquidationProcess,
      _LiquidationPartner,
      _LiquidationDocument,
      _LiquidationCashFlowCurrency,
      _LiquidationCashFlowType
}
```
