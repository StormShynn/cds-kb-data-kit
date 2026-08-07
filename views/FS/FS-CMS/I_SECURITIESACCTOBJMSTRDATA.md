---
name: I_SECURITIESACCTOBJMSTRDATA
description: Securities Account Object Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCTOBJMSTRDATA')/$value
semantic_en: Securities Account Object Details
tags:
  - FS
  - account
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_SECURITIESACCTOBJMSTRDATA

**Securities Account Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCTOBJMSTRDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecuritiesAccountObjectUUID` |  | |  |  | `RAW(16)` | GUID for securities account |
| `SecuritiesAcctObjDepositoryBk` |  | |  |  | `CHAR(18)` | Depository Bank Identification |
| `SecuritiesAccountObjectNumber` |  | |  |  | `CHAR(20)` | Securities Account Identification Number |
| `SecuritiesAccountObjDesc` |  | |  |  | `CHAR(30)` | Description of the Securities Account |
| `SecuritiesAcctObjExtRefNmbr` |  | |  |  | `CHAR(32)` | ID of a Securities Account Referenced from External System |
| `SecuritiesAccountObjValAmt` |  | |  |  | `CURR(17)` | Value of the Securities Account |
| `SecuritiesAccountObjValCrcy` |  | |  |  | `CUKY(5)` | Currency of Securities Account Value |
| `SecuritiesAccountObjValnDte` |  | |  |  | `DATS(8)` | Date of last valuation |
| `CollateralAdminOrgUnit` |  | |  |  | `CHAR(12)` | Administration Organizational Unit |
| `CollateralBankArea` |  | |  |  | `CHAR(4)` | Bank Area in Collateral Management |
| `SecuritiesAccountObjRiskCode` |  | |  |  | `CHAR(6)` | Risk Code |
| `SecuritiesAcctObjSftyDiscSign` |  | |  |  | `CHAR(2)` | Indicates that the asset has a default sfty discount or not |
| `SecuritiesAcctObjSftyDiscPct` |  | |  |  | `DEC(10)` | Safety discount |
| `SecuritiesAcctObjSftyDiscAmt` |  | |  |  | `CURR(17)` | Safety discount as an amount |
| `SecuritiesAcctObjSftyDiscCrcy` |  | |  |  | `CUKY(5)` | Currency of the Safety discount amount |
| `SecuritiesAcctObjValnFrqcy` |  | |  |  | `CHAR(2)` | Indicator : Valuation Frequency of Securities Account |
| `SecuritiesAcctObjValnPerd` |  | |  |  | `NUMC(4)` | Period of revaluation for securities |
| `SecuritiesAcctObjRevalStrtDte` |  | |  |  | `DATS(8)` | Valuation Start date |
| `SecuritiesAcctObjRevalEndDte` |  | |  |  | `DATS(8)` | Valuation End date |
| `SecuritiesAcctObjLendgRateSign` |  | |  |  | `CHAR(2)` | Indicates that the asset has a default lending rate or not |
| `SecuritiesAcctObj1stLendgRate` |  | |  |  | `DEC(10)` | Lending rate 1 |
| `SecuritiesAcctObjLqdtnType` |  | |  |  | `CHAR(6)` | Liquidation type |
| `SecuritiesAcctObjLqdtnRsn` |  | |  |  | `CHAR(6)` | Liquidation Reason |
| `SecuritiesAcctObjLqdtnDate` |  | |  |  | `DATS(8)` | Date of Liquidation of Collateral |
| `SecuritiesAcctObjLqdtnAmt` |  | |  |  | `CURR(17)` | Proceeds obtained from liquidation of the collateral |
| `SecuritiesAcctObjLqdtnCrcy` |  | |  |  | `CUKY(5)` | Currency of Liquidation value |
| `SecuritiesAccountObjOrgUnit1` |  | |  |  | `CHAR(10)` | Organizational Unit 1: Assets |
| `SecuritiesAccountObjOrgUnit2` |  | |  |  | `CHAR(10)` | Organizational Unit 2: Assets |
| `SecuritiesAccountObjOrgUnit3` |  | |  |  | `CHAR(10)` | Organizational Unit 3: Assets |
| `SecuritiesAccountObjOrgUnit4` |  | |  |  | `CHAR(10)` | Organizational Unit 4: Assets |
| `SecuritiesAccountObjOrgUnit5` |  | |  |  | `CHAR(10)` | Organizational Unit 5: Assets |
| `SecuritiesAcctObjEnteredBy` |  | |  |  | `CHAR(12)` | Securities Add-On User |
| `SecuritiesAcctObjEnteredDte` |  | |  |  | `DATS(8)` | Created On |
| `SecuritiesAcctObjEnteredTme` |  | |  |  | `TIMS(6)` | Created At |
| `SecuritiesAcctObjLastChgdBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `SecuritiesAcctObjLastChgdDte` |  | |  |  | `DATS(8)` | Last Changed on |
| `SecuritiesAcctObjLastChgdTme` |  | |  |  | `TIMS(6)` | Last Changed  At |
| `CollateralProcessControlKey` |  | |  |  | `CHAR(10)` | Process Control Key |
