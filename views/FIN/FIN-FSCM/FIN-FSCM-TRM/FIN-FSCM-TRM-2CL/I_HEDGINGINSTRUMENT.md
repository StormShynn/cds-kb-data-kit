---
name: I_HEDGINGINSTRUMENT
description: Hedginginstrument
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
# I_HEDGINGINSTRUMENT

**Hedginginstrument**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `HedgingInstrumentUUID` | `cast(hinst.os_guid as ftr_gen_hinst preserving type)` |
| `HedgingInstr` | `cast(hinst.hinst_number as ftr_gen_hinst_number preserving type)` |
| `HedgingInstrumentFiscalYear` | `cast(hinst.fiscal_year as ftr_gen_hinst_fiscal_year preserving type)` |
| `CompanyCode` | `cast(hinst.tr_acc_code as bukrs preserving type)` |
| `TreasuryValuationArea` | `cast(hinst.valuation_area as tpm_val_area preserving type)` |
| `HedgingInstrumentName` | `cast(hinst.description as ftr_gen_hinst_descr preserving type)` |
| `HedgingRelationshipUUID` | `cast(hinst.hrel_oid as ftr_gen_hrel_uuid preserving type)` |
| `_HedgingRelationship` | *Association* |
| `_FiscalYear` | *Association* |
| `_CompanyCode` | *Association* |
| `_TreasuryValuationArea` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HedgingRelationship` | `I_HedgingRelationship` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_TreasuryValuationArea` | `I_TreasuryValuationArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #CHECK // according to XLS / DCL
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IHEDGEINST'
// @Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Hedging Instrument'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'HedgingInstrumentUUID'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true  
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release

@Search.searchable: true

define view entity I_HedgingInstrument
  as select from thxt_hinst as hinst

  association [1..1] to I_HedgingRelationship as _HedgingRelationship on $projection.HedgingRelationshipUUID = _HedgingRelationship.HedgingRelationshipUUID
  association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear           on $projection.HedgingInstrumentFiscalYear = _FiscalYear.FiscalYear and
                                                                               $projection.CompanyCode                 = _FiscalYear.CompanyCode
  association [0..1] to I_CompanyCode              as _CompanyCode          on $projection.CompanyCode                 = _CompanyCode.CompanyCode 
  association [0..1] to I_TreasuryValuationArea    as _TreasuryValuationArea       on $projection.TreasuryValuationArea = _TreasuryValuationArea.TreasuryValuationArea                                                                                                                                                     
  
{
   key cast(hinst.os_guid           as ftr_gen_hinst             preserving type) as HedgingInstrumentUUID, 
       @ObjectModel.text.element: [ 'HedgingInstrumentName']
       @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
       cast(hinst.hinst_number      as ftr_gen_hinst_number      preserving type) as HedgingInstr,
       @ObjectModel.foreignKey.association: '_FiscalYear'       
       cast(hinst.fiscal_year       as ftr_gen_hinst_fiscal_year preserving type) as HedgingInstrumentFiscalYear,
       @ObjectModel.foreignKey.association: '_CompanyCode'         
       cast(hinst.tr_acc_code       as bukrs                     preserving type) as CompanyCode,   
     @ObjectModel.foreignKey.association: '_TreasuryValuationArea'       
       cast(hinst.valuation_area    as tpm_val_area              preserving type) as TreasuryValuationArea,
       @Semantics.text: true
       cast(hinst.description       as ftr_gen_hinst_descr       preserving type) as HedgingInstrumentName,
       @ObjectModel.foreignKey.association: '_HedgingRelationship'
       cast(hinst.hrel_oid          as ftr_gen_hrel_uuid         preserving type) as HedgingRelationshipUUID, 
       
       _HedgingRelationship,
       _FiscalYear,
       _CompanyCode,
       _TreasuryValuationArea
}
```
