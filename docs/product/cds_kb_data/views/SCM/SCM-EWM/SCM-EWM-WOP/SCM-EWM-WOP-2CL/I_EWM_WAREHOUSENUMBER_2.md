---
name: I_EWM_WAREHOUSENUMBER_2
description: "This CDS view provides information about warehouse numbers in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSENUMBER_2')/$value
semantic_en: "This CDS view provides information about warehouse numbers in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Number — CDS view giao diện dựa trên Warehouse Number."
keywords:
  - "warehouse"
  - "number"
  - "time"
  - "zone"
  - "text"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WAREHOUSENUMBER_2

**This CDS view provides information about warehouse numbers in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSENUMBER_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `TimeZoneID` |  | | `_Timezone` | `TimeZoneID` | `CHAR(6)` | Time Zone |
| `TimeZoneText` |  | | `_Timezone` | `TimeZoneText` | `CHAR(30)` | Time Zone Text |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_WarehouseNumberText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSENUMBER_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSENUMBER_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Warehouse Number'

@VDM.viewType:#BASIC
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'EWMWarehouse'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL 
@ObjectModel.usageType: {serviceQuality: #B,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@Analytics.technicalName: 'IEWMWRHSNO2'    
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'Warehouse'
define view entity I_EWM_WarehouseNumber_2
  as select from /scwm/t300 as Warehouse
  left outer to one join /scwm/t300_md  on  Warehouse.lgnum = /scwm/t300_md.lgnum
  left outer to one join I_EWM_WarehouseTimezone as _Timezone on /scwm/t300_md.scuguid = _Timezone.WarehouseLocationUUID 
  association [0..*] to  I_EWM_WarehouseNumberText_2 as _Text on $projection.EWMWarehouse = _Text.EWMWarehouse
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key Warehouse.lgnum as EWMWarehouse,
      _Timezone.TimeZoneID,
      _Timezone.TimeZoneText,
      _Text
}
```
