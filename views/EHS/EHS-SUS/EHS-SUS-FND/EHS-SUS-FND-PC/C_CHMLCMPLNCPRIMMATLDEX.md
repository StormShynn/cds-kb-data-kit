---
name: C_CHMLCMPLNCPRIMMATLDEX
description: This CDS view supports the extraction of chemical compliance information, including primary material information for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can material data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCPRIMMATLDEX')/$value
semantic_en: This CDS view supports the extraction of chemical compliance information, including primary material information for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can material data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-PC
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-PC
  - material
  - transaction
  - metadata-only
---
# C_CHMLCMPLNCPRIMMATLDEX

**This CDS view supports the extraction of chemical compliance information, including primary material information for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can material data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCPRIMMATLDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChmlCmplncInfoUUID` |  | |  |  | `RAW(16)` | Chemical Compliance Information |
| `ProdStewardshipRespUnit` |  | |  |  | `CHAR(10)` | Responsible Unit |
| `DngrsGdsRespUnit` |  | |  |  | `CHAR(10)` | Responsible Unit for Dangerous Goods |
| `ChmlCmplncInfoType` |  | |  |  | `CHAR(2)` | CCI Type |
| `ChmlCmplncInternalName` |  | |  |  | `CHAR(132)` | Internal Name |
| `MaterialIsBaseProduct` |  | |  |  | `CHAR(1)` | Material is Base Product (obsolete) |
| `MaterialIsSold` |  | |  |  | `CHAR(1)` | Product is Sold |
| `MaterialIsTransported` |  | |  |  | `CHAR(1)` | Product is Transported |
| `MaterialIsSourced` |  | |  |  | `CHAR(1)` | Product is Sourced |
| `MaterialIsProduced` |  | |  |  | `CHAR(1)` | Product is Produced |
| `MaterialIsDisposed` |  | |  |  | `CHAR(1)` | Product is Disposed |
| `MaterialIsEmissionRelevant` |  | |  |  | `CHAR(1)` | Product is Emission Relevant |
| `Specification` |  | |  |  | `CHAR(12)` | Internal Number |
| `SpecificationInternalID` |  | |  |  | `NUMC(20)` | Sequential Number of Data Record |
| `ChmlCmplncProdIsResearched` |  | |  |  | `CHAR(1)` | Research and Development Sample |
| `ChmlCmplncMatlAssgmtUUID` |  | |  |  | `RAW(16)` | Product Assignment |
| `Material` |  | |  |  | `CHAR(40)` | Product |
