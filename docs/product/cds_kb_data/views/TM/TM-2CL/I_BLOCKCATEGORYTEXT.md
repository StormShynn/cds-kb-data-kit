---
name: I_BLOCKCATEGORYTEXT
description: "Block Category - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKCATEGORYTEXT')/$value
semantic_en: "Block Category - Text"
semantic_vi: "I_BLOCKCATEGORYTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "blockcategorytext"
  - "block"
  - "category"
  - "language"
  - "desc"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_BLOCKCATEGORYTEXT

**Block Category - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BlockCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/block_category preserving type)` | `CHAR(1)` | Block Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BlockCategoryDesc` |  | |  | `cast(ddtext as /scmtms/vdm_block_cat_desc preserving type)` | `CHAR(60)` | Transportation Order Block Category Description |
| `_BlockCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BlockCategory` | `I_BlockCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKCATEGORYTEXT')/$value)*

```abap
@EndUserText:   {label:                   'Block Category - Text'}
@ObjectModel:   {representativeKey:       'BlockCategory',
                 dataCategory:            #TEXT,
                 usageType:               {serviceQuality: #A,
                                           sizeCategory:   #S,
                                           dataClass:      #CUSTOMIZING},
                 modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                 #BASIC}
@AbapCatalog:   {compiler:                 {compareFilter: true},
                 sqlViewName:              'IBLOCKCATEGORYT',
                 preserveKey:               true}
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_BlockCategoryText
  as select from dd07t
  association [0..1] to I_BlockCategory as _BlockCategory on $projection.BlockCategory = _BlockCategory.BlockCategory
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BlockCategory'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/block_category preserving type) as BlockCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                  as Language,
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_block_cat_desc preserving type)                  as BlockCategoryDesc,

      /* Associations */
      _BlockCategory,
      _Language
}
where
      domname  = '/SCMTMS/BLOCK_CATEGORY'
  and as4local = 'A';
```
