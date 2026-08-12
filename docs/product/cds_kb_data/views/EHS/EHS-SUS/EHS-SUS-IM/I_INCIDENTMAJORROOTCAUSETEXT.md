---
name: I_INCIDENTMAJORROOTCAUSETEXT
description: "This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSETEXT')/$value
semantic_en: "This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Major Root Cause - Text — CDS view giao diện dựa trên ehhssc_rcnode_t."
keywords:
  - "incident"
  - "major"
  - "root"
  - "cause"
  - "text"
  - "language"
  - "name"
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - master-data
---
# I_INCIDENTMAJORROOTCAUSETEXT

**This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentMajorRootCause` | ✓ | |  | `cast(code as ehhss_cause_code_nconv)` | `CHAR(21)` | Root Cause |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `IncidentMajorRootCauseName` |  | |  | `description` | `CHAR(40)` | Description (Extra Short) |
| `_IncidentMajorRootCause` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentMajorRootCause` | `I_IncidentMajorRootCause` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSETEXT')/$value)*

```abap
@EndUserText.label: 'Incident Major Root Cause - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'IncidentMajorRootCause'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCMJROOTCAUSET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_IncidentMajorRootCauseText
  as select from ehhssc_rcnode_t
  association [0..1] to I_IncidentMajorRootCause as _IncidentMajorRootCause on $projection.IncidentMajorRootCause = _IncidentMajorRootCause.IncidentMajorRootCause
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncidentMajorRootCause'
  key cast(code as ehhss_cause_code_nconv) as IncidentMajorRootCause, // cast to avoid execution of conversion exit
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                             as Language,
      @Semantics.text:true
      description                          as IncidentMajorRootCauseName,

      _IncidentMajorRootCause,
      _Language
}
```
