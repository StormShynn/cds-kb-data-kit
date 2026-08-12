---
name: I_PERSONWORKAGRMTSTATUS
description: "This view provides the prerequisites for answering the following business questions: When is the workagreement active or inactive?"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUS')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: When is the workagreement active or inactive?"
semantic_vi: "Work Agreement Status — CDS view giao diện dựa trên wfd_d_assgmtdets."
keywords:
  - "work"
  - "agreement"
  - "status"
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
# I_PERSONWORKAGRMTSTATUS

**This view provides the prerequisites for answering the following business questions: When is the workagreement active or inactive?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` | ✓ | |  | `cast(dets.workforce_assgmt_id as persno preserving type )` | `NUMC(8)` | Personnel Number |
| `StartDate` | ✓ | |  | `cast(dets.start_date as begda preserving type )` | `DATS(8)` | Start Date |
| `EndDate` | ✓ | |  | `cast(dets.end_date as endda preserving type )` | `DATS(8)` | End Date |
| `WorkAgreementStatus` |  | |  | `case dets.employment_status when '1' then cast('1' as /shcm/employment_status ) else cast('0' as /shcm/employment_status ) end` | `CHAR(1)` | Model S: Employment Status |
| `PersonWorkAgrmtAuthznGrpg` |  | |  | `cast('' as vdsk1 )` | `CHAR(14)` | Organizational Key |
| `_PersonWorkAgrmtStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PersonWorkAgrmtStatusText` | `I_PersonWorkAgrmtStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPERWKAGRSTATUS'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: [ '_PersonWorkAgrmtStatusText' ]
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@EndUserText.label: 'Work Agreement Status'
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@ObjectModel.sapObjectNodeType.name:'WorkAssignmentDetails'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Consumption.dbHints:['NO_JOIN_THRU_JOIN']
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_PersonWorkAgrmtStatus
  as select from wfd_d_assgmtdets as dets
  association [0..*] to I_PersonWorkAgrmtStatusText as _PersonWorkAgrmtStatusText on _PersonWorkAgrmtStatusText.WorkAgreementStatus = $projection.WorkAgreementStatus  
{
  key  cast(dets.workforce_assgmt_id as persno preserving type ) as PersonWorkAgreement,
       @Semantics.businessDate.from
  key  cast(dets.start_date          as begda preserving type )  as StartDate,
       @Semantics.businessDate.to
  key  cast(dets.end_date            as endda preserving type )  as EndDate,
       case dets.employment_status
       when '1' then cast('1' as /shcm/employment_status )
       else          cast('0' as /shcm/employment_status )
       end                                                       as WorkAgreementStatus,
       cast('' as vdsk1 )                                        as PersonWorkAgrmtAuthznGrpg,
       _PersonWorkAgrmtStatusText  
} 
where dets.block_ind = '' ;

//  as select from P_PersonWorkAgrmtStatus
/*  as select from WFD_TF_PersonWorkAgrmtStatus(p_client:$session.client) as status
  association [0..*] to I_PersonWorkAgrmtStatusText as _PersonWorkAgrmtStatusText on _PersonWorkAgrmtStatusText.WorkAgreementStatus = $projection.WorkAgreementStatus
{
  key  PersonWorkAgreement,
       @Semantics.businessDate.from
  key  StartDate,
       @Semantics.businessDate.to
  key  EndDate,
       WorkAgreementStatus,
       PersonWorkAgrmtAuthznGrpg,
       _PersonWorkAgrmtStatusText
} */

//define view I_PersonWorkAgrmtStatus
//  as select from P_PersonWorkAgrmtStatus
//{
//  key  PersonWorkAgreement,
//       @Semantics.businessDate.from
//  key  StartDate,
//       @Semantics.businessDate.to
//  key  EndDate,
//       WorkAgreementStatus,
//       PersonWorkAgrmtAuthznGrpg,
//       _PersonWorkAgrmtStatusText
//}
//

// as select
//   from pa0000 as PA0000
//    inner join pa0001 as PA0001 on pa0000.pernr = pa0001.pernr
//                                and pa0001.sprps <> 'X'
//                                and pa0000.endda between pa0001.begda and pa0001.endda
//    association [0..*] to I_PersonWorkAgrmtStatusText as _PersonWorkAgrmtStatusText on _PersonWorkAgrmtStatusText.WorkAgreementStatus = $projection.WorkAgreementStatus
//
//    {
//    key pa0000.pernr as PersonWorkAgreement,
//    @Semantics.businessDate.from
//    key pa0000.begda as StartDate,
//    @Semantics.businessDate.to
//    key pa0000.endda as EndDate,
//    case pa0000.stat2
//     when '3'
//     then
//         cast('1' as /shcm/employment_status )
//     else
//         cast('0' as /shcm/employment_status )
//    end as WorkAgreementStatus ,
//    pa0001.vdsk1 as PersonWorkAgrmtAuthznGrpg,
//    _PersonWorkAgrmtStatusText
//}
//where
// pa0000.sprps <> 'X'
```
