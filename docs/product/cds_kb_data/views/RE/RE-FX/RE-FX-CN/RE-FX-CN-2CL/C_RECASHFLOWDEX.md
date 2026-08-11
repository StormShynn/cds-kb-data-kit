---
name: C_RECASHFLOWDEX
description: "Extractor for Real Estate"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWDEX')/$value
semantic_en: "Extractor for Real Estate"
semantic_vi: "Extractor for Real Estate — CDS view tiêu dùng dựa trên I_RECashFlow."
keywords:
  - "extractor"
  - "for"
  - "real"
  - "estate"
  - "cash"
  - "flow"
  - "record"
  - "internal"
  - "number"
  - "status"
  - "object"
  - "type"
  - "company"
  - "code"
tags:
  - RE
  - component:RE-FX-CN-2CL
  - consumption-view
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# C_RECASHFLOWDEX

**Extractor for Real Estate**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RECashFlowRecordUUID` | ✓ | |  |  | `RAW(16)` | Real Estate Cashflow Object Number |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `RealEstateObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `RETaxType` |  | |  |  | `CHAR(4)` | Tax Type |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Alternative Tax Reporting Country/Region |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `REPartnerStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `InternalOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `REConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `REBookedFlowType` |  | |  |  | `CHAR(4)` | Booked Flow Type |
| `REFlowType` |  | |  |  | `CHAR(4)` | Flow Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `RERelshpBookedToFlowType` |  | |  |  | `CHAR(3)` | Type of Relationship Between Flow Type and Booked Flow Type |
| `CashFlowPostingStatus` |  | |  |  | `CHAR(1)` | Indicates Status of Flow |
| `RECashFlowOrigin` |  | |  |  | `CHAR(1)` | Origin of the Cash Flow |
| `REContractIsActive` |  | |  |  | `CHAR(1)` | Contract Active |
| `REContractCompanyCode` |  | |  |  | `CHAR(4)` | Real Estate Contract Company Code |
| `REDocumentReferenceUUID` |  | |  |  | `RAW(16)` | GUID (RAW16) for Document References in Cash Flow |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CalculationPeriodStartDate` |  | |  |  | `DATS(8)` | Start of Calculation Period |
| `CalculationPeriodEndDate` |  | |  |  | `DATS(8)` | End of Calculation Period |
| `CalculationDate` |  | |  |  | `DATS(8)` | Calculation Date |
| `PaymentDueDate` |  | |  |  | `DATS(8)` | Due Date |
| `REBeginOfPeriodDate` |  | |  |  | `DATS(8)` | Period start |
| `REEndOfPeriodDate` |  | |  |  | `DATS(8)` | Period End |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Date from when condition is valid |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date |
| `REContractCashFlowDate` |  | |  |  | `DATS(8)` | Cash Flow Generated Starting On |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `RECashFlowLoclNetAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowLoclGrossAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowLoclTaxAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowLoclCurrency` |  | |  |  | `CUKY(5)` | Local Currency of Cash Flow Item |
| `RECashFlowConditionNetAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowConditionGrossAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowConditionTaxAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowConditionCurrency` |  | |  |  | `CUKY(5)` | Condition Currency of Cash Flow Item |
| `FinTransFlowNomAmt` |  | |  |  | `CURR(28)` |  |
| `_CompanyCode` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_REBookedFlowType` | | ✓ | | | | |
| `_RECashFlowPostingStatus` | | ✓ | | | | |
| `_REConditionType` | | ✓ | | | | |
| `_REContract` | | ✓ | | | | |
| `_REContractCompanyCode` | | ✓ | | | | |
| `_REFlowType` | | ✓ | | | | |
| `_RERelshpBookedToFlowType` | | ✓ | | | | |
| `_RETaxType` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWDEX')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CRECASHFLDEX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName:#LOCAL 
}

@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true 

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: #EXTRACTION_DATA_SOURCE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@EndUserText.label: 'Extractor for Real Estate'
define view C_RECashFlowDEX as select from I_RECashFlow {
  key RECashFlowRecordUUID,
//  REConditionUUID,
  InternalRealEstateNumber,
  REStatusObject,
  RealEstateObjectType,
  CompanyCode,
  RealEstateContract,
  RETaxType,
//  TaxGroup,
  TaxCountry,
  TaxJurisdiction,
//  BusinessPartner,
  REPartnerStatusObject,
  ControllingArea,
  CostCenter,
  InternalOrder,
  REConditionType,
  REBookedFlowType,
  REFlowType,
  DebitCreditCode,
  RERelshpBookedToFlowType,
  CashFlowPostingStatus,
  RECashFlowOrigin,
  REContractIsActive,
  REContractCompanyCode,
  REDocumentReferenceUUID,
  FiscalYearVariant,
  CalculationPeriodStartDate,
  CalculationPeriodEndDate,
  CalculationDate,
  PaymentDueDate,
  REBeginOfPeriodDate,
  REEndOfPeriodDate,
  ValidityStartDate,
  PostingDate,
  DocumentDate,
  REContractCashFlowDate,
  ContractEndDate,
  ContractStartDate,
  @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency' 
  RECashFlowLoclNetAmount,
  @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency'
  RECashFlowLoclGrossAmount,
  @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency' 
  RECashFlowLoclTaxAmount,
  RECashFlowLoclCurrency,
  @Semantics.amount.currencyCode: 'RECashFlowConditionCurrency' 
  RECashFlowConditionNetAmount,
  @Semantics.amount.currencyCode: 'RECashFlowConditionCurrency'
  RECashFlowConditionGrossAmount,
  @Semantics.amount.currencyCode: 'RECashFlowConditionCurrency'
  RECashFlowConditionTaxAmount,
  RECashFlowConditionCurrency,
  @Semantics.amount.currencyCode: 'RECashFlowConditionCurrency'
  FinTransFlowNomAmt,
  /* Associations */
//  _BusinessPartner,
  _CompanyCode,
  _DebitCreditCode,
  _REBookedFlowType,
  _RECashFlowPostingStatus,
//  _RECondition,
  _REConditionType,
  _REContract,
  _REContractCompanyCode,
  _REFlowType,
  _RERelshpBookedToFlowType,
//  _RETaxGroup,
  _RETaxType,
  _TaxCountry
}
```
