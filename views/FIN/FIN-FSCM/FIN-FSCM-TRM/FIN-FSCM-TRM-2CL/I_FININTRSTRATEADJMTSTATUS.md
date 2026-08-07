---
name: I_FININTRSTRATEADJMTSTATUS
description: "Finintrstrateadjmtstatus"
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
  - status
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FININTRSTRATEADJMTSTATUS

**Finintrstrateadjmtstatus**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinInterestRateAdjmtStatus` | ✓ | |  | `cast( dd07l.domvalue_l as tb_ira_registration_state )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinIntrstRateAdjmtStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AbapCatalog.sqlViewName: 'IFIRATEADJSTAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Fin Interest Rate Adjustment Status'
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FinInterestRateAdjmtStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'FinInterestRateAdjmtStatus'
define view I_FinIntrstRateAdjmtStatus 
  as select from dd07l
  association [0..*] to I_FinIntrstRateAdjmtStatusText as _Text on $projection.FinInterestRateAdjmtStatus = _Text.FinInterestRateAdjmtStatus
{
  @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as tb_ira_registration_state ) as FinInterestRateAdjmtStatus,

  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  dd07l.domvalue_l                                          as DomainValue,
  
  _Text
}
where
      dd07l.domname  = 'T_IRA_REGISTRATION_STATE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
