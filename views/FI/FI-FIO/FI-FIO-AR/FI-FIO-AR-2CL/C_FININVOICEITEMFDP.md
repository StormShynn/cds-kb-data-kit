---
name: C_FININVOICEITEMFDP
description: "Corr Type SAP21 Invc itm"
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEITEMFDP')/$value
semantic_en: "Corr Type SAP21 Invc itm"
semantic_vi: "Corr Type SAP21 Invc itm — CDS view tiêu dùng dựa trên I_OperationalAcctgDocItem."
keywords:
  - "Correspondence - Invoice document - items"
  - "corr"
  - "type"
  - "sap21"
  - "invc"
  - "itm"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "item"
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
# C_FININVOICEITEMFDP

**Corr Type SAP21 Invc itm**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEITEMFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentItem` | ✓ | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentItemType` |  | |  |  | `CHAR(1)` | Identification of the Line Item |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerFullName` |  | | `_Customer` | `CustomerFullName` | `CHAR(220)` | Customer Full Name |
| `IsOneTimeAccount` |  | | `_Customer` | `IsOneTimeAccount` | `CHAR(1)` | Indicator: Is the Account a One-Time Account? |
| `AlternativePayeeIsAllowed` |  | | `_Customer` | `AlternativePayeeIsAllowed` | `CHAR(1)` | Indicator: Is an alternative payer allowed in document? |
| `AlternativePayerAccount` |  | | `_Customer` | `AlternativePayerAccount` | `CHAR(10)` | Account Number of an Alternative Payer |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `SupplierFullName` |  | | `_Supplier` | `SupplierFullName` | `CHAR(220)` | Supplier Full Name |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `SpecialGLTransactionType` |  | |  |  | `CHAR(1)` | Special G/L Transaction Type |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `UnitOfMeasure_E` |  | |  | `cast('' as mseh3 )` | `CHAR(3)` | External Commercial Unit of Measurement (3-Character Format) |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `DueCalculationBaseDate` |  | |  |  | `DATS(8)` | Due Calculation Base Date |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `PaymentIsInstallment` |  | | `_PaymentTerm` | `PaymentIsInstallment` | `CHAR(1)` | Indicator: Term for Installment Payment |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `CashDiscount1DueDate` |  | |  | `cast( '00000000' as farp_sk1dt )` | `DATS(8)` | Due Date for Cash Discount 1 |
| `CashDiscount2DueDate` |  | |  | `cast( '00000000' as farp_sk2dt )` | `DATS(8)` | Cash Discount 2 Due Date |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `NetDueDate` |  | |  | `cast( '00000000' as farp_netdt )` | `DATS(8)` | Due Date for Net Payment |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `GoodsMovementEntryUnit` |  | |  |  | `UNIT(3)` | Unit of entry |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(23)` | Quantity in Entry Unit |
| `DelivOfGoodsDestCountry` |  | |  |  | `CHAR(3)` | Country/Region of Destination for Delivery of Goods |
| `DelivOfGoodsOriginCountry` |  | |  |  | `CHAR(3)` | Delivery Of Goods Origin Country/Region |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxType` |  | |  |  | `CHAR(1)` | Tax Type |
| `TaxItemGroup` |  | |  |  | `NUMC(3)` | Group Indicator for Tax Line Items |
| `TaxRateValidityStartDate` |  | |  |  | `DATS(8)` | Tax Rate Validity Start Date |
| `TaxDeterminationDate` |  | |  |  | `DATS(8)` | Date for Determination of Tax Rates |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `OriglTaxBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Base Amount of Original Tax in Company Code Currency |
| `OriginalTaxBaseAmount` |  | |  |  | `CURR(23)` | Original Tax Base Amount in Transaction Currency |
| `TaxAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Signed Tax Amount in Company Code Currency |
| `TaxAmount` |  | |  |  | `CURR(23)` | Tax Amount in Transaction Currency |
| `TaxBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Company Code Currency |
| `TaxBaseAmountInTransCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Transaction Currency |
| `WithholdingTaxBaseAmount` |  | |  |  | `CURR(23)` | Withholding Tax Base Amount |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `IsSalesRelated` |  | |  |  | `CHAR(1)` | Is Sales Related |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `AddressAndBankIsSetManually` |  | |  |  | `CHAR(1)` | Address and Bank Data is Set Manually |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `_BillToParty` | | ✓ | | | | |
| `_WithholdingTaxItem` | | ✓ | | | | |
| `_SEPAMandate` | | ✓ | | | | |
| `_OneTimeAccount` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_ItemNote` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillToParty` | `C_FinInvoiceBillToPartyFDP` | [0..1] |
| `_WithholdingTaxItem` | `C_FinInvcWithholdingTaxItemFDP` | [0..*] |
| `_SEPAMandate` | `C_FinInvoiceSEPAMandateFDP` | [0..*] |
| `_OneTimeAccount` | `C_FinInvoiceOneTimeAccountFDP` | [0..1] |
| `_BillToPartyCompany` | `C_FinInvcBillToPartyCompanyFDP` | [0..1] |
| `_ItemNote` | `C_FinInvoiceItemNoteFDP` | [0..*] |
| `_PostingKeyWthSpclGLCodeTxt` | `I_PostingKeyWthSpclGLCodeTxt` | [*] |
| `_GLAccountText` | `I_GLAccountText` | [*] |
| `_PaymentTerm` | `I_PaymentTerms` | [0..1] |
| `_PaymentTermText` | `I_PaymentTermsText` | [*] |
| `_Extension` | `E_OperationalAcctgDocItem` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEITEMFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEITEMFDP')/$value)*

```abap
@VDM.viewType: #CONSUMPTION

