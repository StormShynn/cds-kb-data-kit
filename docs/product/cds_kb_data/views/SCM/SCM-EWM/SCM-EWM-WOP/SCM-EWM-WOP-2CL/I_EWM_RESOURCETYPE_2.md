---
name: I_EWM_RESOURCETYPE_2
description: "This CDS view provides information about resource types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_RESOURCETYPE_2')/$value
semantic_en: "This CDS view provides information about resource types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Resource Type — CDS view giao diện dựa trên Resource Type."
keywords:
  - "resource"
  - "type"
  - "warehouse"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - bo:salesorder
---
# I_EWM_RESOURCETYPE_2

**This CDS view provides information about resource types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_RESOURCETYPE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMResourceType` | ✓ | |  | `rsrc_type` | `CHAR(4)` | Resource Type |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_ResourceTypeText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_RESOURCETYPE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_RESOURCETYPE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Resource Type'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMResourceType'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRSCETYPE2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.internalName:#LOCAL 
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_ResourceType_2
  as select from /scwm/trsrc_typ as ResourceType
  association [0..1] to I_EWM_WarehouseNumber_2  as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_ResourceTypeText_2  as  _Text    on  $projection.EWMWarehouse = _Text.EWMWarehouse
                                                              and $projection.EWMResourceType = _Text.EWMResourceType
{
  @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum         as  EWMWarehouse,
  @ObjectModel.text.association: '_Text'
  key rsrc_type     as  EWMResourceType,
//      @DefaultAggregation: #SUM
//      @Semantics: { quantity : {unitOfMeasure: 'ResourceTypeVelocityUoM'} }
//      velocity      as  ResourceTypeVelocity,
//      @DefaultAggregation: #SUM
//      @Semantics: { quantity : {unitOfMeasure: 'ResourceTypeVelocityUoM'} }
//      velocity_z    as  RsceTypeVelocityInZDrctn,
//      @Semantics.unitOfMeasure: true
//      velocity_uom  as  ResourceTypeVelocityUoM,
//      postn_mngmnt  as  PositionManagement,
//      intleav       as  InterleavingIsActive,
//      mfsmaxtel     as  MaxNmbrOfTelegramsToBeRcvd,
//      rsrc_move_mode  as  WrehouseTaskConfirmationMode,
//      nointerleav   as  InterLeavingIsNotActvive,
//      mfs_retry_wait  as  IntervalForTelegramRetry,
//      layout_type   as  LayoutType,
      _Text,
      _Warehouse


}
```
