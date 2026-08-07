---
name: I_WITHHOLDINGTAXITEM
description: Withholdingtaxitem
app_component: FI-AP-AP-Q-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - tax
  - item-level
  - component:FI-AP-AP-Q-2CL
  - lob:Finance
---
# I_WITHHOLDINGTAXITEM

**Withholdingtaxitem**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-Q-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |
| `AccountingDocument` | ✓ | |  | `belnr` |
| `FiscalYear` | ✓ | |  | `gjahr` |
| `AccountingDocumentItem` | ✓ | |  | `buzei` |
| `WithholdingTaxType` | ✓ | |  | `witht` |
| `WithholdingTaxCode` |  | |  | `wt_withcd` |
| `WhldgTaxBaseAmtInCoCodeCrcy` |  | |  | `wt_qsshh` |
| `WhldgTaxBaseAmtInTransacCrcy` |  | |  | `wt_qsshb` |
| `WhldgTaxBaseAmtInAddlCrcy2` |  | |  | `wt_qssh2` |
| `WhldgTaxBaseAmtInAddlCrcy3` |  | |  | `wt_qssh3` |
| `WhldgTaxBaseIsEnteredManually` |  | |  | `wt_basman` |
| `WhldgTaxAmtInCoCodeCrcy` |  | |  | `wt_qbshh` |
| `WhldgTaxAmtInTransacCrcy` |  | |  | `wt_qbshb` |
| `WhldgTaxAmtInAddlCrcy2` |  | |  | `wt_qbsh2` |
| `WhldgTaxAmtInAddlCrcy3` |  | |  | `wt_qbsh3` |
| `WhldgTaxIsEnteredManually` |  | |  | `wt_amnman` |
| `WhldgTaxItemStatus` |  | |  | `wt_stat` |
| `WhldgTaxExmptAmtInCoCodeCrcy` |  | |  | `wt_qsfhh` |
| `WhldgTaxExmptAmtInTransacCrcy` |  | |  | `wt_qsfhb` |
| `WhldgTaxExmptAmtInAddlCrcy2` |  | |  | `wt_qsfh2` |
| `WhldgTaxExmptAmtInAddlCrcy3` |  | |  | `wt_qsfh3` |
| `MnllyEnteredWHTAmtInTransCrcy` |  | |  | `wt_qbuihb` |
| `MnllyEnteredWHTAmtInCoCodeCrcy` |  | |  | `wt_qbuihh` |
| `WhldgTaxExmptCertificate` |  | |  | `wt_wtexmn` |
| `FinancialAccountType` |  | |  | `koart` |
| `CustomerSupplierAccount` |  | |  | `wt_acco` |
| `GLAccount` |  | |  | `hkont` |
| `SupplierRecipientType` |  | |  | `qsrec` |
| `ClearingAccountingDocument` |  | |  | `augbl` |
| `ClearingDate` |  | |  | `augdt` |
| `WithholdingTaxExmptPercent` |  | |  | `wt_qszrt` |
| `WithholdingTaxPercent` |  | |  | `qsatz` |
| `IsSelfWhldgTax` |  | |  | `wt_slfwtpd` |
| `IsGrossingUp` |  | |  | `wt_gruwtpd` |
| `WithholdingTaxCertificate` |  | |  | `ctnumber` |
| `WhldgTaxCertDate` |  | |  | `ctissuedate` |
| `IN_ClrgWithholdingTaxDocument` |  | |  | `j_1iintchln` |
| `IN_ClrgWithholdingTaxDate` |  | |  | `j_1iintchdt` |
| `IN_ReferenceDocumentNumber` |  | |  | `j_1irebzg` |
| `DownPaymentIsCleared` |  | |  | `wt_downc` |
| `DocumentIsPartialExempted` |  | |  | `fiwtin_par_exem` |
| `IN_WhldgTaxRecordTypeTrans` |  | |  | `j_1iewtrec` |
| `Country` |  | | `_CompanyCode` | `Country` |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` |
| `DocumentCurrency` |  | | `_AccountingDocument` | `Currency` |
| `AdditionalCurrency1` |  | | `_AccountingDocument` | `AdditionalCurrency1` |
| `AdditionalCurrency2` |  | | `_AccountingDocument` | `AdditionalCurrency2` |
| `RptgWhldgTxBaseAmtInCoCodeCrcy` |  | |  | `j_1af_wt_repbs` |
| `_CompanyCode` | | ✓ | | |
| `_AccountingDocument` | | ✓ | | |
| `_GLAccount` | | ✓ | | |
| `_WithholdingTaxCode` | | ✓ | | |
| `_CompanyCodeCurrency` | | ✓ | | |
| `_DocumentCurrency` | | ✓ | | |
| `_AdditionalCurrency1` | | ✓ | | |
| `_AdditionalCurrency2` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_AccountingDocument` | `I_AccountingDocument` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_WithholdingTaxCode` | `I_Extendedwhldgtaxcode` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Withholding Tax Item'
@AbapCatalog.sqlViewName: 'IFIWTAXITEM'
@ClientHandling.algorithm: #SESSION_VARIABLE
//@VDM.businessObject: 'Withholding Tax Item'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #FACT, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities:
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'WithholdingTaxItem'
@Metadata.ignorePropagatedAnnotations:true

//@VDM.dclSourceNotRequired:true
define view I_Withholdingtaxitem
  as select from with_item
  association [0..1] to I_CompanyCode          as _CompanyCode         on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_AccountingDocument   as _AccountingDocument  on  $projection.CompanyCode        = _AccountingDocument.CompanyCode
                                                                       and $projection.AccountingDocument = _AccountingDocument.AccountingDocument
                                                                       and $projection.FiscalYear         = _AccountingDocument.FiscalYear
  association [0..1] to I_GLAccount            as _GLAccount           on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                       and $projection.CompanyCode = _GLAccount.CompanyCode
  association [0..1] to I_Extendedwhldgtaxcode as _WithholdingTaxCode  on  $projection.Country            = _WithholdingTaxCode.Country
                                                                       and $projection.WithholdingTaxType = _WithholdingTaxCode.WithholdingTaxType
                                                                       and $projection.WithholdingTaxCode = _WithholdingTaxCode.WithholdingTaxCode
  association [0..1] to I_Currency             as _CompanyCodeCurrency on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency             as _DocumentCurrency    on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  association [0..1] to I_Currency             as _AdditionalCurrency1 on  $projection.AdditionalCurrency1 = _AdditionalCurrency1.Currency
  association [0..1] to I_Currency             as _AdditionalCurrency2 on  $projection.AdditionalCurrency2 = _AdditionalCurrency2.Currency

{
  key bukrs                                   as CompanyCode,
  key belnr                                   as AccountingDocument,
  key gjahr                                   as FiscalYear,
  key buzei                                   as AccountingDocumentItem,
  key witht                                   as WithholdingTaxType,
      wt_withcd                               as WithholdingTaxCode,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' //Company Code Currency
      wt_qsshh                                as WhldgTaxBaseAmtInCoCodeCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency'    //Accounting Document Currency
      wt_qsshb                                as WhldgTaxBaseAmtInTransacCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      wt_qssh2                                as WhldgTaxBaseAmtInAddlCrcy2,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      wt_qssh3                                as WhldgTaxBaseAmtInAddlCrcy3,
      wt_basman                               as WhldgTaxBaseIsEnteredManually,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' //Company Code Currency
      wt_qbshh                                as WhldgTaxAmtInCoCodeCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency'    //Accounting Document Currency
      wt_qbshb                                as WhldgTaxAmtInTransacCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      wt_qbsh2                                as WhldgTaxAmtInAddlCrcy2,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      wt_qbsh3                                as WhldgTaxAmtInAddlCrcy3,
      wt_amnman                               as WhldgTaxIsEnteredManually,
      wt_stat                                 as WhldgTaxItemStatus,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' //Company Code Currency
      wt_qsfhh                                as WhldgTaxExmptAmtInCoCodeCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency'    //Accounting Document Currency
      wt_qsfhb                                as WhldgTaxExmptAmtInTransacCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      wt_qsfh2                                as WhldgTaxExmptAmtInAddlCrcy2,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      wt_qsfh3                                as WhldgTaxExmptAmtInAddlCrcy3,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency' // Accounting Document Currency
      wt_qbuihb as MnllyEnteredWHTAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' // Company Code Currency
      wt_qbuihh as MnllyEnteredWHTAmtInCoCodeCrcy,   
      wt_wtexmn                               as WhldgTaxExmptCertificate,
      koart                                   as FinancialAccountType,
      wt_acco                                 as CustomerSupplierAccount,
      hkont                                   as GLAccount,
      qsrec                                   as SupplierRecipientType,
      augbl                                   as ClearingAccountingDocument,
      augdt                                   as ClearingDate,
      wt_qszrt                                as WithholdingTaxExmptPercent,
      qsatz                                   as WithholdingTaxPercent,
      wt_slfwtpd                              as IsSelfWhldgTax,
      wt_gruwtpd                              as IsGrossingUp,
      ctnumber                                as WithholdingTaxCertificate,
      ctissuedate                             as WhldgTaxCertDate,
      // fields for India
      j_1iintchln                             as IN_ClrgWithholdingTaxDocument,
      j_1iintchdt                             as IN_ClrgWithholdingTaxDate,
      j_1irebzg                               as IN_ReferenceDocumentNumber,
       @Semantics.booleanIndicator: true
      wt_downc                                as DownPaymentIsCleared,
      @Semantics.booleanIndicator: true
      fiwtin_par_exem                         as DocumentIsPartialExempted,
      j_1iewtrec                              as IN_WhldgTaxRecordTypeTrans,
      _CompanyCode,
      _AccountingDocument,
      _GLAccount,
      _WithholdingTaxCode,
      _CompanyCode.Country                    as Country,
      @Semantics.currencyCode:true
      _CompanyCode.Currency                   as CompanyCodeCurrency,
      @Semantics.currencyCode:true
      _AccountingDocument.Currency            as DocumentCurrency,
      @Semantics.currencyCode:true
      _AccountingDocument.AdditionalCurrency1 as AdditionalCurrency1,
      @Semantics.currencyCode:true
      _AccountingDocument.AdditionalCurrency2 as AdditionalCurrency2,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      j_1af_wt_repbs                          as RptgWhldgTxBaseAmtInCoCodeCrcy,
      _CompanyCodeCurrency,
      _DocumentCurrency,
      _AdditionalCurrency1,
      _AdditionalCurrency2
}
where
  wt_withcd != ''
```
