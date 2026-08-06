---
name: I_RECEIVABLEDATA
description: Receivable Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVABLEDATA')/$value
semantic_en: Receivable Details
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_RECEIVABLEDATA

**Receivable Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVABLEDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CollateralReceivableUUID` | `RAW(16)` | GUID for Table CMS_RBL |
| `CollateralRblCreditSystem` | `CHAR(3)` | Credit System |
| `CollateralReceivableID` | `CHAR(64)` | Receivable ID |
| `CollateralRblProductClass` | `CHAR(6)` | Product Class |
| `CollateralRblProduct` | `CHAR(12)` | Product of Receivable |
| `CollateralRblOrganizationUnit` | `CHAR(10)` | Organization Unit for a Receivable |
| `CollateralRblIsCredit` | `CHAR(1)` | Indicator to specify if Receivable is Credit/Debit to Bank |
| `CollateralRblIsOtherBank` | `CHAR(1)` | Indicates that the Receivable belongs to an External Bank |
| `CollateralRblDescription` | `CHAR(60)` | Description of Receivable |
| `CollateralAdminOrgUnit` | `CHAR(12)` | Administration Organizational Unit |
| `CollateralRblStatus` | `CHAR(2)` | Status of Receivable |
| `CollateralRblCreditSystemRef` | `CHAR(3)` | Reference to Credit System |
| `CollateralRblReferenceNumber` | `CHAR(64)` | Receivable Id |
| `CollateralRblRiskValidFromDate` | `DATS(8)` | Date |
| `CollateralRblRiskValidToDate` | `DATS(8)` | Date |
| `ColltrlRblCndnFxdPerdStrtDte` | `DATS(8)` | Date |
| `ColltrlRblCndnFxdPerdEndDte` | `DATS(8)` | Date |
| `CollateralRblContractAmount` | `CURR(17)` | Amount of Receivable Contract |
| `CollateralRblContractCurrency` | `CUKY(5)` | Receivable Contract Currency |
| `CollateralRblMaximumRiskAmount` | `CURR(17)` | Maximum Risk |
| `CollateralRblCurrentRiskAmount` | `CURR(17)` | Current Risk |
| `CollateralRblRiskCurrency` | `CUKY(5)` | Currency for Receivable Risk Amounts |
| `CollateralRblDisbmtOblgnAmt` | `CURR(17)` | Disbursement Obligation |
| `CollateralRblDisbmtOblgnCrcy` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblUtilizationAmount` | `CURR(17)` | Utilization Amount |
| `CollateralRblUtilizationCrcy` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblDrawdownAmount` | `CURR(17)` | Drawdown of Receivable |
| `CollateralRblDrawdownCurrency` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblInterestAmount` | `CURR(17)` | Outstanding Interest Amount |
| `CollateralRblInterestCurrency` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblFeesAmount` | `CURR(17)` | Fees Amount |
| `CollateralRblFeesCurrency` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRbl1stAmount` | `CURR(17)` | Receivable Amount |
| `CollateralRbl1stCurrency` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRbl2ndAmount` | `CURR(17)` | Receivable Amount |
| `CollateralRbl2ndCurrency` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRbl3rdAmount` | `CURR(17)` | Receivable Amount |
| `CollateralRbl3rdCurrency` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRbl4thAmount` | `CURR(17)` | Receivable Amount |
| `CollateralRbl4thCurrency` | `CUKY(5)` | Currency of Receivable Capitals |
| `CollateralRblOrgUnit1` | `CHAR(10)` | Organizational Unit 1: Receivable |
| `CollateralRblOrgUnit2` | `CHAR(10)` | Organizational Unit 2: Receivable |
| `CollateralRblOrgUnit3` | `CHAR(10)` | Organizational Unit 3: Receivable |
| `CollateralRblOrgUnit4` | `CHAR(10)` | Organizational Unit 4: Receivable |
| `CollateralRblOrgUnit5` | `CHAR(10)` | Organizational Unit 5: Receivable |
| `CollateralProcessControlKey` | `CHAR(10)` | Process Control Key |
