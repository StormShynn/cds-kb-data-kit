---
name: I_DCSCATEGORY
description: "Derivative Contract Specification Category"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
