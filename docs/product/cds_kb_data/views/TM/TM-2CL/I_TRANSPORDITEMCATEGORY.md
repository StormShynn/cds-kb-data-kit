---
name: I_TRANSPORDITEMCATEGORY
description: "Transportation Order Item Category"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMCATEGORY')/$value
semantic_en: "Transportation Order Item Category"
semantic_vi: "I_TRANSPORDITEMCATEGORY — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transporditemcategory"
  - "transp"
  - "item"
  - "category"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDITEMCATEGORY

**Transportation Order Item Category**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 3) as /scmtms/item_category preserving type)` | `CHAR(3)` | Item Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdItemCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMCATEGORY')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Item Category'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdItemCategory',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}                                      
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITORITEMCAT',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdItemCategory
  as select from dd07l
  association [0..*] to I_TranspOrdItemCategoryText as _Text on $projection.TranspOrdItemCategory = _Text.TranspOrdItemCategory
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 3) as /scmtms/item_category preserving type) as TranspOrdItemCategory,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/ITEM_CATEGORY'
  and as4local = 'A';
```
