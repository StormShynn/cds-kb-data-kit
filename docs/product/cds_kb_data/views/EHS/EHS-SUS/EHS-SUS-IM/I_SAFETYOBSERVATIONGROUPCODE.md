---
name: I_SAFETYOBSERVATIONGROUPCODE
description: "This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODE')/$value
semantic_en: "This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Safety Observation Group Code — CDS view giao diện dựa trên ehhssc_so_grp."
keywords:
  - "safety"
  - "observation"
  - "group"
  - "code"
  - "inactive"
  - "configuration"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - bo:salesorder
---
# I_SAFETYOBSERVATIONGROUPCODE

**This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SafetyObservationGroupCode` | ✓ | |  | `code` | `CHAR(21)` | Safety Observation Group |
| `EHSInactiveConfiguration` |  | |  | `inactive` | `CHAR(1)` | Deactivate Configuration |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SafetyObservationGroupCodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODE')/$value)*

```abap
@EndUserText.label: 'Safety Observation Group Code'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'SafetyObservationGroupCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCINCGRSO'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_SafetyObservationGroupCode
  as select from ehhssc_so_grp
  association [0..*] to I_SafetyObservationGroupCodeT as _Text on $projection.SafetyObservationGroupCode = _Text.SafetyObservationGroupCode
{
      @ObjectModel.text.association: '_Text'
  key code            as SafetyObservationGroupCode,
  
  inactive as EHSInactiveConfiguration,
  
      @ObjectModel.association.type: #TO_COMPOSITION_CHILD
      _Text
}
where inactive = ''
```
