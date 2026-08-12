---
name: I_INCIDENTCATEGORY
description: "This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORY')/$value
semantic_en: "This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "incident"
  - "category"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTCATEGORY

**This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentCategory` | ✓ | |  | `cast(dd07l.domvalue_l as ehhss_inc_category_code_nconv)` | `CHAR(3)` | Incident Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IncidentCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORY')/$value)*

```abap
@EndUserText.label: 'Incident Category'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'IncidentCategory'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #META}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentCategory
  as select from dd07l
  association [0..*] to I_IncidentCategoryText as _Text on $projection.IncidentCategory = _Text.IncidentCategory
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as ehhss_inc_category_code_nconv) as IncidentCategory,
      _Text
}
where
      dd07l.domname  = 'EHHSS_INC_CATEGORY_CODE'
  and dd07l.as4local = 'A'
```
