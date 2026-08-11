---
name: I_DUNNINGENTRYITEM
description: "Dunning Entry Item"
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRYITEM')/$value
semantic_en: "Dunning Entry Item"
semantic_vi: "Dunning Entry Item — CDS view giao diện dựa trên mhnd."
keywords:
  - "dunning"
  - "entry"
  - "item"
  - "date"
  - "financial"
  - "account"
  - "type"
  - "company"
  - "code"
  - "customer"
tags:
  - FI
  - component:FI-AR-AR-C-2CL
  - FI-AR
  - FI-AR-AR
  - FI-AR-AR-C
  - FI-AR-AR-C-2CL
  - interface-view
  - lob:finance
---
# I_DUNNINGENTRYITEM

**Dunning Entry Item**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRYITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DunningRunDate` | ✓ | |  | `cast(mhnd.laufd as farp_laufd_mhn preserving type)` | `DATS(8)` | Dunning Run Date |
| `DunningRun` | ✓ | |  | `cast(mhnd.laufi as farp_laufi_mhn preserving type)` | `CHAR(6)` | Dunning Run Identification |
| `FinancialAccountType` | ✓ | |  | `cast(mhnd.koart as farp_koart preserving type)` | `CHAR(1)` | Account Type |
| `CompanyCode` | ✓ | |  | `cast(mhnd.bukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `Supplier` | ✓ | |  | `cast(mhnd.lifnr as md_supplier preserving type)` | `CHAR(10)` | Supplier |
| `OneTimeAcctBankAccount` | ✓ | |  | `cast(mhnd.cpdky as bankn)` | `CHAR(18)` | Bank Account Number |
| `CustomerHeadOffice` | ✓ | |  | `sknrze` | `CHAR(10)` | Head Office Account Number (in branch accounts) |
| `GroupingDunningArea` | ✓ | |  | `smaber` | `CHAR(2)` | Dunning Area |
| `GroupingDunningLevel` | ✓ | |  | `smahsk` | `NUMC(1)` | Dunning Level |
| `ReferenceDocumentCompanyCode` | ✓ | |  | `cast(mhnd.bbukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `JournalEntry` | ✓ | |  | `cast(mhnd.belnr as fis_belnr preserving type)` | `CHAR(10)` | Journal Entry |
| `FiscalYear` | ✓ | |  | `cast(mhnd.gjahr as fis_gjahr preserving type)` | `NUMC(4)` | Fiscal Year |
| `JournalEntryItem` | ✓ | |  | `cast(mhnd.buzei as fis_buzei preserving type)` | `NUMC(3)` | Journal Entry Posting View Item |
| `BusinessArea` |  | |  | `cast(mhnd.gsber as fis_rbusa preserving type )` | `CHAR(4)` | Business Area |
| `DocumentReferenceID` |  | |  | `xblnr` | `CHAR(16)` | Reference Document Number |
| `PostingDate` |  | |  | `cast(mhnd.budat as fis_budat preserving type)` | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  | `cast(mhnd.bldat as fis_bldat preserving type)` | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentCreationDate` |  | |  | `cast(mhnd.cpudt as farp_cpudt preserving type)` | `DATS(8)` | Accounting Document Entry Date |
| `DueCalculationBaseDate` |  | |  | `cast(mhnd.zfbdt as dzfbdt preserving type)` | `DATS(8)` | Baseline Date for Due Date Calculation |
| `NetDueDate` |  | |  | `cast(mhnd.faedt as farp_netdt preserving type)` | `DATS(8)` | Due Date for Net Payment |
| `AccountingDocumentType` |  | |  | `cast(mhnd.blart as farp_blart preserving type)` | `CHAR(2)` | Journal Entry Type |
| `PostingKey` |  | |  | `cast(mhnd.bschl as fis_bschl preserving type)` | `CHAR(2)` | Posting Key |
| `DunningKey` |  | |  | `cast(mhnd.mschl as farp_mschl preserving type)` | `CHAR(1)` | Dunning Key |
| `DunningBlockingReason` |  | |  | `cast(mhnd.mansp as farp_mansp preserving type)` | `CHAR(1)` | Dunning Block |
| `DunningArea` |  | |  | `cast(mhnd.maber as farp_maber preserving type)` | `CHAR(2)` | Dunning Area |
| `LastDunningDate` |  | |  | `cast(mhnd.madat as farp_madat preserving type)` | `DATS(8)` | Date of Last Dunning Notice |
| `OldDunningLevel` |  | |  | `mahns` | `NUMC(1)` | Old Dunning Level |
| `DunningLevel` |  | |  | `cast(mhnd.mahnn as farp_mahns_d preserving type)` | `NUMC(1)` | Dunning Level |
| `PaymentBlockingReason` |  | |  | `cast(mhnd.zlspr as farp_dzlspr preserving type)` | `CHAR(1)` | Payment Block on Item |
| `DunningItemIsPayable` |  | |  | `cast(mhnd.xzalb as farp_xzalb_mhnd preserving type)` | `CHAR(1)` | Items Not to be Dunned |
| `NetDueArrearsDays` |  | |  | `cast(mhnd.verzn as farp_verzn preserving type)` | `DEC(5)` | Days in Arrears by Net Due Date |
| `SpecialGLTransactionType` |  | |  | `cast(mhnd.umsks as farp_umsks preserving type)` | `CHAR(1)` | Special G/L Transaction Type |
| `SpecialGLCode` |  | |  | `cast(mhnd.umskz as fac_umskz preserving type)` | `CHAR(1)` | Special G/L Indicator |
| `DebitCreditCode` |  | |  | `cast(mhnd.shkzg as fis_shkzg preserving type)` | `CHAR(1)` | Debit/Credit Code |
| `TransactionCurrency` |  | |  | `cast(mhnd.waers as fis_rwcur preserving type)` | `CUKY(5)` | Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `cast(mhnd.dmshb as fis_hsl preserving type)` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` |  | |  | `cast(mhnd.wrshb as fis_wsl preserving type)` | `CURR(23)` | Amount in Transaction Currency |
| `BranchAccount` |  | |  | `cast(mhnd.filkd as farp_filkd preserving type)` | `CHAR(10)` | Account Number of the Branch |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `InvoiceReference` |  | |  | `cast(mhnd.rebzg as fis_rebzg preserving type)` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  | `cast(mhnd.rebzj as fis_rebzj preserving type)` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `InvoiceItemReference` |  | |  | `cast(mhnd.rebzz as fis_rebzz preserving type)` | `NUMC(3)` | Invoice Item Reference |
| `TreasuryContract` |  | |  | `vertn` | `CHAR(13)` | Contract Number |
| `TreasuryContractType` |  | |  | `vertt` | `CHAR(1)` | Contract Type |
| `SupplierPaymentMethod` |  | |  | `cast(mhnd.zlsch as farp_schzw_bseg preserving type)` | `CHAR(1)` | Payment Method |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `_CompanyCode` | | ✓ | | | | |
| `_DocumentCompanyCode` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_DunningArea` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_DunningBlockingReason` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_DocumentCompanyCode` | `I_CompanyCode` | [1..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_DunningArea` | `I_DunningArea` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_JournalEntry` | `I_JournalEntry` | [1..1] |
| `_DunningBlockingReason` | `I_DunningBlockingReasonCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRYITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRYITEM')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel: { supportedCapabilities: [#EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE  ] }
@ObjectModel.sapObjectNodeType.name: 'DunningNotice'

@AbapCatalog.sqlViewName: 'IDUNNINGENTRITM'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Dunning Entry Item'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture:
        {
           mapping: [
             {
               viewElement: [ 'DunningRunDate','DunningRun','FinancialAccountType','CompanyCode',
                              'Customer','Supplier','OneTimeAcctBankAccount','CustomerHeadOffice',
                              'GroupingDunningArea','GroupingDunningLevel','ReferenceDocumentCompanyCode',
                              'JournalEntry','FiscalYear','JournalEntryItem' ],
               role: #MAIN,
               table: 'MHND',
               tableElement: ['laufd','laufi','koart','bukrs','kunnr','lifnr','cpdky',
                              'sknrze','smaber','smahsk','bbukrs','belnr','gjahr','buzei']
             },
             {
               viewElement: [ 'CompanyCode' ],
               role: #LEFT_OUTER_TO_ONE_JOIN,
               table: 'T001',
               tableElement: [ 'bukrs' ]
             }
           ]
        }
}

define view I_DunningEntryItem
  as select from mhnd

  association [1..1] to I_CompanyCode               as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode

  //  association [1..1] to I_Currency                  as _CompanyCodeCurrency   on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

  association [1..1] to I_CompanyCode               as _DocumentCompanyCode   on  $projection.ReferenceDocumentCompanyCode = _DocumentCompanyCode.CompanyCode

  association [1..1] to I_FinancialAccountType      as _FinancialAccountType  on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType

  association [0..1] to I_Customer                  as _Customer              on  $projection.Customer = _Customer.Customer

  association [0..1] to I_Supplier                  as _Supplier              on  $projection.Supplier = _Supplier.Supplier

  association [1..1] to I_DunningArea               as _DunningArea           on  $projection.CompanyCode         = _DunningArea.CompanyCode
                                                                              and $projection.GroupingDunningArea = _DunningArea.DunningArea

  association [1..1] to I_Currency                  as _Currency              on  $projection.TransactionCurrency = _Currency.Currency

  // I_AccountingDocument is deprecated, successor is I_JournalEntry
  //  association [1..1] to I_AccountingDocument        as _AccountingDocument    on  $projection.ReferenceDocumentCompanyCode = _AccountingDocument.CompanyCode
  //                                                                              and $projection.FiscalYear                   = _AccountingDocument.FiscalYear
  //                                                                              and $projection.JournalEntry                 = _AccountingDocument.AccountingDocument

  association [1..1] to I_JournalEntry              as _JournalEntry          on  $projection.ReferenceDocumentCompanyCode = _JournalEntry.CompanyCode
                                                                              and $projection.FiscalYear                   = _JournalEntry.FiscalYear
                                                                              and $projection.JournalEntry                 = _JournalEntry.AccountingDocument


  association [0..1] to I_DunningBlockingReasonCode as _DunningBlockingReason on  $projection.DunningBlockingReason = _DunningBlockingReason.DunningBlockingReason

  association [0..1] to I_FiscalYearForCompanyCode  as _FiscalYear            on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                              and $projection.CompanyCode = _FiscalYear.CompanyCode

{
  key cast(mhnd.laufd as farp_laufd_mhn preserving type)  as DunningRunDate,
  key cast(mhnd.laufi as farp_laufi_mhn preserving type)  as DunningRun,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
  key cast(mhnd.koart as farp_koart preserving type)      as FinancialAccountType,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(mhnd.bukrs as fis_bukrs preserving type)       as CompanyCode,
      @ObjectModel.foreignKey.association: '_Customer'
  key mhnd.kunnr                                          as Customer,
      @ObjectModel.foreignKey.association: '_Supplier'
  key cast(mhnd.lifnr as md_supplier preserving type)     as Supplier,
  key cast(mhnd.cpdky as bankn)                           as OneTimeAcctBankAccount,
  key mhnd.sknrze                                         as CustomerHeadOffice,
      @ObjectModel.foreignKey.association: '_DunningArea'
  key mhnd.smaber                                         as GroupingDunningArea,
  key mhnd.smahsk                                         as GroupingDunningLevel,
      @ObjectModel.foreignKey.association: '_DocumentCompanyCode'
  key cast(mhnd.bbukrs as fis_bukrs preserving type)      as ReferenceDocumentCompanyCode,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key cast(mhnd.belnr as fis_belnr preserving type)       as JournalEntry,

      @ObjectModel.foreignKey.association: '_FiscalYear'
  key cast(mhnd.gjahr as fis_gjahr preserving type)       as FiscalYear,

      // @ObjectModel.foreignKey.association: '_ReceivablesPayablesItem' - commented, because of missing RepresentativeKey
  key cast(mhnd.buzei as fis_buzei preserving type)       as JournalEntryItem,
      cast(mhnd.gsber as fis_rbusa preserving type  )     as BusinessArea,
      mhnd.xblnr                                          as DocumentReferenceID,

      cast(mhnd.budat as fis_budat preserving type)       as PostingDate,
      cast(mhnd.bldat as fis_bldat preserving type)       as DocumentDate,
      cast(mhnd.cpudt as farp_cpudt preserving type)      as AccountingDocumentCreationDate,
      cast(mhnd.zfbdt as dzfbdt preserving type)          as DueCalculationBaseDate,
      cast(mhnd.faedt as farp_netdt preserving type)      as NetDueDate,
      cast(mhnd.blart as farp_blart preserving type)      as AccountingDocumentType,
      cast(mhnd.bschl as fis_bschl preserving type)       as PostingKey,
      cast(mhnd.mschl as farp_mschl preserving type)      as DunningKey,

      cast(mhnd.mansp as farp_mansp preserving type)      as DunningBlockingReason,
      cast(mhnd.maber as farp_maber preserving type)      as DunningArea,
      cast(mhnd.madat as farp_madat preserving type)      as LastDunningDate,
      mhnd.mahns                                          as OldDunningLevel,
      cast(mhnd.mahnn as farp_mahns_d preserving type)    as DunningLevel,
      cast(mhnd.zlspr as farp_dzlspr preserving type)     as PaymentBlockingReason,
      cast(mhnd.xzalb as farp_xzalb_mhnd preserving type) as DunningItemIsPayable,

      cast(mhnd.verzn as farp_verzn preserving type)      as NetDueArrearsDays,
      cast(mhnd.umsks as farp_umsks preserving type)      as SpecialGLTransactionType,
      cast(mhnd.umskz as fac_umskz preserving type)       as SpecialGLCode,
      cast(mhnd.shkzg as fis_shkzg preserving type)       as DebitCreditCode,

      @Semantics.currencyCode: true
      cast(mhnd.waers as fis_rwcur preserving type)       as TransactionCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnd.dmshb as fis_hsl preserving type)         as AmountInCompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      //      @DefaultAggregation: #NONE
      cast(mhnd.wrshb as fis_wsl preserving type)         as AmountInTransactionCurrency,

      cast(mhnd.filkd as farp_filkd preserving type)      as BranchAccount,
      mhnd.vkorg                                          as SalesOrganization,
      mhnd.vtweg                                          as DistributionChannel,
      mhnd.spart                                          as Division,

      cast(mhnd.rebzg as fis_rebzg preserving type)       as InvoiceReference,
      cast(mhnd.rebzj as fis_rebzj preserving type)       as InvoiceReferenceFiscalYear,
      cast(mhnd.rebzz as fis_rebzz preserving type)       as InvoiceItemReference,
      mhnd.vertn                                          as TreasuryContract,
      mhnd.vertt                                          as TreasuryContractType,
      cast(mhnd.zlsch as farp_schzw_bseg preserving type) as SupplierPaymentMethod,

      @Semantics.currencyCode: true
      _CompanyCode.Currency                               as CompanyCodeCurrency,

      _CompanyCode,
      //_CompanyCodeCurrency,
      _Customer,
      _Supplier,
      _FinancialAccountType,
      _DunningArea,
      _Currency,
      //      _AccountingDocument, -Deprecated. Successor is:
      _JournalEntry,
      //_ReceivablesPayablesItem,  - commented, because of missing RepresentativeKey
      _DocumentCompanyCode,
      _DunningBlockingReason,
      _FiscalYear

}
```
