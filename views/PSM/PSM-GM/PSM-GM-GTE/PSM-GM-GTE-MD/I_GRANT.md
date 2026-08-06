---
name: I_GRANT
description: This CDS view provides the prerequisites for answering the following business questions: What grant type is involved? Who is the sponsor of a grant? What is the lifecycle status of a grant?
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What grant type is involved? Who is the sponsor of a grant? What is the lifecycle status of a grant?
keywords:
  - Grant
tags:
  - PSM
  - bo:plant
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_GRANT

**This CDS view provides the prerequisites for answering the following business questions: What grant type is involved? Who is the sponsor of a grant? What is the lifecycle status of a grant?**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GrantID` | `CHAR(20)` | Grant |
| `ValidityStartDate` | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` | `DATS(8)` | Valid-to Date |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `GrantType` | `CHAR(2)` | Grant Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GrantIsBlockedForPosting` | `CHAR(1)` | Blocking Indicator |
| `GrantCurrency` | `CUKY(5)` | Grant currency |
| `GrantTotalAmountInGrantCrcy` | `CURR(13)` | Total Grant Value in Sponsor Currency |
| `GteeMIndrctCostShrngRule` | `NUMC(4)` | Rule for Determining Indirect Costs |
| `GteeMIndirectCostRateInPercent` | `DEC(6)` | Cloud Edition Only: Percentage for Indirect Costs |
| `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` | `CHAR(5)` | Grant Status |
| `GrantStatusProfile` | `CHAR(8)` | Status profile for the user states attached to system states |
| `GrantUserStatus` | `CHAR(5)` | User Status |
| `GranteeMgmtCostSharingRule` | `NUMC(4)` | Rule for Determining Cost Sharing Requirements |
| `GteeMCostSharingOverallRate` | `DEC(7)` | Overall Cost Sharing Rate for Grant |
| `GranteeMgmtBillingRule` | `NUMC(4)` | Rule Used as a Basis for Billing |
| `CreatedByUser` | `CHAR(12)` | Record Created by |
| `CreationDate` | `DATS(8)` | Created on |
| `CreationTime` | `TIMS(6)` | Created at |
| `LastChangedByUser` | `CHAR(12)` | Last Modified by |
| `LastChangeDate` | `DATS(8)` | Date last modified |
| `LastChangeTime` | `TIMS(6)` | Last Modified Time |
| `PreAwardPstgIsAllowedForGrant` | `CHAR(1)` | Pre-award cost control |
| `GrantFiscalYearVariant` | `CHAR(2)` | Fiscal year variant of grant |
| `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GteeMTimeSliceSplittingRule` | `NUMC(4)` | Rule Used to Split Time Intervals Between Fiscal Years |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `GranteeMgmtWorkflowStatus` | `CHAR(1)` | Workflow status |
| `GrantBlockedByWorkflow` | `CHAR(1)` | GM Blocks grant editing pending approval |
| `GrantExternalReference` | `CHAR(24)` | Alternate Grant Identifier |
| `GrantResponsibleUser` | `CHAR(12)` | Grant Responsible User |
| `GrantAssistanceListingNumber` | `CHAR(10)` | Assistance Listing Number |
