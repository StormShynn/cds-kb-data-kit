---
name: I_PERSONWORKAGRMTSRVCCOSTLEVEL
description: "This view provides the prerequisites for answering the following business questions: What is the service cost level of the work agreement?"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSRVCCOSTLEVEL')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: What is the service cost level of the work agreement?"
semantic_vi: "Work Agreement Service Cost Level — CDS view giao diện dựa trên wfd_d_srvcostlvl."
keywords:
  - "work"
  - "agreement"
  - "service"
  - "cost"
  - "level"
  - "person"
  - "start"
  - "date"
  - "agrmt"
  - "authzn"
  - "grpg"
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - bo:salesorder
---
# I_PERSONWORKAGRMTSRVCCOSTLEVEL

**This view provides the prerequisites for answering the following business questions: What is the service cost level of the work agreement?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSRVCCOSTLEVEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` | ✓ | |  | `cast(costlevel.workforce_assgmt_id as persno preserving type)` | `NUMC(8)` | Personnel Number |
| `StartDate` | ✓ | |  | `cast(costlevel.start_date as begda preserving type)` | `DATS(8)` | Start Date |
| `EndDate` | ✓ | |  | `cast(costlevel.end_date as endda preserving type)` | `DATS(8)` | End Date |
| `ServiceCostLevel` |  | |  | `cast(costlevel.cost_level as fco_srv_cost_level preserving type)` | `NUMC(4)` | Service Cost Level |
| `PersonWorkAgrmtAuthznGrpg` |  | |  | `cast('' as vdsk1)` | `CHAR(14)` | Organizational Key |
| `_ServiceCostLevelText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceCostLevelText` | `I_ServiceCostLevelText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSRVCCOSTLEVEL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSRVCCOSTLEVEL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPERWKAGRSVCSTL'
@VDM.viewType:  #BASIC
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION 
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@ObjectModel.sapObjectNodeType.name:'WorkAssignmentDetails'
@EndUserText.label: 'Work Agreement Service Cost Level'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true 
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_PersonWorkAgrmtSrvcCostLevel
 as select from wfd_d_srvcostlvl as costlevel 
 inner join     wfd_d_assgmtdets as assgmtdets on costlevel.workforce_assgmt_id = assgmtdets.workforce_assgmt_id
                                              and costlevel.end_date between assgmtdets.start_date and assgmtdets.end_date
 association[0..*] to I_ServiceCostLevelText   as _ServiceCostLevelText on _ServiceCostLevelText.ServiceCostLevel =  $projection.ServiceCostLevel                             
{
  key cast(costlevel.workforce_assgmt_id as persno preserving type)    as PersonWorkAgreement,
      @Semantics.businessDate.from
  key cast(costlevel.start_date as begda preserving type)              as StartDate,
      @Semantics.businessDate.to
  key cast(costlevel.end_date   as endda preserving type)              as EndDate,
      cast(costlevel.cost_level as fco_srv_cost_level preserving type) as ServiceCostLevel,
      cast('' as vdsk1)                                                as PersonWorkAgrmtAuthznGrpg,
      _ServiceCostLevelText
} 
where assgmtdets.block_ind <> 'X'; 

//as select from P_U_Employmentcostlevel as CostLevel
/* as select from wfd_tf_PerWorkAgSrvCostLevel( p_client : $session.client ) as CostLevel
association[0..*] to I_ServiceCostLevelText as _ServiceCostLevelText on _ServiceCostLevelText.ServiceCostLevel =  $projection.ServiceCostLevel                               

{

key EmploymentInternalID      as PersonWorkAgreement,
    @Semantics.businessDate.from
key StartDate,
    @Semantics.businessDate.to
key EndDate,
    ServiceCostLevel,
    PersonWorkAgrmtAuthznGrpg,
    _ServiceCostLevelText
} */

//
//define view I_PersonWorkAgrmtSrvcCostLevel
//as select from P_U_Employmentcostlevel as CostLevel
//association[0..*] to I_ServiceCostLevelText as _ServiceCostLevelText on _ServiceCostLevelText.ServiceCostLevel =  $projection.ServiceCostLevel                               
//
//{
//
//key EmploymentInternalID      as PersonWorkAgreement,
//    @Semantics.businessDate.from
//key StartDate,
//    @Semantics.businessDate.to
//key EndDate,
//    ServiceCostLevel,
//    PersonWorkAgrmtAuthznGrpg,
//    _ServiceCostLevelText
//}

// inner join pa0001 as PA0001 on CostLevel.pernr = pa0001.pernr
//                                and pa0001.sprps <> 'X'
//                                and CostLevel.endda between pa0001.begda and pa0001.endda
//association[0..*] to I_ServiceCostLevelText as _ServiceCostLevelText on _ServiceCostLevelText.ServiceCostLevel =  CostLevel.cost_level                               
//
//{
//
//key CostLevel.pernr      as PersonWorkAgreement,
//    @Semantics.businessDate.from
//key CostLevel.begda      as StartDate,
//    @Semantics.businessDate.to
//key CostLevel.endda      as EndDate,
//    CostLevel.cost_level as ServiceCostLevel,
//    pa0001.vdsk1 as PersonWorkAgrmtAuthznGrpg,
//    _ServiceCostLevelText
//}
//where
//CostLevel.sprps <> 'X'
```
