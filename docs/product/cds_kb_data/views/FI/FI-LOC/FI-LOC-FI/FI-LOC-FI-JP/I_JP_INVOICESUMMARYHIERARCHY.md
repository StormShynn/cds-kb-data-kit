---
name: I_JP_INVOICESUMMARYHIERARCHY
description: "Japan Invoice Summary Customer Hierarchy"
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_INVOICESUMMARYHIERARCHY')/$value
semantic_en: "Japan Invoice Summary Customer Hierarchy"
semantic_vi: "Japan Invoice Summary Customer Hierarchy — CDS view giao diện dựa trên I_JP_InvcSummaryHierarchyBasic."
keywords:
  - "japan"
  - "invoice"
  - "summary"
  - "customer"
  - "hierarchy"
  - "company"
  - "code"
  - "invc"
  - "smmry"
  - "role"
  - "recipient"
  - "payer"
tags:
  - FI
  - bo:billingdocument
  - component:FI-LOC-FI-JP
  - customer
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-JP
  - interface-view
  - invoice
  - lob:finance
  - lob:logistics general
---
# I_JP_INVOICESUMMARYHIERARCHY

**Japan Invoice Summary Customer Hierarchy**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_INVOICESUMMARYHIERARCHY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `InvcSmmryRole` |  | |  |  | `CHAR(1)` | Invoice Summary Role |
| `InvcSmmryRecipient` |  | |  |  | `CHAR(10)` | Invoice Summary Recipient |
| `InvcSmmryPayer` |  | |  |  | `CHAR(10)` | Invoice Summary Payer |
| `InvcSmmryPyrInvcNumberRange` |  | |  |  | `CHAR(2)` | Number range number for Payer Invoice |
| `InvcSmmryMnthlyInvcNmbrRange` |  | |  |  | `CHAR(2)` | Number range number for Monthly Invoice |
| `InvcSmmryHasTaxCalcdInHeader` |  | |  |  | `CHAR(1)` | Calculate Tax at MI Header Level |
| `InvcSmmryHldayDueDateRcalc` |  | |  |  | `CHAR(1)` | Consider JP Holidays In Due Date Calculation |
| `InvcSmmryBkChargeIsPaidByPayee` |  | |  |  | `CHAR(1)` | Bank Charges Paid By Payee |
| `InvcSmmryBankChargePatternID` |  | |  |  | `CHAR(2)` | Bank Charge Pattern ID |
| `InvcSmmryBankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `InvcSmmryBank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `InvcSmmryVirtualAcctNo` |  | |  |  | `CHAR(10)` | Virtual Account Number |
| `InvcSmmryPaytTermProposalRule` |  | |  |  | `CHAR(1)` | Proposal of Payment Term |
| `VirtualAcctNmbrIsAutomlyAssgd` |  | |  |  | `CHAR(1)` | Relevant for Special Cases |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `_CustCompany` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_INVOICESUMMARYHIERARCHY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_INVOICESUMMARYHIERARCHY')/$value)*

```abap
@EndUserText.label: 'Japan Invoice Summary Customer Hierarchy'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blockingIndicator: ['IsBusinessPurposeCompleted']
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}

define view entity I_JP_InvoiceSummaryHierarchy as select from I_JP_InvcSummaryHierarchyBasic as _Isjphierarchy
{
  @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
  InvcSmmryRole,
  InvcSmmryRecipient,
  InvcSmmryPayer,
  InvcSmmryPyrInvcNumberRange,
  InvcSmmryMnthlyInvcNmbrRange,
  @Semantics.booleanIndicator:true
  InvcSmmryHasTaxCalcdInHeader,
  InvcSmmryHldayDueDateRcalc,
  @Semantics.booleanIndicator:true
  InvcSmmryBkChargeIsPaidByPayee,
  InvcSmmryBankChargePatternID,
  InvcSmmryBankCountry,
  InvcSmmryBank,
  InvcSmmryVirtualAcctNo,
  InvcSmmryPaytTermProposalRule,
  @Semantics.booleanIndicator:true
  VirtualAcctNmbrIsAutomlyAssgd,
  @Consumption.hidden: true
  AuthorizationGroup,
  @Semantics.booleanIndicator:true
  IsBusinessPurposeCompleted,
  _CustCompany,
  _Customer,
  _CompanyCode
}
```
