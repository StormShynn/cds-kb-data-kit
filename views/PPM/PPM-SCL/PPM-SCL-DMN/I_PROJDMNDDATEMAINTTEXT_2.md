---
name: I_PROJDMNDDATEMAINTTEXT_2
description: Projdmnddatemainttext 2
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
  - text
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDDATEMAINTTEXT_2

**Projdmnddatemainttext 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `ProjectDemandDateMaintenance` | ✓ | |  | `cast( substring( domvalue_l, 1, 2 ) as tv_dmnd_date_maint preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `ProjDemandDateMaintenanceText` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |
| `_ProjectDemandDateMaintenance` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Demand Date Maintenance - Text'
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL
}

@Metadata: {
  ignorePropagatedAnnotations: true
//  allowExtensions:true
}

@Search.searchable: true

@ObjectModel: {
   sapObjectNodeType.name: 'ProjectDemandDateMaintText',
   semanticKey:       ['ProjectDemandDateMaintenance','Language'],
   representativeKey: 'ProjectDemandDateMaintenance',
   dataCategory:       #TEXT,
   resultSet.sizeCategory: #XS,
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ],

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

define view entity I_ProjDmndDateMaintText_2
  as select from dd07t
  association        to parent I_ProjDmndDateMaintenance_2 as _ProjectDemandDateMaintenance on $projection.ProjectDemandDateMaintenance = _ProjectDemandDateMaintenance.ProjectDemandDateMaintenance
  association [0..1] to I_Language                         as _Language                     on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                           as Language,

      @ObjectModel.foreignKey.association: '_ProjectDemandDateMaintenance'
      @ObjectModel.text.element: ['ProjDemandDateMaintenanceText']
  key cast( substring( domvalue_l, 1, 2 ) as tv_dmnd_date_maint preserving type ) as ProjectDemandDateMaintenance,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                            as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                                      as ProjDemandDateMaintenanceText,

      _ProjectDemandDateMaintenance,
      _Language

}
where
      domname  = 'DMND_DATE_MAINT'
  and as4local = 'A'
```
