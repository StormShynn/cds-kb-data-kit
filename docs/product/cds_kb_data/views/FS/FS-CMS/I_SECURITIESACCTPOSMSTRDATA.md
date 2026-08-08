---
name: I_SECURITIESACCTPOSMSTRDATA
description: "Securities Account Position Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCTPOSMSTRDATA')/$value
semantic_en: "Securities Account Position Details"
tags:
  - FS
  - account
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_SECURITIESACCTPOSMSTRDATA

**Securities Account Position Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCTPOSMSTRDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecuritiesAccountPositionUUID` |  | |  |  | `RAW(16)` | GUID for securities positions in an account |
| `SecuritiesAccountObjectUUID` |  | |  |  | `RAW(16)` | GUID for securities account |
| `SecuritiesAcctPosSqncNmbr` |  | |  |  | `NUMC(4)` | Sequence Number of a Position in a Securities Account |
| `SecuritiesAcctPosExtRefNmbr` |  | |  |  | `CHAR(32)` | ID of a Positiion Referenced from an External System |
| `SecuritiesAccountPositionID` |  | |  |  | `CHAR(20)` | Unique ID for a Position in a Securities Account |
| `SecuritiesAcctPosNumberOfUnits` |  | |  |  | `DEC(15)` | Number of Units in a Securities Position |
| `SecuritiesAcctPosNominalAmount` |  | |  |  | `CURR(17)` | Nominal Value of a Position |
| `SecuritiesAcctPosNominalCrcy` |  | |  |  | `CUKY(5)` | Currency of nominal value of a position |
| `SecuritiesAcctPosCurPriceAmt` |  | |  |  | `CURR(17)` | Current Price of a Securities Postion per Unit |
| `SecuritiesAcctPosCurPriceCrcy` |  | |  |  | `CUKY(5)` | Currency of Current Price of a Securities Position |
| `SecuritiesAcctPosCurPricePct` |  | |  |  | `DEC(10)` | Current Price of a Unit of a Securities Position |
| `SecuritiesAcctPosMarketValAmt` |  | |  |  | `CURR(17)` | Market Value of a Securities Position |
| `SecuritiesAcctPosMarketValCrcy` |  | |  |  | `CUKY(5)` | Currency of the Market Value of Securities Positions |
| `SecuritiesAcctPosCnvrtdMktAmt` |  | |  |  | `CURR(17)` | Market Value of a Securities Account Position |
| `SecuritiesAcctPosCnvrtdMktCrcy` |  | |  |  | `CUKY(5)` | Currency of Converted Market Value of Positions |
| `SecuritiesAccountPosRiskCode` |  | |  |  | `CHAR(6)` | Risk Code |
| `SecuritiesAcctPosSftyDiscSign` |  | |  |  | `CHAR(2)` | Indicates that the asset has a default sfty discount or not |
| `SecuritiesAcctPosSftyDiscPct` |  | |  |  | `DEC(10)` | Safety discount |
| `SecuritiesAcctPosSftyDiscAmt` |  | |  |  | `CURR(17)` | Safety discount as an amount |
| `SecuritiesAcctPosSftyDiscCrcy` |  | |  |  | `CUKY(5)` | Currency of the Safety discount amount |
| `SecuritiesAcctPosLendgRateSign` |  | |  |  | `CHAR(2)` | Indicates that the asset has a default lending rate or not |
| `SecuritiesAcctPos1stLendgRate` |  | |  |  | `DEC(10)` | Lending rate 1 |
| `SecuritiesAcctPosLqdtnType` |  | |  |  | `CHAR(6)` | Liquidation type |
| `SecuritiesAcctPosLqdtnReason` |  | |  |  | `CHAR(6)` | Liquidation Reason |
| `SecuritiesAcctPosLqdtnDate` |  | |  |  | `DATS(8)` | Date of Liquidation of Collateral |
| `SecuritiesAcctPosLqdtnAmount` |  | |  |  | `CURR(17)` | Proceeds obtained from liquidation of the collateral |
| `SecuritiesAcctPosLqdtnCurrency` |  | |  |  | `CUKY(5)` | Currency of Liquidation value |
| `SecuritiesAcctPosEnteredBy` |  | |  |  | `CHAR(12)` | Securities Add-On User |
| `SecuritiesAcctPosEnteredDate` |  | |  |  | `DATS(8)` | Created On |
| `SecuritiesAcctPosEnteredTime` |  | |  |  | `TIMS(6)` | Created At |
| `SecuritiesAcctPosLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `SecuritiesAcctPosLastChgdDate` |  | |  |  | `DATS(8)` | Last Changed on |
| `SecuritiesAcctPosLastChgdTime` |  | |  |  | `TIMS(6)` | Last Changed  At |
