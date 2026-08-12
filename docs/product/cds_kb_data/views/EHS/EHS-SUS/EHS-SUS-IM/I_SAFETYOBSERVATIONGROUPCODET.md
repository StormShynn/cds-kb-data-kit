---
name: I_SAFETYOBSERVATIONGROUPCODET
description: "This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODET')/$value
semantic_en: "This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Safety Observation Group Code - Text — CDS view giao diện dựa trên ehhssc_so_grp_t."
keywords:
  - "safety"
  - "observation"
  - "group"
  - "code"
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
  - bo:salesorder
---
# I_SAFETYOBSERVATIONGROUPCODET

**This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SafetyObservationGroupCode` | ✓ | |  | `code` | `CHAR(21)` | Safety Observation Group |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `SafetyObservationGroupCodeName` |  | |  | `cast ( case when description_long is not initial then description_long else description end as ehfnd_description_l )` | `CHAR(132)` | Description (Long) |
| `_SafetyObservationGroupCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SafetyObservationGroupCode` | `I_SafetyObservationGroupCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODET')/$value)*

```abap
@EndUserText.label: 'Safety Observation Group Code - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SafetyObservationGroupCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCINCGRSOT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_SafetyObservationGroupCodeT
  as select from ehhssc_so_grp_t
  association [0..1] to I_SafetyObservationGroupCode as _SafetyObservationGroupCode on $projection.SafetyObservationGroupCode = _SafetyObservationGroupCode.SafetyObservationGroupCode
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SafetyObservationGroupCode'
  key code                                                  as SafetyObservationGroupCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                              as Language,
      @Semantics.text:true
      cast ( case when description_long is not initial
              then description_long
              else description end as ehfnd_description_l ) as SafetyObservationGroupCodeName,

      _SafetyObservationGroupCode,
      _Language
}
```
