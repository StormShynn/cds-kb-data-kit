---
name: I_LOANBRANCHOFFICE
description: "Loan Branch Office"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANBRANCHOFFICE')/$value
semantic_en: "Loan Branch Office"
semantic_vi: "Loan Branch Office — CDS view giao diện dựa trên td17."
keywords:
  - "loan"
  - "branch"
  - "office"
tags:
  - FS
  - bo:companycode
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANBRANCHOFFICE

**Loan Branch Office**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANBRANCHOFFICE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanBranchOffice` | ✓ | |  | `sgesst` | `CHAR(4)` | Branch Office |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanBranchOfficeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANBRANCHOFFICE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANBRANCHOFFICE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILBRNCHOFF',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LoanBranchOffice'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Branch Office'
define view I_LoanBranchOffice
  as select from td17
  association [0..*] to I_LoanBranchOfficeText as _Text on $projection.LoanBranchOffice = _Text.LoanBranchOffice
{
      @ObjectModel.text.association: '_Text'
  key sgesst as LoanBranchOffice,

      _Text
}
```
