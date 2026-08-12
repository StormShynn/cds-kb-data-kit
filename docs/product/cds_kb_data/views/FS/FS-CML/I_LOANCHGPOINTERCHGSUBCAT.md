---
name: I_LOANCHGPOINTERCHGSUBCAT
description: "Loan Change Pointer Change Sub Category"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHGSUBCAT')/$value
semantic_en: "Loan Change Pointer Change Sub Category"
semantic_vi: "Loan Change Pointer Change Sub Category — CDS view giao diện dựa trên tdchgcatgsub."
keywords:
  - "loan"
  - "change"
  - "pointer"
  - "sub"
  - "category"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCHGPOINTERCHGSUBCAT

**Loan Change Pointer Change Sub Category**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHGSUBCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanChgPointerChangeCat` | ✓ | |  | `chgcatg` | `CHAR(4)` | Change Category |
| `LoanChgPointerChgSubCat` | ✓ | |  | `chgcatgsub` | `CHAR(4)` | Change Sub-Category |
| `_LoanChgPointerChangeCat` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoanChgPointerChangeCat` | `I_LoanChgPointerChangeCat` | [0..1] |
| `_Text` | `I_LoanChgPointerChgSubCatText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHGSUBCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHGSUBCAT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPCHGSUBCAT',
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
    representativeKey: 'LoanChgPointerChgSubCat'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Change Pointer Change Sub Category'
define view I_LoanChgPointerChgSubCat
  as select from tdchgcatgsub
  association [0..1] to I_LoanChgPointerChangeCat     as _LoanChgPointerChangeCat on  $projection.LoanChgPointerChangeCat = _LoanChgPointerChangeCat.LoanChgPointerChangeCat
  association [0..*] to I_LoanChgPointerChgSubCatText as _Text                    on  $projection.LoanChgPointerChangeCat = _Text.LoanChgPointerChangeCat
                                                                                  and $projection.LoanChgPointerChgSubCat = _Text.LoanChgPointerChgSubCat
{
      @ObjectModel.foreignKey.association: '_LoanChgPointerChangeCat'
  key chgcatg    as LoanChgPointerChangeCat,
      @ObjectModel.text.association: '_Text'
  key chgcatgsub as LoanChgPointerChgSubCat,

      _LoanChgPointerChangeCat,
      _Text
}
```
