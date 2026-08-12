---
name: I_DCSCATEGORYTEXT
description: "Derivative Contract Spec Category - Text"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DCSCATEGORYTEXT')/$value
semantic_en: "Derivative Contract Spec Category - Text"
semantic_vi: "Derivative Contract Spec Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "derivative"
  - "contract"
  - "spec"
  - "category"
  - "text"
  - "language"
  - "contr"
  - "name"
tags:
  - CA
  - CA-GTF
  - CA-GTF-TRB
  - component:CA-GTF-TRB
  - contract
  - interface-view
  - lob:cross_application components
---
# I_DCSCATEGORYTEXT

**Derivative Contract Spec Category - Text**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DCSCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DerivativeContractSpecCategory` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as cds_dcs_category )` | `CHAR(3)` | Derivative Contract Specification Category |
| `Language` | ✓ | |  | `cast (ddlanguage as spras)` | `LANG(1)` | Language Key |
| `DerivativeContrSpecCatName` |  | |  | `cast( substring( ddtext, 1,40 ) as tba_derivativetype_txt )` | `CHAR(40)` | Derivative Category Description |
| `_Language` | | ✓ | | | | |
| `_DCSCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_DCSCategory` | `I_DCSCategory` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DCSCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DCSCATEGORYTEXT')/$value)*

```abap
@EndUserText.label: 'Derivative Contract Spec Category - Text' //same as DDL description
//@Analytics.dataCategory:#TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IDCSCATEGORYT'
@ObjectModel.representativeKey: 'DerivativeContractSpecCategory'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]


define view I_DCSCategoryText //must start with "I_"; same as DDL source name in upper-camelcase notation
   as select from dd07t

    association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
    association [1..1] to I_DCSCategory as _DCSCategory
        on $projection.DerivativeContractSpecCategory = _DCSCategory.DerivativeContractSpecCategory
{

    key cast ( substring( domvalue_l, 1, 3 ) as cds_dcs_category ) as DerivativeContractSpecCategory,
    @Semantics.language
    key cast (ddlanguage as spras) as Language,
    @Semantics.text
    cast( substring( ddtext, 1,40 ) as tba_derivativetype_txt ) as DerivativeContrSpecCatName,
     _DCSCategory,
     _Language

}

where domname = 'TBA_DERIVATIVETYPE'
  and as4local = 'A'
```
