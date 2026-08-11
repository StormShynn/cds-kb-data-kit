---
name: I_LOANSPECIALPOSTINGTYPE
description: "Loan Special Posting Type"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALPOSTINGTYPE')/$value
semantic_en: "Loan Special Posting Type"
semantic_vi: "Loan Special Posting Type — CDS view giao diện dựa trên td14."
keywords:
  - "loan"
  - "special"
  - "posting"
  - "type"
  - "company"
  - "code"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANSPECIALPOSTINGTYPE

**Loan Special Posting Type**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALPOSTINGTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `LoanSpecialPostingType` | ✓ | |  | `sondst` | `CHAR(2)` | Special posting treatment |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Text` | `I_LoanSpecialPostingTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALPOSTINGTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALPOSTINGTYPE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILSPLPSTTYP',
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
    representativeKey: 'LoanSpecialPostingType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Special Posting Type'
define view I_LoanSpecialPostingType
  as select from td14
  association [0..1] to I_CompanyCode                as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_LoanSpecialPostingTypeText as _Text        on  $projection.CompanyCode            = _Text.CompanyCode
                                                                     and $projection.LoanSpecialPostingType = _Text.LoanSpecialPostingType
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs  as CompanyCode,
      @ObjectModel.text.association: '_Text'
  key sondst as LoanSpecialPostingType,

      _CompanyCode,
      _Text
}
```
