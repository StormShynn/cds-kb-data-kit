---
name: I_CUSTSETTLMT
description: "Customer Settlement"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMT')/$value
semantic_en: "Customer Settlement"
semantic_vi: "Customer Settlement — CDS view cơ bản dựa trên R_CustSettlmt."
keywords:
  - "Customer Settlement"
  - "customer"
  - "settlement"
  - "cust"
  - "settlmt"
  - "type"
  - "process"
  - "logistics"
  - "data"
  - "entry"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMT

**Customer Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmt` | ✓ | |  |  | `CHAR(10)` | Customer Settlement |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SettlmtMgmtAcctgTransfSts` |  | |  | `CustSettlmtAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
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
| `CustSettlmtCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `CustomerTotalGrossAmount` |  | |  | `CustSettlmtTotalGrossAmount` | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `CustomerTotalNetAmount` |  | |  | `CustSettlmtTotalNetAmount` | `CURR(15)` | Net Settlement Amount in Document Currency |
| `CustomerTotalTaxAmount` |  | |  | `CustSettlmtTotalTaxAmount` | `CURR(13)` | Total Tax Amount in Document Currency |
| `CustomerPaymentTerms` |  | |  | `PaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `CustomerCashDiscount1Days` |  | |  | `CashDiscount1Days` | `DEC(3)` | Cash Discount Days 1 |
| `CustomerCashDiscount2Days` |  | |  | `CashDiscount2Days` | `DEC(3)` | Cash Discount Days 2 |
| `CustomerNetPaymentDays` |  | |  | `NetPaymentDays` | `DEC(3)` | Net Payment Terms Period |
| `CustomerCashDiscount1Percent` |  | |  | `CashDiscount1Percent` | `DEC(5)` | Cash Discount Percentage 1 |
| `CustomerCashDiscount2Percent` |  | |  | `CashDiscount2Percent` | `DEC(5)` | Cash Discount Percentage 2 |
| `CustomerPaymentMethod` |  | |  | `PaymentMethod` | `CHAR(1)` | Payment Method |
| `CustTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `CustSettlmtIsCanceled` |  | |  | `CustSettlmtIsReversed` | `CHAR(1)` | Customer Settlement Is Reversed |
| `CancldCustSettlmt` |  | |  | `ReversedCustomerSettlement` | `CHAR(10)` | Reversed Document |
| `CustomerAdditionalValueDays` |  | |  | `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `CustomerFixedValueDate` |  | |  | `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `CustSettlmtCoCodeTaxCountry` |  | |  | `SettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `CustomerVATRegistration` |  | |  | `VATRegistration` | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `CreditControlAreaCurrency` |  | |  |  | `CUKY(5)` | Currency of Credit Control Area |
| `ReleasedCreditAmount` |  | |  |  | `CURR(15)` | Released credit amount |
| `SettlmtDocActivityReason` |  | |  | `CustSettlmtActivityReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `CustomerPaymentCurrency` |  | |  | `CustSettlmtPaymentCurrency` | `CUKY(5)` | Payment Currency |
| `CustomerPaytCurrencyExchRate` |  | |  | `CustSettlmtPaytCrcyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeCustomerAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Customer |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `SettlmtReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDateCat` |  | |  |  | `CHAR(1)` | Rebates: Settlement Date Type |
| `ActualSettlmtDate` |  | |  |  | `DATS(8)` | Actual Settlement Date |
| `SettlmtDateSequentialID` |  | |  |  | `NUMC(1)` | Settlement Date - Sequential ID |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `CustSettlmtIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
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
| `TotalSettlmtQuantity` |  | |  |  | `QUAN(15)` | Total Quantity of the Business Volume in a Settlement Run |
| `TotalSettlmtQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Total Quantity |
| `TotalSettlmtNetWeight` |  | |  |  | `QUAN(15)` | Total Net Weight of the Business Volume in a Settlement Run |
| `TotalSettlmtGrossWeight` |  | |  |  | `QUAN(15)` | Total Gross Weight of the Bus Volume in a Settlement Run |
| `TotalSettlmtWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight for Total Weight |
| `TotalSettlmtVolume` |  | |  |  | `QUAN(15)` | Total Volume of the Business Volume in a Settlement Run |
| `TotalSettlmtVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit for Total Volume |
| `TotalSettlmtPointsQty` |  | |  |  | `QUAN(15)` | Total Points of the Business Volume in a Settlement Run |
| `TotalSettlmtPointsQtyUnit` |  | |  |  | `UNIT(3)` | Points Unit for Total Points |
| `SettlmtPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Settlement Period |
| `SettlmtPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Settlement Period |
| `CndnContrProcessCategory` |  | |  |  | `CHAR(2)` | Process Category of a Condition Contract |
| `_Item` | | ✓ | | | | |
| `_CustSettlmtPlainLongText` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_BankData` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |
| `_SettlmtProcessType` | | ✓ | | | | |
| `_SettlmtMgmtAcctgTransfSts` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_CustomerPricingElement` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_PayerPartyCompany` | | ✓ | | | | |
| `_CustSettlmtCompanyCode` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_CancldCustSettlmt` | | ✓ | | | | |
| `_CustSettlmtCoCodeTaxCountry` | | ✓ | | | | |
| `_SettlmtDocActivityReason` | | ✓ | | | | |
| `_CustomerPaymentCurrency` | | ✓ | | | | |
| `_OneTimeCustomerAddress` | | ✓ | | | | |
| `_CndnContrType` | | ✓ | | | | |
| `_SettlmtReltdCndnContr` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
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
| `_CustSettlmtCurrency` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_TaxDestinationCountry` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_CreditControlAreaCurrency` | | ✓ | | | | |
| `_SettlmtDateCat` | | ✓ | | | | |
| `_CustSettlmtIncmpltnsRsn` | | ✓ | | | | |
| `_DocIntrastatRelevance` | | ✓ | | | | |
| `_IntrastatDeclnGdsFlwCat` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |
| `_TotalSettlmtQuantityUnit` | | ✓ | | | | |
| `_TotalSettlmtWeightUnit` | | ✓ | | | | |
| `_TotalSettlmtVolumeUnit` | | ✓ | | | | |
| `_TotalSettlmtPointsQtyUnit` | | ✓ | | | | |
| `_CndnContrProcessCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_CustSettlmtItem` | [0..*] |
| `_CustSettlmtPlainLongText` | `I_CustSettlmtPlainLongText` | [0..*] |
| `_Partner` | `I_CustSettlmtPartner` | [0..*] |
| `_BankData` | `I_CustSettlmtBankData` | [0..*] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtMgmtAcctgTransfSts` | `I_SettlmtMgmtAcctgTransfSts` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_CustomerPricingElement` | `I_CustSettlmtPrcgElmnt` | [0..*] |
| `_BillToPartyCompany` | `I_CustomerCompany` | [0..1] |
| `_PayerPartyCompany` | `I_CustomerCompany` | [0..1] |
| `_CustSettlmtCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CustomerPaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_CancldCustSettlmt` | `I_CustSettlmt` | [0..1] |
| `_CustSettlmtCoCodeTaxCountry` | `I_Country` | [0..1] |
| `_SettlmtDocActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_CustomerPaymentCurrency` | `I_Currency` | [0..1] |
| `_OneTimeCustomerAddress` | `I_Address` | [0..1] |
| `_CndnContrType` | `I_CndnContrType` | [0..1] |
| `_SettlmtReltdCndnContr` | `I_ConditionContract` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMT')/$value)*

```abap
@VDM: {
   viewType: #BASIC,
   lifecycle.contract.type: #PUBLIC_LOCAL_API
}


