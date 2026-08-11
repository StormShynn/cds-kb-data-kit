---
name: I_TRANSPORDITEMTYPE
description: "Transportation Order Item Type"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPE')/$value
semantic_en: "Transportation Order Item Type"
semantic_vi: "I_TRANSPORDITEMTYPE — CDS view cơ bản dựa trên I_TRANSPORDITEMTYPE."
keywords:
  - "transporditemtype"
  - "transp"
  - "item"
  - "type"
  - "category"
  - "child"
  - "multi"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDITEMTYPE

**Transportation Order Item Type**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemType` | ✓ | |  | `item_type` | `CHAR(4)` | Transportation Order Item Type |
| `TranspOrdItemCategory` |  | |  | `item_cat` | `CHAR(3)` | Item Category |
| `TranspOrdChildItemType` |  | |  | `cast( childitem_type as /scmtms/vdm_child_item_type preserving type )` | `CHAR(4)` | Transportation Order Child Item Type |
| `IsMultiItem` |  | |  | `multi_item` | `CHAR(1)` | Multi-Item |
| `_Text` | | ✓ | | | | |
| `_TranspOrdItemCategory` | | ✓ | | | | |
| `_IsMultiItem` | | ✓ | | | | |
| `_TranspOrdChildItemType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdItemTypeText` | [0..*] |
| `_TranspOrdItemCategory` | `I_TranspOrdItemCategory` | [0..1] |
| `_IsMultiItem` | `I_IsMultiItem` | [0..1] |
| `_TranspOrdChildItemType` | `I_TranspOrdItemType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPE')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Item Type'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdItemType',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY],
                 sapObjectNodeType.name: 'TransportationOrderItemType'                                           
                }
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.decommissioningPlannedForYearMonth: '202608',
                 lifecycle.successor: 'I_TranspOrdItemType_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITORITEMTYPE',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdItemType
  as select from /scmtms/c_tority
  /* Foreign Key and Text Associations */
  association [0..*] to I_TranspOrdItemTypeText as _Text                   on $projection.TranspOrdItemType = _Text.TranspOrdItemType
  association [0..1] to I_TranspOrdItemCategory as _TranspOrdItemCategory  on $projection.TranspOrdItemCategory = _TranspOrdItemCategory.TranspOrdItemCategory
  association [0..1] to I_IsMultiItem           as _IsMultiItem            on $projection.IsMultiItem = _IsMultiItem.IsMultiItem
  association [0..1] to I_TranspOrdItemType     as _TranspOrdChildItemType on $projection.TranspOrdChildItemType = _TranspOrdChildItemType.TranspOrdItemType
{
      @ObjectModel.text.association: '_Text'
  key item_type                                                             as TranspOrdItemType,
      @ObjectModel.foreignKey.association: '_TranspOrdItemCategory'
      item_cat                                                              as TranspOrdItemCategory,
      @ObjectModel.foreignKey.association: '_TranspOrdChildItemType'
      cast( childitem_type as /scmtms/vdm_child_item_type preserving type ) as TranspOrdChildItemType,
      @ObjectModel.foreignKey.association: '_IsMultiItem'
      @Semantics.booleanIndicator: true
      multi_item                                                            as IsMultiItem,

      /* Associations */
      _Text,
      _TranspOrdItemCategory,
      _IsMultiItem,
      _TranspOrdChildItemType
}
```
