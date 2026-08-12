---
name: I_INCIDENTREPORTINGSOURCE
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
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCE')/$value
semantic_en: "This CDS view provides you with supported values for the incident reporting source. You can use this view to identify the origin or channel through which an incident was reported in the system. This CDS view provides the data to answer the following business questions: Which reporting channels are used most frequently for incident reporting? How many incidents were reported through mobile applications versus web applications? What is the distribution of incident reports across different reporting sources? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. The following table shows the supported values and their meanings: Value Meaning 00 Unknown 01 Mobile Application 02 Web Application via Mobile Device 03 Web Application 04 Offline Interactive Forms 05 Public API 06 Injury/Illness Log Entry 07 Environment Management 08 Detailed Incident Creation"
semantic_vi: "Incident Reporting Source — CDS view giao diện dựa trên dd07l."
keywords:
  - "incident"
  - "reporting"
  - "source"
  - "code"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - bo:purchaseorder
---
# I_INCIDENTREPORTINGSOURCE

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReportingSourceCode` | ✓ | |  | `cast(dd07l.domvalue_l as ehhss_inc_report_source_code)` | `CHAR(2)` | Incident Reporting Source |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncidentReportingSourceText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINCREPSRC'
@Analytics: { dataCategory:#DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Incident Reporting Source'
@ObjectModel.representativeKey: 'IncidentReportingSourceCode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #META}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations:true

define view I_IncidentReportingSource
  as select from dd07l
  association [0..*] to I_IncidentReportingSourceText as _Text on $projection.IncidentReportingSourceCode = _Text.IncidentReportingSourceCode
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as ehhss_inc_report_source_code) as IncidentReportingSourceCode,
      _Text
}
where
      dd07l.domname  = 'EHHSS_INC_REPORT_SOURCE_CODE'
  and dd07l.as4local = 'A'
```
