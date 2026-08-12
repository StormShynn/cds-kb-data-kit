---
name: I_TRSYCTPTYLIMITOVERVIEWCUBE
description: "This CDS view provides the prerequisites for answering the following business questions for limit amounts, limit utilization amounts, and free limit amounts: What are the limit utilization amounts in display currency at different dates of the different limit types by business partner? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by company code? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by limit product group? What are the free internal or external limit amounts in display currency at different dates of the different limit types by limit product group?"
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLIMITOVERVIEWCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions for limit amounts, limit utilization amounts, and free limit amounts: What are the limit utilization amounts in display currency at different dates of the different limit types by business partner? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by company code? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by limit product group? What are the free internal or external limit amounts in display currency at different dates of the different limit types by limit product group?"
semantic_vi: "Treasury Counterparty Limit Overview - Cube — CDS view giao diện dựa trên I_TrsyCtptyTotalLmtUtilznInDC."
keywords:
  - "treasury"
  - "counterparty"
  - "limit"
  - "overview"
  - "cube"
  - "type"
  - "utilzn"
  - "determination"
  - "date"
  - "utilization"
  - "base"
  - "characteristics"
  - "record"
  - "number"
  - "company"
tags:
  - FIN
  - bo:material
  - component:FIN-FSCM-TRM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-CR
  - FIN-FSCM-TRM-CR-2CL
  - interface-view
  - lob:finance
  - product
---
# I_TRSYCTPTYLIMITOVERVIEWCUBE

