---
name: C_BALANCECONFIRMATIONEMAILTMPL
description: This CDS view helps in the context of output management to retrieve e-mail template relevant information for sending balance confirmation letters and checklist as attachment. The fields included in the view can be used as placeholders, to make an email text more specific. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AR-AR-G-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCECONFIRMATIONEMAILTMPL')/$value
semantic_en: This CDS view helps in the context of output management to retrieve e-mail template relevant information for sending balance confirmation letters and checklist as attachment. The fields included in the view can be used as placeholders, to make an email text more specific. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-AR-AR-G-2CL
  - consumption-view
  - FI-AR
  - FI-AR-AR
  - FI-AR-AR-G
  - FI-AR-AR-G-2CL
  - lob:finance
  - metadata-only
---
# C_BALANCECONFIRMATIONEMAILTMPL

**This CDS view helps in the context of output management to retrieve e-mail template relevant information for sending balance confirmation letters and checklist as attachment. The fields included in the view can be used as placeholders, to make an email text more specific. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCECONFIRMATIONEMAILTMPL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `OutputRequestItemUUID` | `RAW(16)` | NodeID |
| `Account` | `CHAR(10)` | Recipient ID |
| `CompanyCode` | `CHAR(40)` | Output Management: Organization ID |
| `FinancialAccountType` | `CHAR(1)` | Financial Account Type |
| `BalanceConfirmationID` | `CHAR(255)` | Application Object ID |
| `Name` | `CHAR(80)` | Name of Customer |
| `FullName` | `CHAR(220)` | Customer Full Name |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `ReferenceAccountGroup` | `CHAR(4)` | Customer Account Group |
| `KeyDate` | `DATS(8)` | Balance Reconciliation Key Date |
| `IssueDate` | `DATS(8)` | Issue Date of the Balance Confirmations |
| `ReplyUntilDate` | `DATS(8)` | Latest Date up Until Which a Reply Should Take Place |
