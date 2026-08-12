---
name: I_RECASHFLOWC
description: "Real Estate Cash Flow - Cube"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECASHFLOWC')/$value
semantic_en: "Real Estate Cash Flow - Cube"
semantic_vi: "Real Estate Cash Flow - Cube — CDS view giao diện dựa trên I_RECashFlow."
keywords:
  - "real"
  - "estate"
  - "cash"
  - "flow"
  - "cube"
  - "record"
  - "condition"
  - "internal"
  - "number"
  - "status"
  - "object"
  - "type"
tags:
  - RE
  - component:RE-FX-CN-2CL
  - interface-view
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# I_RECASHFLOWC

**Real Estate Cash Flow - Cube**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECASHFLOWC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RECashFlowRecordUUID` | ✓ | |  |  | `RAW(16)` | Real Estate Cashflow Object Number |
| `REConditionUUID` |  | |  |  | `RAW(16)` | GUID (RAW16) for Conditions |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REStatusObject` |  | |  | `cast (REStatusObject as reobjnr )` | `CHAR(22)` | Real estate object: Object no. |
| `RealEstateObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `REPartnerStatusObject` |  | |  | `cast (REPartnerStatusObject as rerapartnerobjnr)` | `CHAR(22)` | Partner Object |
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
| `REContractUserSupplier` |  | | `_REContract._REContractType` | `REContractUserSupplier` | `NUMC(1)` | Offerer (Customer), User (Vendor) |
| `REContractType` |  | | `_REContract` | `REContractType` | `CHAR(4)` | Contract Type |
| `REContractName` |  | | `_REContract` | `REContractName` | `CHAR(80)` | Contract Name |
| `REContractActivateDate` |  | | `_REContract` | `REContractActivateDate` | `DATS(8)` | Active From |
| `REContractNumberOld` |  | | `_REContract` | `REContractNumberOld` | `CHAR(20)` | Number of Old Contract |
| `REContractCurrency` |  | | `_REContract` | `REContractCurrency` | `CUKY(5)` | Currency for Contract |
| `REIndustrySector` |  | | `_REContract` | `REIndustrySector` | `CHAR(10)` | Industry |
| `REIsSalesRelevant` |  | | `_REContract` | `REIsSalesRelevant` | `CHAR(1)` | Indicator: Relevant to Sales |
| `REContractNoticeReason` |  | | `_REContract` | `REContractNoticeReason` | `NUMC(2)` | Reason for Notice |
| `REBusinessEntity` |  | | `_REContract` | `REBusinessEntity` | `CHAR(8)` | RE Business Entity |
| `REIdentificationKey` |  | | `_REContract` | `REIdentificationKey` | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `REAuthorizationGroup` |  | | `_REContract` | `REAuthorizationGroup` | `CHAR(40)` | Authorization Group |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | | `_FiscalCalendarDate` | `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalYear` |  | | `_FiscalCalendarDate` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalQuarter` |  | | `_FiscalCalendarDate` | `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalPeriod` |  | | `_FiscalCalendarDate` | `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
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
| `RECashFlowLoclNetAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowLoclGrossAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowLoclTaxAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowLoclCurrency` |  | |  |  | `CUKY(5)` | Local Currency of Cash Flow Item |
| `RECashFlowConditionNetAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowConditionGrossAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowConditionTaxAmount` |  | |  |  | `CURR(20)` |  |
| `RECashFlowConditionCurrency` |  | |  |  | `CUKY(5)` | Condition Currency of Cash Flow Item |
| `FinTransFlowNomAmt` |  | |  | `cast (FinTransFlowNomAmt as recfvdmnetamt )` | `CURR(23)` | Net Cash Flow in Condition Currency |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `NetAmountInDisplayCurrency` |  | |  | `cast (currency_conversion( amount => FinTransFlowNomAmt, source_currency => RECashFlowConditionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => CalculationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'SET_TO_NULL', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as recfvdmntatdc )` | `CURR(23)` | Net Cash Flow in Display Currency |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_REObjectType` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_REContractCurrency` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_RECashFlowOrigin` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_REBookedFlowType` | | ✓ | | | | |
| `_REFlowType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_RECashFlowPostingStatus` | | ✓ | | | | |
| `_REContract` | | ✓ | | | | |
| `_REContractCompanyCode` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalCalendarDate` | `I_FiscalCalendarDate` | [1..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_REObjectType` | `I_REObjectType` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_REContractCurrency` | `I_Currency` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_InternalOrder` | `I_Order` | [0..1] |
| `_RECashFlowOrigin` | `I_RECashFlowOrigin` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECASHFLOWC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECASHFLOWC')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {dataCategory: #CUBE}
@Analytics.internalName:#LOCAL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL

@AbapCatalog.sqlViewName: 'IRECSHFLWC'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Real Estate Cash Flow - Cube'
@AbapCatalog.preserveKey: true

@AbapCatalog.dbHints: [ {dbSystem: #HDB, hint: 'NO_JOIN_THRU_AGGR'} ]
@AbapCatalog.buffering.status: #NOT_ALLOWED
@VDM.viewType: #COMPOSITE
@ObjectModel.modelingPattern:           #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_PROVIDER, 
                                        #SQL_DATA_SOURCE, 
                                        #CDS_MODELING_DATA_SOURCE ]

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true


define view I_RECashFlowC
  with parameters
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_RECashFlowOrigin', element: 'RECashFlowOrigin' } } ]
    P_RECashFlowOrigin : reiscforigin,
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_ValidFrom :vdm_validitystart,  //recncnbeg,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_ValidTo   :vdm_validityend  //recncnendabs
  as select from I_RECashFlow as _RECashFlow
  association [1..1] to I_FiscalCalendarDate as _FiscalCalendarDate on  _FiscalCalendarDate.FiscalYearVariant = $projection.FiscalYearVariant
                                                                    and _FiscalCalendarDate.CalendarDate      = $projection.PaymentDueDate
  association [0..*] to I_CostCenter         as _CostCenter         on  _CostCenter.CostCenter      = $projection.CostCenter
                                                                    and _CostCenter.ControllingArea = $projection.ControllingArea
  association [1..1] to I_REObjectType       as _REObjectType       on  _REObjectType.RealEstateObjectType = $projection.RealEstateObjectType
  association [0..1] to I_Currency           as _Currency           on  _Currency.Currency = $projection.DisplayCurrency
  association [0..1] to I_Currency           as _REContractCurrency         on  _REContractCurrency.Currency = $projection.REContractCurrency
  -- and _CostCenter.ValidityStartDate <= $projection.PostingDate
  -- and _CostCenter.ValidityEndDate   = $projection.PostingDate
  association [0..1] to I_ControllingArea    as _ControllingArea    on  _ControllingArea.ControllingArea = $projection.ControllingArea
  association [0..1] to I_Order              as _InternalOrder      on  _InternalOrder.OrderID = $projection.InternalOrder
  association [0..1] to I_RECashFlowOrigin   as _RECashFlowOrigin   on  _RECashFlowOrigin.RECashFlowOrigin = $projection.RECashFlowOrigin

{
       //////////////////////////////////////////////////////////////////
       //  Dimensions
       //////////////////////////////////////////////////////////////////
  key  RECashFlowRecordUUID,
       //@ObjectModel.foreignKey.association: '_RECondition'
       REConditionUUID,
       //@ObjectModel.foreignKey.association: '_REContract'
       InternalRealEstateNumber,
       cast (REStatusObject as reobjnr )                  as REStatusObject,
       @ObjectModel.foreignKey.association: '_REObjectType'
       RealEstateObjectType,
       @ObjectModel.foreignKey.association: '_CompanyCode'
       CompanyCode,
       RealEstateContract,
       @ObjectModel.foreignKey.association: '_BusinessPartner'
       BusinessPartner,
       cast (REPartnerStatusObject as rerapartnerobjnr)   as REPartnerStatusObject,
       @ObjectModel.foreignKey.association: '_ControllingArea'
       ControllingArea,
       @ObjectModel.foreignKey.association: '_CostCenter'
       CostCenter,
       @ObjectModel.foreignKey.association: '_InternalOrder'
       InternalOrder,
       @ObjectModel.foreignKey.association: '_REBookedFlowType'
       REBookedFlowType,
       @ObjectModel.foreignKey.association: '_REFlowType'
       REFlowType,
       @ObjectModel.foreignKey.association: '_DebitCreditCode'
       DebitCreditCode,
       @ObjectModel.foreignKey.association: '_RECashFlowPostingStatus'
       CashFlowPostingStatus,
       @ObjectModel.foreignKey.association: '_RECashFlowOrigin'
       @Consumption.valueHelpDefinition: [ { entity: { name: 'I_RECashFlowOrigin', element: 'RECashFlowOrigin' } } ]
       RECashFlowOrigin,
       REContractIsActive,
       @ObjectModel.foreignKey.association: '_REContractCompanyCode'
       REContractCompanyCode,
       REDocumentReferenceUUID,
       _REContract._REContractType.REContractUserSupplier,
       //////////////////////////////////////////////////////////////////
       //  Contract Dimension
       //////////////////////////////////////////////////////////////////
       @ObjectModel.foreignKey.association: '_REContractType'
       _REContract.REContractType,
       _REContract.REContractName,
       _REContract.REContractActivateDate,
       _REContract.REContractNumberOld,
       @ObjectModel.foreignKey.association: '_REContractCurrency'
       _REContract.REContractCurrency as REContractCurrency,
       _REContract.REIndustrySector,
       _REContract.REIsSalesRelevant,
       _REContract.REContractNoticeReason,
       _REContract.REBusinessEntity,
       _REContract.REIdentificationKey,
       _REContract.REAuthorizationGroup,
       //////////////////////////////////////////////////////////////////
       //  Time Dimensions
       //////////////////////////////////////////////////////////////////
       @Semantics.fiscal.yearVariant: true
       FiscalYearVariant,
       @Semantics.fiscal.yearPeriod: true
       _FiscalCalendarDate.FiscalYearPeriod               as FiscalYearPeriod,
       @Semantics.fiscal.year: true
       _FiscalCalendarDate.FiscalYear                     as FiscalYear,
       @Semantics.fiscal.quarter: true
       _FiscalCalendarDate.FiscalQuarter                  as FiscalQuarter,
       @Semantics.fiscal.period: true
       _FiscalCalendarDate.FiscalPeriod                   as FiscalPeriod,
       CalculationPeriodStartDate,
       CalculationPeriodEndDate,
       CalculationDate,
       PaymentDueDate,
       REBeginOfPeriodDate,
       REEndOfPeriodDate,
       PostingDate,
       DocumentDate,
       REContractCashFlowDate,
      ContractStartDate,
       ContractEndDate,
       ValidityStartDate,
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       // Key Figures
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency'
       RECashFlowLoclNetAmount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency'
       RECashFlowLoclGrossAmount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency'
       RECashFlowLoclTaxAmount,
       RECashFlowLoclCurrency,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'RECashFlowConditionCurrency'
       RECashFlowConditionNetAmount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'RECashFlowConditionCurrency'
       RECashFlowConditionGrossAmount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'RECashFlowConditionCurrency'
       RECashFlowConditionTaxAmount,
       RECashFlowConditionCurrency,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'RECashFlowConditionCurrency'
       cast (FinTransFlowNomAmt    as recfvdmnetamt )     as FinTransFlowNomAmt,


       @Semantics.currencyCode: true
       @ObjectModel.foreignKey.association: '_Currency'
       cast(:P_DisplayCurrency as vdm_v_display_currency) as DisplayCurrency,

       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'DisplayCurrency'
       cast (currency_conversion(
         amount => FinTransFlowNomAmt,
         source_currency => RECashFlowConditionCurrency,
         target_currency => :P_DisplayCurrency,
         exchange_rate_date => CalculationDate,
         exchange_rate_type => :P_ExchangeRateType,
         error_handling => 'SET_TO_NULL',
         round => #CDSBoolean.true,
         decimal_shift => #CDSBoolean.true,
         decimal_shift_back => #CDSBoolean.true
       ) as recfvdmntatdc )                               as NetAmountInDisplayCurrency,




       _CompanyCode,
       _REBookedFlowType,
       _REFlowType,
       _DebitCreditCode,
       _RECashFlowPostingStatus,
       _REContract,
       _FiscalCalendarDate,
       _REContractCompanyCode,
       _BusinessPartner,
       _RECashFlowOrigin,
       _CostCenter,
       _InternalOrder,
       _ControllingArea,
       _Currency,
       _REContractCurrency,
       _REObjectType,
       _REContract._REContractType
}
where
  RECashFlowOrigin = $parameters.P_RECashFlowOrigin        
  and ContractEndDate   >= $parameters.P_ValidFrom
  and ContractStartDate <= $parameters.P_ValidTo;
```
