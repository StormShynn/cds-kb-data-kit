---
name: I_FININSTRUMENTSTATUS
description: "Fininstrumentstatus"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_FININSTRUMENTSTATUS

**Fininstrumentstatus**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialInstrumentStatus` | ✓ | |  | `cast( dd07l.domvalue_l as tb_saktiv )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinInstrumentStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AbapCatalog.sqlViewName: 'IFININSTRSTATUS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Financial Instrument Status'
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FinancialInstrumentStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'FinancialInstrumentStatus'

define view I_FinInstrumentStatus 
  as select from dd07l
  association [0..*] to I_FinInstrumentStatusText as _Text on $projection.FinancialInstrumentStatus = _Text.FinancialInstrumentStatus
{
  @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as tb_saktiv ) as FinancialInstrumentStatus,
  
  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  dd07l.domvalue_l                          as DomainValue,
  
  _Text
}
where
      dd07l.domname  = 'T_SAKTIV'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
