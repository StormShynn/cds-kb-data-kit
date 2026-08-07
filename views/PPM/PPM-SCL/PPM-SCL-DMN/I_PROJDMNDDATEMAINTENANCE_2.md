---
name: I_PROJDMNDDATEMAINTENANCE_2
description: Projdmnddatemaintenance 2
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDDATEMAINTENANCE_2

**Projdmnddatemaintenance 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandDateMaintenance` | ✓ | |  | `cast( substring( domvalue_l, 1, 2 ) as tv_dmnd_date_maint preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ProjectDemandDateMaintText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Demand Date Maintenance'
@Search.searchable: true

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}

@ObjectModel: {
   sapObjectNodeType.name: 'ProjectDemandDateMaintenance',
   semanticKey:       ['ProjectDemandDateMaintenance'],
   representativeKey: 'ProjectDemandDateMaintenance',
   dataCategory:       #VALUE_HELP,
   resultSet.sizeCategory: #XS,
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
   usageType: { 
     serviceQuality:  #A,
     dataClass:       #META,
     sizeCategory:    #S
   }
}

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type:  #PUBLIC_LOCAL_API
}

@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions:true
}

define root view entity I_ProjDmndDateMaintenance_2 as select from dd07l
composition [0..*] of I_ProjDmndDateMaintText_2 as _ProjectDemandDateMaintText
{

      @ObjectModel.text.association: '_ProjectDemandDateMaintText'
  key cast( substring( domvalue_l, 1, 2 ) as tv_dmnd_date_maint preserving type ) as ProjectDemandDateMaintenance,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                                                 as DomainValue,

      _ProjectDemandDateMaintText
}
where
      domname  = 'DMND_DATE_MAINT'
  and as4local = 'A'
```
