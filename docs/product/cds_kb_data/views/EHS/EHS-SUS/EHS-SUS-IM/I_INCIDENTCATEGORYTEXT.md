---
name: I_INCIDENTCATEGORYTEXT
description: "This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORYTEXT')/$value
semantic_en: "This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "incident"
  - "category"
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
# I_INCIDENTCATEGORYTEXT

**This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentCategory` | ✓ | |  | `cast(dd07t.domvalue_l as ehhss_inc_category_code)` | `CHAR(3)` | Incident Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `IncidentCategoryText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_IncidentCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentCategory` | `I_IncidentCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORYTEXT')/$value)*

```abap
@EndUserText.label: 'Incident Category - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'IncidentCategory'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCCATT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_IncidentCategoryText
  as select from dd07t
  association [0..1] to I_IncidentCategory as _IncidentCategory on $projection.IncidentCategory = _IncidentCategory.IncidentCategory
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncidentCategory'
  key cast(dd07t.domvalue_l as ehhss_inc_category_code) as IncidentCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                  as Language,
      @Semantics.text:true
      dd07t.ddtext                                      as IncidentCategoryText,

      _IncidentCategory,
      _Language
}
where
      dd07t.domname  = 'EHHSS_INC_CATEGORY_CODE'
  and dd07t.as4local = 'A'
```
