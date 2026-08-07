---
name: I_ENGMNTPROJSERVICEORGDETAILS
description: This CDS view retrieves the master data of a service organization. This CDS view provides the data to answer the following business questions: Which controlling area and company code does a service organization belong to? What is the default cost center assigned to a service organization? What is the sales area assigned to a service organization? Which purchasing organization and plant are assigned to a service organization? Is the service organization responsible for project sales, or service delivery, or both? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSERVICEORGDETAILS')/$value
semantic_en: This CDS view retrieves the master data of a service organization. This CDS view provides the data to answer the following business questions: Which controlling area and company code does a service organization belong to? What is the default cost center assigned to a service organization? What is the sales area assigned to a service organization? Which purchasing organization and plant are assigned to a service organization? Is the service organization responsible for project sales, or service delivery, or both? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - delivery
  - interface-view
  - lob:cross_application components
  - master-data
  - plan
  - project
  - metadata-only
---
# I_ENGMNTPROJSERVICEORGDETAILS

**This CDS view retrieves the master data of a service organization. This CDS view provides the data to answer the following business questions: Which controlling area and company code does a service organization belong to? What is the default cost center assigned to a service organization? What is the sales area assigned to a service organization? Which purchasing organization and plant are assigned to a service organization? Is the service organization responsible for project sales, or service delivery, or both? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSERVICEORGDETAILS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngmtProjServiceOrgIsSales` |  | |  |  | `CHAR(1)` | Sales Org |
| `EngmtProjServiceOrgIsDelivery` |  | |  |  | `CHAR(1)` | Delivery Organization |
| `RestrictedTimePosting` |  | |  |  | `CHAR(1)` | Restrict Unstaffed Posting |
| `EngmntProjectCompanyCode` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectCtrlgArea` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectSalesOrg` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectDistrChnl` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectDivision` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectPurchasingOrg` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectPlant` |  | |  |  | `CHAR(20)` |  |
| `ServiceOrgDefaultCostCenter` |  | |  |  | `CHAR(20)` |  |
