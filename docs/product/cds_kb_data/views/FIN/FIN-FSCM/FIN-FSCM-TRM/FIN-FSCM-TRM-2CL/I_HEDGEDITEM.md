---
name: I_HEDGEDITEM
description: "Hedgeditem"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - item-level
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_HEDGEDITEM

**Hedgeditem**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HedgedItemUUID` | ✓ | |  | `cast(hitem.os_guid as ftr_gen_hitem preserving type)` |  |  |
| `HedgedItem` |  | |  | `cast(hitem.hitem_number as ftr_gen_hitem_number preserving type)` |  |  |
| `HedgedItemFiscalYear` |  | |  | `cast(hitem.fiscal_year as ftr_gen_hitem_fiscal_year preserving type)` |  |  |
| `CompanyCode` |  | |  | `cast(hitem.tr_acc_code as bukrs preserving type)` |  |  |
| `TreasuryValuationArea` |  | |  | `cast(hitem.valuation_area as tpm_val_area preserving type)` |  |  |
| `HedgedItemName` |  | |  | `cast(hitem.description as ftr_gen_hitem_descr preserving type)` |  |  |
| `HedgingRelationshipUUID` |  | |  | `cast(hitem.hrel_oid as ftr_gen_hrel_uuid preserving type)` |  |  |
| `_HedgingRelationship` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_TreasuryValuationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HedgingRelationship` | `I_HedgingRelationship` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_TreasuryValuationArea` | `I_TreasuryValuationArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #CHECK // according to XLS / DCL
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IHEDGEDITEM'
// @Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Hedged Item'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'HedgedItemUUID'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true  
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release

@Search.searchable: true

define view entity I_HedgedItem
  as select from thxt_hitem as hitem
  association [1..1] to I_HedgingRelationship       as _HedgingRelationship on $projection.HedgingRelationshipUUID = _HedgingRelationship.HedgingRelationshipUUID
  association [0..1] to I_CompanyCode               as _CompanyCode         on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode  as _FiscalYear          on $projection.HedgedItemFiscalYear = _FiscalYear.FiscalYear and
                                                                               $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_TreasuryValuationArea     as _TreasuryValuationArea       on $projection.TreasuryValuationArea = _TreasuryValuationArea.TreasuryValuationArea                                                                               
{
  key cast(hitem.os_guid          as ftr_gen_hitem             preserving type) as HedgedItemUUID, 
     @ObjectModel.text.element: [ 'HedgedItemName']
     @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
     cast(hitem.hitem_number      as ftr_gen_hitem_number      preserving type) as HedgedItem,
     @ObjectModel.foreignKey.association: '_FiscalYear'
     cast(hitem.fiscal_year       as ftr_gen_hitem_fiscal_year preserving type) as HedgedItemFiscalYear,
     @ObjectModel.foreignKey.association: '_CompanyCode'
     cast(hitem.tr_acc_code       as bukrs                     preserving type) as CompanyCode,
     @ObjectModel.foreignKey.association: '_TreasuryValuationArea'
     cast(hitem.valuation_area    as tpm_val_area              preserving type) as TreasuryValuationArea,
     @Semantics.text: true
     cast(hitem.description       as ftr_gen_hitem_descr       preserving type) as HedgedItemName,
     @ObjectModel.foreignKey.association: '_HedgingRelationship'
     cast(hitem.hrel_oid          as ftr_gen_hrel_uuid         preserving type) as HedgingRelationshipUUID, 
      
     
  // exposed associations:
  _HedgingRelationship,
  _CompanyCode,   
  _FiscalYear,
  _TreasuryValuationArea
}
```
