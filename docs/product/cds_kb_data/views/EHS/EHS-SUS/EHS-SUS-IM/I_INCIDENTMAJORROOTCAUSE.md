---
name: I_INCIDENTMAJORROOTCAUSE
description: "This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSE')/$value
semantic_en: "This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Major Root Cause — CDS view giao diện dựa trên ehhssc_rcnode."
keywords:
  - "incident"
  - "major"
  - "root"
  - "cause"
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - master-data
---
# I_INCIDENTMAJORROOTCAUSE

**This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentMajorRootCause` | ✓ | |  | `cast(code as ehhss_cause_code_nconv)` | `CHAR(21)` | Root Cause |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncidentMajorRootCauseText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSE')/$value)*

```abap
@EndUserText.label: 'Incident Major Root Cause'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentMajorRootCause'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCMJROOTCAUSE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentMajorRootCause
  as select from ehhssc_rcnode
  association [0..*] to I_IncidentMajorRootCauseText as _Text on $projection.IncidentMajorRootCause = _Text.IncidentMajorRootCause
{
      @ObjectModel.text.association: '_Text'
  key cast(code as ehhss_cause_code_nconv) as IncidentMajorRootCause,   // cast to avoid execution of conversion exit
      _Text
}
```
