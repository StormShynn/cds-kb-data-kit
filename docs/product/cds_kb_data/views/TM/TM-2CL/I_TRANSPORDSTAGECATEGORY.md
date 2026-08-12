---
name: I_TRANSPORDSTAGECATEGORY
description: "Transportation Order Stage Category"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGECATEGORY')/$value
semantic_en: "Transportation Order Stage Category"
semantic_vi: "I_TRANSPORDSTAGECATEGORY — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transpordstagecategory"
  - "transp"
  - "stage"
  - "category"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDSTAGECATEGORY

**Transportation Order Stage Category**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStageCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/stage_category preserving type)` | `CHAR(1)` | Stage Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdStageCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGECATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGECATEGORY')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Stage Category'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:      'TranspOrdStageCategory',
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
                 sqlViewName:        'ITORSTAGECAT',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:       {allowExtensions:   true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdStageCategory
  as select from dd07l
  association [0..*] to I_TranspOrdStageCategoryText as _Text on $projection.TranspOrdStageCategory = _Text.TranspOrdStageCategory
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/stage_category preserving type) as TranspOrdStageCategory,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/STAGE_CATEGORY'
  and as4local = 'A';
```
