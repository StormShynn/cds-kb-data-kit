---
name: C_TRSYCTPTYLIMITOVERVIEWQ
description: "This CDS view provides the prerequisites for answering the following business questions for limit utilizations: What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by company code? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group?"
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLIMITOVERVIEWQ')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions for limit utilizations: What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by company code? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group?"
semantic_vi: "Treasury Counterparty Limit Overview Query — CDS view tiêu dùng dựa trên I_TrsyCtptyLimitOverviewCube."
keywords:
  - "treasury"
  - "counterparty"
  - "limit"
  - "overview"
  - "query"
  - "utilzn"
  - "determination"
  - "date"
  - "company"
  - "code"
  - "business"
  - "partner"
  - "product"
  - "group"
  - "amount"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-CR
  - FIN-FSCM-TRM-CR-2CL
  - lob:finance
  - product
---
# C_TRSYCTPTYLIMITOVERVIEWQ

**This CDS view provides the prerequisites for answering the following business questions for limit utilizations: What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by company code? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLIMITOVERVIEWQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LimitUtilznDeterminationDate` | ✓ | |  |  | `DATS(8)` | Base Date for Determining Limit Utilization |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `LimitProductGroup` | ✓ | |  |  | `CHAR(3)` | Limit Product Group |
| `IntLimitAmountInDisplayCrcy` |  | |  | `cast( 0 as ftr_cra_int_limit_amount )` | `CURR(17)` | Internal Limit Amount |
| `LimitUtilznAmountInDisplayCrcy` |  | |  | `cast( 0 as ftr_cra_limit_utilzn_amt )` | `CURR(17)` | Limit Amount Utilized: Totals Record |
| `FreeIntLimitAmountInDspCrcy` |  | |  | `cast( 0 as ftr_cra_free_int_limit_amount )` | `CURR(17)` | Free Internal Limit Amount |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLIMITOVERVIEWQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLIMITOVERVIEWQ')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CTRSYCTPTYLMTOVQ',
                compiler.compareFilter: true, 
                buffering.status: #SWITCHED_OFF } // doesn't work with parameters but triggers prio 1 ATC when removed under C1 contract 

@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY,
                  personalData.blocking: #NOT_REQUIRED }

@Analytics: { query: true,
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations:true }

@ObjectModel: { usageType.dataClass: #MIXED,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #L,
                supportedCapabilities: [ #ANALYTICAL_QUERY  ],
                modelingPattern: #ANALYTICAL_QUERY }

@OData.publish: true
@VDM.viewType: #CONSUMPTION

@EndUserText.label: 'Treasury Counterparty Limit Overview Query'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view C_TrsyCtptyLimitOverviewQ
  with parameters
    P_DisplayCurrency      : vdm_v_display_currency,
    P_ExchangeRateType     : kurst,
    P_LimitType            : ftr_cra_limit_type,
    P_LimitUtilizationBase : ftr_cra_limit_utilzn_base
  as select from I_TrsyCtptyLimitOverviewCube( P_DisplayCurrency : $parameters.P_DisplayCurrency,
                                               P_ExchangeRateType : $parameters.P_ExchangeRateType   ) as LimitCube
{

      @Consumption.filter: { selectionType:      #INTERVAL,
                             multipleSelections: false,
                             mandatory:          true,
                             hidden:             false }
      @Consumption.derivation: { lookupEntity:    'I_ShiftedCalendarDate',
                                 resultElement:     'ShiftedCalendarDate',
                                 resultElementHigh: 'CalendarDate',
                                 binding: [ { targetParameter: 'P_TimePeriodOffsetDuration', type: #CONSTANT,     value: '-1' },
                                            { targetParameter: 'P_TimePeriodOffsetUnit',     type: #CONSTANT,     value: 'Y' },
                                            { targetElement:   'CalendarDate',               type: #SYSTEM_FIELD, value: '#SYSTEM_DATE' } ] }
      /* @Consumption.derivation: {
         lookupEntity: 'I_SglGregorianCalDateFunction',
         resultElement: 'DateFunctionStartDate',
         resultElementHigh: 'DateFunctionEndDate',
         binding: [   { targetParameter: 'P_DateFunction', type: #CONSTANT, value : 'PREVIOUSYEARTODATE' }   ]   } */

      @AnalyticsDetails.query.axis: #ROWS
  key LimitUtilznDeterminationDate,
  key CompanyCode,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
  key BusinessPartner,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key LimitProductGroup,
      // amounts must not be summed across cates. with date: history view; without date: key date view for newest date
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'LimitUtilznDeterminationDate' ]  }] 
      @AnalyticsDetails.query.formula: 'IntLimitAmountInDisplayCrcy'
      cast( 0 as ftr_cra_int_limit_amount )      as IntLimitAmountInDisplayCrcy,
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'LimitUtilznDeterminationDate' ]  }] 
      @AnalyticsDetails.query.formula: 'LimitUtilznAmountInDisplayCrcy'
      cast( 0 as ftr_cra_limit_utilzn_amt )      as LimitUtilznAmountInDisplayCrcy,
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'LimitUtilznDeterminationDate' ]  }] 
      @AnalyticsDetails.query.formula: 'FreeIntLimitAmountInDspCrcy'
      cast( 0 as ftr_cra_free_int_limit_amount ) as FreeIntLimitAmountInDspCrcy,
      @Semantics.currencyCode: true
      DisplayCurrency
}
where
      LimitType            = $parameters.P_LimitType
  and LimitUtilizationBase = $parameters.P_LimitUtilizationBase
```
