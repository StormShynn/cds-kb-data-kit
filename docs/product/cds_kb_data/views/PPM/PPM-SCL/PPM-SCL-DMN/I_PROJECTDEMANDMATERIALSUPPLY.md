---
name: I_PROJECTDEMANDMATERIALSUPPLY
description: "Projectdemandmaterialsupply"
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
  - material
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Material
  - bo:Project
---
# I_PROJECTDEMANDMATERIALSUPPLY

**Projectdemandmaterialsupply**

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
| `ProjDemandMaterialSupplyUUID` | ✓ | |  |  |  |  |
| `ProjectDemandMaterialUUID` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `ProjectDemandRequirementPlan` |  | |  |  |  |  |
| `ProjDmndPlndIndepRqmtItem` |  | |  |  |  |  |
| `ProjectDemandReservation` |  | |  |  |  |  |
| `ProjectDemandReservationItem` |  | |  |  |  |  |
| `ProjectDemandHasReservation` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `I_ProjectDemand` | [1..1] |
| `_Material` | `I_ProjectDemandMaterial` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDMATLSUP',
    compiler.compareFilter: true, 
    preserveKey:true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   sapObjectNodeType:{name: 'DemandMaterialSupply'},
   semanticKey:       [ 'PurchaseRequisition' ],
   representativeKey: 'ProjDemandMaterialSupplyUUID',
   usageType: {
     serviceQuality:  #A,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   }
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Supply Data of Material Demand'

define view I_ProjectDemandMaterialSupply
  as select from R_ProjectDemandMaterialSupply
  association [1..1] to I_ProjectDemand         as _Root     on $projection.ProjectDemandUUID = _Root.ProjectDemandUUID
  association [1..1] to I_ProjectDemandMaterial as _Material on $projection.ProjectDemandMaterialUUID = _Material.ProjectDemandMaterialUUID
{

  key ProjDemandMaterialSupplyUUID as ProjDemandMaterialSupplyUUID,

      ProjectDemandMaterialUUID    as ProjectDemandMaterialUUID,

      ProjectDemandUUID            as ProjectDemandUUID,

      PurchaseRequisition          as PurchaseRequisition,

      PurchaseRequisitionItem      as PurchaseRequisitionItem,
      
      ProjectDemandRequirementPlan as ProjectDemandRequirementPlan,
      
      ProjDmndPlndIndepRqmtItem    as ProjDmndPlndIndepRqmtItem,
      
      ProjectDemandReservation     as ProjectDemandReservation,
      
      ProjectDemandReservationItem as ProjectDemandReservationItem,
      
      ProjectDemandHasReservation  as ProjectDemandHasReservation,

      @Semantics.user.createdBy: true
      CreatedByUser                as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime             as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser            as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime           as LastChangeDateTime,

      _Material,
      _Root

}
```
