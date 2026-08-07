---
name: I_CNDNCONTRSETTLMTCAL
description: Cndncontrsettlmtcal
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRSETTLMTCAL

**Cndncontrsettlmtcal**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConditionContract` |  | |  | `}] } key ConditionContract` |
| `SettlmtDate` | ✓ | |  |  |
| `SettlmtDateSequentialID` | ✓ | |  |  |
| `SettlmtDateCat` |  | |  |  |
| `CndnContrCalItemUUID` |  | |  |  |
| `RefSettlmtDate` |  | |  |  |
| `RefSettlmtDateSequentialID` |  | |  |  |
| `SettlmtExecutionDate` |  | |  |  |
| `BusVolDateFrom` |  | |  |  |
| `BusVolDateTo` |  | |  |  |
| `SettlmtDateUsage` |  | |  |  |
| `CndnContrSourceCalItemUUID` |  | |  |  |
| `_SettlmtDateCat` | | ✓ | | |
| `_SettlmtDateUsage` | | ✓ | | |
| `_ConditionContract` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDateCat` | `I_SettlmtDateCat` | [0..1] |
| `_SettlmtDateUsage` | `I_SettlmtDateUsage` | [0..1] |
| `_ConditionContract` | `I_ConditionContract` | [1..1] |

## Source Code

```abap
@VDM: { 
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
// RepresentativeKey cannot be defined because there is no foreign-key association for key field SettlmtDate
//   representativeKey: 'SettlmtDateSequentialID',
   modelingPattern: #NONE,
   supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XXL
   }
} 
@Analytics: {
// DataCategory #DIMENSION cannot be assigned because there is no foreign-key association for key field SettlmtDate
//    dataCategory: #DIMENSION,
//    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@EndUserText.label: 'Settlmt Calendar of Condition Contract'
@Metadata.ignorePropagatedAnnotations: true
//@Metadata.allowExtensions:true

define view entity I_CndnContrSettlmtCal
  as select from R_CndnContrSettlmtCal

  association [0..1] to I_SettlmtDateCat    as _SettlmtDateCat    on $projection.SettlmtDateCat = _SettlmtDateCat.SettlmtDateCat
  association [0..1] to I_SettlmtDateUsage  as _SettlmtDateUsage  on $projection.SettlmtDateUsage = _SettlmtDateUsage.SettlmtDateUsage
  association [1..1] to I_ConditionContract as _ConditionContract on $projection.ConditionContract = _ConditionContract.ConditionContract
{

      @ObjectModel.foreignKey.association: '_ConditionContract'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
  key ConditionContract,
  key SettlmtDate,
  key SettlmtDateSequentialID,
      @ObjectModel.foreignKey.association: '_SettlmtDateCat'
      SettlmtDateCat,
      CndnContrCalItemUUID,
      RefSettlmtDate,
      RefSettlmtDateSequentialID,
      SettlmtExecutionDate,
      BusVolDateFrom,
      BusVolDateTo,
      @ObjectModel.foreignKey.association: '_SettlmtDateUsage'
      SettlmtDateUsage,
      CndnContrSourceCalItemUUID,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _ConditionContract,
      _SettlmtDateCat,
      _SettlmtDateUsage

}
```
