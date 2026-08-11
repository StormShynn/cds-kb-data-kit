---
name: I_EWM_STOCKTYPE_2
description: "This CDS view provides information about stock types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STOCKTYPE_2')/$value
semantic_en: "This CDS view provides information about stock types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Stock Type — CDS view giao diện dựa trên Warehouse Stock Type."
keywords:
  - "warehouse"
  - "stock"
  - "type"
  - "availability"
  - "group"
  - "indep"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - stock
  - bo:inventory
---
# I_EWM_STOCKTYPE_2

**This CDS view provides information about stock types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STOCKTYPE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStockType` | ✓ | |  | `cat` | `CHAR(2)` | Stock Type |
| `EWMAvailabilityGroup` |  | |  | `avlgrp` | `CHAR(10)` | Availability Group |
| `EWMLocIndepStockType` |  | |  | `catlocn` | `CHAR(2)` | Location-Independent Stock Type |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_WhseIndepText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_StockTypeText_2` | [0..*] |
| `_WhseIndepText` | `I_EWM_WhseIndepStockTypeText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STOCKTYPE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STOCKTYPE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Stock Type'
@Analytics.internalName:#LOCAL
@VDM.viewType:#BASIC
@ObjectModel.representativeKey: 'EWMStockType'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMSTKTYPE2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'WarehouseStockType'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_StockType_2
  as select from /scwm/tcat as StockType
  association [0..1] to I_EWM_WarehouseNumber_2        as _Warehouse     on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_StockTypeText_2          as _Text          on  $projection.EWMWarehouse = _Text.EWMWarehouse
                                                                         and $projection.EWMStockType = _Text.EWMStockType
  association [0..*] to I_EWM_WhseIndepStockTypeText_2 as _WhseIndepText on  $projection.EWMStockType = _WhseIndepText.EWMStockType
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum   as EWMWarehouse,
      _Warehouse,
      @ObjectModel.text.association: '_Text'
  key cat     as EWMStockType,
      avlgrp  as EWMAvailabilityGroup,
      catlocn as EWMLocIndepStockType,
      _Text,
      _WhseIndepText
}
```
