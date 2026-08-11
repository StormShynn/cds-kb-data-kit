---
name: I_INCIDENTGROUPCODE
description: "This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODE')/$value
semantic_en: "This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Group Code — CDS view giao diện dựa trên ehhssc_inc_grp."
keywords:
  - "incident"
  - "group"
  - "code"
  - "inactive"
  - "configuration"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTGROUPCODE

**This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentGroupCode` | ✓ | |  | `code` | `CHAR(21)` | Incident Group |
| `EHSInactiveConfiguration` |  | |  | `inactive` | `CHAR(1)` | Deactivate Configuration |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncidentGroupCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODE')/$value)*

```abap
@EndUserText.label: 'Incident Group Code'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentGroupCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCINCGRINC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentGroupCode
  as select from ehhssc_inc_grp
  association [0..*] to I_IncidentGroupCodeText as _Text on $projection.IncidentGroupCode = _Text.IncidentGroupCode
{
      @ObjectModel.text.association: '_Text'
  key code            as IncidentGroupCode,
  
  inactive as EHSInactiveConfiguration,
  
      _Text
}
where inactive = ''
```
