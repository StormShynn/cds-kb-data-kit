---
name: I_INCIDENTHOUR
description: "This view provides you with supported values for incident hours. You can use it to specify the hour when an incident occurred in your Environment, Health, and Safety (EHS) incident management processes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTHOUR')/$value
semantic_en: "This view provides you with supported values for incident hours. You can use it to specify the hour when an incident occurred in your Environment, Health, and Safety (EHS) incident management processes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Hour — CDS view giao diện dựa trên dd07l."
keywords:
  - "incident"
  - "hour"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTHOUR

**This view provides you with supported values for incident hours. You can use it to specify the hour when an incident occurred in your Environment, Health, and Safety (EHS) incident management processes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTHOUR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentHour` | ✓ | |  | `cast(dd07l.domvalue_l as ehhss_inc_hour)` | `CHAR(2)` | Hour |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncidentHourText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTHOUR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTHOUR')/$value)*

```abap
@EndUserText.label: 'Incident Hour'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentHour'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCHOUR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentHour
  as select from dd07l
  association [0..*] to I_IncidentHourText as _Text on $projection.IncidentHour = _Text.IncidentHour
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as ehhss_inc_hour)  as IncidentHour,
      _Text
}
where
      dd07l.domname  = 'EHHSS_INC_HOUR'
  and dd07l.as4local = 'A'
```
