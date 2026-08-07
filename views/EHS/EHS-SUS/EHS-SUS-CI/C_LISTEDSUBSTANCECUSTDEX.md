---
name: C_LISTEDSUBSTANCECUSTDEX
description: This CDS view supports the extraction of data for listed substances that are created by customers. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCECUSTDEX')/$value
semantic_en: This CDS view supports the extraction of data for listed substances that are created by customers. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# C_LISTEDSUBSTANCECUSTDEX

**This CDS view supports the extraction of data for listed substances that are created by customers. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can listed substance data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCECUSTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ListedSubstance` |  | |  |  | `CHAR(12)` | Listed Substance |
| `ListedSubstanceCharUUID` |  | |  |  | `CHAR(32)` | BCO KEY |
| `ListedSubstanceUUID` |  | |  |  | `RAW(16)` | Listed Substance Key |
| `CASNumber` |  | |  |  | `CHAR(20)` | CAS Number |
| `ECNumber` |  | |  |  | `CHAR(9)` | Listed Substance EC Number |
| `MolecularFormula` |  | |  |  | `CHAR(60)` | Molecular Formula |
| `ListedSubstanceCndn` |  | |  |  | `CHAR(21)` | Conditions for Listed Substances |
| `ListedSubstanceReference` |  | |  |  | `CHAR(12)` | Referenced Listed Substance |
| `ListedSubstanceIsGroup` |  | |  |  | `CHAR(1)` | Indicator for a Listed Substance Group |
