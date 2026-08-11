---
name: I_TREASURYACCOUNTINGPOSITION
description: "This CDS view provides the existing treasury accounting positions which carry accounting information such as the account assignment reference, the functional area, and the cost center for treasury positions. This CDS view provides the data to answer the following business questions: Which account assignment reference is assigned to a treasury position? Which functional area is assigned to a treasury position? Which cost center is assigned to a treasury position? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYACCOUNTINGPOSITION')/$value
semantic_en: "This CDS view provides the existing treasury accounting positions which carry accounting information such as the account assignment reference, the functional area, and the cost center for treasury positions. This CDS view provides the data to answer the following business questions: Which account assignment reference is assigned to a treasury position? Which functional area is assigned to a treasury position? Which cost center is assigned to a treasury position? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_TREASURYACCOUNTINGPOSITION

**This CDS view provides the existing treasury accounting positions which carry accounting information such as the account assignment reference, the functional area, and the cost center for treasury positions. This CDS view provides the data to answer the following business questions: Which account assignment reference is assigned to a treasury position? Which functional area is assigned to a treasury position? Which cost center is assigned to a treasury position? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYACCOUNTINGPOSITION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryPosition` |  | |  |  | `CHAR(32)` | Object Identity in Database Format |
| `TrsyPositionIdentificationUUID` |  | |  |  | `CHAR(32)` | Object Identity in Database Format |
| `TreasuryGLAccountAssignmentRef` |  | |  |  | `CHAR(12)` | Account Assignment Reference of Position Management |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
