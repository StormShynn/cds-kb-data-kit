---
name: _DCO_I_COMPANYCODEMAPPING
description: This CDS view provides the mapping between original company codes in Financial Accounting from different logical systems and their corresponding company codes in collections and dispute automation. It enables the identification and association of company codes used in Financial Accounting with the company codes used specifically for collections and dispute automation. This CDS view provides the data to answer the following business questions: Which company code in collections and dispute automation is assigned to a specific FI company code? What are the company code mappings for a particular logical system? How are company codes in Financial Accounting from different systems mapped to company codes in collections and dispute automation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_COMPANYCODEMAPPING')/$value
semantic_en: This CDS view provides the mapping between original company codes in Financial Accounting from different logical systems and their corresponding company codes in collections and dispute automation. It enables the identification and association of company codes used in Financial Accounting with the company codes used specifically for collections and dispute automation. This CDS view provides the data to answer the following business questions: Which company code in collections and dispute automation is assigned to a specific FI company code? What are the company code mappings for a particular logical system? How are company codes in Financial Accounting from different systems mapped to company codes in collections and dispute automation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_COMPANYCODEMAPPING

**This CDS view provides the mapping between original company codes in Financial Accounting from different logical systems and their corresponding company codes in collections and dispute automation. It enables the identification and association of company codes used in Financial Accounting with the company codes used specifically for collections and dispute automation. This CDS view provides the data to answer the following business questions: Which company code in collections and dispute automation is assigned to a specific FI company code? What are the company code mappings for a particular logical system? How are company codes in Financial Accounting from different systems mapped to company codes in collections and dispute automation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_COMPANYCODEMAPPING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code (FI System) |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
