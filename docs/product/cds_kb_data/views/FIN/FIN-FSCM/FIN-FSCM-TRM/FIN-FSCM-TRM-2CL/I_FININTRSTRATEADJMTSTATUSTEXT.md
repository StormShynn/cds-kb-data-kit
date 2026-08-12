---
name: I_FININTRSTRATEADJMTSTATUSTEXT
description: "Finintrstrateadjmtstatustext"
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
  - text-view
  - text
  - status
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FININTRSTRATEADJMTSTATUSTEXT

**Finintrstrateadjmtstatustext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `FinInterestRateAdjmtStatus` | ✓ | |  | `cast( dd07t.domvalue_l as tb_ira_registration_state )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `FinInterestRateAdjmtStatusName` |  | |  | `cast( dd07t.ddtext as tb_ira_registration_state_name preserving type )` |  |  |
| `_AdjustmentStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AdjustmentStatus` | `I_FinIntrstRateAdjmtStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFIRATEADJSTATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Interest Rate Adjmt Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'FinInterestRateAdjmtStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_FinIntrstRateAdjmtStatusText 
  as select from dd07t
  association [0..1] to I_FinIntrstRateAdjmtStatus as _AdjustmentStatus on $projection.FinInterestRateAdjmtStatus = _AdjustmentStatus.FinInterestRateAdjmtStatus
  association [0..1] to I_Language                 as _Language         on $projection.Language                   = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                      as Language, 
      @ObjectModel.foreignKey.association: '_AdjustmentStatus'
      @ObjectModel.text.element: ['FinInterestRateAdjmtStatusName']
  key cast( dd07t.domvalue_l as tb_ira_registration_state )                  as FinInterestRateAdjmtStatus,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as tb_ira_registration_state_name preserving type ) as FinInterestRateAdjmtStatusName,
      
      _AdjustmentStatus,
      _Language
} 
where dd07t.domname  = 'T_IRA_REGISTRATION_STATE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
