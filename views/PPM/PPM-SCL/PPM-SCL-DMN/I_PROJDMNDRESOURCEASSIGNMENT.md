---
name: I_PROJDMNDRESOURCEASSIGNMENT
description: "Projdmndresourceassignment"
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
# I_PROJDMNDRESOURCEASSIGNMENT

**Projdmndresourceassignment**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjDmndRsceAssgmtUUID` | ✓ | |  |  |  |  |
| `ProjectDemandWorkUUID` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `ProjDmndRsceAssgmt` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtQuantity` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtQuantityUnit` |  | |  |  |  |  |
| `ProjectDemandSupplyDeliveryOrg` |  | |  |  |  |  |
| `ProjectDemandSourceOfSupply` |  | |  |  |  |  |
| `ProjAssgmtLastUpdateSource` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtStartDate` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtEndDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_Work` | | ✓ | | | | |
| `_AssgmtDistribution` | | ✓ | | | | |
| `_RsceAssgmtQuantityUnit` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `I_ProjectDemand` | [1..1] |
| `_Work` | `I_ProjectDemandWork` | [1..1] |
| `_AssgmtDistribution` | `I_ProjDmndRsceAssgmtDistr` | [0..*] |
| `_RsceAssgmtQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement_1` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDRSCEA',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   semanticKey:       [ 'ProjDmndRsceAssgmt' ],
   representativeKey: 'ProjDmndRsceAssgmtUUID',
   sapObjectNodeType.name: 'DemandResourceAssignment',
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
@EndUserText.label: 'Resource Assignment to Rsce Dmnd'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_ProjDmndResourceAssignment
  as select from R_ProjDmndResourceAssignment

  association [1..1] to I_ProjectDemand           as _Root                   on  $projection.ProjectDemandUUID = _Root.ProjectDemandUUID
  association [1..1] to I_ProjectDemandWork       as _Work                   on  $projection.ProjectDemandWorkUUID = _Work.ProjectDemandWorkUUID
  association [0..*] to I_ProjDmndRsceAssgmtDistr as _AssgmtDistribution     on  $projection.ProjDmndRsceAssgmtUUID = _AssgmtDistribution.ProjDmndRsceAssgmtUUID

  association [0..1] to I_UnitOfMeasure           as _RsceAssgmtQuantityUnit on  $projection.ProjDmndRsceAssgmtQuantityUnit        = _RsceAssgmtQuantityUnit.UnitOfMeasure
                                                                             and _RsceAssgmtQuantityUnit.UnitOfMeasureDimension    = 'TIME'
                                                                             and _RsceAssgmtQuantityUnit.SIUnitCnvrsnRateNumerator = 3600
  association [1..1] to I_PersonWorkAgreement_1   as _PersonWorkAgreement    on  $projection.ProjDmndRsceAssgmt = _PersonWorkAgreement.PersonWorkAgreement
{

  key ProjDmndRsceAssgmtUUID         as ProjDmndRsceAssgmtUUID,

      ProjectDemandWorkUUID          as ProjectDemandWorkUUID,

      ProjectDemandUUID              as ProjectDemandUUID,

      @ObjectModel.foreignKey.association:    '_PersonWorkAgreement'
      ProjDmndRsceAssgmt             as ProjDmndRsceAssgmt,

      @Semantics: { quantity : {unitOfMeasure: 'ProjDmndRsceAssgmtQuantityUnit'} }
      ProjDmndRsceAssgmtQuantity     as ProjDmndRsceAssgmtQuantity,

      @ObjectModel.foreignKey.association:    '_RsceAssgmtQuantityUnit'
      ProjDmndRsceAssgmtQuantityUnit as ProjDmndRsceAssgmtQuantityUnit,
      ProjectDemandSupplyDeliveryOrg as ProjectDemandSupplyDeliveryOrg,
      ProjectDemandSourceOfSupply    as ProjectDemandSourceOfSupply,
      ProjAssgmtLastUpdateSource     as ProjAssgmtLastUpdateSource,
      ProjDmndRsceAssgmtStartDate,
      ProjDmndRsceAssgmtEndDate,

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
      _AssgmtDistribution,

      _RsceAssgmtQuantityUnit,
      _PersonWorkAgreement

}
```
