---
name: I_INCIDENTINJRYILLNLOGTYPE
description: "This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPE')/$value
semantic_en: "This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Injury Illness Log Type — CDS view giao diện dựa trên ehhssc_inj_typ."
keywords:
  - "incident"
  - "injury"
  - "illness"
  - "log"
  - "type"
  - "illn"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTINJRYILLNLOGTYPE

**This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentInjuryIllnLogType` | ✓ | |  | `cast( ehhssc_inj_typ.code as ehhss_inc_inj_type_code_nc preserving type )` | `CHAR(50)` | Injury/Illness Log Entry Type |
| `_IncidentLocationTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentLocationTypeText` | `I_IncidentInjryIllnLogTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPE')/$value)*

```abap
@EndUserText.label: 'Incident Injury Illness Log Type'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'IncidentInjuryIllnLogType'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@AbapCatalog.sqlViewName: 'IINJRYLOGTYPE'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.internalName:#LOCAL 

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.resultSet.sizeCategory:#XS
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_IncidentInjryIllnLogType
  as select from ehhssc_inj_typ
  association [0..*] to I_IncidentInjryIllnLogTypeText as _IncidentLocationTypeText on $projection.IncidentInjuryIllnLogType = _IncidentLocationTypeText.IncidentInjuryIllnLogType
{
      @ObjectModel.text.association: '_IncidentLocationTypeText'
  key cast( ehhssc_inj_typ.code as ehhss_inc_inj_type_code_nc preserving type ) as IncidentInjuryIllnLogType,
      _IncidentLocationTypeText
}
```
