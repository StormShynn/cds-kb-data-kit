---
name: C_SETTLMTDOCLISTDEX
description: "Settlement Document List Extraction"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SETTLMTDOCLISTDEX')/$value
semantic_en: "Settlement Document List Extraction"
semantic_vi: "Settlement Document List Extraction — CDS view tiêu dùng dựa trên R_SettlmtDocListDEX."
keywords:
  - "settlement"
  - "document"
  - "list"
  - "extraction"
  - "settlmt"
  - "item"
  - "type"
  - "process"
tags:
  - LO
  - component:LO-AB
  - consumption-view
  - document
  - LO-AB
  - lob:logistics general
---
# C_SETTLMTDOCLISTDEX

**Settlement Document List Extraction**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SETTLMTDOCLISTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocList` | ✓ | |  |  | `CHAR(10)` | Document Number of Settlement Document List |
| `SettlmtDocListItem` | ✓ | |  |  | `NUMC(6)` | Item in List |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `SettlmtDocListCat` |  | |  |  | `CHAR(1)` | Settlement Management Document Category |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtDocListAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `SettlmtDocListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `SettlmtDocListTotalGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Amount of a Settlement Document List |
| `SettlmtDocListTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `SettlmtDocListTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount in Document Currency |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `EligibleAmountForCashDiscount` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `SettlmtDocListIsReversed` |  | |  |  | `CHAR(1)` | Settlement Document List Is Reversed |
| `RvsdSettlmtDocList` |  | |  |  | `CHAR(10)` | Reversed Document |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SettlmtDocListActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `SettlmtDocListPaymentCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `SettlmtDocListPaytCrcyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeSettlmtPartAddrID` |  | |  |  | `CHAR(10)` | Address of One-Time Settlement Partner |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `SettlmtDocListIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
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
| `SettlmtDocListType` |  | |  |  | `CHAR(4)` | Settlement Document List Type |
| `SettlmtDocListItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of a List Item |
| `SettlmtDocListItemTaxAmount` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non-Deductible Input Tax for Item |
| `SettlmtRemunerationNetAmt` |  | |  |  | `CURR(13)` | Value of the Settlement Document List Conditions |
| `SettlmtRemunerationTaxAmt` |  | |  |  | `CURR(13)` | Tax of Settlement Document List Conditions |
| `SettlmtDocListItemCat` |  | |  |  | `CHAR(1)` | Category of List Document Item |
| `RefSuplrBillgDoc` |  | |  |  | `CHAR(10)` | Reference Supplier Billing Document Number |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Ref Settlement Document |
| `RefCustSettlmtList` |  | |  |  | `CHAR(10)` | Reference Customer Settlement List |
| `RefSuplrSettlmtList` |  | |  |  | `CHAR(10)` | Reference Supplier Settlement List |
| `RefSettlmtDocList` |  | |  |  | `CHAR(10)` | Reference Settlement Document List |
| `RefCustSettlmt` |  | |  |  | `CHAR(10)` | Ref Customer Settlement |
| `RefExpnSettlmt` |  | |  |  | `CHAR(10)` | Reference Expense Settlement |
| `RefSuplrSettlmt` |  | |  |  | `CHAR(10)` | Reference Supplier Settlement |
| `SettlmtExtBillgDoc` |  | |  |  | `CHAR(10)` | External Billing Document in Settlement Management |
| `SettlmtExtAcctgDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of External Accounting Doc in Settlmt Mgmt |
| `SettlmtExtAcctgDoc` |  | |  |  | `CHAR(10)` | External Accounting Document in Settlement Management |
| `SettlmtExtAcctgDocFiscalYear` |  | |  |  | `NUMC(4)` | Year of External Accounting Document |
| `SettlmtExtAcctgDocItem` |  | |  |  | `NUMC(3)` | External Accounting Document Item in Settlement Management |
| `SettlmtDocListItemIsReversed` |  | |  |  | `CHAR(1)` | List Item is Reversed |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Indicator that Pricing Determination for Item is Incomplete |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SETTLMTDOCLISTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SETTLMTDOCLISTDEX')/$value)*

```abap
@EndUserText.label: 'Settlement Document List Extraction'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    compositionRoot: true,
    modelingPattern:#ANALYTICAL_FACT,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
    usageType: {
        dataClass:      #MIXED,
        serviceQuality: #D,
        sizeCategory:   #XXL
        },
    sapObjectNodeType.name: 'SettlementDocumentList'
    }
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta: {
            changeDataCapture: {
                mapping:[
                    {
                        table: 'wbrl', role: #MAIN,
                        viewElement: ['SettlmtDocList', 'SettlmtDocListItem'],
                        tableElement: ['wbeln', 'posnr']
                    },
                    {
                        table: 'wbrk', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['SettlmtDocList'],
                        tableElement: ['wbeln']
                    }
                    ]
                }
            }
        }
    }
