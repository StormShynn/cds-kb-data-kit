---
name: I_EWM_MNSOFTRANSPTTYPETEXT_2
description: "This CDS view provides information about means of transport types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_MNSOFTRANSPTTYPETEXT_2')/$value
semantic_en: "This CDS view provides information about means of transport types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Means of Transport Type - Text — CDS view giao diện dựa trên Means of Transport Type - Text."
keywords:
  - "means"
  - "transport"
  - "type"
  - "text"
  - "language"
  - "name"
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
# I_EWM_MNSOFTRANSPTTYPETEXT_2

**This CDS view provides information about means of transport types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_MNSOFTRANSPTTYPETEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `EWMMeansOfTransportType` | ✓ | |  | `ttype` | `CHAR(10)` | Means of Transport |
| `EWMMeansOfTransportTypeName` |  | |  | `ttypetxt` | `CHAR(40)` | Means of Transport Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_MNSOFTRANSPTTYPETEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_MNSOFTRANSPTTYPETEXT_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Means of Transport Type - Text'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMMeansOfTransportType'
@Analytics.technicalName: 'IEWMMOTTYPETEXT2'
@ObjectModel: {dataCategory: #TEXT,
               usageType: {serviceQuality: #A,
                           dataClass: #CUSTOMIZING,
                           sizeCategory: #M}}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Analytics.internalName:#LOCAL 
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_MnsOfTransptTypeText_2
  as select from /sapapo/trtypet as TypeName
{
      @Semantics.language: true
  key TypeName.spras as Language,
  key TypeName.ttype as EWMMeansOfTransportType,
      @Semantics.text: true
      ttypetxt       as EWMMeansOfTransportTypeName
}
```
