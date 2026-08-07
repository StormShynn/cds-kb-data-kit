---
name: C_RECASHFLOWQ
description: Real Estate Contract Cashflow Report
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWQ')/$value
semantic_en: Real Estate Contract Cashflow Report
tags:
  - RE
  - bo:purchaseorder
  - component:RE-FX-CN-2CL
  - consumption-view
  - contract
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
  - metadata-only
---
# C_RECASHFLOWQ

**Real Estate Contract Cashflow Report**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RECashFlowRecordUUID` |  | |  |  | `RAW(16)` | Real Estate Cashflow Object Number |
| `REConditionUUID` |  | |  |  | `RAW(16)` | GUID (RAW16) for Conditions |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Real estate object: Object no. |
| `RealEstateObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `REIdentificationKey` |  | |  |  | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `REPartnerStatusObject` |  | |  |  | `CHAR(22)` | Partner Object |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `InternalOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `REBookedFlowType` |  | |  |  | `CHAR(4)` | Booked Flow Type |
| `REFlowType` |  | |  |  | `CHAR(4)` | Flow Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `CashFlowPostingStatus` |  | |  |  | `CHAR(1)` | Indicates Status of Flow |
| `RECashFlowOrigin` |  | |  |  | `CHAR(1)` | Origin of the Cash Flow |
| `REContractIsActive` |  | |  |  | `CHAR(1)` | Contract Active |
| `REContractCompanyCode` |  | |  |  | `CHAR(4)` | Real Estate Contract Company Code |
| `REDocumentReferenceUUID` |  | |  |  | `RAW(16)` | GUID (RAW16) for Document References in Cash Flow |
| `REContractUserSupplier` |  | |  |  | `NUMC(1)` | Offerer (Customer), User (Vendor) |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `REContractActivateDate` |  | |  |  | `DATS(8)` | Active From |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REContractCurrency` |  | |  |  | `CUKY(5)` | Currency for Contract |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `CalculationPeriodStartDate` |  | |  |  | `DATS(8)` | Start of Calculation Period |
| `CalculationPeriodEndDate` |  | |  |  | `DATS(8)` | End of Calculation Period |
| `CalculationDate` |  | |  |  | `DATS(8)` | Calculation Date |
| `PaymentDueDate` |  | |  |  | `DATS(8)` | Due Date |
| `REBeginOfPeriodDate` |  | |  |  | `DATS(8)` | Period start |
| `REEndOfPeriodDate` |  | |  |  | `DATS(8)` | Period End |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date |
| `REContractCashFlowDate` |  | |  |  | `DATS(8)` | Cash Flow Generated Starting On |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Date from when condition is valid |
| `FinTransFlowNomAmt` |  | |  |  | `CURR(23)` | Net Cash Flow in Condition Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NetAmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Net Cash Flow in Display Currency |
| `RECashFlowConditionCurrency` |  | |  |  | `CUKY(5)` | Condition Currency of Cash Flow Item |
