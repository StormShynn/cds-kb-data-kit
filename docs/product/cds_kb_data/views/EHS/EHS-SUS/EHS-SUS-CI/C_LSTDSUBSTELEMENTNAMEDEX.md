---
name: C_LSTDSUBSTELEMENTNAMEDEX
description: "This CDS view retrieves the text names of listed substance elements in the system. This CDS view provides the data to answer the following business questions: What are the text names of the listed substance elements in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LSTDSUBSTELEMENTNAMEDEX')/$value
semantic_en: "This CDS view retrieves the text names of listed substance elements in the system. This CDS view provides the data to answer the following business questions: What are the text names of the listed substance elements in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Listed Substance Element Name — CDS view tiêu dùng dựa trên I_LstdSubstWthVarAndGrpName."
keywords:
  - "listed"
  - "substance"
  - "element"
  - "name"
  - "char"
  - "sequence"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-CI
  - consumption-view
  - EHS-SUS
  - EHS-SUS-CI
---
# C_LSTDSUBSTELEMENTNAMEDEX

**This CDS view retrieves the text names of listed substance elements in the system. This CDS view provides the data to answer the following business questions: What are the text names of the listed substance elements in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LSTDSUBSTELEMENTNAMEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ListedSubstance` | ✓ | |  |  | `CHAR(12)` | Listed Substance |
| `ListedSubstanceNameCharUUID` | ✓ | |  |  | `CHAR(32)` | Listed Substance UUID in character form |
| `ListedSubstanceNameUUID` | ✓ | |  |  | `RAW(16)` | Listed Substance Name UUID |
| `ListedSubstanceUUID` |  | |  |  | `RAW(16)` | Listed Substance Key |
| `ListedSubstanceNameSequence` |  | |  |  | `INT1(3)` | Listed Substance Name Sequence Number |
| `Language` |  | |  |  | `LANG(1)` | Language |
| `ListedSubstanceName` |  | |  |  | `CHAR(1333)` | Listed Substance Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LSTDSUBSTELEMENTNAMEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LSTDSUBSTELEMENTNAMEDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Listed Substance Element Name'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'ListedSubstanceElementName'
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.enabled:true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

define view entity C_LstdSubstElementNameDEX
  as select from I_LstdSubstWthVarAndGrpName
{
      @EndUserText.label: 'Listed Substance Identifier'
  key ListedSubstance,
      @EndUserText.label: 'Listed Substance Name Character Key'
      @Semantics.uuid: true
  key ListedSubstanceNameCharUUID,
      @EndUserText.label: 'Listed Substance Name Key'
  key ListedSubstanceNameUUID,
      @EndUserText.label: 'Listed Substance Key'
      ListedSubstanceUUID,
      ListedSubstanceNameSequence,
      Language,
      @EndUserText.label: 'Listed Substance Name'
      ListedSubstanceName
}
```
