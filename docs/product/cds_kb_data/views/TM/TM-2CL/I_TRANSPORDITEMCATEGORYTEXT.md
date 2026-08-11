---
name: I_TRANSPORDITEMCATEGORYTEXT
description: "Transportation Order Item Category - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMCATEGORYTEXT')/$value
semantic_en: "Transportation Order Item Category - Text"
semantic_vi: "I_TRANSPORDITEMCATEGORYTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transporditemcategorytext"
  - "transp"
  - "item"
  - "category"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDITEMCATEGORYTEXT

**Transportation Order Item Category - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 3) as /scmtms/item_category preserving type)` | `CHAR(3)` | Item Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TranspOrdItemCategoryDesc` |  | |  | `cast(ddtext as /scmtms/vdm_itm_category_descr preserving type)` | `CHAR(60)` | Transportation Order Item Category Description |
| `_TranspOrdItemCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdItemCategory` | `I_TranspOrdItemCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMCATEGORYTEXT')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Item Category - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdItemCategory',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITORITEMCATTEXT',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdItemCategoryText
  as select from dd07t
  association [0..1] to I_TranspOrdItemCategory as _TranspOrdItemCategory on $projection.TranspOrdItemCategory = _TranspOrdItemCategory.TranspOrdItemCategory
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdItemCategory'
  key cast(substring(domvalue_l, 1, 3) as /scmtms/item_category preserving type) as TranspOrdItemCategory,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_itm_category_descr preserving type)             as TranspOrdItemCategoryDesc,

      /* Associations */
      _TranspOrdItemCategory,
      _Language
}
where
      domname  = '/SCMTMS/ITEM_CATEGORY'
  and as4local = 'A';
```
