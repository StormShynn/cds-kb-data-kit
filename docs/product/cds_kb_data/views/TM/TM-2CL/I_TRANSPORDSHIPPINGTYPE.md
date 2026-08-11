---
name: I_TRANSPORDSHIPPINGTYPE
description: "Transportation Order Shipping Type"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSHIPPINGTYPE')/$value
semantic_en: "Transportation Order Shipping Type"
semantic_vi: "I_TRANSPORDSHIPPINGTYPE — CDS view cơ bản dựa trên I_TRANSPORDSHIPPINGTYPE."
keywords:
  - "transpordshippingtype"
  - "transp"
  - "shipping"
  - "type"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDSHIPPINGTYPE

**Transportation Order Shipping Type**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSHIPPINGTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdShippingType` | ✓ | |  | `shipping_type` | `CHAR(3)` | Shipping Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdShippingTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSHIPPINGTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSHIPPINGTYPE')/$value)*

```abap
@EndUserText:   {label:              'Transportation Order Shipping Type'}
@Analytics:     {dataCategory:       #DIMENSION, 
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdShippingType',
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
                                           #SEARCHABLE_ENTITY],
                 sapObjectNodeType.name: 'TranspOrderShippingType'
                }                                      
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.decommissioningPlannedForYearMonth: '202608',
                 lifecycle.successor: 'I_TranspOrdShippingType_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ITMSHIPPINGTYPE',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view I_TranspOrdShippingType
as select from /scmtms/c_shtyp
association[0..*] to I_TranspOrdShippingTypeText as _Text on $projection.TranspOrdShippingType = _Text.TranspOrdShippingType
{
    @ObjectModel.text.association: '_Text'
key shipping_type as TranspOrdShippingType,

    /* Associations */
    _Text
}
```