@VDM.viewType: #CONSUMPTION
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
    }
    
define view entity C_SettlmtDocListDEX
  as select from R_SettlmtDocListDEX as SettlmtDocListDEX
{
  key SettlmtDocList,
  key SettlmtDocListItem,

      SettlmtDocListDEX.SettlmtDocType         as SettlmtDocType,
      SettlmtDocListDEX.SettlmtDocCat,
      SettlmtDocListDEX.SettlmtProcessType,
      SettlmtDocListDEX.SettlmtDocListCat,
      SettlmtDocListDEX.LogisticsDataEntryCat,
      SettlmtDocListDEX.SettlmtDocListAcctgTransfSts,
      SettlmtDocListDEX.PostingDate,
      SettlmtDocListDEX.DocumentReferenceID,
      SettlmtDocListDEX.AssignmentReference,
      SettlmtDocListDEX.SettlmtApplSts,
      SettlmtDocListDEX.SettlmtApplStsGrp,
      SettlmtDocListDEX.PricingProcedure,
      SettlmtDocListDEX.InvoicingParty,
      SettlmtDocListDEX.PayeeParty,
      SettlmtDocListDEX.AlternativeInvoicingParty,
      SettlmtDocListDEX.BillToParty,
      SettlmtDocListDEX.PayerParty,
      SettlmtDocListDEX.CompanyCode            as CompanyCode,
      SettlmtDocListDEX.PurchasingOrganization,
      SettlmtDocListDEX.PurchasingGroup,
      SettlmtDocListDEX.SalesOrganization,
      SettlmtDocListDEX.DistributionChannel,
      SettlmtDocListDEX.Division,
      SettlmtDocListDEX.CreatedByUser,
      SettlmtDocListDEX.CreationDate,
      SettlmtDocListDEX.CreationTime,
      SettlmtDocListDEX.LastChangeDate         as LastChangeDate,
      SettlmtDocListDEX.SettlmtDocListCurrency as SettlmtDocListCurrency,
      SettlmtDocListDEX.ExchangeRate,
      SettlmtDocListDEX.ExchangeRateType,
      SettlmtDocListDEX.ExchangeRateIsFixed,
      SettlmtDocListDEX.ExchangeRateDate,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.SettlmtDocListTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.SettlmtDocListTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.SettlmtDocListTotalTaxAmount,
      SettlmtDocListDEX.PaymentTerms,
      SettlmtDocListDEX.CashDiscount1Days,
      SettlmtDocListDEX.CashDiscount2Days,
      SettlmtDocListDEX.NetPaymentDays,
      SettlmtDocListDEX.CashDiscount1Percent,
      SettlmtDocListDEX.CashDiscount2Percent,
      SettlmtDocListDEX.PaymentMethod,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.EligibleAmountForCashDiscount,
      SettlmtDocListDEX.SettlmtDocListIsReversed,
      SettlmtDocListDEX.RvsdSettlmtDocList,
      SettlmtDocListDEX.AdditionalValueDays,
      SettlmtDocListDEX.FixedValueDate,
      SettlmtDocListDEX.TaxDepartureCountry,
      SettlmtDocListDEX.TaxDestinationCountry,
      SettlmtDocListDEX.IsEUTriangularDeal,
      SettlmtDocListDEX.SettlmtCoCodeTaxCountry,
      SettlmtDocListDEX.VATRegistration,
      SettlmtDocListDEX.SupplyingCountry,
      SettlmtDocListDEX.StateCentralBankPaymentReason,
      SettlmtDocListDEX.CreditControlArea,
      SettlmtDocListDEX.SettlmtDocListActivityReason,
      SettlmtDocListDEX.PaymentReference,
      SettlmtDocListDEX.SettlmtDocListPaymentCurrency,
      SettlmtDocListDEX.SettlmtDocListPaytCrcyExchRate,
      SettlmtDocListDEX.OneTimeSettlmtPartAddrID,
      SettlmtDocListDEX.FiscalPeriod,
      SettlmtDocListDEX.SettlmtDate,
      SettlmtDocListDEX.SettlmtDocListIncmpltnsRsn,
      SettlmtDocListDEX.DocIntrastatRelevance,
      SettlmtDocListDEX.IntrastatDeclnGdsFlwCat,
      SettlmtDocListDEX.IncotermsVersion,
      SettlmtDocListDEX.IncotermsClassification,
      SettlmtDocListDEX.IncotermsTransferLocation,
      SettlmtDocListDEX.IncotermsLocation1,
      SettlmtDocListDEX.IncotermsLocation2,
      SettlmtDocListDEX.SettlmtBusProcVar,
      SettlmtDocListDEX.SettlmtBusProcCat,
      SettlmtDocListDEX.SEPAMandate,
      SettlmtDocListDEX.SettlmtDocListType,

      /* Item */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.SettlmtDocListItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.SettlmtDocListItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.NonDeductibleInputTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.SettlmtRemunerationNetAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListDEX.SettlmtRemunerationTaxAmt,
      SettlmtDocListDEX.SettlmtDocListItemCat,
      SettlmtDocListDEX.RefSuplrBillgDoc,
      SettlmtDocListDEX.RefSettlmtDoc,
      SettlmtDocListDEX.RefCustSettlmtList,
      SettlmtDocListDEX.RefSuplrSettlmtList,
      SettlmtDocListDEX.RefSettlmtDocList,
      SettlmtDocListDEX.RefCustSettlmt,
      SettlmtDocListDEX.RefExpnSettlmt,
      SettlmtDocListDEX.RefSuplrSettlmt,
      SettlmtDocListDEX.SettlmtExtBillgDoc,
      SettlmtDocListDEX.SettlmtExtAcctgDocCompanyCode,
      SettlmtDocListDEX.SettlmtExtAcctgDoc,
      SettlmtDocListDEX.SettlmtExtAcctgDocFiscalYear,
      SettlmtDocListDEX.SettlmtExtAcctgDocItem,
      SettlmtDocListDEX.SettlmtDocListItemIsReversed,
      SettlmtDocListDEX.PrcDetnIsIncmplt,

      /*Associations*/
      @Consumption.hidden: true
      SettlmtDocListDEX._AlternativeInvoicingParty,
      @Consumption.hidden: true
      SettlmtDocListDEX._AltvInvoicingPartyCompany,
      @Consumption.hidden: true
      SettlmtDocListDEX._BillToParty,
      @Consumption.hidden: true
      SettlmtDocListDEX._BillToPartyCompany,
      @Consumption.hidden: true
      SettlmtDocListDEX._InvoicingParty,
      @Consumption.hidden: true
      SettlmtDocListDEX._InvoicingPartyCompany,
      @Consumption.hidden: true
      SettlmtDocListDEX._PayeeParty,
      @Consumption.hidden: true
      SettlmtDocListDEX._PayeePartyCompany,
      @Consumption.hidden: true
      SettlmtDocListDEX._PayerParty,
      @Consumption.hidden: true
      SettlmtDocListDEX._PayerPartyCompany
}
```
