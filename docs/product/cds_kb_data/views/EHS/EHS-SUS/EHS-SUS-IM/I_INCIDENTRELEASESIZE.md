---
name: I_INCIDENTRELEASESIZE
description: "This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZE')/$value
semantic_en: "This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Release Size — CDS view giao diện dựa trên ehhssc_rel_siz."
keywords:
  - "incident"
  - "release"
  - "size"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - material
---
# I_INCIDENTRELEASESIZE

**This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReleaseSize` | ✓ | |  | `cast(code as ehhss_release_size_code_nconv)` | `CHAR(21)` | Release Size |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncidentReleaseSizeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZE')/$value)*

```abap
@EndUserText.label: 'Incident Release Size'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentReleaseSize'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCRELEASESIZE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentReleaseSize
  as select from ehhssc_rel_siz
  association [0..*] to I_IncidentReleaseSizeText as _Text on $projection.IncidentReleaseSize = _Text.IncidentReleaseSize
{
      @ObjectModel.text.association: '_Text'
  key cast(code as ehhss_release_size_code_nconv) as IncidentReleaseSize, // cast to avoid execution of conversion exit
      _Text
}
```
