---
name: I_INCIDENTREPORTINGSOURCETEXT
description: "This CDS view provides you with supported values for the incident reporting source. You can use this view to identify the origin or channel through which an incident was reported in the system. This CDS view provides the data to answer the following business questions: Which reporting channels are used most frequently for incident reporting? How many incidents were reported through mobile applications versus web applications? What is the distribution of incident reports across different reporting sources? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. The following table shows the supported values and their meanings: Value Meaning 00 Unknown 01 Mobile Application 02 Web Application via Mobile Device 03 Web Application 04 Offline Interactive Forms 05 Public API 06 Injury/Illness Log Entry 07 Environment Management 08 Detailed Incident Creation"
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCETEXT')/$value
semantic_en: "This CDS view provides you with supported values for the incident reporting source. You can use this view to identify the origin or channel through which an incident was reported in the system. This CDS view provides the data to answer the following business questions: Which reporting channels are used most frequently for incident reporting? How many incidents were reported through mobile applications versus web applications? What is the distribution of incident reports across different reporting sources? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. The following table shows the supported values and their meanings: Value Meaning 00 Unknown 01 Mobile Application 02 Web Application via Mobile Device 03 Web Application 04 Offline Interactive Forms 05 Public API 06 Injury/Illness Log Entry 07 Environment Management 08 Detailed Incident Creation"
semantic_vi: "Incident Reporting Source - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "incident"
  - "reporting"
  - "source"
  - "text"
  - "code"
  - "language"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - bo:purchaseorder
---
# I_INCIDENTREPORTINGSOURCETEXT

**This CDS view provides you with supported values for the incident reporting source. You can use this view to identify the origin or channel through which an incident was reported in the system. This CDS view provides the data to answer the following business questions: Which reporting channels are used most frequently for incident reporting? How many incidents were reported through mobile applications versus web applications? What is the distribution of incident reports across different reporting sources? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. The following table shows the supported values and their meanings: Value Meaning 00 Unknown 01 Mobile Application 02 Web Application via Mobile Device 03 Web Application 04 Offline Interactive Forms 05 Public API 06 Injury/Illness Log Entry 07 Environment Management 08 Detailed Incident Creation**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReportingSourceCode` | ✓ | |  | `cast(dd07t.domvalue_l as ehhss_inc_report_source_code)` | `CHAR(2)` | Incident Reporting Source |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `IncidentReportingSourceText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_IncidentReportingSource` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentReportingSource` | `I_IncidentReportingSource` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINCREPSRCT'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.representativeKey: 'IncidentReportingSourceCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Incident Reporting Source - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #META}

define view I_IncidentReportingSourceText
  as select from dd07t
  association [0..1] to I_IncidentReportingSource as _IncidentReportingSource on $projection.IncidentReportingSourceCode = _IncidentReportingSource.IncidentReportingSourceCode
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncidentReportingSource'
  key cast(dd07t.domvalue_l as ehhss_inc_report_source_code) as IncidentReportingSourceCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                       as Language,
      @Semantics.text:true
      dd07t.ddtext                                           as IncidentReportingSourceText,

      _IncidentReportingSource,
      _Language
}
where
      dd07t.domname  = 'EHHSS_INC_REPORT_SOURCE_CODE'
  and dd07t.as4local = 'A'
```
