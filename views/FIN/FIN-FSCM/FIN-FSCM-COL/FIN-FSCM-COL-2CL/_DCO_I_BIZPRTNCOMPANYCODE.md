---
name: _DCO_I_BIZPRTNCOMPANYCODE
description: This CDS view provides access to company code assignments for business partners in the context of collections and dispute automation. It enables the retrieval of company code-specific settings and configurations for business partners who take part in the collection process, including dunning procedures, accountant group assignments, and communication preferences. This CDS view provides the data to answer the following business questions: Which company codes in collections and dispute automation are assigned to a specific business partner? What are the dunning settings and procedures configured for a business partner in a specific company code? Which AR accountant group is responsible for a business partner in a given company code? What is the dunning block period for a business partner in a specific company code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BIZPRTNCOMPANYCODE')/$value
semantic_en: This CDS view provides access to company code assignments for business partners in the context of collections and dispute automation. It enables the retrieval of company code-specific settings and configurations for business partners who take part in the collection process, including dunning procedures, accountant group assignments, and communication preferences. This CDS view provides the data to answer the following business questions: Which company codes in collections and dispute automation are assigned to a specific business partner? What are the dunning settings and procedures configured for a business partner in a specific company code? Which AR accountant group is responsible for a business partner in a given company code? What is the dunning block period for a business partner in a specific company code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Company Codes for Business Partners (Collections and Dispute Automation)
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
# _DCO_I_BIZPRTNCOMPANYCODE

**This CDS view provides access to company code assignments for business partners in the context of collections and dispute automation. It enables the retrieval of company code-specific settings and configurations for business partners who take part in the collection process, including dunning procedures, accountant group assignments, and communication preferences. This CDS view provides the data to answer the following business questions: Which company codes in collections and dispute automation are assigned to a specific business partner? What are the dunning settings and procedures configured for a business partner in a specific company code? Which AR accountant group is responsible for a business partner in a given company code? What is the dunning block period for a business partner in a specific company code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BIZPRTNCOMPANYCODE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DCoBusinessPartnerUUID` | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoBizPrtnCoCodeAssignmentUUID` | `RAW(16)` | Business Partner Company Code Assignment UUID |
| `DebtCollectionsCompanyCode` | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DebtCollectionsProcedure` | `CHAR(10)` | Collection Procedure |
| `DCoARAccountantGroup` | `CHAR(40)` | AR Accountant Group |
| `DCoLglDunProceedingsStartDate` | `DATS(8)` | Start Date of Legal Dunning Procedure |
| `DCoDunningBlockStartDate` | `DATS(8)` | Start Date from Which an Item Is Blocked for Dunning |
| `DCoDunningBlockEndDate` | `DATS(8)` | End Date Until Which an Item Is Blocked for Dunning |
| `DCoDunningCommunicationChannel` | `CHAR(1)` | Communication Channel |
| `DCoBizPrtnCoCodeCreatedByUser` | `CHAR(12)` | Created By |
| `DCoBPCoCodeCreationDateTime` | `DEC(15)` | Created On/At |
| `DCoBPCoCodeLastChangedByUser` | `CHAR(12)` | Last Changed By |
| `DCoBPCoCodeLastChangeDateTime` | `DEC(15)` | Last Changed On/At |
