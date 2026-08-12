---
name: I_LOANCSHFLWITMACTIVITYCAT
description: "Loan Cash Flow Item Category"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCSHFLWITMACTIVITYCAT')/$value
semantic_en: "Loan Cash Flow Item Category"
semantic_vi: "Loan Cash Flow Item Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "loan"
  - "cash"
  - "flow"
  - "item"
  - "category"
  - "activity"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCSHFLWITMACTIVITYCAT

**Loan Cash Flow Item Category**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCSHFLWITMACTIVITYCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanCshFlwItmActivityCat` | ✓ | |  | `cast(substring(domvalue_l, 1, 4) as vorgtyp_lo preserving type)` | `CHAR(4)` | Activity Category (Posting Area) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanCshFlwItmActivityCatText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCSHFLWITMACTIVITYCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCSHFLWITMACTIVITYCAT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCFIACTCAT',
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
    representativeKey: 'LoanCshFlwItmActivityCat'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Cash Flow Item Category'
define view I_LoanCshFlwItmActivityCat
  as select from dd07l
  association [0..*] to I_LoanCshFlwItmActivityCatText as _Text on $projection.LoanCshFlwItmActivityCat = _Text.LoanCshFlwItmActivityCat
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 4) as vorgtyp_lo preserving type) as LoanCshFlwItmActivityCat,

      _Text
}
where
      dd07l.domname  = 'VORGTYP_LO'
  and dd07l.as4local = 'A'
```
