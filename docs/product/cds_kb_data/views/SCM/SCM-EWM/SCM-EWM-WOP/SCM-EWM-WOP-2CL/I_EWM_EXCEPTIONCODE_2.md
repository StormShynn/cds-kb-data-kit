---
name: I_EWM_EXCEPTIONCODE_2
description: "This CDS view provides information about exception codes in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXCEPTIONCODE_2')/$value
semantic_en: "This CDS view provides information about exception codes in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Exception Code — CDS view giao diện dựa trên Exception Code."
keywords:
  - "exception"
  - "code"
  - "warehouse"
  - "task"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_EXCEPTIONCODE_2

**This CDS view provides information about exception codes in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXCEPTIONCODE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseTaskExceptionCode` | ✓ | |  | `exccode` | `CHAR(4)` | Exception Code |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_ExceptionCodeText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXCEPTIONCODE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXCEPTIONCODE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Exception Code'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'WarehouseTaskExceptionCode'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMEXCPTNCODE2'
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
define view entity I_EWM_ExceptionCode_2
  as select from /scwm/texcep as  ExceptionCode
  association [0..1] to I_EWM_WarehouseNumber_2  as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_ExceptionCodeText_2  as  _Text   on  $projection.EWMWarehouse = _Text.EWMWarehouse
                                                              and $projection.WarehouseTaskExceptionCode = _Text.WarehouseTaskExceptionCode
{
  @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum   as  EWMWarehouse,
  @ObjectModel.text.association: '_Text'
  key exccode as  WarehouseTaskExceptionCode,
//      exclog  as  ControlIndicatorForHistory,
//      blckind as  ExceptionCodeBlock,
      _Text,
      _Warehouse
}
```
