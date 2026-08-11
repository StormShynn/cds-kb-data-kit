---
name: I_EHSINVSTGNACTIVITYSTATUSTEXT
description: "This CDS view provides you with the supported status values for investigation activities in incident investigations. You can use these status values to track and manage the lifecycle of investigation activities, from initial creation through completion or cancellation. This CDS view provides the data to answer the following business questions: What is the current status of investigation activities in my organization? How many investigation activities are in progress versus completed? Which investigation activities have been canceled and why? The following investigation activity status values are available: Value Meaning 01 New 02 In Progress 03 Completed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVSTGNACTIVITYSTATUSTEXT')/$value
semantic_en: "This CDS view provides you with the supported status values for investigation activities in incident investigations. You can use these status values to track and manage the lifecycle of investigation activities, from initial creation through completion or cancellation. This CDS view provides the data to answer the following business questions: What is the current status of investigation activities in my organization? How many investigation activities are in progress versus completed? Which investigation activities have been canceled and why? The following investigation activity status values are available: Value Meaning 01 New 02 In Progress 03 Completed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Investigation Activity Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "investigation"
  - "activity"
  - "status"
  - "text"
  - "language"
  - "invstgn"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_EHSINVSTGNACTIVITYSTATUSTEXT

**This CDS view provides you with the supported status values for investigation activities in incident investigations. You can use these status values to track and manage the lifecycle of investigation activities, from initial creation through completion or cancellation. This CDS view provides the data to answer the following business questions: What is the current status of investigation activities in my organization? How many investigation activities are in progress versus completed? Which investigation activities have been canceled and why? The following investigation activity status values are available: Value Meaning 01 New 02 In Progress 03 Completed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVSTGNACTIVITYSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSInvestigationActivityStatus` | ✓ | |  | `cast(dd07t.domvalue_l as ehhss_inv_act_status)` | `CHAR(2)` | Status of Investigation Activity |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EHSInvstgnActivityStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVSTGNACTIVITYSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVSTGNACTIVITYSTATUSTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Investigation Activity Status - Text'
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'IEHSInvActStatusT'
@ObjectModel.representativeKey: 'EHSInvestigationActivityStatus'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#LANGUAGE_DEPENDENT_TEXT]
define view entity I_EHSInvstgnActivityStatusText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key cast(dd07t.domvalue_l as ehhss_inv_act_status) as EHSInvestigationActivityStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                           as Language,
      @Semantics.text:true
      dd07t.ddtext                               as EHSInvstgnActivityStatusText,

      _Language
}
where
      dd07t.domname  = 'EHHSS_INV_ACT_STATUS'
  and dd07t.as4local = 'A'
```
