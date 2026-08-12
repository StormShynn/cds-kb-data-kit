---
name: I_TRANSPORDSHIPPINGTYPETEXT
description: "Transportation Order Shipping Type - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSHIPPINGTYPETEXT')/$value
semantic_en: "Transportation Order Shipping Type - Text"
semantic_vi: "I_TRANSPORDSHIPPINGTYPETEXT — CDS view cơ bản dựa trên I_TRANSPORDSHIPPINGTYPETEXT."
keywords:
  - "transpordshippingtypetext"
  - "transp"
  - "shipping"
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
# I_TRANSPORDSHIPPINGTYPETEXT

**Transportation Order Shipping Type - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSHIPPINGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdShippingType` | ✓ | |  | `shipping_type` | `CHAR(3)` | Shipping Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `TranspOrdShippingTypeDesc` |  | |  | `cast(text as /scmtms/vdm_tor_ship_type_desc preserving type )` | `CHAR(40)` | Transportation Order Shipping Type Description |
| `_TranspOrdShippingType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdShippingType` | `I_TranspOrdShippingType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSHIPPINGTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSHIPPINGTYPETEXT')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Shipping Type - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:      'TranspOrdShippingType',
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
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.decommissioningPlannedForYearMonth: '202608',
                 lifecycle.successor: 'I_TranspOrdShippingTypeT_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITMSHIPPINGTYPET',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdShippingTypeText
  as select from /scmtms/c_shtypt
  association [0..1] to I_TranspOrdShippingType as _TranspOrdShippingType on $projection.TranspOrdShippingType = _TranspOrdShippingType.TranspOrdShippingType
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdShippingType'
  key shipping_type                                                 as TranspOrdShippingType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                         as Language,
      @Semantics.text
      cast(text as /scmtms/vdm_tor_ship_type_desc preserving type ) as TranspOrdShippingTypeDesc,

      /* Associations */
      _TranspOrdShippingType,
      _Language
}
```