@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.supportedCapabilities: [ #OUTPUT_FORM_DATA_PROVIDER ]
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Corr Type SAP21 Invc itm'

define view entity C_FinInvoiceItemFDP

  as select from I_OperationalAcctgDocItem as Item

  association [0..1] to C_FinInvoiceBillToPartyFDP     as _BillToParty                on  $projection.Customer = _BillToParty.Customer

  association [0..*] to C_FinInvcWithholdingTaxItemFDP as _WithholdingTaxItem         on  $projection.CompanyCode            = _WithholdingTaxItem.CompanyCode
                                                                                      and $projection.FiscalYear             = _WithholdingTaxItem.FiscalYear
                                                                                      and $projection.AccountingDocument     = _WithholdingTaxItem.AccountingDocument
                                                                                      and $projection.AccountingDocumentItem = _WithholdingTaxItem.AccountingDocumentItem

  association [0..*] to C_FinInvoiceSEPAMandateFDP     as _SEPAMandate                on  $projection.Customer = _SEPAMandate.SEPAMandateSender

  association [0..1] to C_FinInvoiceOneTimeAccountFDP  as _OneTimeAccount             on  $projection.CompanyCode                 = _OneTimeAccount.CompanyCode
                                                                                      and $projection.FiscalYear                  = _OneTimeAccount.FiscalYear
                                                                                      and $projection.AccountingDocument          = _OneTimeAccount.AccountingDocument
                                                                                      and $projection.AccountingDocumentItem      = _OneTimeAccount.AccountingDocumentItem
                                                                                      and $projection.AddressAndBankIsSetManually = 'X'

  association [0..1] to C_FinInvcBillToPartyCompanyFDP as _BillToPartyCompany         on  $projection.Customer    = _BillToPartyCompany.Customer
                                                                                      and $projection.CompanyCode = _BillToPartyCompany.CompanyCode

  association [0..*] to C_FinInvoiceItemNoteFDP        as _ItemNote                   on  $projection.CompanyCode            = _ItemNote.CompanyCode
                                                                                      and $projection.FiscalYear             = _ItemNote.FiscalYear
                                                                                      and $projection.AccountingDocument     = _ItemNote.AccountingDocument
                                                                                      and $projection.AccountingDocumentItem = _ItemNote.AccountingDocumentItem

  association [*]    to I_PostingKeyWthSpclGLCodeTxt   as _PostingKeyWthSpclGLCodeTxt on  $projection.PostingKey    = _PostingKeyWthSpclGLCodeTxt.PostingKey
                                                                                      and $projection.SpecialGLCode = _PostingKeyWthSpclGLCodeTxt.SpecialGLCode

  association [*]    to I_GLAccountText                as _GLAccountText              on  $projection.ChartOfAccounts = _GLAccountText.ChartOfAccounts
                                                                                      and $projection.GLAccount       = _GLAccountText.GLAccount

  association [0..1] to I_PaymentTerms                 as _PaymentTerm                on  $projection.PaymentTerms = _PaymentTerm.PaymentTerms

  association [*]    to I_PaymentTermsText             as _PaymentTermText            on  $projection.PaymentTerms = _PaymentTermText.PaymentTerms

  association [1]    to E_OperationalAcctgDocItem      as _Extension                  on  $projection.CompanyCode            = _Extension.CompanyCode
                                                                                      and $projection.FiscalYear             = _Extension.FiscalYear
                                                                                      and $projection.AccountingDocument     = _Extension.AccountingDocument
                                                                                      and $projection.AccountingDocumentItem = _Extension.AccountingDocumentItem

{
  key Item.CompanyCode,
  key Item.FiscalYear,
  key Item.AccountingDocument,
  key Item.AccountingDocumentItem,

      Item.AccountingDocumentItemType,
      Item.PostingKey,
      _PostingKeyWthSpclGLCodeTxt[1:Language = $session.system_language].PostingKeyName,

      Item.GLAccount,
      _GLAccountText[1:Language = $session.system_language].GLAccountName,
      _GLAccountText[1:Language = $session.system_language].GLAccountLongName,

      Item.Customer,
      _Customer.CustomerName,
      _Customer.CustomerFullName,
      _Customer.IsOneTimeAccount,
      _Customer.AlternativePayeeIsAllowed,
      _Customer.AlternativePayerAccount,

      Item.Supplier,
      _Supplier.SupplierName,
      _Supplier.SupplierFullName,

      Item.ClearingDate,
      //      Item.ClearingAccountingDocument,
      Item.ClearingDocFiscalYear,
      Item.ClearingJournalEntry,

      Item.FinancialAccountType,
      //    UMSKZ
      Item.SpecialGLCode,
      //    UMSKS
      Item.SpecialGLTransactionType,

      Item.BaseUnit,
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      Item.Quantity,
      cast('' as mseh3 )               as UnitOfMeasure_E,

      Item.DebitCreditCode,
      Item.FiscalPeriod,
      Item.TransactionTypeDetermination,
      Item.DocumentItemText,
      Item.Product,
      Item.Plant,
      Item.ValuationArea,
      Item.InventoryValuationType,
      Item.DueCalculationBaseDate,
      Item.PaymentTerms,
      _PaymentTerm.PaymentIsInstallment,
      _PaymentTermText[1:Language = $session.system_language].PaymentTermsName,
      _PaymentTermText[1:Language = $session.system_language].PaymentTermsDescription,
      Item.CashDiscount1Days,
      Item.CashDiscount2Days,
      cast( '00000000' as farp_sk1dt ) as CashDiscount1DueDate,
      cast( '00000000' as farp_sk2dt ) as CashDiscount2DueDate,
      Item.NetPaymentDays,
      cast( '00000000' as farp_netdt ) as NetDueDate,
      Item.CashDiscount1Percent,
      Item.CashDiscount2Percent,
      Item.VATRegistration,
      Item.InvoiceReference,
      Item.InvoiceReferenceFiscalYear,
      Item.FollowOnDocumentType,
      Item.InvoiceItemReference,

      Item.GoodsMovementEntryUnit,
      @Semantics: { quantity : {unitOfMeasure: 'GoodsMovementEntryUnit'} }
      Item.QuantityInEntryUnit,
      Item.DelivOfGoodsDestCountry,
      Item.DelivOfGoodsOriginCountry,

      Item.TaxCountry,
      Item.TaxCode,
      Item.TaxType,
      Item.TaxItemGroup,
      Item.TaxRateValidityStartDate,
      Item.TaxDeterminationDate,
      Item.WithholdingTaxCode,

      Item.TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      Item.AmountInTransactionCurrency,

      Item.CompanyCodeCurrency,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      Item.AmountInCompanyCodeCurrency,

      Item.BalanceTransactionCurrency,
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      Item.AmountInBalanceTransacCrcy,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      Item.OriglTaxBaseAmountInCoCodeCrcy,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      Item.OriginalTaxBaseAmount,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      Item.TaxAmountInCoCodeCrcy,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      Item.TaxAmount,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      Item.TaxBaseAmountInCoCodeCrcy,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      Item.TaxBaseAmountInTransCrcy,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      Item.WithholdingTaxBaseAmount,
      Item.ChartOfAccounts,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                     element: 'ServiceDocumentType' }
        }]
      Item.ServiceDocumentType,
      Item.MasterFixedAsset,
      Item.AccountingDocumentType,
      Item.IsSalesRelated,
      Item.IsOpenItemManaged,
      Item.AddressAndBankIsSetManually,


      /* Access Control */
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_AcctgServiceDocumentVH',
                     element: 'ServiceDocument' }
        }]
      Item.ServiceDocument,
      Item.FixedAsset,
      Item.PostingDate,
      Item.OrderID,
      Item.SalesDocument,
      Item.FunctionalArea,
      Item.CostCenter,
      Item.ControllingArea,
      Item.Segment,
      Item.ProfitCenter,


      /* Associations */
      Item._Customer,
      Item._Supplier,
      _BillToParty,
      _WithholdingTaxItem,
      _SEPAMandate,
      _OneTimeAccount,
      _BillToPartyCompany,
      _ItemNote,

      /*For Access Control*/
      Item._GLAccountInCompanyCode,
      Item._ServiceDocument,
      Item._SalesDoc,
      Item._FixedAsset,
      Item._Order,
      Item._CurrentCostCenter,
      Item._CurrentProfitCenter,
      Item._AccountingDocumentType
      //      @ObjectModel.filter.enabled: false
      //      _CorrespondenceItemNote

}
```
