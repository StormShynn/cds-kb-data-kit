---
name: I_EXPNSETTLMT
description: "Expense Settlement"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMT')/$value
semantic_en: "Expense Settlement"
semantic_vi: "Expense Settlement — CDS view giao diện dựa trên R_ExpnSettlmt."
keywords:
  - "Expense Settlement"
  - "expense"
  - "settlement"
  - "expn"
  - "settlmt"
  - "type"
  - "process"
  - "logistics"
  - "data"
  - "entry"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_EXPNSETTLMT

**Expense Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` | ✓ | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SettlmtMgmtAcctgTransfSts` |  | |  | `ExpnSettlmtAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `CustomerPricingProcedure` |  | |  | `PricingProcedure` | `CHAR(6)` | Pricing Procedure |
| `CustomerPricingDocument` |  | |  | `PricingDocument` | `CHAR(10)` | Number of the Document Condition |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `CustSettlmtCompanyCode` |  | |  | `CompanyCode` | `CHAR(4)` | Company Code |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `ExpnSettlmtCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `CustomerTotalGrossAmount` |  | |  | `ExpnSettlmtTotalGrossAmount` | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `CustomerTotalNetAmount` |  | |  | `ExpnSettlmtTotalNetAmount` | `CURR(15)` | Net Settlement Amount in Document Currency |
| `CustomerTotalTaxAmount` |  | |  | `ExpnSettlmtTotalTaxAmount` | `CURR(13)` | Total Tax Amount in Document Currency |
| `CustomerPaymentTerms` |  | |  | `PaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `CustomerCashDiscount1Days` |  | |  | `CashDiscount1Days` | `DEC(3)` | Cash Discount Days 1 |
| `CustomerCashDiscount2Days` |  | |  | `CashDiscount2Days` | `DEC(3)` | Cash Discount Days 2 |
| `CustomerNetPaymentDays` |  | |  | `NetPaymentDays` | `DEC(3)` | Net Payment Terms Period |
| `CustomerCashDiscount1Percent` |  | |  | `CashDiscount1Percent` | `DEC(5)` | Cash Discount Percentage 1 |
| `CustomerCashDiscount2Percent` |  | |  | `CashDiscount2Percent` | `DEC(5)` | Cash Discount Percentage 2 |
| `CustomerPaymentMethod` |  | |  | `PaymentMethod` | `CHAR(1)` | Payment Method |
| `CustTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `ExpnSettlmtIsCanceled` |  | |  | `ExpenseSettlementIsReversed` | `CHAR(1)` | Expense Settlement Is Reversed |
| `CancldExpnSettlmt` |  | |  | `ReversedExpenseSettlement` | `CHAR(10)` | Reversed Document |
| `CustomerAdditionalValueDays` |  | |  | `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `CustomerFixedValueDate` |  | |  | `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `CustSettlmtCoCodeTaxCountry` |  | |  | `SettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `CustomerVATRegistration` |  | |  | `VATRegistration` | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` |  | |  | `ExpnSettlmtActivityReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `CustomerPaymentCurrency` |  | |  | `ExpnSettlmtPaymentCurrency` | `CUKY(5)` | Payment Currency |
| `CustomerPaytCurrencyExchRate` |  | |  | `ExpnSettlmtPaytCrcyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeCustomerAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Customer |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `ExpnSettlmtIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `IntrastatDeclnGdsFlwCat` |  | |  |  | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `DocIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `SettlmtBusProcVar` |  | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtBusProcCat` |  | |  |  | `CHAR(2)` | Use Case Type |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `SettlmtReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract in Settlement Management |
| `TrdgExpnSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document of planned Trading Expenses |
| `SettlmtDocSmmrznCat` |  | |  |  | `CHAR(1)` | Document Summarization Category |
| `TrdgExpnDocSettled` |  | |  |  | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `TrdgExpnCurrency` |  | |  |  | `CUKY(5)` | Ref. Field for Trading Expenses Ref. Value (Crcy, %, Unit) |
| `TrdgExpnAmount` |  | |  |  | `CURR(11)` | Reference Value for Trading Expenses |
| `TrdgExpnCustomer` |  | |  |  | `CHAR(10)` | Trading Expense Customer |
| `_Item` | | ✓ | | | | |
| `_ExpnSettlmtPlainLongText` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |
| `_SettlmtProcessType` | | ✓ | | | | |
| `_SettlmtMgmtAcctgTransfSts` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_BankData` | | ✓ | | | | |
| `_CustomerPricingElement` | | ✓ | | | | |
| `_CustSettlmtCompanyCode` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_PayerPartyCompany` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_CustSettlmtCoCodeTaxCountry` | | ✓ | | | | |
| `_CancldExpnSettlmt` | | ✓ | | | | |
| `_SettlmtDocActivityReason` | | ✓ | | | | |
| `_CustomerPaymentCurrency` | | ✓ | | | | |
| `_OneTimeCustomerAddress` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
| `_TrdgExpnSettlmtDoc` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_LogisticsDataEntryCat` | | ✓ | | | | |
| `_SettlmtCat` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesArea` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ExpnSettlmtCurrency` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_TaxDestinationCountry` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_ExpnSettlmtIncmpltnsRsn` | | ✓ | | | | |
| `_DocIntrastatRelevance` | | ✓ | | | | |
| `_IntrastatDeclnGdsFlwCat` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |
| `_SettlmtDocSmmrznCat` | | ✓ | | | | |
| `_TrdgExpnDocSettled` | | ✓ | | | | |
| `_TrdgExpnCurrency` | | ✓ | | | | |
| `_TrdgExpnCustomer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_ExpnSettlmtItem` | [0..*] |
| `_ExpnSettlmtPlainLongText` | `I_ExpnSettlmtPlainLongText` | [0..*] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtMgmtAcctgTransfSts` | `I_SettlmtMgmtAcctgTransfSts` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_Partner` | `I_ExpnSettlmtPartner` | [0..*] |
| `_BankData` | `I_ExpnSettlmtBankData` | [0..*] |
| `_CustomerPricingElement` | `I_ExpnSettlmtPrcgElmnt` | [0..*] |
| `_CustSettlmtCompanyCode` | `I_CompanyCode` | [0..1] |
| `_BillToPartyCompany` | `I_CustomerCompany` | [0..1] |
| `_PayerPartyCompany` | `I_CustomerCompany` | [0..1] |
| `_CustomerPaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_CustSettlmtCoCodeTaxCountry` | `I_Country` | [0..1] |
| `_CancldExpnSettlmt` | `I_ExpnSettlmt` | [0..1] |
| `_SettlmtDocActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_CustomerPaymentCurrency` | `I_Currency` | [0..1] |
| `_OneTimeCustomerAddress` | `I_Address` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_TrdgExpnSettlmtDoc` | `I_ExpnSettlmt` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMT')/$value)*

