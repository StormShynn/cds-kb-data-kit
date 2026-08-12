---
name: I_PROJECTDEMANDRESOURCEREQUEST
description: "Projectdemandresourcerequest"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDRESOURCEREQUEST

**Projectdemandresourcerequest**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjDmndResourceRequestUUID` | ✓ | |  |  |  |  |
| `ProjectDemandWorkUUID` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `ProjectDemandRequestedResource` |  | |  |  |  |  |
| `ProjDmndStfngInstructionText` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_Work` | | ✓ | | | | |
| `_ProjDmndRsceReqDistr` | | ✓ | | | | |
| `_PersonWorkAgrmt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `I_ProjectDemand` | [1] |
| `_Work` | `I_ProjectDemandWork` | [1] |
| `_ProjDmndRsceReqDistr` | `I_ProjDmndRsceReqDistribution` | [0..*] |
| `_PersonWorkAgrmt` | `I_PersonWorkAgreement_1` | [1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDRSCER',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   representativeKey: 'ProjDmndResourceRequestUUID',
   sapObjectNodeType.name: 'DemandResourceRequest',
   usageType: {
     serviceQuality:  #A,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   }
}

@Analytics: {
  dataExtraction: { 
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Resource Request for Resource Demand'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ] 

define view I_ProjectDemandResourceRequest
  as select from R_ProjectDemandResourceRequest

  association [1]    to I_ProjectDemand               as _Root                 on $projection.ProjectDemandUUID = _Root.ProjectDemandUUID
  association [1]    to I_ProjectDemandWork           as _Work                 on $projection.ProjectDemandWorkUUID = _Work.ProjectDemandWorkUUID
  association [0..*] to I_ProjDmndRsceReqDistribution as _ProjDmndRsceReqDistr on $projection.ProjDmndResourceRequestUUID = _ProjDmndRsceReqDistr.ProjDmndResourceRequestUUID

  association [1]    to I_PersonWorkAgreement_1       as _PersonWorkAgrmt      on $projection.ProjectDemandRequestedResource = _PersonWorkAgrmt.PersonWorkAgreement

{
  key ProjDmndResourceRequestUUID    as ProjDmndResourceRequestUUID,
      ProjectDemandWorkUUID          as ProjectDemandWorkUUID,
      ProjectDemandUUID              as ProjectDemandUUID,

      @ObjectModel.foreignKey.association: '_PersonWorkAgrmt'
      ProjectDemandRequestedResource as ProjectDemandRequestedResource,

      ProjDmndStfngInstructionText   as ProjDmndStfngInstructionText,

      @Semantics.user.createdBy: true
      CreatedByUser                  as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime               as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser              as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime             as LastChangeDateTime,

      /* Associations */
      _Root,
      _Work,
      _ProjDmndRsceReqDistr,

      /* External Associations */
      _PersonWorkAgrmt
}
```
