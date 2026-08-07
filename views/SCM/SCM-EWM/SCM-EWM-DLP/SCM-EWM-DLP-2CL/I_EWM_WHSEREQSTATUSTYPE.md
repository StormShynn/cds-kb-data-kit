---
name: I_EWM_WHSEREQSTATUSTYPE
description: This CDS view enables you to view a list of all available status types for warehouse requests. With the related text view, you can also see the status type descriptions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPE')/$value
semantic_en: This CDS view enables you to view a list of all available status types for warehouse requests. With the related text view, you can also see the status type descriptions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
  - metadata-only
---
# I_EWM_WHSEREQSTATUSTYPE

**This CDS view enables you to view a list of all available status types for warehouse requests. With the related text view, you can also see the status type descriptions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouseRequestStatusType` |  | |  |  | `CHAR(5)` | Status Type |
