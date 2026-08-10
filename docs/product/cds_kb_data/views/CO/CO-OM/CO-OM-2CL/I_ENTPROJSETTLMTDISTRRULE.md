---
name: I_ENTPROJSETTLMTDISTRRULE
description: "This CDS view provides a comprehensive interface for Enterprise Project Settlement Distribution Rules by combining project element data with controlling object settlement distribution rules. It exposes settlement rule configurations that determine how costs accumulated on project WBS elements are distributed to various receivers (such as cost centers, orders, assets, or G/L accounts) during the settlement process. The view includes validity periods, distribution amounts or percentages, and receiver account assignments, while also incorporating sender project attributes for authorization control. This CDS view provides the data to answer the following business questions: How are costs from a specific project WBS element distributed across different receivers during settlement, including the distribution percentages, amounts, and target account assignments? What are the valid fiscal periods for each settlement distribution rule, and which rules are currently active or will become active in future periods? Which settlement receivers (cost centers, orders, assets, G/L accounts) are configured for a project element, and what are their respective settlement types and distribution methods? Which settlement distribution rules apply to specific ledgers or ledger groups, and how do the rules vary across different accounting ledgers within the same project? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTDISTRRULE')/$value
semantic_en: "This CDS view provides a comprehensive interface for Enterprise Project Settlement Distribution Rules by combining project element data with controlling object settlement distribution rules. It exposes settlement rule configurations that determine how costs accumulated on project WBS elements are distributed to various receivers (such as cost centers, orders, assets, or G/L accounts) during the settlement process. The view includes validity periods, distribution amounts or percentages, and receiver account assignments, while also incorporating sender project attributes for authorization control. This CDS view provides the data to answer the following business questions: How are costs from a specific project WBS element distributed across different receivers during settlement, including the distribution percentages, amounts, and target account assignments? What are the valid fiscal periods for each settlement distribution rule, and which rules are currently active or will become active in future periods? Which settlement receivers (cost centers, orders, assets, G/L accounts) are configured for a project element, and what are their respective settlement types and distribution methods? Which settlement distribution rules apply to specific ledgers or ledger groups, and how do the rules vary across different accounting ledgers within the same project? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - account
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
  - order
  - project
  - metadata-only
---
# I_ENTPROJSETTLMTDISTRRULE

**This CDS view provides a comprehensive interface for Enterprise Project Settlement Distribution Rules by combining project element data with controlling object settlement distribution rules. It exposes settlement rule configurations that determine how costs accumulated on project WBS elements are distributed to various receivers (such as cost centers, orders, assets, or G/L accounts) during the settlement process. The view includes validity periods, distribution amounts or percentages, and receiver account assignments, while also incorporating sender project attributes for authorization control. This CDS view provides the data to answer the following business questions: How are costs from a specific project WBS element distributed across different receivers during settlement, including the distribution percentages, amounts, and target account assignments? What are the valid fiscal periods for each settlement distribution rule, and which rules are currently active or will become active in future periods? Which settlement receivers (cost centers, orders, assets, G/L accounts) are configured for a project element, and what are their respective settlement types and distribution methods? Which settlement distribution rules apply to specific ledgers or ledger groups, and how do the rules vary across different accounting ledgers within the same project? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTDISTRRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Ledger Group |
| `SettlmtDistrRuleSequence` |  | |  |  | `NUMC(7)` | Sequence Number of Distribution Rule |
| `SettlementDistributionRuleGrp` |  | |  |  | `NUMC(10)` | Distribution Rule Group |
| `ControllingObject` |  | |  |  | `CHAR(22)` | Object Number |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `SettlementType` |  | |  |  | `CHAR(3)` | Settlement Type |
| `ValidityStartFiscalYear` |  | |  |  | `NUMC(4)` | Valid-from Year |
| `ValidityStartFiscalPeriod` |  | |  |  | `NUMC(3)` | Valid-from Period |
| `ValidityEndFiscalYear` |  | |  |  | `NUMC(4)` | Valid-to Year |
| `ValidityEndFiscalPeriod` |  | |  |  | `NUMC(3)` | Valid To |
| `SettlementPercentageRate` |  | |  |  | `DEC(5)` | Settlement Percentage Rate |
| `SettlementEquivalenceFactor` |  | |  |  | `DEC(10)` | Equivalence Number for Order Settlement |
| `SettlementAmount` |  | |  |  | `CURR(23)` | Amount for Amount Rule |
| `SettlementTransaction` |  | |  |  | `CHAR(4)` | Settlement Transaction |
| `SettlementAmountCurrency` |  | |  |  | `CUKY(5)` | Currency for the Amount in the Amount Rule |
| `SettlementDistrAmountRuleType` |  | |  |  | `CHAR(2)` | Amount Rule Type |
| `SettlmtDistrManipulationRule` |  | |  |  | `CHAR(4)` | Manipulation Rule |
| `SettlmtDistrRuleSrceAssignment` |  | |  |  | `CHAR(3)` | Source Assignment |
| `SettlmtDistributionRuleNumber` |  | |  |  | `NUMC(7)` | Distribution Rule Number |
| `SettlmtDistrRuleIsUsedInLedger` |  | |  |  | `CHAR(1)` | Distribution Rule was used in Ledger Settlement |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `SettlementReceiver` |  | |  |  | `CHAR(22)` | Object Number for Settlement Receiver |
| `SettlementDefaultRule` |  | |  |  | `CHAR(3)` | Default Rule |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ProfitabilitySegment` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `SettlementDistrRuleRmngAmount` |  | |  |  | `CURR(23)` | Remaining Amount for Amount Settlement w. Amount Rule Cat. |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `SettlementDistributionRuleUUID` |  | |  |  | `RAW(16)` | Unique ID of a Distribution Rule |
| `SettlmtDistrRulePassDownUUID` |  | |  |  | `RAW(16)` | Unique ID of a Pass-Down Distribution Rule |
| `SettlmtRule1stUsgeFiscalPeriod` |  | |  |  | `NUMC(3)` | Period of First Use |
| `SettlmtRule1stUsageFiscalYear` |  | |  |  | `NUMC(4)` | Year First Used |
| `SettlmtRuleLastUsgeFsclPeriod` |  | |  |  | `NUMC(3)` | Period of Last Use |
| `SettlmtRuleLastUsageFiscalYear` |  | |  |  | `NUMC(4)` | Year Last Used |
| `SenderProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SenderCompanyCode` |  | |  |  | `CHAR(4)` | Company code for WBS element |
| `SenderResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `SenderPlant` |  | |  |  | `CHAR(4)` | Plant |
| `SenderFunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SenderProjectType` |  | |  |  | `CHAR(2)` | Project Type |
| `SenderProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
