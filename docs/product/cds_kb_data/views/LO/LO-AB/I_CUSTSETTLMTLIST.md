---
name: I_CUSTSETTLMTLIST
description: "Customer Settlement List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLIST')/$value
semantic_en: "Customer Settlement List"
semantic_vi: "Customer Settlement List — CDS view cơ bản dựa trên R_CustSettlmtList."
keywords:
  - "Customer Settlement List"
  - "customer"
  - "settlement"
  - "list"
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
# I_CUSTSETTLMTLIST

**Customer Settlement List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` | ✓ | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SettlmtMgmtAcctgTransfSts` |  | |  | `CustSettlmtListAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `CustomerPricingProcedure` |  | |  | `PricingProcedure` | `CHAR(6)` | Pricing Procedure |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `CustSettlmtCompanyCode` |  | |  | `CompanyCode` | `CHAR(4)` | Company Code |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `CustSettlmtListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `CustomerTotalGrossAmount` |  | |  | `CustSettlmtListTotGrossAmount` | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `CustomerTotalNetAmount` |  | |  | `CustSettlmtListTotalNetAmount` | `CURR(15)` | Net Settlement Amount in Document Currency |
| `CustomerTotalTaxAmount` |  | |  | `CustSettlmtListTotalTaxAmount` | `CURR(13)` | Total Tax Amount in Document Currency |
| `CustomerPaymentTerms` |  | |  | `PaymentTerms` | `CHAR(4)` | Terms of Payment Key for Customer |
| `CustomerCashDiscount1Days` |  | |  | `CashDiscount1Days` | `DEC(3)` | Customer Cash Discount First Payment in Days |
| `CustomerCashDiscount2Days` |  | |  | `CashDiscount2Days` | `DEC(3)` | Customer Cash Discount Second Payment in Days |
| `CustomerNetPaymentDays` |  | |  | `NetPaymentDays` | `DEC(3)` | Customer Cash Discount Days |
| `CustomerCashDiscount1Percent` |  | |  | `CashDiscount1Percent` | `DEC(5)` | Customer Cash Discount for First Payment in % |
| `CustomerCashDiscount2Percent` |  | |  | `CashDiscount2Percent` | `DEC(5)` | Custromer Cash Discount for Second Payment in % |
| `CustomerPaymentMethod` |  | |  | `PaymentMethod` | `CHAR(1)` | Customer Payment Method |
| `CustTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `CustSettlmtListIsCanceled` |  | |  | `CustSettlmtListIsReversed` | `CHAR(1)` | Customer Settlement List Is Reversed |
| `CancldCustSettlmtList` |  | |  | `RvsdCustSettlmtList` | `CHAR(10)` | Reversed Document |
| `CustomerAdditionalValueDays` |  | |  | `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `CustomerFixedValueDate` |  | |  | `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `CustSettlmtCoCodeTaxCountry` |  | |  | `SettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `CustomerVATRegistration` |  | |  | `VATRegistration` | `CHAR(20)` | VAT Registration Number |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` |  | |  | `CustSettlmtListActivityReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `CustomerPaymentCurrency` |  | |  | `CustSettlmtListPaytCurrency` | `CUKY(5)` | Payment Currency |
| `CustomerPaytCurrencyExchRate` |  | |  | `CustSetlLstPaytCrcyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeCustomerAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Customer |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `CustSettlmtListIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
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
| `_ListItem` | | ✓ | | | | |
| `_CustSettlmtListPlainLongText` | | ✓ | | | | |
| `_SettlmtMgmtAcctgTransfSts` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_BankData` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |
| `_SettlmtProcessType` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_CustSettlmtCompanyCode` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_PayerPartyCompany` | | ✓ | | | | |
| `_CustSettlmtCoCodeTaxCountry` | | ✓ | | | | |
| `_SettlmtDocActivityReason` | | ✓ | | | | |
| `_OneTimeCustomerAddress` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_CustomerPaymentCurrency` | | ✓ | | | | |
| `_CancldCustSettlmtList` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_LogisticsDataEntryCat` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesArea` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_CustSettlmtListCurrency` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_TaxDestinationCountry` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_SupplyingCountry` | | ✓ | | | | |
| `_CustSettlmtListIncmpltnsRsn` | | ✓ | | | | |
| `_DocIntrastatRelevance` | | ✓ | | | | |
| `_IntrastatDeclnGdsFlwCat` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ListItem` | `I_CustSettlmtListItem` | [0..*] |
| `_CustSettlmtListPlainLongText` | `I_CustSettlmtListPlainLongText` | [0..*] |
| `_SettlmtMgmtAcctgTransfSts` | `I_SettlmtMgmtAcctgTransfSts` | [0..1] |
| `_Partner` | `I_CustSettlmtListPartner` | [0..*] |
| `_BankData` | `I_CustSettlmtListBankData` | [0..*] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_CustSettlmtCompanyCode` | `I_CompanyCode` | [0..1] |
| `_BillToPartyCompany` | `I_CustomerCompany` | [0..1] |
| `_PayerPartyCompany` | `I_CustomerCompany` | [0..1] |
| `_CustSettlmtCoCodeTaxCountry` | `I_Country` | [0..1] |
| `_SettlmtDocActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_OneTimeCustomerAddress` | `I_Address` | [0..1] |
| `_CustomerPaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_CustomerPaymentCurrency` | `I_Currency` | [0..1] |
| `_CancldCustSettlmtList` | `I_CustSettlmtList` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLIST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLIST')/$value)*

```abap
@EndUserText.label: 'Customer Settlement List'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_BankData', '_OneTimeCustomerAddress', '_CreatedByUser' ]
    }
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'CustSettlmtList',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [#ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE ],
    usageType.serviceQuality: #A,
    usageType.dataClass:      #TRANSACTIONAL,
    usageType.sizeCategory:   #XXL 
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFCUSTSTLST'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CustSettlmtList
  as select from R_CustSettlmtList

  association [0..*] to I_CustSettlmtListItem          as _ListItem                     on  $projection.CustSettlmtList = _ListItem.CustSettlmtList
  association [0..*] to I_CustSettlmtListPlainLongText as _CustSettlmtListPlainLongText on  $projection.CustSettlmtList = _CustSettlmtListPlainLongText.CustSettlmtList
  association [0..1] to I_SettlmtMgmtAcctgTransfSts    as _SettlmtMgmtAcctgTransfSts    on  $projection.SettlmtMgmtAcctgTransfSts = _SettlmtMgmtAcctgTransfSts.SettlmtMgmtAcctgTransfSts

  /* Bank and Partner Data */
  association [0..*] to I_CustSettlmtListPartner       as _Partner                      on  $projection.CustSettlmtList = _Partner.CustSettlmtList
  association [0..*] to I_CustSettlmtListBankData      as _BankData                     on  $projection.CustSettlmtList = _BankData.CustSettlmtList

  association [0..1] to I_SettlmtDocType               as _SettlmtDocType               on  $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  association [0..1] to I_SettlmtProcessType           as _SettlmtProcessType           on  $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType

  association [0..1] to I_SettlmtApplSts               as _SettlmtApplSts               on  $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts
  association [0..1] to I_SettlmtApplStsGrp            as _SettlmtApplStsGrp            on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt   as _SettlmtApplStsGrpStsAssgmt   on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                        and $projection.SettlmtApplSts    = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts

  /* Organizational Data */
  association [0..1] to I_CompanyCode                  as _CustSettlmtCompanyCode       on  $projection.CustSettlmtCompanyCode = _CustSettlmtCompanyCode.CompanyCode

  /* Partners' Org. Data*/
  association [0..1] to I_CustomerCompany              as _BillToPartyCompany           on  $projection.BillToParty            = _BillToPartyCompany.Customer
                                                                                        and $projection.CustSettlmtCompanyCode = _BillToPartyCompany.CompanyCode
  association [0..1] to I_CustomerCompany              as _PayerPartyCompany            on  $projection.PayerParty             = _PayerPartyCompany.Customer
                                                                                        and $projection.CustSettlmtCompanyCode = _PayerPartyCompany.CompanyCode

  association [0..1] to I_Country                      as _CustSettlmtCoCodeTaxCountry  on  $projection.CustSettlmtCoCodeTaxCountry = _CustSettlmtCoCodeTaxCountry.Country

  association [0..1] to I_SettlmtActivityReasonCode    as _SettlmtDocActivityReason     on  $projection.SettlmtDocActivityReason = _SettlmtDocActivityReason.SettlmtActivityReason
  association [0..1] to I_Address                      as _OneTimeCustomerAddress       on  $projection.OneTimeCustomerAddressID = _OneTimeCustomerAddress.AddressID
  association [0..1] to I_PaymentTerms                 as _CustomerPaymentTerms         on  $projection.CustomerPaymentTerms = _CustomerPaymentTerms.PaymentTerms
  association [0..1] to I_Currency                     as _CustomerPaymentCurrency      on  $projection.CustomerPaymentCurrency = _CustomerPaymentCurrency.Currency

  association [0..1] to I_CustSettlmtList              as _CancldCustSettlmtList        on  $projection.CancldCustSettlmtList = _CancldCustSettlmtList.CustSettlmtList

  association [0..1] to I_SettlmtBusProcVar            as _SettlmtBusProcVar            on  $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar

  //Extension Association
  association [1..1] to E_SettlmtMgmtDoc               as _Extension                    on  $projection.CustSettlmtList = _Extension.SettlmtMgmtDoc

{
  key CustSettlmtList,
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
      PostingDate,
      @ObjectModel.foreignKey.association: '_SettlmtMgmtAcctgTransfSts'
      CustSettlmtListAcctgTransfSts as SettlmtMgmtAcctgTransfSts,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      @ObjectModel.foreignKey.association: '_SettlmtApplSts'
      SettlmtApplSts,
      @ObjectModel.foreignKey.association: '_SettlmtApplStsGrp'
      SettlmtApplStsGrp,

      /* Pricing */
      PricingProcedure              as CustomerPricingProcedure,

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
      CompanyCode                   as CustSettlmtCompanyCode,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,

      /* Administrative Data */
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      /* Currency and Exchange Rate */
      @ObjectModel.foreignKey.association: '_CustSettlmtListCurrency'
      CustSettlmtListCurrency,
      ExchangeRate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListTotGrossAmount as CustomerTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListTotalNetAmount as CustomerTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustSettlmtListTotalTaxAmount as CustomerTotalTaxAmount,

      /* Payment terms and method */
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      PaymentTerms                  as CustomerPaymentTerms,
      CashDiscount1Days             as CustomerCashDiscount1Days,
      CashDiscount2Days             as CustomerCashDiscount2Days,
      NetPaymentDays                as CustomerNetPaymentDays,
      CashDiscount1Percent          as CustomerCashDiscount1Percent,
      CashDiscount2Percent          as CustomerCashDiscount2Percent,
      PaymentMethod                 as CustomerPaymentMethod,

      /* Cash Discount */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtListCurrency'
      CustTotEligibleAmtForCshDisc,

      /* Reversal Information */
      CustSettlmtListIsReversed     as CustSettlmtListIsCanceled,
      @ObjectModel.foreignKey.association: '_CancldCustSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtListStdVH', element: 'CustSettlmtList' } }]
      }
      RvsdCustSettlmtList           as CancldCustSettlmtList,

      AdditionalValueDays           as CustomerAdditionalValueDays,
      FixedValueDate                as CustomerFixedValueDate,

      /* Tax */
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @ObjectModel.foreignKey.association: '_TaxDestinationCountry'
      TaxDestinationCountry,
      IsEUTriangularDeal,
      @ObjectModel.foreignKey.association: '_CustSettlmtCoCodeTaxCountry'
      SettlmtCoCodeTaxCountry       as CustSettlmtCoCodeTaxCountry,

      /* VAT Registration */
      VATRegistration               as CustomerVATRegistration,

      /* Payment */
      StateCentralBankPaymentReason,
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } }]
      }
      CreditControlArea,
      @ObjectModel.foreignKey.association: '_SettlmtDocActivityReason'
      CustSettlmtListActivityReason as SettlmtDocActivityReason,
      PaymentReference,
      @ObjectModel.foreignKey.association: '_CustomerPaymentCurrency'
      CustSettlmtListPaytCurrency   as CustomerPaymentCurrency,
      CustSetlLstPaytCrcyExchRate   as CustomerPaytCurrencyExchRate,

      /* One-time Partners */
      @ObjectModel.foreignKey.association: '_OneTimeCustomerAddress'
      OneTimeCustomerAddressID,

      @ObjectModel.foreignKey.association: '_SupplyingCountry'
      SupplyingCountry,
      FiscalPeriod,
      SettlmtDate,
      @ObjectModel.foreignKey.association: '_CustSettlmtListIncmpltnsRsn'
      CustSettlmtListIncmpltnsRsn,

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
      _ListItem,
      _CustSettlmtListPlainLongText,
      _Partner,
      _BankData,
      _SettlmtDocType,
      _SettlmtDocCat,
      _SettlmtProcessType,
      _LogisticsDataEntryCat,
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
      _SalesArea,
      _CreatedByUser,
      _ExchangeRateType,
      _CustSettlmtListCurrency,
      _CustomerPaymentTerms,
      _CancldCustSettlmtList,
      _TaxDepartureCountry,
      _TaxDestinationCountry,
      _CustSettlmtCoCodeTaxCountry,
      _CreditControlArea,
      _SettlmtDocActivityReason,
      _CustomerPaymentCurrency,
      _OneTimeCustomerAddress,
      _SupplyingCountry,
      _CustSettlmtListIncmpltnsRsn,
      _DocIntrastatRelevance,
      _IntrastatDeclnGdsFlwCat,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtBusProcVar,
      _SettlmtBusProcCat

}
```
