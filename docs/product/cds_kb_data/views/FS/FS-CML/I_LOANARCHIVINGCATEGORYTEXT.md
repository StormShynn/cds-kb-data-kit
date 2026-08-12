---
name: I_LOANARCHIVINGCATEGORYTEXT
description: "Loan Archiving Category - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANARCHIVINGCATEGORYTEXT')/$value
semantic_en: "Loan Archiving Category - Text"
semantic_vi: "Loan Archiving Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "loan"
  - "archiving"
  - "category"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANARCHIVINGCATEGORYTEXT

**Loan Archiving Category - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANARCHIVINGCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LoanArchivingCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as sarchiv preserving type)` | `CHAR(1)` | Archiving Category Indicator |
| `LoanArchivingCategoryText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_LoanArchivingCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanArchivingCategory` | `I_LoanArchivingCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANARCHIVINGCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANARCHIVINGCATEGORYTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILARCATTXT',
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
    representativeKey: 'LoanArchivingCategory'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true 
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Archiving Category - Text'
define view I_LoanArchivingCategoryText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_LoanArchivingCategory as _LoanArchivingCategory on $projection.LoanArchivingCategory = _LoanArchivingCategory.LoanArchivingCategory
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage as Language,
      @ObjectModel.foreignKey.association: '_LoanArchivingCategory'
  key cast(substring(domvalue_l, 1, 1) as sarchiv preserving type) as LoanArchivingCategory,

      @Semantics.text: true
      ddtext     as LoanArchivingCategoryText,

      _Language,
      _LoanArchivingCategory
}
where
      domname  = 'VDLOAN_ARCH_CAT'
  and as4local = 'A'
```
