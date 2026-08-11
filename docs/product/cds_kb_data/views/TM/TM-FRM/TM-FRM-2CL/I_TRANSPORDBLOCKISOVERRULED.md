---
name: I_TRANSPORDBLOCKISOVERRULED
description: "Transportation Order Block is Overruled"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDBLOCKISOVERRULED')/$value
semantic_en: "Transportation Order Block is Overruled"
semantic_vi: "I_TRANSPORDBLOCKISOVERRULED — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transpordblockisoverruled"
  - "transp"
  - "block"
  - "overruled"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
---
# I_TRANSPORDBLOCKISOVERRULED

**Transportation Order Block is Overruled**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDBLOCKISOVERRULED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdBlockIsOverruled` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_overruled preserving type)` | `CHAR(1)` | Transportation Order Block Is Overruled |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdBlockIsOverruledT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDBLOCKISOVERRULED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDBLOCKISOVERRULED')/$value)*

```abap
@EndUserText:   {label:                     'Transportation Order Block is Overruled'}
@Analytics:     {dataCategory:               #DIMENSION,
                 dataExtraction:            {enabled: true},
                 internalName:               #LOCAL }
@ObjectModel:   {representativeKey:         'TranspOrdBlockIsOverruled',
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
                                             #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                   #BASIC}
@AbapCatalog:   {compiler:                  {compareFilter: true},
                 sqlViewName:               'ITORBLKOVERRULED',
                 preserveKey:                true}
@AccessControl: {authorizationCheck:        #NOT_REQUIRED}
@ClientHandling.algorithm:                  #SESSION_VARIABLE
@Metadata:      {allowExtensions:             true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdBlockIsOverruled
  as select from dd07l
  association [0..*] to I_TranspOrdBlockIsOverruledT as _Text on $projection.TranspOrdBlockIsOverruled = _Text.TranspOrdBlockIsOverruled
{
      @Semantics.booleanIndicator: true
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_overruled preserving type) as TranspOrdBlockIsOverruled,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/VDM_BLOCK_OVERRULED'
  and as4local = 'A';
```
