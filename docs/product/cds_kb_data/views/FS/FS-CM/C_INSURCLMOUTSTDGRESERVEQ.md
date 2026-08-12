---
name: C_INSURCLMOUTSTDGRESERVEQ
description: "Outstanding Reserves"
app_component: FS-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMOUTSTDGRESERVEQ')/$value
semantic_en: "Outstanding Reserves"
semantic_vi: "Restreserven — CDS view tiêu dùng dựa trên I_InsurClmOutStdgReserveC."
keywords:
  - "restreserven"
  - "insurance"
  - "claim"
  - "insur"
  - "loss"
  - "expn"
  - "type"
  - "authzn"
  - "contract"
tags:
  - FS
  - component:FS-CM
  - consumption-view
  - FS-CM
---
# C_INSURCLMOUTSTDGRESERVEQ

**Outstanding Reserves**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMOUTSTDGRESERVEQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsuranceClaim` | ✓ | |  |  | `CHAR(17)` | Number of Claim |
| `InsurClmLossExpnType` |  | |  |  | `CHAR(1)` | Losses or Expenses |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsuranceContract` |  | |  |  | `CHAR(17)` | Contract Number |
| `InsurClmLifeCycSts` |  | |  |  | `CHAR(2)` | Status of Claim |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `ParentOrganizationalUnit` |  | |  |  | `NUMC(8)` | Higher-Level Organizational Unit |
| `InsurClmOutsdngRsrvAmt` |  | |  |  | `CURR(15)` | Outstanding Reserve |
| `DisplayCurrency` |  | |  | `:P_DisplayCurrency` | `CUKY(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMOUTSTDGRESERVEQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMOUTSTDGRESERVEQ')/$value)*

```abap
@EndUserText.label: 'Restreserven'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.query: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
   sqlViewName: 'CICLOUTRSRVQ',
   compiler.compareFilter: true
}

@ObjectModel.usageType: {
    dataClass: #MIXED,
    sizeCategory: #XL,
    serviceQuality: #D
}

@VDM.viewType: #CONSUMPTION

define view C_InsurClmOutStdgReserveQ
  with parameters
    P_KeyDate          : icl_postdate,
//    @Consumption.defaultValue: 'M'
//    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from I_InsurClmOutStdgReserveC(  P_KeyDate: $parameters.P_KeyDate, P_ExchangeRateType:'M', P_DisplayCurrency:$parameters.P_DisplayCurrency )
{

      //I_InsurClmOutStdgReserveC
      @AnalyticsDetails.query.display: #KEY
      @AnalyticsDetails.query.axis: #FREE
  key InsuranceClaim,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      InsurClmLossExpnType,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      InsurClmType,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      InsurClmAuthznGrp,
      
      @AnalyticsDetails.query.display: #KEY
      @AnalyticsDetails.query.axis: #FREE
      InsuranceContract,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      InsurClmLifeCycSts,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      InsurClmSubclmType,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      InsurLineOfBus,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      InsurClmCoverageType,  
                  
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE      
      OrganizationalUnit,    
        
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE      
      ParentOrganizationalUnit,

      /** MEASURES **/
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      InsurClmOutsdngRsrvAmt,
      //InsurClmDisplayCurrency

      @Semantics.currencyCode: true
      :P_DisplayCurrency as DisplayCurrency
}
```
