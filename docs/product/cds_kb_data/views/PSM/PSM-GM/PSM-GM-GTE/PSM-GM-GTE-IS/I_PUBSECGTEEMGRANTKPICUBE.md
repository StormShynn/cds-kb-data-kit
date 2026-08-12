---
name: I_PUBSECGTEEMGRANTKPICUBE
description: "Grant KPIs - Cube"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTKPICUBE')/$value
semantic_en: "Grant KPIs - Cube"
semantic_vi: "Grant KPIs - Cube — CDS view giao diện dựa trên I_Grant."
keywords:
  - "grant"
  - "kpis"
  - "cube"
  - "grantee"
  - "mgmt"
  - "sponsor"
  - "lifecycle"
  - "status"
  - "global"
  - "currency"
  - "revn"
  - "actl"
  - "crcy"
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# I_PUBSECGTEEMGRANTKPICUBE

**Grant KPIs - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTKPICUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | | `_Grant` | `GrantID` | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | | `_Grant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `GlobalCurrency` |  | |  | `case when _GrantRev.GlobalCurrency is not null then _GrantRev.GlobalCurrency else _GrantBilled.GlobalCurrency end` | `CUKY(5)` | Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  | `abs( _GrantRev.PubSecRevnActlAmtInGlobalCrcy )` | `CURR(23)` |  |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  | `_GrantBudget.BdgtConsumableAmtInGlobalCrcy - _GrantBudget.BdgtConsumedAmtInGlobalCrcy` | `CURR(24)` |  |
| `NotPaidRevenueAmtInGCrcy` |  | | `_GrantBilled` | `NotPaidRevenueAmtInGCrcy` | `CURR(23)` |  |
| `NumberOfGteeMMasterDataRecords` |  | |  | `1` | `INT1(3)` |  |
| `GrantAuthznGrp` |  | | `_Grant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantLfcycStatusForAuthzn` |  | | `_Grant` | `GrantLfcycStatusForAuthzn` | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `BdgtAvailableExpnAmtInGCrcy` |  | |  | `cast(0 as fins_vhcur12)` | `CURR(23)` | Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | | `_GrantRev` | `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `RevenueAmountInCompanyCodeCrcy` |  | |  | `cast( 0 as fins_vhcur12)` | `CURR(23)` | Amount in Company Code Currency |
| `AvailableAmountInCCCrcy` |  | |  | `cast( 0 as fins_vhcur12)` | `CURR(23)` | Amount in Company Code Currency |
| `NotPaidRevenueAmtInDocCrcy` |  | |  | `cast( 0 as fins_vhcur12)` | `CURR(23)` | Amount in Company Code Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTKPICUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTKPICUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMGRNTKPICUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Grant KPIs - Cube'
@VDM.viewType: #COMPOSITE
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #L
     },
     supportedCapabilities: [#ANALYTICAL_PROVIDER],
     modelingPattern: #ANALYTICAL_CUBE
    }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics:{
dataCategory: #CUBE,
internalName: #LOCAL
}
@AccessControl.personalData.blocking: #REQUIRED
@Metadata:{
          allowExtensions:true,
          ignorePropagatedAnnotations: true
          }

define view I_PubSecGteeMGrantKPICube
  as select from           I_Grant                        as _Grant
    left outer to one join I_PubSecGteeMRevnPerAwddGrant  as _GrantRev    on _Grant.GrantID = _GrantRev.GrantID
    left outer to one join I_PubSecGteeMBdgtPerAwddGrnt   as _GrantBudget on _Grant.GrantID = _GrantBudget.GrantID
    left outer to one join I_PubSecGteeMOpnBlldAmtPerGrnt as _GrantBilled on _Grant.GrantID = _GrantBilled.GrantID
{
  key _Grant.GrantID,
      _Grant.GranteeMgmtSponsor,
      @ObjectModel.foreignKey.association:'_GrantLifecycleStatus'
      _Grant.GrantLifecycleStatus,
      @Semantics.currencyCode: true
      //    @ObjectModel.foreignKey.association: '_GlobalCurrency'
      case when
      _GrantRev.GlobalCurrency is not null
      then _GrantRev.GlobalCurrency else
      _GrantBilled.GlobalCurrency end                                                       as GlobalCurrency,

      @Aggregation.default:  #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      @EndUserText.label: 'Revenue Amount in Global Currecny'
      abs( _GrantRev.PubSecRevnActlAmtInGlobalCrcy )                                        as PubSecRevnActlAmtInGlobalCrcy,
      @Aggregation.default:  #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      @EndUserText.label: 'Available Budget in Global Currecny'
      _GrantBudget.BdgtConsumableAmtInGlobalCrcy - _GrantBudget.BdgtConsumedAmtInGlobalCrcy as BdgtAvailableAmtInGlobalCrcy,
      //      @Semantics.currencyCode: true
      //      _GrantBilled.DocumentCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      @EndUserText.label: 'Unpaid Billed Amount in Global Currecny'
      _GrantBilled.NotPaidRevenueAmtInGCrcy,
      @Aggregation.default:  #SUM
      @EndUserText.label: 'Master Data Records'
      1                                                                                     as NumberOfGteeMMasterDataRecords,
      _Grant.GrantAuthznGrp,
      @Consumption.hidden: true
      _Grant.GrantIsNotRelevantGrant,
      _Grant.GrantLfcycStatusForAuthzn,
      _Grant._Sponsor,
      _Grant._GrantLifecycleStatus,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      @EndUserText.label: 'Unpaid Billed Amount in Global Currecny'
      cast(0 as fins_vhcur12)                                                               as BdgtAvailableExpnAmtInGCrcy,
      @Semantics.currencyCode: true
      _GrantRev.GlobalCurrency                                                              as CompanyCodeCurrency,
      @Aggregation.default:  #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      @EndUserText.label: 'Revenue Amount in Company Code Currecny'
      cast( 0 as fins_vhcur12)                                                              as RevenueAmountInCompanyCodeCrcy,
      @Aggregation.default:  #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      @EndUserText.label: 'Available Budget in Company code Currency'
      cast( 0 as fins_vhcur12)                                                              as AvailableAmountInCCCrcy,
      //      @Semantics.currencyCode: true
      //      _GrantBilled.DocumentCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      @EndUserText.label: 'Unpaid Billed Amount in Document Currency'
      cast( 0 as fins_vhcur12)                                                              as NotPaidRevenueAmtInDocCrcy

}
where
      _Grant.GrantIsNotRelevantGrant <> 'X'
  and _Grant.GrantLifecycleStatus    =  'I5616'
```
