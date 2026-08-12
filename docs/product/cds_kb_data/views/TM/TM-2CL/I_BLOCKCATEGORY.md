---
name: I_BLOCKCATEGORY
description: "Block Category"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKCATEGORY')/$value
semantic_en: "Block Category"
semantic_vi: "I_BLOCKCATEGORY — CDS view cơ bản dựa trên dd07l."
keywords:
  - "blockcategory"
  - "block"
  - "category"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_BLOCKCATEGORY

**Block Category**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BlockCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/block_category preserving type)` | `CHAR(1)` | Block Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BlockCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BLOCKCATEGORY')/$value)*

```abap
@EndUserText:   {label:                     'Block Category'}
@Analytics:     {dataCategory:              #DIMENSION,
                 dataExtraction:            {enabled: true},
                 internalName:               #LOCAL }
@Analytics.technicalName: 'IBLOCKCATEGORY'
@ObjectModel:   {representativeKey:         'BlockCategory',
                 usageType:                 {serviceQuality: #A,
                                             sizeCategory:   #S,
                                             dataClass:      #CUSTOMIZING},
                 modelingPattern:            #ANALYTICAL_DIMENSION,
                 supportedCapabilities:    [ #ANALYTICAL_DIMENSION,
                                             #CDS_MODELING_DATA_SOURCE,
                                             #CDS_MODELING_ASSOCIATION_TARGET,
                                             #SQL_DATA_SOURCE,
                                             #EXTRACTION_DATA_SOURCE,
                                             #VALUE_HELP_PROVIDER,
                                             #SEARCHABLE_ENTITY],
                 sapObjectNodeType.name: 'TransportationBlockCategory'}
@VDM:           {viewType:                   #BASIC}
@AccessControl: {authorizationCheck:         #NOT_REQUIRED}
@Metadata:      {allowExtensions:             true,
                 ignorePropagatedAnnotations: true}

define view entity I_BlockCategory
  as select from dd07l
  association [0..*] to I_BlockCategoryText as _Text on $projection.BlockCategory = _Text.BlockCategory
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/block_category preserving type) as BlockCategory,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/BLOCK_CATEGORY'
  and as4local = 'A';
```
