---
name: I_SUPLRSETTLMTLIST
description: "Supplier Settlement List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLIST')/$value
semantic_en: "Supplier Settlement List"
semantic_vi: "Supplier Settlement List — CDS view cơ bản dựa trên R_SuplrSettlmtList."
keywords:
  - "Supplier Settlement List"
  - "supplier"
  - "settlement"
  - "list"
  - "suplr"
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
  - supplier
---
# I_SUPLRSETTLMTLIST

**Supplier Settlement List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmtList` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement List |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SettlmtMgmtAcctgTransfSts` |  | |  | `SuplrSetlLstAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `SupplierPricingProcedure` |  | |  | `PricingProcedure` | `CHAR(6)` | Pricing Procedure |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `SuplrSettlmtCompanyCode` |  | |  | `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `SuplrSettlmtListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `SupplierTotalGrossAmount` |  | |  | `SuplrSettlmtListTotGrossAmount` | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `SupplierTotalNetAmount` |  | |  | `SuplrSettlmtListTotalNetAmount` | `CURR(15)` | Net Settlement Amount in Document Currency |
| `SupplierTotalTaxAmount` |  | |  | `SuplrSettlmtListTotalTaxAmount` | `CURR(13)` | Total Tax Amount in Document Currency |
| `SupplierPaymentTerms` |  | |  | `PaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `SupplierCashDiscount1Days` |  | |  | `CashDiscount1Days` | `DEC(3)` | Cash Discount Days 1 |
| `SupplierCashDiscount2Days` |  | |  | `CashDiscount2Days` | `DEC(3)` | Cash Discount Days 2 |
| `SupplierNetPaymentDays` |  | |  | `NetPaymentDays` | `DEC(3)` | Net Payment Terms Period |
| `SupplierCashDiscount1Percent` |  | |  | `CashDiscount1Percent` | `DEC(5)` | Cash Discount Percentage 1 |
| `SupplierCashDiscount2Percent` |  | |  | `CashDiscount2Percent` | `DEC(5)` | Cash Discount Percentage 2 |
| `SupplierPaymentMethod` |  | |  | `PaymentMethod` | `CHAR(1)` | Payment Method |
| `SuplrTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `SuplrSettlmtListIsCanceled` |  | |  | `SuplrSettlmtListIsReversed` | `CHAR(1)` | Supplier Settlement List Is Reversed |
| `CancldSuplrSettlmtList` |  | |  | `RvsdSuplrSettlmtList` | `CHAR(10)` | Reversed Document |
| `SupplierAdditionalValueDays` |  | |  | `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `SupplierFixedValueDate` |  | |  | `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SuplrSettlmtCoCodeTaxCountry` |  | |  | `SettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `SupplierVATRegistration` |  | |  | `VATRegistration` | `CHAR(20)` | VAT Registration Number |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` |  | |  | `SuplrSettlmtListActyReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `SupplierPaymentCurrency` |  | |  | `SuplrSettlmtListPaytCurrency` | `CUKY(5)` | Payment Currency |
| `SupplierPaytCurrencyExchRate` |  | |  | `SuplrSetlLstPaytCrcyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `OneTimeSupplierAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Supplier |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `SuplrSettlmtListIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `DocIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `IntrastatDeclnGdsFlwCat` |  | |  |  | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `SettlmtBusProcVar` |  | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtBusProcCat` |  | |  |  | `CHAR(2)` | Use Case Type |
| `_ListItem` | | ✓ | | | | |
| `_SuplrSettlmtListPlainLongText` | | ✓ | | | | |
| `_SettlmtMgmtAcctgTransfSts` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |
| `_SettlmtProcessType` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_BankData` | | ✓ | | | | |
| `_InvoicingPartyCompany` | | ✓ | | | | |
| `_PayeePartyCompany` | | ✓ | | | | |
| `_AltvInvoicingPartyCompany` | | ✓ | | | | |
| `_SuplrSettlmtCompanyCode` | | ✓ | | | | |
| `_SupplierPaymentTerms` | | ✓ | | | | |
| `_CancldSuplrSettlmtList` | | ✓ | | | | |
| `_SuplrSettlmtCoCodeTaxCountry` | | ✓ | | | | |
| `_SettlmtDocActivityReason` | | ✓ | | | | |
| `_SupplierPaymentCurrency` | | ✓ | | | | |
| `_OneTimeSupplierAddress` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_LogisticsDataEntryCat` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_AlternativeInvoicingParty` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesArea` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_SuplrSettlmtListCurrency` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_SupplyingCountry` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_TaxDestinationCountry` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_SuplrSettlmtListIncmpltnsRsn` | | ✓ | | | | |
| `_DocIntrastatRelevance` | | ✓ | | | | |
| `_IntrastatDeclnGdsFlwCat` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ListItem` | `I_SuplrSettlmtListItem` | [0..*] |
| `_SuplrSettlmtListPlainLongText` | `I_SuplrSettlmtListPlainLongTxt` | [0..*] |
| `_SettlmtMgmtAcctgTransfSts` | `I_SettlmtMgmtAcctgTransfSts` | [0..1] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_Partner` | `I_SuplrSettlmtListPartner` | [0..*] |
| `_BankData` | `I_SuplrSettlmtListBankData` | [0..*] |
| `_InvoicingPartyCompany` | `I_SupplierCompany` | [0..1] |
| `_PayeePartyCompany` | `I_SupplierCompany` | [0..1] |
| `_AltvInvoicingPartyCompany` | `I_SupplierCompany` | [0..1] |
| `_SuplrSettlmtCompanyCode` | `I_CompanyCode` | [0..1] |
| `_SupplierPaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_CancldSuplrSettlmtList` | `I_SuplrSettlmtList` | [0..1] |
| `_SuplrSettlmtCoCodeTaxCountry` | `I_Country` | [0..1] |
| `_SettlmtDocActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_SupplierPaymentCurrency` | `I_Currency` | [0..1] |
| `_OneTimeSupplierAddress` | `I_Address` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLIST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLIST')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement List'
@AccessControl: {
    authorizationCheck:       #MANDATORY,
    personalData.blocking:    #('TRANSACTIONAL_DATA'),
    privilegedAssociations:   [ '_BankData', '_OneTimeSupplierAddress', '_CreatedByUser' ]
    }
