---
name: I_FINTRANSGENACTYCATEGORYT
description: "General fin trans acty category - Text"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSGENACTYCATEGORYT')/$value
semantic_en: "General fin trans acty category - Text"
semantic_vi: "General fin trans acty category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "general"
  - "fin"
  - "trans"
  - "acty"
  - "category"
  - "text"
  - "activity"
  - "language"
  - "name"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_FINTRANSGENACTYCATEGORYT

**General fin trans acty category - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSGENACTYCATEGORYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinTransGenActivityCategory` | ✓ | |  | `cast(DomainText.domvalue_l as tb_vgtyp)` | `NUMC(3)` | Activity Category (General) |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `FinTransGenActyCatName` |  | |  | `cast(DomainText.ddtext as fin_trans_gen_acty_cat_name preserving type )` | `CHAR(60)` | Name for Financial Transaction General Activity Category |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSGENACTYCATEGORYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSGENACTYCATEGORYT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINGENACTYCATT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'General fin trans acty category - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
    dataCategory: #TEXT,
    usageType : {
        sizeCategory: #S,
        serviceQuality: #X,
        dataClass: #MIXED
    },
    modelingPattern:#LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_FinTransGenActyCategoryT
  as select from dd07t as DomainText
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'FinTransGenActyCatName'
  key cast(DomainText.domvalue_l as tb_vgtyp)                                 as FinTransGenActivityCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key DomainText.ddlanguage                                                   as Language,

      @Semantics.text: true
      cast(DomainText.ddtext as fin_trans_gen_acty_cat_name preserving type ) as FinTransGenActyCatName,

      _Language
}
where
      DomainText.domname  = 'T_VGTYP'
  and DomainText.as4local = 'A'
```
