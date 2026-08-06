---
name: C_CNDNCONTRBUSVOLSELCRITERIADP
description: Business Volume Selection Criteria
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRBUSVOLSELCRITERIADP')/$value
semantic_en: Business Volume Selection Criteria
tags:
  - LO
  - component:LO-GT-CHB
  - consumption-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# C_CNDNCONTRBUSVOLSELCRITERIADP

**Business Volume Selection Criteria**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRBUSVOLSELCRITERIADP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConditionContract` | `CHAR(10)` | Condition Contract |
| `CndnContrBusVolUUID` | `RAW(16)` | Business Volume Selection UUID |
| `BusVolFieldCombnType` | `CHAR(4)` | Field Combination for Business Volume Selection |
| `BusVolFldCombnGroup` | `CHAR(2)` | Field Combination Group for Business Volume Selection in BVB |
| `CndnContrBusVolSign` | `CHAR(1)` | Status Including / Excluding |
| `BusVolSelectionGroup` | `CHAR(4)` | Selection Group |
| `CndnContrSupplier` | `CHAR(10)` | Supplier for Business Volume Selection |
| `CndnContrCustomer` | `CHAR(10)` | Customer for Business Volume Selection |
| `CndnContrBusVolValidFrom` | `DATS(8)` | Valid from |
| `CndnContrBusVolValidTo` | `DATS(8)` | Valid to |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `Plant` | `CHAR(4)` | Plant |
| `SupplierSubrange` | `CHAR(6)` | Supplier Subrange |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `Product` | `CHAR(40)` | Product |
| `ProductType` | `CHAR(4)` | Product Type |
| `ProdUnivHierarchyNode` | `CHAR(24)` | Product Hierarchy Node |
| `SalesOrderReason` | `CHAR(3)` | Sales Document Reason |
| `Manufacturer` | `CHAR(10)` | Number of a Manufacturer |
| `RoyaltyRecipient` | `CHAR(10)` | Royalties Recipient |
| `CommissionRecipient` | `CHAR(10)` | Commission Recipient |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `PayerParty` | `CHAR(10)` | Payer |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ProductCommissionGroup` | `CHAR(2)` | Commission Group |
| `PricingReferenceProduct` | `CHAR(40)` | Pricing Reference Material |
| `SoldProduct` | `CHAR(40)` | Sales Billing: Product Sold |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `ProductPricingGroup` | `CHAR(2)` | Product Price Group |
| `SalesVolumeRebateGroup` | `CHAR(2)` | Sales Volume Rebate Group |
| `BizVolSelCndnContrProcVar` | `CHAR(4)` | Cndn Contr Process Variant of Business Volume Selection |
| `BizVolSelConditionContract` | `CHAR(10)` | Condition Contract of Business Volume Selection |
| `WBSElementInternalID` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `CndnContrSuplrInvcDlvCostCat` | `CHAR(1)` | Item Category of Supplier Invoice |
| `CndnContrSemanticCode` | `NUMC(4)` | Semantic Type |
| `CndnContrSourceBusVolUUID` | `RAW(16)` | Source Business Volume Selection UUID |
| `CustomerHierarchyRootNode` | `CHAR(20)` | Customer Hierarchy Root Node ID (Hier ID) |
| `CustomerHierarchyNodeID` | `CHAR(40)` | Customer Hierarchy Node ID |
| `CustomerHierarchyNodeType` | `CHAR(30)` | Customer Hierarchy Node Type |
