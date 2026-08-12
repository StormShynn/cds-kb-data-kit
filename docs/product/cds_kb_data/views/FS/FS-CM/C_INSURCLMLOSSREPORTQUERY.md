---
name: C_INSURCLMLOSSREPORTQUERY
description: "Loss Triangle"
app_component: FS-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMLOSSREPORTQUERY')/$value
semantic_en: "Loss Triangle"
semantic_vi: "Schadendreieck — CDS view tiêu dùng dựa trên I_InsurClmLossReportCube."
keywords:
  - "schadendreieck"
  - "insur"
  - "occrnc"
  - "year"
  - "coverage"
  - "type"
  - "line"
  - "subclm"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CM
  - consumption-view
  - FS-CM
---
# C_INSURCLMLOSSREPORTQUERY

**Loss Triangle**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMLOSSREPORTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurClmOccrncYear` | ✓ | |  |  | `NUMC(4)` | Year of Claim Date |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsurClm12MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year |
| `InsurClm24MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year and in Next Year |
| `InsurClm36MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year and in Next Two Years |
| `InsurClm48MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year and in Next Three Years |
| `InsurClm60MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year and in Next Four Years |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMLOSSREPORTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMLOSSREPORTQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CICLLOSSTRIANGLE'
@EndUserText.label: 'Schadendreieck'

@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL

define view C_InsurClmLossReportQuery                       // maybe add filter on field Active to join conditions for performance?
    with parameters
        P_InsurClmOccrncYear   : icl_occurrence_year,
        P_Currency             : vdm_v_display_currency
    as select from I_InsurClmLossReportCube(P_InsurClmOccrncYear: :P_InsurClmOccrncYear,
                                                      P_Currency: :P_Currency)
{
    @AnalyticsDetails.query.axis: #ROWS
    key InsurClmOccrncYear,
    
    //@AnalyticsDetails.query.axis: #ROWS
    InsurClmCoverageType,

    //@AnalyticsDetails.query.axis: #ROWS
    InsurLineOfBus,

    InsurClmType,
    InsurClmSubclmType,
    InsurClmAuthznGrp,

    InsurClm12MnthPaidLossAmt,

    InsurClm24MnthPaidLossAmt,

    InsurClm36MnthPaidLossAmt,

    InsurClm48MnthPaidLossAmt,

    InsurClm60MnthPaidLossAmt
}
```
