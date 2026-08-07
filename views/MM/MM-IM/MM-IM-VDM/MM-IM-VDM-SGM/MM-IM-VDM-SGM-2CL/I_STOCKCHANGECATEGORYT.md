---
name: I_STOCKCHANGECATEGORYT
description: Stockchangecategoryt
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |
| `StockChangeCategory` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 2 ) as abap.char( 2 ) ) as nsdm_stock_change_category )` |
| `StockChangeCategoryName` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as nsdm_stock_change_cat_name )` |
| `_Language` | | ✓ | | |
| `_StockChangeCategory` | | ✓ | | |

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
