---
name: I_HEDGINGRELATIONSHIP
description: Hedgingrelationship
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_HEDGINGRELATIONSHIP

**Hedgingrelationship**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HedgingRelationshipUUID` | ✓ | |  | `cast(hrel.os_guid as ftr_gen_hrel_uuid preserving type)` |  |  |
| `HedgingRelationship` |  | |  | `hrel_number` |  |  |
| `HedgingRelationshipFiscalYear` |  | |  | `cast(hrel.fiscal_year as ftr_gen_hrel_fiscal_year preserving type)` |  |  |
| `HedgingRelationshipName` |  | |  | `cast(hrel.description as tpm_hrel_descr preserving type)` |  |  |
| `CompanyCode` |  | |  | `cast(hrel.tr_acc_code as bukrs preserving type)` |  |  |
| `TreasuryValuationArea` |  | |  | `cast(hrel.valuation_area as tpm_val_area preserving type)` |  |  |
| `HedgingRelationshipStatus` |  | |  | `cast(hrel.hrel_status as ftr_gen_hrel_status preserving type)` |  |  |
| `HedgingProfile` |  | |  | `cast(hrel.hrel_profile as ftr_gen_hdgg_profile preserving type)` |  |  |
| `TrsyHedgingRelshpRiskCurrency` |  | |  | `cast(hrel.hrel_risk_curr as ftr_gen_hrel_risk_currency preserving type)` |  |  |
| `TrsyCostHdggRsrvCalcRule` |  | |  | `cast(hrel.hres_calc_rule as ftr_gen_cost_hres_calc_rule preserving type)` |  |  |
| `HedgingArea` |  | |  | `hrel_hedging_area` |  |  |
| `FinNetOpenExposureSnapshot` |  | |  | `hrel_snapshot_id` |  |  |
| `TrsyHdggRelshpDsgntnSplitID` |  | |  | `hrel_split_id` |  |  |
| `TrsyHdggRelshpBalShtRecgnDate` |  | |  | `cast(hrel.hrel_bal_sheet_rec_date as ftr_gen_hrel_bal_sht_recgn_dte preserving type)` |  |  |
| `TrsyAltvReclassificationDate` |  | |  | `cast(hrel.hrel_reclass_st_date as ftr_gen_hrel_altv_reclass_date preserving type)` |  |  |
| `_TrsyHedgingRelshpProfile` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_TreasuryValuationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrsyHedgingRelshpProfile` | `I_TrsyHedgingRelshpProfile` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_TreasuryValuationArea` | `I_TreasuryValuationArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #CHECK // according to XLS / DCL
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IHEDGINGREL'
// @Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Hedging Relationship'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'HedgingRelationshipUUID'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true  
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release


define view entity I_HedgingRelationship
  as select from thxt_hrel as hrel

  association[0..1] to I_TrsyHedgingRelshpProfile as _TrsyHedgingRelshpProfile on $projection.HedgingProfile = _TrsyHedgingRelshpProfile.HedgingProfile
  association [0..1] to I_CompanyCode as _CompanyCode                          on $projection.CompanyCode                = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode  as _FiscalYear          on $projection.HedgingRelationshipFiscalYear = _FiscalYear.FiscalYear and
                                                                               $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_TreasuryValuationArea    as _TreasuryValuationArea       on $projection.TreasuryValuationArea = _TreasuryValuationArea.TreasuryValuationArea                                                                                
{
  key cast(hrel.os_guid                 as ftr_gen_hrel_uuid              preserving type) as HedgingRelationshipUUID, 
      @ObjectModel.text.element: [ 'HedgingRelationshipName']
      hrel.hrel_number                                                                     as HedgingRelationship, //HedgingRelationshipNumber,
      @ObjectModel.foreignKey.association: '_FiscalYear'      
      cast(hrel.fiscal_year             as ftr_gen_hrel_fiscal_year       preserving type) as HedgingRelationshipFiscalYear, 
      @Semantics.text: true
      cast(hrel.description             as tpm_hrel_descr                 preserving type) as HedgingRelationshipName,
      @ObjectModel.foreignKey.association: '_CompanyCode'      
      cast(hrel.tr_acc_code             as bukrs                          preserving type) as CompanyCode,
      @ObjectModel.foreignKey.association: '_TreasuryValuationArea'
      cast(hrel.valuation_area          as tpm_val_area                   preserving type) as TreasuryValuationArea,
      cast(hrel.hrel_status             as ftr_gen_hrel_status            preserving type) as HedgingRelationshipStatus,
      cast(hrel.hrel_profile            as ftr_gen_hdgg_profile           preserving type) as HedgingProfile,
      cast(hrel.hrel_risk_curr          as ftr_gen_hrel_risk_currency     preserving type) as TrsyHedgingRelshpRiskCurrency,
      cast(hrel.hres_calc_rule          as ftr_gen_cost_hres_calc_rule    preserving type) as TrsyCostHdggRsrvCalcRule,
      hrel.hrel_hedging_area                                                               as HedgingArea,
      hrel.hrel_snapshot_id                                                                as FinNetOpenExposureSnapshot,
      hrel.hrel_split_id                                                                   as TrsyHdggRelshpDsgntnSplitID, 
      cast(hrel.hrel_bal_sheet_rec_date as ftr_gen_hrel_bal_sht_recgn_dte preserving type) as TrsyHdggRelshpBalShtRecgnDate,
      cast(hrel.hrel_reclass_st_date    as ftr_gen_hrel_altv_reclass_date preserving type) as TrsyAltvReclassificationDate,

      _TrsyHedgingRelshpProfile,
      _CompanyCode,
      _FiscalYear,
      _TreasuryValuationArea
}
```
