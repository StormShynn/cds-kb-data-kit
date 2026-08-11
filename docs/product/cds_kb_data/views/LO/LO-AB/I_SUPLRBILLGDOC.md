---
name: I_SUPLRBILLGDOC
description: "Supplier Billing Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOC')/$value
semantic_en: "Supplier Billing Document"
semantic_vi: "Supplier Billing Document — CDS view cơ bản dựa trên R_SuplrBillgDoc."
keywords:
  - "Supplier Billing Document"
  - "supplier"
  - "billing"
  - "document"
  - "suplr"
  - "billg"
  - "settlmt"
  - "type"
  - "process"
  - "logistics"
  - "data"
  - "entry"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRBILLGDOC

**Supplier Billing Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  |  | `CHAR(10)` | Supplier Billing Document Number |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SettlmtMgmtAcctgTransfSts` |  | |  | `SuplrBillgDocAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `SupplierPricingProcedure` |  | |  | `PricingProcedure` | `CHAR(6)` | Pricing Procedure |
| `SupplierPricingDocument` |  | |  | `PricingDocument` | `CHAR(10)` | Number of the Document Condition |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `SuplrSettlmtCompanyCode` |  | |  | `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `SuplrBillgDocCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `SupplierTotalGrossAmount` |  | |  | `SuplrBillgDocTotalGrossAmount` | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `SupplierTotalNetAmount` |  | |  | `SuplrBillgDocTotalNetAmount` | `CURR(15)` | Net Settlement Amount in Document Currency |
| `SupplierTotalTaxAmount` |  | |  | `SuplrBillgDocTotalTaxAmount` | `CURR(13)` | Total Tax Amount in Document Currency |
| `SupplierPaymentTerms` |  | |  | `PaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `SupplierCashDiscount1Days` |  | |  | `CashDiscount1Days` | `DEC(3)` | Cash Discount Days 1 |
| `SupplierCashDiscount2Days` |  | |  | `CashDiscount2Days` | `DEC(3)` | Cash Discount Days 2 |
| `SupplierNetPaymentDays` |  | |  | `NetPaymentDays` | `DEC(3)` | Net Payment Terms Period |
| `SupplierCashDiscount1Percent` |  | |  | `CashDiscount1Percent` | `DEC(5)` | Cash Discount Percentage 1 |
| `SupplierCashDiscount2Percent` |  | |  | `CashDiscount2Percent` | `DEC(5)` | Cash Discount Percentage 2 |
| `SupplierPaymentMethod` |  | |  | `PaymentMethod` | `CHAR(1)` | Payment Method |
| `SuplrTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `SuplrBillgDocIsCanceled` |  | |  | `SuplrBillgDocIsReversed` | `CHAR(1)` | Supplier Billing Document Is Reversed |
| `CancldSuplrBillgDoc` |  | |  | `RvsdSuplrBillgDoc` | `CHAR(10)` | Reversed Document |
| `SupplierAdditionalValueDays` |  | |  | `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `SupplierFixedValueDate` |  | |  | `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SuplrSettlmtCoCodeTaxCountry` |  | |  | `SettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `SupplierVATRegistration` |  | |  | `VATRegistration` | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` |  | |  | `SuplrBillgDocActivityReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `SupplierPaymentCurrency` |  | |  | `SuplrBillgDocPaymentCurrency` | `CUKY(5)` | Payment Currency |
| `SupplierPaytCurrencyExchRate` |  | |  | `SuplrBillgDocPaytCrcyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeSupplierAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Supplier |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `SettlmtReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `SettlmtReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract in Settlement Management |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `SuplrBillgDocIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `SettlmtDocSmmrznCat` |  | |  |  | `CHAR(1)` | Document Summarization Category |
| `TrdgExpnSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document of planned Trading Expenses |
| `SettlmtClassificationCat` |  | |  |  | `CHAR(1)` | Settlement Classification Category |
| `TrdgExpnDocSettled` |  | |  |  | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `TrdgExpnCurrency` |  | |  |  | `CUKY(5)` | Ref. Field for Trading Expenses Ref. Value (Crcy, %, Unit) |
| `TrdgExpnAmount` |  | |  |  | `CURR(11)` | Reference Value for Trading Expenses |
| `TrdgExpnSupplier` |  | |  |  | `CHAR(10)` | Trading Expense Supplier |
| `DocIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `IntrastatDeclnGdsFlwCat` |  | |  |  | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `SettlmtBusProcVar` |  | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtBusProcCat` |  | |  |  | `CHAR(2)` | Use Case Type |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `_Item` | | ✓ | | | | |
| `_SuplrBillgDocPlainLongText` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_BankData` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |
| `_SettlmtProcessType` | | ✓ | | | | |
| `_SettlmtMgmtAcctgTransfSts` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_SupplierPricingElement` | | ✓ | | | | |
| `_InvoicingPartyCompany` | | ✓ | | | | |
| `_PayeePartyCompany` | | ✓ | | | | |
| `_AltvInvoicingPartyCompany` | | ✓ | | | | |
| `_SuplrSettlmtCompanyCode` | | ✓ | | | | |
| `_SupplierPaymentTerms` | | ✓ | | | | |
| `_CancldSuplrBillgDoc` | | ✓ | | | | |
| `_SuplrSettlmtCoCodeTaxCountry` | | ✓ | | | | |
| `_SettlmtDocActivityReason` | | ✓ | | | | |
| `_SupplierPaymentCurrency` | | ✓ | | | | |
| `_OneTimeSupplierAddress` | | ✓ | | | | |
| `_CndnContrType` | | ✓ | | | | |
| `_SettlmtReltdCndnContr` | | ✓ | | | | |
| `_TrdgExpnSettlmtDoc` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_LogisticsDataEntryCat` | | ✓ | | | | |
| `_SettlmtCat` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_AlternativeInvoicingParty` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_SuplrBillgDocCurrency` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_SupplyingCountry` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_TaxDestinationCountry` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_SuplrBillgDocIncmpltnsRsn` | | ✓ | | | | |
| `_SettlmtDocSmmrznCat` | | ✓ | | | | |
| `_SettlmtClassificationCat` | | ✓ | | | | |
| `_TrdgExpnDocSettled` | | ✓ | | | | |
| `_TrdgExpnCurrency` | | ✓ | | | | |
| `_TrdgExpnSupplier` | | ✓ | | | | |
| `_DocIntrastatRelevance` | | ✓ | | | | |
| `_IntrastatDeclnGdsFlwCat` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_SuplrBillgDocItem` | [0..*] |
| `_SuplrBillgDocPlainLongText` | `I_SuplrBillgDocPlainLongText` | [0..*] |
| `_Partner` | `I_SuplrBillgDocPartner` | [0..*] |
| `_BankData` | `I_SuplrBillgDocBankData` | [0..*] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtMgmtAcctgTransfSts` | `I_SettlmtMgmtAcctgTransfSts` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_SupplierPricingElement` | `I_SuplrBillgDocPrcgElmnt` | [0..*] |
| `_InvoicingPartyCompany` | `I_SupplierCompany` | [0..1] |
| `_PayeePartyCompany` | `I_SupplierCompany` | [0..1] |
| `_AltvInvoicingPartyCompany` | `I_SupplierCompany` | [0..1] |
| `_SuplrSettlmtCompanyCode` | `I_CompanyCode` | [0..1] |
| `_SupplierPaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_CancldSuplrBillgDoc` | `I_SuplrBillgDoc` | [0..1] |
| `_SuplrSettlmtCoCodeTaxCountry` | `I_Country` | [0..1] |
| `_SettlmtDocActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_SupplierPaymentCurrency` | `I_Currency` | [0..1] |
| `_OneTimeSupplierAddress` | `I_Address` | [0..1] |
| `_CndnContrType` | `I_CndnContrType` | [0..1] |
| `_SettlmtReltdCndnContr` | `I_ConditionContract` | [0..1] |
| `_TrdgExpnSettlmtDoc` | `I_SuplrBillgDoc` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOC')/$value)*

