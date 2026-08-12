---
name: I_EHSINVESTIGATIONSTATUSTEXT
description: "This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUSTEXT')/$value
semantic_en: "This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Investigation Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "investigation"
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
# I_EHSINVESTIGATIONSTATUSTEXT

**This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSInvestigationStatus` | ✓ | |  | `cast(dd07t.domvalue_l as ehhss_inv_status)` | `CHAR(2)` | Investigation Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EHSInvestigationStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUSTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Investigation Status - Text'
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'IEHSInvStatusT'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#LANGUAGE_DEPENDENT_TEXT]
define view entity I_EHSInvestigationStatusText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key cast(dd07t.domvalue_l as ehhss_inv_status) as EHSInvestigationStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                           as Language,
      @Semantics.text:true
      dd07t.ddtext                               as EHSInvestigationStatusText,

      _Language
}
where
      dd07t.domname  = 'EHHSS_INV_STATUS'
  and dd07t.as4local = 'A'
```
