---
name: I_STOCKCHANGECATEGORYT
description: "Stockchangecategoryt"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKCHANGECATEGORYT

**Stockchangecategoryt**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `StockChangeCategory` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 2 ) as abap.char( 2 ) ) as nsdm_stock_change_category )` |  |  |
| `StockChangeCategoryName` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as nsdm_stock_change_cat_name )` |  |  |
| `_Language` | | ✓ | | | | |
| `_StockChangeCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_StockChangeCategory` | `I_StockChangeCategory` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Category of Stock Change - Text'
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'StockChangeCategory',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: { dataCategory: #DIMENSION,
              technicalName: 'ISTOCKCHGCATT' } 
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }

define view entity I_StockChangeCategoryT 
as select from dd07t
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
association [0..1] to I_StockChangeCategory as _StockChangeCategory on $projection.StockChangeCategory = _StockChangeCategory.StockChangeCategory
{
  @Semantics.language
  key cast( ddlanguage as spras ) as Language,
  @ObjectModel.foreignKey.association: '_StockChangeCategory'
  key cast ( cast ( substring( domvalue_l, 1, 2 ) as abap.char( 2 ) ) as nsdm_stock_change_category ) as StockChangeCategory,
  
  @Semantics.text
  cast ( substring ( ddtext, 1, 60 ) as nsdm_stock_change_cat_name ) as StockChangeCategoryName, 
  
  _Language,
  _StockChangeCategory
} where domname = 'NSDM_STOCK_CHANGE_CATEGORY' and as4local = 'A'
```
