---
name: I_LOANCONTRACTLDOCHDRDATA
description: "Actual Document Header for Loan Contract"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCHDRDATA')/$value
semantic_en: "Actual Document Header for Loan Contract"
semantic_vi: "Actual Document Header for Loan Contract — CDS view giao diện dựa trên vdbeki."
keywords:
  - "actual"
  - "document"
  - "header"
  - "for"
  - "loan"
  - "contract"
  - "company"
  - "code"
  - "posted"
  - "classfctn"
  - "nmbr"
  - "life"
  - "cycle"
  - "status"
tags:
  - FS
  - component:FS-CML
  - contract
  - document
  - FS-CML
  - interface-view
---
# I_LOANCONTRACTLDOCHDRDATA

**Actual Document Header for Loan Contract**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCHDRDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `PostedDocumentID` | ✓ | |  | `rbelkpfd` | `CHAR(10)` | Document Number of Document Header (Loan) |
| `LoanContractID` |  | |  | `ranl` | `CHAR(13)` | Contract Number |
| `LoanClassfctnNmbr` |  | |  | `rklammer` | `CHAR(13)` | Classification Number for Finance Projects |
| `LoanLifeCycleStatus` |  | |  | `sstati` | `NUMC(2)` | Status of data record |
| `LoanAcctAssgmtRef` |  | |  | `rrefkont` | `CHAR(8)` | Account Assignment Reference in Financial Assets Management |
| `CshFlwItmGLAccount` |  | |  | `hkont` | `CHAR(10)` | General Ledger Account |
| `LoanBusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `CashFlowItemPostingDate` |  | |  | `dbudat` | `DATS(8)` | Posting Date in the Document |
| `CashFlowItemReversalStatus` |  | |  | `sstorno` | `CHAR(1)` | Reversal indicator |
| `ReverseDocument` |  | |  | `rstblg` | `CHAR(10)` | Reverse Document Number |
| `WvrWriteoffDocument` |  | |  | `rzebel` | `CHAR(10)` | Doc.no. of debit pos. doc.header (only for inc.pmnt records) |
| `CshFlwItmTransfToFinAcctgDte` |  | |  | `danfibu` | `DATS(8)` | Date of transferal to FiAc |
| `CashFlowItemEnteredBy` |  | |  | `rerf` | `CHAR(12)` | Entered By |
| `CashFlowItemEnteredDate` |  | |  | `derf` | `DATS(8)` | First Entered On |
| `CashFlowItemEnteredTime` |  | |  | `terf` | `TIMS(6)` | Time of Creation |
| `CashFlowItemEnteredSource` |  | |  | `reher` | `CHAR(10)` | Source of Initial Entry |
| `CshFlwItmBusTransNmbr` |  | |  | `rpnnr` | `CHAR(10)` | Daybook no. |
| `AccountingDocument` |  | |  | `ruzbel` | `CHAR(10)` | Document Number of an Accounting Document |
| `_LoanContrData` | | ✓ | | | | |
| `_LoanContrActlDocItmData` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoanContrData` | `I_LoanContrData` | [0..1] |
| `_LoanContrActlDocItmData` | `I_LoanContrActlDocItmData` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCHDRDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCHDRDATA')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCACTDOCHDRD',
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
@EndUserText.label: 'Actual Document Header for Loan Contract'

define view I_LoanContrActlDocHdrData
  as select from vdbeki
  association [0..1] to I_LoanContrData           as _LoanContrData           on  $projection.CompanyCode              = _LoanContrData.CompanyCode
                                                                              and _LoanContrData.LoanArchivingCategory = ' '
                                                                              and $projection.LoanContractID           = _LoanContrData.LoanContractID
  association [0..*] to I_LoanContrActlDocItmData as _LoanContrActlDocItmData on  $projection.CompanyCode      = _LoanContrActlDocItmData.CompanyCode
                                                                              and $projection.PostedDocumentID = _LoanContrActlDocItmData.PostedDocumentID
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessArea            as _BusinessArea            on  $projection.LoanBusinessArea = _BusinessArea.BusinessArea

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key vdbeki.bukrs    as CompanyCode,
  key vdbeki.rbelkpfd as PostedDocumentID,

      vdbeki.ranl     as LoanContractID,
      vdbeki.rklammer as LoanClassfctnNmbr,
      vdbeki.sstati   as LoanLifeCycleStatus,
      vdbeki.rrefkont as LoanAcctAssgmtRef,
      vdbeki.hkont    as CshFlwItmGLAccount,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      vdbeki.gsber    as LoanBusinessArea,
      vdbeki.dbudat   as CashFlowItemPostingDate,
      vdbeki.sstorno  as CashFlowItemReversalStatus,
      vdbeki.rstblg   as ReverseDocument,
      vdbeki.rzebel   as WvrWriteoffDocument,
      vdbeki.danfibu  as CshFlwItmTransfToFinAcctgDte,
      vdbeki.rerf     as CashFlowItemEnteredBy,
      vdbeki.derf     as CashFlowItemEnteredDate,
      vdbeki.terf     as CashFlowItemEnteredTime,
      vdbeki.reher    as CashFlowItemEnteredSource,
      vdbeki.rpnnr    as CshFlwItmBusTransNmbr,
      vdbeki.ruzbel   as AccountingDocument,

      _LoanContrData,
      _LoanContrActlDocItmData,
      _CompanyCode,
      _BusinessArea
}
```
