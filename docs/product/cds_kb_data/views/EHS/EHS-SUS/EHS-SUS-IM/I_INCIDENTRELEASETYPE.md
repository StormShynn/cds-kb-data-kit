---
name: I_INCIDENTRELEASETYPE
description: "This CDS view provides you with data for incident release types in Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze incidents based on their release type classification. This CDS view provides the data to answer the following business questions: What are the different release types associated with incidents in my organization? How can I classify incidents based on their release type for reporting and analysis purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASETYPE')/$value
semantic_en: "This CDS view provides you with data for incident release types in Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze incidents based on their release type classification. This CDS view provides the data to answer the following business questions: What are the different release types associated with incidents in my organization? How can I classify incidents based on their release type for reporting and analysis purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Release Type — CDS view giao diện dựa trên ehhssc_rel_typ."
keywords:
  - "incident"
  - "release"
  - "type"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTRELEASETYPE

**This CDS view provides you with data for incident release types in Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze incidents based on their release type classification. This CDS view provides the data to answer the following business questions: What are the different release types associated with incidents in my organization? How can I classify incidents based on their release type for reporting and analysis purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReleaseType` | ✓ | |  | `cast(code as ehhss_release_type_code_nconv)` | `CHAR(21)` | Release Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncidentReleaseTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASETYPE')/$value)*

```abap
@EndUserText.label: 'Incident Release Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentReleaseType'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCRELEASETYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentReleaseType
  as select from ehhssc_rel_typ
  association [0..*] to I_IncidentReleaseTypeText as _Text on $projection.IncidentReleaseType = _Text.IncidentReleaseType
{
      @ObjectModel.text.association: '_Text'
  key cast(code as ehhss_release_type_code_nconv) as IncidentReleaseType, // cast to avoid execution of conversion exit
      _Text
}
```
