---
name: I_LOANCONTRPLNDITMDATA
description: "Planned Items for Loan Contract"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPLNDITMDATA')/$value
semantic_en: "Planned Items for Loan Contract"
semantic_vi: "Planned Items for Loan Contract — CDS view giao diện dựa trên vdbepp."
keywords:
  - "planned"
  - "items"
  - "for"
  - "loan"
  - "contract"
  - "company"
  - "code"
  - "cash"
  - "flow"
  - "item"
  - "generation"
  - "date"
  - "time"
  - "sequence"
  - "number"
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
  - plan
---
# I_LOANCONTRPLNDITMDATA

**Planned Items for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPLNDITMDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `LoanContractID` | ✓ | |  | `ranl` | `CHAR(13)` | Contract Number |
| `CashFlowItemGenerationDate` | ✓ | |  | `dtrans` | `DATS(8)` | Flow data key: System date |
| `CashFlowItemGenerationTime` | ✓ | |  | `ttrans` | `TIMS(6)` | Transaction data key: system time |
| `CashFlowItemSequenceNumber` | ✓ | |  | `ntrans` | `NUMC(4)` | Transaction data key: Consecutive number |
| `CashFlowItemEnteredBy` |  | |  | `rerf` | `CHAR(12)` | Entered By |
| `CashFlowItemEnteredDate` |  | |  | `derf` | `DATS(8)` | First Entered On |
| `CashFlowItemEnteredTime` |  | |  | `terf` | `TIMS(6)` | Time of Creation |
| `CashFlowItemEnteredSource` |  | |  | `reher` | `CHAR(10)` | Source of Initial Entry |
| `CashFlowItemEditedBy` |  | |  | `rbear` | `CHAR(12)` | Employee ID |
| `CashFlowItemEditedDate` |  | |  | `dbear` | `DATS(8)` | Last Edited On |
| `CashFlowItemEditedTime` |  | |  | `tbear` | `TIMS(6)` | Last Edited At |
| `CashFlowItemEditedSource` |  | |  | `rbher` | `CHAR(10)` | Editing Source |
| `CashFlowItemType` |  | |  | `sbewart` | `CHAR(4)` | Flow Type |
| `CashFlowItemReferenceType` |  | |  | `srefbew` | `CHAR(4)` | Reference flow type |
| `CashFlowItemCategory` |  | |  | `sbewziti` | `CHAR(4)` | Flow Category |
| `CashFlowItemPostingDirection` |  | |  | `ssolhab` | `CHAR(1)` | Debit/credit indicator |
| `CashFlowItemReversalStatus` |  | |  | `sstorno` | `CHAR(1)` | Reversal indicator |
| `ReverseDocument` |  | |  | `rstblg` | `CHAR(10)` | Reverse Document Number |
| `LoanLifeCycleStatus` |  | |  | `sstati` | `NUMC(2)` | Status of data record |
| `LoanProductType` |  | |  | `gsart` | `CHAR(3)` | Product Type |
| `LoanAcctAssgmtRef` |  | |  | `rrefkont` | `CHAR(8)` | Account Assignment Reference in Financial Assets Management |
| `LoanBusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `CashFlowItmNominalAmt` |  | |  | `bnwhr` | `CURR(13)` | Nominal amount |
| `CashFlowItmNominalAmtCrcy` |  | |  | `snwhr` | `CUKY(5)` | Currency of nominal amount |
| `CashFlowItemPositionCurrency` |  | |  | `sbwhr` | `CUKY(5)` | Position Currency (Currency of Position Amount) |
| `CshFlwItmAmtInPosCrcy` |  | |  | `bbwhr` | `CURR(13)` | Amount in Position Currency |
| `CashFlowItemSettlementCurrency` |  | |  | `scwhr` | `CUKY(5)` | Settlement Currency |
| `CshFlwItmAmtInSettlmtCrcy` |  | |  | `bcwhr` | `CURR(13)` | Settlement Amount |
| `CashFlowItemCalcDate` |  | |  | `dvalut` | `DATS(8)` | Calculation Date |
| `CashFlowItemDueDate` |  | |  | `dfaell` | `DATS(8)` | Due date/calculation date |
| `CashFlowItemPaymentDate` |  | |  | `ddispo` | `DATS(8)` | Payment Date |
| `CalculationPeriodStartDate` |  | |  | `dbervon` | `DATS(8)` | Start of Calculation Period |
| `CalculationPeriodEndDate` |  | |  | `dberbis` | `DATS(8)` | End of Calculation Period |
| `CshFlwItmDebitPostgAcct` |  | |  | `rsoll` | `CHAR(10)` | Account for debit posting |
| `CshFlwItmCreditPostgAcct` |  | |  | `rhaben` | `CHAR(10)` | Account for credit posting |
| `CashFlowItemPercentageRate` |  | |  | `pkond` | `DEC(10)` | Percentage rate for condition items |
| `CashFlowItemSource` |  | |  | `swoher` | `CHAR(1)` | Source of flow record |
| `LoanClassfctnNmbr` |  | |  | `rklammer` | `CHAR(13)` | Classification Number for Finance Projects |
| `CshFlwItmBusTransNmbr` |  | |  | `rpnnr` | `CHAR(10)` | Daybook no. |
| `FinConditionConditionType` |  | |  | `skoart` | `NUMC(4)` | Condition Type (Smallest Subdivision of Condition Records) |
| `CalcPeriodStartDateIsExclusive` |  | |  | `sexclvon` | `NUMC(1)` | Exclusive Indicator for the Start of a Calculation Period |
| `CalcPeriodEndDateIsInclusive` |  | |  | `sinclbis` | `NUMC(1)` | Inclusive Indicator for the End of a Calculation Period |
| `CalcEndDteIsInclusive` |  | |  | `sincl` | `NUMC(1)` | Inclusive Indicator for Beginning and End of a Period |
| `CshFlwItmSettlementDate` |  | |  | `dverrech` | `DATS(8)` | Settlement date |
| `CshFlwItmClrgDteIsInclusive` |  | |  | `sinclverr` | `NUMC(1)` | Inclusive Indicator for Clearing Date |
| `AccrDefrlRefFlwCat` |  | |  | `srefziti` | `CHAR(4)` | Refer.flow category in accrual/deferral flow records |
| `DebitCrdtCtrlActyType` |  | |  | `svorgkz` | `NUMC(2)` | Activity indicator for debit/credit control |
| `WvrWriteoffDocument` |  | |  | `rzebel` | `CHAR(10)` | Document number of waiver/write-off document |
| `LoanCshFlwItmIntrstFixingDte` |  | |  | `dzfest` | `DATS(8)` | Interest Rate Fixing Date |
| `LoanMainBrwrCustNmbr` |  | |  | `hdn_kunnr` | `CHAR(10)` | Main Borrower Customer Number |
| `AccountingDocument` |  | |  | `ruzbel` | `CHAR(10)` | Document Number of an Accounting Document |
| `LoanCshFlwItmActivityCat` |  | |  | `vorgtyp` | `CHAR(4)` | Activity Category (Posting Area) |
| `CshFlwItmDirectionOfFlow` |  | |  | `ssign` | `CHAR(1)` | Direction of Flow |
| `_LoanContrData` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SettlementCurrency` | | ✓ | | | | |
| `_PositionCurrency` | | ✓ | | | | |
| `_NominalCurrency` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FinCndnConditionType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_LoanCshFlwItmActivityCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoanContrData` | `I_LoanContrData` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SettlementCurrency` | `I_Currency` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_NominalCurrency` | `I_Currency` | [0..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_FinCndnConditionType` | `I_FinCndnConditionType` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_LoanCshFlwItmActivityCat` | `I_LoanCshFlwItmActivityCat` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPLNDITMDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPLNDITMDATA')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPLNDITMD',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel.usageType:
{
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
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Planned Items for Loan Contract'
define view I_LoanContrPlndItmData
  as select from vdbepp
  association [0..1] to I_LoanContrData             as _LoanContrData             on  $projection.CompanyCode              = _LoanContrData.CompanyCode
                                                                                  and _LoanContrData.LoanArchivingCategory = ' '
                                                                                  and $projection.LoanContractID           = _LoanContrData.LoanContractID
  association [0..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Currency                  as _SettlementCurrency        on  $projection.CashFlowItemSettlementCurrency = _SettlementCurrency.Currency
  association [0..1] to I_Currency                  as _PositionCurrency          on  $projection.CashFlowItemPositionCurrency = _PositionCurrency.Currency
  association [0..1] to I_Currency                  as _NominalCurrency           on  $projection.CashFlowItmNominalAmtCrcy = _NominalCurrency.Currency
  association [0..1] to I_FinancialinstrProductType as _FinancialInstrProductType on  $projection.LoanProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..1] to I_BusinessArea              as _BusinessArea              on  $projection.LoanBusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_FinCndnConditionType      as _FinCndnConditionType      on  $projection.FinConditionConditionType      = _FinCndnConditionType.FinConditionConditionType
                                                                                  and _FinCndnConditionType.TreasuryContractType = '1'
  association [0..1] to I_Customer                  as _Customer                  on  $projection.LoanMainBrwrCustNmbr = _Customer.Customer
  association [0..1] to I_LoanCshFlwItmActivityCat  as _LoanCshFlwItmActivityCat  on  $projection.LoanCshFlwItmActivityCat = _LoanCshFlwItmActivityCat.LoanCshFlwItmActivityCat
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key vdbepp.bukrs     as CompanyCode,
  key vdbepp.ranl      as LoanContractID,
  key vdbepp.dtrans    as CashFlowItemGenerationDate,
  key vdbepp.ttrans    as CashFlowItemGenerationTime,
  key vdbepp.ntrans    as CashFlowItemSequenceNumber,

      vdbepp.rerf      as CashFlowItemEnteredBy,
      vdbepp.derf      as CashFlowItemEnteredDate,
      vdbepp.terf      as CashFlowItemEnteredTime,
      vdbepp.reher     as CashFlowItemEnteredSource,
      vdbepp.rbear     as CashFlowItemEditedBy,
      vdbepp.dbear     as CashFlowItemEditedDate,
      vdbepp.tbear     as CashFlowItemEditedTime,
      vdbepp.rbher     as CashFlowItemEditedSource,
      vdbepp.sbewart   as CashFlowItemType,
      vdbepp.srefbew   as CashFlowItemReferenceType,
      vdbepp.sbewziti  as CashFlowItemCategory,
      vdbepp.ssolhab   as CashFlowItemPostingDirection,
      vdbepp.sstorno   as CashFlowItemReversalStatus,
      vdbepp.rstblg    as ReverseDocument,
      vdbepp.sstati    as LoanLifeCycleStatus,
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
      vdbepp.gsart     as LoanProductType,
      vdbepp.rrefkont  as LoanAcctAssgmtRef,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      vdbepp.gsber     as LoanBusinessArea,
      @Semantics.amount.currencyCode: 'CashFlowItmNominalAmtCrcy'
      vdbepp.bnwhr     as CashFlowItmNominalAmt,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_NominalCurrency'
      vdbepp.snwhr     as CashFlowItmNominalAmtCrcy,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_PositionCurrency'
      vdbepp.sbwhr     as CashFlowItemPositionCurrency,
      @Semantics.amount.currencyCode: 'CashFlowItemPositionCurrency'
      vdbepp.bbwhr     as CshFlwItmAmtInPosCrcy,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_SettlementCurrency'
      vdbepp.scwhr     as CashFlowItemSettlementCurrency,
      @Semantics.amount.currencyCode: 'CashFlowItemSettlementCurrency'
      vdbepp.bcwhr     as CshFlwItmAmtInSettlmtCrcy,
      //      vdbepp.bhwhr     as CashFlowItmAmtInLocalCurrency,
      vdbepp.dvalut    as CashFlowItemCalcDate,
      vdbepp.dfaell    as CashFlowItemDueDate,
      vdbepp.ddispo    as CashFlowItemPaymentDate,
      vdbepp.dbervon   as CalculationPeriodStartDate,
      vdbepp.dberbis   as CalculationPeriodEndDate,
      vdbepp.rsoll     as CshFlwItmDebitPostgAcct,
      vdbepp.rhaben    as CshFlwItmCreditPostgAcct,
      vdbepp.pkond     as CashFlowItemPercentageRate,
      vdbepp.swoher    as CashFlowItemSource,
      vdbepp.rklammer  as LoanClassfctnNmbr,
      vdbepp.rpnnr     as CshFlwItmBusTransNmbr,
      @ObjectModel.foreignKey.association: '_FinCndnConditionType'
      vdbepp.skoart    as FinConditionConditionType,
      vdbepp.sexclvon  as CalcPeriodStartDateIsExclusive,
      vdbepp.sinclbis  as CalcPeriodEndDateIsInclusive,
      vdbepp.sincl     as CalcEndDteIsInclusive,
      vdbepp.dverrech  as CshFlwItmSettlementDate,
      vdbepp.sinclverr as CshFlwItmClrgDteIsInclusive,
      vdbepp.srefziti  as AccrDefrlRefFlwCat,
      vdbepp.svorgkz   as DebitCrdtCtrlActyType,
      vdbepp.rzebel    as WvrWriteoffDocument,
      vdbepp.dzfest    as LoanCshFlwItmIntrstFixingDte,
      @ObjectModel.foreignKey.association: '_Customer'
      vdbepp.hdn_kunnr as LoanMainBrwrCustNmbr,
      vdbepp.ruzbel    as AccountingDocument,
      @ObjectModel.foreignKey.association: '_LoanCshFlwItmActivityCat'
      vdbepp.vorgtyp   as LoanCshFlwItmActivityCat,
      vdbepp.ssign     as CshFlwItmDirectionOfFlow,

      _LoanContrData,
      _CompanyCode,
      _SettlementCurrency,
      _PositionCurrency,
      _NominalCurrency,
      _FinancialInstrProductType,
      _BusinessArea,
      _FinCndnConditionType,
      _Customer,
      _LoanCshFlwItmActivityCat
}
```
