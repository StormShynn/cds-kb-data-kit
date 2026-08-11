---
name: I_AGREEMENTRULEPRODUCTSET
description: "Agreement Product Set"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRULEPRODUCTSET')/$value
semantic_en: "Agreement Product Set"
semantic_vi: "Agreement Product Set — CDS view giao diện dựa trên tcms_prd_set."
keywords:
  - "agreement"
  - "product"
  - "set"
  - "portion"
  - "rules"
  - "prod"
tags:
  - FS
  - bo:material
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - product
---
# I_AGREEMENTRULEPRODUCTSET

**Agreement Product Set**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRULEPRODUCTSET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionRulesProdSet` | ✓ | |  | `product_set` | `CHAR(6)` | Identification of a Product Set |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementRuleProductSetText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRULEPRODUCTSET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRULEPRODUCTSET')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGPRDSET',
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
    representativeKey: 'AgreementPortionRulesProdSet'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Product Set'
define view I_AgreementRuleProductSet
  as select from tcms_prd_set
  association [0..*] to I_AgreementRuleProductSetText as _Text on $projection.AgreementPortionRulesProdSet = _Text.AgreementPortionRulesProdSet
{
      @ObjectModel.text.association: '_Text'
  key product_set as AgreementPortionRulesProdSet,

      _Text
}
```
