---
name: C_RECASHFLOWQ
description: "Real Estate Contract Cashflow Report"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWQ')/$value
semantic_en: "Real Estate Contract Cashflow Report"
semantic_vi: "Real Estate Contract Cashflow Report — CDS view tiêu dùng dựa trên I_RECashFlowC."
keywords:
  - "real"
  - "estate"
  - "contract"
  - "cashflow"
  - "report"
  - "cash"
  - "flow"
  - "record"
  - "condition"
  - "internal"
  - "number"
  - "status"
  - "object"
  - "type"
tags:
  - RE
  - bo:purchaseorder
  - component:RE-FX-CN-2CL
  - consumption-view
  - contract
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# C_RECASHFLOWQ

**Real Estate Contract Cashflow Report**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RECashFlowRecordUUID` | ✓ | |  |  | `RAW(16)` | Real Estate Cashflow Object Number |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECASHFLOWQ')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'CRECSHFLWQ'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XXL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Real Estate Contract Cashflow Report'
@Metadata.ignorePropagatedAnnotations: true

@Analytics.query: true
@VDM.viewType: #CONSUMPTION
@OData.publish: true

@ObjectModel.modelingPattern:           #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_QUERY ]


define view C_RECashFlowQ
  with parameters
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_RECashFlowOrigin', element: 'RECashFlowOrigin' } } ]
    @Consumption.defaultValue: 'P'
    P_RECashFlowOrigin : reiscforigin,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Environment.systemField: #SYSTEM_DATE
    P_ValidFrom        : vdm_validitystart,
    @Environment.systemField: #SYSTEM_DATE
    P_ValidTo          : vdm_validityend

  as select from I_RECashFlowC (P_RECashFlowOrigin:$parameters.P_RECashFlowOrigin,
                 P_ExchangeRateType:$parameters.P_ExchangeRateType,
                 P_DisplayCurrency:$parameters.P_DisplayCurrency,
                 P_ValidFrom:$parameters.P_ValidFrom,
                 P_ValidTo:$parameters.P_ValidTo) as _RECashFlowC
{
      @AnalyticsDetails.query.axis: #FREE
  key RECashFlowRecordUUID,
      @AnalyticsDetails.query.axis: #FREE
      REConditionUUID,
      @AnalyticsDetails.query.axis: #FREE
      InternalRealEstateNumber,
      @AnalyticsDetails.query.axis: #FREE
      REStatusObject,
      @AnalyticsDetails.query.axis: #FREE
      RealEstateObjectType,
      @AnalyticsDetails.query.axis: #FREE
      REIdentificationKey,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      CompanyCode,
      @AnalyticsDetails.query.axis: #ROWS
      RealEstateContract,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      BusinessPartner,
      @AnalyticsDetails.query.axis: #FREE
      REPartnerStatusObject,
      @AnalyticsDetails.query.axis: #FREE
      ControllingArea,
      @AnalyticsDetails.query.axis: #FREE
      CostCenter,
      @AnalyticsDetails.query.axis: #FREE
      InternalOrder,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      REBookedFlowType,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      REFlowType,
      @AnalyticsDetails.query.axis: #FREE
      DebitCreditCode,
      @AnalyticsDetails.query.axis: #FREE
      CashFlowPostingStatus,
      @AnalyticsDetails.query.axis: #FREE
      RECashFlowOrigin,
      @AnalyticsDetails.query.axis: #FREE
      REContractIsActive,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      REContractCompanyCode,
      @AnalyticsDetails.query.axis: #FREE
      REDocumentReferenceUUID,
      @AnalyticsDetails.query.axis: #FREE
      REContractUserSupplier,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      REContractType,
      @AnalyticsDetails.query.axis: #FREE
      REContractName,
      @AnalyticsDetails.query.axis: #FREE
      REContractActivateDate,
      @AnalyticsDetails.query.axis: #FREE
      REContractNumberOld,
      @AnalyticsDetails.query.axis: #FREE
      REContractCurrency,


      @AnalyticsDetails.query.axis: #FREE
      FiscalYearVariant,
      @AnalyticsDetails.query.axis: #FREE
      FiscalYear,
      @AnalyticsDetails.query.axis: #FREE
      FiscalYearPeriod,
      @AnalyticsDetails.query.axis: #FREE
      FiscalQuarter,
      @AnalyticsDetails.query.axis: #FREE
      FiscalPeriod,
      @AnalyticsDetails.query.axis: #FREE
      CalculationPeriodStartDate,
      @AnalyticsDetails.query.axis: #FREE
      CalculationPeriodEndDate,
      @AnalyticsDetails.query.axis: #FREE
      CalculationDate,
      @AnalyticsDetails.query.axis: #FREE
      PaymentDueDate,
      @AnalyticsDetails.query.axis: #FREE
      REBeginOfPeriodDate,
      @AnalyticsDetails.query.axis: #FREE
      REEndOfPeriodDate,
      @AnalyticsDetails.query.axis: #FREE
      PostingDate,
      @AnalyticsDetails.query.axis: #FREE
      DocumentDate,
      @AnalyticsDetails.query.axis: #FREE
      REContractCashFlowDate,
      @AnalyticsDetails.query.axis: #FREE
      ContractStartDate,
      @AnalyticsDetails.query.axis: #FREE
      ContractEndDate,
      @AnalyticsDetails.query.axis: #FREE
      ValidityStartDate,
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Key Figures
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      @AnalyticsDetails.query.axis: #COLUMNS
      FinTransFlowNomAmt,
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.display: #TEXT_KEY
      DisplayCurrency,
      @AnalyticsDetails.query.axis: #FREE
      NetAmountInDisplayCurrency,
      @AnalyticsDetails.query.axis: #FREE
      RECashFlowConditionCurrency


}
```