@ObjectModel: {
  compositionRoot:         true,
  representativeKey:      'CustSettlmt',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType.serviceQuality: #A,
  usageType.dataClass:    #TRANSACTIONAL,
  usageType.sizeCategory: #XXL
 }

@Analytics: {
   dataCategory: #DIMENSION,
   dataExtraction.enabled: false }
@Analytics.technicalName: 'IWLFCUSTSMT' 
@Analytics.internalName:           #LOCAL


@AccessControl: {
  authorizationCheck:      #MANDATORY,
  privilegedAssociations:  [ '_BankData', '_OneTimeCustomerAddress', '_CreatedByUser' ] ,
  personalData.blocking:   #('TRANSACTIONAL_DATA')
}

@EndUserText.label: 'Customer Settlement'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view entity I_CustSettlmt
  as select from R_CustSettlmt

  association [0..*] to I_CustSettlmtItem            as _Item                        on  $projection.CustSettlmt = _Item.CustSettlmt
  association [0..*] to I_CustSettlmtPlainLongText   as _CustSettlmtPlainLongText    on  $projection.CustSettlmt = _CustSettlmtPlainLongText.CustSettlmt
  association [0..*] to I_CustSettlmtPartner         as _Partner                     on  $projection.CustSettlmt = _Partner.CustSettlmt
  association [0..*] to I_CustSettlmtBankData        as _BankData                    on  $projection.CustSettlmt = _BankData.CustSettlmt

  association [0..1] to I_SettlmtDocType             as _SettlmtDocType              on  $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  association [0..1] to I_SettlmtProcessType         as _SettlmtProcessType          on  $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType
  association [0..1] to I_SettlmtMgmtAcctgTransfSts  as _SettlmtMgmtAcctgTransfSts   on  $projection.SettlmtMgmtAcctgTransfSts = _SettlmtMgmtAcctgTransfSts.SettlmtMgmtAcctgTransfSts
  association [0..1] to I_SettlmtApplSts             as _SettlmtApplSts              on  $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts
  association [0..1] to I_SettlmtApplStsGrp          as _SettlmtApplStsGrp           on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt as _SettlmtApplStsGrpStsAssgmt  on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                     and $projection.SettlmtApplSts    = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts

  association [0..*] to I_CustSettlmtPrcgElmnt       as _CustomerPricingElement      on  $projection.CustSettlmt = _CustomerPricingElement.CustSettlmt

  association [0..1] to I_CustomerCompany            as _BillToPartyCompany          on  $projection.BillToParty            = _BillToPartyCompany.Customer
                                                                                     and $projection.CustSettlmtCompanyCode = _BillToPartyCompany.CompanyCode
  association [0..1] to I_CustomerCompany            as _PayerPartyCompany           on  $projection.PayerParty             = _PayerPartyCompany.Customer
                                                                                     and $projection.CustSettlmtCompanyCode = _PayerPartyCompany.CompanyCode
  association [0..1] to I_CompanyCode                as _CustSettlmtCompanyCode      on  $projection.CustSettlmtCompanyCode = _CustSettlmtCompanyCode.CompanyCode

  association [0..1] to I_PaymentTerms               as _CustomerPaymentTerms        on  $projection.CustomerPaymentTerms = _CustomerPaymentTerms.PaymentTerms
  association [0..1] to I_CustSettlmt                as _CancldCustSettlmt           on  $projection.CancldCustSettlmt = _CancldCustSettlmt.CustSettlmt

  association [0..1] to I_Country                    as _CustSettlmtCoCodeTaxCountry on  $projection.CustSettlmtCoCodeTaxCountry = _CustSettlmtCoCodeTaxCountry.Country
  association [0..1] to I_SettlmtActivityReasonCode  as _SettlmtDocActivityReason    on  $projection.SettlmtDocActivityReason = _SettlmtDocActivityReason.SettlmtActivityReason
  association [0..1] to I_Currency                   as _CustomerPaymentCurrency     on  $projection.CustomerPaymentCurrency = _CustomerPaymentCurrency.Currency
  association [0..1] to I_Address                    as _OneTimeCustomerAddress      on  $projection.OneTimeCustomerAddressID = _OneTimeCustomerAddress.AddressID

  association [0..1] to I_CndnContrType              as _CndnContrType               on  $projection.CndnContrType = _CndnContrType.CndnContrType
  association [0..1] to I_ConditionContract          as _SettlmtReltdCndnContr       on  $projection.SettlmtReltdCndnContr = _SettlmtReltdCndnContr.ConditionContract
  association [0..1] to I_SettlmtBusProcVar          as _SettlmtBusProcVar           on  $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar

  //Extension Association
  association [1..1] to E_SettlmtMgmtDoc             as _Extension                   on  $projection.CustSettlmt = _Extension.SettlmtMgmtDoc

