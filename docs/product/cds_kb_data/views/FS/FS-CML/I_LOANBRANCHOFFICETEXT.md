---
name: I_LOANBRANCHOFFICETEXT
description: "Loan Branch Office - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANBRANCHOFFICETEXT')/$value
semantic_en: "Loan Branch Office - Text"
semantic_vi: "Loan Branch Office - Text — CDS view giao diện dựa trên td17t."
keywords:
  - "loan"
  - "branch"
  - "office"
  - "text"
  - "language"
  - "short"
tags:
  - FS
  - bo:companycode
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANBRANCHOFFICETEXT

**Loan Branch Office - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANBRANCHOFFICETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanBranchOffice` | ✓ | |  | `sgesst` | `CHAR(4)` | Branch Office |
| `LoanBranchOfficeShortText` |  | |  | `kbez` | `CHAR(15)` | Short Name |
| `LoanBranchOfficeText` |  | |  | `lbez` | `CHAR(50)` | Name |
| `_Language` | | ✓ | | | | |
| `_LoanBranchOffice` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanBranchOffice` | `I_LoanBranchOffice` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANBRANCHOFFICETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANBRANCHOFFICETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILBRNCHOFFTXT',
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
    representativeKey: 'LoanBranchOffice'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Branch Office - Text'
define view I_LoanBranchOfficeText
  as select from td17t
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
  association [0..1] to I_LoanBranchOffice as _LoanBranchOffice on $projection.LoanBranchOffice = _LoanBranchOffice.LoanBranchOffice
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanBranchOffice'
  key sgesst as LoanBranchOffice,

      @Semantics.text: true
      kbez   as LoanBranchOfficeShortText,

      //mbez is never filled

      @Semantics.text: true
      lbez   as LoanBranchOfficeText,

      _Language,
      _LoanBranchOffice
}
```
