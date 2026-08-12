---
name: C_INSURCLMSUBCLAIMCOUNTQ
description: "Number of Subclaims"
app_component: FS-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMSUBCLAIMCOUNTQ')/$value
semantic_en: "Number of Subclaims"
semantic_vi: "Anzahl von Teilfällen — CDS view tiêu dùng dựa trên I_InsurClmSubclaimCountC."
keywords:
  - "anzahl"
  - "von"
  - "teilfällen"
  - "insurance"
  - "claim"
  - "insur"
  - "authzn"
  - "type"
  - "line"
  - "life"
tags:
  - FS
  - claim
  - component:FS-CM
  - consumption-view
  - FS-CM
---
# C_INSURCLMSUBCLAIMCOUNTQ

**Number of Subclaims**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMSUBCLAIMCOUNTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsuranceClaim` |  | |  |  | `CHAR(17)` | Number of Claim |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmLifeCycSts` |  | |  |  | `CHAR(2)` | Status of Claim |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsurClmSubclaimPerformerObjID` |  | |  |  | `CHAR(12)` | Claim Handler |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `ParentOrganizationalUnit` |  | |  |  | `NUMC(8)` | Higher-Level Organizational Unit |
| `NmbrOfOpenInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Open Subclaims at Start of Period |
| `NmbrOfPndgInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Open Subclaims at End of Period |
| `NmbrOfReopenedInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Reopened Subclaims |
| `NmbrOfClsdInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Closed Subclaims |
| `NmbrOfNewOpenInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Opened Subclaims |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMSUBCLAIMCOUNTQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMSUBCLAIMCOUNTQ')/$value)*

```abap
@EndUserText.label: 'Anzahl von Teilfällen'

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics.query: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
   sqlViewName: 'CICLSUBCLCNTQRY',
   compiler.compareFilter: true
}

@ObjectModel.usageType: {
    dataClass: #MIXED,
    sizeCategory: #XL,
    serviceQuality: #D
}

@VDM.viewType: #CONSUMPTION
define view C_InsurClmSubclaimCountQ
  with parameters
    P_IntervalStartDate : icl_date_from,
    P_IntervalEndDate   : icl_date_to
  as select from I_InsurClmSubclaimCountC( P_IntervalStartDate: $parameters. P_IntervalStartDate, P_IntervalEndDate: $parameters.P_IntervalEndDate )
{
  //I_InsurClmSubclaimCountC
  @AnalyticsDetails.query.display: #KEY
  @AnalyticsDetails.query.axis: #FREE
  InsuranceClaim,
  //key InsurClmSubclm,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  InsurClmAuthznGrp,

  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  InsurClmType,

  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  InsurLineOfBus,

  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  InsurClmLifeCycSts,

  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  InsurClmCoverageType,

  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  InsurClmSubclmType,

  @AnalyticsDetails.query.display: #KEY
  @AnalyticsDetails.query.axis: #FREE
  InsurClmSubclaimPerformerObjID,

  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  OrganizationalUnit,

  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  ParentOrganizationalUnit,

  //Measures
  NmbrOfOpenInsurClmSubclms,
  NmbrOfPndgInsurClmSubclms,
  NmbrOfReopenedInsurClmSubclms,
  NmbrOfClsdInsurClmSubclms,
  NmbrOfNewOpenInsurClmSubclms

}
```
