---
name: C_INSURCLMTOTEXPNDTRQUERY
description: "Total Claim Expenditure"
app_component: FS-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMTOTEXPNDTRQUERY')/$value
semantic_en: "Total Claim Expenditure"
semantic_vi: "Gesamtaufwand — CDS view tiêu dùng dựa trên I_InsurClmTotExpndtrCube."
keywords:
  - "gesamtaufwand"
  - "insurance"
  - "claim"
  - "insur"
  - "loss"
  - "expn"
  - "type"
  - "rsrv"
  - "reserve"
  - "currency"
  - "organizational"
  - "unit"
tags:
  - FS
  - claim
  - component:FS-CM
  - consumption-view
  - FS-CM
---
# C_INSURCLMTOTEXPNDTRQUERY

**Total Claim Expenditure**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMTOTEXPNDTRQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsuranceClaim` | ✓ | |  |  | `CHAR(17)` | Number of Claim |
| `InsurClmLossExpnType` | ✓ | |  |  | `CHAR(1)` | Losses or Expenses |
| `InsurClmRsrvType` | ✓ | |  |  | `CHAR(2)` | Reserve Type |
| `InsurClmReserveCurrency` | ✓ | |  |  | `CUKY(5)` | Currency of Reserve (Transactn Crcy) |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `ParentOrganizationalUnit` |  | |  |  | `NUMC(8)` | Higher-Level Organizational Unit |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `InsurClmLifeCycSts` |  | |  |  | `CHAR(2)` | Status of Claim |
| `InsuranceContract` |  | |  |  | `CHAR(17)` | Contract Number |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmPerformerObjID` |  | |  |  | `CHAR(12)` | Claim Handler |
| `InsurClmDisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `InsurClmTotExpndtrAmt` |  | |  |  | `CURR(15)` | Total Expenditure in Reserve Currency |
| `GrossReserveAmount` |  | |  |  | `CURR(15)` | Total Expenditure in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMTOTEXPNDTRQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMTOTEXPNDTRQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CICLTOTEXPNQRY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Gesamtaufwand'

@Analytics.query: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION

@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #D
}
define view C_InsurClmTotExpndtrQuery with parameters
//                    P_ExchangeRateType : kurst,
                    P_DisplayCurrency  : vdm_v_display_currency 
as select from I_InsurClmTotExpndtrCube (P_ExchangeRateType:'M', P_DisplayCurrency: $parameters.P_DisplayCurrency) {

      @AnalyticsDetails.query.display: #KEY
    key InsuranceClaim,
      @AnalyticsDetails.query.display: #KEY_TEXT
    key InsurClmLossExpnType,
      @AnalyticsDetails.query.display: #KEY_TEXT
    key InsurClmRsrvType,
//      @AnalyticsDetails.query.display: #KEY_TEXT
      @Semantics.currencyCode: true
    key InsurClmReserveCurrency,
      @AnalyticsDetails.query.display: #KEY_TEXT
        OrganizationalUnit,
      @AnalyticsDetails.query.display: #KEY_TEXT
        ParentOrganizationalUnit,
      @AnalyticsDetails.query.display: #KEY_TEXT
        InsurClmType,
      @AnalyticsDetails.query.display: #KEY_TEXT
        InsurClmSubclmType,
      @AnalyticsDetails.query.display: #KEY_TEXT
        InsurClmAuthznGrp,
      @AnalyticsDetails.query.display: #KEY_TEXT
        InsurClmCoverageType,
      @AnalyticsDetails.query.display: #KEY_TEXT
        InsurClmLifeCycSts,
      @AnalyticsDetails.query.display: #KEY
        InsuranceContract,
      @AnalyticsDetails.query.display: #KEY_TEXT
        InsurLineOfBus,
        InsurClmPerformerObjID,
      @Semantics.currencyCode: true
        $parameters.P_DisplayCurrency as InsurClmDisplayCurrency,
        CalendarYear,
        CalendarMonth,
        CalendarQuarter,
        YearQuarter,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'InsurClmReserveCurrency'
        InsurClmTotExpndtrAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'InsurClmDisplayCurrency'
        GrossReserveAmount
}
```
