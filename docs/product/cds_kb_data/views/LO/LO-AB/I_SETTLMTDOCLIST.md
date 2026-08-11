---
name: I_SETTLMTDOCLIST
description: "Settlement Document List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLIST')/$value
semantic_en: "Settlement Document List"
semantic_vi: "Settlement Document List — CDS view cơ bản dựa trên R_SettlmtDocList."
keywords:
  - "Settlement Document List"
  - "settlement"
  - "document"
  - "list"
  - "settlmt"
  - "type"
  - "process"
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCLIST

**Settlement Document List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocList` | ✓ | |  |  | `CHAR(10)` | Document Number of Settlement Document List |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `SettlmtDocListCat` |  | |  |  | `CHAR(1)` | Settlement Management Document Category |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtMgmtAcctgTransfSts` |  | |  | `SettlmtDocListAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
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
| `SettlmtDocListIsCanceled` |  | |  | `SettlmtDocListIsReversed` | `CHAR(1)` | Settlement Document List Is Reversed |
| `CancldSettlmtDocList` |  | |  | `RvsdSettlmtDocList` | `CHAR(10)` | Reversed Document |
| `SettlmtDocListAddlValDays` |  | |  | `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `SettlmtDocListFxdValDte` |  | |  | `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SettlmtDocListCoCodeTaxCountry` |  | |  | `SettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` |  | |  | `SettlmtDocListActivityReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
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
| `_ListItem` | | ✓ | | | | |
| `_SettlmtDocListPlainLongText` | | ✓ | | | | |
| `_SettlmtMgmtAcctgTransfSts` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |
| `_SettlmtProcessType` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_BankData` | | ✓ | | | | |
| `_CancldSettlmtDocList` | | ✓ | | | | |
| `_SettlmtDocListCoCodeTxCntry` | | ✓ | | | | |
| `_SettlmtDocActivityReason` | | ✓ | | | | |
| `_OneTimeSettlmtPartAddr` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_SettlmtDocListCat` | | ✓ | | | | |
| `_LogisticsDataEntryCat` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_AlternativeInvoicingParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_InvoicingPartyCompany` | | ✓ | | | | |
| `_PayeePartyCompany` | | ✓ | | | | |
| `_AltvInvoicingPartyCompany` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_PayerPartyCompany` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesArea` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_SettlmtDocListCurrency` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_SupplyingCountry` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_TaxDestinationCountry` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_SettlmtDocListPaymentCurrency` | | ✓ | | | | |
| `_SettlmtDocListIncmpltnsRsn` | | ✓ | | | | |
| `_DocIntrastatRelevance` | | ✓ | | | | |
| `_IntrastatDeclnGdsFlwCat` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ListItem` | `I_SettlmtDocListItem` | [0..*] |
| `_SettlmtDocListPlainLongText` | `I_SettlmtDocListPlainLongText` | [0..*] |
| `_SettlmtMgmtAcctgTransfSts` | `I_SettlmtMgmtAcctgTransfSts` | [0..1] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_Partner` | `I_SettlmtDocListPartner` | [0..*] |
| `_BankData` | `I_SettlmtDocListBankData` | [0..*] |
| `_CancldSettlmtDocList` | `I_SettlmtDocList` | [0..1] |
| `_SettlmtDocListCoCodeTxCntry` | `I_Country` | [0..1] |
| `_SettlmtDocActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_OneTimeSettlmtPartAddr` | `I_Address` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLIST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLIST')/$value)*

