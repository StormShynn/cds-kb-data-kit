---
name: I_PROJECTDEMANDSTATUS
description: "Projectdemandstatus"
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
  - project
  - status
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDSTATUS

**Projectdemandstatus**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandStatus` | ✓ | |  | `status` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@Analytics: {
        dataCategory: #DIMENSION,
        internalName: #LOCAL,
        dataExtraction.enabled: true
        }

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type:  #PUBLIC_LOCAL_API
}

@AbapCatalog: {
    compiler.compareFilter: true,
    dataMaintenance: #RESTRICTED,
    sqlViewName: 'IPRJDMNDSTATUS'
}

@AccessControl.authorizationCheck: #NOT_REQUIRED


@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
   semanticKey:       [ 'ProjectDemandStatus' ],
   representativeKey: 'ProjectDemandStatus',
   sapObjectNodeType.name: 'ProjectDemandStatus',
   usageType: {
     serviceQuality:  #A,
     dataClass:       #CUSTOMIZING,
     sizeCategory:    #S
   },
   resultSet.sizeCategory: #XS

}

@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Project Demand Status'

define root view I_ProjectDemandStatus
  as select from dmnd_proj_status as value
  composition [0..*] of I_ProjectDemandStatusText as _Text
{
        @ObjectModel.text.association: '_Text'
  key   status as ProjectDemandStatus,
        _Text
}; //  where status <>  '00100' ; // Filtered on release 2008
```