@ObjectModel: {
    representativeKey:        'SuplrSettlmtList',
    compositionRoot: true,
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities :   [ #CDS_MODELING_ASSOCIATION_TARGET,
                                #SQL_DATA_SOURCE,
                                #CDS_MODELING_DATA_SOURCE,
                                #ANALYTICAL_DIMENSION ],
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
@Analytics.technicalName: 'IWLFSUPLRSTLST'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SuplrSettlmtList
  as select from R_SuplrSettlmtList

  association [0..*] to I_SuplrSettlmtListItem         as _ListItem                      on  $projection.SuplrSettlmtList = _ListItem.SuplrSettlmtList
  association [0..*] to I_SuplrSettlmtListPlainLongTxt as _SuplrSettlmtListPlainLongText on  $projection.SuplrSettlmtList = _SuplrSettlmtListPlainLongText.SuplrSettlmtList
  association [0..1] to I_SettlmtMgmtAcctgTransfSts    as _SettlmtMgmtAcctgTransfSts     on  $projection.SettlmtMgmtAcctgTransfSts = _SettlmtMgmtAcctgTransfSts.SettlmtMgmtAcctgTransfSts

  association [0..1] to I_SettlmtDocType               as _SettlmtDocType                on  $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  association [0..1] to I_SettlmtProcessType           as _SettlmtProcessType            on  $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType

  association [0..1] to I_SettlmtApplSts               as _SettlmtApplSts                on  $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts
  association [0..1] to I_SettlmtApplStsGrp            as _SettlmtApplStsGrp             on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt   as _SettlmtApplStsGrpStsAssgmt    on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                         and $projection.SettlmtApplSts    = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts

  /* Bank and Partner Data */
  association [0..*] to I_SuplrSettlmtListPartner      as _Partner                       on  $projection.SuplrSettlmtList = _Partner.SuplrSettlmtList
  association [0..*] to I_SuplrSettlmtListBankData     as _BankData                      on  $projection.SuplrSettlmtList = _BankData.SuplrSettlmtList

  /* Partners's Org. Data */
  association [0..1] to I_SupplierCompany              as _InvoicingPartyCompany         on  $projection.InvoicingParty          = _InvoicingPartyCompany.Supplier
                                                                                         and $projection.SuplrSettlmtCompanyCode = _InvoicingPartyCompany.CompanyCode
  association [0..1] to I_SupplierCompany              as _PayeePartyCompany             on  $projection.PayeeParty              = _PayeePartyCompany.Supplier
                                                                                         and $projection.SuplrSettlmtCompanyCode = _PayeePartyCompany.CompanyCode
  association [0..1] to I_SupplierCompany              as _AltvInvoicingPartyCompany     on  $projection.AlternativeInvoicingParty = _AltvInvoicingPartyCompany.Supplier
                                                                                         and $projection.SuplrSettlmtCompanyCode   = _AltvInvoicingPartyCompany.CompanyCode

  association [0..1] to I_CompanyCode                  as _SuplrSettlmtCompanyCode       on  $projection.SuplrSettlmtCompanyCode = _SuplrSettlmtCompanyCode.CompanyCode

  association [0..1] to I_PaymentTerms                 as _SupplierPaymentTerms          on  $projection.SupplierPaymentTerms = _SupplierPaymentTerms.PaymentTerms
  association [0..1] to I_SuplrSettlmtList             as _CancldSuplrSettlmtList        on  $projection.CancldSuplrSettlmtList = _CancldSuplrSettlmtList.SuplrSettlmtList
  association [0..1] to I_Country                      as _SuplrSettlmtCoCodeTaxCountry  on  $projection.SuplrSettlmtCoCodeTaxCountry = _SuplrSettlmtCoCodeTaxCountry.Country
  association [0..1] to I_SettlmtActivityReasonCode    as _SettlmtDocActivityReason      on  $projection.SettlmtDocActivityReason = _SettlmtDocActivityReason.SettlmtActivityReason
  association [0..1] to I_Currency                     as _SupplierPaymentCurrency       on  $projection.SupplierPaymentCurrency = _SupplierPaymentCurrency.Currency
  association [0..1] to I_Address                      as _OneTimeSupplierAddress        on  $projection.OneTimeSupplierAddressID = _OneTimeSupplierAddress.AddressID
  association [0..1] to I_SettlmtBusProcVar            as _SettlmtBusProcVar             on  $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar

  //Extension Association
  association [1..1] to E_SettlmtMgmtDoc               as _Extension                     on  $projection.SuplrSettlmtList = _Extension.SettlmtMgmtDoc

{
  key SuplrSettlmtList,
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
      SuplrSetlLstAcctgTransfSts     as SettlmtMgmtAcctgTransfSts,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      @ObjectModel.foreignKey.association: '_SettlmtApplSts'
      SettlmtApplSts,
      @ObjectModel.foreignKey.association: '_SettlmtApplStsGrp'
      SettlmtApplStsGrp,

      /* Pricing */
      PricingProcedure               as SupplierPricingProcedure,

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
      CompanyCode                    as SuplrSettlmtCompanyCode,
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

      /* Currency and Exchange Rates */
      @ObjectModel.foreignKey.association: '_SuplrSettlmtListCurrency'
      SuplrSettlmtListCurrency,
      ExchangeRate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      SuplrSettlmtListTotGrossAmount as SupplierTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      SuplrSettlmtListTotalNetAmount as SupplierTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      SuplrSettlmtListTotalTaxAmount as SupplierTotalTaxAmount,

      /* Payment terms and Methods */
      @ObjectModel.foreignKey.association: '_SupplierPaymentTerms'
      PaymentTerms                   as SupplierPaymentTerms,
      CashDiscount1Days              as SupplierCashDiscount1Days,
      CashDiscount2Days              as SupplierCashDiscount2Days,
      NetPaymentDays                 as SupplierNetPaymentDays,
      CashDiscount1Percent           as SupplierCashDiscount1Percent,
      CashDiscount2Percent           as SupplierCashDiscount2Percent,
      PaymentMethod                  as SupplierPaymentMethod,

      /* Cash Discounts */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtListCurrency'
      SuplrTotEligibleAmtForCshDisc,

      /* Reversal Information */
      SuplrSettlmtListIsReversed     as SuplrSettlmtListIsCanceled,
      @ObjectModel.foreignKey.association: '_CancldSuplrSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtListStdVH', element: 'SuplrSettlmtList' } }]
      }
      RvsdSuplrSettlmtList           as CancldSuplrSettlmtList,

      AdditionalValueDays            as SupplierAdditionalValueDays,
      FixedValueDate                 as SupplierFixedValueDate,

      /* Tax */
      @ObjectModel.foreignKey.association: '_SupplyingCountry'
      SupplyingCountry,
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @ObjectModel.foreignKey.association: '_TaxDestinationCountry'
      TaxDestinationCountry,
      IsEUTriangularDeal,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtCoCodeTaxCountry'
      SettlmtCoCodeTaxCountry        as SuplrSettlmtCoCodeTaxCountry,

      /* VAT Registration */
      VATRegistration                as SupplierVATRegistration,

      /* Payment */
      StateCentralBankPaymentReason,
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } }]
      }
      CreditControlArea,
      @ObjectModel.foreignKey.association: '_SettlmtDocActivityReason'
      SuplrSettlmtListActyReason     as SettlmtDocActivityReason,
      PaymentReference,
      @ObjectModel.foreignKey.association: '_SupplierPaymentCurrency'
      SuplrSettlmtListPaytCurrency   as SupplierPaymentCurrency,
      SuplrSetlLstPaytCrcyExchRate   as SupplierPaytCurrencyExchRate,
      SEPAMandate,

      /* One-time Partners */
      @ObjectModel.foreignKey.association: '_OneTimeSupplierAddress'
      OneTimeSupplierAddressID,

      FiscalPeriod,
      SettlmtDate,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtListIncmpltnsRsn'
      SuplrSettlmtListIncmpltnsRsn,

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


      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ListItem,
      _SuplrSettlmtListPlainLongText,
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
      _InvoicingParty,
      _PayeeParty,
      _AlternativeInvoicingParty,
      _InvoicingPartyCompany,
      _PayeePartyCompany,
      _AltvInvoicingPartyCompany,
      _SuplrSettlmtCompanyCode,
      _PurchasingOrganization,
      _PurchasingGroup,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesArea,
      _CreatedByUser,
      _SuplrSettlmtListCurrency,
      _ExchangeRateType,
      _SupplierPaymentTerms,
      _CancldSuplrSettlmtList,
      _SupplyingCountry,
      _TaxDepartureCountry,
      _TaxDestinationCountry,
      _SuplrSettlmtCoCodeTaxCountry,
      _CreditControlArea,
      _SettlmtDocActivityReason,
      _SupplierPaymentCurrency,
      _OneTimeSupplierAddress,
      _SuplrSettlmtListIncmpltnsRsn,
      _DocIntrastatRelevance,
      _IntrastatDeclnGdsFlwCat,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtBusProcVar,
      _SettlmtBusProcCat

}
```