```abap
@EndUserText.label: 'Settlement Document List'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_BankData', '_OneTimeSettlmtPartAddr', '_CreatedByUser' ]
    }
@ObjectModel: {
    representativeKey:        'SettlmtDocList',
    compositionRoot: true,
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities :   [ #ANALYTICAL_DIMENSION,
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
@Analytics.technicalName: 'IWLFSMTDOCLST'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDocList
  as select from R_SettlmtDocList

  association [0..*] to I_SettlmtDocListItem          as _ListItem                    on  $projection.SettlmtDocList = _ListItem.SettlmtDocList
  association [0..*] to I_SettlmtDocListPlainLongText as _SettlmtDocListPlainLongText on  $projection.SettlmtDocList = _SettlmtDocListPlainLongText.SettlmtDocList
  association [0..1] to I_SettlmtMgmtAcctgTransfSts   as _SettlmtMgmtAcctgTransfSts   on  $projection.SettlmtMgmtAcctgTransfSts = _SettlmtMgmtAcctgTransfSts.SettlmtMgmtAcctgTransfSts

  association [0..1] to I_SettlmtDocType              as _SettlmtDocType              on  $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  association [0..1] to I_SettlmtProcessType          as _SettlmtProcessType          on  $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType


  association [0..1] to I_SettlmtApplSts              as _SettlmtApplSts              on  $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts
  association [0..1] to I_SettlmtApplStsGrp           as _SettlmtApplStsGrp           on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt  as _SettlmtApplStsGrpStsAssgmt  on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                      and $projection.SettlmtApplSts    = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts

  association [0..*] to I_SettlmtDocListPartner       as _Partner                     on  $projection.SettlmtDocList = _Partner.SettlmtDocList
  association [0..*] to I_SettlmtDocListBankData      as _BankData                    on  $projection.SettlmtDocList = _BankData.SettlmtDocList

  association [0..1] to I_SettlmtDocList              as _CancldSettlmtDocList        on  $projection.CancldSettlmtDocList = _CancldSettlmtDocList.SettlmtDocList
  association [0..1] to I_Country                     as _SettlmtDocListCoCodeTxCntry on  $projection.SettlmtDocListCoCodeTaxCountry = _SettlmtDocListCoCodeTxCntry.Country
  association [0..1] to I_SettlmtActivityReasonCode   as _SettlmtDocActivityReason    on  $projection.SettlmtDocActivityReason = _SettlmtDocActivityReason.SettlmtActivityReason
  association [0..1] to I_Address                     as _OneTimeSettlmtPartAddr      on  $projection.OneTimeSettlmtPartAddrID = _OneTimeSettlmtPartAddr.AddressID
  association [0..1] to I_SettlmtBusProcVar           as _SettlmtBusProcVar           on  $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar

  //Extension Association
  association [1..1] to E_SettlmtMgmtDoc              as _Extension                   on  $projection.SettlmtDocList = _Extension.SettlmtMgmtDoc

{

  key SettlmtDocList,
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
      @ObjectModel.foreignKey.association: '_SettlmtDocListCat'
      SettlmtDocListCat,
      @ObjectModel.foreignKey.association: '_LogisticsDataEntryCat'
      LogisticsDataEntryCat,
      @ObjectModel.foreignKey.association: '_SettlmtMgmtAcctgTransfSts'
      SettlmtDocListAcctgTransfSts as SettlmtMgmtAcctgTransfSts,
      PostingDate,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      @ObjectModel.foreignKey.association: '_SettlmtApplSts'
      SettlmtApplSts,
      @ObjectModel.foreignKey.association: '_SettlmtApplStsGrp'
      SettlmtApplStsGrp,

      /* Pricing */
      PricingProcedure,

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
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup,
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
      @ObjectModel.foreignKey.association: '_SettlmtDocListCurrency'
      SettlmtDocListCurrency,
      ExchangeRate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount Fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      SettlmtDocListTotalTaxAmount,

      /* Payment terms and method */
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      NetPaymentDays,
      CashDiscount1Percent,
      CashDiscount2Percent,
      PaymentMethod,

      /* Cash Discount */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SettlmtDocListCurrency'
      EligibleAmountForCashDiscount,

      /* Reversal Information */
      SettlmtDocListIsReversed     as SettlmtDocListIsCanceled,
      @ObjectModel.foreignKey.association: '_CancldSettlmtDocList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocListStdVH', element: 'SettlmtDocList' } }]
      }
      RvsdSettlmtDocList           as CancldSettlmtDocList,

      AdditionalValueDays          as SettlmtDocListAddlValDays,
      FixedValueDate               as SettlmtDocListFxdValDte,

      /* Tax */
      @ObjectModel.foreignKey.association: '_SupplyingCountry'
      SupplyingCountry,
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @ObjectModel.foreignKey.association: '_TaxDestinationCountry'
      TaxDestinationCountry,
      IsEUTriangularDeal,
      @ObjectModel.foreignKey.association: '_SettlmtDocListCoCodeTxCntry'
      SettlmtCoCodeTaxCountry      as SettlmtDocListCoCodeTaxCountry,

      /* VAT Registration */
      VATRegistration,

      /* Payment */
      StateCentralBankPaymentReason,
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } }]
      }
      CreditControlArea,
      @ObjectModel.foreignKey.association: '_SettlmtDocActivityReason'
      SettlmtDocListActivityReason as SettlmtDocActivityReason,
      PaymentReference,
      @ObjectModel.foreignKey.association: '_SettlmtDocListPaymentCurrency'
      SettlmtDocListPaymentCurrency,
      SettlmtDocListPaytCrcyExchRate,

      /* One-time Partners */
      @ObjectModel.foreignKey.association: '_OneTimeSettlmtPartAddr'
      OneTimeSettlmtPartAddrID,

      FiscalPeriod,
      SettlmtDate,
      @ObjectModel.foreignKey.association: '_SettlmtDocListIncmpltnsRsn'
      SettlmtDocListIncmpltnsRsn,

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
      SettlmtDocListType,


      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ListItem,
      _SettlmtDocListPlainLongText,
      _Partner,
      _BankData,
      _SettlmtDocType,
      _SettlmtDocCat,
      _SettlmtProcessType,
      _SettlmtDocListCat,
      _LogisticsDataEntryCat,
      _SettlmtMgmtAcctgTransfSts,
      _SettlmtApplSts,
      _SettlmtApplStsGrp,
      _SettlmtApplStsGrpStsAssgmt,
      _InvoicingParty,
      _PayeeParty,
      _AlternativeInvoicingParty,
      _BillToParty,
      _PayerParty,
      _InvoicingPartyCompany,
      _PayeePartyCompany,
      _AltvInvoicingPartyCompany,
      _BillToPartyCompany,
      _PayerPartyCompany,
      _CompanyCode,
      _PurchasingOrganization,
      _PurchasingGroup,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesArea,
      _CreatedByUser,
      _SettlmtDocListCurrency,
      _ExchangeRateType,
      _PaymentTerms,
      _CancldSettlmtDocList,
      _SupplyingCountry,
      _TaxDepartureCountry,
      _TaxDestinationCountry,
      _SettlmtDocListCoCodeTxCntry,
      _CreditControlArea,
      _SettlmtDocActivityReason,
      _SettlmtDocListPaymentCurrency,
      _OneTimeSettlmtPartAddr,
      _SettlmtDocListIncmpltnsRsn,
      _DocIntrastatRelevance,
      _IntrastatDeclnGdsFlwCat,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtBusProcVar,
      _SettlmtBusProcCat

}
```
