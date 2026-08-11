---
name: I_TRANSPORDITEMTYPETEXT
description: "Transportation Order Item Type - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPETEXT')/$value
semantic_en: "Transportation Order Item Type - Text"
semantic_vi: "I_TRANSPORDITEMTYPETEXT — CDS view cơ bản dựa trên I_TRANSPORDITEMTYPETEXT."
keywords:
  - "transporditemtypetext"
  - "transp"
  - "item"
  - "type"
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
# I_TRANSPORDITEMTYPETEXT

**Transportation Order Item Type - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemType` | ✓ | |  | `item_type` | `CHAR(4)` | Transportation Order Item Type |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `TranspOrdItemTypeDesc` |  | |  | `cast (description_s as /scmtms/vdm_tor_itm_type_descr preserving type)` | `CHAR(40)` | Transportation Order Item Type Description |
| `_TranspOrdItemType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdItemType` | `I_TranspOrdItemType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPETEXT')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Item Type - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdItemType',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.decommissioningPlannedForYearMonth: '202608',
                 lifecycle.successor: 'I_TranspOrdItemTypeText_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITORITEMTYPETEXT',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdItemTypeText
  as select from /scmtms/c_toritt
  association [0..1] to I_TranspOrdItemType as _TranspOrdItemType on $projection.TranspOrdItemType = _TranspOrdItemType.TranspOrdItemType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdItemType'
  key item_type                                                              as TranspOrdItemType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                                  as Language,
      @Semantics.text
      cast (description_s as /scmtms/vdm_tor_itm_type_descr preserving type) as TranspOrdItemTypeDesc,

      /* Associations */
      _TranspOrdItemType,
      _Language
}
```
