---
name: I_INTERNALORDERSTDVH
description: "This CDS view provides value help for internal order objects. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_InternalOrder view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALORDERSTDVH')/$value
semantic_en: "This CDS view provides value help for internal order objects. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_InternalOrder view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Internal Order — CDS view giao diện dựa trên I_InternalOrder."
keywords:
  - "internal"
  - "order"
  - "description"
  - "controlling"
  - "area"
  - "type"
tags:
  - CO
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
  - order
---
# I_INTERNALORDERSTDVH

**This CDS view provides value help for internal order objects. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_InternalOrder view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALORDERSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalOrder` | ✓ | |  |  | `CHAR(12)` | Internal Order |
| `InternalOrderDescription` |  | |  |  | `CHAR(40)` | Internal Order Description |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALORDERSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALORDERSTDVH')/$value)*

```abap
//GENERATED:005:GFBfhyK17jY0X4tFH0{J8m
@AbapCatalog.sqlViewName: 'IFIIO__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InternalOrder'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #CHECK
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Internal Order'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@Search.searchable: true
@Consumption.ranked: true
define view I_InternalOrderStdVH as select from I_InternalOrder {
  @ObjectModel.text.element: ['InternalOrderDescription']
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key InternalOrder,
  
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  @EndUserText.quickInfo: 'Internal Order Description' 
  InternalOrderDescription,
  @Consumption.hidden: true
  ControllingArea,
  @Consumption.hidden: true
  OrderType
}
```
