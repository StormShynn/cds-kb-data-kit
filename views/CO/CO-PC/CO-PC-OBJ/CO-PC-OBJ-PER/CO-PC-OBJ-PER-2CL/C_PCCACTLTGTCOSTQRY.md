---
name: C_PCCACTLTGTCOSTQRY
description: This CDS view retrieves actual and target cost details of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: What are the event-based product cost collectors for my specified periods? What are the products and plants for the product cost collectors? What are the following values for each product cost collector? Target cost (credit and debit) Actual cost (credit and debit) Actual input quantity and output quantity What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-PC-OBJ-PER-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCACTLTGTCOSTQRY')/$value
semantic_en: This CDS view retrieves actual and target cost details of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: What are the event-based product cost collectors for my specified periods? What are the products and plants for the product cost collectors? What are the following values for each product cost collector? Target cost (credit and debit) Actual cost (credit and debit) Actual input quantity and output quantity What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CO
  - account
  - bo:companycode
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-PER
  - CO-PC-OBJ-PER-2CL
  - component:CO-PC-OBJ-PER-2CL
  - consumption-view
  - lob:controlling
  - order
  - plan
  - product
  - metadata-only
---
# C_PCCACTLTGTCOSTQRY

**This CDS view retrieves actual and target cost details of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: What are the event-based product cost collectors for my specified periods? What are the products and plants for the product cost collectors? What are the following values for each product cost collector? Target cost (credit and debit) Actual cost (credit and debit) Actual input quantity and output quantity What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-PER-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCACTLTGTCOSTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ProducedProduct` |  | |  |  | `CHAR(40)` | Product |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CreditActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost Credit |
| `DebitActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost Debit |
| `CrdtActlFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost Credit |
| `DebitActlFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost Debit |
| `ActualQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Actual Quantity |
| `CrdtTargetCostInDspCrcy` |  | |  |  | `CURR(23)` | Target Cost Credit |
| `DebitTargetCostInDspCrcy` |  | |  |  | `CURR(23)` | Target Cost Debit |
| `TargetQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Target Quantity |
