---
name: I_LOANCONTRCHGPOINTERDATA
description: "Change Pointer for Loan Contract"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCHGPOINTERDATA')/$value
semantic_en: "Change Pointer for Loan Contract"
semantic_vi: "Change Pointer for Loan Contract — CDS view giao diện dựa trên vdchgptr."
keywords:
  - "change"
  - "pointer"
  - "for"
  - "loan"
  - "contract"
  - "company"
  - "code"
  - "archiving"
  - "category"
  - "last"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
---
# I_LOANCONTRCHGPOINTERDATA

**Change Pointer for Loan Contract**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCHGPOINTERDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanChangePointerUUID` | ✓ | |  | `guid` | `CHAR(32)` | GUID in 'CHAR' Format in Uppercase |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `LoanArchivingCategory` |  | |  | `sarchiv` | `CHAR(1)` | Archiving Category Indicator |
| `LoanContractID` |  | |  | `ranl` | `CHAR(13)` | Contract Number |
| `LoanChgPointerLastChgDteTme` |  | |  | `timestamp` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LoanChgPointerChangeCat` |  | |  | `chgcatg` | `CHAR(4)` | Change Category |
| `LoanChgPointerChgSubCat` |  | |  | `chgcatgsub` | `CHAR(4)` | Change Sub-Category |
| `LoanChgPointerEnteredDate` |  | |  | `derf` | `DATS(8)` | First Entered On |
| `LoanChgPointerEnteredTime` |  | |  | `terf` | `TIMS(6)` | Time of Creation |
| `LoanChgPointerEnteredBy` |  | |  | `rerf` | `CHAR(12)` | Entered By |
| `LoanChgPointerEnteredSource` |  | |  | `reher` | `CHAR(10)` | Source of Initial Entry |
| `LoanChgPointerProcgSts` |  | |  | `ale_process` | `CHAR(1)` | Status of Change Pointer Regarding ALE Processing |
| `LoanChgPointerProcgGrp` |  | |  | `ale_exp_group` | `NUMC(2)` | ALE Processing Group |
| `_LoanContrData` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_LoanArchivingCategory` | | ✓ | | | | |
| `_LoanChgPointerChangeCat` | | ✓ | | | | |
| `_LoanChgPointerChgSubCat` | | ✓ | | | | |
| `_LoanChgPointerProcgSts` | | ✓ | | | | |
| `_LoanChgPointerProcgGrp` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoanContrData` | `I_LoanContrData` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_LoanArchivingCategory` | `I_LoanArchivingCategory` | [0..1] |
| `_LoanChgPointerChangeCat` | `I_LoanChgPointerChangeCat` | [0..1] |
| `_LoanChgPointerChgSubCat` | `I_LoanChgPointerChgSubCat` | [0..1] |
| `_LoanChgPointerProcgSts` | `I_LoanChgPointerProcgSts` | [0..1] |
| `_LoanChgPointerProcgGrp` | `I_LoanChgPointerProcgGrp` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCHGPOINTERDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCHGPOINTERDATA')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCCHGPTRD',
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
@EndUserText.label: 'Change Pointer for Loan Contract'

define view I_LoanContrChgPointerData
  as select from vdchgptr
  association [0..1] to I_LoanContrData           as _LoanContrData           on  $projection.CompanyCode              = _LoanContrData.CompanyCode
                                                                              and _LoanContrData.LoanArchivingCategory = ' '
                                                                              and $projection.LoanContractID           = _LoanContrData.LoanContractID
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_LoanArchivingCategory   as _LoanArchivingCategory   on  $projection.LoanArchivingCategory = _LoanArchivingCategory.LoanArchivingCategory
  association [0..1] to I_LoanChgPointerChangeCat as _LoanChgPointerChangeCat on  $projection.LoanChgPointerChangeCat = _LoanChgPointerChangeCat.LoanChgPointerChangeCat
  association [0..1] to I_LoanChgPointerChgSubCat as _LoanChgPointerChgSubCat on  $projection.LoanChgPointerChangeCat = _LoanChgPointerChgSubCat.LoanChgPointerChangeCat
                                                                              and $projection.LoanChgPointerChgSubCat = _LoanChgPointerChgSubCat.LoanChgPointerChgSubCat
  association [0..1] to I_LoanChgPointerProcgSts  as _LoanChgPointerProcgSts  on  $projection.LoanChgPointerProcgSts = _LoanChgPointerProcgSts.LoanChgPointerProcgSts
  association [0..1] to I_LoanChgPointerProcgGrp  as _LoanChgPointerProcgGrp  on  $projection.LoanChgPointerProcgGrp = _LoanChgPointerProcgGrp.LoanChgPointerProcgGrp
{
  key vdchgptr.guid          as LoanChangePointerUUID,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      vdchgptr.bukrs         as CompanyCode,
      @ObjectModel.foreignKey.association: '_LoanArchivingCategory'
      vdchgptr.sarchiv       as LoanArchivingCategory,
      vdchgptr.ranl          as LoanContractID,
      vdchgptr.timestamp     as LoanChgPointerLastChgDteTme,
      @ObjectModel.foreignKey.association: '_LoanChgPointerChangeCat'
      vdchgptr.chgcatg       as LoanChgPointerChangeCat,
      @ObjectModel.foreignKey.association: '_LoanChgPointerChgSubCat'
      vdchgptr.chgcatgsub    as LoanChgPointerChgSubCat,
      vdchgptr.derf          as LoanChgPointerEnteredDate,
      vdchgptr.terf          as LoanChgPointerEnteredTime,
      vdchgptr.rerf          as LoanChgPointerEnteredBy,
      vdchgptr.reher         as LoanChgPointerEnteredSource,
      @ObjectModel.foreignKey.association: '_LoanChgPointerProcgSts'
      vdchgptr.ale_process   as LoanChgPointerProcgSts,
      @ObjectModel.foreignKey.association: '_LoanChgPointerProcgGrp'
      vdchgptr.ale_exp_group as LoanChgPointerProcgGrp,

      _LoanContrData,
      _CompanyCode,
      _LoanArchivingCategory,
      _LoanChgPointerChangeCat,
      _LoanChgPointerChgSubCat,
      _LoanChgPointerProcgSts,
      _LoanChgPointerProcgGrp
}
```
