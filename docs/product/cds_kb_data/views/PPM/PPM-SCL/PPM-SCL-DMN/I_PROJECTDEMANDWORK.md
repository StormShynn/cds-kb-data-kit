---
name: I_PROJECTDEMANDWORK
description: "Projectdemandwork"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PROJECTDEMANDWORK

**Projectdemandwork**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandWorkUUID` | ✓ | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `ProjDmndAssgmtStatus` |  | |  |  |  |  |
| `ProjectElementWorkItem` |  | |  |  |  |  |
| `ProjDmndBillingControlCategory` |  | |  |  |  |  |
| `ProjDmndRequestedDeliveryOrg` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_ResourceAssignment` | | ✓ | | | | |
| `_ProjDmndRsceReq` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenterActType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `I_ProjectDemand` | [1..1] |
| `_ResourceAssignment` | `I_ProjDmndResourceAssignment` | [0..*] |
| `_ProjDmndRsceReq` | `I_ProjectDemandResourceRequest` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDWORK',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   semanticKey:       ['ActivityType' ],
   representativeKey: 'ProjectDemandWorkUUID',
   sapObjectNodeType.name: 'DemandResource',
   usageType: {
     serviceQuality:  #B,
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
@EndUserText.label: 'Project Demand for Resource'

define view I_ProjectDemandWork
  as select from R_ProjectDemandWork

  association [1..1] to I_ProjectDemand                as _Root               on  $projection.ProjectDemandUUID = _Root.ProjectDemandUUID
  association [0..*] to I_ProjDmndResourceAssignment   as _ResourceAssignment on  $projection.ProjectDemandWorkUUID = _ResourceAssignment.ProjectDemandWorkUUID
  association [0..*] to I_ProjectDemandResourceRequest as _ProjDmndRsceReq    on  $projection.ProjectDemandWorkUUID = _ProjDmndRsceReq.ProjectDemandWorkUUID
  association [0..*] to I_CostCenter                   as _CostCenter         on  $projection.CostCenter = _CostCenter.CostCenter

{

  key ProjectDemandWorkUUID          as ProjectDemandWorkUUID,
      ProjectDemandUUID              as ProjectDemandUUID,
      CostCenter                     as CostCenter,
      ActivityType                   as ActivityType,
      ProjDmndAssgmtStatus           as ProjDmndAssgmtStatus,
      ProjectElementWorkItem         as ProjectElementWorkItem,
      ProjDmndBillingControlCategory as ProjDmndBillingControlCategory,
      ProjDmndRequestedDeliveryOrg   as ProjDmndRequestedDeliveryOrg,
      //ProjDmndAssgmtIsInconsistent   as ProjDmndAssgmtIsInconsistent,

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
      _ResourceAssignment,
      _ProjDmndRsceReq,

      _CostCenterActType,
      _CostCenter

}
```
