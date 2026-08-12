---
name: I_INCIDENTGROUPCODETEXT
description: "This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODETEXT')/$value
semantic_en: "This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Group Code - Text — CDS view giao diện dựa trên ehhssc_inc_grp_t."
keywords:
  - "incident"
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
---
# I_INCIDENTGROUPCODETEXT

**This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentGroupCode` | ✓ | |  | `code` | `CHAR(21)` | Incident Group |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `IncidentGroupCodeName` |  | |  | `cast (case when description_long is not initial then description_long else description end as ehfnd_description_l )` | `CHAR(132)` | Description (Long) |
| `IncidentGroupCodeText` |  | |  | `cast (case when description_long is not initial then description_long else description end as ehfnd_description_l )` | `CHAR(132)` | Description (Long) |
| `_IncidentGroupCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentGroupCode` | `I_IncidentGroupCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODETEXT')/$value)*

```abap
@EndUserText.label: 'Incident Group Code - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'IncidentGroupCode'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCINCGRINCT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_IncidentGroupCodeText
  as select from ehhssc_inc_grp_t
  association [0..1] to I_IncidentGroupCode as _IncidentGroupCode on $projection.IncidentGroupCode = _IncidentGroupCode.IncidentGroupCode
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncidentGroupCode'
  key code                                               as IncidentGroupCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                           as Language,
      @Semantics.text:true
      cast (case when description_long is not initial
           then description_long
           else description end as ehfnd_description_l ) as IncidentGroupCodeName,

            cast (case when description_long is not initial
           then description_long
           else description end as ehfnd_description_l ) as IncidentGroupCodeText,


      _IncidentGroupCode,
      _Language
}
```
