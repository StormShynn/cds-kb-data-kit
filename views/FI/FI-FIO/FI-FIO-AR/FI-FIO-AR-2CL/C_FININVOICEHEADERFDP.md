---
name: C_FININVOICEHEADERFDP
description: Corr Type SAP21 Invc Hdr
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEHEADERFDP')/$value
semantic_en: Corr Type SAP21 Invc Hdr
semantic_vi: Corr Type SAP21 Invc Hdr — CDS view tiêu dùng dựa trên I_JournalEntry.
keywords:
  - corr
  - type
  - sap21
  - invc
  - hdr
  - company
  - code
  - fiscal
  - year
  - accounting
  - document
  - date
tags:
  - FI
  - bo:billingdocument
  - component:FI-FIO-AR-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-AR
  - FI-FIO-AR-2CL
  - lob:finance
---
# C_FININVOICEHEADERFDP

**Corr Type SAP21 Invc Hdr**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEHEADERFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `AccountingDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AbsoluteExchangeRate` |  | |  |  | `DEC(9)` | Absolute Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `OriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Object key |
| `Reference1InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 1 in Document Header |
| `Reference2InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 2 in Document Header |
| `TaxIsCalculatedAutomatically` |  | |  |  | `CHAR(1)` | Tax Is Automatically Calculated |
| `TaxBaseAmountIsNetAmount` |  | |  |  | `CHAR(1)` | Tax Base Amount is Net Amount |
| `TaxReportingDate` |  | |  |  | `DATS(8)` | Tax Reporting Date |
| `TaxFulfillmentDate` |  | |  |  | `DATS(8)` | Tax Fulfillment Date |
| `TaxExchangeRate` |  | |  | `cast( TaxExchangeRate as wlf_txkrs_no_cnext )` | `DEC(9)` | Tax Conversion Rate (Not Converted) |
| `IsDiscountDocument` |  | |  |  | `CHAR(1)` | Indicator: entry represents a discount document |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Ledger Group |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Document Reference ID |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reverse Document |
| `ReverseDocumentFiscalYear` |  | |  |  | `NUMC(4)` | Reverse Document Fiscal Year |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReason` |  | |  |  | `CHAR(2)` | Reason for Reversal or Inverse Posting |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal: Reference Organizations of Document to Be Reversed |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal: Reference Document No. of Document to Be Reversed |
| `TransactionCode` |  | |  |  | `CHAR(20)` | Transaction Code |
| `InvoiceHasMultiplePaymentTerms` |  | |  | `cast( ' ' as cimic_multiple_payment_terms )` | `CHAR(1)` | Invoice has Multiple Payment Terms |
| `NetAmountInCoCodeCurrency` |  | |  | `cast( '0' as wrbtr )` | `CURR(23)` | Amount in document currency |
| `NetAmountInTransacCurrency` |  | |  | `cast( '0' as wrbtr )` | `CURR(23)` | Amount in document currency |
| `InvoiceAlreadyPaidAmtInCCCrcy` |  | |  | `cast( '0' as wrbtr )` | `CURR(23)` | Amount in document currency |
| `TotalAmountInCoCodeCrcy` |  | |  | `cast( '0' as wrbtr)` | `CURR(23)` | Amount in document currency |
| `TotalAmountInTransactionCrcy` |  | |  | `cast( '0' as wrbtr)` | `CURR(23)` | Amount in document currency |
| `OpenAmountInCompanyCodeCrcy` |  | |  | `cast( '0' as wrbtr)` | `CURR(23)` | Amount in document currency |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | | `_CompanyCode` | `ControllingAreaName` | `CHAR(25)` | Controlling Area Name |
| `_Item` | | ✓ | | | | |
| `_ARItem` | | ✓ | | | | |
| `_GLItem` | | ✓ | | | | |
| `_RelatedAcctgDoc` | | ✓ | | | | |
| `_ODN` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_TaxItem` | | ✓ | | | | |
| `_HeaderNote` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `C_FinInvoiceItemFDP` | [1..*] |
| `_ARItem` | `C_FinInvoiceItemFDP` | [1..1] |
| `_GLItem` | `C_FinInvoiceItemFDP` | [1..*] |
| `_RelatedAcctgDoc` | `C_FinInvcRelatedAcctgDocFDP` | [1..*] |
| `_ODN` | `C_FinInvoiceODNFDP` | [1..*] |
| `_CompanyCode` | `C_FinInvoiceCompanyCodeFDP` | [1..1] |
| `_TaxItem` | `C_FinInvoiceTaxItemFDP` | [1..*] |
| `_HeaderNote` | `C_FinInvoiceHeaderNoteFDP` | [1..*] |
| `_AccountingDocumentTypeText` | `I_AccountingDocumentTypeText` | [0..*] |
| `_ReferenceDocumentTypeText` | `I_ReferenceDocumentTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEHEADERFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEHEADERFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@VDM.viewType: #CONSUMPTION

