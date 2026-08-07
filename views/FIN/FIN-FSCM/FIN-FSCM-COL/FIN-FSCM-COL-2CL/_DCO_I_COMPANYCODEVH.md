---
name: _DCO_I_COMPANYCODEVH
description: "This CDS view provides value help for company codes in collections and dispute automation. It enables users to search and select company codes with their corresponding descriptions, and mappings to original company codes in Financial Accounting across logical systems. This CDS view provides the data to answer the following business questions: Which company codes are available for collection processing? What is the mapping between company codes in collections and dispute automation and company codes in Financial Accounting? Which company codes exist across different logical systems? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_COMPANYCODEVH')/$value
semantic_en: "This CDS view provides value help for company codes in collections and dispute automation. It enables users to search and select company codes with their corresponding descriptions, and mappings to original company codes in Financial Accounting across logical systems. This CDS view provides the data to answer the following business questions: Which company codes are available for collection processing? What is the mapping between company codes in collections and dispute automation and company codes in Financial Accounting? Which company codes exist across different logical systems? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# _DCO_I_COMPANYCODEVH

**This CDS view provides value help for company codes in collections and dispute automation. It enables users to search and select company codes with their corresponding descriptions, and mappings to original company codes in Financial Accounting across logical systems. This CDS view provides the data to answer the following business questions: Which company codes are available for collection processing? What is the mapping between company codes in collections and dispute automation and company codes in Financial Accounting? Which company codes exist across different logical systems? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_COMPANYCODEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code (FI System) |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `DCoCompanyCodeName` |  | |  |  | `CHAR(50)` | Company Code in Collections and Dispute Automation (Name) |
| `CompanyCodeDescription` |  | |  |  | `CHAR(50)` | Company Code in FI System (Name) |
