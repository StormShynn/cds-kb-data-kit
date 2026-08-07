---
name: C_LISTEDSUBSTANCENAMECUSTDEX
description: This CDS view supports the extraction of names for listed substances that are created by customers in the available languages. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCENAMECUSTDEX')/$value
semantic_en: This CDS view supports the extraction of names for listed substances that are created by customers in the available languages. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-CI
  - consumption-view
  - customer
  - EHS-SUS
  - EHS-SUS-CI
  - transaction
  - metadata-only
---
# C_LISTEDSUBSTANCENAMECUSTDEX

**This CDS view supports the extraction of names for listed substances that are created by customers in the available languages. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCENAMECUSTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ListedSubstance` |  | |  |  | `CHAR(12)` | Listed Substance |
| `ListedSubstanceCharUUID` |  | |  |  | `CHAR(32)` | Listed Substance UUID in character form |
| `ListedSubstanceNameUUID` |  | |  |  | `RAW(16)` | Listed Substance Name UUID |
| `ListedSubstanceUUID` |  | |  |  | `RAW(16)` | Listed Substance Key |
| `ListedSubstanceNameSequence` |  | |  |  | `INT1(3)` | Listed Substance Name Sequence Number |
| `ListedSubstanceName` |  | |  |  | `CHAR(1333)` | Listed Substance Name |
