---
name: I_INCIDENTRELEASESIZETEXT
description: "This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZETEXT')/$value
semantic_en: "This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Release Size - Text — CDS view giao diện dựa trên ehhssc_rel_siz_t."
keywords:
  - "incident"
  - "release"
  - "size"
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
  - material
---
# I_INCIDENTRELEASESIZETEXT

**This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReleaseSize` | ✓ | |  | `cast(code as ehhss_release_size_code_nconv)` | `CHAR(21)` | Release Size |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `IncidentReleaseSizeName` |  | |  | `description` | `CHAR(40)` | Description (Extra Short) |
| `_IncidentReleaseSize` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncidentReleaseSize` | `I_IncidentReleaseSize` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZETEXT')/$value)*

```abap
@EndUserText.label: 'Incident Release Size - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'IncidentReleaseSize'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCRELEASESIZET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_IncidentReleaseSizeText
  as select from ehhssc_rel_siz_t

  association [0..1] to I_IncidentReleaseSize as _IncidentReleaseSize on $projection.IncidentReleaseSize = _IncidentReleaseSize.IncidentReleaseSize
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncidentReleaseSize'
  key cast(code as ehhss_release_size_code_nconv) as IncidentReleaseSize, // cast to avoid execution of conversion exit
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                    as Language,
      @Semantics.text:true
      description                                 as IncidentReleaseSizeName,

      _IncidentReleaseSize,
      _Language
}
```