```abap
@ObjectModel: {
   representativeKey: 'ExpnSettlmt',
   modelingPattern: #ANALYTICAL_DIMENSION,
   compositionRoot: true,
   supportedCapabilities : [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL,
      sizeCategory: #XXL
   }
}
@EndUserText.label: 'Expense Settlement'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@Analytics.technicalName: 'IWLFEXPNSMT'
@Analytics.internalName: #LOCAL
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@AccessControl: {
   authorizationCheck: #MANDATORY,
   privilegedAssociations:  [ '_BankData', '_OneTimeCustomerAddress', '_CreatedByUser' ],
   personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ExpnSettlmt
  as select from R_ExpnSettlmt

  association [0..*] to I_ExpnSettlmtItem            as _Item                        on  $projection.ExpnSettlmt = _Item.ExpnSettlmt
  association [0..*] to I_ExpnSettlmtPlainLongText   as _ExpnSettlmtPlainLongText    on  $projection.ExpnSettlmt = _ExpnSettlmtPlainLongText.ExpnSettlmt

  association [0..1] to I_SettlmtDocType             as _SettlmtDocType              on  $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  association [0..1] to I_SettlmtProcessType         as _SettlmtProcessType          on  $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType
  association [0..1] to I_SettlmtMgmtAcctgTransfSts  as _SettlmtMgmtAcctgTransfSts   on  $projection.SettlmtMgmtAcctgTransfSts = _SettlmtMgmtAcctgTransfSts.SettlmtMgmtAcctgTransfSts
  association [0..1] to I_SettlmtApplSts             as _SettlmtApplSts              on  $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts
  association [0..1] to I_SettlmtApplStsGrp          as _SettlmtApplStsGrp           on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt as _SettlmtApplStsGrpStsAssgmt  on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                     and $projection.SettlmtApplSts    = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts

  association [0..*] to I_ExpnSettlmtPartner         as _Partner                     on  $projection.ExpnSettlmt = _Partner.ExpnSettlmt
  association [0..*] to I_ExpnSettlmtBankData        as _BankData                    on  $projection.ExpnSettlmt = _BankData.ExpnSettlmt

  association [0..*] to I_ExpnSettlmtPrcgElmnt       as _CustomerPricingElement      on  $projection.ExpnSettlmt = _CustomerPricingElement.ExpnSettlmt

  association [0..1] to I_CompanyCode                as _CustSettlmtCompanyCode      on  $projection.CustSettlmtCompanyCode = _CustSettlmtCompanyCode.CompanyCode
  association [0..1] to I_CustomerCompany            as _BillToPartyCompany          on  $projection.BillToParty            = _BillToPartyCompany.Customer
                                                                                     and $projection.CustSettlmtCompanyCode = _BillToPartyCompany.CompanyCode
  association [0..1] to I_CustomerCompany            as _PayerPartyCompany           on  $projection.PayerParty             = _PayerPartyCompany.Customer
                                                                                     and $projection.CustSettlmtCompanyCode = _PayerPartyCompany.CompanyCode

  association [0..1] to I_PaymentTerms               as _CustomerPaymentTerms        on  $projection.CustomerPaymentTerms = _CustomerPaymentTerms.PaymentTerms
  association [0..1] to I_Country                    as _CustSettlmtCoCodeTaxCountry on  $projection.CustSettlmtCoCodeTaxCountry = _CustSettlmtCoCodeTaxCountry.Country

  association [0..1] to I_ExpnSettlmt                as _CancldExpnSettlmt           on  $projection.CancldExpnSettlmt = _CancldExpnSettlmt.ExpnSettlmt
  association [0..1] to I_SettlmtActivityReasonCode  as _SettlmtDocActivityReason    on  $projection.SettlmtDocActivityReason = _SettlmtDocActivityReason.SettlmtActivityReason
  association [0..1] to I_Currency                   as _CustomerPaymentCurrency     on  $projection.CustomerPaymentCurrency = _CustomerPaymentCurrency.Currency
  association [0..1] to I_Address                    as _OneTimeCustomerAddress      on  $projection.OneTimeCustomerAddressID = _OneTimeCustomerAddress.AddressID
  association [0..1] to I_SettlmtBusProcVar          as _SettlmtBusProcVar           on  $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar
  association [0..1] to I_ExpnSettlmt                as _TrdgExpnSettlmtDoc          on  $projection.TrdgExpnSettlmtDoc = _TrdgExpnSettlmtDoc.ExpnSettlmt

  //Extension Association
  association [1..1] to E_SettlmtMgmtDoc             as _Extension                   on  $projection.ExpnSettlmt = _Extension.SettlmtMgmtDoc

{
  key ExpnSettlmt,
      @ObjectModel.foreignKey.association: '_SettlmtDocType'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocTypeStdVH', element: 'SettlmtDocType' } }]
      }
      SettlmtDocType,
      @ObjectModel.foreignKey.association: '_SettlmtDocCat'
      SettlmtDocCat,
      @ObjectModel.foreignKey.association: '_SettlmtProcessType'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtProcessTypeStdVH', element: 'SettlmtProcessType' } }]
      }
      SettlmtProcessType,
      @ObjectModel.foreignKey.association: '_LogisticsDataEntryCat'
      LogisticsDataEntryCat,
      @ObjectModel.foreignKey.association: '_SettlmtCat'
      SettlmtCat,
      PostingDate,
      @ObjectModel.foreignKey.association: '_SettlmtMgmtAcctgTransfSts'
      ExpnSettlmtAcctgTransfSts   as SettlmtMgmtAcctgTransfSts,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      @ObjectModel.foreignKey.association: '_SettlmtApplSts'
      SettlmtApplSts,
      @ObjectModel.foreignKey.association: '_SettlmtApplStsGrp'
      SettlmtApplStsGrp,

      /* Pricing */
      PricingProcedure            as CustomerPricingProcedure,
      PricingDocument             as CustomerPricingDocument,

      /* Partners */
      @ObjectModel.foreignKey.association: '_BillToParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      PayerParty,

      /* Organizational Data */
      @ObjectModel.foreignKey.association: '_CustSettlmtCompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode                 as CustSettlmtCompanyCode,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      /* Administrative Data */
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      /* Currency and Exchange Rate */
      @ObjectModel.foreignKey.association: '_ExpnSettlmtCurrency'
      ExpnSettlmtCurrency,
      ExchangeRate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtTotalGrossAmount as CustomerTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtTotalNetAmount   as CustomerTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtTotalTaxAmount   as CustomerTotalTaxAmount,

      /* Payment terms and method */
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      PaymentTerms                as CustomerPaymentTerms,
      CashDiscount1Days           as CustomerCashDiscount1Days,
      CashDiscount2Days           as CustomerCashDiscount2Days,
      NetPaymentDays              as CustomerNetPaymentDays,
      CashDiscount1Percent        as CustomerCashDiscount1Percent,
      CashDiscount2Percent        as CustomerCashDiscount2Percent,
      PaymentMethod               as CustomerPaymentMethod,

      /* Cash Discount */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      CustTotEligibleAmtForCshDisc,

      /* Reversal Information */
      ExpenseSettlementIsReversed as ExpnSettlmtIsCanceled,
      @ObjectModel.foreignKey.association: '_CancldExpnSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ExpnSettlmtStdVH', element: 'ExpnSettlmt' } }]
      }
      ReversedExpenseSettlement   as CancldExpnSettlmt,

      AdditionalValueDays         as CustomerAdditionalValueDays,
      FixedValueDate              as CustomerFixedValueDate,

      /* Tax */
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @ObjectModel.foreignKey.association: '_TaxDestinationCountry'
      TaxDestinationCountry,
      IsEUTriangularDeal,
      @ObjectModel.foreignKey.association: '_CustSettlmtCoCodeTaxCountry'
      SettlmtCoCodeTaxCountry     as CustSettlmtCoCodeTaxCountry,

      /* VAT Registration */
      VATRegistration             as CustomerVATRegistration,

      /* Payment */
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } }]
      }
      CreditControlArea,
      @ObjectModel.foreignKey.association: '_SettlmtDocActivityReason'
      ExpnSettlmtActivityReason   as SettlmtDocActivityReason,
      PaymentReference,
      @ObjectModel.foreignKey.association: '_CustomerPaymentCurrency'
      ExpnSettlmtPaymentCurrency  as CustomerPaymentCurrency,
      ExpnSettlmtPaytCrcyExchRate as CustomerPaytCurrencyExchRate,

      /* One-time Partners */
      @ObjectModel.foreignKey.association: '_OneTimeCustomerAddress'
      OneTimeCustomerAddressID,

      FiscalPeriod,

      SettlmtDate,
      @ObjectModel.foreignKey.association: '_ExpnSettlmtIncmpltnsRsn'
      ExpnSettlmtIncmpltnsRsn,

      /* Intrastat */
      @ObjectModel.foreignKey.association: '_IntrastatDeclnGdsFlwCat'
      IntrastatDeclnGdsFlwCat,
      @ObjectModel.foreignKey.association: '_DocIntrastatRelevance'
      DocIntrastatRelevance,


      /* Incoterms */
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,

      @ObjectModel.foreignKey.association: '_SettlmtBusProcVar'
      SettlmtBusProcVar,
      @ObjectModel.foreignKey.association: '_SettlmtBusProcCat'
      SettlmtBusProcCat,
      SEPAMandate,

      /* Trading Contract */
      SettlmtReltdTrdgContr,

      @ObjectModel.foreignKey.association: '_TrdgExpnSettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ExpnSettlmtStdVH', element: 'ExpnSettlmt' } }]
      }
      TrdgExpnSettlmtDoc,
      @ObjectModel.foreignKey.association: '_SettlmtDocSmmrznCat'
      SettlmtDocSmmrznCat,

      @ObjectModel.foreignKey.association: '_TrdgExpnDocSettled'
      TrdgExpnDocSettled,
      @ObjectModel.foreignKey.association: '_TrdgExpnCurrency'
      TrdgExpnCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TrdgExpnCurrency'
      TrdgExpnAmount,
      @ObjectModel.foreignKey.association: '_TrdgExpnCustomer'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      TrdgExpnCustomer,


      /* Aassociations */
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      _ExpnSettlmtPlainLongText,
      _Partner,
      _BankData,
      _CustomerPricingElement,
      _SettlmtDocType,
      _SettlmtDocCat,
      _SettlmtProcessType,
      _LogisticsDataEntryCat,
      _SettlmtCat,
      _SettlmtMgmtAcctgTransfSts,
      _SettlmtApplSts,
      _SettlmtApplStsGrp,
      _SettlmtApplStsGrpStsAssgmt,
      _BillToParty,
      _PayerParty,
      _BillToPartyCompany,
      _PayerPartyCompany,
      _CustSettlmtCompanyCode,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,
      _SalesArea,
      _CreatedByUser,
      _ExpnSettlmtCurrency,
      _ExchangeRateType,
      _CustomerPaymentTerms,
      _CancldExpnSettlmt,
      _TaxDepartureCountry,
      _TaxDestinationCountry,
      _CustSettlmtCoCodeTaxCountry,
      _CreditControlArea,
      _SettlmtDocActivityReason,
      _CustomerPaymentCurrency,
      _OneTimeCustomerAddress,
      _ExpnSettlmtIncmpltnsRsn,
      _DocIntrastatRelevance,
      _IntrastatDeclnGdsFlwCat,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtBusProcVar,
      _SettlmtBusProcCat,
      _TrdgExpnSettlmtDoc,
      _SettlmtDocSmmrznCat,
      _TrdgExpnDocSettled,
      _TrdgExpnCurrency,
      _TrdgExpnCustomer

}
```
