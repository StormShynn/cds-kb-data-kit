---
name: I_LOANCONTRACTLDOCITMDATA
description: "Actual Document Item for Loan Contract"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCITMDATA')/$value
semantic_en: "Actual Document Item for Loan Contract"
semantic_vi: "Actual Document Item for Loan Contract — CDS view giao diện dựa trên vdbepi."
keywords:
  - "actual"
  - "document"
  - "item"
  - "for"
  - "loan"
  - "contract"
  - "company"
  - "code"
  - "posted"
  - "activity"
  - "number"
  - "cash"
  - "flow"
  - "type"
  - "reference"
tags:
  - FS
  - component:FS-CML
  - contract
  - document
  - FS-CML
  - interface-view
---
# I_LOANCONTRACTLDOCITMDATA

**Actual Document Item for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCITMDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `PostedDocumentID` | ✓ | |  | `rbelkpfd` | `CHAR(10)` | Document Number of Document Header (Loan) |
| `PostedDocumentActivityNumber` | ✓ | |  | `rposnr` | `CHAR(3)` | Activity number |
| `CashFlowItemType` |  | |  | `sbewart` | `CHAR(4)` | Flow Type |
| `CashFlowItemReferenceType` |  | |  | `srefbew` | `CHAR(4)` | Reference flow type |
| `CashFlowItemCategory` |  | |  | `sbewziti` | `CHAR(4)` | Flow Category |
| `CashFlowItmNominalAmt` |  | |  | `bnwhr` | `CURR(13)` | Nominal amount |
| `CashFlowItmNominalAmtCrcy` |  | |  | `snwhr` | `CUKY(5)` | Currency of nominal amount |
| `CshFlwItmAmtInPosCrcy` |  | |  | `bbwhr` | `CURR(13)` | Amount in Position Currency |
| `CashFlowItemPositionCurrency` |  | |  | `sbwhr` | `CUKY(5)` | Position Currency (Currency of Position Amount) |
| `CshFlwItmAmtInSettlmtCrcy` |  | |  | `bcwhr` | `CURR(13)` | Settlement Amount |
| `CashFlowItemSettlementCurrency` |  | |  | `scwhr` | `CUKY(5)` | Settlement Currency |
| `CashFlowItemCalcDate` |  | |  | `dvalut` | `DATS(8)` | Calculation Date |
| `CashFlowItemDueDate` |  | |  | `dfaell` | `DATS(8)` | Due Date |
| `CashFlowItemPaymentDate` |  | |  | `ddispo` | `DATS(8)` | Payment Date |
| `CalculationPeriodStartDate` |  | |  | `dbervon` | `DATS(8)` | Start of Calculation Period |
| `CashFlowItemPostingDirection` |  | |  | `ssolhab` | `CHAR(1)` | Debit/credit indicator |
| `CshFlwItmDebitPostgAcct` |  | |  | `rsoll` | `CHAR(10)` | Account for debit posting |
| `CshFlwItmCreditPostgAcct` |  | |  | `rhaben` | `CHAR(10)` | Account for credit posting |
| `CashFlowItemPercentageRate` |  | |  | `pkond` | `DEC(10)` | Percentage rate for condition items |
| `CashFlowItemSource` |  | |  | `swoher` | `CHAR(1)` | Source of flow record |
| `CalculationPeriodEndDate` |  | |  | `dberbis` | `DATS(8)` | End of Calculation Period |
| `CashFlowItemGenerationDate` |  | |  | `dtrans` | `DATS(8)` | Flow data key: System date |
| `CashFlowItemGenerationTime` |  | |  | `ttrans` | `TIMS(6)` | Transaction data key: system time |
| `CashFlowItemSequenceNumber` |  | |  | `ntrans` | `NUMC(4)` | Transaction data key: Consecutive number |
| `LoanBusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `FinConditionConditionType` |  | |  | `skoart` | `NUMC(4)` | Condition Type (Smallest Subdivision of Condition Records) |
| `CalcPeriodStartDateIsExclusive` |  | |  | `sexclvon` | `NUMC(1)` | Exclusive Indicator for the Start of a Calculation Period |
| `CalcPeriodEndDateIsInclusive` |  | |  | `sinclbis` | `NUMC(1)` | Inclusive Indicator for the End of a Calculation Period |
| `CalcEndDteIsInclusive` |  | |  | `sincl` | `NUMC(1)` | Inclusive Indicator for Beginning and End of a Period |
| `CshFlwItmSettlementDate` |  | |  | `dverrech` | `DATS(8)` | Settlement date |
| `CshFlwItmClrgDteIsInclusive` |  | |  | `sinclverr` | `NUMC(1)` | Inclusive Indicator for Clearing Date |
| `AccrDefrlRefFlwCat` |  | |  | `srefziti` | `CHAR(4)` | Refer.flow category in accrual/deferral flow records |
| `DebitCrdtCtrlActyType` |  | |  | `svorgkz` | `NUMC(2)` | Activity indicator for debit/credit control |
| `CashFlowItemEnteredBy` |  | |  | `rerf` | `CHAR(12)` | Entered By |
| `CashFlowItemEnteredDate` |  | |  | `derf` | `DATS(8)` | First Entered On |
| `CashFlowItemEnteredTime` |  | |  | `terf` | `TIMS(6)` | Time of Creation |
| `CashFlowItemEnteredSource` |  | |  | `reher` | `CHAR(10)` | Source of Initial Entry |
| `CashFlowItemEditedBy` |  | |  | `rbear` | `CHAR(12)` | Employee ID |
| `CashFlowItemEditedDate` |  | |  | `dbear` | `DATS(8)` | Last Edited On |
| `CashFlowItemEditedTime` |  | |  | `tbear` | `TIMS(6)` | Last Edited At |
| `CashFlowItemEditedSource` |  | |  | `rbher` | `CHAR(10)` | Editing Source |
| `LoanMainBrwrCustNmbr` |  | |  | `hdn_kunnr` | `CHAR(10)` | Main Borrower Customer Number |
| `AccountingDocument` |  | |  | `ruzbel` | `CHAR(10)` | Document Number of an Accounting Document |
| `LoanCshFlwItmActivityCat` |  | |  | `vorgtyp` | `CHAR(4)` | Activity Category (Posting Area) |
| `CshFlwItmDirectionOfFlow` |  | |  | `ssign` | `CHAR(1)` | Direction of Flow |
| `CashFlowItemBillDueDate` |  | |  | `bill_due_date` | `DATS(8)` | Due Date for Bill |
| `_LoanContrActlDocHdrData` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SettlementCurrency` | | ✓ | | | | |
| `_PositionCurrency` | | ✓ | | | | |
| `_NominalCurrency` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FinCndnConditionType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_LoanCshFlwItmActivityCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoanContrActlDocHdrData` | `I_LoanContrActlDocHdrData` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SettlementCurrency` | `I_Currency` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_NominalCurrency` | `I_Currency` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_FinCndnConditionType` | `I_FinCndnConditionType` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_LoanCshFlwItmActivityCat` | `I_LoanCshFlwItmActivityCat` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCITMDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCITMDATA')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCACTDOCITMD',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel.usageType:{
    serviceQuality: 'A',
    sizeCategory: 'XL',
    dataClass:'TRANSACTIONAL'
}
@ObjectModel:{
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ]
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #CUBE,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm : #SESSION_VARIABLE
@EndUserText.label: 'Actual Document Item for Loan Contract'

define view I_LoanContrActlDocItmData
  as select from vdbepi
  association [0..1] to I_LoanContrActlDocHdrData  as _LoanContrActlDocHdrData  on  $projection.CompanyCode      = _LoanContrActlDocHdrData.CompanyCode
                                                                                and $projection.PostedDocumentID = _LoanContrActlDocHdrData.PostedDocumentID
  association [0..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Currency                 as _SettlementCurrency       on  $projection.CashFlowItemSettlementCurrency = _SettlementCurrency.Currency
  association [0..1] to I_Currency                 as _PositionCurrency         on  $projection.CashFlowItemPositionCurrency = _PositionCurrency.Currency
  association [0..1] to I_Currency                 as _NominalCurrency          on  $projection.CashFlowItmNominalAmtCrcy = _NominalCurrency.Currency
  association [0..1] to I_BusinessArea             as _BusinessArea             on  $projection.LoanBusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_FinCndnConditionType     as _FinCndnConditionType     on  $projection.FinConditionConditionType      = _FinCndnConditionType.FinConditionConditionType
                                                                                and _FinCndnConditionType.TreasuryContractType = '1'
  association [0..1] to I_Customer                 as _Customer                 on  $projection.LoanMainBrwrCustNmbr = _Customer.Customer
  association [0..1] to I_LoanCshFlwItmActivityCat as _LoanCshFlwItmActivityCat on  $projection.LoanCshFlwItmActivityCat = _LoanCshFlwItmActivityCat.LoanCshFlwItmActivityCat

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key vdbepi.bukrs         as CompanyCode,
  key vdbepi.rbelkpfd      as PostedDocumentID,
  key vdbepi.rposnr        as PostedDocumentActivityNumber,

      vdbepi.sbewart       as CashFlowItemType,
      vdbepi.srefbew       as CashFlowItemReferenceType,
      vdbepi.sbewziti      as CashFlowItemCategory,
      @Semantics.amount.currencyCode: 'CashFlowItmNominalAmtCrcy'
      vdbepi.bnwhr         as CashFlowItmNominalAmt,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_NominalCurrency'
      vdbepi.snwhr         as CashFlowItmNominalAmtCrcy,
      @Semantics.amount.currencyCode: 'CashFlowItemPositionCurrency'
      vdbepi.bbwhr         as CshFlwItmAmtInPosCrcy,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_PositionCurrency'
      vdbepi.sbwhr         as CashFlowItemPositionCurrency,
      @Semantics.amount.currencyCode: 'CashFlowItemSettlementCurrency'
      vdbepi.bcwhr         as CshFlwItmAmtInSettlmtCrcy,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_SettlementCurrency'
      vdbepi.scwhr         as CashFlowItemSettlementCurrency,
      //      @Semantics.amount.currencyCode: ''
      //      vdbepi.bhwhr         as CashFlowItmAmtInLocalCrcy,
      vdbepi.dvalut        as CashFlowItemCalcDate,
      vdbepi.dfaell        as CashFlowItemDueDate,
      vdbepi.ddispo        as CashFlowItemPaymentDate,
      vdbepi.dbervon       as CalculationPeriodStartDate,
      vdbepi.ssolhab       as CashFlowItemPostingDirection,
      vdbepi.rsoll         as CshFlwItmDebitPostgAcct,
      vdbepi.rhaben        as CshFlwItmCreditPostgAcct,
      vdbepi.pkond         as CashFlowItemPercentageRate,
      vdbepi.swoher        as CashFlowItemSource,
      vdbepi.dberbis       as CalculationPeriodEndDate,
      vdbepi.dtrans        as CashFlowItemGenerationDate,
      vdbepi.ttrans        as CashFlowItemGenerationTime,
      vdbepi.ntrans        as CashFlowItemSequenceNumber,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      vdbepi.gsber         as LoanBusinessArea,
      @ObjectModel.foreignKey.association: '_FinCndnConditionType'
      vdbepi.skoart        as FinConditionConditionType,
      vdbepi.sexclvon      as CalcPeriodStartDateIsExclusive,
      vdbepi.sinclbis      as CalcPeriodEndDateIsInclusive,
      vdbepi.sincl         as CalcEndDteIsInclusive,
      vdbepi.dverrech      as CshFlwItmSettlementDate,
      vdbepi.sinclverr     as CshFlwItmClrgDteIsInclusive,
      vdbepi.srefziti      as AccrDefrlRefFlwCat,
      vdbepi.svorgkz       as DebitCrdtCtrlActyType,
      vdbepi.rerf          as CashFlowItemEnteredBy,
      vdbepi.derf          as CashFlowItemEnteredDate,
      vdbepi.terf          as CashFlowItemEnteredTime,
      vdbepi.reher         as CashFlowItemEnteredSource,
      vdbepi.rbear         as CashFlowItemEditedBy,
      vdbepi.dbear         as CashFlowItemEditedDate,
      vdbepi.tbear         as CashFlowItemEditedTime,
      vdbepi.rbher         as CashFlowItemEditedSource,
      @ObjectModel.foreignKey.association: '_Customer'
      vdbepi.hdn_kunnr     as LoanMainBrwrCustNmbr,
      vdbepi.ruzbel        as AccountingDocument,
      @ObjectModel.foreignKey.association: '_LoanCshFlwItmActivityCat'
      vdbepi.vorgtyp       as LoanCshFlwItmActivityCat,
      vdbepi.ssign         as CshFlwItmDirectionOfFlow,
      vdbepi.bill_due_date as CashFlowItemBillDueDate,

      _LoanContrActlDocHdrData,
      _CompanyCode,
      _SettlementCurrency,
      _PositionCurrency,
      _NominalCurrency,
      _BusinessArea,
      _FinCndnConditionType,
      _Customer,
      _LoanCshFlwItmActivityCat
}
```
