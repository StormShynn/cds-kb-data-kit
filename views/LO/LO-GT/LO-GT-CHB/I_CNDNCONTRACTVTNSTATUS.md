---
name: I_CNDNCONTRACTVTNSTATUS
description: Cndncontractvtnstatus
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
  - contract
  - status
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRACTVTNSTATUS

**Cndncontractvtnstatus**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CndnContrActvtnStatus` | `cast( dd07l.domvalue_l as wcb_cc_state )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Condition Contract Activation Status'
@AccessControl: { 
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel:{
  sapObjectNodeType.name: 'CndnContrActivationStatus',
  dataCategory: #VALUE_HELP,
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CndnContrActvtnStatus',
  supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL, 
  technicalName: 'ICCACTSTS'
}   
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrActvtnStatus
  as select from dd07l 
  
  composition [0..*] of I_CndnContrActvtnStatusText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wcb_cc_state )               as CndnContrActvtnStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      
      /* Associations */
      _Text
} 
where dd07l.domname  = 'WCB_CC_STATE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
