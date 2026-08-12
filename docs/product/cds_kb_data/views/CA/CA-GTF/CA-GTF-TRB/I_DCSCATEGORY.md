---
name: I_DCSCATEGORY
description: "Derivative Contract Specification Category"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DCSCATEGORY')/$value
semantic_en: "Derivative Contract Specification Category"
semantic_vi: "Derivative Contract Specification Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "derivative"
  - "contract"
  - "specification"
  - "category"
  - "spec"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-TRB
  - component:CA-GTF-TRB
  - contract
  - interface-view
  - lob:cross_application components
---
# I_DCSCATEGORY

**Derivative Contract Specification Category**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DCSCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DerivativeContractSpecCategory` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as cds_dcs_category )` | `CHAR(3)` | Derivative Contract Specification Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DCSCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DCSCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DCSCATEGORY')/$value)*

```abap
@EndUserText.label: 'Derivative Contract Specification Category'
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IDCSCATEGORY'
@ObjectModel.representativeKey: 'DerivativeContractSpecCategory'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]


define view I_DCSCategory
   as select from dd07l

   association [0..*] to I_DCSCategoryText as _Text
        on $projection.DerivativeContractSpecCategory = _Text.DerivativeContractSpecCategory

{
 @ObjectModel.text.association: '_Text'

      key cast ( substring( domvalue_l, 1, 3 ) as cds_dcs_category ) as DerivativeContractSpecCategory,
       _Text

}

where domname  = 'TBA_DERIVATIVETYPE'
  and as4local = 'A'
```
