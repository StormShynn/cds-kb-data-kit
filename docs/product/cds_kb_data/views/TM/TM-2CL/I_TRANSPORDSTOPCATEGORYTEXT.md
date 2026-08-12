---
name: I_TRANSPORDSTOPCATEGORYTEXT
description: "Transportation Order Stop Category - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPCATEGORYTEXT')/$value
semantic_en: "Transportation Order Stop Category - Text"
semantic_vi: "I_TRANSPORDSTOPCATEGORYTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transpordstopcategorytext"
  - "transp"
  - "stop"
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
# I_TRANSPORDSTOPCATEGORYTEXT

**Transportation Order Stop Category - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/stop_category preserving type)` | `CHAR(1)` | Stop Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TranspOrdStopCategoryDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_TranspOrdStopCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdStopCategory` | `I_TranspOrdStopCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPCATEGORYTEXT')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Stop Category - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:      'TranspOrdStopCategory',
                 dataCategory:           #TEXT,
                 usageType:              {serviceQuality: #A,
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
                 sqlViewName:        'ITORSTOPCATT',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdStopCategoryText
  as select from dd07t
  association [0..1] to I_TranspOrdStopCategory as _TranspOrdStopCategory on $projection.TranspOrdStopCategory = _TranspOrdStopCategory.TranspOrdStopCategory
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdStopCategory'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/stop_category preserving type) as TranspOrdStopCategory,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,
      @Semantics.text
      ddtext                                                                     as TranspOrdStopCategoryDesc,

      /* Associations */
      _TranspOrdStopCategory,
      _Language
}
where
      domname  = '/SCMTMS/STOP_CATEGORY'
  and as4local = 'A';
```
