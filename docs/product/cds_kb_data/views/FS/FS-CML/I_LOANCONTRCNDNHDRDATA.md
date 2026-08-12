---
name: I_LOANCONTRCNDNHDRDATA
description: "Conditon Header for Loan Contract"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCNDNHDRDATA')/$value
semantic_en: "Conditon Header for Loan Contract"
semantic_vi: "Conditon Header for Loan Contract — CDS view giao diện dựa trên vzzkoko."
keywords:
  - "conditon"
  - "header"
  - "for"
  - "loan"
  - "contract"
  - "company"
  - "code"
  - "product"
  - "category"
  - "cndn"
  - "valdty"
  - "strt"
  - "condition"
  - "offer"
  - "number"
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
---
# I_LOANCONTRCNDNHDRDATA

**Conditon Header for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCNDNHDRDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `LoanProductCategory` | ✓ | |  | `sanlf` | `NUMC(3)` | Product Category |
| `LoanContractID` | ✓ | |  | `rkey1` | `CHAR(13)` | Key part 1 |
| `LoanCndnHdrValdtyStrtDte` | ✓ | |  | `dguel_kk` | `DATS(8)` | Date Condition Effective from |
| `LoanConditionHeaderOfferNumber` | ✓ | |  | `nlfd_ang` | `NUMC(3)` | Offer consecutive number |
| `LoanLifeCycleStatus` |  | |  | `sstati` | `NUMC(2)` | Status of data record |
| `LoanConditionHeaderType` |  | |  | `skokoart` | `NUMC(2)` | Type of Condition Header |
| `LoanRepaymentType` |  | |  | `stilgart` | `NUMC(1)` | Repayment Type Indicator |
| `LoanDisbursementRate` |  | |  | `kzahlung` | `DEC(10)` | Pay-in/disbursement rate |
| `LoanCommittedCapitalAmount` |  | |  | `bzusage` | `CURR(13)` | Commitment capital |
| `LoanCommittedCapitalCrcy` |  | |  | `swhrzusa` | `CUKY(5)` | Currency of commitment amount |
| `LoanEffectiveInterestRate` |  | |  | `peffzins` | `DEC(10)` | Effective Interest Rate |
| `LoanEffectiveInterestMethod` |  | |  | `seffmeth` | `NUMC(1)` | Effective Interest Method (Financial Mathematics) |
| `InterestCalculationMethod` |  | |  | `szbmeth` | `CHAR(1)` | Interest Calculation Method |
| `LoanNoticeDate` |  | |  | `dkuend` | `DATS(8)` | Date of notice |
| `LoanNoticeReason` |  | |  | `skuend` | `NUMC(3)` | Reason for Notice |
| `LoanLndrErlstNtcDate` |  | |  | `dkuenddg` | `DATS(8)` | Earliest Possible Date for Notice Given by the Lender |
| `LoanTermStartDate` |  | |  | `dblfz` | `DATS(8)` | Start of Term |
| `LoanTermEndDate` |  | |  | `delfz` | `DATS(8)` | End of Term |
| `LoanIntEffctvIntrstRate` |  | |  | `pmaneffz` | `DEC(10)` | Internal Effective Interest Rate |
| `LoanIntEffctvIntrstMeth` |  | |  | `seffm2` | `NUMC(1)` | Effective Interest Method (Financial Mathematics) |
| `LoanLenderNoticeArrgmt` |  | |  | `skuegl` | `NUMC(3)` | Notice Arrangement Lender |
| `LoanCndnHdrValdtyEndDte` |  | |  | `defsz` | `DATS(8)` | Date of fixed period end |
| `LoanCndnEffctvIntrstStrtDte` |  | |  | `dabeffz` | `DATS(8)` | Date when calculation of effective rate starts |
| `LoanContrBrwrNtcArrgmt` |  | |  | `skuedn` | `NUMC(3)` | Notice Arrangement Borrower |
| `LoanContrNtcType` |  | |  | `skueart` | `NUMC(3)` | Notice Type for the Loan |
| `InterestDaysCalendar` |  | |  | `skalidwt` | `CHAR(2)` | Interest Calendar |
| `_LoanContrData` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialInstrProdCat` | | ✓ | | | | |
| `_LoanConditionHeaderType` | | ✓ | | | | |
| `_LoanNoticeReason` | | ✓ | | | | |
| `_LoanLenderNoticeArrgmt` | | ✓ | | | | |
| `_LoanContrBrwrNtcArrgmt` | | ✓ | | | | |
| `_LoanContractNoticeType` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoanContrData` | `I_LoanContrData` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |
| `_LoanConditionHeaderType` | `I_LoanConditionHeaderType` | [0..1] |
| `_LoanNoticeReason` | `I_LoanNoticeReason` | [0..1] |
| `_LoanLenderNoticeArrgmt` | `I_LoanLenderNoticeArrgmt` | [0..1] |
| `_LoanContrBrwrNtcArrgmt` | `I_LoanContrBrwrNtcArrgmt` | [0..1] |
| `_LoanContractNoticeType` | `I_LoanContractNoticeType` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCNDNHDRDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCNDNHDRDATA')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCCDNHDRD',
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
        mapping: [ {
           table : 'VZZKOKO',
           role : #MAIN,
           viewElement : ['CompanyCode', 'LoanProductCategory', 'LoanContractID', 'LoanCndnHdrValdtyStrtDte', 'LoanConditionHeaderOfferNumber'],
           tableElement : ['BUKRS', 'SANLF', 'RKEY1', 'DGUEL_KK', 'NLFD_ANG'],
           filter: [{operator: #BETWEEN, tableElement: 'SANLF', value: '300', highValue: '370' } ]
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Conditon Header for Loan Contract'

define view I_LoanContrCndnHdrData
  as select from vzzkoko
  association [0..1] to I_LoanContrData           as _LoanContrData           on  $projection.CompanyCode    = _LoanContrData.CompanyCode
                                                                              and _LoanContrData.LoanArchivingCategory = ' '
                                                                              and $projection.LoanContractID = _LoanContrData.LoanContractID
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialInstrProdCat   as _FinancialInstrProdCat   on  $projection.LoanProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory
  association [0..1] to I_LoanConditionHeaderType as _LoanConditionHeaderType on  $projection.LoanConditionHeaderType = _LoanConditionHeaderType.LoanConditionHeaderType
  association [0..1] to I_LoanNoticeReason        as _LoanNoticeReason        on  $projection.LoanNoticeReason = _LoanNoticeReason.LoanNoticeReason
  association [0..1] to I_LoanLenderNoticeArrgmt  as _LoanLenderNoticeArrgmt  on  $projection.LoanLenderNoticeArrgmt = _LoanLenderNoticeArrgmt.LoanLenderNoticeArrgmt
  association [0..1] to I_LoanContrBrwrNtcArrgmt  as _LoanContrBrwrNtcArrgmt  on  $projection.LoanContrBrwrNtcArrgmt = _LoanContrBrwrNtcArrgmt.LoanContrBrwrNtcArrgmt
  association [0..1] to I_LoanContractNoticeType  as _LoanContractNoticeType  on  $projection.LoanContrNtcType = _LoanContractNoticeType.LoanContrNtcType
  association [0..1] to I_FactoryCalendar         as _FactoryCalendar         on  $projection.InterestDaysCalendar = _FactoryCalendar.FactoryCalendar
  association [0..1] to I_Currency                as _Currency                on  $projection.LoanCommittedCapitalCrcy = _Currency.Currency
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key vzzkoko.bukrs    as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'
  key vzzkoko.sanlf    as LoanProductCategory,
  key vzzkoko.rkey1    as LoanContractID,
  key vzzkoko.dguel_kk as LoanCndnHdrValdtyStrtDte,
  key vzzkoko.nlfd_ang as LoanConditionHeaderOfferNumber,

      vzzkoko.sstati   as LoanLifeCycleStatus,
      @ObjectModel.foreignKey.association: '_LoanConditionHeaderType'
      vzzkoko.skokoart as LoanConditionHeaderType,
      vzzkoko.stilgart as LoanRepaymentType,
      vzzkoko.kzahlung as LoanDisbursementRate,
      @Semantics.amount.currencyCode: 'LoanCommittedCapitalCrcy'
      vzzkoko.bzusage  as LoanCommittedCapitalAmount,
      @Semantics.currencyCode
      @ObjectModel.foreignKey.association: '_Currency'
      vzzkoko.swhrzusa as LoanCommittedCapitalCrcy,
      vzzkoko.peffzins as LoanEffectiveInterestRate,
      vzzkoko.seffmeth as LoanEffectiveInterestMethod,
      vzzkoko.szbmeth  as InterestCalculationMethod,
      //      vzzkoko.sdisko,
      vzzkoko.dkuend   as LoanNoticeDate,
      @ObjectModel.foreignKey.association: '_LoanNoticeReason'
      vzzkoko.skuend   as LoanNoticeReason,
      vzzkoko.dkuenddg as LoanLndrErlstNtcDate,
      vzzkoko.dblfz    as LoanTermStartDate,
      vzzkoko.delfz    as LoanTermEndDate,
      vzzkoko.pmaneffz as LoanIntEffctvIntrstRate,
      vzzkoko.seffm2   as LoanIntEffctvIntrstMeth,
      @ObjectModel.foreignKey.association: '_LoanLenderNoticeArrgmt'
      vzzkoko.skuegl   as LoanLenderNoticeArrgmt,
      vzzkoko.defsz    as LoanCndnHdrValdtyEndDte,
      vzzkoko.dabeffz  as LoanCndnEffctvIntrstStrtDte,
      @ObjectModel.foreignKey.association: '_LoanContrBrwrNtcArrgmt'
      vzzkoko.skuedn   as LoanContrBrwrNtcArrgmt,
      @ObjectModel.foreignKey.association: '_LoanContractNoticeType'
      vzzkoko.skueart  as LoanContrNtcType,
      //      vzzkoko.dmarktzins,
      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      vzzkoko.skalidwt as InterestDaysCalendar,

      _LoanContrData,
      _CompanyCode,
      _FinancialInstrProdCat,
      _LoanConditionHeaderType,
      _LoanNoticeReason,
      _LoanLenderNoticeArrgmt,
      _LoanContrBrwrNtcArrgmt,
      _LoanContractNoticeType,
      _FactoryCalendar,
      _Currency
}
where
  vzzkoko.sanlf between '300' and '370'
```
