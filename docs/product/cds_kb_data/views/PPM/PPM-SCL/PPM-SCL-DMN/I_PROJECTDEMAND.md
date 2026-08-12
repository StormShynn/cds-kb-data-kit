---
name: I_PROJECTDEMAND
description: "Projectdemand"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
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
# I_PROJECTDEMAND

**Projectdemand**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandUUID` | ✓ | |  |  |  |  |
| `ProjectDemand` |  | |  |  |  |  |
| `ProjectDemandName` |  | |  |  |  |  |
| `ProjectDemandDescription` |  | |  |  |  |  |
| `ProjectDemandCategory` |  | |  |  |  |  |
| `ProjectDemandType` |  | |  |  |  |  |
| `ReferencedObjectUUID` |  | |  |  |  |  |
| `ProjectDemandStatus` |  | |  |  |  |  |
| `ProjectDemandDateMaintenance` |  | |  |  |  |  |
| `ProjectDemandStartDate` |  | |  |  |  |  |
| `ProjectDemandEndDate` |  | |  |  |  |  |
| `ProjectDemandReleasedDateTime` |  | |  |  |  |  |
| `ProjDmndActualSupplyDate` |  | |  |  |  |  |
| `ProjectDemandPerUnitAmount` |  | |  |  |  |  |
| `ProjectDemandRequestCurrency` |  | |  |  |  |  |
| `ProjectDemandRequestNetAmount` |  | |  |  |  |  |
| `ProjDmndReqNetAmountCurrency` |  | |  |  |  |  |
| `ProjectDemandOverallAmount` |  | |  |  |  |  |
| `ProjDmndRequestedQuantity` |  | |  |  |  |  |
| `ProjDmndRequestedQuantityUnit` |  | |  |  |  |  |
| `PriceUnitQty` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ProjectDemandLastChangedByUser` |  | |  |  |  |  |
| `ProjDemandLastChangeDateTime` |  | |  |  |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `ProjectDemandOverallRevenue` |  | |  |  |  |  |
| `ProjDmndOverallRevenueCurrency` |  | |  |  |  |  |
| `ProjDmndDataModelVersion` |  | |  |  |  |  |
| `_Material` | | ✓ | | | | |
| `_Service` | | ✓ | | | | |
| `_Work` | | ✓ | | | | |
| `_Expense` | | ✓ | | | | |
| `_ProjDmndQuantityUnit` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProjectDemandCategory` | | ✓ | | | | |
| `_ProjectDemandType` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_ProjectDemandStatus` | | ✓ | | | | |
| `_ProjectDemandCurrency` | | ✓ | | | | |
| `_ProjectDemandNetCurrency` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganisation` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_EnterpriseProjectForUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_ProjectDemandMaterial` | [0..1] |
| `_Service` | `I_ProjectDemandService` | [0..1] |
| `_Work` | `I_ProjectDemandWork` | [0..1] |
| `_Expense` | `I_ProjectDemandExpense` | [0..1] |
| `_ProjectDemandExtension` | `E_ProjectDemand` | [1..1] |
| `_ProjDmndQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@AbapCatalog: {
    sqlViewName: 'IPROJECTDEMAND',
    compiler.compareFilter: true,
    dataMaintenance: #RESTRICTED,
    preserveKey:true
}

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   semanticKey:       [ 'ProjectDemand' ],
   representativeKey: 'ProjectDemandUUID',
   sapObjectNodeType.name: 'ProjectDemand',
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
  
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Project Demand'
define view I_ProjectDemand
  as select from R_ProjectDemand 

  // BO internal associations
  association [0..1] to I_ProjectDemandMaterial    as _Material // will be limited by coding, validation required
                                                                                on _Material.ProjectDemandUUID = $projection.ProjectDemandUUID

  association [0..1] to I_ProjectDemandService     as _Service  // will be limited by coding, validation required
                                                                                on _Service.ProjectDemandUUID = $projection.ProjectDemandUUID

  association [0..1] to I_ProjectDemandWork        as _Work     // will be limited by coding, validation required
                                                                                on _Work.ProjectDemandUUID = $projection.ProjectDemandUUID
  
  association [0..1] to I_ProjectDemandExpense     as _Expense                  on _Expense.ProjectDemandUUID = $projection.ProjectDemandUUID  

  // extention
  association [1..1] to E_ProjectDemand            as _ProjectDemandExtension   on $projection.ProjectDemandUUID = _ProjectDemandExtension.ProjectDemandUUID

  // external associations
//  association [1..1] to I_ProjectDemandCategory    as _ProjectDemandCategory    on $projection.ProjectDemandCategory = _ProjectDemandCategory.ProjectDemandCategory
//  association [1..1] to I_ProjectDemandType        as _ProjectDemandType        on $projection.ProjectDemandType = _ProjectDemandType.ProjectDemandType
//  association [0..1] to I_EnterpriseProjectElement as _WorkPackage              on $projection.ReferencedObjectUUID = _WorkPackage.ProjectElementUUID
//  association [1..1] to I_ProjectDemandStatus      as _ProjectDemandStatus      on $projection.ProjectDemandStatus = _ProjectDemandStatus.ProjectDemandStatus
//  association [0..1] to I_Currency                 as _ProjectDemandCurrency    on $projection.ProjectDemandRequestCurrency = _ProjectDemandCurrency.Currency
//  association [0..1] to I_Currency                 as _ProjectDemandNetCurrency on $projection.ProjDmndReqNetAmountCurrency = _ProjectDemandNetCurrency.Currency  
  association [0..1] to I_UnitOfMeasure            as _ProjDmndQuantityUnit     on $projection.ProjDmndRequestedQuantityUnit = _ProjDmndQuantityUnit.UnitOfMeasure
  association [0..1] to I_Plant                    as _Plant                    on $projection.Plant = _Plant.Plant
//  association [0..1] to I_PurchasingGroup          as _PurchasingGroup          on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
//  association [0..1] to I_PurchasingOrganization   as _PurchasingOrganisation   on $projection.PurchasingOrganization = _PurchasingOrganisation.PurchasingOrganization

{

  key ProjectDemandUUID             as ProjectDemandUUID,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #HIGH
      @ObjectModel.text.element: [ 'ProjectDemandName' ]
      ProjectDemand                 as ProjectDemand,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #HIGH
      ProjectDemandName             as ProjectDemandName,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      ProjectDemandDescription      as ProjectDemandDescription,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #MEDIUM
      @ObjectModel.foreignKey.association: '_ProjectDemandCategory'
      ProjectDemandCategory         as ProjectDemandCategory,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #MEDIUM
      @ObjectModel.foreignKey.association: '_ProjectDemandType'
      ProjectDemandType             as ProjectDemandType,

      // usually this is a workpackage in S4CE
      @ObjectModel.foreignKey.association:    '_WorkPackage'
      ReferencedObjectUUID          as ReferencedObjectUUID,
      
      @ObjectModel.foreignKey.association: '_ProjectDemandStatus'
      ProjectDemandStatus           as ProjectDemandStatus,

      ProjectDemandDateMaintenance  as ProjectDemandDateMaintenance,
      ProjectDemandStartDate        as ProjectDemandStartDate,
      ProjectDemandEndDate          as ProjectDemandEndDate,

      ProjectDemandReleasedDateTime as ProjectDemandReleasedDateTime,
      ProjDmndActualSupplyDate      as ProjDmndActualSupplyDate,

      @Semantics: { amount : {currencyCode: 'ProjectDemandRequestCurrency'} }
      ProjectDemandPerUnitAmount    as ProjectDemandPerUnitAmount,

      @ObjectModel.foreignKey.association:    '_ProjectDemandCurrency'
      ProjectDemandRequestCurrency  as ProjectDemandRequestCurrency,

      @Semantics: { amount : {currencyCode: 'ProjDmndReqNetAmountCurrency'} }
      ProjectDemandRequestNetAmount as ProjectDemandRequestNetAmount,

      @ObjectModel.foreignKey.association:    '_ProjectDemandNetCurrency'
      ProjDmndReqNetAmountCurrency  as ProjDmndReqNetAmountCurrency,

      @Semantics: { amount : {currencyCode: 'ProjectDemandRequestCurrency'} }
      ProjectDemandOverallAmount    as ProjectDemandOverallAmount,

      @Semantics: { quantity : {unitOfMeasure: 'ProjDmndRequestedQuantityUnit'} }
      ProjDmndRequestedQuantity     as ProjDmndRequestedQuantity,

      ProjDmndRequestedQuantityUnit as ProjDmndRequestedQuantityUnit,

      PriceUnitQty                  as PriceUnitQty,

      @ObjectModel.foreignKey.association:    '_Plant'
      Plant                         as Plant,

      @ObjectModel.foreignKey.association:    '_PurchasingGroup'
      PurchasingGroup               as PurchasingGroup,

      @ObjectModel.foreignKey.association:    '_PurchasingOrganisation'
      PurchasingOrganization        as PurchasingOrganization,

      @Semantics.user.createdBy: true
      CreatedByUser                 as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime              as CreationDateTime,
            
      @Semantics.user.localInstanceLastChangedBy: true
      LastChangedByUser             as LastChangedByUser,
       
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LastChangeDateTime            as LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      ProjectDemandLastChangedByUser as ProjectDemandLastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      ProjDemandLastChangeDateTime as ProjDemandLastChangeDateTime,
      ProjectUUID,
      
      @Semantics: { amount : {currencyCode: 'ProjDmndOverallRevenueCurrency'} }
      ProjectDemandOverallRevenue    as ProjectDemandOverallRevenue,
      ProjDmndOverallRevenueCurrency as ProjDmndOverallRevenueCurrency,
      ProjDmndDataModelVersion       as ProjDmndDataModelVersion,
      
      // BO internal associations
      _Material,
      _Service,
      _Work,
      _Expense,
      
      // external associations
      _ProjectDemandCategory,
      _ProjectDemandType,
      _WorkPackage,
      _ProjectDemandStatus,
      _ProjectDemandCurrency,
      _ProjectDemandNetCurrency,
      _ProjDmndQuantityUnit,
      _Plant,
      _PurchasingGroup,
      _PurchasingOrganisation,
      _Project,
      @Consumption.hidden: true
      _EnterpriseProjectForUser
//      _ProjectdemandExtension
            
}
```
