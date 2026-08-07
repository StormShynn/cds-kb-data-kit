---
name: C_BOOMATLASSGMTCHGSTDEX
description: This CDS view helps you to retrieve operation data (table PLPO) for bill of operations. This CDS view provides the data to answer the following business questions: Which operations exist for the bill of operations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BOOMATLASSGMTCHGSTDEX')/$value
semantic_en: This CDS view helps you to retrieve operation data (table PLPO) for bill of operations. This CDS view provides the data to answer the following business questions: Which operations exist for the bill of operations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - consumption-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# C_BOOMATLASSGMTCHGSTDEX

**This CDS view helps you to retrieve operation data (table PLPO) for bill of operations. This CDS view provides the data to answer the following business questions: Which operations exist for the bill of operations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BOOMATLASSGMTCHGSTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `BillOfOperationsType` |  | |  |  | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `BillOfOperationsVariant` |  | |  |  | `CHAR(2)` | Group Counter |
| `BOOToMaterialInternalID` |  | |  |  | `NUMC(7)` | Counter for Additional Criteria |
| `BOOMatlInternalVersionCounter` |  | |  |  | `NUMC(8)` | Internal counter |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `Customer` |  | |  |  | `CHAR(10)` | Account number of customer |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `BOOSearchText` |  | |  |  | `CHAR(20)` | Search Field for Customer-Specific Task List Selection |
| `MultipleSpecificationObject` |  | |  |  | `CHAR(30)` | Object for Multiple Specifications |
| `MultipleSpecificationObjType` |  | |  |  | `CHAR(2)` | Type of Object for Multiple Specifications |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
