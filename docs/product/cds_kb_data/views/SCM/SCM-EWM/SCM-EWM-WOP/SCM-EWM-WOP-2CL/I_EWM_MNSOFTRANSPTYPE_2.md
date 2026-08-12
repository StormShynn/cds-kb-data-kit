---
name: I_EWM_MNSOFTRANSPTYPE_2
description: "This CDS view provides information about means of transport types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_MNSOFTRANSPTYPE_2')/$value
semantic_en: "This CDS view provides information about means of transport types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Means of Transport Type — CDS view giao diện dựa trên Means of Transport Type."
keywords:
  - "means"
  - "transport"
  - "type"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - bo:purchaseorder
---
# I_EWM_MNSOFTRANSPTYPE_2

**This CDS view provides information about means of transport types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_MNSOFTRANSPTYPE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMMeansOfTransportType` | ✓ | |  | `ttype` | `CHAR(10)` | Means of Transport |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_MnsOfTransptTypeText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_MNSOFTRANSPTYPE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_MNSOFTRANSPTYPE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Means of Transport Type'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMMeansOfTransportType'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMMOTTYPE2'
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
define view entity I_EWM_MnsOfTranspType_2
  as select from /sapapo/trtype as TypeName
  association [0..*] to I_EWM_MnsOfTransptTypeText_2 as _Text on $projection.EWMMeansOfTransportType =  _Text.EWMMeansOfTransportType
{
      @ObjectModel.text.association: '_Text'
  key ttype as EWMMeansOfTransportType,
      _Text
}
```
