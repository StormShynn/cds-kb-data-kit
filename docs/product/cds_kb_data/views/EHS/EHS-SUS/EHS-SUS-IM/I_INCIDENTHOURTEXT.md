---
name: I_INCIDENTHOURTEXT
description: "This view provides you with supported values for incident hours. You can use it to specify the hour when an incident occurred in your Environment, Health, and Safety (EHS) incident management processes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTHOURTEXT')/$value
semantic_en: "This view provides you with supported values for incident hours. You can use it to specify the hour when an incident occurred in your Environment, Health, and Safety (EHS) incident management processes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Hour - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "incident"
  - "hour"
  - "text"
  - "language"
  - "name"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTHOURTEXT

**This view provides you with supported values for incident hours. You can use it to specify the hour when an incident occurred in your Environment, Health, and Safety (EHS) incident management processes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTHOURTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentHour` | ✓ | |  | `cast(dd07t.domvalue_l as ehhss_inc_hour)` | `CHAR(2)` | Hour |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `IncidentHourName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_IncidentHour` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentHour` | `I_IncidentHour` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTHOURTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTHOURTEXT')/$value)*

```abap
@EndUserText.label: 'Incident Hour - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'IncidentHour'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCHOURT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #META}
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_IncidentHourText
  as select from dd07t
  association [0..1] to I_IncidentHour as _IncidentHour on $projection.IncidentHour = _IncidentHour.IncidentHour
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncidentHour'
  key cast(dd07t.domvalue_l as ehhss_inc_hour) as IncidentHour,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                         as Language,
      @Semantics.text:true
      dd07t.ddtext                             as IncidentHourName,

      _IncidentHour,
      _Language
}
where
      dd07t.domname  = 'EHHSS_INC_HOUR'
  and dd07t.as4local = 'A'
```
