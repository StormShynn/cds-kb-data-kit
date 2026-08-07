---
name: C_CUSTSETTLMTLISTDEX
description: "Customer Settlement List Extraction"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTSETTLMTLISTDEX')/$value
semantic_en: "Customer Settlement List Extraction"
semantic_vi: "Customer Settlement List Extraction — CDS view tiêu dùng dựa trên R_CustSettlmtListDEX."
keywords:
  - "customer"
  - "settlement"
  - "list"
  - "extraction"
  - "cust"
  - "settlmt"
  - "item"
  - "type"
  - "process"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - consumption-view
  - customer
  - LO-AB
  - lob:logistics general
---
# C_CUSTSETTLMTLISTDEX

**Customer Settlement List Extraction**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTSETTLMTLISTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` | ✓ | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `CustSettlmtListItem` | ✓ | |  |  | `NUMC(6)` | Item in List |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CustSettlmtListAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `CustSettlmtListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `CustSettlmtListTotGrossAmount` |  | |  |  | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `CustSettlmtListTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `CustSettlmtListTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount in Document Currency |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key for Customer |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Customer Cash Discount First Payment in Days |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Customer Cash Discount Second Payment in Days |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Customer Cash Discount Days |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Customer Cash Discount for First Payment in % |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Custromer Cash Discount for Second Payment in % |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Customer Payment Method |
| `CustTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `CustSettlmtListIsReversed` |  | |  |  | `CHAR(1)` | Customer Settlement List Is Reversed |
| `RvsdCustSettlmtList` |  | |  |  | `CHAR(10)` | Reversed Document |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `CustSettlmtListActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `CustSettlmtListPaytCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `CustSetlLstPaytCrcyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeCustomerAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Customer |
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
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `CustSettlmtListIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `CustSettlmtListItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of a List Item |
| `CustSettlmtListItemTaxAmount` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non-Deductible Input Tax for Item |
| `SettlmtRemunerationNetAmt` |  | |  |  | `CURR(13)` | Value of the Settlement Document List Conditions |
| `SettlmtRemunerationTaxAmt` |  | |  |  | `CURR(13)` | Tax of Settlement Document List Conditions |
| `CustSettlmtListItemIsReversed` |  | |  |  | `CHAR(1)` | List Item is Reversed |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Indicator that Pricing Determination for Item is Incomplete |
| `_BillToParty` |  | |  |  |  |  |
| `_BillToPartyCompany` |  | |  |  |  |  |
| `_PayerParty` |  | |  |  |  |  |
| `_PayerPartyCompany` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTSETTLMTLISTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTSETTLMTLISTDEX')/$value)*

