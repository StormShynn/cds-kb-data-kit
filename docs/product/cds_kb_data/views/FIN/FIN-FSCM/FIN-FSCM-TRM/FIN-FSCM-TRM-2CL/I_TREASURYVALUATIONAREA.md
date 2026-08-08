---
name: I_TREASURYVALUATIONAREA
description: "Treasuryvaluationarea"
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
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYVALUATIONAREA

**Treasuryvaluationarea**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryValuationArea` | ✓ | |  | `valuation_area` |  |  |
| `TreasuryValuationAreaName` |  | |  | `cast(TreasuryValuationArea.val_area_name as ftr_gen_valuation_area_name preserving type)` |  |  |
| `ValuationAreaIsPaying` |  | |  | `paying_val_area` |  |  |
| `AccountingPrinciple` |  | |  | `acc_principle` |  |  |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Treasury Valuation Area'
@ObjectModel.sapObjectNodeType.name: 'TreasuryValuationArea'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'TreasuryValuationArea'
@Analytics.technicalName: 'ITRSRVLTNR'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M 
@Metadata.allowExtensions:true  
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@Search.searchable: true

define view entity I_TreasuryValuationArea 
  as select from trgc_val_area as TreasuryValuationArea
  
 // association [0..1] to I_AccountingPrinciple as _AccountingPrinciple 
 //               on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple
{
      @ObjectModel.text.element: ['TreasuryValuationAreaName']
      @Search : { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key TreasuryValuationArea.valuation_area                                     as TreasuryValuationArea,
      @Semantics.text: true
      @Search : { defaultSearchElement: true, ranking: #LOW }
      cast(TreasuryValuationArea.val_area_name as ftr_gen_valuation_area_name preserving type) as TreasuryValuationAreaName,
       TreasuryValuationArea.paying_val_area                                   as ValuationAreaIsPaying,
       TreasuryValuationArea.acc_principle as AccountingPrinciple   
       
      // _AccountingPrinciple --> wait until I_AccountingPrinciple is C1-released     
      
}
```
