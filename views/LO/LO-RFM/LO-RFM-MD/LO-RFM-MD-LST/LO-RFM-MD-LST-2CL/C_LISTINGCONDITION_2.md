---
name: C_LISTINGCONDITION_2
description: This CDS view retrieves information about the time period in which a specific retail site is allowed to procure a specific product. This CDS view provides the data to answer the following business questions: Is my retail site allowed to order a specific product next month? In which time period is my retail site allowed to order this product? Can this product currently be ordered by this retail site? When was it possible for a specific retail site to order a specific product in the past? Is a specific product listed in a specific retail site through a promotion, an allocation table, or an assortment module? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTINGCONDITION_2')/$value
semantic_en: This CDS view retrieves information about the time period in which a specific retail site is allowed to procure a specific product. This CDS view provides the data to answer the following business questions: Is my retail site allowed to order a specific product next month? In which time period is my retail site allowed to order this product? Can this product currently be ordered by this retail site? When was it possible for a specific retail site to order a specific product in the past? Is a specific product listed in a specific retail site through a promotion, an allocation table, or an assortment module? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-LST-2CL
  - consumption-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-LST
  - LO-RFM-MD-LST-2CL
  - lob:logistics general
  - order
  - product
  - metadata-only
---
# C_LISTINGCONDITION_2

**This CDS view retrieves information about the time period in which a specific retail site is allowed to procure a specific product. This CDS view provides the data to answer the following business questions: Is my retail site allowed to order a specific product next month? In which time period is my retail site allowed to order this product? Can this product currently be ordered by this retail site? When was it possible for a specific retail site to order a specific product in the past? Is a specific product listed in a specific retail site through a promotion, an allocation table, or an assortment module? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTINGCONDITION_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` |  | |  |  | `CHAR(10)` | Customer Number of Site |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ListingConditionEndDate` |  | |  |  | `DATS(8)` | Valid To |
| `SequenceNumber` |  | |  |  | `NUMC(3)` | Sequence Number |
| `ListingConditionStartDate` |  | |  |  | `DATS(8)` | Valid From |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `ListingSource` |  | |  |  | `CHAR(1)` | Listing Source (Transaction / Function Environment) |
| `ProductOfSuprordLstgCondition` |  | |  |  | `CHAR(40)` | Structured Material |
