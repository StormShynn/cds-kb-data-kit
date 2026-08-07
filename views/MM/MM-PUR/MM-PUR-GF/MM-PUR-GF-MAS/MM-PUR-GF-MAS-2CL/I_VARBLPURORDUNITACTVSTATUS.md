---
name: I_VARBLPURORDUNITACTVSTATUS
description: Varblpurordunitactvstatus
app_component: MM-PUR-GF-MAS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-GF
  - interface-view
  - status
  - component:MM-PUR-GF-MAS-2CL
  - lob:Sourcing & Procurement
---
# I_VARBLPURORDUNITACTVSTATUS

**Varblpurordunitactvstatus**

| Property | Value |
|---|---|
| App Component | `MM-PUR-GF-MAS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `VarblPurOrdUnitIsActive` | ✓ | |  | `cast( dd07l.domvalue_l as vabme )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVARPOUNITACTSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'VarblPurOrdUnitIsActive'
@ObjectModel.sapObjectNodeType.name: 'VarblPurOrdUnitStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Variable PO Unit Active Status'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
define root view I_VarblPurOrdUnitActvStatus
  as select from dd07l
  composition [0..*] of I_VarblPurOrdUnitActvStatusTxt as _Text
{
      @ObjectModel.text.association: '_Text'  
      @Search.ranking: #HIGH 
  key cast( dd07l.domvalue_l as vabme ) as VarblPurOrdUnitIsActive,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW  
      dd07l.domvalue_l                  as DomainValue,
      @Search.ranking: #LOW
      _Text
}
where
      dd07l.domname  = 'VABME'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
