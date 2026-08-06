---
name: C_MFGORDACTLPLNTGTLDGRCOST
description: This CDS view provides the data to answer the following business questions: How many costs are scheduled for the order (plan costs). How many costs are invested in the order (actual costs). Based on different target cost versions, how many costs are budgeted for the order (target costs). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDACTLPLNTGTLDGRCOST')/$value
semantic_en: This CDS view provides the data to answer the following business questions: How many costs are scheduled for the order (plan costs). How many costs are invested in the order (actual costs). Based on different target cost versions, how many costs are budgeted for the order (target costs). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CO
  - bo:companycode
  - budget
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-ORD
  - CO-PC-OBJ-ORD-2CL
  - component:CO-PC-OBJ-ORD-2CL
  - consumption-view
  - lob:controlling
  - order
  - plan
  - metadata-only
---
# C_MFGORDACTLPLNTGTLDGRCOST

**This CDS view provides the data to answer the following business questions: How many costs are scheduled for the order (plan costs). How many costs are invested in the order (actual costs). Based on different target cost versions, how many costs are budgeted for the order (target costs). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDACTLPLNTGTLDGRCOST')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `OrderID` | `CHAR(12)` | Order Number |
| `OrderItem` | `NUMC(4)` | Number of Order Item |
| `WorkCenterInternalID` | `NUMC(8)` | Object ID of the resource |
| `WorkCenter` | `CHAR(8)` | Work Center |
| `OrderOperation` | `CHAR(4)` | Operation or Phase Number |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `Plant` | `CHAR(4)` | Plant |
| `Product` | `CHAR(40)` | Product |
| `UnitOfMeasure` | `UNIT(3)` | Cost Source Unit |
| `CurPlanProjSlsOrdValnStrategy` | `CHAR(1)` | Val. Strat. for Current Plan Price, Sales Order/Proj. Stock |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ProducedProduct` | `CHAR(40)` | Product |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `OrderType` | `CHAR(4)` | Order Type |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `DisplayCurrency` | `CUKY(5)` | Currency Key |
| `CreditActlCostInDspCrcy` | `CURR(23)` | Actual Cost Credit |
| `DebitActlCostInDspCrcy` | `CURR(23)` | Actual Cost Debit |
| `CrdtActlFxdCostInDspCrcy` | `CURR(23)` | Actual Fixed Cost Credit |
| `DebitActlFxdCostInDspCrcy` | `CURR(23)` | Actual Fixed Cost Debit |
| `ActualQtyInCostSourceUnit` | `INT1(3)` |  |
| `CreditPlanCostInDspCrcy` | `CURR(23)` | Plan Cost Credit |
| `DebitPlanCostInDspCrcy` | `CURR(23)` | Plan Cost Debit |
| `CrdtPlnFxdCostInDspCrcy` | `CURR(23)` | Plan Fixed Cost Credit |
| `DebitPlnFxdCostInDspCrcy` | `CURR(23)` | Plan Fixed Cost Debit |
| `PlanQtyInCostSourceUnit` | `INT1(3)` |  |
| `CrdtTargetCostInDspCrcy` | `CURR(23)` | Target Cost Credit |
| `DebitTargetCostInDspCrcy` | `CURR(23)` | Target Cost Debit |
| `TargetQtyInCostSourceUnit` | `INT1(3)` |  |
