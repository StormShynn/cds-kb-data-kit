---
name: I_CADUNNINGITEM
description: Contract Accounting Dunning Item
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGITEM')/$value
semantic_en: Contract Accounting Dunning Item
keywords:
  - Contract Accounting Dunning Item
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - contract
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CADUNNINGITEM

**Contract Accounting Dunning Item**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Additional Identification Characteristic |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `CADunningCounter` |  | |  |  | `NUMC(6)` | Counter for Several Dunning Notices to a Business Partner |
| `CADocumentNumber` |  | |  |  | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` |  | |  |  | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` |  | |  |  | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` |  | |  |  | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `CASubApplication` |  | |  |  | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CADunningAmount` |  | |  |  | `CURR(13)` | Dunned Amount in Transaction Currency |
| `CADunningInterestAmount` |  | |  |  | `CURR(13)` | Dunning interest in transaction currency |
| `CADocumentForDunningInterest` |  | |  |  | `CHAR(12)` | Doc no. of interest posting |
| `CANetDueDate` |  | |  |  | `DATS(8)` | Due date for net payment |
| `CADunningActivityRunDate` |  | |  |  | `DATS(8)` | Execution Date of Dunning Notice |
| `CAIssueDate` |  | |  |  | `DATS(8)` | Date of Issue |
| `CADunningLevel` |  | |  |  | `NUMC(2)` | Dunning Level |
| `CADunningLevelCategory` |  | |  |  | `CHAR(2)` | Dunning Level Category |
| `CANextDunningLevel` |  | |  |  | `NUMC(2)` | New dunning level |
| `CADunningLevelIsOptional` |  | |  |  | `CHAR(1)` | Dunning Level is Optional |
| `CADunningLevelIsOnlyForIntRsn` |  | |  |  | `CHAR(1)` | Entry in Dunning History only Technically Conditional |
| `CADunningNoticeIsReversed` |  | |  |  | `CHAR(1)` | Dunning Notice Reversed |
| `CADunningNoticeIsInfoOnly` |  | |  |  | `CHAR(1)` | Group Not Due For Dunning/Information Only |
| `CAStatisticalItemCode` |  | |  |  | `CHAR(1)` | Type of Statistical Line Item |
| `ContractAccountIsNotUnique` |  | |  |  | `CHAR(1)` | Contract Account Not Unique |
| `CADunningProcedure` |  | |  |  | `CHAR(2)` | Dunning Procedure |
| `CAItemHasHigherDunningLevel` |  | |  |  | `CHAR(1)` | Item has higher dunning level than dunning notice |
| `CAItemIsCreatedByDunActyRun` |  | |  |  | `CHAR(1)` | Dunning Item Created by Dunning Activity Run |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CADunningAmountInLocalCurrency` |  | |  |  | `DEC(13)` | Not used (formerly dunned amount in local currency) |
| `CAReferenceDocument` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `CAClassificationKey` |  | |  |  | `CHAR(35)` | Classification Key |
