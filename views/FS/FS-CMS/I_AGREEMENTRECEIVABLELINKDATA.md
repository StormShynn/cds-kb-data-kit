---
name: I_AGREEMENTRECEIVABLELINKDATA
description: Agreement Receivable Link Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLELINKDATA')/$value
semantic_en: Agreement Receivable Link Details
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTRECEIVABLELINKDATA

**Agreement Receivable Link Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLELINKDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AgreementReceivableUUID` | `RAW(16)` | GUID for Table CMS_CAG_RBL |
| `AgreementPortionUUID` | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `CollateralRblCreditSystem` | `CHAR(3)` | Credit System |
| `CollateralReceivableID` | `CHAR(64)` | Receivable ID |
| `AgreementRblLinkValidFromDate` | `DATS(8)` | Date |
| `AgreementRblLinkValidToDate` | `DATS(8)` | Date |
| `AgreementRblPriorityVal` | `NUMC(4)` | Priority of the Collateral Agreement - Receivable Link |
| `AgreementRblRankingClassVal` | `NUMC(4)` | Ranking Class of the Collateral Agreement - Receivable Link |
| `AgreementReceivableLinkType` | `CHAR(2)` | Indicator for Manually or Automatic Links |
| `AgreementTemporaryColltrlSign` | `CHAR(2)` | Indicates if Collateral Agreement is a Temporary Collateral |
| `AgreementRblSecuredAmount` | `CURR(17)` | Secured Receivable Amount |
| `AgreementRblSecuredCurrency` | `CUKY(5)` | Currency of the Receivable  Amounts Specified in the Link |
| `AgreementReceivablePercent` | `DEC(10)` | Percentage of the Receivable |
| `AgreementReceivablePortion` | `CHAR(2)` | Portion of the Receivable |
| `AgreementRblMiddlePortnRefAmt` | `CURR(17)` | Reference Amount of Receivable for Middle Portion |
| `AgreementRblMiddlePortnRefPct` | `DEC(10)` | Reference Percentage of Receivable for Middle Portion |
| `AgreementRblComponentType` | `CHAR(3)` | CComponent Type of a Receivable |
| `AgreementRblLinkEnteredBy` | `CHAR(12)` | Login ID of the User who created the Record |
| `AgreementRblLinkEnteredDteTme` | `DEC(15)` | Creation Timestamp |
| `AgreementRblLinkLastChangedBy` | `CHAR(12)` | Last Changed By |
| `AgreementRblLinkLastChgdDteTme` | `DEC(15)` | Change Timestamp |
