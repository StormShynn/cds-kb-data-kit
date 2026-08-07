---
name: _DCO_I_TECHNICALUSERVH
description: "This CDS view provides a value help for technical users in the system. It filters and displays only users that are marked as technical users, enabling efficient selection and identification of technical user accounts. This CDS view provides the data to answer the following business questions: Which technical users for collections and dispute automation are available in the system? What is the description of a specific technical user? How can I quickly find and select technical users for configuration or monitoring purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_TECHNICALUSERVH')/$value
semantic_en: "This CDS view provides a value help for technical users in the system. It filters and displays only users that are marked as technical users, enabling efficient selection and identification of technical user accounts. This CDS view provides the data to answer the following business questions: Which technical users for collections and dispute automation are available in the system? What is the description of a specific technical user? How can I quickly find and select technical users for configuration or monitoring purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_TECHNICALUSERVH

**This CDS view provides a value help for technical users in the system. It filters and displays only users that are marked as technical users, enabling efficient selection and identification of technical user accounts. This CDS view provides the data to answer the following business questions: Which technical users for collections and dispute automation are available in the system? What is the description of a specific technical user? How can I quickly find and select technical users for configuration or monitoring purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_TECHNICALUSERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `UserDescription` |  | |  |  | `CHAR(80)` | User Description |
