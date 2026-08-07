---
name: I_EHSLOCATIONNAME
description: "supports the extraction of data for the name of an EHS location revision. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. The CDS view is not structured as a text view due to technical constraints in the CDS delta. This CDS view provides the data to answer the following business questions: How can location revision names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONNAME')/$value
semantic_en: "supports the extraction of data for the name of an EHS location revision. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. The CDS view is not structured as a text view due to technical constraints in the CDS delta. This CDS view provides the data to answer the following business questions: How can location revision names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_EHSLOCATIONNAME

**supports the extraction of data for the name of an EHS location revision. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. The CDS view is not structured as a text view due to technical constraints in the CDS delta. This CDS view provides the data to answer the following business questions: How can location revision names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONNAME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationRevisionNameUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision Name UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Change By |
| `Language` |  | |  |  | `LANG(1)` | Language |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
