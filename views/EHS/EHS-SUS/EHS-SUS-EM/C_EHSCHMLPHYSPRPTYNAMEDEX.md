---
name: C_EHSCHMLPHYSPRPTYNAMEDEX
description: This CDS view supports the extraction of chemical/physical property names in available languages for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution.. This CDS view provides the data to answer the following business questions: How can chemical/physical property names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCHMLPHYSPRPTYNAMEDEX')/$value
semantic_en: This CDS view supports the extraction of chemical/physical property names in available languages for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution.. This CDS view provides the data to answer the following business questions: How can chemical/physical property names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
  - metadata-only
---
# C_EHSCHMLPHYSPRPTYNAMEDEX

**This CDS view supports the extraction of chemical/physical property names in available languages for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution.. This CDS view provides the data to answer the following business questions: How can chemical/physical property names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCHMLPHYSPRPTYNAMEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSChmlPhysPrptyBusConfignVers` |  | |  |  | `CHAR(40)` | BCO ID |
| `EHSChmlPhysPrptyNameCentralID` |  | |  |  | `CHAR(32)` | BCO KEY |
| `EHSChemicalPhysicalPropUUID` |  | |  |  | `RAW(16)` | NodeID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `EHSPropertyName` |  | |  |  | `CHAR(60)` | Name |