```abap
@EndUserText.label: 'Supplier Billing Document'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_BankData', '_OneTimeSupplierAddress', '_CreatedByUser' ]
    }
@ObjectModel: {
    compositionRoot:          true,
    representativeKey:        'SuplrBillgDoc',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities :   [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION],
    usageType.serviceQuality: #B,
    usageType.dataClass:      #TRANSACTIONAL,
    usageType.sizeCategory:   #XXL
    }
@Analytics: {
   dataCategory: #DIMENSION,
   dataExtraction.enabled: false,
   internalName: #LOCAL
   }
@Analytics.technicalName: 'IWLFSUPLRBGD'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

define view entity I_SuplrBillgDoc
  as select from R_SuplrBillgDoc

  association [0..*] to I_SuplrBillgDocItem          as _Item                         on  $projection.SuplrBillgDoc = _Item.SuplrBillgDoc
  association [0..*] to I_SuplrBillgDocPlainLongText as _SuplrBillgDocPlainLongText   on  $projection.SuplrBillgDoc = _SuplrBillgDocPlainLongText.SuplrBillgDoc
  association [0..*] to I_SuplrBillgDocPartner       as _Partner                      on  $projection.SuplrBillgDoc = _Partner.SuplrBillgDoc
  association [0..*] to I_SuplrBillgDocBankData      as _BankData                     on  $projection.SuplrBillgDoc = _BankData.SuplrBillgDoc

  association [0..1] to I_SettlmtDocType             as _SettlmtDocType               on  $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  association [0..1] to I_SettlmtProcessType         as _SettlmtProcessType           on  $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType
  association [0..1] to I_SettlmtMgmtAcctgTransfSts  as _SettlmtMgmtAcctgTransfSts    on  $projection.SettlmtMgmtAcctgTransfSts = _SettlmtMgmtAcctgTransfSts.SettlmtMgmtAcctgTransfSts
  association [0..1] to I_SettlmtApplSts             as _SettlmtApplSts               on  $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts
  association [0..1] to I_SettlmtApplStsGrp          as _SettlmtApplStsGrp            on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt as _SettlmtApplStsGrpStsAssgmt   on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                      and $projection.SettlmtApplSts    = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts

  association [0..*] to I_SuplrBillgDocPrcgElmnt     as _SupplierPricingElement       on  $projection.SuplrBillgDoc = _SupplierPricingElement.SuplrBillgDoc

  association [0..1] to I_SupplierCompany            as _InvoicingPartyCompany        on  $projection.InvoicingParty          = _InvoicingPartyCompany.Supplier
                                                                                      and $projection.SuplrSettlmtCompanyCode = _InvoicingPartyCompany.CompanyCode
  association [0..1] to I_SupplierCompany            as _PayeePartyCompany            on  $projection.PayeeParty              = _PayeePartyCompany.Supplier
                                                                                      and $projection.SuplrSettlmtCompanyCode = _PayeePartyCompany.CompanyCode
  association [0..1] to I_SupplierCompany            as _AltvInvoicingPartyCompany    on  $projection.AlternativeInvoicingParty = _AltvInvoicingPartyCompany.Supplier
                                                                                      and $projection.SuplrSettlmtCompanyCode   = _AltvInvoicingPartyCompany.CompanyCode
  association [0..1] to I_CompanyCode                as _SuplrSettlmtCompanyCode      on  $projection.SuplrSettlmtCompanyCode = _SuplrSettlmtCompanyCode.CompanyCode

  association [0..1] to I_PaymentTerms               as _SupplierPaymentTerms         on  $projection.SupplierPaymentTerms = _SupplierPaymentTerms.PaymentTerms
  association [0..1] to I_SuplrBillgDoc              as _CancldSuplrBillgDoc          on  $projection.CancldSuplrBillgDoc = _CancldSuplrBillgDoc.SuplrBillgDoc

  association [0..1] to I_Country                    as _SuplrSettlmtCoCodeTaxCountry on  $projection.SuplrSettlmtCoCodeTaxCountry = _SuplrSettlmtCoCodeTaxCountry.Country
  association [0..1] to I_SettlmtActivityReasonCode  as _SettlmtDocActivityReason     on  $projection.SettlmtDocActivityReason = _SettlmtDocActivityReason.SettlmtActivityReason
  association [0..1] to I_Currency                   as _SupplierPaymentCurrency      on  $projection.SupplierPaymentCurrency = _SupplierPaymentCurrency.Currency
  association [0..1] to I_Address                    as _OneTimeSupplierAddress       on  $projection.OneTimeSupplierAddressID = _OneTimeSupplierAddress.AddressID

  association [0..1] to I_CndnContrType              as _CndnContrType                on  $projection.CndnContrType = _CndnContrType.CndnContrType
  association [0..1] to I_ConditionContract          as _SettlmtReltdCndnContr        on  $projection.SettlmtReltdCndnContr = _SettlmtReltdCndnContr.ConditionContract
  association [0..1] to I_SuplrBillgDoc              as _TrdgExpnSettlmtDoc           on  $projection.TrdgExpnSettlmtDoc = _TrdgExpnSettlmtDoc.SuplrBillgDoc
  association [0..1] to I_SettlmtBusProcVar          as _SettlmtBusProcVar            on  $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar

  //Extension Association
  association [1..1] to E_SettlmtMgmtDoc             as _Extension                    on  $projection.SuplrBillgDoc = _Extension.SettlmtMgmtDoc

{
  key SuplrBillgDoc,
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
      SuplrBillgDocAcctgTransfSts   as SettlmtMgmtAcctgTransfSts,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      @ObjectModel.foreignKey.association: '_SettlmtApplSts'
      SettlmtApplSts,
      @ObjectModel.foreignKey.association: '_SettlmtApplStsGrp'
      SettlmtApplStsGrp,

      /* Pricing */
      PricingProcedure              as SupplierPricingProcedure,
      PricingDocument               as SupplierPricingDocument,

      /* Partners */
      @ObjectModel.foreignKey.association: '_InvoicingParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      InvoicingParty,
      @ObjectModel.foreignKey.association: '_PayeeParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      PayeeParty,
      @ObjectModel.foreignKey.association: '_AlternativeInvoicingParty'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      AlternativeInvoicingParty,

      /* Organizational Data */
      @ObjectModel.foreignKey.association: '_SuplrSettlmtCompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode                   as SuplrSettlmtCompanyCode,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup,

      /* Administrative Data */
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      /* Currency and Exchange Rate */
      @ObjectModel.foreignKey.association: '_SuplrBillgDocCurrency'
      SuplrBillgDocCurrency,
      ExchangeRate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocTotalGrossAmount as SupplierTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocTotalNetAmount   as SupplierTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocTotalTaxAmount   as SupplierTotalTaxAmount,

      /* Payment terms and method */
      @ObjectModel.foreignKey.association: '_SupplierPaymentTerms'
      PaymentTerms                  as SupplierPaymentTerms,
      CashDiscount1Days             as SupplierCashDiscount1Days,
      CashDiscount2Days             as SupplierCashDiscount2Days,
      NetPaymentDays                as SupplierNetPaymentDays,
      CashDiscount1Percent          as SupplierCashDiscount1Percent,
      CashDiscount2Percent          as SupplierCashDiscount2Percent,
      PaymentMethod                 as SupplierPaymentMethod,

      /* Cash Discount */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrTotEligibleAmtForCshDisc,

      /* Reversal Information */
      SuplrBillgDocIsReversed       as SuplrBillgDocIsCanceled,
      @ObjectModel.foreignKey.association: '_CancldSuplrBillgDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocStdVH', element: 'SuplrBillgDoc' } }]
      }
      RvsdSuplrBillgDoc             as CancldSuplrBillgDoc,

      AdditionalValueDays           as SupplierAdditionalValueDays,
      FixedValueDate                as SupplierFixedValueDate,

      @ObjectModel.foreignKey.association: '_SupplyingCountry'
      SupplyingCountry,
      StateCentralBankPaymentReason,

      /* Tax */
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @ObjectModel.foreignKey.association: '_TaxDestinationCountry'
      TaxDestinationCountry,
      IsEUTriangularDeal,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtCoCodeTaxCountry'
      SettlmtCoCodeTaxCountry       as SuplrSettlmtCoCodeTaxCountry,

      /* VAT Registration */
      VATRegistration               as SupplierVATRegistration,

      /* Payment */
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } }]
      }
      CreditControlArea,
      @ObjectModel.foreignKey.association: '_SettlmtDocActivityReason'
      SuplrBillgDocActivityReason   as SettlmtDocActivityReason,
      PaymentReference,
      @ObjectModel.foreignKey.association: '_SupplierPaymentCurrency'
      SuplrBillgDocPaymentCurrency  as SupplierPaymentCurrency,
      SuplrBillgDocPaytCrcyExchRate as SupplierPaytCurrencyExchRate,

      /* One-time Partners */
      @ObjectModel.foreignKey.association: '_OneTimeSupplierAddress'
      OneTimeSupplierAddressID,

      /* Settlement Related Condition Contract */
      @ObjectModel.foreignKey.association: '_CndnContrType'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CndnContrTypeStdVH', element: 'CndnContrType' } }]
      }
      CndnContrType,
      @ObjectModel.foreignKey.association: '_SettlmtReltdCndnContr'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
      SettlmtReltdCndnContr,

      /* Trading Contract */
      SettlmtReltdTrdgContr,

      FiscalPeriod,

      SettlmtDate,
      @ObjectModel.foreignKey.association: '_SuplrBillgDocIncmpltnsRsn'
      SuplrBillgDocIncmpltnsRsn,

      @ObjectModel.foreignKey.association: '_SettlmtDocSmmrznCat'
      SettlmtDocSmmrznCat,
      @ObjectModel.foreignKey.association: '_TrdgExpnSettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocStdVH', element: 'SuplrBillgDoc' } }]
      }
      TrdgExpnSettlmtDoc,
      @ObjectModel.foreignKey.association: '_SettlmtClassificationCat'
      SettlmtClassificationCat,
      @ObjectModel.foreignKey.association: '_TrdgExpnDocSettled'
      TrdgExpnDocSettled,
      @ObjectModel.foreignKey.association: '_TrdgExpnCurrency'
      TrdgExpnCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TrdgExpnCurrency'
      TrdgExpnAmount,
      @ObjectModel.foreignKey.association: '_TrdgExpnSupplier'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      TrdgExpnSupplier,

      /* Intrastat */
      @ObjectModel.foreignKey.association: '_DocIntrastatRelevance'
      DocIntrastatRelevance,
      @ObjectModel.foreignKey.association: '_IntrastatDeclnGdsFlwCat'
      IntrastatDeclnGdsFlwCat,

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


      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      _SuplrBillgDocPlainLongText,
      _Partner,
      _BankData,
      _SupplierPricingElement,
      _SettlmtDocType,
      _SettlmtDocCat,
      _SettlmtProcessType,
      _LogisticsDataEntryCat,
      _SettlmtCat,
      _SettlmtMgmtAcctgTransfSts,
      _SettlmtApplSts,
      _SettlmtApplStsGrp,
      _SettlmtApplStsGrpStsAssgmt,
      _InvoicingParty,
      _PayeeParty,
      _AlternativeInvoicingParty,
      _InvoicingPartyCompany,
      _PayeePartyCompany,
      _AltvInvoicingPartyCompany,
      _SuplrSettlmtCompanyCode,
      _PurchasingOrganization,
      _PurchasingGroup,
      _CreatedByUser,
      _SuplrBillgDocCurrency,
      _ExchangeRateType,
      _SupplierPaymentTerms,
      _CancldSuplrBillgDoc,
      _SupplyingCountry,
      _TaxDepartureCountry,
      _TaxDestinationCountry,
      _SuplrSettlmtCoCodeTaxCountry,
      _CreditControlArea,
      _SettlmtDocActivityReason,
      _SupplierPaymentCurrency,
      _OneTimeSupplierAddress,
      _CndnContrType,
      _SettlmtReltdCndnContr,
      _SuplrBillgDocIncmpltnsRsn,
      _SettlmtDocSmmrznCat,
      _SettlmtClassificationCat,
      _TrdgExpnSettlmtDoc,
      _TrdgExpnDocSettled,
      _TrdgExpnCurrency,
      _TrdgExpnSupplier,
      _DocIntrastatRelevance,
      _IntrastatDeclnGdsFlwCat,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtBusProcVar,
      _SettlmtBusProcCat

}
```
