---
name: I_INCIDENTSTATUSTEXT
description: "This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUSTEXT')/$value
semantic_en: "This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "incident"
  - "status"
  - "text"
  - "language"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTSTATUSTEXT

**This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentStatus` | ✓ | |  | `cast(dd07t.domvalue_l as ehhss_inc_status_code_nconv)` | `CHAR(2)` | Incident Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `IncidentStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_IncidentStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentStatus` | `I_IncidentStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINCSTATUST'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'IncidentStatus'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Incident Status - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #META}
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_IncidentStatusText
  as select from dd07t
  association [0..1] to I_IncidentStatus as _IncidentStatus on $projection.IncidentStatus = _IncidentStatus.IncidentStatus
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncidentStatus'
  key cast(dd07t.domvalue_l as ehhss_inc_status_code_nconv) as IncidentStatus, // cast to data element with no conversion exit
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                      as Language,
      @Semantics.text:true
      dd07t.ddtext                                          as IncidentStatusText,

      _IncidentStatus,
      _Language
}
where
      dd07t.domname  = 'EHFND_BO_STATUS_TA_CODE_NCONV'
  and dd07t.as4local = 'A'
```
