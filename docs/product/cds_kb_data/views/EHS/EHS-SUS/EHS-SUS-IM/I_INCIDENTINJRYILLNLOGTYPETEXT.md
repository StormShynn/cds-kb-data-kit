---
name: I_INCIDENTINJRYILLNLOGTYPETEXT
description: "This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPETEXT')/$value
semantic_en: "This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Injury Illness Log Type - Text — CDS view giao diện dựa trên ehhssc_inj_typ_t."
keywords:
  - "incident"
  - "injury"
  - "illness"
  - "log"
  - "type"
  - "text"
  - "illn"
  - "language"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INCIDENTINJRYILLNLOGTYPETEXT

**This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentInjuryIllnLogType` | ✓ | |  | `cast( ehhssc_inj_typ_t.code as ehhss_inc_inj_type_code_nc preserving type )` | `CHAR(50)` | Injury/Illness Log Entry Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `IncidentInjuryIllnLogTypeText` |  | |  | `description` | `CHAR(40)` | Description (Extra Short) |
| `_IncidentInjryIllnLogType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentInjryIllnLogType` | `I_IncidentInjryIllnLogType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Incident Injury Illness Log Type - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'IncidentInjuryIllnLogType'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IINJRYLOGTYPET'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_IncidentInjryIllnLogTypeText
  as select from ehhssc_inj_typ_t
  association [0..1] to I_IncidentInjryIllnLogType as _IncidentInjryIllnLogType on $projection.IncidentInjuryIllnLogType = _IncidentInjryIllnLogType.IncidentInjuryIllnLogType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncidentInjryIllnLogType'
  key cast( ehhssc_inj_typ_t.code as ehhss_inc_inj_type_code_nc preserving type )  as IncidentInjuryIllnLogType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ehhssc_inj_typ_t.language                                                     as Language,

      @Semantics.text:true
      ehhssc_inj_typ_t.description                                                  as IncidentInjuryIllnLogTypeText,

     _IncidentInjryIllnLogType,
      _Language
}
```
