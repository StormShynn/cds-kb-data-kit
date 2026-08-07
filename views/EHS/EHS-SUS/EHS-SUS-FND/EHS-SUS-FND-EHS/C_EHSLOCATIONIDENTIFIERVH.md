---
name: C_EHSLOCATIONIDENTIFIERVH
description: This CDS view provides value help for EHS Location IDs. You can use this view to search for and select valid EHS location identifiers when entering or filtering data in applications that require location information. The view delivers a searchable and user-friendly list of active EHS locations with their current attributes. It filters by the current system date to show only valid location revisions. The view supports authorization checks and provides text descriptions for location types and statuses in the user's language. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONIDENTIFIERVH')/$value
semantic_en: This CDS view provides value help for EHS Location IDs. You can use this view to search for and select valid EHS location identifiers when entering or filtering data in applications that require location information. The view delivers a searchable and user-friendly list of active EHS locations with their current attributes. It filters by the current system date to show only valid location revisions. The view supports authorization checks and provides text descriptions for location types and statuses in the user's language. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - metadata-only
---
# C_EHSLOCATIONIDENTIFIERVH

**This CDS view provides value help for EHS Location IDs. You can use this view to search for and select valid EHS location identifiers when entering or filtering data in applications that require location information. The view delivers a searchable and user-friendly list of active EHS locations with their current attributes. It filters by the current system date to show only valid location revisions. The view supports authorization checks and provides text descriptions for location types and statuses in the user's language. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONIDENTIFIERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | id |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` |  | |  |  | `CHAR(40)` | Location Type Name |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `EHSLocationStatusText` |  | |  |  | `CHAR(60)` | Location Status Name |
