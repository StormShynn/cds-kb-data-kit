---
name: I_LOANSPECIALPOSTINGTYPETEXT
description: "Loan Special Posting Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALPOSTINGTYPETEXT')/$value
semantic_en: "Loan Special Posting Type - Text"
semantic_vi: "Loan Special Posting Type - Text — CDS view giao diện dựa trên td14t."
keywords:
  - "loan"
  - "special"
  - "posting"
  - "type"
  - "text"
  - "company"
  - "code"
  - "language"
  - "short"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANSPECIALPOSTINGTYPETEXT

**Loan Special Posting Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALPOSTINGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanSpecialPostingType` | ✓ | |  | `sondst` | `CHAR(2)` | Special posting treatment |
| `LoanSpecialPostingTypeShortTxt` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `LoanSpecialPostingTypeText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `_CompanyCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_LoanSpecialPostingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_LoanSpecialPostingType` | `I_LoanSpecialPostingType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALPOSTINGTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALPOSTINGTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILSPLPSTTYPTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LoanSpecialPostingType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Special Posting Type - Text'
define view I_LoanSpecialPostingTypeText
  as select from td14t
  association [0..1] to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
  association [0..1] to I_LoanSpecialPostingType as _LoanSpecialPostingType on  $projection.CompanyCode            = _LoanSpecialPostingType.CompanyCode
                                                                            and $projection.LoanSpecialPostingType = _LoanSpecialPostingType.LoanSpecialPostingType
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs  as CompanyCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanSpecialPostingType'
  key sondst as LoanSpecialPostingType,

      @Semantics.text: true
      xkbez  as LoanSpecialPostingTypeShortTxt,

      @Semantics.text: true
      xlbez  as LoanSpecialPostingTypeText,

      _CompanyCode,
      _Language,
      _LoanSpecialPostingType
}
```