@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [ #OUTPUT_FORM_DATA_PROVIDER ]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Corr Type SAP21 Invc Hdr'
define view entity C_FinInvoiceHeaderFDP
  as select from I_JournalEntry

  association [1..*] to C_FinInvoiceItemFDP          as _Item                       on  $projection.AccountingDocument = _Item.AccountingDocument
                                                                                    and $projection.CompanyCode        = _Item.CompanyCode
                                                                                    and $projection.FiscalYear         = _Item.FiscalYear

  association [1..1] to C_FinInvoiceItemFDP          as _ARItem                     on  $projection.AccountingDocument = _ARItem.AccountingDocument
                                                                                    and $projection.CompanyCode        = _ARItem.CompanyCode
                                                                                    and $projection.FiscalYear         = _ARItem.FiscalYear
                                                                                    and _ARItem.FinancialAccountType   = 'D'

  association [1..*] to C_FinInvoiceItemFDP          as _GLItem                     on  $projection.AccountingDocument = _GLItem.AccountingDocument
                                                                                    and $projection.CompanyCode        = _GLItem.CompanyCode
                                                                                    and $projection.FiscalYear         = _GLItem.FiscalYear
                                                                                    and _GLItem.FinancialAccountType   = 'S'

  association [1..*] to C_FinInvcRelatedAcctgDocFDP  as _RelatedAcctgDoc            on  $projection.AccountingDocument = _RelatedAcctgDoc.InvoiceReference
                                                                                    and $projection.CompanyCode        = _RelatedAcctgDoc.CompanyCode
                                                                                    and $projection.FiscalYear         = _RelatedAcctgDoc.InvoiceReferenceFiscalYear

  association [1..*] to C_FinInvoiceODNFDP           as _ODN                        on  $projection.AccountingDocument = _ODN.AccountingDocument
                                                                                    and $projection.CompanyCode        = _ODN.CompanyCode
                                                                                    and $projection.FiscalYear         = _ODN.FiscalYear

  association [1..1] to C_FinInvoiceCompanyCodeFDP   as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..*] to C_FinInvoiceTaxItemFDP       as _TaxItem                    on  $projection.AccountingDocument = _TaxItem.AccountingDocument
                                                                                    and $projection.CompanyCode        = _TaxItem.CompanyCode
                                                                                    and $projection.FiscalYear         = _TaxItem.FiscalYear

  association [1..*] to C_FinInvoiceHeaderNoteFDP    as _HeaderNote                 on  $projection.AccountingDocument = _HeaderNote.AccountingDocument
                                                                                    and $projection.CompanyCode        = _HeaderNote.CompanyCode
                                                                                    and $projection.FiscalYear         = _HeaderNote.FiscalYear

  association [0..*] to I_AccountingDocumentTypeText as _AccountingDocumentTypeText on  $projection.AccountingDocumentType = _AccountingDocumentTypeText.AccountingDocumentType

  association [0..*] to I_ReferenceDocumentTypeText  as _ReferenceDocumentTypeText  on  $projection.ReferenceDocumentType = _ReferenceDocumentTypeText.ReferenceDocumentType

  //  association [1..1] to I_CurrencyTypesCorrespnc as _CurrencyTypesCorrespnc         on  $projection.CompanyCode       = _CurrencyTypesCorrespnc.CompanyCode
  //                                                                                    and $projection.SourceLedger      = _CurrencyTypesCorrespnc.Ledger

  //  association [0..*] to C_CorrespondenceHeaderNote   as _CorrespondenceHeaderNote   on  $projection.CompanyCode = _CorrespondenceHeaderNote.CompanyCode and
  //                                                                                        $projection.FiscalYear = _CorrespondenceHeaderNote.FiscalYear and
  //                                                                                        $projection.AccountingDocument = _CorrespondenceHeaderNote.AccountingDocument
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
  key CompanyCode,
  key FiscalYear,
  key AccountingDocument,
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_AccountingDocumentTypeStdVH',
                   element: 'AccountingDocumentType' }
      }]
      AccountingDocumentType,
      _AccountingDocumentTypeText[1:Language = $session.system_language].AccountingDocumentTypeName,
      DocumentDate,
      PostingDate,
      FiscalPeriod,
      AccountingDocumentHeaderText,
      TransactionCurrency,
      CompanyCodeCurrency,
      AbsoluteExchangeRate,
      ExchangeRateDate,
      ExchangeRateType,

      ReferenceDocumentType,
      _ReferenceDocumentTypeText[1:Language = $session.system_language].ReferenceDocumentTypeName,
      OriginalReferenceDocument,
      Reference1InDocumentHeader,
      Reference2InDocumentHeader,

      TaxIsCalculatedAutomatically,
      TaxBaseAmountIsNetAmount,
      TaxReportingDate,
      TaxFulfillmentDate,
      cast( TaxExchangeRate as wlf_txkrs_no_cnext ) as TaxExchangeRate,

      IsDiscountDocument,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      Ledger,
      LedgerGroup,
      DocumentReferenceID,
      ReverseDocument,
      ReverseDocumentFiscalYear,
      IsReversal,
      IsReversed,
      ReversalReason,
      ReversalReferenceDocumentCntxt,
      ReversalReferenceDocument,
      TransactionCode,

      cast( ' ' as cimic_multiple_payment_terms )   as InvoiceHasMultiplePaymentTerms,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( '0' as wrbtr )                          as NetAmountInCoCodeCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast( '0' as wrbtr )                          as NetAmountInTransacCurrency,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( '0' as wrbtr )                          as InvoiceAlreadyPaidAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( '0' as wrbtr)                           as TotalAmountInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast( '0' as wrbtr)                           as TotalAmountInTransactionCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( '0' as wrbtr)                           as OpenAmountInCompanyCodeCrcy,

      //      AccountingDocumentCreationDate,
      //      CreationTime,
      //      LastManualChangeDate,
      //      LastAutomaticChangeDate,
      //      LastChangeDate,
      //
      //      AccountingDocCreatedByUser,
      //      IntercompanyTransaction,
      //
      //      RecurringAccountingDocument,
      //      AccountingDocumentCategory,
      //      BusinessTransactionType,
      //      BatchInputSession,
      //      FinancialManagementArea,
      //      AdditionalCurrency1,
      //      AdditionalCurrency2,
      //      ReversalIsPlanned,
      //      PlannedReversalDate,
      //      SourceCompanyCode,
      //      LogicalSystem,
      //      ReferenceDocumentLogicalSystem,
      //      ParkingDate,
      //      ParkingTime,
      //      Branch,
      //      NmbrOfPages,
      //      InvoiceReceiptDate,
      //      cast(AlternativeReferenceDocument as fis_xblnr_alt_alpha) as AlternativeReferenceDocument,
      //      AccountingDocumentClass,
      //      SenderLogicalSystem,
      //      SenderCompanyCode,
      //      SenderAccountingDocument,
      //      SenderFiscalYear,
      //      LatePaymentReason,
      //      SalesDocumentCondition,
      //      Ledger as SourceLedger,

      _CompanyCode.ControllingArea,
      _CompanyCode.ControllingAreaName,

      //Associations
      _Item,
      _ARItem,
      _GLItem,
      _RelatedAcctgDoc,
      _ODN,
      _CompanyCode,
      _TaxItem,
      _HeaderNote
      //      _CurrencyTypesCorrespnc,

      //      @ObjectModel.filter.enabled: false
      //      _CorrespondenceHeaderNote
}
```
