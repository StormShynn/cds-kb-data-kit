---
name: I_FINTRANSHISTLFCSTFEECUBE
description: "This CDS view provides the data to answer the following business questions What is the amount of paid financial transaction fees in transaction currency on specific dates in the reporting period? What is the amount of financial transaction fees in transaction currency on specific dates in the forecast period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSHISTLFCSTFEECUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions What is the amount of paid financial transaction fees in transaction currency on specific dates in the reporting period? What is the amount of financial transaction fees in transaction currency on specific dates in the forecast period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Fin Trans Histl Fcst Fee - Cube — CDS view giao diện dựa trên P_FinTransHistlFcstFeeFlow."
keywords:
  - "fin"
  - "trans"
  - "histl"
  - "fcst"
  - "fee"
  - "cube"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "data"
  - "source"
  - "flow"
  - "type"
  - "creation"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FINTRANSHISTLFCSTFEECUBE

**This CDS view provides the data to answer the following business questions What is the amount of paid financial transaction fees in transaction currency on specific dates in the reporting period? What is the amount of financial transaction fees in transaction currency on specific dates in the forecast period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSHISTLFCSTFEECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinTransFeeDataSource` | ✓ | |  |  | `CHAR(10)` | Data source for FinTrans Fee |
| `FinTransFlowType` | ✓ | |  |  | `CHAR(4)` | Flow Type |
| `FinTransFlowCreationTime` |  | |  |  | `TIMS(6)` | Flow Entry Time |
| `FinancialInstrumentActivity` |  | |  |  | `NUMC(5)` | Transaction Activity |
| `FinTransFlowCreationDate` |  | |  |  | `DATS(8)` | Entered On |
| `FinTransFlowNumber` |  | |  |  | `NUMC(4)` | Transaction Flow |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinTransFlowPostingStatus` |  | |  |  | `CHAR(1)` | Flow Fixing Status |
| `FinTransFlowFixingStatus` |  | |  |  | `CHAR(1)` | Flow Fixing Status |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FinTransFlowPaytAmt` |  | |  |  | `CURR(13)` | Flow Payment Amount |
| `FinTransFlowPaytAmtCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Security Account |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `_FinancialTransaction` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Activity` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_BankGroup` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_FinancialInstrProdType` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialTransaction` | `I_FinancialTransaction` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Activity` | `I_FinTransActivity` | [0..1] |
| `_Counterparty` | `I_Ftr_Counterparty` | [1..1] |
| `_BankGroup` | `I_BankGroup` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_FinancialInstrProdType` | `I_FinancialinstrProductType` | [1..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [1..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSHISTLFCSTFEECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSHISTLFCSTFEECUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IHISTFCSTFEECUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Histl Fcst Fee - Cube'
define view I_FinTransHistlFcstFeeCube
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_HistlStartDate : ftr_histl_startdate,
    @Environment.systemField: #SYSTEM_DATE
    P_HistlEndDate   : ftr_histl_enddate,
    @Environment.systemField: #SYSTEM_DATE
    P_FcstStartDate : ftr_fcst_startdate,
    @Environment.systemField: #SYSTEM_DATE
    P_FcstEndDate   : ftr_fcst_enddate
  as select from P_FinTransHistlFcstFeeFlow(P_HistlStartDate : $parameters.P_HistlStartDate,
                                            P_HistlEndDate   : $parameters.P_HistlEndDate,
                                            P_FcstStartDate  : $parameters.P_FcstStartDate,
                                            P_FcstEndDate    : $parameters.P_FcstEndDate) as FeeFlow

  association [1..1] to I_FinancialTransaction      as _FinancialTransaction    on  $projection.FinancialTransaction = _FinancialTransaction.FinancialTransaction
                                                                                and $projection.CompanyCode          = _FinancialTransaction.CompanyCode
  association [1..1] to I_CompanyCode               as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinTransActivity          as _Activity                on  $projection.CompanyCode                 = _Activity.CompanyCode
                                                                                and $projection.FinancialTransaction        = _Activity.FinancialTransaction
                                                                                and $projection.FinancialInstrumentActivity = _Activity.FinancialInstrumentActivity
  association [1..1] to I_Ftr_Counterparty          as _Counterparty            on  $projection.Counterparty = _Counterparty.BusinessPartner
  association [1..1] to I_BankGroup                 as _BankGroup               on  $projection.BankGroup = _BankGroup.BusinessPartner
  association [1..1] to I_Currency                  as _TransactionCurrency     on  $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [1..1] to I_FinancialinstrProductType as _FinancialInstrProdType  on  $projection.FinancialInstrumentProductType = _FinancialInstrProdType.FinancialInstrumentProductType

  association [1..1] to I_TreasuryPortfolio         as _Portfolio               on  $projection.CompanyCode = _Portfolio.CompanyCode
                                                                                and $projection.Portfolio   = _Portfolio.Portfolio
  association [1..1] to I_SecurityAccount           as _SecurityAccount         on  $projection.SecurityAccount = _SecurityAccount.SecurityAccount
                                                                                and $projection.CompanyCode     = _SecurityAccount.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key FeeFlow.CompanyCode,
      @ObjectModel.foreignKey.association: '_FinancialTransaction'
  key FeeFlow.FinancialTransaction,
  key FeeFlow.FinTransFeeDataSource,
  key FeeFlow.FinTransFlowType,  
      FeeFlow.FinTransFlowCreationTime,  
      @ObjectModel.foreignKey.association: '_Activity'
      FeeFlow.FinancialInstrumentActivity,
      FeeFlow.FinTransFlowCreationDate,
      FeeFlow.FinTransFlowNumber,
      FeeFlow.FinTransFlowPaymentDate,
      FeeFlow.TreasuryContractType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FinTransFlowFixingStatus'
      FeeFlow.FinTransFlowPostingStatus,
      FeeFlow.FinTransFlowFixingStatus,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      FeeFlow.TransactionCurrency,
      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      @DefaultAggregation: #SUM
      FeeFlow.FinTransFlowPaytAmt,
      @Semantics.currencyCode: true
      FeeFlow.FinTransFlowPaytAmtCrcy,
      @ObjectModel.foreignKey.association: '_BankGroup'
      FeeFlow.BankGroup,
      @ObjectModel.foreignKey.association: '_Counterparty'
      FeeFlow.Counterparty,
      @ObjectModel.foreignKey.association: '_FinancialInstrProdType'
      FeeFlow.FinancialInstrumentProductType,
      @ObjectModel.foreignKey.association: '_Portfolio'
      FeeFlow.Portfolio,
      @ObjectModel.foreignKey.association: '_SecurityAccount'
      FeeFlow.SecurityAccount,
      FeeFlow.FinancialInstrTransactionType,
      FeeFlow.YearMonth,
      FeeFlow.YearQuarter,
      FeeFlow.CalendarYear,
         
      _FinancialTransaction,
      _CompanyCode,
      _Activity,
      _Counterparty,
      _BankGroup,
      _TransactionCurrency,
      _Portfolio,
      _SecurityAccount,
      _FinancialInstrProdType
}
```
