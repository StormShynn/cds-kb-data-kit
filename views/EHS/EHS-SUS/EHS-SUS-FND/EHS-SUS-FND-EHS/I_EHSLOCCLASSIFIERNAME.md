---
name: I_EHSLOCCLASSIFIERNAME
description: This CDS view supports the extraction of data for the name of an EHS location classifier for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location classifier data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCCLASSIFIERNAME')/$value
semantic_en: This CDS view supports the extraction of data for the name of an EHS location classifier for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location classifier data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - transaction
  - metadata-only
---
# I_EHSLOCCLASSIFIERNAME

**This CDS view supports the extraction of data for the name of an EHS location classifier for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location classifier data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCCLASSIFIERNAME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocClassifierID` |  | |  |  | `CHAR(40)` | Location Classifier Identifier |
| `EHSLocClassifierCentralID` |  | |  |  | `CHAR(32)` | Location Classifier Character Key |
| `EHSLocClassifierNameUUID` |  | |  |  | `RAW(16)` | Location Classifier Text Key |
| `EHSLocClassifierUUID` |  | |  |  | `RAW(16)` | Location Classifier Key |
| `EHSLocClassifierText` |  | |  |  | `CHAR(255)` | Location Classifier Name |
| `Language` |  | |  |  | `LANG(1)` | Language |
