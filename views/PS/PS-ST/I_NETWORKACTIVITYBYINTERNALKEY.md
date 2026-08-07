---
name: I_NETWORKACTIVITYBYINTERNALKEY
description: Network Activity Information By Internal Key
app_component: PS-ST
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKACTIVITYBYINTERNALKEY')/$value
semantic_en: Network Activity Information By Internal Key
keywords:
  - Network Activity Information By Internal Key
tags:
  - PS
  - bo:project
  - component:PS-ST
  - interface-view
  - PS-ST
  - metadata-only
---
# I_NETWORKACTIVITYBYINTERNALKEY

**Network Activity Information By Internal Key**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NETWORKACTIVITYBYINTERNALKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectNetworkInternalID` |  | |  |  | `NUMC(10)` | Routing Number of Operations in the Order |
| `NetworkActivityInternalID` |  | |  |  | `NUMC(8)` | General counter for order |
| `NetworkActivity` |  | |  |  | `CHAR(4)` | Activity number in network and standard network |
| `NetworkActivityDescription` |  | |  |  | `CHAR(40)` | Operation short text |
| `SuperiorNtwkActivityInternalID` |  | |  |  | `NUMC(8)` | Node Number of the Superior Operation |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `NetworkActivityObject` |  | |  |  | `CHAR(22)` | Object Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `NetworkActivityControlProfile` |  | |  |  | `CHAR(4)` | Control Key |
| `OperationImportance` |  | |  |  | `CHAR(1)` | Priority |
| `ExternalProcessingPrice` |  | |  |  | `CURR(11)` | Price |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `NetworkActivityCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `NetworkActivityPriority` |  | |  |  | `CHAR(2)` | Priority |
| `NetworkActivityObjectCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Appointments: Calendar |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional location |
| `MaintOrdProcessPhaseCode` |  | |  |  | `CHAR(2)` | Process Phase |
| `MaintOrdProcessSubPhaseCode` |  | |  |  | `CHAR(4)` | Process Subphase |
| `ActyIsTakenAcctForProjSmmry` |  | |  |  | `CHAR(1)` | Ind.: Respect Activity for Project Summarization |
| `CapacityRequirementDistrKey` |  | |  |  | `CHAR(8)` | Distr.cap.reqmts (plant maint.,process order, network) |
| `NumberOfCapacities` |  | |  |  | `INT1(3)` | Number of capacities required |
| `OperationWorkPercent` |  | |  |  | `INT1(3)` | Work percentage |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `StandardTextInternalID` |  | |  |  | `CHAR(7)` | Standard text key |
| `ExtProcgOperationHasSubcontrg` |  | |  |  | `CHAR(1)` | Indicator: External Processing Operation with Subcontracting |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group for External Processing Activity |
| `NetworkActivityPriceBaseQty` |  | |  |  | `DEC(5)` | Price Unit |
| `NetworkActivityQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of measure for activity |
| `PurgInfoRecdDataIsFixed` |  | |  |  | `CHAR(1)` | Data of Purchasing Info Record Is Fixed |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `PurchaseRequisitionItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Requisition in Order |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `PurchasingInfoRecdAddlGrpgName` |  | |  |  | `CHAR(10)` | Sort Term for Non-Stock Info Records |
| `RequisitionerUser` |  | |  |  | `CHAR(12)` | Name of requisitioner/requester |
| `GoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `OperationTrackingNumber` |  | |  |  | `CHAR(10)` | Requirement Tracking Number |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `TaxJurisdictionCalcProcedure` |  | |  |  | `CHAR(6)` | Costing Sheet |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OverheadCode` |  | |  |  | `CHAR(6)` | Overhead key |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Object Class |
| `ProgressAnlysAggregationWeight` |  | |  |  | `DEC(8)` | Aggregation weight for POC (PS progress) |
| `NetworkActivityCost` |  | |  |  | `CURR(11)` | Costs in the activity |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Requesting Cost Center |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `NtwkAccountAssignmentCode` |  | |  |  | `CHAR(1)` | Indicator for the account assignment of a network(hdr/act.) |
| `ProjNtwkIsRlvtForMatlPlng` |  | |  |  | `CHAR(1)` | Effective for Materials Planning |
| `MatPlanningPrimaryCost` |  | |  |  | `CURR(11)` | Material planning in networks: primary costs |
| `ReferencePoint` |  | |  |  | `CHAR(20)` | Reference point for BOM transfer |
| `ReferenceElement` |  | |  |  | `CHAR(40)` | Reference Element PM/PS |
| `OperationCalculationControl` |  | |  |  | `CHAR(1)` | Key for calculation |
| `UsageCode` |  | |  |  | `CHAR(5)` | Usage |
| `StandardDurationIsFlexible` |  | |  |  | `CHAR(1)` | Indicator: flexible duration |
| `LeadTimeReductionStrategy` |  | |  |  | `CHAR(2)` | Reduction Strategy per Operation |
| `OpPurchaseOutlineAgreement` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `OpPurchaseOutlineAgreementItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `StatusCombinationCode` |  | |  |  | `INT1(3)` | Status Combination |
