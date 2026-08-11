---
name: I_TRANSPORDSTOPCATEGORY
description: "Transportation Order Stop Category"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPCATEGORY')/$value
semantic_en: "Transportation Order Stop Category"
semantic_vi: "I_TRANSPORDSTOPCATEGORY — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transpordstopcategory"
  - "transp"
  - "stop"
  - "category"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDSTOPCATEGORY

**Transportation Order Stop Category**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/stop_category preserving type)` | `CHAR(1)` | Stop Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdStopCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPCATEGORY')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Stop Category'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:      'TranspOrdStopCategory',
                 usageType:              {serviceQuality: #A,
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
                 sqlViewName:        'ITORISTOPCAT',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdStopCategory
  as select from dd07l
  association [0..*] to I_TranspOrdStopCategoryText as _Text on $projection.TranspOrdStopCategory = _Text.TranspOrdStopCategory
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/stop_category preserving type) as TranspOrdStopCategory,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/STOP_CATEGORY'
  and as4local = 'A';
```
