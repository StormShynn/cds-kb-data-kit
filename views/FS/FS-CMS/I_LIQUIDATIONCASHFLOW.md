---
name: I_LIQUIDATIONCASHFLOW
description: Liquidation Cashflow
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOW')/$value
semantic_en: Liquidation Cashflow
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_LIQUIDATIONCASHFLOW

**Liquidation Cashflow**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOW')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LiquidationCashFlowUUID` | `RAW(16)` | Liquidation Cashflow GUID |
| `CollateralLiquidationUUID` | `RAW(16)` | Liquidation GUID |
| `LiquidationCashFlowAmount` | `CURR(17)` | Liquidation Cash Flow Amount |
| `LiquidationCashFlowCurrency` | `CUKY(5)` | Liquidation cash flow currency |
| `LiquidationCashFlowType` | `CHAR(6)` | Cash Flow Type |
| `LiquidationCashFlowDate` | `DATS(8)` | Liquidation Cash Flow Date |
| `LiquidationObjectRefSystem` | `CHAR(6)` | Object System Reference ID for Liquidation |
