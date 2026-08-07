---
name: I_CADUNNINGLETTERHEADER
description: This CDS view represents the header information of a dunning notice. This CDS view provides the data to answer the following business question: What correspondence header information is required during dunning letter printing? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. Example By using this CDS view together with BAdI FKK_CORR_DET_FORM_TEMPLATE, you can override the correspondence templates, either form templates or email templates, that are defined in the standard SAP configuration.
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGLETTERHEADER')/$value
semantic_en: This CDS view represents the header information of a dunning notice. This CDS view provides the data to answer the following business question: What correspondence header information is required during dunning letter printing? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. Example By using this CDS view together with BAdI FKK_CORR_DET_FORM_TEMPLATE, you can override the correspondence templates, either form templates or email templates, that are defined in the standard SAP configuration.
keywords:
  - Dunning Letter - Header Data
tags:
  - FI
  - bo:companycode
  - component:FI-CA-2CL
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CADUNNINGLETTERHEADER

**This CDS view represents the header information of a dunning notice. This CDS view provides the data to answer the following business question: What correspondence header information is required during dunning letter printing? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. Example By using this CDS view together with BAdI FKK_CORR_DET_FORM_TEMPLATE, you can override the correspondence templates, either form templates or email templates, that are defined in the standard SAP configuration.**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGLETTERHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Additional Identification Characteristic |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `CADunningCounter` |  | |  |  | `NUMC(6)` | Counter for Several Dunning Notices to a Business Partner |
| `ContractAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `CALeadingContractAccount` |  | |  |  | `CHAR(12)` | Leading Contract Account in Dunning |
| `CADunningChargeAmount` |  | |  |  | `CURR(15)` |  |
| `CADunningInterestAmount` |  | |  |  | `CURR(13)` | Dunning interest in transaction currency |
| `CADunningBalance` |  | |  |  | `CURR(13)` | Dunning Balance |
| `CAPaymentTargetDate` |  | |  |  | `DATS(8)` | Payment Target in Dunning Notice |
| `CorrespondenceIssueDate` |  | |  |  | `DATS(8)` | Issue Date |
| `Currency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Correspondence |
| `CACorrespondenceType` |  | |  |  | `CHAR(4)` | Correspondence Type |
| `CACorrespondence` |  | |  |  | `CHAR(36)` | Correspondence Key |
| `OriglCorrespondenceRecipient` |  | |  |  | `CHAR(10)` | Original Correspondence Recipient |
| `CAAlternativeDunningRecipient` |  | |  |  | `CHAR(10)` | Correspondence Recipient |
| `CADunningProcedure` |  | |  |  | `CHAR(2)` | Dunning Procedure |
| `CADunningLevel` |  | |  |  | `NUMC(2)` | Dunning Level |
| `CACollectionStrategy` |  | |  |  | `CHAR(2)` | Collection Strategy |
| `CACollectionStep` |  | |  |  | `CHAR(4)` | Collection Step |
| `CADunningProcedureName` |  | |  |  | `CHAR(50)` | Description of Dunning Procedure |
| `CADunningLevelName` |  | |  |  | `CHAR(50)` | Name of Dunning Level |
| `CACollectionStrategyName` |  | |  |  | `CHAR(50)` | Name of Collection Strategy |
| `CACollectionStepName` |  | |  |  | `CHAR(50)` | Name of Collection Step |
| `CAPaymentFormNumber` |  | |  |  | `CHAR(12)` | Payment Form Number |
| `CAPaymentFormExternalNumber` |  | |  |  | `CHAR(30)` | External key payment form |
