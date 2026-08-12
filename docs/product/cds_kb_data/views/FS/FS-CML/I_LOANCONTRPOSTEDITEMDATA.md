---
name: I_LOANCONTRPOSTEDITEMDATA
description: "Posted Item for Loan Contract"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPOSTEDITEMDATA')/$value
semantic_en: "Posted Item for Loan Contract"
semantic_vi: "Posted Item for Loan Contract — CDS view giao diện dựa trên I_LoanContrActlDocItmData."
keywords:
  - "posted"
  - "item"
  - "for"
  - "loan"
  - "contract"
  - "company"
  - "code"
  - "document"
  - "activity"
  - "number"
  - "cash"
  - "flow"
  - "type"
  - "reference"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
---
# I_LOANCONTRPOSTEDITEMDATA

**Posted Item for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPOSTEDITEMDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | | `_LoanContrActlDocItmData` | `CompanyCode` | `CHAR(4)` | Company Code |
| `PostedDocumentID` | ✓ | | `_LoanContrActlDocItmData` | `PostedDocumentID` | `CHAR(10)` | Document Number of Document Header (Loan) |
| `PostedDocumentActivityNumber` | ✓ | | `_LoanContrActlDocItmData` | `PostedDocumentActivityNumber` | `CHAR(3)` | Activity number |
| `CashFlowItemType` |  | | `_LoanContrActlDocItmData` | `CashFlowItemType` | `CHAR(4)` | Flow Type |
| `CashFlowItemReferenceType` |  | | `_LoanContrActlDocItmData` | `CashFlowItemReferenceType` | `CHAR(4)` | Reference flow type |
| `CashFlowItemCategory` |  | | `_LoanContrActlDocItmData` | `CashFlowItemCategory` | `CHAR(4)` | Flow Category |
| `CashFlowItmNominalAmt` |  | | `_LoanContrActlDocItmData` | `CashFlowItmNominalAmt` | `CURR(13)` | Nominal amount |
| `CashFlowItmNominalAmtCrcy` |  | | `_LoanContrActlDocItmData` | `CashFlowItmNominalAmtCrcy` | `CUKY(5)` | Currency of nominal amount |
| `CshFlwItmAmtInPosCrcy` |  | | `_LoanContrActlDocItmData` | `CshFlwItmAmtInPosCrcy` | `CURR(13)` | Amount in Position Currency |
| `CashFlowItemPositionCurrency` |  | | `_LoanContrActlDocItmData` | `CashFlowItemPositionCurrency` | `CUKY(5)` | Position Currency (Currency of Position Amount) |
| `CshFlwItmAmtInSettlmtCrcy` |  | | `_LoanContrActlDocItmData` | `CshFlwItmAmtInSettlmtCrcy` | `CURR(13)` | Settlement Amount |
| `CashFlowItemSettlementCurrency` |  | | `_LoanContrActlDocItmData` | `CashFlowItemSettlementCurrency` | `CUKY(5)` | Settlement Currency |
| `CashFlowItemCalcDate` |  | | `_LoanContrActlDocItmData` | `CashFlowItemCalcDate` | `DATS(8)` | Calculation Date |
| `CashFlowItemDueDate` |  | | `_LoanContrActlDocItmData` | `CashFlowItemDueDate` | `DATS(8)` | Due Date |
| `CashFlowItemPaymentDate` |  | | `_LoanContrActlDocItmData` | `CashFlowItemPaymentDate` | `DATS(8)` | Payment Date |
| `CalculationPeriodStartDate` |  | | `_LoanContrActlDocItmData` | `CalculationPeriodStartDate` | `DATS(8)` | Start of Calculation Period |
| `CashFlowItemPostingDirection` |  | | `_LoanContrActlDocItmData` | `CashFlowItemPostingDirection` | `CHAR(1)` | Debit/credit indicator |
| `CshFlwItmDebitPostgAcct` |  | | `_LoanContrActlDocItmData` | `CshFlwItmDebitPostgAcct` | `CHAR(10)` | Account for debit posting |
| `CshFlwItmCreditPostgAcct` |  | | `_LoanContrActlDocItmData` | `CshFlwItmCreditPostgAcct` | `CHAR(10)` | Account for credit posting |
| `CashFlowItemPercentageRate` |  | | `_LoanContrActlDocItmData` | `CashFlowItemPercentageRate` | `DEC(10)` | Percentage rate for condition items |
| `CashFlowItemSource` |  | | `_LoanContrActlDocItmData` | `CashFlowItemSource` | `CHAR(1)` | Source of flow record |
| `CalculationPeriodEndDate` |  | | `_LoanContrActlDocItmData` | `CalculationPeriodEndDate` | `DATS(8)` | End of Calculation Period |
| `CashFlowItemGenerationDate` |  | | `_LoanContrActlDocItmData` | `CashFlowItemGenerationDate` | `DATS(8)` | Flow data key: System date |
| `CashFlowItemGenerationTime` |  | | `_LoanContrActlDocItmData` | `CashFlowItemGenerationTime` | `TIMS(6)` | Transaction data key: system time |
| `CashFlowItemSequenceNumber` |  | | `_LoanContrActlDocItmData` | `CashFlowItemSequenceNumber` | `NUMC(4)` | Transaction data key: Consecutive number |
| `LoanBusinessArea` |  | | `_LoanContrActlDocItmData` | `LoanBusinessArea` | `CHAR(4)` | Business Area |
| `FinConditionConditionType` |  | | `_LoanContrActlDocItmData` | `FinConditionConditionType` | `NUMC(4)` | Condition Type (Smallest Subdivision of Condition Records) |
| `CalcPeriodStartDateIsExclusive` |  | | `_LoanContrActlDocItmData` | `CalcPeriodStartDateIsExclusive` | `NUMC(1)` | Exclusive Indicator for the Start of a Calculation Period |
| `CalcPeriodEndDateIsInclusive` |  | | `_LoanContrActlDocItmData` | `CalcPeriodEndDateIsInclusive` | `NUMC(1)` | Inclusive Indicator for the End of a Calculation Period |
| `CalcEndDteIsInclusive` |  | | `_LoanContrActlDocItmData` | `CalcEndDteIsInclusive` | `NUMC(1)` | Inclusive Indicator for Beginning and End of a Period |
| `CshFlwItmSettlementDate` |  | | `_LoanContrActlDocItmData` | `CshFlwItmSettlementDate` | `DATS(8)` | Settlement date |
| `CshFlwItmClrgDteIsInclusive` |  | | `_LoanContrActlDocItmData` | `CshFlwItmClrgDteIsInclusive` | `NUMC(1)` | Inclusive Indicator for Clearing Date |
| `AccrDefrlRefFlwCat` |  | | `_LoanContrActlDocItmData` | `AccrDefrlRefFlwCat` | `CHAR(4)` | Refer.flow category in accrual/deferral flow records |
| `DebitCrdtCtrlActyType` |  | | `_LoanContrActlDocItmData` | `DebitCrdtCtrlActyType` | `NUMC(2)` | Activity indicator for debit/credit control |
| `CashFlowItemEnteredBy` |  | | `_LoanContrActlDocItmData` | `CashFlowItemEnteredBy` | `CHAR(12)` | Entered By |
| `CashFlowItemEnteredDate` |  | | `_LoanContrActlDocItmData` | `CashFlowItemEnteredDate` | `DATS(8)` | First Entered On |
| `CashFlowItemEnteredTime` |  | | `_LoanContrActlDocItmData` | `CashFlowItemEnteredTime` | `TIMS(6)` | Time of Creation |
| `CashFlowItemEnteredSource` |  | | `_LoanContrActlDocItmData` | `CashFlowItemEnteredSource` | `CHAR(10)` | Source of Initial Entry |
| `CashFlowItemEditedBy` |  | | `_LoanContrActlDocItmData` | `CashFlowItemEditedBy` | `CHAR(12)` | Employee ID |
| `CashFlowItemEditedDate` |  | | `_LoanContrActlDocItmData` | `CashFlowItemEditedDate` | `DATS(8)` | Last Edited On |
| `CashFlowItemEditedTime` |  | | `_LoanContrActlDocItmData` | `CashFlowItemEditedTime` | `TIMS(6)` | Last Edited At |
| `CashFlowItemEditedSource` |  | | `_LoanContrActlDocItmData` | `CashFlowItemEditedSource` | `CHAR(10)` | Editing Source |
| `LoanMainBrwrCustNmbr` |  | | `_LoanContrActlDocItmData` | `LoanMainBrwrCustNmbr` | `CHAR(10)` | Main Borrower Customer Number |
| `AccountingDocument` |  | | `_LoanContrActlDocItmData` | `AccountingDocument` | `CHAR(10)` | Document Number of an Accounting Document |
| `LoanCshFlwItmActivityCat` |  | | `_LoanContrActlDocItmData` | `LoanCshFlwItmActivityCat` | `CHAR(4)` | Activity Category (Posting Area) |
| `CshFlwItmDirectionOfFlow` |  | | `_LoanContrActlDocItmData` | `CshFlwItmDirectionOfFlow` | `CHAR(1)` | Direction of Flow |
| `CashFlowItemBillDueDate` |  | | `_LoanContrActlDocItmData` | `CashFlowItemBillDueDate` | `DATS(8)` | Due Date for Bill |
| `LoanContractID` |  | | `_LoanContrActlDocHdrData` | `LoanContractID` | `CHAR(13)` | Contract Number |
| `LoanClassfctnNmbr` |  | | `_LoanContrActlDocHdrData` | `LoanClassfctnNmbr` | `CHAR(13)` | Classification Number for Finance Projects |
| `LoanLifeCycleStatus` |  | | `_LoanContrActlDocHdrData` | `LoanLifeCycleStatus` | `NUMC(2)` | Status of data record |
| `LoanAcctAssgmtRef` |  | | `_LoanContrActlDocHdrData` | `LoanAcctAssgmtRef` | `CHAR(8)` | Account Assignment Reference in Financial Assets Management |
| `CshFlwItmGLAccount` |  | | `_LoanContrActlDocHdrData` | `CshFlwItmGLAccount` | `CHAR(10)` | General Ledger Account |
| `CashFlowItemPostingDate` |  | | `_LoanContrActlDocHdrData` | `CashFlowItemPostingDate` | `DATS(8)` | Posting Date in the Document |
| `CashFlowItemReversalStatus` |  | | `_LoanContrActlDocHdrData` | `CashFlowItemReversalStatus` | `CHAR(1)` | Reversal indicator |
| `ReverseDocument` |  | | `_LoanContrActlDocHdrData` | `ReverseDocument` | `CHAR(10)` | Reverse Document Number |
| `WvrWriteoffDocument` |  | | `_LoanContrActlDocHdrData` | `WvrWriteoffDocument` | `CHAR(10)` | Doc.no. of debit pos. doc.header (only for inc.pmnt records) |
| `CshFlwItmTransfToFinAcctgDte` |  | | `_LoanContrActlDocHdrData` | `CshFlwItmTransfToFinAcctgDte` | `DATS(8)` | Date of transferal to FiAc |
| `CshFlwItmBusTransNmbr` |  | | `_LoanContrActlDocHdrData` | `CshFlwItmBusTransNmbr` | `CHAR(10)` | Daybook no. |
| `_LoanContrActlDocHdrData` | | ✓ | | | | |
| `_LoanContrData` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SettlementCurrency` | | ✓ | | | | |
| `_PositionCurrency` | | ✓ | | | | |
| `_NominalCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoanContrActlDocHdrData` | `I_LoanContrActlDocHdrData` | [0..1] |
| `_LoanContrData` | `I_LoanContrData` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SettlementCurrency` | `I_Currency` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_NominalCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPOSTEDITEMDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPOSTEDITEMDATA')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPOSTEDTIMD',
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
    dataExtraction:{
        enabled: true,
        delta.changeDataCapture:{
            mapping:[
                {   table: 'VDBEPI',
                    role: #MAIN,
                    viewElement: ['CompanyCode', 'PostedDocumentID', 'PostedDocumentActivityNumber' ],
                    tableElement: ['BUKRS', 'RBELKPFD', 'RPOSNR' ]},

                {   table: 'VDBEKI',
                    role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['CompanyCode', 'PostedDocumentID'],
                    tableElement: ['BUKRS', 'RBELKPFD']}
            ]
        }
    }
}
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm : #SESSION_VARIABLE
@EndUserText.label: 'Posted Item for Loan Contract'

