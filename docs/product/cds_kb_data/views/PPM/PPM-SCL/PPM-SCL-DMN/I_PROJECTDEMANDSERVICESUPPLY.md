---
name: I_PROJECTDEMANDSERVICESUPPLY
description: "Projectdemandservicesupply"
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
  - service
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDSERVICESUPPLY

**Projectdemandservicesupply**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandServiceSupplyUUID` | ✓ | |  |  |  |  |
| `ProjectDemandServiceUUID` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_Service` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `I_ProjectDemand` | [1..1] |
| `_Service` | `I_ProjectDemandService` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDSRVCSUP',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   sapObjectNodeType:{name: 'ServiceSupply'},
   semanticKey:       [ 'PurchaseRequisition' ],
   representativeKey: 'ProjectDemandServiceSupplyUUID',
   usageType: {
     serviceQuality:  #A,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   }
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Supply Data of Service Demand'

define view I_ProjectDemandServiceSupply
  as select from R_ProjectDemandServiceSupply

  association [1..1] to I_ProjectDemand        as _Root    on $projection.ProjectDemandUUID = _Root.ProjectDemandUUID
  association [1..1] to I_ProjectDemandService as _Service on $projection.ProjectDemandServiceUUID = _Service.ProjectDemandServiceUUID
{

  key ProjectDemandServiceSupplyUUID as ProjectDemandServiceSupplyUUID,
      ProjectDemandServiceUUID       as ProjectDemandServiceUUID,
      ProjectDemandUUID              as ProjectDemandUUID,

      PurchaseRequisition            as PurchaseRequisition,
      PurchaseRequisitionItem        as PurchaseRequisitionItem,

      @Semantics.user.createdBy: true
      CreatedByUser                  as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime               as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser              as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime             as LastChangeDateTime,

      _Service,
      _Root

}
```