{
  key CustSettlmt,
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
      CustSettlmtAcctgTransfSts   as SettlmtMgmtAcctgTransfSts,
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
      @ObjectModel.foreignKey.association: '_CustSettlmtCurrency'
      CustSettlmtCurrency,
      ExchangeRate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtTotalGrossAmount as CustomerTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtTotalNetAmount   as CustomerTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtTotalTaxAmount   as CustomerTotalTaxAmount,

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
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustTotEligibleAmtForCshDisc,

      /* Reversal Information */
      CustSettlmtIsReversed       as CustSettlmtIsCanceled,
      @ObjectModel.foreignKey.association: '_CancldCustSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtStdVH', element: 'CustSettlmt' } }]
      }
      ReversedCustomerSettlement  as CancldCustSettlmt,

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
      @ObjectModel.foreignKey.association: '_CreditControlAreaCurrency'
      CreditControlAreaCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CreditControlAreaCurrency'
      ReleasedCreditAmount,
      @ObjectModel.foreignKey.association: '_SettlmtDocActivityReason'
      CustSettlmtActivityReason   as SettlmtDocActivityReason,
      PaymentReference,
      @ObjectModel.foreignKey.association: '_CustomerPaymentCurrency'
      CustSettlmtPaymentCurrency  as CustomerPaymentCurrency,
      CustSettlmtPaytCrcyExchRate as CustomerPaytCurrencyExchRate,

      /* One-time Partners */
      @ObjectModel.foreignKey.association: '_OneTimeCustomerAddress'
      OneTimeCustomerAddressID,

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

      FiscalPeriod,

      @ObjectModel.foreignKey.association: '_SettlmtDateCat'
      SettlmtDateCat,
      ActualSettlmtDate,
      SettlmtDateSequentialID,
      SettlmtDate,
      @ObjectModel.foreignKey.association: '_CustSettlmtIncmpltnsRsn'
      CustSettlmtIncmpltnsRsn,

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

      /* Units */
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtQuantityUnit'
      TotalSettlmtQuantity,
      @ObjectModel.foreignKey.association: '_TotalSettlmtQuantityUnit'
      TotalSettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      TotalSettlmtNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      TotalSettlmtGrossWeight,
      @ObjectModel.foreignKey.association: '_TotalSettlmtWeightUnit'
      TotalSettlmtWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtVolumeUnit'
      TotalSettlmtVolume,
      @ObjectModel.foreignKey.association: '_TotalSettlmtVolumeUnit'
      TotalSettlmtVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtPointsQtyUnit'
      TotalSettlmtPointsQty,
      @ObjectModel.foreignKey.association: '_TotalSettlmtPointsQtyUnit'
      TotalSettlmtPointsQtyUnit,

      SettlmtPeriodStartDate,
      SettlmtPeriodEndDate,
      @ObjectModel.foreignKey.association: '_CndnContrProcessCategory'
      CndnContrProcessCategory,


      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      _CustSettlmtPlainLongText,
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
      _CustSettlmtCurrency,
      _ExchangeRateType,
      _CustomerPaymentTerms,
      _CancldCustSettlmt,
      _TaxDepartureCountry,
      _TaxDestinationCountry,
      _CustSettlmtCoCodeTaxCountry,
      _CreditControlArea,
      _CreditControlAreaCurrency,
      _SettlmtDocActivityReason,
      _CustomerPaymentCurrency,
      _OneTimeCustomerAddress,
      _CndnContrType,
      _SettlmtReltdCndnContr,
      _SettlmtDateCat,
      _CustSettlmtIncmpltnsRsn,
      _DocIntrastatRelevance,
      _IntrastatDeclnGdsFlwCat,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtBusProcVar,
      _SettlmtBusProcCat,
      _TotalSettlmtQuantityUnit,
      _TotalSettlmtWeightUnit,
      _TotalSettlmtVolumeUnit,
      _TotalSettlmtPointsQtyUnit,
      _CndnContrProcessCategory

}
```