**This CDS view provides the prerequisites for answering the following business questions for limit amounts, limit utilization amounts, and free limit amounts: What are the limit utilization amounts in display currency at different dates of the different limit types by business partner? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by company code? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by limit product group? What are the free internal or external limit amounts in display currency at different dates of the different limit types by limit product group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLIMITOVERVIEWCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LimitType` | ✓ | |  |  | `CHAR(3)` | Limit Type |
| `LimitUtilznDeterminationDate` | ✓ | |  |  | `DATS(8)` | Base Date for Determining Limit Utilization |
| `LimitUtilizationBase` | ✓ | |  |  | `NUMC(1)` | Limit Utilization Base |
| `LmtCharacteristicsRecordNumber` | ✓ | |  |  | `NUMC(20)` | Number of Limit Record |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `LimitProductGroup` |  | |  |  | `CHAR(3)` | Limit Product Group |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `CharacteristicCurrency` |  | |  |  | `CUKY(5)` | Currency as Limit Characteristic |
| `FreeDefinedMonitoringAttribute` |  | |  |  | `CHAR(10)` | Monitoring Unit |
| `InternalOrganizationalCenter` |  | |  |  | `CHAR(10)` | Internal Organizational Unit |
| `CountryRiskCountry` |  | |  |  | `CHAR(3)` | Relevant Country/Region for Country/Region Risk |
| `LimitValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date of a Limit |
| `LimitValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date of a Limit |
| `LimitUtilizationValidityDate` |  | |  |  | `DATS(8)` | Valid-From Date of the Limit Utilization |
| `CounterpartyLimitIsLocked` |  | |  |  | `CHAR(1)` | Limit is locked |
| `IntLimitSpecAmountInDspCrcy` |  | |  |  | `CURR(17)` | Internal Limit Specification Amount |
| `IntInterimLimitAmountInDspCrcy` |  | |  |  | `CURR(17)` | Internal Interim Limit Amount |
| `ExtLimitSpecAmountInDspCrcy` |  | |  |  | `CURR(17)` | External Limit Specification Amount |
| `ExtInterimLimitAmountInDspCrcy` |  | |  |  | `CURR(17)` | External Interim Limit Amount |
| `IntLimitTransfAmountInDspCrcy` |  | |  |  | `CURR(17)` | Internal Limit Transfer Amount |
| `ExtLimitTransfAmountInDspCrcy` |  | |  |  | `CURR(17)` | External Limit Transfer Amount |
| `IntLimitAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Internal Limit Amount |
| `ExtLimitAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | External Limit Amount |
| `LimitUtilznAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Limit Amount Utilized: Totals Record |
| `FreeIntLimitAmountInDspCrcy` |  | |  | `cast ( ( IntLimitAmountInDisplayCrcy - LimitUtilznAmountInDisplayCrcy ) as ftr_cra_free_int_limit_amount )` | `CURR(17)` | Free Internal Limit Amount |
| `FreeExtLimitAmountInDspCrcy` |  | |  | `cast ( ( ExtLimitAmountInDisplayCrcy - LimitUtilznAmountInDisplayCrcy ) as ftr_cra_free_ext_limit_amount )` | `CURR(17)` | Free External Limit Amount |
| `CtptyLmtWrngThldAmtInDspCrcy` |  | |  | `cast( case _LimitType.CtptyLmtWrngThresholdCategory when '1' then cast( cast( CriticalLimitUtilznPercent as abap.d34n ) / cast(100 as abap.d34n ) as abap.dec(6,5) ) * ( IntLimitAmountInDisplayCrcy ) when '2' then ( ExtLimitAmountInDisplayCrcy ) else 0 end as ftr_cra_warning_thld_amt )` | `CURR(17)` | Warning Threshold |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CtptyLmtWrngThresholdCategory` |  | | `_LimitType` | `CtptyLmtWrngThresholdCategory` | `NUMC(1)` | Early Warning Control |
| `_UtilznDeterminationDate` | | ✓ | | | | |
| `_LmtUtilznBase` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |
| `_LimitType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_ProductGroupText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UtilznDeterminationDate` | `I_CalendarDate` | [1..1] |
| `_LmtUtilznBase` | `I_TrsyCtptyLmtUtilznBase` | [1..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLIMITOVERVIEWCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLIMITOVERVIEWCUBE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'ITRSYCTPTYLMTOVC',
               compiler.compareFilter: true,
               preserveKey: true,
               buffering.status: #SWITCHED_OFF }

@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #NOT_REQUIRED }

@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations:true }

@ObjectModel: { representativeKey: 'LmtCharacteristicsRecordNumber',
                usageType.dataClass: #MIXED,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #L,
                supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ],
                modelingPattern: #ANALYTICAL_CUBE }

@VDM.viewType: #COMPOSITE

@EndUserText.label: 'Treasury Counterparty Limit Overview - Cube'
define view I_TrsyCtptyLimitOverviewCube
  with parameters
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst
  as select from I_TrsyCtptyTotalLmtUtilznInDC( P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                                P_ExchangeRateType: $parameters.P_ExchangeRateType )                              
  association[1..1] to I_CalendarDate as _UtilznDeterminationDate on $projection.LimitUtilznDeterminationDate = _UtilznDeterminationDate.CalendarDate     
  association[1..1] to I_TrsyCtptyLmtUtilznBase as _LmtUtilznBase on $projection.LimitUtilizationBase = _LmtUtilznBase.LimitUtilizationBase
  association[1..1] to I_Currency as _DisplayCurrency on $projection.DisplayCurrency = _DisplayCurrency.Currency  
  association[1..1] to I_TreasuryPortfolio as _Portfolio on $projection.CompanyCode = _Portfolio.CompanyCode and $projection.Portfolio = _Portfolio.Portfolio                                      
{
      @ObjectModel.foreignKey.association: '_LimitType'
  key LimitType,
      @ObjectModel.foreignKey.association: '_UtilznDeterminationDate'
  key LimitUtilznDeterminationDate,
      @ObjectModel.foreignKey.association: '_LmtUtilznBase'
  key LimitUtilizationBase,
  key LmtCharacteristicsRecordNumber,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association:'_BusinessPartner'
      BusinessPartner,
      @ObjectModel.text.association: '_ProductGroupText'
      LimitProductGroup,
      @ObjectModel.foreignKey.association: '_Portfolio'
      Portfolio,
      CharacteristicCurrency,
      FreeDefinedMonitoringAttribute,
      InternalOrganizationalCenter,
      CountryRiskCountry,
      LimitValidityStartDate,
      LimitValidityEndDate,
      LimitUtilizationValidityDate,
      CounterpartyLimitIsLocked,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      IntLimitSpecAmountInDspCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      IntInterimLimitAmountInDspCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      ExtLimitSpecAmountInDspCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      ExtInterimLimitAmountInDspCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      IntLimitTransfAmountInDspCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      ExtLimitTransfAmountInDspCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      IntLimitAmountInDisplayCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      ExtLimitAmountInDisplayCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      LimitUtilznAmountInDisplayCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast ( ( IntLimitAmountInDisplayCrcy - LimitUtilznAmountInDisplayCrcy )  as ftr_cra_free_int_limit_amount )    as FreeIntLimitAmountInDspCrcy,       
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast ( ( ExtLimitAmountInDisplayCrcy - LimitUtilznAmountInDisplayCrcy )  as ftr_cra_free_ext_limit_amount )    as FreeExtLimitAmountInDspCrcy,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast( case _LimitType.CtptyLmtWrngThresholdCategory
              when '1' then  cast( cast( CriticalLimitUtilznPercent as abap.d34n ) / cast(100 as abap.d34n )  as abap.dec(6,5) )
                              *  ( IntLimitAmountInDisplayCrcy ) 
              when '2' then  ( ExtLimitAmountInDisplayCrcy  ) 
              else 0
            end as ftr_cra_warning_thld_amt ) as CtptyLmtWrngThldAmtInDspCrcy,
      @Semantics.currencyCode: true
      DisplayCurrency,
      _LimitType.CtptyLmtWrngThresholdCategory,
      _LimitType,
      _CompanyCode,
      _BusinessPartner,
      _ProductGroupText,
      _UtilznDeterminationDate,
      _LmtUtilznBase,
      _DisplayCurrency,
      _Portfolio
}

where
  (
       LimitUtilznDeterminationDate = LimitUtilizationValidityDate
    or LimitUtilizationValidityDate is null
  )
```
