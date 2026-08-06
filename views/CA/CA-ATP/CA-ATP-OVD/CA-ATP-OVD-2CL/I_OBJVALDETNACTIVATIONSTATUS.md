---
name: I_OBJVALDETNACTIVATIONSTATUS
description: Objvaldetnactivationstatus
app_component: CA-ATP-OVD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-OVD
  - interface-view
  - status
  - component:CA-ATP-OVD-2CL
  - lob:Cross-Application Components
---
# I_OBJVALDETNACTIVATIONSTATUS

**Objvaldetnactivationstatus**

| Property | Value |
|---|---|
| App Component | `CA-ATP-OVD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ObjValDetnActivationStatus` | `cast ( domvalue_l as ovd_activation_status )` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Activation Status'
@ObjectModel:{
  dataCategory: #VALUE_HELP,
  representativeKey: 'ObjValDetnActivationStatus',
  resultSet.sizeCategory: #XS,
  sapObjectNodeType.name: 'ObjValDetnActivationStatus',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE,
    #VALUE_HELP_PROVIDER
  ],
  usageType:{
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_ObjValDetnActivationStatus
  as select from dd07l
  composition [0..*] of I_ObjValDetnActivationStsText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as ovd_activation_status ) as ObjValDetnActivationStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      domvalue_l                                   as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = 'OVD_ACTIVATION_STATUS'
  and as4local = 'A'
  and as4vers  = '0000'
```