define view I_LoanContrPostedItemData
  as select from I_LoanContrActlDocItmData as _LoanContrActlDocItmData
  association [0..1] to I_LoanContrActlDocHdrData as _LoanContrActlDocHdrData on  $projection.CompanyCode      = _LoanContrActlDocHdrData.CompanyCode
                                                                              and $projection.PostedDocumentID = _LoanContrActlDocHdrData.PostedDocumentID
  association [0..1] to I_LoanContrData           as _LoanContrData           on  $projection.CompanyCode              = _LoanContrData.CompanyCode
                                                                              and _LoanContrData.LoanArchivingCategory = ' '
                                                                              and $projection.LoanContractID           = _LoanContrData.LoanContractID
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Currency                as _SettlementCurrency      on  $projection.CashFlowItemSettlementCurrency = _SettlementCurrency.Currency
  association [0..1] to I_Currency                as _PositionCurrency        on  $projection.CashFlowItemPositionCurrency = _PositionCurrency.Currency
  association [0..1] to I_Currency                as _NominalCurrency        on  $projection.CashFlowItmNominalAmtCrcy = _NominalCurrency.Currency
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key _LoanContrActlDocItmData.CompanyCode                    as CompanyCode,
  key _LoanContrActlDocItmData.PostedDocumentID               as PostedDocumentID,
  key _LoanContrActlDocItmData.PostedDocumentActivityNumber   as PostedDocumentActivityNumber,

      _LoanContrActlDocItmData.CashFlowItemType               as CashFlowItemType,
      _LoanContrActlDocItmData.CashFlowItemReferenceType      as CashFlowItemReferenceType,
      _LoanContrActlDocItmData.CashFlowItemCategory           as CashFlowItemCategory,
      @Semantics.amount.currencyCode: 'CashFlowItmNominalAmtCrcy'
      _LoanContrActlDocItmData.CashFlowItmNominalAmt          as CashFlowItmNominalAmt,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_NominalCurrency'
      _LoanContrActlDocItmData.CashFlowItmNominalAmtCrcy      as CashFlowItmNominalAmtCrcy,
      @Semantics.amount.currencyCode: 'CashFlowItemPositionCurrency'
      _LoanContrActlDocItmData.CshFlwItmAmtInPosCrcy          as CshFlwItmAmtInPosCrcy,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_PositionCurrency'
      _LoanContrActlDocItmData.CashFlowItemPositionCurrency   as CashFlowItemPositionCurrency,
      @Semantics.amount.currencyCode: 'CashFlowItemSettlementCurrency'
      _LoanContrActlDocItmData.CshFlwItmAmtInSettlmtCrcy      as CshFlwItmAmtInSettlmtCrcy,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_SettlementCurrency'
      _LoanContrActlDocItmData.CashFlowItemSettlementCurrency as CashFlowItemSettlementCurrency,
