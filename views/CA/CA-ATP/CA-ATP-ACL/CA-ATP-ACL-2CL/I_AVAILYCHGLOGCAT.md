---
name: I_AVAILYCHGLOGCAT
description: "Availychglogcat"
app_component: CA-ATP-ACL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-ACL
  - interface-view
  - component:CA-ATP-ACL-2CL
  - lob:Cross-Application Components
---
# I_AVAILYCHGLOGCAT

**Availychglogcat**

| Property | Value |
|---|---|
| App Component | `CA-ATP-ACL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AvailabilityChangeLogCategory` | ✓ | |  | `cast ( domvalue_l as atpnetchgcategory )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Availability Change Log Category'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@ObjectModel:{
  dataCategory: #VALUE_HELP,
  representativeKey: 'AvailabilityChangeLogCategory',
  resultSet.sizeCategory: #XS,
  sapObjectNodeType.name: 'ATPAvailabilityChangeLogCat',
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
define root view entity I_AvailyChgLogCat as select from dd07l
  composition [0..*] of I_AvailyChgLogCatText as _Text
{
  @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as atpnetchgcategory ) as AvailabilityChangeLogCategory,

      @Consumption.hidden: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      domvalue_l                              as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = 'ATPNETCHGCATEGORY'
  and as4local = 'A'
  and as4vers  = '0000'
```