```abap
@EndUserText.label: 'Customer Settlement List Extraction'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    compositionRoot: true,
    modelingPattern:#ANALYTICAL_FACT,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
    usageType: {
        dataClass:      #MIXED,
        serviceQuality: #D,
        sizeCategory:   #XXL
        },
    sapObjectNodeType.name: 'CustomerSettlementList'
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
                        viewElement: ['CustSettlmtList', 'CustSettlmtListItem'],
                        tableElement: ['wbeln', 'posnr']
                    },
                    {
                        table: 'wbrk', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['CustSettlmtList'],
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
    allowExtensions:false
    }

define view entity C_CustSettlmtListDEX
  as select from R_CustSettlmtListDEX as CustSettlmtListDEX
{
  key CustSettlmtList,
  key CustSettlmtListItem,

      CustSettlmtListDEX.SettlmtDocType          as SettlmtDocType,
      CustSettlmtListDEX.SettlmtDocCat,
      CustSettlmtListDEX.SettlmtProcessType,
      CustSettlmtListDEX.LogisticsDataEntryCat,
      CustSettlmtListDEX.PostingDate,
      CustSettlmtListDEX.CustSettlmtListAcctgTransfSts,
      CustSettlmtListDEX.DocumentDate,
      CustSettlmtListDEX.DocumentReferenceID,
      CustSettlmtListDEX.AssignmentReference,
      CustSettlmtListDEX.SettlmtApplSts,
      CustSettlmtListDEX.SettlmtApplStsGrp,
      CustSettlmtListDEX.PricingProcedure,
      CustSettlmtListDEX.BillToParty,
      CustSettlmtListDEX.PayerParty,
      CustSettlmtListDEX.InvoicingParty,
      CustSettlmtListDEX.PayeeParty,
      CustSettlmtListDEX.SalesOrganization,
      CustSettlmtListDEX.DistributionChannel,
      CustSettlmtListDEX.Division,
      CustSettlmtListDEX.CompanyCode             as CompanyCode,
      CustSettlmtListDEX.CreatedByUser,
      CustSettlmtListDEX.CreationDate,
      CustSettlmtListDEX.CreationTime,
      CustSettlmtListDEX.LastChangeDate          as LastChangeDate,
      CustSettlmtListDEX.CustSettlmtListCurrency as CustSettlmtListCurrency,
      CustSettlmtListDEX.ExchangeRate,
      CustSettlmtListDEX.ExchangeRateType,
      CustSettlmtListDEX.ExchangeRateIsFixed,
      CustSettlmtListDEX.ExchangeRateDate,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.CustSettlmtListTotGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.CustSettlmtListTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.CustSettlmtListTotalTaxAmount,
      CustSettlmtListDEX.PaymentTerms,
      CustSettlmtListDEX.CashDiscount1Days,
      CustSettlmtListDEX.CashDiscount2Days,
      CustSettlmtListDEX.NetPaymentDays,
      CustSettlmtListDEX.CashDiscount1Percent,
      CustSettlmtListDEX.CashDiscount2Percent,
      CustSettlmtListDEX.PaymentMethod,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.CustTotEligibleAmtForCshDisc,
      CustSettlmtListDEX.CustSettlmtListIsReversed,
      CustSettlmtListDEX.RvsdCustSettlmtList,
      CustSettlmtListDEX.AdditionalValueDays,
      CustSettlmtListDEX.FixedValueDate,
      CustSettlmtListDEX.TaxDepartureCountry,
      CustSettlmtListDEX.TaxDestinationCountry,
      CustSettlmtListDEX.IsEUTriangularDeal,
      CustSettlmtListDEX.SettlmtCoCodeTaxCountry,
      CustSettlmtListDEX.VATRegistration,
      CustSettlmtListDEX.StateCentralBankPaymentReason,
      CustSettlmtListDEX.CreditControlArea,
      CustSettlmtListDEX.CustSettlmtListActivityReason,
      CustSettlmtListDEX.PaymentReference,
      CustSettlmtListDEX.CustSettlmtListPaytCurrency,
      CustSettlmtListDEX.CustSetlLstPaytCrcyExchRate,
      CustSettlmtListDEX.OneTimeCustomerAddressID,
      CustSettlmtListDEX.IntrastatDeclnGdsFlwCat,
      CustSettlmtListDEX.DocIntrastatRelevance,
      CustSettlmtListDEX.IncotermsVersion,
      CustSettlmtListDEX.IncotermsClassification,
      CustSettlmtListDEX.IncotermsTransferLocation,
      CustSettlmtListDEX.IncotermsLocation1,
      CustSettlmtListDEX.IncotermsLocation2,
      CustSettlmtListDEX.SettlmtBusProcVar,
      CustSettlmtListDEX.SettlmtBusProcCat,
      CustSettlmtListDEX.SEPAMandate,
      CustSettlmtListDEX.SupplyingCountry,
      CustSettlmtListDEX.FiscalPeriod,
      CustSettlmtListDEX.SettlmtDate,
      CustSettlmtListDEX.CustSettlmtListIncmpltnsRsn,

      /* Item */
      CustSettlmtListDEX.RefSettlmtDoc,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.CustSettlmtListItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.CustSettlmtListItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.NonDeductibleInputTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.SettlmtRemunerationNetAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListDEX.SettlmtRemunerationTaxAmt,
      CustSettlmtListDEX.CustSettlmtListItemIsReversed,
      CustSettlmtListDEX.PrcDetnIsIncmplt,

      /* Associations */
      @Consumption.hidden: true
      CustSettlmtListDEX._BillToParty            as _BillToParty,
      @Consumption.hidden: true
      CustSettlmtListDEX._BillToPartyCompany     as _BillToPartyCompany,
      @Consumption.hidden: true
      CustSettlmtListDEX._PayerParty             as _PayerParty,
      @Consumption.hidden: true
      CustSettlmtListDEX._PayerPartyCompany      as _PayerPartyCompany

}
```
