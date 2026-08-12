---
name: C_LISTEDSUBSTANCESAPDEX
description: "This CDS view supports the extraction of data for listed substances that are delivered by SAP. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCESAPDEX')/$value
semantic_en: "This CDS view supports the extraction of data for listed substances that are delivered by SAP. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SAP Listed Substance Data Extraction — CDS view tiêu dùng dựa trên I_ListedSubstanceSAP."
keywords:
  - "sap"
  - "listed"
  - "substance"
  - "data"
  - "extraction"
  - "char"
  - "number"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-CI
  - consumption-view
  - EHS-SUS
  - EHS-SUS-CI
  - transaction
---
# C_LISTEDSUBSTANCESAPDEX

**This CDS view supports the extraction of data for listed substances that are delivered by SAP. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCESAPDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ListedSubstance` | ✓ | |  |  | `CHAR(12)` | Listed Substance |
| `ListedSubstanceCharUUID` | ✓ | |  |  | `CHAR(32)` | BCO KEY |
| `ListedSubstanceUUID` | ✓ | |  |  | `RAW(16)` | Listed Substance Key |
| `CASNumber` |  | |  |  | `CHAR(20)` | CAS Number |
| `ECNumber` |  | |  |  | `CHAR(9)` | Listed Substance EC Number |
| `MolecularFormula` |  | |  |  | `CHAR(60)` | Molecular Formula |
| `ListedSubstanceCndn` |  | |  |  | `CHAR(21)` | Conditions for Listed Substances |
| `ListedSubstanceReference` |  | |  |  | `CHAR(12)` | Referenced Listed Substance |
| `ListedSubstanceIsGroup` |  | |  |  | `CHAR(1)` | Indicator for a Listed Substance Group |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCESAPDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCESAPDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'SAP Listed Substance Data Extraction'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'ListedSubstance'
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.enabled:true
define view entity C_ListedSubstanceSAPDEX
  as select from I_ListedSubstanceSAP
{
  key ListedSubstance,
      @Semantics.uuid: true
  key ListedSubstanceCharUUID,
  key ListedSubstanceUUID,
      CASNumber,
      ECNumber,
      MolecularFormula,
      ListedSubstanceCndn,
      ListedSubstanceReference,
      @Semantics.booleanIndicator: true
      ListedSubstanceIsGroup
}
```