//      _LoanContrActlDocItmData.CashFlowItmAmtInLocalCrcy      as CashFlowItmAmtInLocalCrcy,
      _LoanContrActlDocItmData.CashFlowItemCalcDate           as CashFlowItemCalcDate,
      _LoanContrActlDocItmData.CashFlowItemDueDate            as CashFlowItemDueDate,
      _LoanContrActlDocItmData.CashFlowItemPaymentDate        as CashFlowItemPaymentDate,
      _LoanContrActlDocItmData.CalculationPeriodStartDate     as CalculationPeriodStartDate,
      _LoanContrActlDocItmData.CashFlowItemPostingDirection   as CashFlowItemPostingDirection,
      _LoanContrActlDocItmData.CshFlwItmDebitPostgAcct        as CshFlwItmDebitPostgAcct,
      _LoanContrActlDocItmData.CshFlwItmCreditPostgAcct       as CshFlwItmCreditPostgAcct,
      _LoanContrActlDocItmData.CashFlowItemPercentageRate     as CashFlowItemPercentageRate,
      _LoanContrActlDocItmData.CashFlowItemSource             as CashFlowItemSource,
      _LoanContrActlDocItmData.CalculationPeriodEndDate       as CalculationPeriodEndDate,
      _LoanContrActlDocItmData.CashFlowItemGenerationDate     as CashFlowItemGenerationDate,
      _LoanContrActlDocItmData.CashFlowItemGenerationTime     as CashFlowItemGenerationTime,
      _LoanContrActlDocItmData.CashFlowItemSequenceNumber     as CashFlowItemSequenceNumber,
      _LoanContrActlDocItmData.LoanBusinessArea               as LoanBusinessArea,
      _LoanContrActlDocItmData.FinConditionConditionType      as FinConditionConditionType,
      _LoanContrActlDocItmData.CalcPeriodStartDateIsExclusive as CalcPeriodStartDateIsExclusive,
      _LoanContrActlDocItmData.CalcPeriodEndDateIsInclusive   as CalcPeriodEndDateIsInclusive,
      _LoanContrActlDocItmData.CalcEndDteIsInclusive          as CalcEndDteIsInclusive,
      _LoanContrActlDocItmData.CshFlwItmSettlementDate        as CshFlwItmSettlementDate,
      _LoanContrActlDocItmData.CshFlwItmClrgDteIsInclusive    as CshFlwItmClrgDteIsInclusive,
      _LoanContrActlDocItmData.AccrDefrlRefFlwCat             as AccrDefrlRefFlwCat,
      _LoanContrActlDocItmData.DebitCrdtCtrlActyType          as DebitCrdtCtrlActyType,
      _LoanContrActlDocItmData.CashFlowItemEnteredBy          as CashFlowItemEnteredBy,
      _LoanContrActlDocItmData.CashFlowItemEnteredDate        as CashFlowItemEnteredDate,
      _LoanContrActlDocItmData.CashFlowItemEnteredTime        as CashFlowItemEnteredTime,
      _LoanContrActlDocItmData.CashFlowItemEnteredSource      as CashFlowItemEnteredSource,
      _LoanContrActlDocItmData.CashFlowItemEditedBy           as CashFlowItemEditedBy,
      _LoanContrActlDocItmData.CashFlowItemEditedDate         as CashFlowItemEditedDate,
      _LoanContrActlDocItmData.CashFlowItemEditedTime         as CashFlowItemEditedTime,
      _LoanContrActlDocItmData.CashFlowItemEditedSource       as CashFlowItemEditedSource,
      _LoanContrActlDocItmData.LoanMainBrwrCustNmbr           as LoanMainBrwrCustNmbr,
      _LoanContrActlDocItmData.AccountingDocument             as AccountingDocument,
      _LoanContrActlDocItmData.LoanCshFlwItmActivityCat       as LoanCshFlwItmActivityCat,
      _LoanContrActlDocItmData.CshFlwItmDirectionOfFlow       as CshFlwItmDirectionOfFlow,
      _LoanContrActlDocItmData.CashFlowItemBillDueDate        as CashFlowItemBillDueDate,

      _LoanContrActlDocHdrData.LoanContractID                 as LoanContractID,
      _LoanContrActlDocHdrData.LoanClassfctnNmbr              as LoanClassfctnNmbr,
      _LoanContrActlDocHdrData.LoanLifeCycleStatus            as LoanLifeCycleStatus,
      _LoanContrActlDocHdrData.LoanAcctAssgmtRef              as LoanAcctAssgmtRef,
      _LoanContrActlDocHdrData.CshFlwItmGLAccount             as CshFlwItmGLAccount,
      _LoanContrActlDocHdrData.CashFlowItemPostingDate        as CashFlowItemPostingDate,
      _LoanContrActlDocHdrData.CashFlowItemReversalStatus     as CashFlowItemReversalStatus,
      _LoanContrActlDocHdrData.ReverseDocument                as ReverseDocument,
      _LoanContrActlDocHdrData.WvrWriteoffDocument            as WvrWriteoffDocument,
      _LoanContrActlDocHdrData.CshFlwItmTransfToFinAcctgDte   as CshFlwItmTransfToFinAcctgDte,
      _LoanContrActlDocHdrData.CshFlwItmBusTransNmbr          as CshFlwItmBusTransNmbr,

      _CompanyCode,
      _SettlementCurrency,
      _PositionCurrency,
      _NominalCurrency,
      _LoanContrActlDocHdrData,
      _LoanContrData
}
```
