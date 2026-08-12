---
name: I_AGREEMENTRULEPRODUCTSETTEXT
description: "Agreement Product Set - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRULEPRODUCTSETTEXT')/$value
semantic_en: "Agreement Product Set - Text"
semantic_vi: "Agreement Product Set - Text — CDS view giao diện dựa trên tcms_prd_set_t."
keywords:
  - "agreement"
  - "product"
  - "set"
  - "text"
  - "portion"
  - "rules"
  - "prod"
  - "language"
  - "portn"
tags:
  - FS
  - bo:material
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - product
---
# I_AGREEMENTRULEPRODUCTSETTEXT

**Agreement Product Set - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRULEPRODUCTSETTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionRulesProdSet` | ✓ | |  | `product_set` | `CHAR(6)` | Identification of a Product Set |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `AgreementPortnRulesProdSetText` |  | |  | `name` | `CHAR(40)` | Name of Product Set in a Specified Language |
| `_Language` | | ✓ | | | | |
| `_AgreementPortionRulesProdSet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementPortionRulesProdSet` | `I_AgreementRuleProductSet` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRULEPRODUCTSETTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRULEPRODUCTSETTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGPRDSETTXT',
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
    representativeKey: 'AgreementPortionRulesProdSet'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Product Set - Text'
define view I_AgreementRuleProductSetText
  as select from tcms_prd_set_t
  association [0..1] to I_Language                as _Language                     on $projection.Language = _Language.Language
  association [0..1] to I_AgreementRuleProductSet as _AgreementPortionRulesProdSet on $projection.AgreementPortionRulesProdSet = _AgreementPortionRulesProdSet.AgreementPortionRulesProdSet
{
      @ObjectModel.foreignKey.association: '_AgreementPortionRulesProdSet'
  key product_set as AgreementPortionRulesProdSet,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language    as Language,
      @Semantics.text: true
      name        as AgreementPortnRulesProdSetText,

      _Language,
      _AgreementPortionRulesProdSet
}
```
