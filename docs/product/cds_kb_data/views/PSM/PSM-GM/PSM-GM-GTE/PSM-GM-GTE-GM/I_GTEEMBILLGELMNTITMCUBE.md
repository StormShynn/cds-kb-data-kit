---
name: I_GTEEMBILLGELMNTITMCUBE
description: "Grantee Mgmt Billing Element Item - Cube"
app_component: PSM-GM-GTE-GM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLGELMNTITMCUBE')/$value
semantic_en: "Grantee Mgmt Billing Element Item - Cube"
semantic_vi: "Grantee Mgmt Billing Element Item - Cube — CDS view giao diện dựa trên I_GteeMBillingElementEntry."
keywords:
  - "grantee"
  - "mgmt"
  - "billing"
  - "element"
  - "item"
  - "cube"
  - "gtee"
  - "billg"
  - "elmnt"
  - "entr"
  - "flow"
  - "grant"
  - "sponsored"
  - "program"
  - "document"
tags:
  - PSM
  - billing
  - bo:billingdocument
  - component:PSM-GM-GTE-GM
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-GM
---
# I_GTEEMBILLGELMNTITMCUBE

**Grantee Mgmt Billing Element Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-GM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLGELMNTITMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GteeMBillgElmntEntrItmUUID` | ✓ | |  |  | `RAW(16)` | Grantee Mgmt: Billing Element Entry UUID |
| `GteeMBillgElmntEntrItmFlowUUID` | ✓ | |  |  | `RAW(16)` | GM Billing Element: Flow UUID |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Billing Document Currency |
| `OriginalRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Original Amount in Document Currency |
| `ToBePostponedAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount to Be Postponed in Document Currency |
| `ToBeWrittenOffAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount to Be Written Off in Document Currency |
| `BillgInProcAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billing in Process Amount in Document Currency |
| `BilledRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Document Currency |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | GM Billing: Global Currency |
| `OriginalRevenueAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Original Amount in Global Currency |
| `ToBeWrittenOffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount to Be Written Off in Global Currency |
| `ToBePostponedAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount to Be Postponed in Global Currency |
| `BillgInProcAmtInGlobCurrency` |  | |  |  | `CURR(23)` | Billing in Process Amount in Global Currency |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Global Currency |
| `DocumentBillingStatus` |  | |  |  | `CHAR(1)` | GM Billing Elements: Grant Billing Doc. Request Status |
| `_Grant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_Grant` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLGELMNTITMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLGELMNTITMCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMBLGELMITMCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Grantee Mgmt Billing Element Item - Cube'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #L
     },
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
    }
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_GteeMBillgElmntItmCube
  as select from I_GteeMBillingElementEntry as BillingElementEntry
  association [1..1] to I_Grant as _Grant on $projection.GrantID = _Grant.GrantID
{
  key    GteeMBillgElmntEntrItmUUID                         as GteeMBillgElmntEntrItmUUID,
  key    BillingElementEntry._GteeMBillingElementEntryFlw.GteeMBillgElmntEntrItmFlowUUID,
         @ObjectModel.foreignKey.association: '_Grant'
         BillingElementEntry.GrantID,
         @ObjectModel.foreignKey.association: '_SponsoredProgramCore'
         BillingElementEntry.SponsoredProgram,
         /*Billing Fields*/
         @Semantics.currencyCode:true
         BillingElementEntry.DocumentCurrency,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         BillingElementEntry.OriginalRevenueAmtInDocCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         BillingElementEntry.ToBePostponedAmtInDocCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         BillingElementEntry.ToBeWrittenOffAmtInDocCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         BillingElementEntry._GteeMBillingElementEntryFlw.BillgInProcAmtInDocCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         BillingElementEntry._GteeMBillingElementEntryFlw.BilledRevenueAmtInDocCrcy,
         @ObjectModel.foreignKey.association: '_Sponsor'
         _Grant.GranteeMgmtSponsor,
         @Semantics.currencyCode: true
         BillingElementEntry.GlobalCurrency                 as GlobalCurrency,
         @Semantics.amount.currencyCode: 'GlobalCurrency'
         @Aggregation.default: #SUM
         BillingElementEntry.OriginalRevenueAmtInGlobalCrcy as OriginalRevenueAmtInGlobalCrcy,
         @Semantics.amount.currencyCode: 'GlobalCurrency'
         @Aggregation.default: #SUM
         BillingElementEntry.ToBeWrittenOffAmtInGlobalCrcy  as ToBeWrittenOffAmtInGlobalCrcy,
         @Semantics.amount.currencyCode: 'GlobalCurrency'
         @Aggregation.default: #SUM
         BillingElementEntry.ToBePostponedAmtInGlobalCrcy   as ToBePostponedAmtInGlobalCrcy,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         BillingElementEntry._GteeMBillingElementEntryFlw.BillgInProcAmtInGlobCurrency,
         @Aggregation.default: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         BillingElementEntry._GteeMBillingElementEntryFlw.BilledRevenueAmtInGlobCrcy,
         BillingElementEntry._GteeMBillingElementEntryFlw.DocumentBillingStatus,
         BillingElementEntry._SponsoredProgramCore,
         _Grant._Sponsor,
         _Grant

}
```
