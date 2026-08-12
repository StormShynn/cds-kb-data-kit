---
name: I_INCIDENTSTATUS
description: "This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUS')/$value
semantic_en: "This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "incident"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTSTATUS

**This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentStatus` | ✓ | |  | `cast(dd07l.domvalue_l as ehhss_inc_status_code_nconv)` | `CHAR(2)` | Incident Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncidentStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINCSTATUS'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'IncidentStatus'
@EndUserText.label: 'Incident Status'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #META}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentStatus
  as select from dd07l
  association [0..*] to I_IncidentStatusText as _Text on $projection.IncidentStatus = _Text.IncidentStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as ehhss_inc_status_code_nconv)  as IncidentStatus,       // cast to data element with no conversion exit
      _Text
}
where
      dd07l.domname  = 'EHFND_BO_STATUS_TA_CODE_NCONV'
  and dd07l.as4local = 'A'
```
