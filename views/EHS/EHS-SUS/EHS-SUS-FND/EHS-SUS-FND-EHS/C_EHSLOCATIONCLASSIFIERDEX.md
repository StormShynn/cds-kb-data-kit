---
name: C_EHSLOCATIONCLASSIFIERDEX
description: "This CDS view supports the extraction of basic data for an EHS location revision and the location classifiers assigned to it. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data and the classifiers assigned to it be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONCLASSIFIERDEX')/$value
semantic_en: "This CDS view supports the extraction of basic data for an EHS location revision and the location classifiers assigned to it. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data and the classifiers assigned to it be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - transaction
  - metadata-only
---
# C_EHSLOCATIONCLASSIFIERDEX

**This CDS view supports the extraction of basic data for an EHS location revision and the location classifiers assigned to it. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data and the classifiers assigned to it be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONCLASSIFIERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocClassifierUUID` |  | |  |  | `RAW(16)` | Location Classifier UUID |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocClassifierID` |  | |  |  | `CHAR(40)` | BCO ID |
| `EHSLocClassifierCentralID` |  | |  |  | `CHAR(32)` | BCO KEY |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `LocationMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
